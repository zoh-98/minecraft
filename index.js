function delay(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

console.log("starting");

(async () => { 
  while (true) {
    try {
      const response = await fetch("https://aternos.org/ajax/server/extend-end?SEC=a4m3ja6v17o00000%3Ak9hpw5uhy3000000&TOKEN=1LkRNpzeYsoWi1B7xImZ&SERVER=voJqnB0jlDJf52Z9", {
        headers: {
          "accept": "*/*",
          "accept-language": "en;q=0.7",
          "priority": "u=1, i",
          "sec-ch-ua": "\"Brave\";v=\"131\", \"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"Windows\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "sec-gpc": "1",
          "x-requested-with": "XMLHttpRequest",
          "cookie": "ATERNOS_SEC_a4m3ja6v17o00000=k9hpw5uhy3000000; ATERNOS_LANGUAGE=en; cf_clearance=OIBwA1f0OuAmdr3QCfdN40tnBRa4gv2YwljciOo7CtI-1731911048-1.2.1.1-sW2vgUg_HyQQBdwCBNklGaK8qHo2eS6WGVI8YgEk04EuoRCJ4bIPCZvvetiismFRwXtnn8O32xGIXSTgXGMHGUOlILrHiuI.LPQNi3xvjaRGl9wgtz_2tDGmgwMwQzLW17cjZefbKMgW2XlvzLh4YC2anY_39dDCKVRDHlBNShwI2dJt1PJopjTYuyOTj9ezXvuMYekvvw6n.0JWVSmwB4Q3IUrf2pjiSUhMUdasFkVky_PtwC7NT._RmbYZ3MDDFEdn4cYzQLNm0nNXoCsUkv0qfkQeUPHXw0NOVC7tqB5j49uSDWsUWNuP_uAOsvvEz9wMo9hhFpCkXflDwC4ytZyYszhWxRsiyl8tele.NbxTHdZXvzoiv7ZDFyrKjHDN; ATERNOS_SESSION=4pC6t7W6mRSPU6DhS6p6ygn9dpL6fcXh9Uj0it9FKuwT38l90u41r5z41UaUl84EFaESxT4LvcHrzano0YRRB0l2WUie9m9wT7qk; ATERNOS_SERVER=voJqnB0jlDJf52Z9",
          "Referer": "https://aternos.org/server/",
          "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        method: "GET"
      });

      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);

      if (data.error == "This is only possible when your server is online.") {

        await fetch("https://aternos.org/ajax/server/start?access-credits=false&TOKEN=1LkRNpzeYsoWi1B7xImZ&SEC=l3x5gdu2y9q00000%3A0y4uwdbf5c300000&SERVER=voJqnB0jlDJf52Z9", {
          "headers": {
            "accept": "*/*",
            "accept-language": "en;q=0.7",
            "priority": "u=1, i",
            "sec-ch-ua": "\"Brave\";v=\"131\", \"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "sec-gpc": "1",
            "cookie": "ATERNOS_SEC_l3x5gdu2y9q00000=0y4uwdbf5c300000; ATERNOS_LANGUAGE=en; cf_clearance=OIBwA1f0OuAmdr3QCfdN40tnBRa4gv2YwljciOo7CtI-1731911048-1.2.1.1-sW2vgUg_HyQQBdwCBNklGaK8qHo2eS6WGVI8YgEk04EuoRCJ4bIPCZvvetiismFRwXtnn8O32xGIXSTgXGMHGUOlILrHiuI.LPQNi3xvjaRGl9wgtz_2tDGmgwMwQzLW17cjZefbKMgW2XlvzLh4YC2anY_39dDCKVRDHlBNShwI2dJt1PJopjTYuyOTj9ezXvuMYekvvw6n.0JWVSmwB4Q3IUrf2pjiSUhMUdasFkVky_PtwC7NT._RmbYZ3MDDFEdn4cYzQLNm0nNXoCsUkv0qfkQeUPHXw0NOVC7tqB5j49uSDWsUWNuP_uAOsvvEz9wMo9hhFpCkXflDwC4ytZyYszhWxRsiyl8tele.NbxTHdZXvzoiv7ZDFyrKjHDN; ATERNOS_SESSION=4pC6t7W6mRSPU6DhS6p6ygn9dpL6fcXh9Uj0it9FKuwT38l90u41r5z41UaUl84EFaESxT4LvcHrzano0YRRB0l2WUie9m9wT7qk; ATERNOS_SERVER=voJqnB0jlDJf52Z9",
            "Referer": "https://aternos.org/server/",
            "Referrer-Policy": "strict-origin-when-cross-origin"
          },
          "body": null,
          "method": "GET"
        });

      }

      await delay(1000 * 60); // Wait for 1 minute
      console.log("1 min more");
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  }
})();
