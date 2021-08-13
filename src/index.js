let stateData = {
  expedition: [],
  filters: {
    type: "",
    price: null,
    number: null
  }
};

function fetchListSection() {
  const url = "http://localhost:3000/expeditions";
  fetch(url)
    .then((res) => res.json())
    .then((expeditions) => {
      console.log("Inside GET Fetch Data: ", expeditions);
      stateData = {
        ...stateData,
        expedition: expeditions
      };
      renderHeaderSection(expeditions);
      renderListOfExpedition(expeditions);
    });
}
fetchListSection();

const bodyEl = document.querySelector("body");
console.log("Inside body: ", bodyEl);

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
    listItemEL.className = "header-list";
    listEl.append(listItemEL);
    const linkEl = document.createElement("a");
    linkEl.href = "./index.html";
    linkEl.innerText = head.location;
    listItemEL.append(linkEl);
  }
}

function renderLeftAside() {
  const leftAsideEl = document.querySelector(".left-aside")

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
renderLeftAside();

function renderListOfExpedition(planets) {
  const mainEl = document.querySelector(".center-section");
  // console.log("Inside main: ", mainContainerEl)

  const listEl = document.createElement("ul");
  // listEl.className = "responsive-grid"
  mainEl.append(listEl);
  for (let i = 0; i < planets.length; i++) {
    const planet = planets[i];
    const listItemEl = document.createElement("li");
    listItemEl.className = "list-space"

    listEl.append(listItemEl);

    const imageSrc = planet.src;

    const listImageEl = document.createElement("img");
    listImageEl.setAttribute("width", "100%");
    listImageEl.setAttribute("height", "400");
    listImageEl.setAttribute("src", "https://i.ytimg.com/vi/yUbQnHvXYEI/maxresdefault.jpg");
    listItemEl.append(listImageEl);

    const listItemContainerEl = document.createElement("div");
    listItemContainerEl.className = "three-column-grid";
    listItemEl.append(listItemContainerEl);

    const listTitleEl = document.createElement("h3");
    listTitleEl.innerText = planet.location + " Expedition";
    listItemContainerEl.append(listTitleEl);

    const listParagraphEl = document.createElement("p");
    listParagraphEl.innerText = `Price: ${planet.price}`;
    listItemContainerEl.append(listParagraphEl);

    const listButtonEl = document.createElement("button");
    listButtonEl.innerText = "Book Now";
    listButtonEl.setAttribute("width", "40");
    listButtonEl.setAttribute("height", "40");

    // Add event listener
    listButtonEl.addEventListener("click", (event) => {
      event.preventDefault()
      renderForm();

    })

    listItemContainerEl.append(listButtonEl);
  }
}

function renderForm(){
  const mainContainerEl = document.querySelector(".right-aside");

  const formEl =  document.createElement("form");
  const labelEl = document.createElement("label");
  labelEl.innerText = "Pick A Date & Time";
  const inputEl = document.createElement("input");
  inputEl.type = "datetime-local";
  inputEl.id = "meeting-time";
  inputEl.min = "2021-08-07T00:00";
  inputEl.max = "2021-12-14T00:00";

const buttonEl = document.createElement("button");
buttonEl.innerText = "Submit";
buttonEl.type = "Submit";
buttonEl.className = "favorite styled";

const selectLabelEl = document.createElement("label")
selectLabelEl.for = "number-of-travelers";

const selectEl = document.createElement("select")
selectEl.name =  "number-of-travelers";
selectEl.id =  "number-of-travelers";


// Button Event Listener
  formEl.addEventListener("submit", (event) => {
    event.preventDefault()
    const numberOfTicketsValue = selectEl.value;
    const dateTimeValue = inputEl.value;

  //  const eId = stateData.expedition

    const bookingToCreate = {
      expeditionId: stateData.expedition.id,
      dateTime: dateTimeValue,
      numberOfTickets: numberOfTicketsValue
    };

    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bookingToCreate)
    };
const url = "http://localhost:3000/bookings"
    fetch(url, fetchOptions)
      .then((res) => res.json())
      .then((bookings) => {
        console.log("Inside POST Fetch: ", bookings);
        stateData = {
          ...stateData,
          booking: bookings
        };
        renderCart(bookings);
      });
  })

  const defaultOptionEl = document.createElement("option");
  defaultOptionEl.value = "";
  defaultOptionEl.innerText = "Select how many tickets you need";
  selectEl.append(defaultOptionEl);

  const optionEl1 = document.createElement("option");
  optionEl1.value = "1";
  optionEl1.innerText = 1;

  const optionEl2 = document.createElement("option");
  optionEl2.value = "2";
  optionEl2.innerText = 2;

  const optionEl3 = document.createElement("option");
  optionEl3.value = "3";
  optionEl3.innerText = 3;

  const optionEl4 = document.createElement("option");
  optionEl4.value = "4";
  optionEl4.innerText = 4;

  selectEl.append(optionEl1, optionEl2, optionEl3, optionEl4)

formEl.append(labelEl, inputEl, selectLabelEl, selectEl, buttonEl);
mainContainerEl.append(formEl);
}


function renderCart() { 
const mainContainerEl = document.querySelector(".right-aside");
console.log("Inside renderCart: ", stateData.expedition);
  console.log("Inside renderCart Two: ", stateData.booking);

const cartContainerEl = document.createElement("div")
cartContainerEl.id = "cart"
cartContainerEl.className = "cart-styling"
  mainContainerEl.append(cartContainerEl);

const cartContainerTitleEl = document.createElement("h2")
cartContainerTitleEl.innerText = "My Items"


const price = stateData.expedition.price;
const dateTime = stateData.booking.dateTime;
const tickets = stateData.booking.numberOfTickets;
console.log(tickets);

const priceEl =  document.createElement("p");
priceEl.innerText = `Price per ticket: ${price}`
cartContainerEl.append(priceEl);

const dateEl = document.createElement("p");
dateEl.innerText = `Date/Time: ${dateTime}`
cartContainerEl.append(dateEl);

const finalPriceEl = document.createElement("p");
finalPriceEl.innerText = `Final price: ${tickets}`;
cartContainerEl.append(finalPriceEl);

const buttonChangeEl = document.createElement("button");
buttonChangeEl.innerText = "Change Booking";

const buttonDeleteEl = document.createElement("button");
buttonDeleteEl.innerText = "Delete Booking";

cartContainerEl.append(buttonChangeEl , buttonDeleteEl);

// Change date / Time. (Patch)
// Cancel purchase(delete)
}
