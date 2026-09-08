import { PgColumn } from 'drizzle-orm/pg-core';
import { PgSequence } from 'drizzle-orm/pg-core';
import { PgTableWithColumns } from 'drizzle-orm/pg-core';
import { PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import { z } from 'zod';

export declare class ActionError extends Error {
    code: string;
    status: number;
    error?: unknown | undefined;
    constructor(message: string, code?: string, status?: number, error?: unknown | undefined);
}

declare const aiLogs: PgTableWithColumns<    {
name: "ai_logs";
schema: undefined;
columns: {
id: PgColumn<    {
name: "id";
tableName: "ai_logs";
dataType: "number";
columnType: "PgBigInt53";
data: number;
driverParam: string | number;
notNull: true;
hasDefault: true;
isPrimaryKey: true;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: "byDefault";
generated: undefined;
}, {}, {}>;
createdAt: PgColumn<    {
name: "createdAt";
tableName: "ai_logs";
dataType: "string";
columnType: "PgTimestampString";
data: string;
driverParam: string;
notNull: true;
hasDefault: true;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
model: PgColumn<    {
name: "model";
tableName: "ai_logs";
dataType: "string";
columnType: "PgText";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: [string, ...string[]];
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
totalDuration: PgColumn<    {
name: "totalDuration";
tableName: "ai_logs";
dataType: "string";
columnType: "PgNumeric";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
error: PgColumn<    {
name: "error";
tableName: "ai_logs";
dataType: "string";
columnType: "PgText";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: [string, ...string[]];
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
totalTokens: PgColumn<    {
name: "totalTokens";
tableName: "ai_logs";
dataType: "string";
columnType: "PgNumeric";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
tokenUsage: PgColumn<    {
name: "tokenUsage";
tableName: "ai_logs";
dataType: "json";
columnType: "PgJsonb";
data: unknown;
driverParam: unknown;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
user: PgColumn<    {
name: "user";
tableName: "ai_logs";
dataType: "string";
columnType: "PgText";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: [string, ...string[]];
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
client: PgColumn<    {
name: "client";
tableName: "ai_logs";
dataType: "string";
columnType: "PgUUID";
data: string;
driverParam: string;
notNull: false;
hasDefault: true;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
cost: PgColumn<    {
name: "cost";
tableName: "ai_logs";
dataType: "number";
columnType: "PgDoublePrecision";
data: number;
driverParam: string | number;
notNull: false;
hasDefault: true;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
prompt: PgColumn<    {
name: "prompt";
tableName: "ai_logs";
dataType: "string";
columnType: "PgText";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: [string, ...string[]];
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
app: PgColumn<    {
name: "app";
tableName: "ai_logs";
dataType: "string";
columnType: "PgUUID";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
};
dialect: "pg";
}>;

declare const appAssets: PgTableWithColumns<    {
name: "app_assets";
schema: undefined;
columns: {
id: PgColumn<    {
name: "id";
tableName: "app_assets";
dataType: "string";
columnType: "PgUUID";
data: string;
driverParam: string;
notNull: true;
hasDefault: true;
isPrimaryKey: true;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
app: PgColumn<    {
name: "app";
tableName: "app_assets";
dataType: "string";
columnType: "PgUUID";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
name: PgColumn<    {
name: "name";
tableName: "app_assets";
dataType: "string";
columnType: "PgText";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: [string, ...string[]];
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
description: PgColumn<    {
name: "description";
tableName: "app_assets";
dataType: "string";
columnType: "PgText";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: [string, ...string[]];
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
url: PgColumn<    {
name: "url";
tableName: "app_assets";
dataType: "string";
columnType: "PgText";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: [string, ...string[]];
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
size: PgColumn<    {
name: "size";
tableName: "app_assets";
dataType: "string";
columnType: "PgText";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: [string, ...string[]];
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
folderId: PgColumn<    {
name: "folderId";
tableName: "app_assets";
dataType: "string";
columnType: "PgText";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: [string, ...string[]];
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
thumbnailUrl: PgColumn<    {
name: "thumbnailUrl";
tableName: "app_assets";
dataType: "string";
columnType: "PgText";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: [string, ...string[]];
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
duration: PgColumn<    {
name: "duration";
tableName: "app_assets";
dataType: "string";
columnType: "PgNumeric";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
format: PgColumn<    {
name: "format";
tableName: "app_assets";
dataType: "string";
columnType: "PgText";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: [string, ...string[]];
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
width: PgColumn<    {
name: "width";
tableName: "app_assets";
dataType: "string";
columnType: "PgNumeric";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
height: PgColumn<    {
name: "height";
tableName: "app_assets";
dataType: "string";
columnType: "PgNumeric";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
createdBy: PgColumn<    {
name: "createdBy";
tableName: "app_assets";
dataType: "string";
columnType: "PgText";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: [string, ...string[]];
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
createdAt: PgColumn<    {
name: "createdAt";
tableName: "app_assets";
dataType: "string";
columnType: "PgTimestampString";
data: string;
driverParam: string;
notNull: true;
hasDefault: true;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
type: PgColumn<    {
name: "type";
tableName: "app_assets";
dataType: "string";
columnType: "PgText";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: [string, ...string[]];
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
updatedAt: PgColumn<    {
name: "updatedAt";
tableName: "app_assets";
dataType: "string";
columnType: "PgTimestampString";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
};
dialect: "pg";
}>;

declare const appFormSubmissions: PgTableWithColumns<    {
name: "app_form_submissions";
schema: undefined;
columns: {
id: PgColumn<    {
name: "id";
tableName: "app_form_submissions";
dataType: "string";
columnType: "PgUUID";
data: string;
driverParam: string;
notNull: true;
hasDefault: true;
isPrimaryKey: true;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
createdAt: PgColumn<    {
name: "createdAt";
tableName: "app_form_submissions";
dataType: "string";
columnType: "PgTimestampString";
data: string;
driverParam: string;
notNull: true;
hasDefault: true;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
app: PgColumn<    {
name: "app";
tableName: "app_form_submissions";
dataType: "string";
columnType: "PgUUID";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
formData: PgColumn<    {
name: "formData";
tableName: "app_form_submissions";
dataType: "json";
columnType: "PgJson";
data: unknown;
driverParam: unknown;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
additionalData: PgColumn<    {
name: "additionalData";
tableName: "app_form_submissions";
dataType: "json";
columnType: "PgJson";
data: unknown;
driverParam: unknown;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
formName: PgColumn<    {
name: "formName";
tableName: "app_form_submissions";
dataType: "string";
columnType: "PgText";
data: string;
driverParam: string;
notNull: false;
hasDefault: true;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: [string, ...string[]];
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
pageUrl: PgColumn<    {
name: "pageUrl";
tableName: "app_form_submissions";
dataType: "string";
columnType: "PgText";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: [string, ...string[]];
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
};
dialect: "pg";
}>;

declare const appPages: PgTableWithColumns<    {
name: "app_pages";
schema: undefined;
columns: {
createdAt: PgColumn<    {
name: "createdAt";
tableName: "app_pages";
dataType: "string";
columnType: "PgTimestampString";
data: string;
driverParam: string;
notNull: true;
hasDefault: true;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
slug: PgColumn<    {
name: "slug";
tableName: "app_pages";
dataType: "string";
columnType: "PgText";
data: string;
driverParam: string;
notNull: true;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: [string, ...string[]];
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
lang: PgColumn<    {
name: "lang";
tableName: "app_pages";
dataType: "string";
columnType: "PgText";
data: string;
driverParam: string;
notNull: true;
hasDefault: true;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: [string, ...string[]];
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
seo: PgColumn<    {
name: "seo";
tableName: "app_pages";
dataType: "json";
columnType: "PgJsonb";
data: unknown;
driverParam: unknown;
notNull: false;
hasDefault: true;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
app: PgColumn<    {
name: "app";
tableName: "app_pages";
dataType: "string";
columnType: "PgUUID";
data: string;
driverParam: string;
notNull: true;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
id: PgColumn<    {
name: "id";
tableName: "app_pages";
dataType: "string";
columnType: "PgUUID";
data: string;
driverParam: string;
notNull: true;
hasDefault: true;
isPrimaryKey: true;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
name: PgColumn<    {
name: "name";
tableName: "app_pages";
dataType: "string";
columnType: "PgText";
data: string;
driverParam: string;
notNull: true;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: [string, ...string[]];
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
primaryPage: PgColumn<    {
name: "primaryPage";
tableName: "app_pages";
dataType: "string";
columnType: "PgUUID";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
blocks: PgColumn<    {
name: "blocks";
tableName: "app_pages";
dataType: "json";
columnType: "PgJsonb";
data: unknown;
driverParam: unknown;
notNull: false;
hasDefault: true;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
currentEditor: PgColumn<    {
name: "currentEditor";
tableName: "app_pages";
dataType: "string";
columnType: "PgText";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: [string, ...string[]];
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
changes: PgColumn<    {
name: "changes";
tableName: "app_pages";
dataType: "json";
columnType: "PgJsonb";
data: unknown;
driverParam: unknown;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
online: PgColumn<    {
name: "online";
tableName: "app_pages";
dataType: "boolean";
columnType: "PgBoolean";
data: boolean;
driverParam: boolean;
notNull: false;
hasDefault: true;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
parent: PgColumn<    {
name: "parent";
tableName: "app_pages";
dataType: "string";
columnType: "PgUUID";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
pageType: PgColumn<    {
name: "pageType";
tableName: "app_pages";
dataType: "string";
columnType: "PgText";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: [string, ...string[]];
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
lastSaved: PgColumn<    {
name: "lastSaved";
tableName: "app_pages";
dataType: "string";
columnType: "PgTimestampString";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
dynamic: PgColumn<    {
name: "dynamic";
tableName: "app_pages";
dataType: "boolean";
columnType: "PgBoolean";
data: boolean;
driverParam: boolean;
notNull: false;
hasDefault: true;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
libRefId: PgColumn<    {
name: "libRefId";
tableName: "app_pages";
dataType: "string";
columnType: "PgUUID";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
dynamicSlugCustom: PgColumn<    {
name: "dynamicSlugCustom";
tableName: "app_pages";
dataType: "string";
columnType: "PgText";
data: string;
driverParam: string;
notNull: false;
hasDefault: true;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: [string, ...string[]];
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
metadata: PgColumn<    {
name: "metadata";
tableName: "app_pages";
dataType: "json";
columnType: "PgJsonb";
data: unknown;
driverParam: unknown;
notNull: false;
hasDefault: true;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
jsonld: PgColumn<    {
name: "jsonld";
tableName: "app_pages";
dataType: "json";
columnType: "PgJsonb";
data: unknown;
driverParam: unknown;
notNull: false;
hasDefault: true;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
globalJsonLds: PgColumn<    {
name: "globalJsonLds";
tableName: "app_pages";
dataType: "json";
columnType: "PgJsonb";
data: unknown;
driverParam: unknown;
notNull: false;
hasDefault: true;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
links: PgColumn<    {
name: "links";
tableName: "app_pages";
dataType: "string";
columnType: "PgText";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: [string, ...string[]];
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
partialBlocks: PgColumn<    {
name: "partialBlocks";
tableName: "app_pages";
dataType: "string";
columnType: "PgText";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: [string, ...string[]];
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
designTokens: PgColumn<    {
name: "designTokens";
tableName: "app_pages";
dataType: "json";
columnType: "PgJsonb";
data: unknown;
driverParam: unknown;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
};
dialect: "pg";
}>;

declare const appPagesMetadataIdSeq: PgSequence;

declare const appPagesOnline: PgTableWithColumns<    {
name: "app_pages_online";
schema: undefined;
columns: {
createdAt: PgColumn<    {
name: "createdAt";
tableName: "app_pages_online";
dataType: "string";
columnType: "PgTimestampString";
data: string;
driverParam: string;
notNull: true;
hasDefault: true;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
slug: PgColumn<    {
name: "slug";
tableName: "app_pages_online";
dataType: "string";
columnType: "PgText";
data: string;
driverParam: string;
notNull: true;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: [string, ...string[]];
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
lang: PgColumn<    {
name: "lang";
tableName: "app_pages_online";
dataType: "string";
columnType: "PgText";
data: string;
driverParam: string;
notNull: true;
hasDefault: true;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: [string, ...string[]];
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
seo: PgColumn<    {
name: "seo";
tableName: "app_pages_online";
dataType: "json";
columnType: "PgJsonb";
data: unknown;
driverParam: unknown;
notNull: false;
hasDefault: true;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
app: PgColumn<    {
name: "app";
tableName: "app_pages_online";
dataType: "string";
columnType: "PgUUID";
data: string;
driverParam: string;
notNull: true;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
id: PgColumn<    {
name: "id";
tableName: "app_pages_online";
dataType: "string";
columnType: "PgUUID";
data: string;
driverParam: string;
notNull: true;
hasDefault: false;
isPrimaryKey: true;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
name: PgColumn<    {
name: "name";
tableName: "app_pages_online";
dataType: "string";
columnType: "PgText";
data: string;
driverParam: string;
notNull: true;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: [string, ...string[]];
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
primaryPage: PgColumn<    {
name: "primaryPage";
tableName: "app_pages_online";
dataType: "string";
columnType: "PgUUID";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
blocks: PgColumn<    {
name: "blocks";
tableName: "app_pages_online";
dataType: "json";
columnType: "PgJsonb";
data: unknown;
driverParam: unknown;
notNull: false;
hasDefault: true;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
currentEditor: PgColumn<    {
name: "currentEditor";
tableName: "app_pages_online";
dataType: "string";
columnType: "PgText";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: [string, ...string[]];
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
changes: PgColumn<    {
name: "changes";
tableName: "app_pages_online";
dataType: "json";
columnType: "PgJsonb";
data: unknown;
driverParam: unknown;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
partialBlocks: PgColumn<    {
name: "partialBlocks";
tableName: "app_pages_online";
dataType: "string";
columnType: "PgText";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: [string, ...string[]];
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
links: PgColumn<    {
name: "links";
tableName: "app_pages_online";
dataType: "string";
columnType: "PgText";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: [string, ...string[]];
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
online: PgColumn<    {
name: "online";
tableName: "app_pages_online";
dataType: "boolean";
columnType: "PgBoolean";
data: boolean;
driverParam: boolean;
notNull: false;
hasDefault: true;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
pageType: PgColumn<    {
name: "pageType";
tableName: "app_pages_online";
dataType: "string";
columnType: "PgText";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: [string, ...string[]];
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
parent: PgColumn<    {
name: "parent";
tableName: "app_pages_online";
dataType: "string";
columnType: "PgUUID";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
lastSaved: PgColumn<    {
name: "lastSaved";
tableName: "app_pages_online";
dataType: "string";
columnType: "PgTimestampString";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
dynamic: PgColumn<    {
name: "dynamic";
tableName: "app_pages_online";
dataType: "boolean";
columnType: "PgBoolean";
data: boolean;
driverParam: boolean;
notNull: false;
hasDefault: true;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
libRefId: PgColumn<    {
name: "libRefId";
tableName: "app_pages_online";
dataType: "string";
columnType: "PgUUID";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
dynamicSlugCustom: PgColumn<    {
name: "dynamicSlugCustom";
tableName: "app_pages_online";
dataType: "string";
columnType: "PgText";
data: string;
driverParam: string;
notNull: false;
hasDefault: true;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: [string, ...string[]];
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
metadata: PgColumn<    {
name: "metadata";
tableName: "app_pages_online";
dataType: "json";
columnType: "PgJsonb";
data: unknown;
driverParam: unknown;
notNull: false;
hasDefault: true;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
jsonld: PgColumn<    {
name: "jsonld";
tableName: "app_pages_online";
dataType: "json";
columnType: "PgJsonb";
data: unknown;
driverParam: unknown;
notNull: false;
hasDefault: true;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
globalJsonLds: PgColumn<    {
name: "globalJsonLds";
tableName: "app_pages_online";
dataType: "json";
columnType: "PgJsonb";
data: unknown;
driverParam: unknown;
notNull: false;
hasDefault: true;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
designTokens: PgColumn<    {
name: "designTokens";
tableName: "app_pages_online";
dataType: "json";
columnType: "PgJsonb";
data: unknown;
driverParam: unknown;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
};
dialect: "pg";
}>;

declare const appPagesRevisions: PgTableWithColumns<    {
name: "app_pages_revisions";
schema: undefined;
columns: {
createdAt: PgColumn<    {
name: "createdAt";
tableName: "app_pages_revisions";
dataType: "string";
columnType: "PgTimestampString";
data: string;
driverParam: string;
notNull: true;
hasDefault: true;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
slug: PgColumn<    {
name: "slug";
tableName: "app_pages_revisions";
dataType: "string";
columnType: "PgText";
data: string;
driverParam: string;
notNull: true;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: [string, ...string[]];
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
lang: PgColumn<    {
name: "lang";
tableName: "app_pages_revisions";
dataType: "string";
columnType: "PgText";
data: string;
driverParam: string;
notNull: true;
hasDefault: true;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: [string, ...string[]];
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
seo: PgColumn<    {
name: "seo";
tableName: "app_pages_revisions";
dataType: "json";
columnType: "PgJsonb";
data: unknown;
driverParam: unknown;
notNull: false;
hasDefault: true;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
app: PgColumn<    {
name: "app";
tableName: "app_pages_revisions";
dataType: "string";
columnType: "PgUUID";
data: string;
driverParam: string;
notNull: true;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
id: PgColumn<    {
name: "id";
tableName: "app_pages_revisions";
dataType: "string";
columnType: "PgUUID";
data: string;
driverParam: string;
notNull: true;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
name: PgColumn<    {
name: "name";
tableName: "app_pages_revisions";
dataType: "string";
columnType: "PgText";
data: string;
driverParam: string;
notNull: true;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: [string, ...string[]];
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
primaryPage: PgColumn<    {
name: "primaryPage";
tableName: "app_pages_revisions";
dataType: "string";
columnType: "PgUUID";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
blocks: PgColumn<    {
name: "blocks";
tableName: "app_pages_revisions";
dataType: "json";
columnType: "PgJsonb";
data: unknown;
driverParam: unknown;
notNull: false;
hasDefault: true;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
currentEditor: PgColumn<    {
name: "currentEditor";
tableName: "app_pages_revisions";
dataType: "string";
columnType: "PgText";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: [string, ...string[]];
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
changes: PgColumn<    {
name: "changes";
tableName: "app_pages_revisions";
dataType: "json";
columnType: "PgJsonb";
data: unknown;
driverParam: unknown;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
partialBlocks: PgColumn<    {
name: "partialBlocks";
tableName: "app_pages_revisions";
dataType: "string";
columnType: "PgText";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: [string, ...string[]];
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
links: PgColumn<    {
name: "links";
tableName: "app_pages_revisions";
dataType: "string";
columnType: "PgText";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: [string, ...string[]];
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
online: PgColumn<    {
name: "online";
tableName: "app_pages_revisions";
dataType: "boolean";
columnType: "PgBoolean";
data: boolean;
driverParam: boolean;
notNull: false;
hasDefault: true;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
pageType: PgColumn<    {
name: "pageType";
tableName: "app_pages_revisions";
dataType: "string";
columnType: "PgText";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: [string, ...string[]];
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
parent: PgColumn<    {
name: "parent";
tableName: "app_pages_revisions";
dataType: "string";
columnType: "PgUUID";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
lastSaved: PgColumn<    {
name: "lastSaved";
tableName: "app_pages_revisions";
dataType: "string";
columnType: "PgTimestampString";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
dynamic: PgColumn<    {
name: "dynamic";
tableName: "app_pages_revisions";
dataType: "boolean";
columnType: "PgBoolean";
data: boolean;
driverParam: boolean;
notNull: false;
hasDefault: true;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
uid: PgColumn<    {
name: "uid";
tableName: "app_pages_revisions";
dataType: "string";
columnType: "PgUUID";
data: string;
driverParam: string;
notNull: true;
hasDefault: true;
isPrimaryKey: true;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
type: PgColumn<    {
name: "type";
tableName: "app_pages_revisions";
dataType: "string";
columnType: "PgText";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: [string, ...string[]];
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
libRefId: PgColumn<    {
name: "libRefId";
tableName: "app_pages_revisions";
dataType: "string";
columnType: "PgUUID";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
dynamicSlugCustom: PgColumn<    {
name: "dynamicSlugCustom";
tableName: "app_pages_revisions";
dataType: "string";
columnType: "PgText";
data: string;
driverParam: string;
notNull: false;
hasDefault: true;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: [string, ...string[]];
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
metadata: PgColumn<    {
name: "metadata";
tableName: "app_pages_revisions";
dataType: "json";
columnType: "PgJsonb";
data: unknown;
driverParam: unknown;
notNull: false;
hasDefault: true;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
jsonld: PgColumn<    {
name: "jsonld";
tableName: "app_pages_revisions";
dataType: "json";
columnType: "PgJsonb";
data: unknown;
driverParam: unknown;
notNull: false;
hasDefault: true;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
globalJsonLds: PgColumn<    {
name: "globalJsonLds";
tableName: "app_pages_revisions";
dataType: "json";
columnType: "PgJsonb";
data: unknown;
driverParam: unknown;
notNull: false;
hasDefault: true;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
designTokens: PgColumn<    {
name: "designTokens";
tableName: "app_pages_revisions";
dataType: "json";
columnType: "PgJsonb";
data: unknown;
driverParam: unknown;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
};
dialect: "pg";
}>;

declare const apps: PgTableWithColumns<    {
name: "apps";
schema: undefined;
columns: {
id: PgColumn<    {
name: "id";
tableName: "apps";
dataType: "string";
columnType: "PgUUID";
data: string;
driverParam: string;
notNull: true;
hasDefault: true;
isPrimaryKey: true;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
createdAt: PgColumn<    {
name: "createdAt";
tableName: "apps";
dataType: "string";
columnType: "PgTimestampString";
data: string;
driverParam: string;
notNull: true;
hasDefault: true;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
name: PgColumn<    {
name: "name";
tableName: "apps";
dataType: "string";
columnType: "PgText";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: [string, ...string[]];
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
user: PgColumn<    {
name: "user";
tableName: "apps";
dataType: "string";
columnType: "PgText";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: [string, ...string[]];
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
settings: PgColumn<    {
name: "settings";
tableName: "apps";
dataType: "json";
columnType: "PgJsonb";
data: unknown;
driverParam: unknown;
notNull: false;
hasDefault: true;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
theme: PgColumn<    {
name: "theme";
tableName: "apps";
dataType: "json";
columnType: "PgJsonb";
data: unknown;
driverParam: unknown;
notNull: false;
hasDefault: true;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
fallbackLang: PgColumn<    {
name: "fallbackLang";
tableName: "apps";
dataType: "string";
columnType: "PgText";
data: string;
driverParam: string;
notNull: false;
hasDefault: true;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: [string, ...string[]];
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
languages: PgColumn<    {
name: "languages";
tableName: "apps";
dataType: "json";
columnType: "PgJsonb";
data: unknown;
driverParam: unknown;
notNull: false;
hasDefault: true;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
changes: PgColumn<    {
name: "changes";
tableName: "apps";
dataType: "json";
columnType: "PgJsonb";
data: unknown;
driverParam: unknown;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
deletedAt: PgColumn<    {
name: "deletedAt";
tableName: "apps";
dataType: "string";
columnType: "PgTimestampString";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
client: PgColumn<    {
name: "client";
tableName: "apps";
dataType: "string";
columnType: "PgUUID";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
designTokens: PgColumn<    {
name: "designTokens";
tableName: "apps";
dataType: "json";
columnType: "PgJsonb";
data: unknown;
driverParam: unknown;
notNull: false;
hasDefault: true;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
};
dialect: "pg";
}>;

declare const appsOnline: PgTableWithColumns<    {
name: "apps_online";
schema: undefined;
columns: {
id: PgColumn<    {
name: "id";
tableName: "apps_online";
dataType: "string";
columnType: "PgUUID";
data: string;
driverParam: string;
notNull: true;
hasDefault: false;
isPrimaryKey: true;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
createdAt: PgColumn<    {
name: "createdAt";
tableName: "apps_online";
dataType: "string";
columnType: "PgTimestampString";
data: string;
driverParam: string;
notNull: true;
hasDefault: true;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
name: PgColumn<    {
name: "name";
tableName: "apps_online";
dataType: "string";
columnType: "PgText";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: [string, ...string[]];
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
user: PgColumn<    {
name: "user";
tableName: "apps_online";
dataType: "string";
columnType: "PgText";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: [string, ...string[]];
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
settings: PgColumn<    {
name: "settings";
tableName: "apps_online";
dataType: "json";
columnType: "PgJsonb";
data: unknown;
driverParam: unknown;
notNull: false;
hasDefault: true;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
theme: PgColumn<    {
name: "theme";
tableName: "apps_online";
dataType: "json";
columnType: "PgJsonb";
data: unknown;
driverParam: unknown;
notNull: false;
hasDefault: true;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
fallbackLang: PgColumn<    {
name: "fallbackLang";
tableName: "apps_online";
dataType: "string";
columnType: "PgText";
data: string;
driverParam: string;
notNull: false;
hasDefault: true;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: [string, ...string[]];
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
languages: PgColumn<    {
name: "languages";
tableName: "apps_online";
dataType: "json";
columnType: "PgJsonb";
data: unknown;
driverParam: unknown;
notNull: false;
hasDefault: true;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
changes: PgColumn<    {
name: "changes";
tableName: "apps_online";
dataType: "json";
columnType: "PgJsonb";
data: unknown;
driverParam: unknown;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
apiKey: PgColumn<    {
name: "apiKey";
tableName: "apps_online";
dataType: "string";
columnType: "PgText";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: [string, ...string[]];
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
deletedAt: PgColumn<    {
name: "deletedAt";
tableName: "apps_online";
dataType: "string";
columnType: "PgTimestampString";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
client: PgColumn<    {
name: "client";
tableName: "apps_online";
dataType: "string";
columnType: "PgUUID";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
designTokens: PgColumn<    {
name: "designTokens";
tableName: "apps_online";
dataType: "json";
columnType: "PgJsonb";
data: unknown;
driverParam: unknown;
notNull: false;
hasDefault: true;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
};
dialect: "pg";
}>;

declare const appUsers: PgTableWithColumns<    {
name: "app_users";
schema: undefined;
columns: {
id: PgColumn<    {
name: "id";
tableName: "app_users";
dataType: "string";
columnType: "PgUUID";
data: string;
driverParam: string;
notNull: true;
hasDefault: true;
isPrimaryKey: true;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
createdAt: PgColumn<    {
name: "createdAt";
tableName: "app_users";
dataType: "string";
columnType: "PgTimestampString";
data: string;
driverParam: string;
notNull: true;
hasDefault: true;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
user: PgColumn<    {
name: "user";
tableName: "app_users";
dataType: "string";
columnType: "PgText";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: [string, ...string[]];
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
app: PgColumn<    {
name: "app";
tableName: "app_users";
dataType: "string";
columnType: "PgUUID";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
role: PgColumn<    {
name: "role";
tableName: "app_users";
dataType: "string";
columnType: "PgText";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: [string, ...string[]];
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
permissions: PgColumn<    {
name: "permissions";
tableName: "app_users";
dataType: "json";
columnType: "PgJsonb";
data: unknown;
driverParam: unknown;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
status: PgColumn<    {
name: "status";
tableName: "app_users";
dataType: "string";
columnType: "PgText";
data: string;
driverParam: string;
notNull: true;
hasDefault: true;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: [string, ...string[]];
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
};
dialect: "pg";
}>;

/**
 * ChaiAction Interface
 * Defines the contract for all action handlers
 */
export declare interface ChaiAction<T = any, K = any> {
    validate(data: T): boolean;
    setContext(context: ChaiActionContext): void;
    execute(data: T): Promise<K>;
}

/**
 * Action Context
 * Contains information and repositories needed by actions
 */
export declare interface ChaiActionContext {
    appId: string;
    userId?: string;
}

export declare const ChaiActionsRegistry: ChaiActionsRegistry_2;

/**
 * Registry of all available actions
 * This is a singleton that holds all action handlers
 */
declare class ChaiActionsRegistry_2 {
    private static instance;
    private actions;
    private constructor();
    /**
     * Get the singleton instance of the registry
     */
    static getInstance(): ChaiActionsRegistry_2;
    /**
     * Register a new action handler
     */
    register(actionName: string, handler: ChaiAction<any, any>): void;
    registerActions(actions: Record<string, ChaiAction<any, any>>): void;
    /**
     * Get an action handler by name
     */
    getAction(actionName: string): ChaiAction<any, any> | undefined;
    /**
     * Get all registered actions
     */
    getAllActions(): Record<string, ChaiAction<any, any>>;
}

/**
 * Base Action Class
 * Provides common functionality for all action handlers
 */
export declare abstract class ChaiBaseAction<T = any, K = any> implements ChaiAction<T, K> {
    protected context: ChaiActionContext | null;
    /**
     * Abstract method to get the validation schema for the action data
     * Each action must implement this to define its own validation rules
     */
    protected abstract getValidationSchema(): z.ZodType<T>;
    /**
     * Validate the action data using the schema provided by getValidationSchema
     * @param data The data to validate
     * @returns true if the data is valid, false otherwise
     */
    validate(data: T): boolean;
    /**
     * Get validation errors for the action data
     * This can be useful for debugging or providing more detailed error messages
     * @param data The data to validate
     * @returns An array of validation errors or null if the data is valid
     */
    getValidationErrors(data: T): string | null;
    /**
     * Set the action context
     * @param context The context to set
     */
    setContext(context: ChaiActionContext): void;
    /**
     * Abstract method to execute the action
     * Each action must implement this to define its own business logic
     */
    abstract execute(data: T): Promise<any>;
    /**
     * Verify if the user has access to the app.
     * Delegates to the CHECK_USER_ACCESS action from the registry so that
     * callers can override the default access-check by registering a custom action.
     * Uses a dynamic import to avoid a circular module dependency at init time.
     * @throws ActionError if the user does not have access
     */
    protected verifyAccess(): Promise<void>;
    /**
     * Helper method to handle common errors in actions
     * @param error The error to handle
     * @throws ActionError with appropriate message and code
     */
    protected handleError(error: unknown): never;
}

export declare const db: PostgresJsDatabase<typeof schema>;

declare type DbResult<T> = {
    data: T;
    error: null;
} | {
    data: null;
    error: Error;
};

/**
 *
 * @param translation
 * @returns SYSTEM PROMPT
 */
export declare function getAskAiSystemPrompt(initiator?: string | null): string;

export declare const initChaiBuilderActionHandler: (params: {
    apiKey: string;
    userId: string;
}) => (actionData: {
    action: string;
    data?: unknown;
}) => Promise<any>;

export declare const LANGUAGES: {
    [key: string]: string;
};

declare const libraries: PgTableWithColumns<    {
name: "libraries";
schema: undefined;
columns: {
id: PgColumn<    {
name: "id";
tableName: "libraries";
dataType: "string";
columnType: "PgUUID";
data: string;
driverParam: string;
notNull: true;
hasDefault: true;
isPrimaryKey: true;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
createdAt: PgColumn<    {
name: "createdAt";
tableName: "libraries";
dataType: "string";
columnType: "PgTimestampString";
data: string;
driverParam: string;
notNull: true;
hasDefault: true;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
name: PgColumn<    {
name: "name";
tableName: "libraries";
dataType: "string";
columnType: "PgText";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: [string, ...string[]];
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
app: PgColumn<    {
name: "app";
tableName: "libraries";
dataType: "string";
columnType: "PgUUID";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
type: PgColumn<    {
name: "type";
tableName: "libraries";
dataType: "string";
columnType: "PgText";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: [string, ...string[]];
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
status: PgColumn<    {
name: "status";
tableName: "libraries";
dataType: "string";
columnType: "PgText";
data: string;
driverParam: string;
notNull: true;
hasDefault: true;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: [string, ...string[]];
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
client: PgColumn<    {
name: "client";
tableName: "libraries";
dataType: "string";
columnType: "PgUUID";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
};
dialect: "pg";
}>;

declare const libraryItems: PgTableWithColumns<    {
name: "library_items";
schema: undefined;
columns: {
id: PgColumn<    {
name: "id";
tableName: "library_items";
dataType: "string";
columnType: "PgUUID";
data: string;
driverParam: string;
notNull: true;
hasDefault: true;
isPrimaryKey: true;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
createdAt: PgColumn<    {
name: "createdAt";
tableName: "library_items";
dataType: "string";
columnType: "PgTimestampString";
data: string;
driverParam: string;
notNull: true;
hasDefault: true;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
library: PgColumn<    {
name: "library";
tableName: "library_items";
dataType: "string";
columnType: "PgUUID";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
name: PgColumn<    {
name: "name";
tableName: "library_items";
dataType: "string";
columnType: "PgText";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: [string, ...string[]];
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
description: PgColumn<    {
name: "description";
tableName: "library_items";
dataType: "string";
columnType: "PgText";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: [string, ...string[]];
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
blocks: PgColumn<    {
name: "blocks";
tableName: "library_items";
dataType: "json";
columnType: "PgJsonb";
data: unknown;
driverParam: unknown;
notNull: false;
hasDefault: true;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
preview: PgColumn<    {
name: "preview";
tableName: "library_items";
dataType: "string";
columnType: "PgText";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: [string, ...string[]];
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
group: PgColumn<    {
name: "group";
tableName: "library_items";
dataType: "string";
columnType: "PgText";
data: string;
driverParam: string;
notNull: false;
hasDefault: true;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: [string, ...string[]];
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
user: PgColumn<    {
name: "user";
tableName: "library_items";
dataType: "string";
columnType: "PgText";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: [string, ...string[]];
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
html: PgColumn<    {
name: "html";
tableName: "library_items";
dataType: "string";
columnType: "PgText";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: [string, ...string[]];
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
};
dialect: "pg";
}>;

declare const libraryTemplates: PgTableWithColumns<    {
name: "library_templates";
schema: undefined;
columns: {
id: PgColumn<    {
name: "id";
tableName: "library_templates";
dataType: "string";
columnType: "PgUUID";
data: string;
driverParam: string;
notNull: true;
hasDefault: true;
isPrimaryKey: true;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
createdAt: PgColumn<    {
name: "createdAt";
tableName: "library_templates";
dataType: "string";
columnType: "PgTimestampString";
data: string;
driverParam: string;
notNull: true;
hasDefault: true;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
user: PgColumn<    {
name: "user";
tableName: "library_templates";
dataType: "string";
columnType: "PgText";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: [string, ...string[]];
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
name: PgColumn<    {
name: "name";
tableName: "library_templates";
dataType: "string";
columnType: "PgText";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: [string, ...string[]];
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
description: PgColumn<    {
name: "description";
tableName: "library_templates";
dataType: "string";
columnType: "PgText";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: [string, ...string[]];
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
pageId: PgColumn<    {
name: "pageId";
tableName: "library_templates";
dataType: "string";
columnType: "PgUUID";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
pageType: PgColumn<    {
name: "pageType";
tableName: "library_templates";
dataType: "string";
columnType: "PgText";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: [string, ...string[]];
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
library: PgColumn<    {
name: "library";
tableName: "library_templates";
dataType: "string";
columnType: "PgUUID";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: undefined;
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
preview: PgColumn<    {
name: "preview";
tableName: "library_templates";
dataType: "string";
columnType: "PgText";
data: string;
driverParam: string;
notNull: false;
hasDefault: false;
isPrimaryKey: false;
isAutoincrement: false;
hasRuntimeDefault: false;
enumValues: [string, ...string[]];
baseColumn: never;
identity: undefined;
generated: undefined;
}, {}, {}>;
};
dialect: "pg";
}>;

/**
 * Action to publish changes to pages or theme
 */
export declare class PublishChangesAction extends ChaiBaseAction<PublishChangesActionData, PublishChangesActionResponse> {
    private appId;
    private revisionsEnabled;
    /**
     * Define the validation schema for publish changes action
     */
    protected getValidationSchema(): z.ZodObject<{
        ids: z.ZodOptional<z.ZodArray<z.ZodString>>;
        revisions: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>;
    /**
     * Execute the publish changes action
     */
    execute(data: PublishChangesActionData): Promise<PublishChangesActionResponse>;
    /**
     * Validate that context is properly set
     */
    private validateContext;
    /**
     * Publish theme changes
     */
    private publishTheme;
    /**
     * Publish design token changes
     */
    private publishDesignToken;
    /**
     * Remove a specific key from the app's changes array.
     * Sets changes to null only if the array becomes empty after removal.
     */
    private removeFromChangesArray;
    /**
     * Clone app data from main table
     */
    private cloneApp;
    /**
     * Clear changes flag after publishing
     */
    private clearChanges;
    /**
     * Get pages that use a partial block
     */
    private getPartialBlockUsage;
    /**
     * Publish a single page
     */
    private publishPage;
    /**
     * Create a revision before publishing
     */
    private createRevision;
    /**
     * Add page to online table
     */
    private addOnlinePage;
    /**
     * Clone page data from main table
     */
    private clonePage;
    /**
     * Handle execution errors with proper error transformation
     */
    private handleExecutionError;
}

/**
 * Data type for PublishChangesAction
 */
declare type PublishChangesActionData = {
    ids?: string[];
    revisions?: boolean;
};

declare type PublishChangesActionResponse = {
    tags: string[];
    paths: string[];
};

export declare function safeQuery<T>(queryFn: () => Promise<T>): Promise<DbResult<T>>;

declare namespace schema {
    export {
        appPagesMetadataIdSeq,
        webhookEventsIdSeq,
        appAssets,
        appPagesOnline,
        apps,
        appsOnline,
        libraries,
        appFormSubmissions,
        appPages,
        appPagesRevisions,
        appUsers,
        libraryTemplates,
        libraryItems,
        aiLogs
    }
}
export { schema }

declare const webhookEventsIdSeq: PgSequence;

export { }
