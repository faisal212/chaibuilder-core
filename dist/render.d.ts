import { JSX } from 'react/jsx-runtime';

export declare const applyChaiDataBinding: (block: Record<string, string>, pageExternalData: Record<string, any>) => Record<string, string>;

export declare const applyDesignTokens: (blocks: ChaiBlock[], designTokens: ChaiDesignTokens) => ChaiBlock[];

export declare function AsyncRenderChaiBlocks(props: RenderChaiBlocksProps): Promise<JSX.Element | null>;

declare type ChaiBlock<T = Record<string, any>> = {
    _id: string;
    _name?: string;
    _parent?: string | null | undefined;
    _libBlock?: string;
    _type: string;
    partialBlockId?: string;
} & T;

declare interface ChaiDesignTokens {
    [uniqueId: string]: {
        name: string;
        value: string;
        archived?: boolean;
    };
}

declare type ChaiFontByUrl = {
    family: string;
    url: string;
    fallback: string;
};

declare type ChaiPageProps<T = Record<string, any>> = {
    slug: string;
    searchParams?: Record<string, string>;
} & T;

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

/**
 *
 * @param html
 * @returns Blocks JSON
 */
export declare const convertHTMLToChaiBlocks: (html: string) => ChaiBlock[];

/**
 * This function converts the chai format content to chai blocks
 * @param chaiFormatContent
 */
export declare const convertToBlocks: (chaiFormatContent: string) => ChaiBlock[];

export declare const getChaiThemeCssVariables: ({ theme }: {
    theme: ChaiTheme;
}) => string;

export declare function getMergedPartialBlocks(blocks: ChaiBlock[], partials: Record<string, ChaiBlock[]>): ChaiBlock[];

/**
 * Get the tailwind css for the blocks
 * @param blocks - The blocks to get the tailwind css for
 * @param includeBaseStyles - Whether to include the base styles
 * @returns The tailwind css for the blocks
 */
export declare const getStylesForBlocks: (blocks: ChaiBlock[], includeBaseStyles?: boolean) => Promise<string>;

export declare const getThemeFontsCSSImport: (fonts: ChaiFontByUrl[]) => string;

export declare const getThemeFontsLinkMarkup: (fonts: ChaiFontByUrl[]) => string;

declare type HexColor = string;

declare type HSLColor = string;

export declare function RenderChaiBlocks(props: RenderChaiBlocksProps_2): JSX.Element | null;

declare type RenderChaiBlocksProps = {
    blocks: ChaiBlock[];
    parent?: string;
    externalData?: Record<string, any>;
    lang?: string;
    fallbackLang?: string;
    pageProps?: ChaiPageProps;
    draft?: boolean;
    dataProviderMetadataCallback?: (block: ChaiBlock, meta: Record<string, any>) => void;
    dataProviders?: Record<string, Promise<Record<string, any>>>;
};

declare type RenderChaiBlocksProps_2 = {
    blocks: ChaiBlock[];
    parent?: string;
    externalData?: Record<string, unknown>;
    lang?: string;
    fallbackLang?: string;
    pageProps?: ChaiPageProps;
    draft?: boolean;
    dataProviderMetadataCallback?: (block: ChaiBlock, meta: Record<string, any>) => void;
};

export { }
