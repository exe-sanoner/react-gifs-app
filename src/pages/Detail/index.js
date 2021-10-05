import { Redirect } from "wouter";
import Gif from "../../components/Gif/";
import useSingleGif from "hooks/useSingleGif";
import Spinner from "components/Spinner";
// import useSEO from "hooks/useSEO";
import { Helmet } from "react-helmet";

export default function Detail({ params }) {
  const { gif, isError, isLoading } = useSingleGif({ id: params.id });
  const title = gif ? gif.title : "";

  // useSEO({ description: `Detail of ${title}`, title });

  // console.log('🐤',gif);
  // console.log('🐤',params.id);
  if (isLoading)
    return (
      <>
        <Helmet>
          <title>Cargando...</title>
        </Helmet>
        <Spinner />
      </>
    );

  if (isError) return <Redirect to="/404" />;
  if (!gif) return null;

  return (
    <>
      <Helmet>
        <title>{title} || Giffy</title>
      </Helmet>
      <h3 className="App-title">{gif.title}</h3>
      <Gif {...gif} />
    </>
  );
}
