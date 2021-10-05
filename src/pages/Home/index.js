import React, { useCallback } from "react";
import { Link, useLocation } from "wouter";
import ListOfGifs from "components/ListOfGifs/ListOfGifs";
import { useGifs } from "hooks/useGifs";
import TrendingSearches from "components/TrendingSearches";
import SearchForm from "components/SearchForm";
import { Helmet } from "react-helmet";

export default function Home() {
  const [path, pushLocation] = useLocation();
  const { loading, gifs } = useGifs(); // custom hook

  const handleSubmit = useCallback(
    ({ keyword }) => {
      // evt.preventDefault();          // Lo hago en SearchForm ahora
      // navegar a otra ruta
      pushLocation(`/search/${keyword}`);
      // console.log('🐤',keyword);
    },
    [pushLocation]
  );

  return (
    <>
      <Helmet>
        <title>Home | Giffy </title>
      </Helmet>

      <header className="o-header">
        <SearchForm onSubmit={handleSubmit} />
      </header>
      <div className="App-wrapper">
        <div className="App-main">
          <div className="App-results">
            <h3 className="App-title">Última búsqueda</h3>
            <ListOfGifs gifs={gifs} />
          </div>
          <div className="App-category">
            <TrendingSearches />
          </div>
        </div>
      </div>
    </>
  );
}
