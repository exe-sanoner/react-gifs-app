const ENDPOINT = "http://localhost:8000";

// ASYNC/AWAIT FUNCTION

export default async function addFav({ id, jwt }) {
  const res = await fetch(`${ENDPOINT}/favs/${id}`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ jwt }),
  });
  // console.log("🐤", res);
  if (!res.ok) throw new Error("Response is NOT ok");
  const res_2 = await res.json();
  const { favs } = res_2;
  return favs;
}

// LIKE A PROMISE
/*
export default function addFav({ id, jwt }) {
  return fetch(`${ENDPOINT}/favs/${id}`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ jwt }),
  })
    .then((res) => {
      console.log("🐤", res);
      if (!res.ok) throw new Error("Response is NOT ok");
      return res.json();
    })
    .then((res) => {
      const { favs } = res;
      return favs;
    });
}
*/
