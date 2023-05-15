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

function scrollDown() {
  let pageBottom = document.getElementById("pagebottom");
  pageBottom.scrollIntoView();
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
  cola.classList = "col-lg-2 col-sm-2 col-md-3 col-xs-3";
  row.appendChild(cola);

  let colc = document.createElement("div");
  colc.classList = "col-sm-1";
  row.appendChild(colc);

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
  colb.classList = "col-sm-8 big-text";
  row.appendChild(colb);

  let bigTitle = document.createElement("h3");
  bigTitle.innerText = big[n].title;
  bigTitle.classList = "big-title";
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
  tagsList.classList += "tagflat";
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
  { id: "apple", amt: "6", text: "Apple" },
  { id: "samsung", amt: "3", text: "Samsung" },
  { id: "google", amt: "2", text: "Google" },
  { id: "software", amt: "3", text: "Software" },
  { id: "laptop", amt: "1", text: "Laptop" },
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

    item.innerText = tags[i].text + " (" + tagAmount(i) + ")";
    link.appendChild(item);
  }
}

function tagAmount(tag) {
  let tagCount = 0;
  for (let n = big.length - 1; n > 0; n--) {
    var thisTags = big[n].tags.split(" ");
    for (let t = 0; t < thisTags.length; t++) {
      if (thisTags[t] == tags[tag].id) {
        tagCount++;
      }
    }
  }
  return tagCount;
}

