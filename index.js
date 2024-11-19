function delay(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

console.log("starting");

(async () => { 
  while (true) {
    try {
      const response = await fetch("https://aternos.org/ajax/server/extend-end?TOKEN=Gp55VBeWp2CMlz1yxxk1&SEC=zoz4fz88yaa00000%3Anh81jby9hd000000&SERVER=voJqnB0jlDJf52Z9", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9",
    "sec-ch-ua": "\"Not-A.Brand\";v=\"99\", \"Chromium\";v=\"124\"",
    "sec-ch-ua-mobile": "?1",
    "sec-ch-ua-platform": "\"Android\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "cookie": "ATERNOS_SEC_x0l8t83ogum00000=x8p2z42oav000000; ATERNOS_SEC_zoz4fz88yaa00000=nh81jby9hd000000; _ga=GA1.1.2051570280.1731787629; ATERNOS_LANGUAGE=en; ATERNOS_SESSION=9nLmNyUmaUpR0EzysIMC0lcuCcRsOjJzIMfXrpn8SUwVnvKUtJLoGlviLeGhvsf8ssgiqFSc7lFTYrfKfCyhLbOCp1AxRyojgBUi; _sharedid=e7abf290-103b-4f09-9f28-66d4b774b77c; _sharedid_cst=zix7LPQsHA%3D%3D; _lr_env_src_ats=false; hb_insticator_uid=52a203a2-1e8c-40f8-b160-c97665ff34ed; _pubcid=3d39dd49-64fa-4e6b-9454-ffac2b224541; _au_1d=AU1D-0100-001731787735-Y24WG8DR-7MSD; _cc_id=a135444d890ce35be302fa7e848a76aa; panoramaId_expiry=1732393673893; panoramaId=bcfb8e689d4874775cc74d351218185ca02c42ec692f0a5f66811db0d434bd2a; panoramaIdType=panoDevice; usersync=eNqdzzsKgDAQBNC7bJ0iyaqruYqIiKYI-MMEUYJ310Kx1W2HeTATYbWLd9MIRgmY3WZ7D6aM4DowOkkE-H1sax-aJVwVQkUF5Tq983Ya5t4GC0Ye4kEZA6XyM1Iv4swjYqCc8Qkl_f-EqDkIf8yrjhO69JvT; ATERNOS_SERVER=voJqnB0jlDJf52Z9; _ga_FVWZ0RM4DH=GS1.1.1731835319.3.0.1731835319.60.0.0; _pubcid_cst=yyzLLLEsNg%3D%3D; ATERNOS_STYLE=dark; _lr_retry_request=true; cf_clearance=rEEhmAsuAnYKJmEwqzDAV1A6AYWoMKuroRXDTkkB7XE-1732017164-1.2.1.1-GxS8IXG0Gd5cAAaL5ybdi6vl7LxT2pqv2u.jBgvFpW33aduLZnzeaPSKWoUH3QYdvZjf1pse0_NcD3_Yn491xmITn7lHmn_6F3F4WOUS0tlWrzyLjDsFL4BRqzQINfkmj.x4ayuO4zpGtiCLzhKDr4ZDSZ8JAjiHYEvzUZTXeq9yPkaF9U.zXTNX6m0qrHtEjreLgfWkhAFG5fC.tw2zSUceUaowFxFuqY4V2HlScljDRLdyGpljOKLLVvrqmNdcvic523kB8a3_wEBJNVj_wNoI9mMWMgyLCqnVDzTtXtIR2pP1s7Nb9LPBzWDFw1jovSpXvVM3G4HTFTQP5RkRM7aDUoVaX6jx2adXy0VHImIUGPnP8NZucjLPi.VDT2pl; _ga_70M94GH0FD=GS1.1.1732017137.21.1.1732017252.0.0.0; cto_bidid=SEQ2G192anlzRnlMNkJtSnVUMW9zNEtsYkZxSHVSVlY0bEdBMjMlMkZLUlFkUEtxTU03Q2xrcXo2TnJpVHZYJTJCJTJGTjBlNlZxa0pWazNqQ1piNGxGdiUyRkJXZSUyQnpFejM2bmt4UmFZdiUyRkclMkZ0ZXRreWVFUlpZJTNE; cto_bundle=kLbDOl9ENXFFZ0FjUUp4aGpCRlZVRFpYUHFYY2ZSUWVWbTNzRkd4YWNNQnE1dmhSbzJScHhid2t4emtENUMxREJWamwyUnpqNFdCOFN0M211UjNvdlBoOElqaVlPeU5KRTdtRkRmZURhVVZYZiUyQjF2dHd6cktxQSUyQlpVQ1o0RmU3YmxlaFF3UnpvQ2xRTlpibzNyWWZ0cEdwbEZ3JTNEJTNE; FCNEC=%5B%5B%22AKsRol-kUZf6V3EBrhXCkPWIA9YDmd1L0LZ42B6tFoPLJPwwWyNuaCHisZo6mIcnPDPIeNKc6Qnd-oqbCh5YLc0ObQFH9tlwPgygpzMvjDaDxDATdLwegeqkdE3nDJfxsJGQ2-ZwBYoXCWCCqyvqR20tj92awS7UQg%3D%3D%22%5D%5D; __gads=ID=fc6e996af735c061:T=1731787723:RT=1732017789:S=ALNI_MZaNEUAQ5eaGGRxZNtfdRC43NakAQ; __gpi=UID=00000f88479308b3:T=1731787723:RT=1732017789:S=ALNI_MY9N2WoTztD_sOPGndkbZ5QHv85HQ; __eoi=ID=844ee1bc4b78910e:T=1731787723:RT=1732017789:S=AA-AfjbKTIR-WEH7dYxamyebkaN6",
    "Referer": "https://aternos.org/server/",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": null,
  "method": "GET"
});
      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);

      if (data.error == "This is only possible when your server is online.") {

        await fetch("https://aternos.org/ajax/server/start?access-credits=false&TOKEN=Gp55VBeWp2CMlz1yxxk1&SEC=zoz4fz88yaa00000%3Anh81jby9hd000000&SERVER=voJqnB0jlDJf52Z9", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9",
    "sec-ch-ua": "\"Not-A.Brand\";v=\"99\", \"Chromium\";v=\"124\"",
    "sec-ch-ua-mobile": "?1",
    "sec-ch-ua-platform": "\"Android\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "cookie": "ATERNOS_SEC_x0l8t83ogum00000=x8p2z42oav000000; ATERNOS_SEC_zoz4fz88yaa00000=nh81jby9hd000000; _ga=GA1.1.2051570280.1731787629; ATERNOS_LANGUAGE=en; ATERNOS_SESSION=9nLmNyUmaUpR0EzysIMC0lcuCcRsOjJzIMfXrpn8SUwVnvKUtJLoGlviLeGhvsf8ssgiqFSc7lFTYrfKfCyhLbOCp1AxRyojgBUi; _sharedid=e7abf290-103b-4f09-9f28-66d4b774b77c; _sharedid_cst=zix7LPQsHA%3D%3D; _lr_env_src_ats=false; hb_insticator_uid=52a203a2-1e8c-40f8-b160-c97665ff34ed; _pubcid=3d39dd49-64fa-4e6b-9454-ffac2b224541; _au_1d=AU1D-0100-001731787735-Y24WG8DR-7MSD; _cc_id=a135444d890ce35be302fa7e848a76aa; panoramaId_expiry=1732393673893; panoramaId=bcfb8e689d4874775cc74d351218185ca02c42ec692f0a5f66811db0d434bd2a; panoramaIdType=panoDevice; usersync=eNqdzzsKgDAQBNC7bJ0iyaqruYqIiKYI-MMEUYJ310Kx1W2HeTATYbWLd9MIRgmY3WZ7D6aM4DowOkkE-H1sax-aJVwVQkUF5Tq983Ya5t4GC0Ye4kEZA6XyM1Iv4swjYqCc8Qkl_f-EqDkIf8yrjhO69JvT; ATERNOS_SERVER=voJqnB0jlDJf52Z9; _ga_FVWZ0RM4DH=GS1.1.1731835319.3.0.1731835319.60.0.0; _pubcid_cst=yyzLLLEsNg%3D%3D; ATERNOS_STYLE=dark; _lr_retry_request=true; cf_clearance=rEEhmAsuAnYKJmEwqzDAV1A6AYWoMKuroRXDTkkB7XE-1732017164-1.2.1.1-GxS8IXG0Gd5cAAaL5ybdi6vl7LxT2pqv2u.jBgvFpW33aduLZnzeaPSKWoUH3QYdvZjf1pse0_NcD3_Yn491xmITn7lHmn_6F3F4WOUS0tlWrzyLjDsFL4BRqzQINfkmj.x4ayuO4zpGtiCLzhKDr4ZDSZ8JAjiHYEvzUZTXeq9yPkaF9U.zXTNX6m0qrHtEjreLgfWkhAFG5fC.tw2zSUceUaowFxFuqY4V2HlScljDRLdyGpljOKLLVvrqmNdcvic523kB8a3_wEBJNVj_wNoI9mMWMgyLCqnVDzTtXtIR2pP1s7Nb9LPBzWDFw1jovSpXvVM3G4HTFTQP5RkRM7aDUoVaX6jx2adXy0VHImIUGPnP8NZucjLPi.VDT2pl; _ga_70M94GH0FD=GS1.1.1732017137.21.1.1732017252.0.0.0; cto_bidid=SEQ2G192anlzRnlMNkJtSnVUMW9zNEtsYkZxSHVSVlY0bEdBMjMlMkZLUlFkUEtxTU03Q2xrcXo2TnJpVHZYJTJCJTJGTjBlNlZxa0pWazNqQ1piNGxGdiUyRkJXZSUyQnpFejM2bmt4UmFZdiUyRkclMkZ0ZXRreWVFUlpZJTNE; cto_bundle=kLbDOl9ENXFFZ0FjUUp4aGpCRlZVRFpYUHFYY2ZSUWVWbTNzRkd4YWNNQnE1dmhSbzJScHhid2t4emtENUMxREJWamwyUnpqNFdCOFN0M211UjNvdlBoOElqaVlPeU5KRTdtRkRmZURhVVZYZiUyQjF2dHd6cktxQSUyQlpVQ1o0RmU3YmxlaFF3UnpvQ2xRTlpibzNyWWZ0cEdwbEZ3JTNEJTNE; FCNEC=%5B%5B%22AKsRol-kUZf6V3EBrhXCkPWIA9YDmd1L0LZ42B6tFoPLJPwwWyNuaCHisZo6mIcnPDPIeNKc6Qnd-oqbCh5YLc0ObQFH9tlwPgygpzMvjDaDxDATdLwegeqkdE3nDJfxsJGQ2-ZwBYoXCWCCqyvqR20tj92awS7UQg%3D%3D%22%5D%5D; __gads=ID=fc6e996af735c061:T=1731787723:RT=1732017789:S=ALNI_MZaNEUAQ5eaGGRxZNtfdRC43NakAQ; __gpi=UID=00000f88479308b3:T=1731787723:RT=1732017789:S=ALNI_MY9N2WoTztD_sOPGndkbZ5QHv85HQ; __eoi=ID=844ee1bc4b78910e:T=1731787723:RT=1732017789:S=AA-AfjbKTIR-WEH7dYxamyebkaN6",
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
