import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import MainView from "./src/components/mainView";
import { store, persistor } from "./src/store/store";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <MainView />
      </PersistGate>
    </Provider>
  );
}
