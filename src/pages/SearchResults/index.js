import React, { useCallback, useEffect, useRef } from "react";
import Spinner from "components/Spinner/index";
import ListOfGifs from "components/ListOfGifs/ListOfGifs";
import { useGifs } from "hooks/useGifs";
import userNearScreen from "hooks/useNearScreen";
import debounce from "just-debounce-it";
// import useSEO from "hooks/useSEO";
import { Helmet } from "react-helmet";

export default function SearchResults({ params }) {
  // console.log(params);
  const { keyword } = params;
  const { loading, gifs, setPage } = useGifs({ keyword }); // custom hook
  const externalRef = useRef();
  const { isNearScreen } = userNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  });

  const title = gifs
    ? `${gifs.length} resultados de ${decodeURI(keyword)}`
    : "";
  // useSEO({ title });

  // handleNextPage del BUTTON
  // const handleNextPage = () => setPage(prevPage => prevPage + 1)

  // Test para handleNextPage del INFINITE SCROLL
  // const handleNextPage = () => console.log('🐤', 'next page');

  // handleNextPage w/ REF
  // const debounceHandleNextPage = useRef();

  // handleNextPage w/ DEBOUNCE + useCALLBACK
  const debounceHandleNextPage = useCallback(
    debounce(() => setPage((prevPage) => prevPage + 1), 200),
    []
  );

  useEffect(
    function () {
      // console.log('🐤', isNearScreen);
      if (isNearScreen) debounceHandleNextPage();
    },
    [debounceHandleNextPage, isNearScreen]
  );

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Helmet>
            <title>{title}</title>
            <meta name="description" content={title} />
          </Helmet>
          <h3 className="App-title">{decodeURI(keyword)}</h3>
          <ListOfGifs gifs={gifs} />
          <div id="visor" ref={externalRef}></div>
        </>
      )}
      {/* <button onClick={handleNextPage}>Get next page</button> */}
    </>
  );
}
