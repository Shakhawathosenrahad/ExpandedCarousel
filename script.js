// working with crossjoin section

const extands_card = document.querySelectorAll(".crossjoin .column .fa-solid");
const button_texts = ["Chile", "Impossible Labs", "Back 2 Bio", "Crossjoin Website"];

extands_card.forEach((right, index) => {
  right.onclick = () => {
    document.querySelectorAll(".crossjoin .column").forEach(column => {
      innerWidth > 740 ? column.style.flexBasis = "110px" : column.style.height = "30px";
    })

    innerWidth > 740 ? right.parentElement.style.setProperty("flex-basis", "calc(100% - (110px * 3))") : right.parentElement.style.setProperty("height", "300px");

    setTimeout(() => {
      document.querySelector(".extands").classList.remove("extands");
      right.parentElement.classList.add("extands");
    }, 200);

    right.previousElementSibling.lastElementChild.tagName == "BUTTON" || (() => {
      let button = document.createElement("button");
      button.innerHTML = button_texts[index];
      right.previousElementSibling.appendChild(button);
    })();
  }
})

extands_card[3].click();