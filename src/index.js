let stateData = {
  expedition: [],
  imageOfTheDay: {},
  filters: {
    type: "",
    price: null
  }
};

function fetchListSection() {
  const url = "http://localhost:3000/expeditions";
  fetch(url)
    .then((res) => res.json())
    .then((expeditions) => {
      console.log("Inside GET Fetch Data: ", expeditions);
      // stateData = {
      //   ...stateData,
      //   expedition: data
      // };
      renderHeaderSection(expeditions);
    });
} 
fetchListSection();

// function fetchImageOfTheDay() {
//   const url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";
//   fetch(url)
//     .then((res) => res.json())
//     .then((imageData) => {
//       console.log("Inside GET Fetch Image: ", imageData);
//       // stateData = {
//       //   ...stateData,
//       //   imageOfTheDay: imageData
//       // };
//     });
// }
// fetchImageOfTheDay();

function renderHeaderSection(heads) {
  const bodyEl = document.querySelector("body");
  console.log("Body: ", bodyEl);

  const headerEl = document.createElement("header");
  headerEl.className = "main-header grid-auto-columns";
  bodyEl.append(headerEl);


  const headerImageEl = document.createElement("img");
  headerImageEl.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE00lXGflW5rgMyvlGeZT_3CBBJ4_4N8btLQ&usqp=CAU";
  headerEl.append(headerImageEl);

  const headerTitleEl = document.createElement("h2");
  headerTitleEl.className = "title-section";
  headerTitleEl.innerText = "Welcome To LanEm Space Program";
  headerEl.append(headerTitleEl);

  const navEl = document.createElement("nav");
  headerEl.append(navEl);

  const listElTitle = document.createElement("h3");
  listElTitle.innerText = "Where Do You Want To Visit?";
  navEl.append(listElTitle);

  const listEl = document.createElement("ul");
  listEl.className = "grid-auto-columns text-align";
  navEl.append(listEl);

  for (let i = 0; i < heads.length; i++) {
    const head = heads[i];
    const listItemEL = document.createElement("li");
    listEl.append(listItemEL);
    const linkEl = document.createElement("a");
    linkEl.href = "./index.html";
    linkEl.innerText = head.location;
    listItemEL.append(linkEl);
  }
}


function renderLeftAsideImage() {}
renderLeftAsideImage();

function renderListOfExpedition() {}
renderListOfExpedition();
