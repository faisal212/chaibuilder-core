import { Atom } from 'jotai';
import { ClassValue } from 'clsx';
import { ComponentType } from 'react';
import { default as default_2 } from 'react';
import { default as default_3 } from 'undo-manager';
import { DragEvent as DragEvent_2 } from 'react';
import { default as i18n } from 'i18next';
import { JSX } from 'react/jsx-runtime';
import { PrimitiveAtom } from 'jotai';
import * as React_2 from 'react';
import { ReactNode } from 'react';
import { ThrottledFunction } from '@react-hookz/web';
import { useTranslation } from 'react-i18next';
import { WritableAtom } from 'jotai';

export declare const ADD_BLOCK_TABS: Record<string, AddBlockTab>;

declare type AddBlocks = {
    addCoreBlock: any;
    addPredefinedBlock: any;
};

export declare type AddBlockTab = {
    id: string;
    tab: React.ComponentType;
    tabContent: React.ComponentType;
};

export declare const CHAI_BUILDER_PANELS: Record<string, ChaiSidebarPanel>;

export declare const ChaiAddBlocksDialog: () => JSX.Element;

export declare const ChaiAddBlocksPanel: ({ className, showHeading, parentId, position, fromSidebar, }: {
    parentId?: string;
    showHeading?: boolean;
    className?: string;
    position?: number;
    fromSidebar?: boolean;
}) => JSX.Element;

declare type ChaiAskAiResponse = {
    blocks?: Array<{
        _id: string;
    } & Partial<ChaiBlock>>;
    usage?: Record<any, number>;
    error?: any;
};

export declare const ChaiAskAiUserPrompt: ({ blockId }: {
    blockId: string | undefined;
}) => JSX.Element;

declare type ChaiAsset = {
    url: string;
    id?: string;
    thumbnailUrl?: string;
    description?: string;
    width?: number;
    height?: number;
};

declare type ChaiBlock<T = Record<string, any>> = {
    _id: string;
    _name?: string;
    _parent?: string | null | undefined;
    _libBlock?: string;
    _type: string;
    partialBlockId?: string;
} & T;

export declare const ChaiBlockAttributesEditor: React_2.MemoExoticComponent<() => JSX.Element>;

/**
 *
 * @returns Block Setting
 */
export declare function ChaiBlockPropsEditor(): JSX.Element;

export declare function ChaiBlockStyleEditor(): JSX.Element | null;

declare type ChaiBlocksWithDesignTokens = Record<string, string>;

declare type ChaiBorderRadiusValue = false | string;

declare type ChaiBreakpoint = {
    title: string;
    content: string;
    breakpoint: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | string;
    icon: default_2.ReactNode | Element;
    width: number;
};

export declare const ChaiBuilderCanvas: default_2.FC;

/**
 * ChaiBuilder is the main entry point for the Chai Builder Studio.
 */
export declare const ChaiBuilderEditor: default_2.FC<ChaiBuilderEditorProps>;

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

declare type ChaiCollectoin = {
    id: string;
    name: string;
    description?: string;
    filters?: FilterOptions[];
    sorts?: SortOptions[];
};

export declare function ChaiDarkModeSwitcher(): JSX.Element;

export declare const ChaiDefaultBlocks: ({ parentId, position, gridCols, disableBlockGroupsSidebar, }: {
    parentId?: string;
    position?: number;
    gridCols?: string;
    disableBlockGroupsSidebar?: boolean;
}) => JSX.Element;

declare interface ChaiDesignTokens {
    [uniqueId: string]: {
        name: string;
        value: string;
        archived?: boolean;
    };
}

/**
 * @component ChaiDraggableBlock
 * @description
 * A draggable wrapper component for Chai Builder blocks.
 * Supports multiple input formats: HTML strings, single blocks, or block arrays.
 * Can handle both synchronous and asynchronous data loading.
 *
 * @example
 * // With HTML
 * <ChaiDraggableBlock html="<div>Content</div>">
 *   <div>Drag me</div>
 * </ChaiDraggableBlock>
 *
 * @example
 * // With block object
 * <ChaiDraggableBlock block={{ type: "Box", props: {} }}>
 *   <div>Drag me</div>
 * </ChaiDraggableBlock>
 *
 * @example
 * // With async blocks
 * <ChaiDraggableBlock blocks={async () => await fetchBlocks()}>
 *   <div>Drag me</div>
 * </ChaiDraggableBlock>
 *
 * @example
 * // With Image block
 * <ChaiDraggableBlock type="Image" block={{ image: "https://example.com/image.jpg" }}>
 *   <img src="https://example.com/image.jpg" alt="Image" />
 * </ChaiDraggableBlock>
 */
