import React from 'react';
import Main from './components/MainComponent';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import { PersistGate } from 'redux-persist/es/integration/react';
import Loading from './components/LoadingComponent';

const { persistor, store } = ConfigureStore();



export default function App() {
    return (
        <Provider store={store}>
          <PaperProvider>
          <PersistGate
                loading={<Loading />}
                persistor={persistor}>
                <Main />
            </PersistGate>
          </PaperProvider>
      </Provider>
    );
}
