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

const bodyEl = document.querySelector("body")
console.log("Inside body: ", bodyEl)

function renderHeaderSection(heads) {
  const headerEl = document.querySelector(".main-header");
  // console.log("Inside header: ", headerEl)

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

function renderLeftAside () {
  const mainEl = document.querySelector(".main-section")

  const leftAsideEl = document.createElement("aside")
  leftAsideEl.className = "left-aside"
  mainEl.append(leftAsideEl)

  const h2El = document.createElement("h2");
  h2El.innerText = "Filter By";
  leftAsideEl.append(h2El);

  const filterFormEl = document.createElement("form");
  filterFormEl.id = "filter-by-type-form";
  filterFormEl.autocomplete = "off";
  leftAsideEl.append(filterFormEl);

  const filterLabelEl = document.createElement("label");
  filterLabelEl.for = "filter-by-type";
  filterFormEl.append(filterLabelEl);

  const filterh3El = document.createElement("h3");
  filterh3El.innerText = "Type of Planet & Price";
  filterLabelEl.append(filterh3El);

  const filterSelectEl = document.createElement("select");
  filterSelectEl.name = "filter-by-type";
  filterSelectEl.id = "filter-by-type";
  filterFormEl.append(filterSelectEl);

  const optionEl1 = document.createElement("option");
  optionEl1.value = "";
  optionEl1.innerText = "Select a type...";
  filterSelectEl.append(optionEl1);

  const optionEl2 = document.createElement("option");
  optionEl2.value = "type";
  optionEl2.innerText = "Type";
  filterSelectEl.append(optionEl2);

  const optionEl3 = document.createElement("option");
  optionEl3.value = "price";
  optionEl3.innerText = "Price";
  filterSelectEl.append(optionEl3);

}
renderLeftAside()

function renderListOfExpedition() {
  const mainEl = document.querySelector(".main-section")
  // console.log("Inside main: ", mainEl)

const containerEl = document.createElement("div")
  containerEl.className = "main-section"
  mainEl.append(containerEl)
   
const listEl = document.createElement("ul")
listEl.className = "responsive-grid"
 containerEl.append(listEl)

 const listItemEl = document.createElement("li")
 listEl.append(listItemEl)

 const listImageEl = document.createElement("img")
 listEl.append(listImageEl)

 const listTitleEl = document.createElement("h3")
 listTitleEl.innerText = location
 listEl.append(listTitleEl)


}
renderListOfExpedition();


function renderRightAside () {
  const mainEl = document.querySelector(".main-section")

  const rightAsideEl = document.createElement("aside")
  rightAsideEl.className = "right-aside"
  mainEl.append(rightAsideEl)
}
renderRightAside()