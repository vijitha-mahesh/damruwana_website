let table1 = [
  [1, "පාටිභොග සහ තයෝ ධම්ම සූත්‍ර", "https://jksdhkg"],
  [2, "අනමතග්ග සංසාරය", "https://jksdhkg"],
  [3, "දහම් අසා නිවන් දැකීමට නම්", "https://jksdhkg"],
  [4, "‍නිවන සඳහා වීර්යය හතරක්", "https://jksdhkg"],
  [5, "නිවනට සප්පාය ධර්මයක්", "https://jksdhkg"],
  [6, "අට්ට මහා පුරිස විතක්ක", "https://jksdhkg"],
  [7, "පූර්ව කෘත්‍ය", "https://jksdhkg"],
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

  [1, "පාටිභොග සහ තයෝ ධම්ම සූත්‍ර", "https://jksdhkg"],
  [2, "අනමතග්ග සංසාරය", "https://jksdhkg"],
  [3, "දහම් අසා නිවන් දැකීමට නම්", "https://jksdhkg"],
  [4, "‍නිවන සඳහා වීර්යය හතරක්", "https://jksdhkg"],
  [5, "නිවනට සප්පාය ධර්මයක්", "https://jksdhkg"],
  [6, "අට්ට මහා පුරිස විතක්ක", "https://jksdhkg"],
  [7, "පූර්ව කෘත්‍ය", "https://jksdhkg"],
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
    td[0].textContent = table1[i][0];
    td[1].textContent = table1[i][1];
    tbody1.appendChild(clone);
  }
  for (let i = 50; i < table1.length; i++) {
    // Clone the new row and insert it into the table
    var clone = template.content.cloneNode(true);
    var td = clone.querySelectorAll("td");
    td[0].textContent = table1[i][0];
    td[1].textContent = table1[i][1];
    tbody2.appendChild(clone);
  }
};

