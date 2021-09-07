import { createStore, combineReducers, Action, applyMiddleware } from 'redux';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import thunkMiddleware, { ThunkAction } from 'redux-thunk';
import { TimeLogsReducer } from './timeLogs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  timeLogs: persistReducer(persistConfig, TimeLogsReducer),
});

const middleware = [thunkMiddleware];
const middlewareEnhancer = applyMiddleware(...middleware);

const store = createStore(rootReducer, middlewareEnhancer);
export const persistor = persistStore(store, undefined, () => {
  console.log('done');
});

export type AppState = ReturnType<typeof rootReducer>;
export type AppThunk = ThunkAction<void, AppState, unknown, Action<string>>;

export const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector;

export default store;
