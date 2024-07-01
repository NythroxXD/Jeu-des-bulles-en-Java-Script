const counterDisplay = document.querySelector("h3");
let counter = 0;

const bubbleMaker = () => {
  const bubble = document.createElement("span");
  bubble.classList.add("bubble");
  document.body.appendChild(bubble);

  const size = Math.random() * 100 + 100 + "px";
  bubble.style.height = size;
  bubble.style.width = size;

  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";

  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  //Si Math.random() est supérieur à 0.5 si oui tu renvoie 1 si non tu renvoie -1

  bubble.style.setProperty("--left", plusMinus * 100 + "%");

  setTimeout(() => {
    bubble.remove();
  }, 15000);

  bubble.addEventListener("click", () => {
    bubble.remove();
    //counter += 1;
    counter++;
    //counterDisplay.innerHTML = `
    //  <h3>${counter}</h3>
    //  `;
    counterDisplay.textContent = counter;
  });
};

let interval = setInterval(() => {
  bubbleMaker();
}, 1000);
