import { default as default_2 } from 'react';
import { RJSFSchema } from '@rjsf/utils';
import { UiSchema } from '@rjsf/utils';

export declare const builderProp: (options: ChaiBlockPropsSchema) => ChaiBlockPropsSchema;

export declare let CHAI_GLOBAL_DATA_PROVIDER: (args: {
    lang: string;
    draft: boolean;
    inBuilder: boolean;
}) => Promise<any>;

declare type ChaiBlock<T = Record<string, any>> = {
    _id: string;
    _name?: string;
    _parent?: string | null | undefined;
    _libBlock?: string;
    _type: string;
    partialBlockId?: string;
} & T;

declare type ChaiBlockComponentProps<BlockProps = unknown, PageData = Record<string, unknown>> = ChaiBlock<BlockProps> & {
    $loading?: boolean;
    blockProps: Record<string, string>;
    inBuilder: boolean;
    lang: string;
    draft: boolean;
    pageProps?: ChaiPageProps;
    pageData?: PageData;
    children?: default_2.ReactNode;
};

declare interface ChaiBlockConfig {
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

declare type ChaiBlockPropsSchema = RJSFSchema & {
    properties?: {
        [key: string]: RJSFSchema;
    } | undefined;
    enumNames?: (string | number)[];
};

declare type ChaiBlockRJSFSchemas = {
    schema: object | Omit<ChaiBlockSchema, "ui">;
    uiSchema: ChaiBlockUiSchema;
};

declare type ChaiBlockSchema = {
    properties?: Record<string, ChaiBlockPropsSchema>;
    allOf?: any[];
    oneOf?: any[];
} & Partial<Pick<ChaiBlockPropsSchema, "required" | "dependencies" | "ui" | "title" | "description" | "default">>;

declare type ChaiBlockUiSchema = UiSchema;

declare interface ChaiDesignTokens {
    [uniqueId: string]: {
        name: string;
        value: string;
        archived?: boolean;
    };
}

declare type ChaiFont = ChaiFontByUrl | ChaiFontBySrc | ChaiSystemFont;

declare type ChaiFontBySrc = {
    family: string;
    src: ChaiFontSource[];
    fallback: string;
};

declare type ChaiFontByUrl = {
    family: string;
    url: string;
    fallback: string;
};

declare type ChaiFontSource = {
    url: string;
    format: string;
    fontWeight?: string;
    fontStyle?: string;
    fontDisplay?: string;
    fontStretch?: string;
};

declare type ChaiPage = {
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

declare type ChaiPageProps<T = Record<string, any>> = {
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

declare type ChaiPageType = {
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

declare type ChaiSystemFont = {
    family: string;
    fallback: string;
};

export declare const closestBlockProp: (blockType: keyof typeof REGISTERED_CHAI_BLOCKS, prop: string) => ChaiBlockPropsSchema;

declare interface CollectionConfig<T> {
    id: string;
    name: string;
    icon?: string;
    filters?: {
        id: string;
        name: string;
    }[];
    sort?: {
        id: string;
        name: string;
    }[];
    fetch: (params: CollectionFetchParams) => Promise<{
        items: T[];
        totalItems?: number;
    }>;
}

export declare type CollectionFetchParams = {
    block: ChaiBlock;
    inBuilder: boolean;
    draft: boolean;
    lang: string;
    pageProps: {
        slug: string;
        params?: Record<string, string>;
        [key: string]: any;
    };
};

export declare const COLLECTIONS: Record<string, CollectionConfig<any>>;

export declare const defaultChaiStyles: (classes: string) => string;

export declare const getAIBlockProps: (type: keyof typeof REGISTERED_CHAI_BLOCKS) => never[] | (ChaiBlockConfig & {
    component: default_2.ComponentType<ChaiBlockComponentProps>;
});

export declare const getAllRegisteredFonts: () => ChaiFont[];

export declare const getBlockDefaultProps: (type: keyof typeof REGISTERED_CHAI_BLOCKS) => Record<string, any>;

export declare const getBlockFormSchemas: (type: keyof typeof REGISTERED_CHAI_BLOCKS) => {
    schema: RJSFSchema;
    uiSchema: UiSchema;
} | undefined;

/* Excluded from this release type: getBlockSchema */

/* Excluded from this release type: getBlockUiSchema */

export declare const getChaiCollection: (key: string) => CollectionConfig<any>;

export declare const getChaiCollections: () => CollectionConfig<any>[];

export declare const getChaiGlobalData: (args: {
    lang: string;
    draft: boolean;
    inBuilder: boolean;
}) => Promise<any>;

export declare const getChaiPageType: (key: keyof typeof PAGE_TYPES) => ChaiPageType;

export declare const getChaiPageTypes: () => ChaiPageType[];

export declare const getDefaultBlockProps: (type: keyof typeof REGISTERED_CHAI_BLOCKS) => Record<string, any>;

export declare const getFontStyles: (headingFont: string, bodyFont: string) => Promise<{
    fontStyles: string;
    preloads: string[];
}>;

export declare const getI18nBlockProps: (type: keyof typeof REGISTERED_CHAI_BLOCKS) => never[] | (ChaiBlockConfig & {
    component: default_2.ComponentType<ChaiBlockComponentProps>;
});

export declare const getRegisteredChaiBlock: (type: keyof typeof REGISTERED_CHAI_BLOCKS) => (ChaiBlockConfig & {
    component: default_2.ComponentType<ChaiBlockComponentProps>;
}) | undefined;

export declare const getRegisteredFont: (family: string) => ChaiFont | undefined;

export declare const PAGE_TYPES: Record<string, ChaiPageType>;

export declare const registerChaiBlock: (component: default_2.ComponentType<ChaiBlockComponentProps<any>>, options: ChaiBlockConfig) => void;

export declare const registerChaiBlockProps: (blockSchema: ChaiBlockPropsSchema) => ChaiBlockRJSFSchemas;

export declare const registerChaiBlockSchema: (blockSchema: ChaiBlockPropsSchema) => ChaiBlockRJSFSchemas;

export declare function registerChaiCollection<T = Record<any, any>>(id: string, collection: Omit<CollectionConfig<T>, "id">): void;

export declare const registerChaiFont: (family: string, font: Omit<ChaiFontBySrc, "family">) => void;

export declare const registerChaiGlobalDataProvider: <T>(globalDataProvider: (args: {
    lang: string;
    draft: boolean;
    inBuilder: boolean;
}) => Promise<T>) => void;

export declare const registerChaiPageType: (key: string, pageTypeOptions: Omit<ChaiPageType, "key" | "hasSlug">) => void;

export declare const registerChaiPartialType: (key: string, pageTypeOptions: Omit<ChaiPageType, "key">) => void;

export declare const registerChaiServerBlock: (component: default_2.ComponentType<ChaiBlockComponentProps<any>>, options: Pick<ChaiBlockConfig, "type" | "dataProvider" | "i18nProps" | "aiProps">) => void;

declare const REGISTERED_CHAI_BLOCKS: Record<string, ChaiBlockConfig & {
    component: default_2.ComponentType<ChaiBlockComponentProps>;
}>;

export declare const runtimeProp: (options: ChaiBlockPropsSchema) => ChaiBlockPropsSchema;

export declare const setChaiBlockComponent: (type: keyof typeof REGISTERED_CHAI_BLOCKS, component: default_2.ComponentType<ChaiBlockComponentProps<any>>) => void;

export declare const setChaiBlockDataProvider: <K extends Record<string, any> = Record<string, any>>(type: string, dataProvider: (args: {
    lang: string;
    draft: boolean;
    inBuilder: boolean;
    block: ChaiBlock<K>;
    pageProps: ChaiPageProps;
}) => Promise<K>) => void;

export declare const setChaiServerBlockDataProvider: <K extends Record<string, any> = Record<string, any>>(type: keyof typeof REGISTERED_CHAI_BLOCKS, dataProvider: (args: {
    lang: string;
    draft: boolean;
    inBuilder: boolean;
    block: ChaiBlock<K>;
    pageProps: ChaiPageProps;
}) => Promise<K>) => void;

export declare const StylesProp: (defaultClasses?: string) => ChaiBlockPropsSchema;

export declare const stylesProp: (defaultClasses?: string) => ChaiBlockPropsSchema;

export declare const syncBlocksWithDefaultProps: (blocks: ChaiBlock[]) => ChaiBlock[];

export declare const syncBlocksWithDefaults: (blocks: ChaiBlock[]) => ChaiBlock[];

export declare const useRegisteredChaiBlock: (type: keyof typeof REGISTERED_CHAI_BLOCKS) => (ChaiBlockConfig & {
    component: default_2.ComponentType<ChaiBlockComponentProps>;
}) | null;

export declare const useRegisteredChaiBlocks: () => Record<string, ChaiBlockConfig & {
    component: default_2.ComponentType<ChaiBlockComponentProps>;
}>;

export declare const useRegisteredFonts: () => ChaiFont[];

export { }
