export const MAIN_ROUTES = {
  LOGS_ARCHIVE: 'Logs_Archive',
  START_LOG_SCREEN: 'Start_Log_Screen',
} as const;

type valueof<T> = T[keyof T];

export type MainRoutes = valueof<typeof MAIN_ROUTES>;

export type ChildrenRoutes = null;
export type RootRoutes = MainRoutes;
export type AllRoutes = ChildrenRoutes | RootRoutes;
