const ENDPOINT = "http://localhost:8000";

// ASYNC/AWAIT FUNCTION

export default async function getFavs({ jwt }) {
  const res = await fetch(`${ENDPOINT}/favs`, {
    method: "GET",
    headers: {
      Authorization: jwt,
      "Content-type": "application/json",
    },
  });
  // console.log("🐤", res);
  if (!res.ok) throw new Error("Response is NOT ok");
  const res_2 = await res.json();
  const { favs } = res_2;
  return favs;
}