export declare const ChaiDraggableBlock: ({ block, html, blocks, children, onDragStart: customOnDragStart, onDragEnd: customOnDragEnd, draggable: customDraggable, className, type, }: ChaiDraggableBlockProps) => JSX.Element;

declare type ChaiDraggableBlockProps = {
    html?: string | (() => Promise<string>);
    block?: any | (() => Promise<any>);
    blocks?: any[] | (() => Promise<any[]>);
    children: default_2.ReactNode;
    onDragStart?: (e: DragEvent_2) => void;
    onDragEnd?: (e: DragEvent_2) => void;
    draggable?: boolean;
    className?: string;
    type?: "Box" | "Image";
};

export declare const ChaiExportCodeModal: () => JSX.Element;

declare type ChaiFlagOptions = {
    key: string;
    value?: any;
    description?: string;
};

export declare const ChaiImportHTML: ({ parentId, position, fromSidebar, }: {
    parentId?: string;
    position?: number;
    fromSidebar?: boolean;
}) => JSX.Element;

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

declare type ChaiLibraryConfig<T> = {
    id: string;
    name: string;
    description: string;
    getBlocksList: (library: ChaiLibrary) => Promise<ChaiLibraryBlock<T>[]>;
    getBlock: ({ library, block, }: {
        library: ChaiLibrary;
        block: ChaiLibraryBlock<T>;
    }) => Promise<HTMLString | ChaiBlock[]>;
};

declare interface ChaiLoggedInUser {
    id: string;
    email: string;
    name: string;
    avatar?: string;
    role?: string;
}

export declare const ChaiOutline: () => JSX.Element;

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

declare type ChaiSavePageData = {
    autoSave: boolean;
    blocks: ChaiBlock[];
    needTranslations?: boolean;
    designTokens: ChaiDesignTokens;
    partialIds?: string[];
    linkPageIds?: string[];
};

declare type ChaiSaveWebsiteData = {
    type: "THEME";
    data: ChaiTheme;
} | {
    type: "DESIGN_TOKENS";
    data: ChaiDesignTokens;
};

export declare const ChaiScreenSizes: ({ openDelay, canvas, tooltip, buttonClass, activeButtonClass, }: {
    openDelay?: number;
    canvas?: boolean;
    tooltip?: boolean;
    buttonClass?: string;
    activeButtonClass?: string;
}) => JSX.Element;

export declare interface ChaiSidebarPanel {
    id: string;
    position: "top" | "bottom";
    view?: "standard" | "modal" | "overlay" | "drawer";
    button: React.ComponentType<{
        isActive: boolean;
        show: () => void;
        panelId: string;
        position: "top" | "bottom";
    }>;
    label: string;
    panel?: ComponentType;
    width?: number;
    isInternal?: boolean;
    icon?: React.ReactNode;
}

declare interface ChaiSiteWideUsageData {
    [pageId: string]: {
        name: string;
        isPartial: boolean;
        partialBlocks: string[];
        links: string[];
        designTokens: ChaiBlocksWithDesignTokens;
    };
}

