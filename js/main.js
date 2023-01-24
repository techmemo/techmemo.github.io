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

function dateFill(e) {
  document.getElementById("date").innerHTML =
    setMonth(getFolder()) + " " + big[e].day + ", " + big[e].year;
}

const dates = [30, 3, 10, 2, 17]; // possibly not using?

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

  let tagsList = document.createElement("p");
  tagsList.style.fontWeight = "bold";
  colb.appendChild(tagsList);

  let tagsText = "<i>Tags: </i>";

  var thisTags = big[n].tags.split(" ");

  let tagFlat = '<a href="/tags/' + thisTags[0] + '/">' + thisTags[0] + "</a>";

  for (let i = 1; i < thisTags.length; i++) {
    tagFlat +=
      ", " + '<a href="/tags/' + thisTags[i] + '/">' + thisTags[i] + "</a>";
  }

  tagsList.innerHTML = tagsText + tagFlat;
}

function changeBox(month, day, year, change) {
  let bigArticle = document.createElement("div");
  bigArticle.classList = "big-article";
  document.getElementById("big-list").appendChild(bigArticle);

  let row = document.createElement("div");
  row.classList = "row";
  bigArticle.appendChild(row);

  let colb = document.createElement("div");
  colb.classList = "col-lg-10 col-sm-12";
  row.appendChild(colb);

  let bigDate = document.createElement("h3");
  bigDate.innerText = month + " " + day + ", " + year;
  colb.appendChild(bigDate);

  const lineBreak = document.createElement("br");
  colb.appendChild(lineBreak);

  var thisChanges = change.split("-");

  const bigDesc = document.createElement("ul");
  for (let i = 0; i < thisChanges.length; i++) {
    bigDesc.innerHTML += "<li>" + thisChanges[i] + "</li>";
  }
  bigDesc.style.listStyleType = "'- '";
  colb.appendChild(bigDesc);
}

const tags = [
  { id: "apple", amt: "3", text: "Apple" },
  { id: "software", amt: "1", text: "Software" },
  { id: "google", amt: "1", text: "Google" },
  { id: "laptop", amt: "1", text: "Laptop" },
  { id: "desktop", amt: "0", text: "Desktop" },
];

function tagBox() {
  let lineBreak = document.createElement("br");
  let listTags = document.createElement("ul");

  document.getElementById("tagbox").appendChild(lineBreak);
  document.getElementById("tagbox").appendChild(listTags);

  for (let i = 0; i < tags.length; i++) {
    const link = document.createElement("a");
    link.href = "/tags/" + tags[i].id + "/";
    listTags.appendChild(link);
    const item = document.createElement("li");

    item.innerText = tags[i].text + " (" + tags[i].amt + ")";
    link.appendChild(item);
  }
}

const months = [
  { y: "2022", m: "11", amt: "1", text: "November" },
  { y: "2022", m: "12", amt: "2", text: "December" },
  { y: "2023", m: "1", amt: "1", text: "January" },
];

function monthBox() {
  let lineBreak = document.createElement("br");
  let listDirs = document.createElement("ul");

  document.getElementById("monthbox").appendChild(lineBreak);
  document.getElementById("monthbox").appendChild(listDirs);

  for (let i = 0; i < months.length; i++) {
    const link = document.createElement("a");
    link.href = "/" + months[i].y + "/" + months[i].m + "/";
    listDirs.appendChild(link);
    const item = document.createElement("li");

    item.innerText = months[i].text + " " + months[i].y;
    link.appendChild(item);
  }
}

/* <h4>Tags</h4>
            <br />
            <ul>
              <a href="tags/apple/"><li>Apple (2)</li></a>
              <a href="tags/software/"><li>Software (1)</li></a>
              <a href="tags/google/"><li>Google (1)</li></a>
            </ul> */

