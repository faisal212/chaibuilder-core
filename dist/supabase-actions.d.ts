import { SupabaseClient } from '@supabase/supabase-js';
import { z } from 'zod';

/**
 * ChaiAction Interface
 * Defines the contract for all action handlers
 */
declare interface ChaiAction<T = any, K = any> {
    validate(data: T): boolean;
    setContext(context: ChaiActionContext): void;
    execute(data: T): Promise<K>;
}

/**
 * Action Context
 * Contains information and repositories needed by actions
 */
declare interface ChaiActionContext {
    appId: string;
    userId?: string;
}

/**
 * Base Action Class
 * Provides common functionality for all action handlers
 */
declare abstract class ChaiBaseAction<T = any, K = any> implements ChaiAction<T, K> {
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

declare interface ChaiUser {
    id: string;
    email: string;
    name: string;
    avatar: string;
}

/**
 * CHANGE_PASSWORD Action
 * Changes user password using Supabase Auth
 */
declare class ChangePasswordAction extends ChaiBaseAction<ChangePasswordInput> {
    private supabase;
    constructor(supabase: SupabaseClient);
    protected getValidationSchema(): z.ZodObject<{
        email: z.ZodString;
        oldPassword: z.ZodString;
        newPassword: z.ZodString;
        confirmPassword: z.ZodString;
    }, z.core.$strip>;
    execute(data: ChangePasswordInput): Promise<{
        data: {
            message: string;
        };
        status: number;
    } | {
        error: string;
        status: number;
    }>;
}

declare type ChangePasswordInput = z.infer<typeof ChangePasswordSchema>;

declare const ChangePasswordSchema: z.ZodObject<{
    email: z.ZodString;
    oldPassword: z.ZodString;
    newPassword: z.ZodString;
    confirmPassword: z.ZodString;
}, z.core.$strip>;

declare class DeleteAssetAction extends ChaiBaseAction<DeleteAssetInput> {
    private supabase;
    constructor(supabase: SupabaseClient);
    protected getValidationSchema(): z.ZodObject<{
        id: z.ZodString;
    }, z.core.$strip>;
    execute(data: DeleteAssetInput): Promise<{
        success: boolean;
    } | {
        error: string;
        status: number;
    }>;
}

declare type DeleteAssetInput = z.infer<typeof DeleteAssetSchema>;

declare const DeleteAssetSchema: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;

/**
 * DELETE_FROM_STORAGE Action
 * Generic storage delete action using Supabase Storage
 */
export declare class DeleteFromStorageAction extends ChaiBaseAction<DeleteFromStorageInput> {
    private supabase;
    private bucketName;
    constructor(supabase: SupabaseClient);
    protected getValidationSchema(): z.ZodObject<{
        key: z.ZodString;
    }, z.core.$strip>;
    execute(data: DeleteFromStorageInput): Promise<{
        error: string;
        status: number;
        data?: undefined;
    } | {
        data: {
            success: boolean;
        };
        status: number;
        error?: undefined;
    }>;
}

declare type DeleteFromStorageInput = z.infer<typeof DeleteFromStorageSchema>;

declare const DeleteFromStorageSchema: z.ZodObject<{
    key: z.ZodString;
}, z.core.$strip>;

declare class GetAssetAction extends ChaiBaseAction<GetAssetInput> {
    private supabase;
    constructor(supabase: SupabaseClient);
    protected getValidationSchema(): z.ZodObject<{
        id: z.ZodString;
    }, z.core.$strip>;
    execute(data: GetAssetInput): Promise<any>;
}

declare type GetAssetInput = z.infer<typeof GetAssetSchema>;

declare class GetAssetsAction extends ChaiBaseAction<GetAssetsInput> {
    private supabase;
    constructor(supabase: SupabaseClient);
    protected getValidationSchema(): z.ZodObject<{
        search: z.ZodOptional<z.ZodString>;
        page: z.ZodOptional<z.ZodNumber>;
        limit: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>;
    execute(data: GetAssetsInput): Promise<{
        assets: Partial<any>[];
        total: number;
        page: number;
        pageSize: number;
    } | {
        error: string;
        status: number;
    }>;
}

declare const GetAssetSchema: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;

declare type GetAssetsInput = z.infer<typeof GetAssetsSchema>;

declare const GetAssetsSchema: z.ZodObject<{
    search: z.ZodOptional<z.ZodString>;
    page: z.ZodOptional<z.ZodNumber>;
    limit: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;

/**
 * GET_CHAI_USER Action
 * Fetches user information from Supabase Auth
 */
declare class GetChaiUserAction extends ChaiBaseAction<GetChaiUserInput> {
    private supabase;
    constructor(supabase: SupabaseClient);
    protected getValidationSchema(): z.ZodObject<{
        userId: z.ZodString;
    }, z.core.$strip>;
    execute(data: GetChaiUserInput): Promise<{
        data: ChaiUser;
        status: number;
    } | {
        error: string;
        status: number;
    }>;
}

declare type GetChaiUserInput = z.infer<typeof GetChaiUserSchema>;

declare const GetChaiUserSchema: z.ZodObject<{
    userId: z.ZodString;
}, z.core.$strip>;

export declare const SupabaseAuthActions: (supabase: SupabaseClient) => {
    GET_CHAI_USER: GetChaiUserAction;
    CHANGE_PASSWORD: ChangePasswordAction;
};

export declare const SupabaseStorageActions: (supabase: SupabaseClient) => {
    UPLOAD_ASSET: UploadAssetAction;
    GET_ASSET: GetAssetAction;
    GET_ASSETS: GetAssetsAction;
    DELETE_ASSET: DeleteAssetAction;
    UPDATE_ASSET: UpdateAssetAction;
    UPLOAD_TO_STORAGE: UploadToStorageAction;
    DELETE_FROM_STORAGE: DeleteFromStorageAction;
};

declare class UpdateAssetAction extends ChaiBaseAction<UpdateAssetInput> {
    private supabase;
    constructor(supabase: SupabaseClient);
    protected getValidationSchema(): z.ZodObject<{
        id: z.ZodString;
        file: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    execute(data: UpdateAssetInput): Promise<any>;
}

declare type UpdateAssetInput = z.infer<typeof UpdateAssetSchema>;

declare const UpdateAssetSchema: z.ZodObject<{
    id: z.ZodString;
    file: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;

declare class UploadAssetAction extends ChaiBaseAction<UploadAssetInput> {
    private supabase;
    constructor(supabase: SupabaseClient);
    protected getValidationSchema(): z.ZodObject<{
        name: z.ZodString;
        file: z.ZodString;
        folderId: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        optimize: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>;
    execute(data: UploadAssetInput): Promise<any>;
}

declare type UploadAssetInput = z.infer<typeof UploadAssetSchema>;

declare const UploadAssetSchema: z.ZodObject<{
    name: z.ZodString;
    file: z.ZodString;
    folderId: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    optimize: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;

/**
 * UPLOAD_TO_STORAGE Action
 * Generic storage upload action using Supabase Storage
 */
export declare class UploadToStorageAction extends ChaiBaseAction<UploadToStorageInput> {
    private supabase;
    private bucketName;
    constructor(supabase: SupabaseClient);
    protected getValidationSchema(): z.ZodObject<{
        file: z.ZodString;
        fileName: z.ZodString;
        contentType: z.ZodOptional<z.ZodString>;
        folder: z.ZodOptional<z.ZodString>;
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>;
    execute(data: UploadToStorageInput): Promise<{
        error: string;
        status: number;
        data?: undefined;
    } | {
        data: {
            url: string;
            key: string;
            size: number;
            metadata: Record<string, any> | undefined;
        };
        status: number;
        error?: undefined;
    }>;
}

declare type UploadToStorageInput = z.infer<typeof UploadToStorageSchema>;

declare const UploadToStorageSchema: z.ZodObject<{
    file: z.ZodString;
    fileName: z.ZodString;
    contentType: z.ZodOptional<z.ZodString>;
    folder: z.ZodOptional<z.ZodString>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;

export { }
