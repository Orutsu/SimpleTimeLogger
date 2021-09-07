import TimeLogsSlice from './slice';

export const {
  setIsLoading,
  setCurrentTimeLog,
  setTimeLogsError,
  addTimeLog,
  clearCurrentTimeLog,
  addCommentToTimeLog,
} = TimeLogsSlice.actions;

export const TimeLogsReducer = TimeLogsSlice.reducer;
