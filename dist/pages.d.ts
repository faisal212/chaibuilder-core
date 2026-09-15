import { default as default_2 } from 'react';
import { JSX } from 'react/jsx-runtime';
import { RealtimeClient } from '@supabase/supabase-js';
import { UseMutationResult } from '@tanstack/react-query';
import { UseQueryResult } from '@tanstack/react-query';

declare type AICompleteCallback = {
    success: boolean;
    content?: string;
    error?: Error | string;
    model: string;
    timestamp: number;
};

declare type AICompletionEvent = {
    type: "completion";
    content: string;
    model: string;
    timestamp: number;
};

declare type AIContext = {
    site?: Record<string, any>;
    page?: Record<string, any>;
};

declare type AIErrorCallback = {
    error: Error | string;
    model: string;
    timestamp: number;
};

declare type AIErrorEvent = {
    type: "error";
    error: Error | string;
    model?: string;
    timestamp: number;
};

declare type AIEvent = AICompletionEvent | AIErrorEvent | AIStreamStartEvent;

declare type AIModel = {
    id: string;
    name: string;
    provider: string;
    description: string;
    multiplier: number;
};

declare type AIStreamStartEvent = {
    type: "stream_start";
    model: string;
    timestamp: number;
};

declare type AISuccessCallback = {
    content: string;
    model: string;
    timestamp: number;
};

export declare const ChaiAiPanel: ({ models, onAIEvent, onSuccess, onError, onComplete, context, ...rest }: ChaiAiPanelProps) => JSX.Element;

export declare interface ChaiAiPanelProps {
    models?: AIModel[];
    onAIEvent?: (event: AIEvent) => void;
    onSuccess?: (data: AISuccessCallback) => void;
    onError?: (data: AIErrorCallback) => void;
    onComplete?: (data: AICompleteCallback) => void;
    context?: AIContext;
    [key: string]: any;
}

declare type ChaiAskAiResponse = {
    blocks?: Array<{
        _id: string;
    } & Partial<ChaiBlock>>;
    usage?: Record<any, number>;
    error?: any;
};

declare type ChaiBlock<T = Record<string, any>> = {
    _id: string;
    _name?: string;
    _parent?: string | null | undefined;
    _libBlock?: string;
    _type: string;
    partialBlockId?: string;
} & T;

declare type ChaiBlocksWithDesignTokens = Record<string, string>;

declare type ChaiBreakpoint = {
    title: string;
    content: string;
    breakpoint: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | string;
    icon: default_2.ReactNode | Element;
    width: number;
};

