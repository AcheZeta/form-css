// Import stylesheets
import "./style.scss";

let name = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
const container = document.getElementById("container");

// Write Javascript code!

//Button Fuction
const getUser = () => {
  if (!name.value || !email.value || !phone.value) {
    alert("Fill all blanks");
  } else {
    container.innerHTML = `
      <h1>
        Hi ${name.value}✨!
      </h1>
      <ul>✉️ : <br> ${email.value} </ul>
      <ul>☎️: <br>${phone.value} </ul>
      
      <div class="shadow-btn btn">
			  <button
          id="sendbtn"
          type="button"
          class="send btn"
          onClick="history.go()
        ">
          Back
        </button>
      `;
  }
};

document.getElementById("sendbtn").addEventListener("click", getUser);

document.getElementById("phone").addEventListener("keyup", function(e) {
  if (e.keyCode === 13) {
    getUser();
  }
});
