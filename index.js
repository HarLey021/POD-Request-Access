const email = document.getElementById("email-input");
const submit = document.getElementById("request-btn");
const submitionResult = document.getElementById("submition-result");
const success = document.querySelector(".submition-success");
const fail = document.querySelector(".submition-fail");
const blank = document.querySelector(".blank-submition");

let mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function testMail() {
  if (mailRegex.test(email.value)) {
    success.style.display = "block";
    blank.style.display = "none";
    fail.style.display = "none";
  } else if (email.value === "") {
    success.style.display = "none";
    blank.style.display = "block";
    fail.style.display = "none";
  } else if (!mailRegex.test(email.value)) {
    success.style.display = "none";
    blank.style.display = "none";
    fail.style.display = "block";
  }
}

submit.addEventListener("click", testMail);

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    testMail();
  }
});
