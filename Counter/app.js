//set initial count
let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");

// ----Styling in Js
// H1 tag--
h2.innerHTML = "! Your Counter !";
h2.style.fontSize = "3rem";

// H1 tag--
value.style.fontSize = "4rem";
value.style.fontWeight = "700";

// decrease button --
decrease.innerHTML = "Decrease";

// increase button --
increase.innerHTML = "Increase";

// decrease button --
reset.innerHTML = "Reset";

value.style.color = "#1da1f2";

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    //   const style the style property

    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      h1.innerHTML = "! Counting Decreases !";
      h1.style.fontSize = "1.4rem";
      count--;
    } else if (styles.contains("reset")) {
      h1.innerHTML = "! Start Counting Again !";
      h1.style.fontSize = "1.5rem";
      count = 0;
    } else if (styles.contains("increase")) {
      h1.innerHTML = "! Counting Increases !";
      h1.style.fontSize = "1.4rem";
      count++;
    }
    if (count > 0) {
      value.style.color = "green";
      btn.style.color = "green";
    }
    if (count == 0) {
      value.style.color = "#1da1f2";
      btn.style.color = "#1da1f2";
    }
    if (count < 0) {
      value.style.color = "red";
      btn.style.color = "red";
    }

    value.textContent = count;
  });
});

// btns.style.color = "black";
