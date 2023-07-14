import * as Updates from './Updates';
import type { Manifest, UpdatesNativeStateMachineContext } from './Updates.types';
import type { CurrentlyRunningInfo, UseUpdatesStateType } from './UseUpdates.types';
export declare const currentlyRunning: CurrentlyRunningInfo;
export declare const updateFromManifest: (manifest?: Manifest) => {
    updateId: string | undefined;
    createdAt: Date | undefined;
    manifest: import("expo-constants/build/Constants.types").AppManifest | import("expo-constants/build/Constants.types").Manifest;
} | undefined;
export declare const availableUpdateFromContext: (context: UpdatesNativeStateMachineContext) => {
    updateId: string | undefined;
    createdAt: Date | undefined;
    manifest: import("expo-constants/build/Constants.types").AppManifest | import("expo-constants/build/Constants.types").Manifest;
} | undefined;
export declare const downloadedUpdateFromContext: (context: UpdatesNativeStateMachineContext) => {
    updateId: string | undefined;
    createdAt: Date | undefined;
    manifest: import("expo-constants/build/Constants.types").AppManifest | import("expo-constants/build/Constants.types").Manifest;
} | undefined;
export declare const defaultUseUpdatesState: UseUpdatesStateType;
export declare const reduceUpdatesStateFromContext: (updatesState: UseUpdatesStateType, context: UpdatesNativeStateMachineContext) => {
    isChecking: boolean;
    lastCheckForUpdateTimeSinceRestart: Date;
    availableUpdate?: import("./UseUpdates.types").UpdateInfo | undefined;
    downloadedUpdate?: import("./UseUpdates.types").UpdateInfo | undefined;
    checkError?: Error | undefined;
    downloadError?: Error | undefined;
    isUpdateAvailable: boolean;
    isUpdatePending: boolean;
    isDownloading: boolean;
    logEntries?: Updates.UpdatesLogEntry[] | undefined;
} | {
    isUpdateAvailable: boolean;
    isUpdatePending: boolean;
    isChecking: false;
    isDownloading: boolean;
    availableUpdate: {
        updateId: string | undefined;
        createdAt: Date | undefined;
        manifest: import("expo-constants/build/Constants.types").AppManifest | import("expo-constants/build/Constants.types").Manifest;
    } | undefined;
    downloadedUpdate: {
        updateId: string | undefined;
        createdAt: Date | undefined;
        manifest: import("expo-constants/build/Constants.types").AppManifest | import("expo-constants/build/Constants.types").Manifest;
    } | undefined;
    checkError: Error | undefined;
    downloadError: Error | undefined;
    lastCheckForUpdateTimeSinceRestart?: Date | undefined;
    logEntries?: Updates.UpdatesLogEntry[] | undefined;
};
//# sourceMappingURL=UseUpdatesUtils.d.ts.map