const big = [
  // for article lists

  {
    id: "november",
    author: "Firstname Lastname",
    title: "Test Article",
    label: "november",
    desc: "Test description.",
    month: "December",
    m: "11",
    day: "10",
    year: "2022",
    alt: "Alt text.",
    hover: "Title text.",
    tags: "",
    topic: "",
  },
  {
    id: "ios16",
    author: "Matthew Nudelman",
    title: "iOS 16 - Major Features and Future Updates",
    label: "iOS 16 - Features and Updates",
    desc: "This fall, users of Apple devices can expect several updates to iOS including features both new and previously-announced.",
    month: "November",
    m: "11",
    day: "30",
    year: "2022",
    alt: "An icon with the number 16 representing iOS 16, the newest version of iOS.",
    hover:
      "An icon with the number 16 representing iOS 16, the newest version of iOS.",
    tags: "apple software",
    topic: "phones",
  },
  {
    id: "ipad10",
    author: "Matthew Nudelman",
    title: "iPad 10 - The End of the Lightning Port",
    label: "iPad 10",
    desc: "Apple recently announced a redesigned 10th-generation iPad, making the 9th-generation iPad the last to include built-in Lightning connectivity. However, the connector is not yet gone from the iPad...",
    month: "December",
    m: "12",
    day: "3",
    year: "2022",
    alt: "The 10th-generation iPad.",
    hover: "The 10th-generation iPad.",
    tags: "apple",
    topic: "tablets",
  },
  {
    id: "pixelwatch",
    author: "Matthew Nudelman",
    title: "Google Pixel Watch",
    label: "Google Pixel Watch",
    desc: "Google recently entered the smartwatch game, leaving many to wonder how they intend to compete with Apple and Samsung on wearable technology.",
    month: "December",
    m: "12",
    day: "10",
    year: "2022",
    alt: "The Google Pixel Watch.",
    hover: "The first Google Pixel Watch.",
    tags: "google",
    topic: "wearables",
  },
  {
    id: "applewatchstress",
    author: "Matthew Nudelman",
    title: "Apple Watch Stress Tracking",
    label: "Apple Watch Stress Tracking",
    desc: "Recent studies have found that the heart rate monitor of the Apple Watch is precise enough for stress tracking.",
    month: "January",
    m: "1",
    day: "2",
    year: "2023",
    alt: "Apple Watch.",
    hover: "Apple Watch.",
    tags: "apple",
    topic: "wearables",
  },
  {
    id: "macbookpro",
    author: "Matthew Nudelman",
    title: "New MacBook Pro with M2 Pro and M2 Max Announced",
    label: "M2 Pro + M2 Max MacBook Pro",
    desc: "Just today, Apple announced the newest MacBook Pro featuring the M2 Pro and M2 Max.",
    month: "January",
    m: "1",
    day: "17",
    year: "2023",
    alt: "MacBook Pro (2023)",
    hover: "MacBook Pro (2023)",
    tags: "apple laptop",
    topic: "",
  },
];

function tagList() {
  let boxTitle = document.createElement("h4");
  boxTitle.innerText = "Tags on this";
  let lineBreak = document.createElement("br");
  let listTags = document.createElement("ul");

  document.getElementById("tagbox").appendChild(boxTitle);
  document.getElementById("tagbox").appendChild(lineBreak);
  document.getElementById("tagbox").appendChild(listTags);

  var loc = window.location.pathname.split("/");

  var thisArticle = loc[loc.length - 1];

  var n = 0;
  for (let h = 1; h < big.length; h++) {
    if (big[h].id + ".html" == thisArticle) {
      n = h;
      break;
    }
  }

  var thisTags = big[n].tags.split(" ");

  for (let i = 0; i < thisTags.length; i++) {
    const link = document.createElement("a");
    link.href = "/tags/" + thisTags[i] + "/";
    listTags.appendChild(link);
    const item = document.createElement("li");

    for (let j = 0; j < tags.length; j++) {
      if (thisTags[i] == tags[j].id) {
        item.innerText = tags[j].text;
      }
    }

    link.appendChild(item);
  }
}

/**<div class="directory">
            <h4>Tags on this</h4>
            <br />
            <ul>
              <a href="/tags/apple/"><li>Apple</li></a>
              <a href="/tags/software/"><li>Software</li></a>
            </ul>
          </div> */

function homeBox(n) {
  let homeLink = document.createElement("a");
  homeLink.href =
    "/" + big[n].year + "/" + big[n].m + "/" + big[n].id + ".html";
  document.getElementById("homebox").appendChild(homeLink);

  let homeDiv = document.createElement("div");
  homeDiv.classList = "home-article";
  homeLink.appendChild(homeDiv);

  let homeImg = document.createElement("img");
  homeImg.classList = "home-img";
  homeImg.src = "/img/" + big[n].id + ".png";
  homeImg.alt = big[n].alt;
  homeImg.title = big[n].hover;
  homeDiv.appendChild(homeImg);

  let homeText = document.createElement("h2");
  homeText.classList = "home-title";
  homeText.innerText = big[n].label;
  homeDiv.appendChild(homeText);
}

/** <a href="2022/11/ios16.html"
        ><div class="home-article">
          <img
            class="home-img"
            src="img/ios16.png"
            alt="An icon with the number 16 representing iOS 16, the newest version of iOS."
            title="An icon with the number 16 representing iOS 16, the newest version of iOS."
          />
          <h2 class="home-title">iOS 16 - Features and Updates</h2>
        </div>
      </a> **/

function newestList() {
  for (let n = big.length - 1; n > 0; n--) {
    articleBox(n);
  }
}

function timedList() {
  var loc = window.location.pathname.split("/");

  var folder = loc[loc.length - 2];

  for (let n = big.length - 1; n > 0; n--) {
    if (big[n].m == folder) {
      articleBox(n);
    }
  }
}

function taggedList() {
  var loc = window.location.pathname.split("/");

  var folder = loc[loc.length - 2];

  for (let n = big.length - 1; n > 0; n--) {
    var thisTags = big[n].tags.split(" ");
    for (let t = 0; t < thisTags.length; t++) {
      if (thisTags[t] == folder) {
        articleBox(n);
      }
    }
  }
}

function topicList() {
  var loc = window.location.pathname.split("/");

  var folder = loc[loc.length - 1];

  for (let n = big.length - 1; n > 0; n--) {
    var thisTopic = big[n].topic;
    if (thisTopic + ".html" == folder) {
      articleBox(n);
    }
  }
}

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

0 : november.html [tester]
1 : ios16.html
2 : ipad10.html
3 : pixelwatch.html
4 : applewatchstress.html
5 : macbookpro.html


*/
