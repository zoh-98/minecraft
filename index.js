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

        await fetch("https://aternos.org/ajax/server/start?access-credits=false&TOKEN=HfrrOE56HxM7kMVWpHQw&SEC=oc54isvbxs000000%3Aaslepbgpua700000&SERVER=voJqnB0jlDJf52Z9", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9",
    "sec-ch-ua": "\"Not-A.Brand\";v=\"99\", \"Chromium\";v=\"124\"",
    "sec-ch-ua-mobile": "?1",
    "sec-ch-ua-platform": "\"Android\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "cookie": "ATERNOS_SEC_y44faioclan00000=x4gona9x5jo00000; ATERNOS_SEC_oc54isvbxs000000=aslepbgpua700000; _ga=GA1.1.2051570280.1731787629; ATERNOS_LANGUAGE=en; ATERNOS_SESSION=9nLmNyUmaUpR0EzysIMC0lcuCcRsOjJzIMfXrpn8SUwVnvKUtJLoGlviLeGhvsf8ssgiqFSc7lFTYrfKfCyhLbOCp1AxRyojgBUi; _sharedid=e7abf290-103b-4f09-9f28-66d4b774b77c; _sharedid_cst=zix7LPQsHA%3D%3D; _lr_env_src_ats=false; hb_insticator_uid=52a203a2-1e8c-40f8-b160-c97665ff34ed; _pubcid=3d39dd49-64fa-4e6b-9454-ffac2b224541; _au_1d=AU1D-0100-001731787735-Y24WG8DR-7MSD; _cc_id=a135444d890ce35be302fa7e848a76aa; panoramaId_expiry=1732393673893; panoramaId=bcfb8e689d4874775cc74d351218185ca02c42ec692f0a5f66811db0d434bd2a; panoramaIdType=panoDevice; usersync=eNqdzzsKgDAQBNC7bJ0iyaqruYqIiKYI-MMEUYJ310Kx1W2HeTATYbWLd9MIRgmY3WZ7D6aM4DowOkkE-H1sax-aJVwVQkUF5Tq983Ya5t4GC0Ye4kEZA6XyM1Iv4swjYqCc8Qkl_f-EqDkIf8yrjhO69JvT; ATERNOS_SERVER=voJqnB0jlDJf52Z9; _ga_FVWZ0RM4DH=GS1.1.1731835319.3.0.1731835319.60.0.0; _pubcid_cst=yyzLLLEsNg%3D%3D; _lr_retry_request=true; _ga_70M94GH0FD=GS1.1.1731950053.16.1.1731950062.0.0.0; cto_bundle=JLjzcl9ENXFFZ0FjUUp4aGpCRlZVRFpYUHFmN3NBc3R4MG8zOXIwZ1clMkJtY1pObnYySUYyTDRvc3RNVzZ0M0dpUjJtQlclMkJuRHA4WXh1NTg3blBaRSUyRlF1d1JyQnJSdHdrQiUyRko3NUFnYzJTSnhySDF6Wkk4UllDMzdwaWdyMnpJNFZPdUdtMmpYRGdJZ3IxODJ4SkNrOSUyRkUzQmR3JTNEJTNE; cto_bidid=LGeqDl92anlzRnlMNkJtSnVUMW9zNEtsYkZxSHVSVlY0bEdBMjMlMkZLUlFkUEtxTU03Q2xrcXo2TnJpVHZYJTJCJTJGTjBlNlZxa0pWazNqQ1piNGxGdiUyRkJXZSUyQnpFejdoM2ZncGdwRnJ3V0dOc1Q2TiUyRjRDZyUzRA; cf_clearance=JOSnXcGPslKXMP3e5nvhkHiBmuS0A2Tckhwp4Ho5gDc-1731950066-1.2.1.1-_XRsq4v2.Ryp1YdiS4cdUvCxlF95SLUlV_73xv8UMvsrXgySOlac6ukFeHD8L1BlPOoYMNrXHLTayCK3wRz99roCK_jAqSYx14FYC5NGAmXqAHEyDz5FA9c3EbftvRFl7qoXmIf5XQb1UAegcUqkFAa9Nf8lAdXBUMOQ7146AJra_Sg9VSYdA7zXDiAmpeBV0JQB3PPWKmHP1T229M6tlde_0y.kjl6GUpaxrQpFc6gwEUnr2RC.69jyWlIfGtt0faaUhV7it3UO1kzNL19r6rSvbNwoihLBF5cnJE3p.YWbzLvE5Qg8Sy_l00bDSd3NCGyLp9l4TUZAy_2zmU_ZtMYiO2S_cPV45DKu76RUMFqvrXwwvIOKKe4M6GF5Sflp; __gads=ID=fc6e996af735c061:T=1731787723:RT=1731950071:S=ALNI_MZaNEUAQ5eaGGRxZNtfdRC43NakAQ; __gpi=UID=00000f88479308b3:T=1731787723:RT=1731950071:S=ALNI_MY9N2WoTztD_sOPGndkbZ5QHv85HQ; __eoi=ID=844ee1bc4b78910e:T=1731787723:RT=1731950071:S=AA-AfjbKTIR-WEH7dYxamyebkaN6; FCNEC=%5B%5B%22AKsRol__ke3AKUG4GjWjL0vYwMUH2cg72POxUHqqcKswNEex_R0xldSKZ4asHS6Lt0miATEo7E5QQ-IvzxlwcPcyccUBO_CdAi7lZFAbcj-dkFiBio4g5R78ZluRGd4sIKos68XC3ldsKaLfe7uJE2lxJF3DR4lZEg%3D%3D%22%5D%5D",
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
