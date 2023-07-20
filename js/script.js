let contacts = [];
let contactForm = document.getElementById("contact-form");

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
      fullName:FullNameValue,
      phone: PhoneValue,
      email: EmailValue,
      contactType: ContactTypeValue,
    };

    contacts.push(contact);
    displayData();
    displayList();
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
    listItem.addEventListener('click',function(){
        const contactInfo = document.querySelector(".contact-info");
        if(contactInfo.style.width === "50%"){
            contactInfo.style.width = "0%";
        }
        else{
            contactInfo.style.width = "50%";
        }


    })
    contactsList.appendChild(listItem);
  }
}

function displayData() {
  console.log(contacts);
}
