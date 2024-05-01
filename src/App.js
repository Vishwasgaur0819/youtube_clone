import './App.css';
import { Provider } from "react-redux";
import Body from './components/Body';
import Header from './components/Header';
import { store, persistor } from './utills/redux_store/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import { PersistGate } from 'redux-persist/integration/react'
import Login from './components/Login';
import LoginGmail from './components/LoginGmail';

function App() {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LoginGmail />,
      // children: [
      //   {
      //     path: "watch",
      //     element: <WatchPage />,
      //   },
      //   {
      //     path: "/",
      //     element: <MainContainer />,
      //   },
      //   {
      //     path: "shorts",
      //     element: <WatchPage />,
      //   },
      // ]
    },
    {
      path: "/dashboard",
      element: <Body />,
      children: [
        {
          path: "/dashboard/watch",
          element: <WatchPage />,
        },
        {
          path: "/dashboard",
          element: <MainContainer />,
        },
        {
          path: "/dashboard/shorts",
          element: <WatchPage />,
        },
      ]
    }
  ])

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={appRouter} />
      </PersistGate>
    </Provider>
  );
}

export default App;
