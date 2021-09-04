

let table1 = [
  [1, "පාටිභොග සහ තයෝ ධම්ම සූත්‍ර", "https://www.kozco.com/tech/piano2.wav" ],
  [2, "අනමතග්ග සංසාරය", "https://www.kozco.com/tech/piano2.wav" ],
  [3, "දහම් අසා නිවන් දැකීමට නම්", ""],
  [4, "‍නිවන සඳහා වීර්යය හතරක්", ""],
  [5, "නිවනට සප්පාය ධර්මයක්", ""],
  [6, "අට්ට මහා පුරිස විතක්ක", ""],
  [7, "පූර්ව කෘත්‍ය", ""],
  [8, "බුදු ගුණ", ""],
  [9, "බුදු ගුණ - වේසාරජ්ජ භාවයන් - සර්වඥත ඤාණ", ""],
  [10, "බුදු ගුණින් ආර්ය සත්‍යය දැකීම", ""], 
  [11, "ධර්මයේ ඒහිපස්සිකෝ ගුණය", ""], 
  [12, "සඟ ගුණ - අග්ගප්පසාද සූත්‍රය", ""], 
  [13, "මෙත් වැඩීමට නම්", ""], 
  [14, "මෛත්‍රී විදර්ශනාවට", ""], 
  [15, "කායගතාසති භාවනාව", ""], 
  [16, "පිළිකුල් භාවනාව", ""], 
  [17, "පිළිකුල් විදර්ශනාව", ""], 
  [18, "පිළිකුල් බව - නාම රූප", ""], 
  [19, "මරණානුස්සති", ""], 
  [20, "මරණයෙන් සිත සුගතියට", ""], 
  [21, "මළමිනියෙන් ශූන්‍යතාවයට", ""], 
  [22, "මරණය - විඥාන කසිනයට", ""], 
  [23, "ආහාරයේ පිළිකුල් සංඥාව", ""], 
  [24, "භෝජනයේ පමණ දැන නිවනට", ""], 
  [25, "ඉන්ද්‍රිය සංවරය", ""], 
  [26, "සත්තිස් බෝධිපාක්ෂික ධර්ම", ""], 
  [27, "සතිය පිහිටුවීම", ""],
  [28, "සති සම්පජඤ්ඤය",""], 
  [29, "සෘද්ධිපාද ධර්ම",""], 
  [30, "විරිය සංවරය",""], 
  [31, "පංච ඉන්ද්‍රිය",""], 
  [32, "ඉන්ද්‍රිය 22",""], 
  [33, "ඉන්ද්‍රිය භාවනා",""], 
  [34, "බොජ්ජංග 7",""], 
  [35, "ආර්ය සත්‍ය සතර පිළිපැදීම",""], 
  [36, "විමුත්ත පරිපාචනීය ධර්ම",""], 
  [37, "සමාධිය - න්‍යායාත්මකව",""], 
  [38, "ධ්‍යානාංග නැතිවී යන හැටි",""], 
  [39, "සමාධි භාවනා ක්‍රම 4",""], 
  [40, "ධ්‍යාන තුළින් නිවන",""], 
  [41, "ඕඝ තරණය - පංචස්කන්ධයේ හඳුන්වාදීම",""], 
  [42, "පංචස්කන්ධයේ සමුදය",""], 
  [43, "සමාධි භාවනා සූත්‍රය",""], 
  [44, "පංචස්කන්ධයේ පරමාර්ථ සත්‍යය",""], 
  [45, "නාම රූප ධර්ම",""], 
  [46, "නාම රූප පරිච්ඡේද ඥානය",""], 
  [47, "නාම රූප තුළින් අනාත්මය",""], 
  [48, "නාම රූප තුළින් නිවනට",""], 
  [49, "ධාතු 6 (ධාතු විභංග සූත්‍රය)",""], 
  [50, "ආයතන 6 (අජ්ජත්තික)",""], 

  [51, "බාහිර ආයතන 6", "https://www.kozco.com/tech/piano2.wav" ],
  [52, "විඥාන 6", "https://www.kozco.com/tech/piano2.wav" ],
  [53, "ඵස්ස 6", ""],
  [54, "‍මනසේ හැසිරීම් ස්වරූප - මනෝපවිචාර ධර්ම", ""],
  [55, "මනෝපවිචාර ධර්ම - විස්තර", ""],
  [56, "සක්මන් භාවනාව නිවනට", ""],
  [57, "සේඛයන් පිරිහෙන හැටි", ""],
  [58, "විදර්ශනාව හඳුන්වාදීම", ""],
  [59, "විදර්ශනා ඥාන - 1", ""],
  [60, "විදර්ශනා ඥාන - 2", ""], 
  [61, "අනුපස්සනා 7", ""], 
  [62, "විපස්සනා 18", ""], 
  [63, "අනිච්ච සංඥාව", ""], 
  [64, "ඉන්ද්‍රිය 6 - අනිත්‍යය, අනාත්මය", ""], 
  [65, "අනිත්‍යානුපස්සනාව", ""], 
  [66, "අනිත්‍යානුපස්සනා, පූර්ව කෘත්‍ය", ""], 
  [67, "40 ආකාර විදර්ශනාව - අනිච්චා - රූප සන්තති", ""], 
  [68, "40 ආකාර විදර්ශනාව - අනිච්චා - රූප", ""], 
  [69, "40 ආකාර විදර්ශනාව - අනිච්චා - වේදනා", ""], 
  [70, "40 ආකාර විදර්ශනාව - අනිච්චා - සංඥා", ""], 
  [71, "40 ආකාර විදර්ශනාව - අනිච්චා - සංඛාර", ""], 
  [72, "40 ආකාර විදර්ශනාව - අනිච්චා - විඥ්ඥාන", ""], 
  [73, "40 ආකාර විදර්ශනාව - දුක්ඛා - සංස්කාර", ""], 
  [74, "40 ආකාර විදර්ශනාව - දුක්ඛා - රූප", ""], 
  [75, "40 ආකාර විදර්ශනාව - දුක්ඛා - වේදනා", ""], 
  [76, "40 ආකාර විදර්ශනාව - දුක්ඛා - 3", ""], 
  [77, "දුක්ඛානුපස්සනාව කෙටියෙන්", ""],
  [78, "දුක දැක නිවනට",""], 
  [79, "මගේ බව ස්කන්ධ 5 මගේද?",""], 
  [80, "නැතිවීම දැක අනාත්මයට",""], 
  [81, "සිත හැර ආත්මයක් නැත",""], 
  [82, "පංචස්කන්ධ හැර ආත්මයක් නැත",""], 
  [83, "ආත්මය ඇති කරගත්තේ කවුද?",""], 
  [84, "අචේලක කස්සප - දුක තමා විසින් ඇති කරගත්තේද?",""], 
  [85, "අචේලක කස්සප - පංචස්කන්ධ ඇති කර ගත්තේ මමද?",""], 
  [86, "සත් අනුපස්සනා",""], 
  [87, "ඛයානුපස්සනාව",""], 
  [88, "වයානුපස්සනාව",""], 
  [89, "විරාගය - අග්ගප්පසාද සූත්‍රය",""], 
  [90, "විරාගය - නිරෝධය පටිනිස්සග්ගය",""], 
  [91, "ඡන්දරාගය - විරාගය",""], 
  [92, "පංචස්කන්ධයේ අසාරය",""], 
  [93, "ඵේනපිණ්ඩූපම සූත්‍රය",""], 
  [94, "ඡන්දරාගය දුරු කිරීම",""], 
  [95, "අනිමිත්ත අප්පනිහිත සුඤ්ඤත සමාධි",""], 
  [96, "අනිමිත්තානුපස්සනාව",""], 
  [97, "ලෝකය ශූන්‍යයි - ගැඹුරින්",""], 
  [98, "ශූන්‍ය ලෝකයෙන් නිවනට",""], 
  [99, "ලෝකය ශූන්‍යයි - 1",""], 
  [100, "ලෝකය ශූන්‍යයි - 2",""], 
];

