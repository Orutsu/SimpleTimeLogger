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
  name: 'TimeLogsSlice',
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
    },
    addTimeLog(state, action: PayloadAction<TimeLog>) {
      state.timeLogs = [...state.timeLogs, action.payload];
      return state;
    },
  },
});

export default TimeLogsSlice;
