// on click : run function (parameter for which cite note) to change background color of text

function hCite(c, n) {
  document.getElementById("cite-note-" + c).style.backgroundColor = "#8278a1";

  for (let i = 1; i <= n; i++) {
    if (i != c) {
      document.getElementById("cite-note-" + i).style.backgroundColor =
        "transparent";
    }
  }
}

const dates = [
  { month: "November", day: 30 },
  { month: "December", day: 3 },
  { month: "December", day: 10 },
];

/* 

ARTICLE INDICES -- (EACH NEW ARTICLE IS THE NEXT ONE)

0 : ios16.html
1 : ipad10.html
2 : pixelwatch.html


*/
