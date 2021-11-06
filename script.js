var carta1 = {
  nome: "Daenerys Targaryen",
  imagem:
    "https://pbs.twimg.com/profile_images/1117967801652617216/i8PWXebo_400x400.jpg",
  atributos: {
    ataque: 3,
    defesa: 8,
    magia: 9
  }
};

var carta2 = {
  nome: "Jon Snow",
  imagem:
    "https://i.pinimg.com/originals/ee/76/7e/ee767e891b670ae5184003f19c8997de.jpg",
  atributos: {
    ataque: 8,
    defesa: 6,
    magia: 4
  }
};

var carta3 = {
  nome: "Jaime Lannister",
  imagem:
    "https://ogimg.infoglobo.com.br/in/23557299-12b-e47/FT460B/300x300xgame-of-thrones-jaime-lannister.jpg.pagespeed.ic.r3N3x-7raP.jpg",
  atributos: {
    ataque: 10,
    defesa: 9,
    magia: 6
  }
};

var carta4 = {
  nome: "Bram Stark",
  imagem:
    "https://http2.mlstatic.com/D_NQ_NP_644438-MLB45133299917_032021-O.jpg",
  atributos: {
    ataque: 1,
    defesa: 7,
    magia: 10
  }
};

var carta5 = {
  nome: "Arya Stark",
  imagem:
    "https://s2.glbimg.com/yEVO6AGIFQ9T6-uD9qYJ59mR1oQ=/620x620/smart/e.glbimg.com/og/ed/f/original/2019/05/17/e7506b1d4af8a20fa03be01a5c876199.jpg",
  atributos: {
    ataque: 6,
    defesa: 7,
    magia: 8
  }
};

var carta6 = {
  nome: "Melisandre",
  imagem:
    "https://ovicio.com.br/wp-content/uploads/2019/04/20190420-melisandre-game-of-thrones-555x555.jpeg",
  atributos: {
    ataque: 3,
    defesa: 9,
    magia: 8
  }
};

var cartas = [carta1, carta2, carta3, carta4, carta5, carta6];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 6);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 6);
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 6);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  // exibirOpcoes();
  exibirCartaJogador();
}

// function exibirOpcoes() {
//   var opcoes = document.getElementById("opcoes");
//   var opcoesTexto = "";

//   for (var atributo in cartaJogador.atributos) {
//     opcoesTexto +=
//       "<input type='radio' name='atributo' value='" +
//       atributo +
//       "'>" +
//       atributo;
//   }
//   opcoes.innerHTML = opcoesTexto;
// }

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");

  // var elementoResultado = document.getElementById("resultado");
  // var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  // var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

  //   if (valorCartaJogador > valorCartaMaquina) {
  //     elementoResultado.innerHTML = "Você venceu!";
  //   } else if (valorCartaMaquina > valorCartaJogador) {
  //     elementoResultado.innerHTML = "Você perdeu, a carta da máquina é maior.";
  //   } else {
  //     elementoResultado.innerHTML = "Empatou.";
  //   }
  //   console.log(cartaMaquina);
  // }

  if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Venceu</p>";
  } else if (
    cartaJogador.atributos[atributoSelecionado] <
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Perdeu</p>";
  } else {
    htmlResultado = "<p class='resultado-final'>Empatou</p>";
  }
  divResultado.innerHTML = htmlResultado;

  document.getElementById("btnJogar").disabled = true;

  exibirCartaMaquina();
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  // acima notação Template strings, abaixo notação JavaScript
  //divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")";
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";
  var opcoesTexto = "";

  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  // acima notação Template strings, abaixo notação JavaScript
  //divCartaMaquina.style.backgroundImage = "url(" + cartaJogador.imagem + ")";
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";
  var opcoesTexto = "";

  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}