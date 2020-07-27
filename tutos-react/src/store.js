import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {
    persistStore,
    persistReducer,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// NATIVE: @react-native-community/async-storage

import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducers';
import mainSaga from './sagas';


export const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();

    const persistConfig = {
        key: 'rootx',
        storage,
        whitelist: ['auth'],
    };
    
    const persistedReducer = persistReducer(
        persistConfig,
        reducer,
    );

    const store = createStore(
        persistedReducer,
        composeWithDevTools(
            applyMiddleware(sagaMiddleware),
        )
    );
        
    const persistor = persistStore(store);
    sagaMiddleware.run(mainSaga);

    return { store, persistor };
}
