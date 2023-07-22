let contacts = [];
let contactForm = document.getElementById("contact-form");
const contactInfo = document.querySelector(".contact-info");

const addBtn = document.querySelector(".add-btn");
addBtn.addEventListener("click", function () {
  if (contactForm.style.width === "0px") {
    contactForm.style.width = "375px";
  } else {
    contactForm.style.width = "0px";
  }
});

const addContactBtn = document
  .querySelector("#add-contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const FnameValue = document.querySelector("#fname").value;
    const LnameValue = document.querySelector("#lname").value;
    const FullNameValue = `${FnameValue} ${LnameValue}`;
    const PhoneValue = document.querySelector("#phone").value;
    const EmailValue = document.querySelector("#email").value;
    const ContactTypeValue = document.querySelector("#contact-label").value;

    const contact = {
      fname: FnameValue,
      lname: LnameValue,
      fullName: FullNameValue,
      phone: PhoneValue,
      email: EmailValue,
      contactType: ContactTypeValue,
    };

    if (
      FnameValue ||
      LnameValue ||
      PhoneValue ||
      EmailValue ||
      ContactTypeValue != ""
    ) {
      contacts.push(contact);
      displayData();
      displayList();
    } else {
      alert("Fill All the Fields");
    }
  });

function displayList() {
  const contactsList = document.querySelector("#contact-list");
  contactsList.innerHTML = ""; // Clear the list before adding new items

  for (let i = 0; i < contacts.length; i++) {
    //avtar
    const avtar = contacts[i].fname.charAt(0) + contacts[i].lname.charAt(0);

    const listItem = document.createElement("li");
    listItem.className = "list-item";
    listItem.innerHTML = `
    <div class="contact-dp">${avtar}</div>
    <div class="contact-details">
        <h4>${contacts[i].fullName}</h4>
        <p>${contacts[i].phone}</p>
    </div>
    `;
    function showContactInfo() {
      //icon for Contact Type Logic
      let contactTypeicon = "";
      switch (contacts[i].contactType) {
        case "Home":
          contactTypeicon = `<i class="fa-solid fa-house-chimney"></i>`;
          break;
        case "Office":
          contactTypeicon = `<i class="fa-solid fa-building"></i>`;
          break;
        default:
          contactTypeicon = `<i class="fa-solid fa-question"></i>`;
          break;
      }
      contactInfo.innerHTML = `
        <div class="contact-dp-name center">
        <div class="contact-dp">${avtar}</div>
        <h2>${contacts[i].fullName}</h2>
      </div>
      <div class="contact-all-details">
        <div class="contact-phone">
          <i class="fa-solid fa-phone"></i>
          <p>${contacts[i].phone}</p>
        </div>
        <div class="contact-email">
          <i class="fa-solid fa-envelope"></i>
          <p>${contacts[i].email}</p>
        </div>
        <div class="contact-type">
        ${contactTypeicon}
        <p>${contacts[i].contactType}</p>
      </div>
      </div>
        `;
      contactInfo.style.width = "50%";
    }

    listItem.addEventListener("click", showContactInfo);

    contactsList.appendChild(listItem);
  }
}

const searchControl = document.querySelector("#search-input");
const searchWrapper = document.querySelector(".search-contact-wrapper");
const searchContactsList = document.querySelector(".search-contacts-list");

searchControl.addEventListener("click", function () {
  searchWrapper.style.height = "100%";
});

document.querySelector(".close-search").addEventListener("click", function () {
  searchWrapper.style.height = "0%";
});

document.querySelector(".search-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const searchValue = searchControl.value;

  // Clear the previous search results
  while (searchContactsList.firstChild) {
    searchContactsList.removeChild(searchContactsList.firstChild);
  }
  const searchedContactInfo = document.querySelector(".search-contact-info");

  for (let i = 0; i < contacts.length; i++) {
    if (searchValue == contacts[i].fname) {
      const avtar = contacts[i].fname.charAt(0) + contacts[i].lname.charAt(0);
      const searchListItem = document.createElement("li");
      searchListItem.className = "list-item";
      searchListItem.innerHTML = `
      <div class="contact-dp">${avtar}</div>
        <div class="contact-details">
            <h4>${contacts[i].fname} ${contacts[i].lname}</h4>
            <p>${contacts[i].phone}</p>
        </div>
      `;
      searchContactsList.appendChild(searchListItem);

      searchListItem.addEventListener("click", function () {
        //icon for Contact Type Logic
        let contactTypeicon = "";
        switch (contacts[i].contactType) {
          case "Home":
            contactTypeicon = `<i class="fa-solid fa-house-chimney"></i>`;
            break;
          case "Office":
            contactTypeicon = `<i class="fa-solid fa-building"></i>`;
            break;
          default:
            contactTypeicon = `<i class="fa-solid fa-question"></i>`;
            break;
        }
        searchedContactInfo.innerHTML = `
    <div class="contact-dp-name center">
    <div class="contact-dp">${avtar}</div>
    <h2>${contacts[i].fullName}</h2>
  </div>
  <div class="contact-all-details">
    <div class="contact-phone">
      <i class="fa-solid fa-phone"></i>
      <p>${contacts[i].phone}</p>
    </div>
    <div class="contact-email">
      <i class="fa-solid fa-envelope"></i>
      <p>${contacts[i].email}</p>
    </div>
    <div class="contact-type">
    ${contactTypeicon}
    <p>${contacts[i].contactType}</p>
  </div>
  </div>
    `;
        searchedContactInfo.style.width = "50%";
      });
    }
  }
});

function displayData() {
  console.log(contacts);
}
