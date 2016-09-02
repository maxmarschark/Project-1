function startGame() {
  const newApp = new App();
  newApp.render();
}

function goFish() {
  const newClicker = new App();
  newClicker.render();
}

window.onload = function() {
  document.querySelector('.booton').addEventListener('click', startGame);
}

window.onload = function() {
  document.querySelector('.clicker').addEventListener('click', goFish);
}

  //DEAL button function
  const btn = document.createElement('button');
  const t = document.createTextNode('DEAL');
  btn.setAttribute('class', 'booton');
  btn.appendChild(t);
  document.body.appendChild(btn);

  //GO FISH button function
  const btn2 = document.createElement('button');
  const b = document.createTextNode('Go Fish');
  btn2.setAttribute('class', 'clicker');
  btn2.appendChild(b);
  document.body.appendChild(btn2);
