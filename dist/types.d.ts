import { default as default_2 } from 'react';
import * as React_2 from 'react';
import { RJSFSchema } from '@rjsf/utils';
import { StreamTextResult } from 'ai';
import { UiSchema } from '@rjsf/utils';

export declare type AIChatOptions = {
    messages: any[];
    image?: string;
    systemPrompt?: string;
    initiator?: string | null;
    model?: string;
    context?: AIContext;
};

export declare type AIContext = {
    site?: Record<string, any>;
    page?: Record<string, any>;
};

export declare type AssetsParams = {
    search: string;
    limit: number;
    page: number;
};

export declare type ChaiAskAiResponse = {
    blocks?: Array<{
        _id: string;
    } & Partial<ChaiBlock>>;
    usage?: Record<any, number>;
    error?: any;
};

export declare type ChaiAsset = {
    url: string;
    id?: string;
    thumbnailUrl?: string;
    description?: string;
    width?: number;
    height?: number;
};

export declare type ChaiAsyncProp<T> = T | undefined;

export declare type ChaiBlock<T = Record<string, any>> = {
    _id: string;
    _name?: string;
    _parent?: string | null | undefined;
    _libBlock?: string;
    _type: string;
    partialBlockId?: string;
} & T;

export declare type ChaiBlockComponentProps<BlockProps = unknown, PageData = Record<string, unknown>> = ChaiBlock<BlockProps> & {
    $loading?: boolean;
    blockProps: Record<string, string>;
    inBuilder: boolean;
    lang: string;
    draft: boolean;
    pageProps?: ChaiPageProps;
    pageData?: PageData;
    children?: default_2.ReactNode;
};

export declare interface ChaiBlockConfig {
    type: string;
    label: string;
    group: string;
    description?: string;
    wrapper?: boolean;
    blocks?: ChaiBlock[] | (() => ChaiBlock[]);
    category?: string;
    hidden?: boolean | ((parentType?: string) => boolean);
    icon?: default_2.ReactNode | default_2.ComponentType;
    dataProviderMode?: "live" | "mock";
    dataProviderDependencies?: string[];
    dataProvider?: (args: {
        lang: string;
        draft: boolean;
        inBuilder: boolean;
        block: ChaiBlock;
        pageProps: ChaiPageProps;
    }) => Record<string, unknown>;
    props?: {
        schema: ChaiBlockSchema;
        uiSchema: ChaiBlockUiSchema;
    };
    /**
     * @deprecated Use props.schema instead
     */
    schema?: ChaiBlockSchema;
    /**
     * @deprecated Use props.uiSchema instead
     */
    uiSchema?: ChaiBlockUiSchema;
    i18nProps?: string[];
    aiProps?: string[];
    inlineEditProps?: string[];
    canAcceptBlock?: (type: string) => boolean;
    canDelete?: () => boolean;
    canMove?: () => boolean;
    canDuplicate?: () => boolean;
    canBeNested?: (type: string) => boolean;
}

export declare type ChaiBlockPropsSchema = RJSFSchema & {
    properties?: {
        [key: string]: RJSFSchema;
    } | undefined;
    enumNames?: (string | number)[];
};

export declare type ChaiBlockRJSFSchemas = {
    schema: object | Omit<ChaiBlockSchema, "ui">;
    uiSchema: ChaiBlockUiSchema;
};

export declare type ChaiBlockSchema = {
    properties?: Record<string, ChaiBlockPropsSchema>;
    allOf?: any[];
    oneOf?: any[];
} & Partial<Pick<ChaiBlockPropsSchema, "required" | "dependencies" | "ui" | "title" | "description" | "default">>;

export declare type ChaiBlockSchemas = {
    schema: object | Omit<ChaiBlockSchema, "ui">;
    uiSchema?: ChaiBlockUiSchema;
};

export declare type ChaiBlockStyles = Record<string, string>;

declare type ChaiBlocksWithDesignTokens = Record<string, string>;

export declare type ChaiBlockUiSchema = UiSchema;

export declare type ChaiBorderRadiusValue = false | string;

export declare type ChaiBreakpoint = {
    title: string;
    content: string;
    breakpoint: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | string;
    icon: default_2.ReactNode | Element;
    width: number;
};

