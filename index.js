function delay(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}



(async () => { 
  while (true) {
    
    
  fetch("https://aternos.org/ajax/server/start?access-credits=false&TOKEN=jFnYanGamb6bdNTm0AeC&SEC=8k2siacvu9s00000%3Auputre4aa5c00000&SERVER=voJqnB0jlDJf52Z9", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9",
    "sec-ch-ua": "\"Not-A.Brand\";v=\"99\", \"Chromium\";v=\"124\"",
    "sec-ch-ua-mobile": "?1",
    "sec-ch-ua-platform": "\"Android\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "cookie": "ATERNOS_SEC_qrqi0j6y68j00000=2e3esyhha5i00000; ATERNOS_SEC_34xvfluxuv000000=b8ah7xo9dqw00000; ATERNOS_SEC_8k2siacvu9s00000=uputre4aa5c00000; _ga=GA1.1.2051570280.1731787629; ATERNOS_LANGUAGE=en; cf_clearance=aOfhIQHeH.2RC.F8JNnRlFQ9IlznnljDv8.WcBpBGsE-1731787650-1.2.1.1-Skl_m778ggByD.Urp7EMeBVRVxnVLUREMsIDwwQ.Sc5sO9.aDKdKterky5HaqsF_pUwlv84npYLQL7j.lKlgfOzHaVtteZKxdLnqkjuvv_NYKgnXozaYYEVtWcj5O3scQaZ1uZxAmlHkArYn2l1bkCYokVqWc.GJFoliY3r0gtNBLdxl5MqUp9DyIlJRfMxXZQHGqU50GhGjJ2sQD7KDtbxwZEN5LNp8b9CYVpl2dHkcWPK5Rdc3CrvS2Ozb68c1WV6dmR_rES64xiGQ.vbWIxvzElQpiktHw1tzcRhPsbGkDTTS41t94jRJzW9tQA..j9Fv62Hkt8QVgRtM7Q_q17oZICeXysF6N1wc3_xFaRmMDTy11C19zjFIZBUOLub0; ATERNOS_SESSION=9nLmNyUmaUpR0EzysIMC0lcuCcRsOjJzIMfXrpn8SUwVnvKUtJLoGlviLeGhvsf8ssgiqFSc7lFTYrfKfCyhLbOCp1AxRyojgBUi; _sharedid=e7abf290-103b-4f09-9f28-66d4b774b77c; _sharedid_cst=zix7LPQsHA%3D%3D; _lr_retry_request=true; _lr_env_src_ats=false; hb_insticator_uid=52a203a2-1e8c-40f8-b160-c97665ff34ed; _pubcid=3d39dd49-64fa-4e6b-9454-ffac2b224541; _pubcid_cst=yyzLLLEsNg%3D%3D; __gads=ID=fc6e996af735c061:T=1731787723:RT=1731787723:S=ALNI_MZaNEUAQ5eaGGRxZNtfdRC43NakAQ; __gpi=UID=00000f88479308b3:T=1731787723:RT=1731787723:S=ALNI_MY9N2WoTztD_sOPGndkbZ5QHv85HQ; __eoi=ID=844ee1bc4b78910e:T=1731787723:RT=1731787723:S=AA-AfjbKTIR-WEH7dYxamyebkaN6; _au_1d=AU1D-0100-001731787735-Y24WG8DR-7MSD; FCNEC=%5B%5B%22AKsRol-aaj54Qp2vVbRgr6-CVAcdc5kCg9q4t3sbyZPlTE8rB8jE4aMpAA03XMNYQots0Txz5yF5Xj5otQWOLa08ALTzKt0vTm9hg5bylgBJmfJmsGctWvCJkZoTe88qNL6qOQGDKSxwRBbqIyzaAklvdLWYYavLBw%3D%3D%22%5D%5D; ATERNOS_SERVER=voJqnB0jlDJf52Z9; _ga_70M94GH0FD=GS1.1.1731787629.1.1.1731787978.0.0.0; cto_bundle=PFtMnl9ENXFFZ0FjUUp4aGpCRlZVRFpYUHFUT2xRdklrdmxCcSUyRjhXRGEzSCUyRnhNJTJCciUyQncyOVRZcUkzOGtPcjhvZUlRZlElMkJvbng1RWVGb291dVZlMkY2TkFyTUdRbFRNQ0VDZkFOamN0c0VZQXN0M292VnprQ1ZsN29JNnlJRUxxVEg1SVRXdnRMTGZJWjRXVlJNOE5aWWIzc1V3JTNEJTNE; cto_bidid=y0gWil92anlzRnlMNkJtSnVUMW9zNEtsYkZxSHVSVlY0bEdBMjMlMkZLUlFkUEtxTU03Q2xrcXo2TnJpVHZYJTJCJTJGTjBlNlZxa0pWazNqQ1piNGxGdiUyRkJXZSUyQnpFejg1QTZ4SElTaHVLbkZ5U2xZZmhxb1UlM0Q",
    "Referer": "https://aternos.org/server/",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": null,
  "method": "GET"
}).then(async res => {
  
  
  
  let hi = await res.json();
  
  
  console.log(hi);
  
  if (hi.success == "false") {
    
    await delay(1000 * 60 * 6);
    
  }

}
)

}
await delay(5000);


while (true) {
  fetch("https://aternos.org/ajax/server/extend-end?SEC=mlbn862i2zl00000%3Abdfqz1qzvyu00000&TOKEN=jFnYanGamb6bdNTm0AeC&SERVER=voJqnB0jlDJf52Z9", {
    "headers": {
      "accept": "*/*",
      "accept-language": "en-US,en;q=0.9",
      "sec-ch-ua": "\"Not-A.Brand\";v=\"99\", \"Chromium\";v=\"124\"",
      "sec-ch-ua-mobile": "?1",
      "sec-ch-ua-platform": "\"Android\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-requested-with": "XMLHttpRequest",
      "cookie": "ATERNOS_SEC_mlbn862i2zl00000=bdfqz1qzvyu00000; _ga=GA1.1.2051570280.1731787629; ATERNOS_LANGUAGE=en; ATERNOS_SESSION=9nLmNyUmaUpR0EzysIMC0lcuCcRsOjJzIMfXrpn8SUwVnvKUtJLoGlviLeGhvsf8ssgiqFSc7lFTYrfKfCyhLbOCp1AxRyojgBUi; _sharedid=e7abf290-103b-4f09-9f28-66d4b774b77c; _sharedid_cst=zix7LPQsHA%3D%3D; _lr_env_src_ats=false; hb_insticator_uid=52a203a2-1e8c-40f8-b160-c97665ff34ed; _pubcid=3d39dd49-64fa-4e6b-9454-ffac2b224541; _pubcid_cst=yyzLLLEsNg%3D%3D; _au_1d=AU1D-0100-001731787735-Y24WG8DR-7MSD; ATERNOS_SERVER=voJqnB0jlDJf52Z9; _cc_id=a135444d890ce35be302fa7e848a76aa; panoramaId_expiry=1732393673893; panoramaId=bcfb8e689d4874775cc74d351218185ca02c42ec692f0a5f66811db0d434bd2a; panoramaIdType=panoDevice; _ga_FVWZ0RM4DH=GS1.1.1731791954.1.0.1731791954.60.0.0; usersync=eNqdzzsKgDAQBNC7bJ0iyaqruYqIiKYI-MMEUYJ310Kx1W2HeTATYbWLd9MIRgmY3WZ7D6aM4DowOkkE-H1sax-aJVwVQkUF5Tq983Ya5t4GC0Ye4kEZA6XyM1Iv4swjYqCc8Qkl_f-EqDkIf8yrjhO69JvT; _lr_retry_request=true; __gads=ID=fc6e996af735c061:T=1731787723:RT=1731800971:S=ALNI_MZaNEUAQ5eaGGRxZNtfdRC43NakAQ; __gpi=UID=00000f88479308b3:T=1731787723:RT=1731800971:S=ALNI_MY9N2WoTztD_sOPGndkbZ5QHv85HQ; __eoi=ID=844ee1bc4b78910e:T=1731787723:RT=1731800971:S=AA-AfjbKTIR-WEH7dYxamyebkaN6; cf_clearance=oUay3d1v1bMESfKxuFk506tf1z9IAJkWi4xn5s.OlC4-1731800973-1.2.1.1-z5cGmhxzFhjQ9KebmwbCzbNmJyto1jX5pbdQHWyU46YnKDiCxTicspohh5BviAIuBA5XmBvlbt6CKZ7GZ0lYDh38FsFrpBxdvN.Zw3u1_DwirqnGLrUy_K992Nwe4gw.5UgkefdnlpYtgFiIiROiJg8zs8D1AZFXBQ60KGdAxPF05aIjffxHAfcHVd4O8ruBXZQlGaH7VHh9IBQtfWKZNMcYq8yLWINgWP5F_VUjnd0sxBtPs6a.3rn3oC_tKC31_P6Dh9O.3ogIzZxWAd5ZfnQrntdfsmeQk5S_4h4khhrmvld0BFZ7ZHhayARDYcEleWfEpniJzQO8_HzNM7iobz28gUVY_q4tTM78xMzyE8gcbWlY9b9BCf7wTPZqEYoP; _ga_70M94GH0FD=GS1.1.1731797763.3.1.1731801066.0.0.0; cto_bidid=OSnO8V92anlzRnlMNkJtSnVUMW9zNEtsYkZxSHVSVlY0bEdBMjMlMkZLUlFkUEtxTU03Q2xrcXo2TnJpVHZYJTJCJTJGTjBlNlZxa0pWazNqQ1piNGxGdiUyRkJXZSUyQnpFejhJMldFVVM3VXhHbThjS1pSUGFNbnMlM0Q; FCNEC=%5B%5B%22AKsRol8cleOcpTbconoRrXnE-VXFmizatT6VwwCfZ-jpR9FQzesy9TwldNrnZ6By0K33OhazsXNoJUV8ktmq8nEETZ0VWqAtZR_QaUt-Y003lRyfxuP0iYiLWJVYInDoyrmYB78x3BD_0NIFiFZ-yncHHfRZU986jw%3D%3D%22%5D%5D; cto_bundle=kNfhd19ENXFFZ0FjUUp4aGpCRlZVRFpYUHFkJTJCY1p6b2llOTd1dnBxc0FNRHZtWGRnRHdjamc3QnNkOUExUHd5VkpBdnVJQ1pVblBhOFVWckFsVU1rVXZHQ2lzWlhKbGtJVks1c25leHB6QWVuaFc3TkZqVXNKSUFFQ2duWHg1R0VhUGVueUgzMnkwaTNkUXpmVkptbkk3JTJCYkZnJTNEJTNE",
      "Referer": "https://aternos.org/server/",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": null,
    "method": "GET"
  }).then(async rol => {
    console.log(await rol.json())
  })
  
  await delay(900 *60);
}
})();
