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

function getFolder() {
  var loc = window.location.pathname.split("/");

  return loc[loc.length - 2];
}

// every article box text div has id "big-[htmlfilename]"
function articleBox(title, desc, art, date) {
  document.getElementById("big-" + art).innerHTML =
    "<h3>" +
    title +
    "</h3><h5>by Matthew Nudelman - " +
    date +
    "</h5><br /><p>" +
    desc +
    "</p>";
}

function setMonth(f) {
  switch (f) {
    case "1":
      return "January";
      break;
    case "2":
      return "February";
      break;
    case "3":
      return "March";
      break;
    case "4":
      return "April";
      break;
    case "5":
      return "May";
      break;
    case "6":
      return "June";
      break;
    case "7":
      return "July";
      break;
    case "8":
      return "August";
      break;
    case "9":
      return "September";
      break;
    case "10":
      return "October";
      break;
    case "11":
      return "November";
      break;
    case "12":
      return "December";
      break;
    default:
      return "Month";
      break;
  }
}

function dateFill(e, year) {
  document.getElementById("date").innerHTML =
    setMonth(getFolder()) + " " + dates[e] + ", " + year;
}

const dates = [30, 3, 10]; // using

const dates2 = [
  // not using
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
