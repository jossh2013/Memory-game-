const board = document.getElementById("gameBoard");

const values = ["A","A","B","B","C","C","D","D","E","E","F","F"];
values.sort(() => 0.5 - Math.random());

let firstCard = null;
let secondCard = null;
let lock = false;

values.forEach(val => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.dataset.value = val;
  card.innerText = "";

  card.addEventListener("click", () => {
    if (lock || card.classList.contains("flipped")) return;

    card.classList.add("flipped");
    card.innerText = val;

    if (!firstCard) {
      firstCard = card;
    } else {
      secondCard = card;
      lock = true;

      if (firstCard.dataset.value === secondCard.dataset.value) {
        firstCard = null;
        secondCard = null;
        lock = false;
      } else {
        setTimeout(() => {
          firstCard.classList.remove("flipped");
          secondCard.classList.remove("flipped");
          firstCard.innerText = "";
          secondCard.innerText = "";
          firstCard = null;
          secondCard = null;
          lock = false;
        }, 800);
      }
    }
  });

  board.appendChild(card);
});
