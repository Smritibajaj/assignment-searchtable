import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./app/redux/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./app/assets/css/tailwind.output.css";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

/** Sentry implimentation */
try {
  process.env.REACT_APP_API_ENV === "production" &&
    Sentry.init({
      dsn: "https://29eeaef48cd948cbaf0f85e013fa9d01@o1292196.ingest.sentry.io/6521037",
      integrations: [new BrowserTracing()],

      // Set tracesSampleRate to 1.0 to capture 100%
      // of transactions for performance monitoring.
      // We recommend adjusting this value in production
      tracesSampleRate: 1.0,
    });
} catch (e) {}

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
