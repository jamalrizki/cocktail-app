import React from 'react';
import Main from './components/MainComponent';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

export default function App() {
    return (
        <Provider store={store}>
          <PaperProvider>
          <Main />
          </PaperProvider>
      </Provider>
    );
}
