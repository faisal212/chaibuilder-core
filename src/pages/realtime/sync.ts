import { useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";
import { ACTIONS } from "../constants/ACTIONS";
import { useRealtimeAdapter } from "../hooks/project/use-builder-prop";

type SyncPayload = {
  type: string;
  data: any;
  sync: boolean;
};

const syncTheme = (oldData: any, payload: SyncPayload) => {
  console.log("Syncing theme", payload);
  return payload.data;
};

const syncDesignTokens = (oldData: any, payload: SyncPayload) => {
  console.log("Syncing design tokens", payload);
  return payload.data;
};

const useSyncQueryClient = () => {
  const queryClient = useQueryClient();
  const realtimeAdapter = useRealtimeAdapter();
  const handleQueryClientSync = useCallback(
    ({ data, type, sync = false }: SyncPayload) => {
      switch (type) {
        case "THEME_UPDATE":
          queryClient.setQueryData([ACTIONS.GET_WEBSITE_DRAFT_SETTINGS], (oldData: any) => syncTheme(oldData, data));
          break;
        case "DESIGN_TOKENS_UPDATE":
          queryClient.setQueryData([ACTIONS.GET_WEBSITE_DRAFT_SETTINGS], (oldData: any) =>
            syncDesignTokens(oldData, data),
          );
          break;
        case "PAGE_SAVE":
          // TODO: Implement page save sync
          break;
        case "PUBLISH_PAGE":
          // TODO: Implement publish page sync. set online => true
          break;
        default:
          console.log("Unknown sync type", type);
      }
      if (sync) {
        realtimeAdapter?.channel.sync({ data, type });
      }
    },
    [queryClient, realtimeAdapter],
  );

  return handleQueryClientSync;
};
