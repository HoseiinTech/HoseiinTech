// const API="https://daramet.com/backbone/embed.php";let userid=document.getElementsByClassName("daramet-embed-donate")[0].id;const style=document.createElement("style");style.textContent='\n@font-face {\n    font-family: vazir-bold;\n    src: url("https://daramet.com/embed/fonts/Vazirmatn-UI-FD-Bold.woff2") format("woff2");\n    font-style: normal;\n    font-display: swap;\n  }\n  @font-face {\n    font-family: vazir-light;\n    src: url("https://daramet.com/embed/fonts/Vazirmatn-UI-FD-Light.woff2") format("woff2");\n    font-style: normal;\n    font-display: swap;\n  }\n.daramet-embed-donate {\n    position: relative;\n    background-color: white;\n    border-radius: 20px;\n    width: 380px;\n    max-width: 80vw;\n    height: fit-content;\n    margin: auto auto;\n  }\n  \n  .donate-body {\n    position: relative;\n    padding: 20px;\n    border-radius: 20px;\n    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n  }\n  .avatar{\n      display:block;\n      width: 64px;\n      height: 64px;\n      border-radius: 50%;\n      object-fit: cover;\n      background-position: center;\n      margin: auto auto;\n      \n  }\n  span { \n      display:block;\n  }\n  .displayname {\n      display:block;\n      font-family: vazir-bold;\n      text-align:center;\n      margin-top:5px;\n  }\n  .desc-donate {\n    display:block;\n    font-family: vazir-light;\n    text-align:center;\n    margin-top:5px;\n}\n  .daramet-donate-stats{\n    display: flex;\n    justify-items: center;\n    justify-content: center;\n    width: 300px;\n    margin: auto auto;\n    margin-top:5px;\n    margin-bottom:5px;\n  }\n  .daramet-heart-icon{\n    display: block !important;\n    margin-top: -2px;\n  }\n\n  .daramet-page-btn{\n    display: block;\n    padding: 3px 7px;\n    background-color: #00bfa6;\n    border-radius: 7px;\n    width: 170px;\n    min-width: fit-content;\n    font-size:16px;\n    font-family: \'vazir-bold\';\n    color: white;\n    text-align:center;\n    margin: auto auto;\n    margin-top:20px;\n  }\n  a {\n    text-decoration: none;\n    color: inherit;\n  }\n  ';var userData=[];const getUserData=async()=>{const n=await fetch(API,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({rule:"embed",data:userid})}),t=await n.json();const a=1==t.donate_type?"☕️":"🍕";document.getElementById(userid).innerHTML="<div class='donate-body'><img class='avatar' src='"+t.avatar+"' />\n  <span class='displayname'>"+t.displayname+"</span>\n  <div class=\"daramet-donate-stats\">\n      <img src='https://daramet.com/embed/resource/eye.svg' width=\"20px\" class='daramet-heart-icon'\" />&nbsp; <span style='font-family:vazir-light'>"+t.views+"</span> &nbsp;  &nbsp; <img src='https://daramet.com/embed/resource/heart.svg' width=\"16px\" /> &nbsp; <span style='font-family:vazir-light'>"+t.likes+"</span>\n  </div>\n  <span class='desc-donate'>برای حمایت از من، یه "+a+" مهمونم کن</span>\n  <a href='https://daramet.com/"+t.username+"?utm_source="+window.location.hostname+"&utm_medium=embeded&utm_campaign=embed' target='_blank'><span class='daramet-page-btn'>مشاهده صفحه و حمایت</span></a>\n  </div>"};getUserData(),document.head.appendChild(style);

