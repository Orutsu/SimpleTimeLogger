import TimeLogsSlice from './slice';

export const {
  setIsLoading,
  setCurrentTimeLog,
  setTimeLogsError,
  addTimeLog,
  clearCurrentTimeLog,
} = TimeLogsSlice.actions;

export const TimeLogsReducer = TimeLogsSlice.reducer;