export declare type ChaiTheme = {
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

export declare const ChaiThemeConfigPanel: React_2.FC<ThemeConfigProps>;

declare type ChaiThemeOptions = {
    fontFamily: false | Record<VariableKey, string>;
    borderRadius: ChaiBorderRadiusValue;
    colors: {
        group: string;
        items: Record<VariableKey, [HSLColor, HSLColor]>;
    }[];
};

export declare const ChaiUILibrariesPanel: ({ parentId, position, fromSidebar, }: {
    parentId?: string;
    position?: number;
    fromSidebar?: boolean;
}) => JSX.Element;

export declare const ChaiUndoRedo: () => JSX.Element;

export declare const defaultChaiLibrary: ({ baseUrl, }?: {
    baseUrl?: string;
}) => {
    name: string;
    description: string;
    getBlocksList: (_library: ChaiLibrary) => Promise<any>;
    getBlock: ({ block }: {
        library: ChaiLibrary;
        block: ChaiLibraryBlock<any>;
    }) => Promise<string>;
};

declare type FilterOptions = {
    id: string;
    name: string;
    description?: string;
};

/**
 * Get the unique uuid
 */
export declare function generateBlockId(length?: number): string;

/**
 *
 * @param html
 * @returns Blocks JSON
 */
declare const getBlocksFromHTML: (html: string) => ChaiBlock[];
export { getBlocksFromHTML as convertHTMLToChaiBlocks }
export { getBlocksFromHTML }

export declare const getChaiLibrary: (id: string) => ChaiLibraryConfig<any>;

/**
 * Get the value and unit for a tw class
 * @param className
 */
export declare const getClassValueAndUnit: (className: string) => {
    unit: string;
    value: string;
};

export declare const getPreImportHTML: (code: string) => Promise<string>;

declare type HexColor = string;

declare type HSLColor = string;

declare type HTMLString = string;

export { i18n }

export declare const IfChaiFeatureFlag: ({ flagKey, children }: {
    flagKey: string;
    children: React.ReactNode;
}) => ReactNode;

export declare type MediaManagerProps = {
    assetId?: string;
    close: () => void;
    onSelect: (assets: ChaiAsset | ChaiAsset[]) => void;
    mode?: "image" | "video" | "audio";
};

export declare const mergeClasses: (...inputs: ClassValue[]) => string;

declare type Options = {
    blockId?: string;
    additionalCoreBlocks?: string[];
};

export declare const pageBlocksAtomsAtom: WritableAtom<PrimitiveAtom<ChaiBlock>[], [{
type: "remove";
atom: PrimitiveAtom<ChaiBlock>;
} | {
type: "insert";
value: ChaiBlock;
before?: PrimitiveAtom<ChaiBlock> | undefined;
} | {
type: "move";
atom: PrimitiveAtom<ChaiBlock>;
before?: PrimitiveAtom<ChaiBlock> | undefined;
}], void>;

/**
 * Unified state for a single partial block entry
 */
export declare type PartialBlockEntry = {
    blocks: ChaiBlock[];
    dependencies: string[];
    status: "idle" | "loading" | "loaded" | "error";
    error?: string;
};

/**
 * Consolidated atom storing all partial block data
 */
export declare const partialBlocksAtom: PrimitiveAtom<Record<string, PartialBlockEntry>> & {
    init: Record<string, PartialBlockEntry>;
};

export declare const PERMISSIONS: {
    ADD_BLOCK: string;
    DELETE_BLOCK: string;
    EDIT_BLOCK: string;
    MOVE_BLOCK: string;
    EDIT_THEME: string;
    SAVE_PAGE: string;
    EDIT_STYLES: string;
    IMPORT_HTML: string;
    CREATE_LIBRARY_BLOCK: string;
    CREATE_LIBRARY_GROUP: string;
    EDIT_LIBRARY_BLOCK: string;
    DELETE_LIBRARY_BLOCK: string;
};

declare type ReactComponentType = default_2.ComponentType<any>;

export declare const registerChaiAddBlockTab: (id: string, tab: Omit<AddBlockTab, "id">) => void;

export declare const registerChaiBlockSettingField: (id: string, component: React.ComponentType<any>) => void;

export declare const registerChaiBlockSettingTemplate: (id: string, component: React.ComponentType<any>) => void;

export declare const registerChaiBlockSettingWidget: (id: string, component: React.ComponentType<any>) => void;

export declare const registerChaiFeatureFlag: (key: string, flagOptions: Omit<ChaiFlagOptions, "key">) => void;

export declare const registerChaiFeatureFlags: (flags: Record<string, Omit<ChaiFlagOptions, "key">>) => void;

export declare const registerChaiLibrary: <T extends Record<string, any> = Record<string, any>>(id: string, library: Omit<ChaiLibraryConfig<T>, "id">) => void;

export declare const registerChaiMediaManager: (component: React.ComponentType<MediaManagerProps>) => void;

export declare const registerChaiPreImportHTMLHook: (fn: (code: string) => Promise<string>) => void;

export declare const registerChaiSaveToLibrary: (component: ComponentType<SaveToLibraryProps>) => void;

export declare const registerChaiSidebarPanel: (panelId: string, panelOptions: Omit<ChaiSidebarPanel, "id">) => void;

export declare const registerChaiTopBar: (component: React.ComponentType) => void;

export declare const resetSaveToLibrary: () => void;

export declare const RJSF_EXTENSIONS: Record<string, {
    id: string;
    component: React.ComponentType<any>;
    type: string;
}>;

export declare type SaveToLibraryProps = {
    blockId: string;
    blocks: ChaiBlock[];
    close: () => void;
};

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

declare interface ThemeConfigProps {
    className?: string;
}

export declare type TStyleBlock = {
    blockId: string;
    id: string;
    prop: string;
};

export declare const undoManager: default_3;

export declare const useAddBlock: () => AddBlocks;

export declare const useBlocksHtmlForAi: () => (options?: Options) => string;

export declare const useBlocksStore: () => [ChaiBlock[], (args_0: ChaiBlock[] | ((prev: ChaiBlock[]) => ChaiBlock[])) => void];

export declare const useBlocksStoreUndoableActions: () => {
    moveBlocks: (blockIds: string[], parent: string | undefined, position: number) => void;
    addBlocks: (newBlocks: ChaiBlock[], parent?: string, position?: number) => void;
    removeBlocks: (blocks: ChaiBlock[]) => void;
    updateBlocks: (blockIds: string[], props: Partial<ChaiBlock>, oldPropsState?: Partial<ChaiBlock>) => void;
    updateBlocksRuntime: (blockIds: string[], props: Record<string, any>) => void;
    setNewBlocks: (newBlocks: ChaiBlock[]) => void;
    updateMultipleBlocksProps: (blocks: Array<{
        _id: string;
    } & Partial<ChaiBlock>>) => void;
};

export declare const useChaiAddBlockTabs: () => AddBlockTab[];

export declare const useChaiBlockSettingComponents: (type: "widget" | "field" | "template") => Record<string, React.ComponentType<any>>;

export declare const useChaiFeatureFlag: (flagKey: string) => boolean;

export declare const useChaiFeatureFlags: () => Record<string, ChaiFlagOptions>;

export declare const useChaiLibraries: () => ChaiLibraryConfig<any>[];

export declare const useChaiSidebarPanels: (position: "top" | "bottom") => ChaiSidebarPanel[];

/**
 * useDuplicateBlock
 */
export declare const useDuplicateBlocks: () => Function;

export declare const useGetBlockAtomValue: (splitAtoms: Atom<Atom<ChaiBlock>[]>) => (idOrAtom: string | Atom<ChaiBlock>) => ChaiBlock | null;

export declare const useHtmlToBlocks: () => (html: string) => ChaiBlock[];

export declare const useI18nBlocks: () => (lang?: string | "ALL") => Record<string, any>[];

export declare const useLanguages: () => {
    languages: string[];
    fallbackLang: string;
    selectedLang: string;
    setSelectedLang: (lang: string) => void;
};

export declare const useMediaManagerComponent: () => ComponentType<MediaManagerProps>;

export declare const usePartialBlocksStore: () => {
    getPartialBlocks: (partialBlockId: string) => ChaiBlock[];
    reset: () => void;
};

export declare const useRemoveBlocks: () => (blockIds: Array<string>) => void;

export declare const useReplaceBlock: () => (blockId: string | undefined, replacementBlocks: ChaiBlock[]) => void;

export declare const useSavePage: () => {
    savePage: ThrottledFunction<(autoSave?: boolean, force?: boolean) => Promise<true | undefined>>;
    savePageAsync: (force?: boolean) => Promise<true | undefined>;
    saveState: "SAVED" | "SAVING" | "UNSAVED";
    setSaveState: (args_0: "SAVED" | "SAVING" | "UNSAVED" | ((prev: "SAVED" | "SAVING" | "UNSAVED") => "SAVED" | "SAVING" | "UNSAVED")) => void;
    needTranslations: () => boolean;
};

export declare const useSaveToLibraryComponent: () => ComponentType<SaveToLibraryProps> | null;

/**
 * useSelectedBlock hook
 */
export declare const useSelectedBlock: () => ChaiBlock | undefined;

/**
 * TODO: Add test cases for this hook
 */
export declare const useSelectedBlockHierarchy: () => ChaiBlock[];

/**
 *
 */
export declare const useSelectedBlockIds: () => readonly [string[], (args_0: string[] | ((prev: string[]) => string[])) => void, (blockId: string) => void];

/**
 * @group Hooks
 * @returns {TStyleBlock[]} selected styling blocks
 */
export declare const useSelectedStylingBlocks: () => [TStyleBlock[], (args_0: TStyleBlock[] | ((prev: TStyleBlock[]) => TStyleBlock[])) => void];

export declare const useSidebarActivePanel: () => [string | null, (args_0: string | ((prev: string | null) => string | null) | null) => void];

export declare const useStreamMultipleBlocksProps: () => (blocks: Array<{
    _id: string;
} & Partial<ChaiBlock>>) => Promise<void>;

export declare const useTheme: () => readonly [ChaiTheme, (args_0: ChaiTheme | Partial<ChaiTheme> | ((prev: ChaiTheme | Partial<ChaiTheme>) => ChaiTheme | Partial<ChaiTheme>)) => void];

export declare const useThemeOptions: () => ChaiThemeOptions;

export declare const useToggleChaiFeatureFlag: (flagKey: string) => () => void;

export declare const useTopBarComponent: () => ComponentType<    {}>;

export { useTranslation }

export declare const useUndoManager: () => {
    add: (action: any) => void;
    undo: () => void;
    redo: () => void;
    hasUndo: () => boolean;
    hasRedo: () => boolean;
    clear: () => void;
};

/**
 *
 */
export declare const useUpdateBlocksProps: () => (blockIds: Array<string>, props: Record<string, any>, prevPropsState?: Record<string, any>) => void;

export declare const useUpdateMultipleBlocksProps: () => (blocks: Array<{
    _id: string;
} & Partial<ChaiBlock>>) => void;

declare type VariableKey = string;

export { }
