import './App.css';
import { Provider } from "react-redux";
import Body from './components/Body';
import Header from './components/Header';
import { store, persistor } from './utills/redux_store/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import { PersistGate } from 'redux-persist/integration/react'

function App() {

  const appRouter = createBrowserRouter([{
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "shorts",
        element: <WatchPage />,
      },

    ]
  }])

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Header />
        <RouterProvider router={appRouter} />
      </PersistGate>
    </Provider>
  );
}

export default App;