declare interface ChaiBuilderEditorProps {
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

declare type ChaiCollectoin = {
    id: string;
    name: string;
    description?: string;
    filters?: FilterOptions[];
    sorts?: SortOptions[];
};

declare interface ChaiDesignTokens {
    [uniqueId: string]: {
        name: string;
        value: string;
        archived?: boolean;
    };
}

export declare const ChaiJsonInput: React.FC<SmartJsonInputProps>;

declare interface ChaiLoggedInUser {
    id: string;
    email: string;
    name: string;
    avatar?: string;
    role?: string;
}

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

declare interface ChaiSiteWideUsageData {
    [pageId: string]: {
        name: string;
        isPartial: boolean;
        partialBlocks: string[];
        links: string[];
        designTokens: ChaiBlocksWithDesignTokens;
    };
}

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

export declare const ChaiWebsiteBuilder: (props: ChaiWebsiteBuilderProps) => JSX.Element;

declare type ChaiWebsiteBuilderProps = {
    hasReactQueryProvider?: boolean;
    topLeftCorner?: React.FC;
    apiUrl?: string;
    getPreviewUrl?: (slug: string) => string;
    getLiveUrl?: (slug: string) => string;
    onLogout?: (reason?: string) => void;
    getAccessToken?: () => Promise<string>;
    currentUser: LoggedInUser | null;
} & Pick<ChaiBuilderEditorProps, "onError" | "translations" | "locale" | "htmlDir" | "autoSave" | "autoSaveActionsCount" | "fallbackLang" | "languages" | "themePresets" | "flags" | "structureRules">;

declare type ChaiWebsiteSetting = {
    appKey: string;
    fallbackLang: string;
    languages: string[];
    theme: ChaiTheme;
    settings: Record<string, any>;
    designTokens: ChaiDesignTokens;
    appChanges?: string[];
};

declare type CHANNEL_STATES = "JOINED" | "LEFT" | "ERROR" | "CLOSED" | "JOINING" | "LEAVING";

/**
 * Realtime Adapter Interface
 *
 * This interface abstracts the realtime functionality to support multiple
 * realtime service providers (Supabase, Pusher, Ably, etc.)
 */
/**
 * Represents the status of a channel subscription
 */
export declare type ChannelStatus = "SUBSCRIBED" | "CHANNEL_ERROR" | "TIMED_OUT" | "CLOSED";

declare type CheckUserAccessResponse = {
    access: boolean;
    role: string;
    permissions: string[] | null;
};

/**
 * Creates a RealtimeAdapter from a Supabase RealtimeClient
 *
 * This is a convenience function for users migrating from the old API
 * where they passed the websocket/RealtimeClient directly.
 *
 * @param websocket - Supabase RealtimeClient instance
 * @returns RealtimeAdapter that wraps the Supabase client
 *
 * @example
 * ```tsx
 * import { createClient } from '@supabase/supabase-js';
 * import { createRealtimeAdapter } from '@chaibuilder/sdk/pages';
 *
 * const supabase = createClient(url, key);
 * const realtimeAdapter = createRealtimeAdapter(supabase.realtime);
 *
 * // Pass to ChaiWebsiteBuilder
 * <ChaiWebsiteBuilder
 *   {...props}
 *   realtimeAdapter={realtimeAdapter}
 * />
 * ```
 */
export declare function createRealtimeAdapter(websocket: RealtimeClient): SupabaseRealtimeAdapter;

declare type FilterOptions = {
    id: string;
    name: string;
    description?: string;
};

declare type HexColor = string;

declare type HSLColor = string;

export declare const ImagePicker: default_2.FC<ImagePickerProps>;

declare interface ImagePickerProps {
    assetId?: string;
    assetUrl?: string;
    onChange: (value: {
        url: string;
        id: string;
    }) => void;
    className?: string;
    placeholder?: string;
    disabled?: boolean;
}

export declare const LanguageSwitcher: ({ showAdd, goToDefaultLang, }: {
    showAdd?: boolean;
    goToDefaultLang?: boolean;
}) => JSX.Element | null;

declare type LoggedInUser = {
    id: string;
    email: string;
    name: string;
    avatar?: string;
    metadata?: Record<string, any>;
};

export declare function NestedPathSelector({ data, onSelect, dataType, disabled }: NestedPathSelectorProps): JSX.Element;

declare type NestedPathSelectorProps = {
    data: Record<string, any>;
    onSelect: (path: string) => void;
    dataType?: "value" | "array" | "object";
    disabled?: boolean;
};

/**
 * Presence state structure
 */
export declare interface PresenceState {
    [key: string]: any[];
}

declare type ReactComponentType = default_2.ComponentType<any>;

/**
 * Main realtime adapter interface for creating channels
 */
export declare interface RealtimeAdapter {
    /**
     * Create or get a channel
     * @param channelId - Unique identifier for the channel
     * @param options - Provider-specific channel options
     * @returns Channel adapter instance
     */
    channel(channelId: string, options?: any): RealtimeChannelAdapter;
}

/**
 * Channel interface that wraps provider-specific channel implementations
 */
export declare interface RealtimeChannelAdapter {
    /**
     * The topic/name of the channel
     */
    topic: string;
    /**
     * The state of the channel
     */
    getState(): CHANNEL_STATES;
    /**
     * Subscribe to the channel
     * @param callback - Called when subscription status changes
     * @returns Promise that resolves when subscription is complete
     */
    subscribe(callback: (status: ChannelStatus) => void): Promise<void>;
    /**
     * Unsubscribe from the channel
     */
    unsubscribe(): void;
    /**
     * Listen for broadcast events
     * @param event - Event name to listen for
     * @param callback - Function to call when event is received
     */
    onBroadcast(event: string, callback: (payload: any) => void): void;
    /**
     * Listen for presence events (sync, join, leave)
     * @param event - Presence event type
     * @param callback - Function to call when event occurs
     */
    onPresence(event: string, callback: () => void): void;
    /**
     * Send a broadcast message to the channel
     * @param event - Event name
     * @param payload - Data to send
     */
    send(event: string, payload: any): Promise<void>;
    /**
     * Track presence in the channel
     * @param state - Presence state to track
     */
    track(state: any): Promise<void>;
    /**
     * Stop tracking presence in the channel
     */
    untrack(): void;
    /**
     * Get the current presence state
     * @returns Current presence state
     */
    presenceState(): PresenceState;
}

/**
 * Generic event payload structure
 */
export declare interface RealtimeEventPayload {
    event: string;
    payload: any;
    type: "broadcast" | "presence";
}

declare interface SmartJsonInputProps {
    value: string;
    onChange: (value: string) => void;
    disabled?: boolean;
    readOnly?: boolean;
    placeholder?: string;
    rows?: number;
    id?: string;
    pageData?: Record<string, any>;
    handleFieldInsert?: (field: string, inputId: string) => void;
    hasJsonLdForSelectedLang?: boolean;
    copyJsonLDFromDefaultPage?: () => void;
}

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

/**
 * Supabase implementation of RealtimeAdapter
 */
export declare class SupabaseRealtimeAdapter implements RealtimeAdapter {
    private client;
    constructor(client: RealtimeClient);
    channel(channelId: string, options?: any): RealtimeChannelAdapter;
}

export declare const useActivePage: () => {
    data: any;
    isFetching: boolean;
};

export declare const useApiUrl: () => string;

export declare const useBuilderFetch: () => ({ body, headers, url, streamResponse, }: {
    body: {
        action: string;
        data?: any;
    };
    headers?: Record<string, string>;
    url?: string;
    streamResponse?: boolean;
}) => Promise<any>;

export declare const useBuilderPageData: () => UseQueryResult<any, Error>;

export declare const useChaiAuth: () => {
    readonly isLoggedIn: boolean;
    readonly user: any;
    readonly logout: any;
};

export declare const useChaiPrimaryPage: () => {
    data: any;
    isFetching: boolean;
};

export declare const useChaiUserInfo: (currentEditor: string) => UseQueryResult<    {
name: string;
id: string;
email: string;
avatar: string;
}, Error>;

export declare const useClearAll: () => () => void;

export declare const useFallbackLang: () => string;

export declare const useFetch: () => (url: string | undefined, body: {
    action: string;
    data?: any;
}, headers?: Record<string, string>, streamResponse?: boolean) => Promise<any>;

export declare const useGotoPage: () => ({ pageId }: {
    pageId: string;
}) => void;

export declare const useLanguagePages: (pageId?: string | undefined) => UseQueryResult<any[] | null, Error>;

/**
 * Hook to fetch all page data in a single API call
 * Consolidates GET_DRAFT_PAGE, GET_BUILDER_PAGE_DATA, and GET_LANGUAGE_PAGES
 * Uses queryClient.setQueryData to populate individual caches for backward compatibility
 */
export declare const usePageAllData: () => UseQueryResult<any, Error>;

export declare const usePageTypes: () => UseQueryResult<any, Error>;

/**
 * Get the realtime adapter for page lock functionality.
 *
 * Users must create and pass their own adapter instance (e.g., SupabaseRealtimeAdapter).
 *
 * @returns RealtimeAdapter instance or null
 */
export declare const useRealtimeAdapter: () => RealtimeAdapter | null;

export declare const useReloadPage: () => () => Promise<void>;

export declare const useUpdateActivePageMetadata: () => UseMutationResult<any, Error, Record<string, any>, unknown>;

/**
 * Hook to periodically check if the user has access to the app
 * Also returns the user's role and permissions
 * @param checkInterval Interval in seconds (default 300 = 5 mins)
 * @returns Object with access, role, permissions, and loading states
 */
export declare const useUserPermissions: (checkInterval?: number) => UseQueryResult<CheckUserAccessResponse, Error>;

export declare const useWebsitePages: () => UseQueryResult<any, Error>;

export declare const useWebsiteSetting: () => UseQueryResult<ChaiWebsiteSetting, Error>;

export { }
