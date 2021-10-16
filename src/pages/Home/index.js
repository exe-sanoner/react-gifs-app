import React from "react";
import ListOfGifs from "components/ListOfGifs/ListOfGifs";
import { useGifs } from "hooks/useGifs";
import TrendingSearches from "components/TrendingSearches";
import SearchForm from "components/SearchForm";
import { Helmet } from "react-helmet";

export default function Home() {
  const { loading, gifs } = useGifs(); // custom hook

  return (
    <>
      <Helmet>
        <title>Home | Giffy </title>
      </Helmet>

      <header className="o-header">
        <SearchForm />
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