const toTop = document.querySelector(".to-top");
window.onscroll = () => {
  if (window.scrollY > 20) {
    toTop.style.transform = "translate(0)";
  } else {
    toTop.style.transform = "translateY(200px)";
  }
};
toTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
window.onload = () => {
  console.clear();
};
// right menu
const mobileMenu = document.querySelector(".right-menu");
const mobileMenuClose = document.querySelector(".mobileMenuClose");
const rightMenu = document.querySelector(".mobile-menu");
mobileMenu.addEventListener("click", () => {
  rightMenu.style.width = "320px";
});
mobileMenuClose.addEventListener("click", () => {
  rightMenu.style.width = "0";
});
// left menu
const leftMenu = document.querySelector(".left-menu");
const leftMenuWindow = document.querySelector(".items");
const closeItemsWin = document.querySelector(".close-item-win");
leftMenu.addEventListener("click", () => {
  leftMenuWindow.style.left = "0";
});
closeItemsWin.addEventListener("click", () => {
  leftMenuWindow.style.left = "-100%";
});

//filling tables with audio data
window.onload = function () {
  var tbody1 = document.getElementById("tbody_1");
  var tbody2 = document.getElementById("tbody_2");
  var template = document.getElementById("table_row");

  for (let i = 0; i < 50; i++) {
    // Clone the new row and insert it into the table
    var clone = template.content.cloneNode(true);
    var td = clone.querySelectorAll("td");
    var audio_src = clone.getElementById("audio_source");
    audio_src.src = table1[i][2];
    td[0].textContent = table1[i][0];
    td[1].textContent = table1[i][1];
    tbody1.appendChild(clone);
  }
  for (let i = 50; i < table1.length; i++) {
    // Clone the new row and insert it into the table
    var clone = template.content.cloneNode(true);
    var td = clone.querySelectorAll("td");
    var audio_src = clone.getElementById("audio_source");
    audio_src.src = table1[i][2];
    td[0].textContent = table1[i][0];
    td[1].textContent = table1[i][1];


    tbody2.appendChild(clone);
  }
};

