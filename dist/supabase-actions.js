var k = Object.defineProperty;
var P = (u, t, e) => t in u ? k(u, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : u[t] = e;
var w = (u, t, e) => P(u, typeof t != "symbol" ? t + "" : t, e);
import { z as o } from "zod";
import { g as y, C as E, A as _ } from "./actions-registery-CrGIlqUX.js";
import { isEmpty as f, kebabCase as x, set as I } from "lodash-es";
const h = class h {
  // SOF marker (2) + segment length (2) + precision (1) + height (2) + width (2) = 9 bytes from marker
  constructor(t, e, r) {
    this.appId = t, this.userId = e, this.supabase = r;
  }
  appendUpdatedAtToUrl(t, e) {
    if (f(t))
      return "";
    const r = new URL(t), a = new Date(e).getTime();
    return r.searchParams.set("t", a.toString()), `${r.origin}${r.pathname}${r.search}${r.hash}`;
  }
  getBufferFromBase64(t) {
    try {
      const e = t.split(",")[1] || t;
      return Buffer.from(e, "base64");
    } catch {
      throw new Error("Invalid base64 string format");
    }
  }
  getMimeType(t) {
    var a;
    const e = ((a = t.split(".").pop()) == null ? void 0 : a.toLowerCase()) || "";
    return {
      jpg: "image/jpeg",
      jpeg: "image/jpeg",
      png: "image/png",
      webp: "image/webp",
      gif: "image/gif",
      tiff: "image/tiff",
      svg: "image/svg+xml"
    }[e] || "application/octet-stream";
  }
  /**
   * Extract image dimensions from buffer by reading binary headers.
   * Supports PNG, JPEG, GIF, and WebP without external dependencies.
   */
  getImageDimensions(t) {
    if (t.length >= h.MIN_PNG_LENGTH && t[0] === 137 && t[1] === 80 && t[2] === 78 && t[3] === 71)
      return {
        width: t.readUInt32BE(16),
        height: t.readUInt32BE(20)
      };
    if (t.length >= h.MIN_GIF_LENGTH && t[0] === 71 && t[1] === 73 && t[2] === 70)
      return {
        width: t.readUInt16LE(6),
        height: t.readUInt16LE(8)
      };
    if (t.length >= 12 && t[0] === 82 && t[1] === 73 && t[2] === 70 && t[3] === 70 && t[8] === 87 && t[9] === 69 && t[10] === 66 && t[11] === 80) {
      if (t.length >= h.MIN_WEBP_VP8L_LENGTH && t[12] === 86 && t[13] === 80 && t[14] === 56 && t[15] === 76) {
        const e = t.readUInt32LE(21);
        return {
          width: (e & 16383) + 1,
          height: (e >> 14 & 16383) + 1
        };
      }
      if (t.length >= h.MIN_WEBP_VP8X_LENGTH && t[12] === 86 && t[13] === 80 && t[14] === 56 && t[15] === 88)
        return {
          width: 1 + (t[24] | t[25] << 8 | t[26] << 16),
          height: 1 + (t[27] | t[28] << 8 | t[29] << 16)
        };
      if (t.length >= h.MIN_WEBP_VP8_LENGTH && t[12] === 86 && t[13] === 80 && t[14] === 56 && t[15] === 32)
        return {
          width: t.readUInt16LE(26) & 16383,
          height: t.readUInt16LE(28) & 16383
        };
    }
    if (t.length >= 2 && t[0] === 255 && t[1] === 216) {
      let e = 2;
      for (; e < t.length - 1; ) {
        if (t[e] !== 255) {
          e++;
          continue;
        }
        const r = t[e + 1];
        if (r >= 192 && r <= 195 || r >= 197 && r <= 199 || r >= 201 && r <= 203 || r >= 205 && r <= 207) {
          if (e + h.MIN_JPEG_SOF_BYTES_FROM_MARKER <= t.length)
            return {
              width: t.readUInt16BE(e + 7),
              height: t.readUInt16BE(e + 5)
            };
          break;
        }
        if (e + 4 > t.length)
          break;
        const a = t.readUInt16BE(e + 2);
        e += 2 + a;
      }
    }
    return { width: 0, height: 0 };
  }
  /**
   * Upload an image file using UPLOAD_TO_STORAGE action
   * Uploads the image as-is without server-side processing for cross-platform compatibility
   */
  async uploadImageFile(t, e, r, a) {
    try {
      const s = this.getBufferFromBase64(t), i = this.getMimeType(r);
      if (!["image/jpeg", "image/png", "image/webp", "image/gif", "image/tiff"].includes(i))
        throw new Error(`Invalid image format: ${i}`);
      const d = r.split("."), n = d.length > 1 ? d.slice(0, -1).join(".") : r, l = d.length > 1 ? d[d.length - 1].toLowerCase() : "png", g = `${x(n)}.${l}`, p = this.appId, m = e ? `${p}/${e}` : p, A = y("UPLOAD_TO_STORAGE");
      if (!A)
        throw new Error("UPLOAD_TO_STORAGE action not found");
      A.setContext({ appId: this.appId, userId: this.userId });
      const U = await A.execute({
        file: s.toString("base64"),
        fileName: g,
        contentType: i,
        folder: m
      });
      if (U.error)
        throw new Error(U.error);
      const { width: T, height: b } = this.getImageDimensions(s);
      return {
        url: U.data.url,
        thumbnailUrl: U.data.url,
        size: s.length,
        width: T,
        height: b,
        mimeType: i
      };
    } catch (s) {
      return console.error("Upload image error:", s), { error: s instanceof Error ? s.message : "Unknown error" };
    }
  }
  /**
   * Upload an SVG file using UPLOAD_TO_STORAGE action
   */
  async uploadSvgFile(t, e, r) {
    try {
      const a = this.getBufferFromBase64(t);
      let s, i;
      try {
        const A = a.toString("utf-8"), U = A.match(/\bwidth=["'](\d+)/), T = A.match(/\bheight=["'](\d+)/);
        U && (s = parseInt(U[1], 10)), T && (i = parseInt(T[1], 10));
      } catch {
      }
      const c = r.split("."), d = c.length > 1 ? c.slice(0, -1).join(".") : r, n = `${x(d)}.svg`, l = this.appId, g = e ? `${l}/${e}` : l, p = y("UPLOAD_TO_STORAGE");
      if (!p)
        throw new Error("UPLOAD_TO_STORAGE action not found");
      p.setContext({ appId: this.appId, userId: this.userId });
      const m = await p.execute({
        file: a.toString("base64"),
        fileName: n,
        contentType: "image/svg+xml",
        folder: g
      });
      if (m.error)
        throw new Error(m.error);
      return {
        url: m.data.url,
        thumbnailUrl: m.data.url,
        size: a.length,
        width: s,
        height: i,
        mimeType: "image/svg+xml"
      };
    } catch (a) {
      return console.error("SVG upload error:", a), { error: a instanceof Error ? a.message : "Unknown error" };
    }
  }
  async upload({
    file: t,
    folderId: e,
    name: r,
    optimize: a = !0
  }) {
    var s;
    try {
      const c = r.toLowerCase().endsWith(".svg") || t.includes("data:image/svg+xml") ? await this.uploadSvgFile(t, e, r) : await this.uploadImageFile(t, e, r, a ?? !0);
      if ("error" in c)
        return c;
      const d = {
        name: r,
        app: this.appId,
        url: c.url,
        thumbnailUrl: c.thumbnailUrl,
        size: (s = c.size) == null ? void 0 : s.toString(),
        width: c.width,
        height: c.height,
        format: c.mimeType.split("/")[1],
        folderId: e,
        type: c.mimeType.startsWith("image/") ? "image" : "file",
        createdBy: this.userId,
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      }, { data: n, error: l } = await this.supabase.from("app_assets").insert(d).select("*").single();
      if (l)
        throw new Error(`Failed to store asset in database: ${l.message}`);
      return {
        id: n.id,
        name: n.name,
        type: n.type,
        url: this.appendUpdatedAtToUrl(n.url, n.updatedAt),
        size: n.size,
        thumbnailUrl: this.appendUpdatedAtToUrl(n.thumbnailUrl || "", n.updatedAt),
        width: n.width,
        height: n.height,
        format: n.format,
        folderId: n.folderId,
        createdBy: n.createdBy || "",
        createdAt: n.createdAt,
        updatedAt: n.updatedAt
      };
    } catch (i) {
      return { error: i instanceof Error ? i.message : "Unknown error occurred" };
    }
  }
  async getAsset({ id: t }) {
    try {
      const { data: e, error: r } = await this.supabase.from("app_assets").select("*").eq("id", t).eq("app", this.appId).single();
      if (r)
        throw new Error(`Failed to fetch asset: ${r.message}`);
      return I(e, "url", this.appendUpdatedAtToUrl(e.url, e.updatedAt)), I(e, "thumbnailUrl", this.appendUpdatedAtToUrl(e.thumbnailUrl || "", e.updatedAt)), e;
    } catch (e) {
      return { error: e instanceof Error ? e.message : "Unknown error occurred" };
    }
  }
  async getAssets({
    search: t = "",
    page: e = 1,
    limit: r = 20
  } = {}) {
    try {
      const a = (e - 1) * r;
      let s = this.supabase.from("app_assets").select("*", { count: "exact" }).eq("app", this.appId).order("updatedAt", { ascending: !1 });
      t && (s = s.or(`name.ilike.%${t}%,description.ilike.%${t}%`));
      const { data: i, error: c, count: d } = await s.range(a, a + r - 1);
      if (c)
        throw new Error(c.message);
      return {
        assets: i.map((l) => (I(l, "url", this.appendUpdatedAtToUrl(l.url, l.updatedAt)), I(l, "thsupabaseumbnailUrl", this.appendUpdatedAtToUrl(l.thumbnailUrl || "", l.updatedAt)), l)),
        total: d || 0,
        page: e,
        pageSize: r
      };
    } catch (a) {
      throw console.error("Error fetching assets:", a), a;
    }
  }
  async deleteAsset({ id: t }) {
    try {
      const { data: e, error: r } = await this.supabase.from("app_assets").select("*").eq("id", t).eq("app", this.appId).single();
      if (r)
        throw new Error(`Failed to fetch asset: ${r.message}`);
      if (e.url)
        try {
          const i = new URL(e.url).pathname.split("/"), c = i.indexOf("dam-assets");
          if (c !== -1) {
            const d = i.slice(c + 1).join("/"), n = y("DELETE_FROM_STORAGE");
            if (n && (n.setContext({ appId: this.appId, userId: this.userId }), await n.execute({ key: d })), e.thumbnailUrl && e.thumbnailUrl !== e.url) {
              const g = new URL(e.thumbnailUrl).pathname.split("/"), p = g.indexOf("dam-assets");
              if (p !== -1) {
                const m = g.slice(p + 1).join("/");
                n && await n.execute({ key: m });
              }
            }
          }
        } catch (s) {
          console.warn("Failed to delete from storage, continuing with database deletion:", s);
        }
      const { error: a } = await this.supabase.from("app_assets").delete().eq("id", t);
      if (a)
        throw new Error(`Failed to delete asset: ${a.message}`);
      return { success: !0 };
    } catch (e) {
      return { error: e instanceof Error ? e.message : "Unknown error occurred" };
    }
  }
  async updateAsset({
    id: t,
    file: e,
    description: r
  }) {
    var a, s;
    try {
      const { data: i, error: c } = await this.supabase.from("app_assets").select("*").eq("id", t).single();
      if (c)
        throw new Error(`Failed to fetch asset: ${c.message}`);
      const d = {};
      if (r !== void 0 && (d.description = r, d.updatedAt = (/* @__PURE__ */ new Date()).toISOString()), e) {
        const p = ((a = i.format) == null ? void 0 : a.toLowerCase()) === "svg" || e.includes("data:image/svg+xml") ? await this.uploadSvgFile(e, i.folderId, i.name) : await this.uploadImageFile(e, i.folderId, i.name, !0);
        if ("error" in p)
          return p;
        d.url = p.url, d.thumbnailUrl = p.thumbnailUrl, d.size = (s = p.size) == null ? void 0 : s.toString(), d.width = p.width, d.height = p.height, d.format = p.mimeType.split("/")[1], d.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
      }
      const { data: n, error: l } = await this.supabase.from("app_assets").update(d).eq("id", t).select().single();
      if (l)
        throw new Error(`Failed to update asset: ${l.message}`);
      return I(n, "url", this.appendUpdatedAtToUrl(n.url, n.updatedAt)), I(
        n,
        "thumbnailUrl",
        this.appendUpdatedAtToUrl(n.thumbnailUrl || "", n.updatedAt)
      ), n;
    } catch (i) {
      return { error: i instanceof Error ? i.message : "Unknown error occurred" };
    }
  }
};
// Minimum buffer length checks per image format for dimension extraction
w(h, "MIN_PNG_LENGTH", 24), // PNG signature (8) + IHDR chunk header (8) + width (4) + height (4)
w(h, "MIN_GIF_LENGTH", 10), // GIF signature (6) + width (2) + height (2)
w(h, "MIN_WEBP_VP8L_LENGTH", 25), // Reads 4 bytes at offset 21: RIFF (12) + VP8L header (4) + flag (1) + 4 bytes read = 21 + 4
w(h, "MIN_WEBP_VP8X_LENGTH", 30), // Reads 6 bytes at offset 24: RIFF (12) + VP8X header (4) + flags (4) + width/height (3+3) = 24 + 6
w(h, "MIN_WEBP_VP8_LENGTH", 30), // Reads 4 bytes at offset 26: RIFF (12) + VP8 header (4) + frame tag (3) + start (3) + 4 bytes read = 26 + 4
w(h, "MIN_JPEG_SOF_BYTES_FROM_MARKER", 9);
let S = h;
const O = o.object({
  name: o.string(),
  file: o.string(),
  folderId: o.string().optional().nullable(),
  optimize: o.boolean().optional()
});
class D extends E {
  constructor(t) {
    super(), this.supabase = t;
  }
  getValidationSchema() {
    return O;
  }
  async execute(t) {
    try {
      if (!this.context)
        return { error: "Context not set", status: 400 };
      const { appId: e, userId: r } = this.context;
      if (!r)
        return { error: "User ID is required", status: 401 };
      const s = await new S(e, r, this.supabase).upload(t);
      return "error" in s ? { error: s.error, status: 400 } : s;
    } catch (e) {
      return console.error("UPLOAD_ASSET error:", e), { error: e instanceof Error ? e.message : "Unknown error", status: 500 };
    }
  }
}
const L = o.object({
  id: o.string()
});
class G extends E {
  constructor(t) {
    super(), this.supabase = t;
  }
  getValidationSchema() {
    return L;
  }
  async execute(t) {
    try {
      if (!this.context)
        return { error: "Context not set", status: 400 };
      const { appId: e, userId: r } = this.context;
      if (!r)
        return { error: "User ID is required", status: 401 };
      const s = await new S(e, r, this.supabase).getAsset(t);
      return "error" in s ? { error: s.error, status: 400 } : s;
    } catch (e) {
      return console.error("GET_ASSET error:", e), { error: e instanceof Error ? e.message : "Unknown error", status: 500 };
    }
  }
}
const N = o.object({
  search: o.string().optional(),
  page: o.number().optional(),
  limit: o.number().optional()
});
class F extends E {
  constructor(t) {
    super(), this.supabase = t;
  }
  getValidationSchema() {
    return N;
  }
  async execute(t) {
    try {
      if (!this.context)
        return { error: "Context not set", status: 400 };
      const { appId: e, userId: r } = this.context;
      if (!r)
        return { error: "User ID is required", status: 401 };
      const s = await new S(e, r, this.supabase).getAssets(t);
      return "error" in s ? { error: s.error, status: 400 } : s;
    } catch (e) {
      return console.error("GET_ASSETS error:", e), { error: e instanceof Error ? e.message : "Unknown error", status: 500 };
    }
  }
}
const M = o.object({
  id: o.string()
});
class v extends E {
  constructor(t) {
    super(), this.supabase = t;
  }
  getValidationSchema() {
    return M;
  }
  async execute(t) {
    try {
      if (!this.context)
        return { error: "Context not set", status: 400 };
      const { appId: e, userId: r } = this.context;
      if (!r)
        return { error: "User ID is required", status: 401 };
      const s = await new S(e, r, this.supabase).deleteAsset(t);
      return "error" in s ? { error: s.error, status: 400 } : s;
    } catch (e) {
      return console.error("DELETE_ASSET error:", e), { error: e instanceof Error ? e.message : "Unknown error", status: 500 };
    }
  }
}
const B = o.object({
  id: o.string(),
  file: o.string().optional(),
  description: o.string().optional()
});
class $ extends E {
  constructor(t) {
    super(), this.supabase = t;
  }
  getValidationSchema() {
    return B;
  }
  async execute(t) {
    try {
      if (!this.context)
        return { error: "Context not set", status: 400 };
      const { appId: e, userId: r } = this.context;
      if (!r)
        return { error: "User ID is required", status: 401 };
      const s = await new S(e, r, this.supabase).updateAsset(t);
      return "error" in s ? { error: s.error, status: 400 } : s;
    } catch (e) {
      return console.error("UPDATE_ASSET error:", e), { error: e instanceof Error ? e.message : "Unknown error", status: 500 };
    }
  }
}
const R = o.object({
  userId: o.string()
});
class j extends E {
  constructor(t) {
    super(), this.supabase = t;
  }
  getValidationSchema() {
    return R;
  }
  async execute(t) {
    var e, r, a, s, i, c;
    try {
      const { userId: d } = t, { data: n, error: l } = await this.supabase.auth.admin.getUserById(d);
      return l ? {
        data: {
          id: "unknown",
          email: "unknown@chaibuilder.com",
          name: "Unknown",
          avatar: ""
        },
        status: 200
      } : {
        data: {
          id: ((e = n.user) == null ? void 0 : e.id) || "unknown",
          email: ((r = n.user) == null ? void 0 : r.email) || "unknown@chaibuilder.com",
          name: ((s = (a = n.user) == null ? void 0 : a.user_metadata) == null ? void 0 : s.name) || "Unknown",
          avatar: ((c = (i = n.user) == null ? void 0 : i.user_metadata) == null ? void 0 : c.avatar_url) || ""
        },
        status: 200
      };
    } catch {
      return {
        data: {
          id: "unknown",
          email: "unknown@chaibuilder.com",
          name: "Unknown",
          avatar: ""
        },
        status: 200
      };
    }
  }
}
const C = o.object({
  email: o.string().email(),
  oldPassword: o.string().min(1, "Old password is required"),
  newPassword: o.string().min(8, "New password must be at least 8 characters"),
  confirmPassword: o.string().min(1, "Confirm password is required")
}).refine((u) => u.newPassword === u.confirmPassword, {
  message: "Confirm password does not match",
  path: ["confirmPassword"]
});
class V extends E {
  constructor(t) {
    super(), this.supabase = t;
  }
  getValidationSchema() {
    return C;
  }
  async execute(t) {
    try {
      const { email: e, oldPassword: r, newPassword: a } = t, { error: s } = await this.supabase.auth.signInWithPassword({
        email: e,
        password: r
      });
      if (s)
        throw new _("Current password is incorrect", "INVALID_PASSWORD", 400);
      const { error: i } = await this.supabase.auth.updateUser({
        password: a
      });
      if (i)
        throw new _(i.message || "Failed to update password", "UPDATE_FAILED", 400);
      return {
        data: { message: "Password changed successfully" },
        status: 200
      };
    } catch (e) {
      throw e;
    }
  }
}
const q = o.object({
  key: o.string()
  // Storage key/path to delete
});
class z extends E {
  constructor(e) {
    super();
    w(this, "bucketName", "dam-assets");
    this.supabase = e;
  }
  getValidationSchema() {
    return q;
  }
  async execute(e) {
    try {
      const { key: r } = e, { error: a } = await this.supabase.storage.from(this.bucketName).remove([r]);
      return a ? {
        error: `Failed to delete from Supabase Storage: ${a.message}`,
        status: 500
      } : {
        data: { success: !0 },
        status: 200
      };
    } catch (r) {
      return console.error("DELETE_FROM_STORAGE error:", r), {
        error: r instanceof Error ? r.message : "Unknown error",
        status: 500
      };
    }
  }
}
const H = o.object({
  file: o.string(),
  // Base64 string
  fileName: o.string(),
  contentType: o.string().optional(),
  folder: o.string().optional(),
  metadata: o.record(o.string(), o.any()).optional()
});
class W extends E {
  constructor(e) {
    super();
    w(this, "bucketName", "dam-assets");
    this.supabase = e;
  }
  getValidationSchema() {
    return H;
  }
  async execute(e) {
    try {
      if (!this.context)
        return { error: "Context not set", status: 400 };
      const { appId: r } = this.context, { file: a, fileName: s, contentType: i, folder: c, metadata: d } = e;
      let n;
      if (typeof a == "string") {
        const A = a.split(",")[1] || a;
        n = Buffer.from(A, "base64");
      } else
        n = a;
      const l = c ? `${c}/${s}` : `${r}/${s}`, { data: g, error: p } = await this.supabase.storage.from(this.bucketName).upload(l, n, {
        contentType: i || "application/octet-stream",
        upsert: !0,
        ...d && { metadata: d }
      });
      if (p)
        return {
          error: `Failed to upload to Supabase Storage: ${p.message}`,
          status: 500
        };
      const {
        data: { publicUrl: m }
      } = this.supabase.storage.from(this.bucketName).getPublicUrl(l);
      return {
        data: {
          url: m,
          key: g.path,
          size: n.length,
          metadata: d
        },
        status: 200
      };
    } catch (r) {
      return console.error("UPLOAD_TO_STORAGE error:", r), {
        error: r instanceof Error ? r.message : "Unknown error",
        status: 500
      };
    }
  }
}
const Q = (u) => ({
  GET_CHAI_USER: new j(u),
  CHANGE_PASSWORD: new V(u)
}), Z = (u) => ({
  // Asset management actions
  UPLOAD_ASSET: new D(u),
  GET_ASSET: new G(u),
  GET_ASSETS: new F(u),
  DELETE_ASSET: new v(u),
  UPDATE_ASSET: new $(u),
  // Generic storage actions
  UPLOAD_TO_STORAGE: new W(u),
  DELETE_FROM_STORAGE: new z(u)
});
export {
  z as DeleteFromStorageAction,
  Q as SupabaseAuthActions,
  Z as SupabaseStorageActions,
  W as UploadToStorageAction
};
