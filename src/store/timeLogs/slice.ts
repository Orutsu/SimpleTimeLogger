import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TimeLog } from '../../types/types';

export type TimesheetsState = {
  isLoading: boolean;
  error: String | null;
  timeLogs: TimeLog[];
  currentTimeLog: TimeLog | null;
};

const initialState: TimesheetsState = {
  isLoading: false,
  error: null,
  timeLogs: [],
  currentTimeLog: null,
};

const TimeLogsSlice = createSlice({
  name: 'TimeLogs',
  initialState,
  reducers: {
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
      return state;
    },
    setTimeLogsError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
      return state;
    },
    setCurrentTimeLog(state, action: PayloadAction<TimeLog>) {
      state.currentTimeLog = action.payload;
      return state;
    },
    clearCurrentTimeLog(state) {
      state.currentTimeLog = null;
      return state;
    },
    deleteTimeLogByIndex(state, action: PayloadAction<number>) {
      state.timeLogs = [
        ...state.timeLogs.slice(0, action.payload),
        ...state.timeLogs.slice(action.payload + 1),
      ];
      return state;
    },
    addTimeLog(state, action: PayloadAction<TimeLog>) {
      state.timeLogs = [action.payload, ...state.timeLogs];
      return state;
    },
    addCommentToTimeLog(
      state,
      action: PayloadAction<{ newNote: string; timeLogIndex: number }>,
    ) {
      state.timeLogs[action.payload.timeLogIndex].notes = [
        action.payload.newNote,
        ...state.timeLogs[action.payload.timeLogIndex].notes,
      ];
      return state;
    },
  },
});

export default TimeLogsSlice;
