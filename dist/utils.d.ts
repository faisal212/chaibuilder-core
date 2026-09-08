import { Config } from 'tailwindcss/types/config';
import { default as default_2 } from '@tailwindcss/forms';
import { default as default_3 } from '@tailwindcss/typography';
import { PluginCreator } from 'tailwindcss/types/config';

declare type ChaiBorderRadiusValue = false | string;

/**
 * This is the tailwind plugin for chai builder
 * @param {*} theme
 * @returns typeof plugin
 */
export declare const chaiBuilderPlugin: {
    handler: PluginCreator;
    config?: Partial<Config>;
};

declare type ChaiThemeOptions = {
    fontFamily: false | Record<VariableKey, string>;
    borderRadius: ChaiBorderRadiusValue;
    colors: {
        group: string;
        items: Record<VariableKey, [HSLColor, HSLColor]>;
    }[];
};

export declare const getChaiBuilderTailwindConfig: ({ content, theme }: {
    content: string[];
    theme?: Record<string, any>;
}) => {
    darkMode: string;
    content: string[];
    theme: {
        extend: {
            colors: {
                border: string;
                input: string;
                ring: string;
                background: string;
                foreground: string;
                primary: {
                    DEFAULT: string;
                    foreground: string;
                };
                secondary: {
                    DEFAULT: string;
                    foreground: string;
                };
                destructive: {
                    DEFAULT: string;
                    foreground: string;
                };
                muted: {
                    DEFAULT: string;
                    foreground: string;
                };
                accent: {
                    DEFAULT: string;
                    foreground: string;
                };
                popover: {
                    DEFAULT: string;
                    foreground: string;
                };
                card: {
                    DEFAULT: string;
                    foreground: string;
                };
            };
            borderRadius: {
                lg: string;
                md: string;
                sm: string;
            };
            keyframes: {
                "accordion-down": {
                    from: {
                        height: string;
                    };
                    to: {
                        height: string;
                    };
                };
                "accordion-up": {
                    from: {
                        height: string;
                    };
                    to: {
                        height: string;
                    };
                };
            };
            animation: {
                "accordion-down": string;
                "accordion-up": string;
            };
        };
    };
    plugins: ({
        handler: () => void;
    } | {
        handler: PluginCreator;
        config?: Partial<Config> | undefined;
    } | typeof default_2 | typeof default_3)[];
};

export declare const getChaiBuilderTheme: (themeOptions?: ChaiThemeOptions) => {
    fontFamily: {};
    borderRadius: {
        lg: string;
        md: string;
        sm: string;
    } | {
        lg?: undefined;
        md?: undefined;
        sm?: undefined;
    };
    colors: {};
    container: {
        center: boolean;
        padding: string;
        screens: {
            "2xl": string;
        };
    };
};

declare type HSLColor = string;

declare type VariableKey = string;

export { }