export declare interface ChaiBuilderEditorProps {
    children?: default_2.ReactNode;
    /**
     * Goto page callback
     */
    gotoPage?: ({ pageId, lang }: {
        pageId: string;
        lang: string;
    }) => void;
    /**
     * User
     */
    user?: ChaiLoggedInUser;
    /**
     * Permissions
     */
    permissions?: string[] | null;
    /**
     * Optional pageId. If not provided, a random pageId will be generated
     */
    pageId?: string;
    /**
     * Page external data
     */
    pageExternalData?: Record<string, any>;
    /**
     * Theme presets
     */
    themePresets?: Record<string, Partial<ChaiTheme>>[];
    /**
     * Theme
     */
    theme?: ChaiTheme;
    /**
     * Builder theme
     */
    builderTheme?: ChaiTheme;
    /**
     * Theme panel component
     * TODO: Move to registerChaiThemePanelComponent()
     */
    themePanelComponent?: ReactComponentType;
    /**
     * onError callback function
     * @param error
     */
    onError?: (error: Error) => void;
    /**
     * Translations object
     */
    translations?: Record<string, Record<string, any>>;
    /**
     * Custom layout component
     * TODO: Move to registerChaiLayoutComponent()
     */
    layout?: default_2.ComponentType;
    /**
     * HTML direction.
     */
    htmlDir?: "ltr" | "rtl";
    /**
     * Which Tailwind engine styles the canvas: "4" (the @tailwindcss/browser build, default) or
     * "3" (the Play CDN). Published pages compile with Tailwind 4 either way.
     */
    tailwindCSS?: "3" | "4";
    /**
     * Where the canvas loads its Tailwind engine script from. Defaults to the public CDN for the
     * chosen version; a host that serves the browser build itself passes its own URL.
     */
    tailwindScriptUrl?: string;
    /**
     * Show debug logs
     */
    debugLogs?: boolean;
    /**
     * Auto save support
     */
    autoSave?: boolean;
    /**
     * Auto save interval in seconds
     */
    autoSaveActionsCount?: number;
    /**
     * Breakpoints
     */
    breakpoints?: ChaiBreakpoint[];
    /**
     * Loading state
     */
    loading?: boolean;
    /**
     * Locale
     */
    locale?: string;
    /**
     * Ask AI callback
     */
    askAiCallBack?: (type: "styles" | "content", prompt: string, blocks: ChaiBlock[], lang: string) => Promise<ChaiAskAiResponse>;
    /**
     * Get partial blocks
     * @returns {Record<string, { type: string; name: string; description?: string }>}
     */
    getPartialBlocks?: () => Promise<Record<string, {
        type: string;
        name: string;
        description?: string;
    }>>;
    /**
     * Get all blocks of a partial block
     */
    getPartialBlockBlocks?: (partialBlockKey: string) => Promise<ChaiBlock[]>;
    /**
     * Blocks for the page
     */
    blocks?: ChaiBlock[];
    /**
     * onSave callback function
     * @param saveData
     */
    onSave?: ({ blocks, autoSave }: ChaiSavePageData) => Promise<boolean | Error>;
    /**
     * onSaveWebsiteData callback function for theme and design tokens
     * @param saveData
     */
    onSaveWebsiteData?: (data: ChaiSaveWebsiteData) => Promise<boolean | Error>;
    /**
     * onSaveStateChange callback function
     * @param syncStatus
     */
    onSaveStateChange?: (syncStatus: "SAVED" | "SAVING" | "UNSAVED") => void;
    /**
     * Preview component
     * TODO: Move to registerChaiPreviewComponent()
     */
    previewComponent?: ReactComponentType;
    /**
     * Content locale
     */
    fallbackLang?: string;
    /**
     * Languages
     */
    languages?: string[];
    /**
     * Page Types props
     */
    pageTypes?: ChaiPageType[];
    /**
     * Search page type items
     */
    searchPageTypeItems?: (pageTypeKey: string, query: string) => Promise<Pick<ChaiPage_2, "id" | "slug" | "name">[] | Error>;
    /**
     * Collections
     */
    collections?: ChaiCollectoin[];
    /**
     * Get Block Async Props
     */
    getBlockAsyncProps?: (args: {
        block: ChaiBlock;
    }) => Promise<{
        [key: string]: any;
    }>;
    /**
     * temporary props. Not to be used in production
     */
    flags?: {
        copyPaste?: boolean;
        exportCode?: boolean;
        darkMode?: boolean;
        dataBinding?: boolean;
        importHtml?: boolean;
        importTheme?: boolean;
        gotoSettings?: boolean;
        dragAndDrop?: boolean;
        validateStructure?: boolean;
        ai?: boolean;
    };
    structureRules?: StructureRule[];
    designTokens?: ChaiDesignTokens;
    siteWideUsage?: ChaiSiteWideUsageData;
    /**
     * Screen to small message component
     */
    smallScreenComponent?: ReactComponentType;
}

