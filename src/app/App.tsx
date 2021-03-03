import React from 'react'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { SearchPage } from '../pages/SearchPage';
import { AppRouter } from './AppRouter';
import { store, persistor } from './store';


const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppRouter />
      </PersistGate>
    </Provider>
  );
};

export default App;