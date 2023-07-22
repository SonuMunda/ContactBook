// Contacts Array declared
let contacts = [];
let contactForm = document.getElementById("contact-form");
const contactInfo = document.querySelector(".contact-info");
const addBtn = document.querySelector(".add-btn");

// Event listener for the Add Contact button
addBtn.addEventListener("click", function () {
  // Toggle the visibility of the contact form when the button is clicked
  if (contactForm.style.width === "0px") {
    contactForm.style.width = "375px";
  } else {
    contactForm.style.width = "0px";
  }
  searchWrapper.style.height = "0%";
});

// Event listener for the Add Contact form submission
const addContactBtn = document
  .querySelector("#add-contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let FnameValue = document.querySelector("#fname").value;
    let LnameValue = document.querySelector("#lname").value;
    let FullNameValue = `${FnameValue} ${LnameValue}`;
    let PhoneValue = document.querySelector("#phone").value;
    let EmailValue = document.querySelector("#email").value;
    let ContactTypeValue = document.querySelector("#contact-label").value;

    // Check if any required fields are empty
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
      ContactTypeValue !== ""
    ) {
      // Add the contact to the contacts array and display data and list
      contacts.push(contact);
      displayData();
      displayList();

      // Reset the form fields to blank
      document.querySelector("#fname").value = "";
      document.querySelector("#lname").value = "";
      document.querySelector("#phone").value = "";
      document.querySelector("#email").value = "";
      document.querySelector("#contact-label").value = "";
    } else {
      alert("Fill All the Fields");
    }
  });

// Function to display the contact list
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

    // Function to display detailed contact info when a list item is clicked
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

      const closeContactInfo = `
        <div class="close-contact-info">
            <i class="fa-solid fa-arrow-left"></i>
        </div>
  `;
      contactInfo.innerHTML = `
      ${closeContactInfo}
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
      contactInfo.style.width = "375px";
      // Event listener to close the detailed contact info
      document
        .querySelector(".close-contact-info")
        .addEventListener("click", function () {
          contactInfo.style.width = "0px";
        });
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

//EventListner For Search
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
        const closeContactInfo = `
        <div class="close-searched-contact-info">
            <i class="fa-solid fa-arrow-left"></i>
        </div>
  `;
        searchedContactInfo.innerHTML = `
        ${closeContactInfo}
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
        searchedContactInfo.style.width = "375px";
        document
          .querySelector(".close-searched-contact-info")
          .addEventListener("click", function () {
            searchedContactInfo.style.width = "0%";
          });
      });
    }
  }
});
// Function to display data (contacts) - For debugging purposes
function displayData() {
  console.log(contacts);
}
