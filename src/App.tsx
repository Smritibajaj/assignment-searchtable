import { Suspense, useState } from "react";
import { Provider } from "react-redux";
import ErrorBoundary from "./app/common/ErrorBoundary";
import { BrowserRouter } from "react-router-dom";
import store from "./app/redux/store";
import Router from "./app/routes";
import { Toaster } from "react-hot-toast";
import { toastOptions } from "./app/utils/constants/constants";
import FullPageLoader from "./app/common/Loader/FullPageLoader";
import InternetConnectionLost from "./app/common/InternetConnection";
import { useEventListener } from "./app/hooks/useEventListner";



function App() {
  const [isOnline, setOnline] = useState(window.navigator.onLine);
  const updateNetwork = () => {
    setOnline(window.navigator.onLine);
  };

  useEventListener('offline', updateNetwork);
  useEventListener('online', updateNetwork);

  return (
    <Provider store={store}>
      <Suspense fallback={<FullPageLoader />}>
        <ErrorBoundary>
          <BrowserRouter>
            <Router />
            <Toaster toastOptions={toastOptions} />
          </BrowserRouter>
        </ErrorBoundary>
      </Suspense>
      {!isOnline && <InternetConnectionLost handleTryAgain={updateNetwork} />}
    </Provider>
  );
}

export default App;