const months = [
  { y: "2022", m: "11", amt: "1", text: "November" },
  { y: "2022", m: "12", amt: "2", text: "December" },
  { y: "2023", m: "1", amt: "2", text: "January" },
  { y: "2023", m: "2", amt: "3", text: "February" },
  { y: "2023", m: "3", amt: "2", text: "March" },
  { y: "2023", m: "4", amt: "1", text: "April" },
  { y: "2023", m: "5", amt: "1", text: "May" },
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
    topic: "phones software",
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
    topic: "computers",
  },
  {
    id: "samsungwinter2023rumors",
    author: "Matthew Nudelman",
    title: "Samsung Galaxy Unpacked to Reveal Galaxy S23 Phones Today",
    label: "Galaxy Unpacked 2023",
    desc: "Today, Samsung is set to reveal the Galaxy S23 series of smartphones.",
    month: "February",
    m: "2",
    day: "1",
    year: "2023",
    alt: "Galaxy Unpacked 2023",
    hover: "Galaxy Unpacked 2023",
    tags: "samsung",
    topic: "phones",
  },
  {
    id: "samsungwinter2023",
    author: "Matthew Nudelman",
    title: "Samsung Galaxy Unpacked Reveals Galaxy S23 Phones",
    label: "Samsung Galaxy Unpacked",
    desc: "On February 1, Samsung revealed the latest phones in the Galaxy S series.",
    month: "February",
    m: "2",
    day: "16",
    year: "2023",
    alt: "Galaxy Unpacked 2023",
    hover: "Galaxy Unpacked 2023",
    tags: "samsung",
    topic: "phones",
  },
  {
    id: "s23demo",
    author: "Matthew Nudelman",
    title: "Opinion: Trying Out the Samsung Galaxy S23",
    label: "Trying the Galaxy S23",
    desc: "This weekend, I went to Best Buy and tried out the demo Samsung Galaxy S23 phones.",
    month: "February",
    m: "2",
    day: "23",
    year: "2023",
    alt: "Galaxy S23 phones.",
    hover: "Galaxy S23 phones",
    tags: "samsung",
    topic: "phones",
  },
  {
    id: "marchiphone15",
    author: "Matthew Nudelman",
    title: "Early Rumors of the iPhone 15",
    label: "iPhone 15 Rumors",
    desc: "Six months before the expected reveal of the iPhone 15 lineup, rumors and speculation have already begun to spread.",
    month: "March",
    m: "3",
    day: "8",
    year: "2023",
    alt: "Yellow iPhone 14.",
    hover: "The new Yellow color option for the iPhone 14.",
    tags: "apple",
    topic: "phones",
  },
  {
    id: "marchwindows2023",
    author: "Matthew Nudelman",
    title: "New Features Coming to Windows 11 This Month",
    label: "New Windows 11 Features",
    desc: "This March, several new features will be available for Windows 11 users.",
    month: "March",
    m: "3",
    day: "21",
    year: "2023",
    alt: "Windows 11.",
    hover: "Windows 11.",
    tags: "software",
    topic: "computers software",
  },
  {
    id: "pixelfoldinfo",
    author: "Matthew Nudelman",
    title: "Google Set to Unveil New Pixel Fold at May 10 Event",
    label: "Pixel Fold Coming Soon",
    desc: "At the annual Google I/O event on May 10, 2023, Google is set to publicly announce a foldable smartphone to call their own.",
    month: "April",
    m: "4",
    day: "20",
    year: "2023",
    alt: "Google Pixel.",
    hover: "Google Pixel.",
    tags: "google",
    topic: "phones",
  },
  {
    id: "ios17sideload",
    author: "Matthew Nudelman",
    title: "iOS 17 May Allow Users to Sideload Apps",
    label: "Sideload Apps in iOS 17",
    desc: "iOS 17, coming to Apple devices later this year, is said to finally allow users to sideload apps on their devices as per a new regulation in the EU. This would allow developers to make their apps available outside of the App Store.",
    month: "April",
    m: "4",
    day: "21",
    year: "2023",
    alt: "iOS 17.",
    hover: "iOS 17.",
    tags: "apple software",
    topic: "phones software",
  },
  {
    id: "ipadultra",
    author: "Matthew Nudelman",
    title: "iPad with Large 16-inch Display Rumored for Release This Year",
    label: "New Larger iPad Rumored",
    desc: "Apple is rumored to be working on a new iPad with a 16-inch display for release in the fourth quarter of 2023.",
    month: "May",
    m: "5",
    day: "1",
    year: "2023",
    alt: "iPad Pro.",
    hover: "iPad Pro.",
    tags: "apple",
    topic: "tablets",
  },
  {
    id: "googleio2023",
    author: "Matthew Nudelman",
    title: "Google Announces Several New Devices at This Year's Google I/O",
    label: "Google I/O 2023",
    desc: "At this year's Google I/O conference, Google had several announcements to make about new Pixel devices set to be releasing this year.",
    month: "May",
    m: "5",
    day: "12",
    year: "2023",
    alt: "Google Pixel Fold.",
    hover: "Google Pixel Fold.",
    tags: "google",
    topic: "phones tablets",
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

function homeTopic(n, type) {
  let homeLink = document.createElement("a");
  homeLink.href =
    "/" + big[n].year + "/" + big[n].m + "/" + big[n].id + ".html";
  document.getElementById(type).appendChild(homeLink);

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
  //homeText.innerText = type;
  homeDiv.appendChild(homeText);
}

function findHomeBoxes(type) {
  var count = 0;
  for (let h = big.length; h > 0; h--) {
    if (big[h].topic == type && count < 4) {
      homeTopic(h, type);
      count++;
      break;
    }
  }
}

function homeGrid(type) {
  findHomeBoxes(type);
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
    var thisTopics = big[n].topic.split(" ");
    for (let t = 0; t < thisTopics.length; t++) {
      if (thisTopics[t] + ".html" == folder) {
        articleBox(n);
      }
    }
  }
}

function oldTopicList() {
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
6 : samsungwinter2023rumors.html
7 : samsungwinter2023.html
8 : s23demo.html
9 : marchiphone15.html
10 : marchwindows2023.html
11 : pixelfoldinfo.html 
12 : ios17sideload.html
13 : ipadultra.html
14 : googleio2023.html


*/
