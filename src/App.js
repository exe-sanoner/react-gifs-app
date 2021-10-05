import React from "react";
import "./App.css";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import SearchResults from "./pages/SearchResults";
import Detail from "./pages/Detail";
import Context from "./context/StaticContext";
import { GifsContextProvider } from "./context/GifsContext";

import { Link, Route, Switch } from "wouter";

export default function App() {
  return (
    <Context.Provider
      value={{ name: "exe-chickendev", suscribeteAlCanal: true }}
    >
      <div className="App">
        <section className="App-content">
          <Link to="/">
            <figure className="App-logo">
              <img alt="Giffy logo" src="/logochicken.png" />
              <h6>GIFFY APP</h6>
            </figure>
          </Link>
          <GifsContextProvider>
            <Switch>
              <Route component={Home} path="/" />
              <Route component={SearchResults} path="/search/:keyword" />
              <Route component={Detail} path="/gif/:id" />
              <Route component={ErrorPage} path="/:rest*" />
            </Switch>
          </GifsContextProvider>
        </section>
      </div>
    </Context.Provider>
  );
}
