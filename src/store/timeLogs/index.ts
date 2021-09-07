import TimeLogsSlice from './slice';

export const {
  setIsLoading,
  setCurrentTimeLog,
  setTimeLogsError,
  addTimeLog,
  deleteTimeLogByIndex,
  clearCurrentTimeLog,
  addCommentToTimeLog,
} = TimeLogsSlice.actions;

export const TimeLogsReducer = TimeLogsSlice.reducer;