export declare interface ChaiBuilderPagesAIInterface {
    handleRequest(options: AIChatOptions, res: any): Promise<StreamTextResult<any, any>>;
    isConfigured(): boolean;
}

export declare type ChaiClosestBlockProp<T> = T | undefined;

export declare type ChaiCollectoin = {
    id: string;
    name: string;
    description?: string;
    filters?: FilterOptions[];
    sorts?: SortOptions[];
};

export declare interface ChaiCoreBlock {
    blocks?: ChaiBlock[];
    data: any;
    props: {
        [key: string]: any;
    };
    type: string;
    _name?: string;
    partialBlockId?: string;
}

export declare type ChaiCssVariableNameWithDefault = Record<CSSVariableName, any>;

export declare type ChaiDataProviderArgs<T = Record<string, any>, K = Record<string, any>> = {
    block: ChaiBlock<T>;
} & K;

export declare interface ChaiDesignTokens {
    [uniqueId: string]: {
        name: string;
        value: string;
        archived?: boolean;
    };
}

export declare type ChaiFont = ChaiFontByUrl | ChaiFontBySrc | ChaiSystemFont;

export declare type ChaiFontBySrc = {
    family: string;
    src: ChaiFontSource[];
    fallback: string;
};

export declare type ChaiFontByUrl = {
    family: string;
    url: string;
    fallback: string;
};

export declare type ChaiFontSource = {
    url: string;
    format: string;
    fontWeight?: string;
    fontStyle?: string;
    fontDisplay?: string;
    fontStretch?: string;
};

export declare type ChaiLibrary<T = Record<string, any>> = {
    id: string;
    name: string;
    blocks?: ChaiLibraryBlock[];
    description?: string;
} & T;

export declare type ChaiLibraryBlock<T = Record<string, any>> = {
    id: string;
    group: string;
    name: string;
    preview?: string;
    tags?: string[];
    description?: string;
} & T;

export declare interface ChaiLoggedInUser {
    id: string;
    email: string;
    name: string;
    avatar?: string;
    role?: string;
}

export declare type ChaiPage = {
    id: string;
    slug: string;
    lang: string;
    name: string;
    pageType: string;
    blocks: ChaiBlock[];
    createdAt: string;
    lastSaved: string;
    dynamic: boolean;
    online: boolean;
    seo: ChaiPageSeo;
    app: string;
    primaryPage?: string | null;
    currentEditor?: string | null;
    changes: object[];
    parent?: string | null;
    libRefId?: string | null;
    dynamicSlugCustom?: string | null;
    metadata?: object;
    jsonld?: object;
    globalJsonLds?: string[];
    links?: string;
    partialBlocks?: string;
    designTokens?: ChaiDesignTokens;
};

declare interface ChaiPage_2 {
    id: string;
    name: string;
    slug: string;
    pageType: string;
    parent: string | null;
    children?: ChaiPage_2[];
    isTemplate?: boolean;
    dynamic?: boolean;
    [key: string]: any;
}

export declare type ChaiPageProps<T = Record<string, any>> = {
    slug: string;
    searchParams?: Record<string, string>;
} & T;

declare type ChaiPageSeo = {
    title?: string;
    description?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    canonicalUrl?: string;
    noIndex?: boolean;
    noFollow?: boolean;
    jsonLD?: string;
};

export declare type ChaiPageType = {
    key: string;
    helpText?: string;
    icon?: string;
    hasSlug?: boolean;
    name: string | (() => Promise<string>);
    dynamicSegments?: string;
    dynamicSlug?: string;
    getDynamicPages?: ({ query, uuid, }: {
        query?: string;
        uuid?: string;
    }) => Promise<Pick<ChaiPage, "id" | "name" | "slug" | "primaryPage">[]>;
    search?: (query: string) => Promise<Pick<ChaiPage, "id" | "name" | "slug">[] | Error>;
    resolveLink?: (id: string, draft?: boolean, lang?: string) => Promise<string>;
    onCreate?: (data: Partial<ChaiPage> & {
        id: string;
    }) => Promise<void>;
    onUpdate?: (data: Partial<ChaiPage> & {
        id: string;
    }) => Promise<void>;
    onDelete?: (data: Pick<ChaiPage, "id">) => Promise<void>;
    dataProvider?: (args: {
        lang: string;
        draft: boolean;
        inBuilder: boolean;
        pageProps: ChaiPageProps;
    }) => Promise<Record<string, any>>;
    defaultSeo?: () => Record<string, any>;
    defaultJSONLD?: () => Record<string, any>;
    defaultMetaTags?: () => Record<string, string>;
};

