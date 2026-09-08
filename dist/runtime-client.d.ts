import { ComponentType } from 'react';
import { ReactNode } from 'react';

export declare const ADD_BLOCK_TABS: Record<string, AddBlockTab>;

export declare type AddBlockTab = {
    id: string;
    tab: React.ComponentType;
    tabContent: React.ComponentType;
};

export declare const CHAI_BUILDER_PANELS: Record<string, ChaiSidebarPanel>;

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

declare type ChaiFlagOptions = {
    key: string;
    value?: any;
    description?: string;
};

declare type ChaiLibrary<T = Record<string, any>> = {
    id: string;
    name: string;
    blocks?: ChaiLibraryBlock[];
    description?: string;
} & T;

declare type ChaiLibraryBlock<T = Record<string, any>> = {
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

export declare const getChaiLibrary: (id: string) => ChaiLibraryConfig<any>;

export declare const getPreImportHTML: (code: string) => Promise<string>;

declare type HTMLString = string;

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

export declare const useChaiAddBlockTabs: () => AddBlockTab[];

export declare const useChaiBlockSettingComponents: (type: "widget" | "field" | "template") => Record<string, React.ComponentType<any>>;

export declare const useChaiFeatureFlag: (flagKey: string) => boolean;

export declare const useChaiFeatureFlags: () => Record<string, ChaiFlagOptions>;

export declare const useChaiLibraries: () => ChaiLibraryConfig<any>[];

export declare const useChaiSidebarPanels: (position: "top" | "bottom") => ChaiSidebarPanel[];

export declare const useMediaManagerComponent: () => ComponentType<MediaManagerProps>;

export declare const useSaveToLibraryComponent: () => ComponentType<SaveToLibraryProps> | null;

export declare const useToggleChaiFeatureFlag: (flagKey: string) => () => void;

export declare const useTopBarComponent: () => ComponentType<    {}>;

export { }
