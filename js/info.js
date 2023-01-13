// on click : run function (parameter for which cite note) to change background color of text

const dates = [30, 3, 10, 2]; // using

const dates2 = [
  // not using
  { month: "November", day: 30 },
  { month: "December", day: 3 },
  { month: "December", day: 10 },
];

const tags = [
  { id: "apple", amt: "3", text: "Apple" },
  { id: "software", amt: "1", text: "Software" },
  { id: "google", amt: "1", text: "Google" },
];

const months = [
  { y: "2022", m: "11", amt: "1", text: "November" },
  { y: "2022", m: "12", amt: "2", text: "December" },
  { y: "2023", m: "1", amt: "1", text: "January" },
];

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
];

/**<div class="directory">
            <h4>Tags on this</h4>
            <br />
            <ul>
              <a href="/tags/apple/"><li>Apple</li></a>
              <a href="/tags/software/"><li>Software</li></a>
            </ul>
          </div> */

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


*/
