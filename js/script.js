//declarando todas variáveis no escopo global
let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;

// contador de jogadas
let player1 = 0;
let player2 = 0;

// adicionando o evento de click aos boxes, esse for detecta os clicks de todos os boxes do html para poder inserir o X ou O
for (let i = 0; i < boxes.length; i++) {

  //quando alguém clicar na caixa
  boxes[i].addEventListener("click", function () {
    let el = checkEl(player1, player2);

    //verifica se ja tem x ou o clonando-os do html
    if (this.childNodes.length == 0) {
      let cloneEl = el.cloneNode(true);

      this.appendChild(cloneEl);

      //computar jogada
      if (player1 == player2) {
        player1++;

        if (secondPlayer == "ai-player") {
          //função para executar a jogada contra AI
          computerPlay();

          player2++;
        }
      } else {
        player2++;
      }

      //sempre que termina uma jogada checa a condição de vitoria, se sim inicia-se um novo jogo
      checkWinCondition();
      //console.log("checkWinCondition", checkWinCondition())
    }
  });
}

//evento para saber se sao dois players ou IA
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {

    secondPlayer = this.getAttribute("id");

    //marca o inicio do jogo escondendo os botoes (container da grade #)
    for (let j = 0; j < buttons.length; j++) {
      buttons[j].style.display = "none";
    }

    setTimeout(() => {
      //apos escolhido 2 players ou AI inicia o jogo mostrando os botoes e o container da grade #
      let container = document.querySelector("#container");
      container.classList.remove("hide");
    }, 500);
  });
}

//verifica quem vai jogar
function checkEl(player1, player2) {
  if (player1 == player2) {
    //x
    el = x;
  } else {
    //o
    el = o;
  }

  return el;
}

//verifica quem venceu com checagem de vitoria na horizontal ou diagonal
function checkWinCondition() {
  let b1 = document.getElementById("block-1");
  let b2 = document.getElementById("block-2");
  let b3 = document.getElementById("block-3");
  let b4 = document.getElementById("block-4");
  let b5 = document.getElementById("block-5");
  let b6 = document.getElementById("block-6");
  let b7 = document.getElementById("block-7");
  let b8 = document.getElementById("block-8");
  let b9 = document.getElementById("block-9");

  //checagem de vitoria horizontal linha 1
  if (
    b1.childNodes.length > 0 &&
    b2.childNodes.length > 0 &&
    b3.childNodes.length > 0
  ) {
    let b1Child = b1.childNodes[0].className;
    let b2Child = b2.childNodes[0].className;
    let b3Child = b3.childNodes[0].className;

    if (b1Child == "x" && b2Child == "x" && b3Child == "x") {
      //x venceu
      declareWinner("x");
    } else if (b1Child == "o" && b2Child == "o" && b3Child == "o") {
      //o venceu
      declareWinner("o");
    }
  }

  //checagem de vitoria horizontal linha 2
  if (
    b4.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b6.childNodes.length > 0
  ) {
    let b4Child = b4.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b6Child = b6.childNodes[0].className;

    if (b4Child == "x" && b5Child == "x" && b6Child == "x") {
      //x venceu
      declareWinner("x");
    } else if (b4Child == "o" && b5Child == "o" && b6Child == "o") {
      //o venceu
      declareWinner("o");
    }
  }

  //checagem de vitoria horizontal linha 3
  if (
    b7.childNodes.length > 0 &&
    b8.childNodes.length > 0 &&
    b9.childNodes.length > 0
  ) {
    let b7Child = b7.childNodes[0].className;
    let b8Child = b8.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;

    if (b7Child == "x" && b8Child == "x" && b9Child == "x") {
      //x venceu
      declareWinner("x");
    } else if (b7Child == "o" && b8Child == "o" && b9Child == "o") {
      //o venceu
      declareWinner("o");
    }
  }

  //checagem de vitoria vertical linha 1
  if (
    b1.childNodes.length > 0 &&
    b4.childNodes.length > 0 &&
    b7.childNodes.length > 0
  ) {
    let b1Child = b1.childNodes[0].className;
    let b4Child = b4.childNodes[0].className;
    let b7Child = b7.childNodes[0].className;

    if (b1Child == "x" && b4Child == "x" && b7Child == "x") {
      //x venceu
      declareWinner("x");
    } else if (b1Child == "o" && b4Child == "o" && b7Child == "o") {
      //o venceu
      declareWinner("o");
    }
  }

  //checagem de vitoria vertical linha 2
  if (
    b2.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b8.childNodes.length > 0
  ) {
    let b2Child = b2.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b8Child = b8.childNodes[0].className;

    if (b2Child == "x" && b5Child == "x" && b8Child == "x") {
      //x venceu
      declareWinner("x");
    } else if (b2Child == "o" && b5Child == "o" && b8Child == "o") {
      //o venceu
      declareWinner("o");
    }
  }

  //checagem de vitoria vertical linha 3
  if (
    b3.childNodes.length > 0 &&
    b6.childNodes.length > 0 &&
    b9.childNodes.length > 0
  ) {
    let b3Child = b3.childNodes[0].className;
    let b6Child = b6.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;

    if (b3Child == "x" && b6Child == "x" && b9Child == "x") {
      //x venceu
      declareWinner("x");
    } else if (b3Child == "o" && b6Child == "o" && b9Child == "o") {
      //o venceu
      declareWinner("o");
    }
  }

  //checagem de vitoria diagonal da esquerda 1 para direita 9
  if (
    b1.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b9.childNodes.length > 0
  ) {
    let b1Child = b1.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;

    if (b1Child == "x" && b5Child == "x" && b9Child == "x") {
      //x venceu
      declareWinner("x");
    } else if (b1Child == "o" && b5Child == "o" && b9Child == "o") {
      //o venceu
      declareWinner("o");
    }
  }

  //checagem de vitoria diagonal da direita 3 para esquerda 7
  if (
    b3.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b7.childNodes.length > 0
  ) {
    let b3Child = b3.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b7Child = b7.childNodes[0].className;

    if (b3Child == "x" && b5Child == "x" && b7Child == "x") {
      //x venceu
      declareWinner("x");
    } else if (b3Child == "o" && b5Child == "o" && b7Child == "o") {
      //o venceu
      declareWinner("o");
    }
  }
  //console.log("player1", player1)
  //console.log("player2", player2)
  //deu velha
  let counter = 0;

  //console.log(1,"counter", counter)
  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i].childNodes[0] != undefined) {
      counter++;
    }
  }

  if (counter == 9) {
    declareWinner("deu velha");
  }
}

