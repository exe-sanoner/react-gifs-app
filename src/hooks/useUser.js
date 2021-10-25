import { useContext, useCallback, useState } from "react";
import Context from "context/UserContext";
import loginService from "services/login";
import addFavService from "services/addFav";

export default function useUser() {
  const { jwt, setJWT, favs, setFavs } = useContext(Context);
  const [state, setState] = useState({ loading: false, error: false });

  const login = useCallback(
    ({ username, password }) => {
      setState({ loading: true, error: false });
      loginService({ username, password })
        .then((jwt) => {
          console.log("🐤", jwt);
          window.sessionStorage.setItem("jwt", jwt);
          setState({ loading: false, error: false });
          setJWT(jwt);
        })
        .catch((err) => {
          window.sessionStorage.removeItem("jwt");
          setState({ loading: false, error: true });
          console.log("🐤", err);
        });
    },
    [setJWT]
  );

  const addFav = useCallback(
    ({ id }) => {
      addFavService({ id, jwt })
        .then((favs) => setFavs(favs))
        .catch((err) => {
          console.error(err);
        });
    },
    [jwt, setFavs]
  );

  const logout = useCallback(() => {
    window.sessionStorage.removeItem("jwt");
    setJWT(null);
  }, [setJWT]);

  return {
    // could use  => !!jwt  (double negation)
    isLogged: Boolean(jwt),
    isLoginLoading: state.loading,
    hasLoginError: state.error,
    login,
    logout,
    addFav,
    favs,
  };
}
