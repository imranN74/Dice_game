let arr = [1, 2, 3, 4, 5, 6];

let midOne = document.getElementsByClassName("midOne");
// console.log(midOne[0]);
// console.log(midOne[1]);
let one = document.getElementsByClassName("one");
let two = document.getElementsByClassName("two");
let three = document.getElementsByClassName("three");
let four = document.getElementsByClassName("four");
let five = document.getElementsByClassName("five");
let six = document.getElementsByClassName("six");
let btnId = document.getElementById("diceBtn");
let winnerSection = document.getElementById("winner");

function hideAllCount(i) {
  one[i].classList.add("hidCount");
  two[i].classList.add("hidCount");
  three[i].classList.add("hidCount");
  four[i].classList.add("hidCount");
  five[i].classList.add("hidCount");
  six[i].classList.add("hidCount");
  midOne[i].classList.add("hidCount");
}

function removeShowCount(i) {
  one[i].classList.remove("showCount");
  two[i].classList.remove("showCount");
  three[i].classList.remove("showCount");
  four[i].classList.remove("showCount");
  five[i].classList.remove("showCount");
  six[i].classList.remove("showCount");
  midOne[i].classList.remove("showCount");
}

function oneCount(i) {
  hideAllCount(i);
  removeShowCount(i);
  midOne[i].classList.add("showCount");
}

function twoCount(i) {
  hideAllCount(i);
  removeShowCount(i);
  three[i].classList.add("showCount");
  four[i].classList.add("showCount");
}

function threeCount(i) {
  hideAllCount(i);
  removeShowCount(i);
  two[i].classList.add("showCount");
  five[i].classList.add("showCount");
  midOne[i].classList.add("showCount");
}

function fourCount(i) {
  hideAllCount(i);
  removeShowCount(i);
  one[i].classList.add("showCount");
  two[i].classList.add("showCount");
  five[i].classList.add("showCount");
  six[i].classList.add("showCount");
}

function fiveCount(i) {
  hideAllCount(i);
  removeShowCount(i);
  one[i].classList.add("showCount");
  two[i].classList.add("showCount");
  five[i].classList.add("showCount");
  six[i].classList.add("showCount");
  midOne[i].classList.add("showCount");
}

function sixCount(i) {
  hideAllCount(i);
  removeShowCount(i);
  one[i].classList.add("showCount");
  two[i].classList.add("showCount");
  five[i].classList.add("showCount");
  six[i].classList.add("showCount");
  four[i].classList.add("showCount");
  three[i].classList.add("showCount");
}

function winnerPart(winner) {
  let winnerText = document.getElementById("win");
  if (winner == "1" || winner == "2") {
    winnerText.textContent = `Player ${winner} Won`;
  } else {
    winnerText.textContent = `Match Draw`;
  }
}

function players(i, playerscore) {
  let randomNum = Math.random() * (6 - 1 + 1) + 1;
  let diceCount = Math.floor(randomNum);
  playerscore.push(diceCount);

  if (playerscore.length == 2) {
    if (playerscore[0] > playerscore[1]) {
      winnerPart("2");
    } else if (playerscore[0] < playerscore[1]) {
      winnerPart("1");
    } else {
      winnerPart(0);
    }
  }

  switch (diceCount) {
    case 1:
      oneCount(i);
      break;
    case 2:
      twoCount(i);
      break;
    case 3:
      threeCount(i);
      break;
    case 4:
      fourCount(i);
      break;
    case 5:
      fiveCount(i);
      break;
    case 6:
      sixCount(i);
      break;
  }
}

btnId.addEventListener("click", () => {
  btnId.style.backgroundColor = "white";
  btnId.style.backgroundColor = "";
  let playerscore = [];
  for (let i = 0; i < 2; i++) {
    players(i, playerscore);
  }
});