//limpa o jogo, declara o vencedor e atualiza o placar
function declareWinner(winner) {
  let scoreBoardX = document.querySelector("#scoreboard-1");
  let scoreBoardY = document.querySelector("#scoreboard-2");
  let msg = "";

  if (winner == "x") {
    scoreBoardX.textContent = parseInt(scoreBoardX.textContent) + 1;
    msg = "O jogador 1 venceu!";
    console.log("jogador 1 venceu!", msg);
  } else if (winner == "o") {
    scoreBoardY.textContent = parseInt(scoreBoardY.textContent) + 1;
    msg = "O jogador 2 venceu!";
    console.log("jogador 2 venceu!", msg);
  } else {
    msg = "Deu velha!";
    //console.log(2, "Deu velha!", msg);
  }

  //exibe msg na tela
  messageText.innerHTML = msg;
  messageContainer.classList.remove("hide");

  //esconde msg
  setTimeout(function () {
    messageContainer.classList.add("hide");
  }, 3000);

  //zerar jogadas
  player1 = 0;
  player2 = 0;

  //remove x e o
  let boxesToRemove = document.querySelectorAll(".box div");

  for (let i = 0; i < boxesToRemove.length; i++) {
    boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
  }
}

//executar a logica da jogada do CPU
function computerPlay() {
  let cloneO = o.cloneNode(true);
  counter = 0;
  filled = 0;

  for (let i = 0; i < boxes.length; i++) {
    let randomNumber = Math.floor(Math.random() * 5);

    //so preencher se estiver vazio o filho
    //verifica se o bloco foi preenchido, se nao estiver verifica se o numero aleatório da AI e <= 1 se for sera preenchido
    if (boxes[i].childNodes[0] == undefined) {
      if (randomNumber <= 1) {
        boxes[i].appendChild(cloneO);
        counter++;
        break;
      }
      //checagem de quantas estão preenchidas
      //se nao estiver preenchido se adicionado a variável filled e counter para saber quando chamar a função recursivamente novamente. (função recursiva e uma técnica utilizada para desenvolver uma função que chama si mesma quantas vezes for necessário ou ate encontrar uma instrução de parar (break))
    } else {
      filled++;
    }
  }

  if (counter == 0 && filled < 9) {
    computerPlay();
  }
}
