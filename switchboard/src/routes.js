import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./containers/App";
import HomePage from "./components/HomePage";

export default function getRoutes(store) {
  return (
    <Route path="/" component={App}>
      <IndexRoute components={{...common, content: HomePage}} />
      <Route path="*" components={{
        sidebar: Sidebar,
        content: _ => <h1>Page not found.</h1>
      }}/>
    </Route>
  );
}
