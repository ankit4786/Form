let user_record = (function () {
  let record = localStorage.getItem("user_record");
  if (record === null) {
    localStorage.setItem("user_record", "[]");
    return [];
  }
  return JSON.parse(record);
})();
const form = document.querySelector("#data-form");
const submit = document.querySelector("#sbmt");
const show_btn = document.querySelector("#showbtn");
const show_data = document.querySelector(".show");
const hideDetailsBtn = document.querySelector("#hidebtn");
const clearBtn = document.querySelector("#clearbtn");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const formdata = new FormData(form);
  const values = [...formdata.entries()];
  console.log(values);
  const val = Object.fromEntries(values);
  user_record.push(val);
  console.log(user_record);

  localStorage.setItem("user_record", JSON.stringify(user_record));
});

show_btn.addEventListener("click", () => {
  displaydata();
});

function displaydata() {
  console.log("daf");
  let users = JSON.parse(localStorage.getItem("user_record"));

  if (users === null || users.length === 0) {
    alert("No Users in Database!");
  } else {
    console.log("Number of users = " + users.length);

    show_data.innerHTML = '<h3 id="data-title">USER DETAILS</h3>';
    show_data.classList.remove("hide");
    console.log(users);
    users.forEach((user, idx) => {
      show_data.innerHTML += `<p class="user">USER ${idx + 1}</p>`;

      for (const field in user) {
        show_data.innerHTML += `<p class="entry"><span class="entry-title">${field.toUpperCase()} :</span> ${
          user[field]
        }</p>`;
      }
    });
  }
}

hideDetailsBtn.addEventListener("click", () => {
  show_data.classList.add("hide");
});

clearBtn.addEventListener("click", () => {
  localStorage.clear();
  location.reload();
});

let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let ferror = document.getElementById("firstnameerror");
let lerror = document.getElementById("lastnameerror");
const ename = document.getElementById("ename");
const eerror = document.getElementById("emailerror");
const mname = document.getElementById("mname");
const merror = document.getElementById("mobileerror");

fname.onblur = function () {
  if (fname.value == "") {
    ferror.innerHTML = "Please enter the first name";
  }
};
fname.onfocus = function () {
  ferror.innerHTML = " ";
};
lname.onblur = function () {
  if (lname.value == "") {
    lerror.innerHTML = "Please enter the last name";
  }
};
lname.onfocus = function () {
  lerror.innerHTML = " ";
};

// ename.onblur = function () {
//   if (!ename.value.includes("@")) {
//     // not email
//     // input.classList.add("invalid");
//     eerror.innerHTML = "Please enter a correct email.";
//   }
// };

// ename.onfocus = function () {
//   // if (this.classList.contains("invalid")) {
//   // remove the "error" indication, because the user wants to re-enter something
//   // this.classList.remove("invalid");
//   eerror.innerHTML = "";
//   //  }
// };
// mname.onblur = function () {
//   if (mname.value == "") {
//     merror.innerHTML = "Please enter the Mobile name";
//   }
// };
// mname.onfocus = function () {
//   merror.innerHTML = " ";
// };

// Validates Email
function isValidEmail(email) {
  return /^[a-zA-Z]+[a-zA-Z0-9\.\-]*@[a-zA-Z]+(\.[a-z]{2,3})$/.test(email);
}

ename.addEventListener("blur", () => {
  const enteredEmail = ename.value;

  if (!isValidEmail(enteredEmail)) {
    eerror.innerHTML = "Please enter a correct email.";
  } else {
    eerror.innerHTML = "";
  }
});

// Validates Phone Number
function isValidPhoneNumber(num) {
  return /^\d{10}$/.test(num);
}

mname.addEventListener("blur", () => {
  const enteredPhoneNumber = mname.value;

  if (!isValidPhoneNumber(enteredPhoneNumber)) {
    merror.innerHTML = "Please enter the Mobile name";
  } else {
    merror.innerHTML = " ";
  }
});
