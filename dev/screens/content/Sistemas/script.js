const questions = ['', '1010', '49', '53'];
function analyseQuestion(number) {
  const quest = window.document.getElementById(`q${number}`);
  const text = window.document.getElementById(`textq${number}`);
  let string = '';
  if (quest.value === questions[number]) {
    toggleCerto(quest);
    string = 'Bom trabalho! Você acertou!';
  } else {
    toggleErrado(quest);
    string = 'Você errou, tente novamente!';
  }
  text.innerText = string;
  text.style.display = 'flex';
  text.style.fontWeight = 'bold';
}
function toggleCerto(e) {
  e.style.backgroundColor = 'rgb(224, 255, 175)';
}

function toggleErrado(e) {
  e.style.backgroundColor = 'rgb(236, 182, 182)';
}

function myFunction() {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.getElementById('myBar').style.width = `${scrolled}%`;
}
window.onscroll = function () { myFunction(); };
