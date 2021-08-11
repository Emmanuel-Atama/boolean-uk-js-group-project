let stateData = {
  expedition: [],
  imageOfTheDay: {},
  filters: {
    type: "",
    price: null
  }
};

function fetchListSection() {
  const url = "/db/db.json";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log("Inside GET Fetch: ", data);
      stateData = {
        ...stateData,
        expedition: data
      };
      renderHeaderSection(data);
    });
}
fetchListSection();

function fetchImageOfTheDay() {
  const url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";
  fetch(url)
    .then((res) => res.json())
    .then((imageData) => {
      // console.log("Inside GET Fetch: ", imageData);
      stateData = {
        ...stateData,
        imageOfTheDay: imageData
      };
    });
}
fetchImageOfTheDay();

function renderHeaderSection(heads) {
  const bodyEl = document.querySelector("body");
  console.log("Body: ", bodyEl);

  const headerEl = document.createElement("header");
  headerEl.className = "main-header two-column-grid__expand-right";
  bodyEl.append(headerEl);

  const headerContainerEl = document.createElement("div");
  headerContainerEl.className = "two-column-grid";
  headerEl.append(headerContainerEl);

  const headerImageEl = document.createElement("img");
  headerImageEl.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE00lXGflW5rgMyvlGeZT_3CBBJ4_4N8btLQ&usqp=CAU";
  headerContainerEl.append(headerImageEl);

  const headerTitleEl = document.createElement("h2");
  headerTitleEl.className = "title-section";
  headerTitleEl.innerText = "Welcome To LanEm Space Program";
  headerContainerEl.append(headerTitleEl);

  const navEl = document.createElement("nav");
  headerEl.append(navEl);

  const listEl = document.createElement("ul");
  listEl.className = "grid-auto-columns";
  navEl.append(listEl);
  const strongEl = document.createElement("strong");
  strongEl.innerText = "Where Do You Want To Visit";
  listEl.append(strongEl);

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
