declare const NativeModules:
  | {
      NotifyHost?: {
        getState(): string;
        getOverlayState(): string;
        getUpdateState(): string;
        checkForUpdates(): void;
        openUpdatePage(): boolean;
        upsertTask(taskJson: string): string;
        deleteTask(id: string): boolean;
        setTaskEnabled(id: string, enabled: boolean): boolean;
        updateSettings(settingsJson: string): boolean;
        previewNotification(payloadJson: string): boolean;
        dismissNotification(id: string): boolean;
        windowCommand(command: string): void;
      };
    }
  | undefined;
