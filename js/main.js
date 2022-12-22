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

// every article box text div has id "big-[htmlfilename]"
function oldArticleBox(title, desc, art, date) {
  document.getElementById("big-" + art).innerHTML =
    "<h3>" +
    title +
    "</h3><h5>by Matthew Nudelman - " +
    date +
    "</h5><br /><p>" +
    desc +
    "</p>";
}

function testBox(n) {
  let bigLink = document.createElement("a");
  bigLink.href = big[n].year + "/" + big[n].m + "/" + big[n].id + ".html";
  document.getElementById("big-list").appendChild(bigLink);

  let bigArticle = document.createElement("div");
  bigArticle.classList = "big-article";
  bigLink.appendChild(bigArticle);

  let row = document.createElement("div");
  row.classList = "row";
  bigArticle.appendChild(row);

  let cola = document.createElement("div");
  cola.classList = "col-lg-2 col-sm-3";
  row.appendChild(cola);

  let imgFrame = document.createElement("div");
  imgFrame.classList = "big-frame";
  cola.appendChild(imgFrame);

  let image = document.createElement("img");
  image.src = "img/" + big[n].id + ".png";
  image.classList = "new-img";
  image.alt = big[n].alt;
  image.title = big[n].hover;
  imgFrame.appendChild(image);

  let colb = document.createElement("div");
  colb.classList = "col-sm-10";
  row.appendChild(colb);

  let bigTitle = document.createElement("h3");
  bigTitle.innerText = big[n].title;
  colb.appendChild(bigTitle);

  const bigDate = document.createElement("h5");
  bigDate.innerText =
    "by " +
    big[n].author +
    " - " +
    big[n].month +
    " " +
    big[n].day +
    ", " +
    big[n].year;
  colb.appendChild(bigDate);

  const lineBreak = document.createElement("br");
  colb.appendChild(lineBreak);

  const bigDesc = document.createElement("p");
  bigDesc.innerText = big[n].desc;
  colb.appendChild(bigDesc);
}

function articleBox(n) {
  let bigLink = document.createElement("a");
  bigLink.href = "/" + big[n].year + "/" + big[n].m + "/" + big[n].id + ".html";
  document.getElementById("big-list").appendChild(bigLink);

  let bigArticle = document.createElement("div");
  bigArticle.classList = "big-article";
  bigLink.appendChild(bigArticle);

  let row = document.createElement("div");
  row.classList = "row";
  bigArticle.appendChild(row);

  let cola = document.createElement("div");
  cola.classList = "col-lg-2 col-sm-3";
  row.appendChild(cola);

  let imgFrame = document.createElement("div");
  imgFrame.classList = "big-frame";
  cola.appendChild(imgFrame);

  let image = document.createElement("img");
  image.src = "/img/" + big[n].id + ".png";
  image.classList = "new-img";
  image.alt = big[n].alt;
  image.title = big[n].hover;
  imgFrame.appendChild(image);

  let colb = document.createElement("div");
  colb.classList = "col-sm-10";
  row.appendChild(colb);

  let bigTitle = document.createElement("h3");
  bigTitle.innerText = big[n].title;
  colb.appendChild(bigTitle);

  const bigDate = document.createElement("h5");
  bigDate.innerText =
    "by " +
    big[n].author +
    " - " +
    big[n].month +
    " " +
    big[n].day +
    ", " +
    big[n].year;
  colb.appendChild(bigDate);

  const lineBreak = document.createElement("br");
  colb.appendChild(lineBreak);

  const bigDesc = document.createElement("p");
  bigDesc.innerText = big[n].desc;
  colb.appendChild(bigDesc);
}

const big = [
  // for article lists
  {
    id: "ios16",
    author: "Matthew Nudelman",
    title: "iOS 16 - Major Features and Future Updates",
    desc: "This fall, users of Apple devices can expect several updates to iOS including features both new and previously-announced.",
    month: "November",
    m: "11",
    day: "30",
    year: "2022",
    alt: "An icon with the number 16 representing iOS 16, the newest version of iOS.",
    hover:
      "An icon with the number 16 representing iOS 16, the newest version of iOS.",
  },
  {
    id: "ipad10",
    author: "Matthew Nudelman",
    title: "iPad 10 - The End of the Lightning Port",
    desc: "Apple recently announced a redesigned 10th-generation iPad, making the 9th-generation iPad the last to include built-in Lightning connectivity. However, the connector is not yet gone from the iPad...",
    month: "December",
    m: "12",
    day: "3",
    year: "2022",
    alt: "The 10th-generation iPad.",
    hover: "The 10th-generation iPad.",
  },
  {
    id: "pixelwatch",
    author: "Matthew Nudelman",
    title: "Google Pixel Watch",
    desc: "Google recently entered the smartwatch game, leaving many to wonder how they intend to compete with Apple and Samsung on wearable technology.",
    month: "December",
    m: "12",
    day: "10",
    year: "2022",
    alt: "The Google Pixel Watch.",
    hover: "The first Google Pixel Watch.",
  },
  {
    id: "november",
    author: "Firstname Lastname",
    title: "Test Article",
    desc: "Test description.",
    month: "December",
    m: "11",
    day: "10",
    year: "2022",
    alt: "Alt text.",
    hover: "Title text.",
  },
];

/* function newArtB(n) {
  document.getElementById("big-" + big[n].id).innerHTML =
    "<div class='big-article'><div class='row'><div class='col-lg-2 col-sm-3'><div class='big-frame'><img class='new-img' src='/img/" +
    big[n].id +
    ".png' alt='" +
    big[n].alt +
    "' title='" +
    big[n].hover +
    "'/></div></div><div class='col-sm-10'><h3>" +
    big[n].title +
    "</h3><h5>" +
    big[n].month +
    " " +
    big[n].day +
    ", " +
    big[n].year +
    "</h5><br /><p>" +
    big[n].desc +
    "</p></div></div></div>";
}

/* 
"<div class='big-article'><div class='row'><div class='col-lg-2 col-sm-3'><div class='big-frame'><img class='new-img' src='/img/" +
  big[n].id +
  ".png' alt='" +
  big[n].alt +
  "' title='" +
  big[n].hover +
  "'/></div></div><div class='col-sm-10'><h3>" +
  big[n].title +
  "</h3><h5>" +
  big[n].month +
  " " +
  big[n].day +
  ", " +
  big[n].year +
  "</h5><br /><p>" +
  big[n].desc +
  "</p></div></div></div>";
*/
/*
              '<div class="big-article">
                <div class="row">
                  <div class="col-lg-2 col-sm-3">
                    <div class="big-frame">
                      <img
                        class="new-img"
                        src="/img/' + id +'.png"
                        alt="' + big[n].alt + 
                        "'title="' + big[n].hover +
                      "'/>
                    </div>
                  </div>
                  <div class="col-sm-10">
                    <h3> '+ big[n].title + '</h3>
                    <h5> '+ big[n].month + ' ' + big[n] + ', ' + big[n].year + '</h5>
                    <br />
                    <p>'
                      + big[n].desc + 
                    '</p>
                  </div>
                </div>
              </div>'
*/

/* 

ARTICLE INDICES -- (EACH NEW ARTICLE IS THE NEXT ONE)

0 : ios16.html
1 : ipad10.html
2 : pixelwatch.html


*/