export declare type ChaiRenderBlockProps<T> = {
    blockProps: Record<string, string>;
    children?: React_2.ReactNode;
    inBuilder: boolean;
} & T;

declare type ChaiSavePageData = {
    autoSave: boolean;
    blocks: ChaiBlock[];
    needTranslations?: boolean;
    designTokens: ChaiDesignTokens;
    partialIds?: string[];
    linkPageIds?: string[];
};
export { ChaiSavePageData }
export { ChaiSavePageData as SavePageData }

export declare type ChaiSaveWebsiteData = {
    type: "THEME";
    data: ChaiTheme;
} | {
    type: "DESIGN_TOKENS";
    data: ChaiDesignTokens;
};

export declare interface ChaiServerBlockConfig {
    component: default_2.ComponentType<ChaiBlockComponentProps>;
    type: string;
    dataProvider?: (args: {
        draft: boolean;
        inBuilder: boolean;
        lang: string;
        block: ChaiBlock;
        pageProps: ChaiPageProps;
    }) => Promise<Record<string, unknown>>;
    suspenseFallback?: default_2.ComponentType<any>;
}

export declare interface ChaiSiteWideUsageData {
    [pageId: string]: {
        name: string;
        isPartial: boolean;
        partialBlocks: string[];
        links: string[];
        designTokens: ChaiBlocksWithDesignTokens;
    };
}

export declare type ChaiStyles = {
    [key: string]: string;
};

export declare type ChaiSystemFont = {
    family: string;
    fallback: string;
};

declare type ChaiTheme = {
    fontFamily: {
        heading: string;
        body: string;
    };
    borderRadius: string;
    colors: {
        background: [HexColor, HexColor];
        foreground: [HexColor, HexColor];
        primary: [HexColor, HexColor];
        "primary-foreground": [HexColor, HexColor];
        secondary: [HexColor, HexColor];
        "secondary-foreground": [HexColor, HexColor];
        muted: [HexColor, HexColor];
        "muted-foreground": [HSLColor, HSLColor];
        accent: [HSLColor, HSLColor];
        "accent-foreground": [HSLColor, HSLColor];
        destructive: [HSLColor, HSLColor];
        "destructive-foreground": [HSLColor, HSLColor];
        border: [HSLColor, HSLColor];
        input: [HSLColor, HSLColor];
        ring: [HexColor, HexColor];
        card: [HexColor, HexColor];
        "card-foreground": [HexColor, HexColor];
        popover: [HexColor, HexColor];
        "popover-foreground": [HexColor, HexColor];
    };
};
export { ChaiTheme as ChaiBuilderThemeValues }
export { ChaiTheme }

export declare type ChaiThemeOptions = {
    fontFamily: false | Record<VariableKey, string>;
    borderRadius: ChaiBorderRadiusValue;
    colors: {
        group: string;
        items: Record<VariableKey, [HSLColor, HSLColor]>;
    }[];
};

export declare type ChaiUserInfo = {
    id: string;
    email: string;
    name: string;
    avatar?: string;
};

export declare type ChaiWebsiteBuilderProps = {
    hasReactQueryProvider?: boolean;
    topLeftCorner?: React.FC;
    apiUrl?: string;
    getPreviewUrl?: (slug: string) => string;
    getLiveUrl?: (slug: string) => string;
    onLogout?: (reason?: string) => void;
    getAccessToken?: () => Promise<string>;
    currentUser: LoggedInUser | null;
} & Pick<ChaiBuilderEditorProps, "onError" | "translations" | "locale" | "htmlDir" | "autoSave" | "autoSaveActionsCount" | "fallbackLang" | "languages" | "themePresets" | "flags" | "structureRules">;

export declare type ChaiWebsiteSetting = {
    appKey: string;
    fallbackLang: string;
    languages: string[];
    theme: ChaiTheme;
    settings: Record<string, any>;
    designTokens: ChaiDesignTokens;
    appChanges?: string[];
};

declare type CSSVariableName = string;

declare type FilterOptions = {
    id: string;
    name: string;
    description?: string;
};

declare type HexColor = string;

declare type HSLColor = string;

declare type LoggedInUser = {
    id: string;
    email: string;
    name: string;
    avatar?: string;
    metadata?: Record<string, any>;
};

declare type ReactComponentType = default_2.ComponentType<any>;

declare type SortOptions = {
    id: string;
    name: string;
    description?: string;
};

declare type StructureError = {
    id: string;
    message: string;
    severity: "error" | "warning";
    blockId?: string;
};

declare type StructureRule = {
    name: string;
    description: string;
    validate: (blocks: ChaiBlock[], tree: any[]) => StructureError[];
};

declare type VariableKey = string;

export { }
