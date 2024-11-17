function delay(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

console.log("starting");



(async () => { 
  while (true) {
    
    
  fetch("https://aternos.org/ajax/server/start?access-credits=false&TOKEN=5bOQfNx5EC4Mf4qfWpFh&SEC=tl4gsou6zun00000%3Acfy5ek6xff800000&SERVER=voJqnB0jlDJf52Z9", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9",
    "sec-ch-ua": "\"Not-A.Brand\";v=\"99\", \"Chromium\";v=\"124\"",
    "sec-ch-ua-mobile": "?1",
    "sec-ch-ua-platform": "\"Android\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "cookie": "ATERNOS_SEC_fuapqpya4sc00000=jeh57i7eps000000; ATERNOS_SEC_tl4gsou6zun00000=cfy5ek6xff800000; _ga=GA1.1.2051570280.1731787629; ATERNOS_LANGUAGE=en; ATERNOS_SESSION=9nLmNyUmaUpR0EzysIMC0lcuCcRsOjJzIMfXrpn8SUwVnvKUtJLoGlviLeGhvsf8ssgiqFSc7lFTYrfKfCyhLbOCp1AxRyojgBUi; _sharedid=e7abf290-103b-4f09-9f28-66d4b774b77c; _sharedid_cst=zix7LPQsHA%3D%3D; _lr_env_src_ats=false; hb_insticator_uid=52a203a2-1e8c-40f8-b160-c97665ff34ed; _pubcid=3d39dd49-64fa-4e6b-9454-ffac2b224541; _pubcid_cst=yyzLLLEsNg%3D%3D; _au_1d=AU1D-0100-001731787735-Y24WG8DR-7MSD; ATERNOS_SERVER=voJqnB0jlDJf52Z9; _cc_id=a135444d890ce35be302fa7e848a76aa; panoramaId_expiry=1732393673893; panoramaId=bcfb8e689d4874775cc74d351218185ca02c42ec692f0a5f66811db0d434bd2a; panoramaIdType=panoDevice; _ga_FVWZ0RM4DH=GS1.1.1731791954.1.0.1731791954.60.0.0; usersync=eNqdzzsKgDAQBNC7bJ0iyaqruYqIiKYI-MMEUYJ310Kx1W2HeTATYbWLd9MIRgmY3WZ7D6aM4DowOkkE-H1sax-aJVwVQkUF5Tq983Ya5t4GC0Ye4kEZA6XyM1Iv4swjYqCc8Qkl_f-EqDkIf8yrjhO69JvT; cto_bidid=4S46Tl92anlzRnlMNkJtSnVUMW9zNEtsYkZxSHVSVlY0bEdBMjMlMkZLUlFkUEtxTU03Q2xrcXo2TnJpVHZYJTJCJTJGTjBlNlZxa0pWazNqQ1piNGxGdiUyRkJXZSUyQnpFejdzWjZSUTUwWDlnNW9lSlFvQXh1TlUlM0Q; _ga_70M94GH0FD=GS1.1.1731829804.5.1.1731830864.0.0.0; _lr_retry_request=true; cf_clearance=W5fiqYTryzWFj2ti9TF6ABctVnJZYD6K8HKHG96bVEQ-1731830876-1.2.1.1-_2ZezOG73_rGZlbXtsoZ0do4via4im_wta5xqfqG2HgsbfwOPDaSgDShR3RTTTZnw1uKMFg60qThfa45asa.XEIUmMigL8yE54zNszIanpSeGgNerSXvC7rqanZJ_kK9PAaYUo5jj4Hw06oJ1pP4fUSEKctCWIflU8c4MiiCij1Cp4wAWG_cjkmlcUWxwa_yhIPdYiJslS2JmgEmFXJJ7TEfXu1hducXUSM8R98HAjqIovE0vLV4uF9BpWO0MVFXeBAdRot7lxksm8IUcsVYVNByYah6nl2GSEddTcHS2bTORvH8vqM8BxBc4S1gknBoexaMNNNup3RzowEBTGghMww.6COP5.IwzNHHzJyptfKadPU7lysVeeimtoWmMNtW; __gads=ID=fc6e996af735c061:T=1731787723:RT=1731830877:S=ALNI_MZaNEUAQ5eaGGRxZNtfdRC43NakAQ; __gpi=UID=00000f88479308b3:T=1731787723:RT=1731830877:S=ALNI_MY9N2WoTztD_sOPGndkbZ5QHv85HQ; __eoi=ID=844ee1bc4b78910e:T=1731787723:RT=1731830877:S=AA-AfjbKTIR-WEH7dYxamyebkaN6; FCNEC=%5B%5B%22AKsRol9KpbH_6oUfid3TAiLSSmRKuY85NslyWzwzKkxI4If5IdwU54UlWITTX-FA0ktlRYghMJW9W8OJclz59kI2Up1vNzmvUG84FVk_TFWrOYb7EmlA8rM416fOJ29XlaceDYqHfau34Q8h5LpfktvjoaAafRmvSQ%3D%3D%22%5D%5D; cto_bundle=LSbsKV9ENXFFZ0FjUUp4aGpCRlZVRFpYUHFUdkM1dE9kaTBBSnB0Y0xLR1ViZkx2JTJCR1haRDF6NWVpcGx6TG1yRE9zZHEydkV4azBld0xMMSUyRjR6U0ZXcmdUaUs4OHRGbEZBJTJCQ0plSWklMkZ3dUlsJTJCdUhJdmp1RWhRM0hoJTJGWWExckNXUERIUU9JUXVzOXklMkJhZHNyUGZBMGQyZFF5USUzRCUzRA",
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
    console.log("mmmmmmmm");
  }
  
  
}
)
console.log("mmmmmmmm");
await delay(1000);
}
    
})();