function _0x394c(_0x5f35c9, _0xfbae26) {
  const _0x4485bf = _0x4485();
  return (
    (_0x394c = function (_0x394ca9, _0x553222) {
      _0x394ca9 = _0x394ca9 - 0x1ca;
      let _0x1b7b0f = _0x4485bf[_0x394ca9];
      return _0x1b7b0f;
    }),
    _0x394c(_0x5f35c9, _0xfbae26)
  );
}
const _0x30dcc3 = _0x394c;
function _0x4485() {
  const _0x31ddfc = [
    "1232EMTsvf",
    "createElement",
    "\x0a@font-face\x20{\x0a\x20\x20\x20\x20font-family:\x20vazir-bold;\x0a\x20\x20\x20\x20src:\x20url(\x22https://daramet.com/embed/fonts/Vazirmatn-UI-FD-Bold.woff2\x22)\x20format(\x22woff2\x22);\x0a\x20\x20\x20\x20font-style:\x20normal;\x0a\x20\x20\x20\x20font-display:\x20swap;\x0a\x20\x20}\x0a\x20\x20@font-face\x20{\x0a\x20\x20\x20\x20font-family:\x20vazir-light;\x0a\x20\x20\x20\x20src:\x20url(\x22https://daramet.com/embed/fonts/Vazirmatn-UI-FD-Light.woff2\x22)\x20format(\x22woff2\x22);\x0a\x20\x20\x20\x20font-style:\x20normal;\x0a\x20\x20\x20\x20font-display:\x20swap;\x0a\x20\x20}\x0a.daramet-embed-donate\x20{\x0a\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20background-color:\x20white;\x0a\x20\x20\x20\x20border-radius:\x2020px;\x0a\x20\x20\x20\x20width:\x20380px;\x0a\x20\x20\x20\x20max-width:\x2080vw;\x0a\x20\x20\x20\x20height:\x20fit-content;\x0a\x20\x20\x20\x20margin:\x20auto\x20auto;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.donate-body\x20{\x0a\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20padding:\x2020px;\x0a\x20\x20\x20\x20border-radius:\x2020px;\x0a\x20\x20\x20\x20box-shadow:\x20rgba(149,\x20157,\x20165,\x200.2)\x200px\x208px\x2024px;\x0a\x20\x20}\x0a\x20\x20.avatar{\x0a\x20\x20\x20\x20\x20\x20display:block;\x0a\x20\x20\x20\x20\x20\x20width:\x2064px;\x0a\x20\x20\x20\x20\x20\x20height:\x2064px;\x0a\x20\x20\x20\x20\x20\x20border-radius:\x2050%;\x0a\x20\x20\x20\x20\x20\x20object-fit:\x20cover;\x0a\x20\x20\x20\x20\x20\x20background-position:\x20center;\x0a\x20\x20\x20\x20\x20\x20margin:\x20auto\x20auto;\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20}\x0a\x20\x20span\x20{\x20\x0a\x20\x20\x20\x20\x20\x20display:block;\x0a\x20\x20\x20\x20\x20\x20color:black;\x0a\x20\x20}\x0a\x20\x20.displayname\x20{\x0a\x20\x20\x20\x20\x20\x20display:block;\x0a\x20\x20\x20\x20\x20\x20font-family:\x20vazir-bold;\x0a\x20\x20\x20\x20\x20\x20text-align:center;\x0a\x20\x20\x20\x20\x20\x20margin-top:5px;\x0a\x20\x20\x20\x20\x20\x20color:black;\x0a\x20\x20}\x0a\x20\x20.desc-donate\x20{\x0a\x20\x20\x20\x20display:block;\x0a\x20\x20\x20\x20font-family:\x20vazir-light;\x0a\x20\x20\x20\x20text-align:center;\x0a\x20\x20\x20\x20margin-top:5px;\x0a}\x0a\x20\x20.daramet-donate-stats{\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20justify-items:\x20center;\x0a\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20width:\x20300px;\x0a\x20\x20\x20\x20margin:\x20auto\x20auto;\x0a\x20\x20\x20\x20margin-top:5px;\x0a\x20\x20\x20\x20margin-bottom:5px;\x0a\x20\x20}\x0a\x20\x20.daramet-heart-icon{\x0a\x20\x20\x20\x20display:\x20block\x20!important;\x0a\x20\x20\x20\x20margin-top:\x20-2px;\x0a\x20\x20}\x0a\x0a\x20\x20.daramet-page-btn{\x0a\x20\x20\x20\x20display:\x20block;\x0a\x20\x20\x20\x20padding:\x203px\x207px;\x0a\x20\x20\x20\x20background-color:\x20#00bfa6;\x0a\x20\x20\x20\x20border-radius:\x207px;\x0a\x20\x20\x20\x20width:\x20170px;\x0a\x20\x20\x20\x20min-width:\x20fit-content;\x0a\x20\x20\x20\x20font-size:16px;\x0a\x20\x20\x20\x20font-family:\x20\x27vazir-bold\x27;\x0a\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20text-align:center;\x0a\x20\x20\x20\x20margin:\x20auto\x20auto;\x0a\x20\x20\x20\x20margin-top:20px;\x0a\x20\x20}\x0a\x20\x20a\x20{\x0a\x20\x20\x20\x20text-decoration:\x20none;\x0a\x20\x20\x20\x20color:\x20inherit;\x0a\x20\x20}\x0a\x20\x20",
    "1475048lSqTfQ",
    "14910Vqzcvw",
    "textContent",
    "18elgBqB",
    "</span>\x20&nbsp;\x20\x20&nbsp;\x20<img\x20src=\x27https://daramet.com/embed/resource/heart.svg\x27\x20width=\x2216px\x22\x20/>\x20&nbsp;\x20<span\x20style=\x27font-family:vazir-light\x27>",
    "getElementsByClassName",
    "</span>\x0a\x20\x20</div>\x0a\x20\x20<span\x20class=\x27desc-donate\x27>برای\x20حمایت\x20از\x20من،\x20یه\x20",
    "785638rFeGQL",
    "\x20مهمونم\x20کن</span>\x0a\x20\x20<a\x20href=\x27https://daramet.com/",
    "location",
    "avatar",
    "displayname",
    "353214uPhbfe",
    "style",
    "innerHTML",
    "stringify",
    "likes",
    "getElementById",
    "1600833PQbzRj",
    "7WFsnHt",
    "json",
    "11gUaecb",
    "head",
    "2mmKWQd",
    "donate_type",
    "6657408rYeOes",
    "<div\x20class=\x27donate-body\x27><img\x20class=\x27avatar\x27\x20src=\x27",
    "application/json",
    "&utm_medium=embeded&utm_campaign=embed\x27\x20target=\x27_blank\x27><span\x20class=\x27daramet-page-btn\x27>مشاهده\x20صفحه\x20و\x20حمایت</span></a>\x0a\x20\x20</div>",
    "</span>\x0a\x20\x20<div\x20class=\x22daramet-donate-stats\x22>\x0a\x20\x20\x20\x20\x20\x20<img\x20src=\x27https://daramet.com/embed/resource/eye.svg\x27\x20width=\x2220px\x22\x20class=\x27daramet-heart-icon\x27\x22\x20/>&nbsp;\x20<span\x20style=\x27font-family:vazir-light\x27>",
    "2667710mrnkKt",
    "hostname",
  ];
  _0x4485 = function () {
    return _0x31ddfc;
  };
  return _0x4485();
}
(function (_0x33e0d7, _0x58ccf5) {
  const _0x41b444 = _0x394c,
    _0x2efc8a = _0x33e0d7();
  while (!![]) {
    try {
      const _0x39c573 =
        parseInt(_0x41b444(0x1dd)) / 0x1 +
        (parseInt(_0x41b444(0x1ca)) / 0x2) *
          (-parseInt(_0x41b444(0x1e8)) / 0x3) +
        (-parseInt(_0x41b444(0x1d3)) / 0x4) *
          (parseInt(_0x41b444(0x1d7)) / 0x5) +
        (-parseInt(_0x41b444(0x1e2)) / 0x6) *
          (parseInt(_0x41b444(0x1e9)) / 0x7) +
        (parseInt(_0x41b444(0x1d6)) / 0x8) *
          (parseInt(_0x41b444(0x1d9)) / 0x9) +
        parseInt(_0x41b444(0x1d1)) / 0xa +
        (parseInt(_0x41b444(0x1eb)) / 0xb) * (parseInt(_0x41b444(0x1cc)) / 0xc);
      if (_0x39c573 === _0x58ccf5) break;
      else _0x2efc8a["push"](_0x2efc8a["shift"]());
    } catch (_0x4177a9) {
      _0x2efc8a["push"](_0x2efc8a["shift"]());
    }
  }
})(_0x4485, 0x7187b);
const API = "https://daramet.com/backbone/embed.php";
let userid = document[_0x30dcc3(0x1db)]("daramet-embed-donate")[0x0]["id"];
const style = document[_0x30dcc3(0x1d4)](_0x30dcc3(0x1e3));
style[_0x30dcc3(0x1d8)] = _0x30dcc3(0x1d5);
var userData = [];
const getUserData = async () => {
  const _0x1e2950 = _0x30dcc3,
    _0x2e6a4e = await fetch(API, {
      method: "POST",
      headers: { "content-type": _0x1e2950(0x1ce) },
      body: JSON[_0x1e2950(0x1e5)]({ rule: "embed", data: userid }),
    }),
    _0x367acc = await _0x2e6a4e[_0x1e2950(0x1ea)](),
    _0x977c9 = _0x367acc[_0x1e2950(0x1cb)] == 0x1 ? "☕️" : "🍕";
  document[_0x1e2950(0x1e7)](userid)[_0x1e2950(0x1e4)] =
    _0x1e2950(0x1cd) +
    _0x367acc[_0x1e2950(0x1e0)] +
    "\x27\x20/>\x0a\x20\x20<span\x20class=\x27displayname\x27>" +
    _0x367acc[_0x1e2950(0x1e1)] +
    _0x1e2950(0x1d0) +
    _0x367acc["views"] +
    _0x1e2950(0x1da) +
    _0x367acc[_0x1e2950(0x1e6)] +
    _0x1e2950(0x1dc) +
    _0x977c9 +
    _0x1e2950(0x1de) +
    _0x367acc["username"] +
    "?utm_source=" +
    window[_0x1e2950(0x1df)][_0x1e2950(0x1d2)] +
    _0x1e2950(0x1cf);
};
getUserData(), document[_0x30dcc3(0x1ec)]["appendChild"](style);
