//Exiber versos biblicos
var verseButtons = document.querySelectorAll(".show-verse");
verseButtons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    event.preventDefault(); // Impede o comportamento padrão do evento de clique

    var targetModal = button.getAttribute("data-target");
    var modal = document.querySelector(targetModal);
    var bootstrapModal = new bootstrap.Modal(modal);
    bootstrapModal.show();
    // Mantenha em branco se não quiser adicionar nenhuma ação
  });
});

//<!--Enviar respostas para contato do professor-->
// Adicione um event listener ao botão
document
  .getElementById("respostasButton")
  .addEventListener("click", function () {
    enviarResposta();
  });

  function enviarResposta() {
    var apiWhatsapp = "https://web.whatsapp.com/send/?phone=55";
    var nomeEstudante = document.getElementById("nameEstudante").value;
    var nomeProfessor = document.getElementById("nameProfessor").value;
    var contatoProfessor = document.getElementById("whatsappProfessor").value;
    var estudoBiblico = "Ouvindo a Voz de Deus";
    var tema = "01 - A Bíblia Sagrada";
    var respostas1 = document.getElementById("resposta1").value;
    var respostas21 = document.getElementById("resposta21").value;
    var respostas22 = document.getElementById("resposta22").value;
    var respostas31 = document.getElementById("flexCheck01").value;
    var respostas32 = document.getElementById("flexCheck02").value;
    var respostas33 = document.getElementById("flexCheck03").value;
    var respostas34 = document.getElementById("flexCheck04").value;
    var respostas41 = document.getElementById("resposta41").value;
    var respostas42 = document.getElementById("resposta42").value;
    var respostas51 = document.getElementById("resposta51").value;
    var respostas52 = document.getElementById("resposta52").value;
    var respostas61 = document.getElementById("resposta61").value;
    var respostas62 = document.getElementById("resposta62").value;
    var respostas71 = document.getElementById("flexCheck05").value;
    var respostas72 = document.getElementById("flexCheck06").value;
    var respostas73 = document.getElementById("flexCheck07").value;
    var respostas8 = document.getElementById("resposta8").value;
    var respostas9 = document.getElementById("resposta9").value;
    var respostas101 = document.getElementById("resposta101").value;
    var respostas102 = document.getElementById("resposta102").value;
    var respostasDrop1 = document.getElementById("drop-area1").value;
    var respostasDrop2 = document.getElementById("drop-area2").value;
    var respostasDrop3 = document.getElementById("drop-area3").value;
    var respostasDrop4 = document.getElementById("drop-area4").value;
    var respostasDrop5 = document.getElementById("drop-area5").value;
    var respostasDrop6 = document.getElementById("drop-area6").value;
    var respostasDrop7 = document.getElementById("drop-area7").value;
    var respostasDrop8 = document.getElementById("drop-area8").value;
    var respostasCompr1 = document.getElementById("flexCheck08").checked;
    var respostasCompr2 = document.getElementById("flexCheck09").checked;
    var respostasCompr3 = document.getElementById("flexCheck10").checked;

    // Verificar se todos os campos estão marcados como "is-valid"
    /*var camposValidos =
      document
        .getElementById("whatsappProfessor")
        .classList.contains("is-valid") &&
      document
        .getElementById("whatsappEstudante")
        .classList.contains("is-valid");
    if (camposValidos) {*/
      // Verificar se todos os campos estão preenchidos
      if (
        respostas1 &&
        respostas21 &&
        respostas22 &&
        respostas31 &&
        respostas32 &&
        respostas33 &&
        respostas34 &&
        respostas41 &&
        respostas42 &&
        respostas51 &&
        respostas52 &&
        respostas61 &&
        respostas62 &&
        respostas71 &&
        respostas72 &&
        respostas73 &&
        respostas8 &&
        respostas9 &&
        respostas101 &&
        respostas102 &&
        respostasDrop1 &&
        respostasDrop2 &&
        respostasDrop3 &&
        respostasDrop4 &&
        respostasDrop5 &&
        respostasDrop6 &&
        respostasDrop7 &&
        respostasDrop8 &&
        nomeEstudante &&
        nomeProfessor &&
        contatoProfessor
      ) {
        var linkBase = "https://otaviano07.github.io/aprendendomais/";
        var linkGerado =
          linkBase +
          estudoBiblico +
          "/" +
          tema +
          "/?nameProfessor=" +
          encodeURIComponent(nomeProfessor) +
          "&contatoProfessor=" +
          contatoProfessor +
          "&nameEstudante=" +
          encodeURIComponent(nomeEstudante) +
          "&contatoEstudante=" +
          contatoEstudante +
          "&respostas1=" +
          encodeURIComponent(respostas1) +
          "&respostas21=" +
          encodeURIComponent(respostas21) +
          "&respostas22=" +
          encodeURIComponent(respostas22) +
          "&respostas31=" +
          encodeURIComponent(respostas31) +
          "&respostas32=" +
          encodeURIComponent(respostas32) +
          "&respostas33=" +
          encodeURIComponent(respostas33) +
          "&respostas34=" +
          encodeURIComponent(respostas34) +
          "&respostas41=" +
          encodeURIComponent(respostas41) +
          "&respostas42=" +
          encodeURIComponent(respostas42) +
          "&respostas51=" +
          encodeURIComponent(respostas51) +
          "&respostas52=" +
          encodeURIComponent(respostas52) +
          "&respostas61=" +
          encodeURIComponent(respostas61) +
          "&respostas62=" +
          encodeURIComponent(respostas62) +
          "&respostas71=" +
          encodeURIComponent(respostas71) +
          "&respostas72=" +
          encodeURIComponent(respostas72) +
          "&respostas73=" +
          encodeURIComponent(respostas73) +
          "&respostas8=" +
          encodeURIComponent(respostas8) +
          "&respostas9=" +
          encodeURIComponent(respostas9) +
          "&respostas101=" +
          encodeURIComponent(respostas101) +
          "&respostas102=" +
          encodeURIComponent(respostas102) +
          "&respostasDrop1=" +
          encodeURIComponent(respostasDrop1) +
          "&respostasDrop2=" +
          encodeURIComponent(respostasDrop2) +
          "&respostasDrop3=" +
          encodeURIComponent(respostasDrop3) +
          "&respostasDrop4=" +
          encodeURIComponent(respostasDrop4) +
          "&respostasDrop5=" +
          encodeURIComponent(respostasDrop5) +
          "&respostasDrop6=" +
          encodeURIComponent(respostasDrop6) +
          "&respostasDrop7=" +
          encodeURIComponent(respostasDrop7) +
          "&respostasDrop8=" +
          encodeURIComponent(respostasDrop8) +
          "&respostasCompr1=" +
          encodeURIComponent(respostasCompr1) +
          "&respostasCompr2=" +
          encodeURIComponent(respostasCompr2) +
          "&respostasCompr3=" +
          encodeURIComponent(respostasCompr3);

        var mensagem =
          "Olá " +
          nomeProfessor +
          ", tudo bem!\n\nConsegui terminar o estudo bíblico " +
          estudoBiblico +
          " com o tema " +
          tema +
          ". Gostaria que você fizesse a correção das minhas respostas para ver como me saí.\nSegue o link: " +
          linkGerado +
          "\n\nAguardo ansiosamente pelo seu feedback!\n\nAtenciosamente,\n" +
          nomeEstudante;

        var linkWhatsapp =
          apiWhatsapp +
          contatoProfessor +
          "&text=" +
          encodeURIComponent(mensagem);

        // Abre o link do WhatsApp em uma nova janela ou guia
        window.open(linkWhatsapp);
      //}
    } else {
      alert(
        "Por favor, responda todas as perguntas antes de enviar as respostas para o professor."
      );
    }
  }

//Editar campo dados participantes
function editarInput(id) {
  var inputElement = document.getElementById(id);
  inputElement.removeAttribute("readonly");
  inputElement.focus();

  // Escutar evento 'blur' para voltar ao modo 'somente leitura' quando o input perder o foco
  inputElement.addEventListener("blur", function () {
    inputElement.setAttribute("readonly", "readonly");
  });
}

//Mascara para telefone
function mascaraTelefone(input) {
  input.value = input.value.replace(/[^\d()\-]/g, "");

  if (input.value.match(/[^\d()\-]/)) {
    alert("Digite somente números no campo de telefone.");
    input.value = input.value.replace(/[^\d()\-]/g, "");
  }
}

//Verificar numero de whatsapp
function validarDDD(telefone) {
  const dddsValidos = [
    "119", // São Paulo (SP)
    "129", // São José dos Campos e Região (SP)
    "139", // Baixada Santista (SP)
    "149", // Bauru e Região (SP)
    "159", // Sorocaba e Região (SP)
    "169", // Ribeirão Preto e Região (SP)
    "179", // São José do Rio Preto e Região (SP)
    "189", // Presidente Prudente e Região (SP)
    "199", // Campinas e Região (SP)
    "219", // Rio de Janeiro (RJ)
    "229", // Norte Fluminense (RJ)
    "249", // Serrana e Região (RJ)
    "279", // Espírito Santo (ES)
    "289", // Sul do Espírito Santo (ES)
    "319", // Belo Horizonte e Região (MG)
    "329", // Juiz de Fora e Região (MG)
    "339", // Governador Valadares e Região (MG)
    "349", // Uberlândia e Região (MG)
    "359", // Poços de Caldas e Região (MG)
    "379", // Divinópolis e Região (MG)
    "389", // Montes Claros e Região (MG)
    "419", // Curitiba e Região (PR)
    "429", // Ponta Grossa e Região (PR)
    "439", // Londrina e Região (PR)
    "449", // Maringá e Região (PR)
    "459", // Foz do Iguaçu e Região (PR)
    "469", // Francisco Beltrão e Região (PR)
    "479", // Joinville e Região (SC)
    "489", // Florianópolis e Região (SC)
    "499", // Chapecó e Região (SC)
    "519", // Porto Alegre e Região (RS)
    "539", // Pelotas e Região (RS)
    "549", // Caxias do Sul e Região (RS)
    "559", // Santa Maria e Região (RS)
    "619", // Distrito Federal (DF)
    "629", // Goiânia e Região (GO)
    "639", // Tocantins (TO)
    "649", // Rio Verde e Região (GO)
    "659", // Cuiabá e Região (MT)
    "669", // Rondonópolis e Região (MT)
    "679", // Mato Grosso do Sul (MS)
    "689", // Amapá (AP)
    "699", // Rondônia (RO)
    "719", // Salvador e Região (BA)
    "739", // Sul da Bahia (BA)
    "749", // Juazeiro e Região (BA)
    "759", // Feira de Santana e Região (BA)
    "769", // Rondônia e Região (RO)
    "779", // Barreiras e Região (BA)
    "789", // Tocantins (TO)
    "819", // Recife e Região (PE)
    "829", // Alagoas (AL)
    "839", // Paraíba (PB)
    "849", // Rio Grande do Norte (RN)
    "859", // Fortaleza e Região (CE)
    "869", // Piauí (PI)
    "879", // Petrolina e Região (PE)
    "889", // Ceará (CE)
    "899", // Sudoeste do Piauí (PI)
    "919", // Belém e Região (PA)
    "929", // Amazonas (AM)
    "939", // Oeste do Pará (PA)
    "949", // Marabá e Região (PA)
    "959", // Roraima (RR)
    "969", // Amapá (AP)
    "979", // Roraima e Região (RR)
    "989", // Maranhão (MA)
    "999", // Sul do Maranhão (MA)
  ];

  const dddTelefone = telefone.substring(0, 3);

  if (dddsValidos.includes(dddTelefone)) {
    return true;
  } else {
    return false;
  }
}

function verificarTelefone() {
  const telEstudante = document.getElementById("whatsappEstudante");
  const mensagemErroEstudante = document.getElementById(
    "mensagemErroEstudante"
  );

  const telProfessor = document.getElementById("whatsappProfessor");
  const mensagemErroProfessor = document.getElementById(
    "mensagemErroProfessor"
  );

  if (telEstudante.value.length > 0) {
    if (!validarDDD(telEstudante.value) || telEstudante.value.length < 11) {
      mensagemErroEstudante.innerText = "Número inválido.";
      telEstudante.classList.remove("is-valid");
      telEstudante.classList.add("is-invalid");
    } else {
      mensagemErroEstudante.innerText = "";
      telEstudante.classList.remove("is-invalid");
      telEstudante.classList.add("is-valid");
    }
  }

  if (telProfessor.value.length > 0) {
    if (!validarDDD(telProfessor.value) || telProfessor.value.length < 11) {
      mensagemErroProfessor.innerText = "Número inválido.";
      telProfessor.classList.remove("is-valid");
      telProfessor.classList.add("is-invalid");
    } else {
      mensagemErroProfessor.innerText = "";
      telProfessor.classList.remove("is-invalid");
      telProfessor.classList.add("is-valid");
    }
  }
}

function allowDrop(event) {
  event.preventDefault();
}

function dragWord(event) {
  event.dataTransfer.setData("text", event.target.dataset.word);
}

function dropWord(event) {
  event.preventDefault();
  var word = event.dataTransfer.getData("text");
  var dropArea = event.target;
  var selectedWord = document.querySelector(
    '.draggable-word[data-word="' + word + '"]'
  );

  if (dropArea.classList.contains("drop-area")) {
    if (!dropArea.textContent) {
      // Se a área estiver vazia, simplesmente adiciona a palavra
      dropArea.textContent = word;
      selectedWord.style.display = "none";
      dropArea.classList.add("green"); // Adiciona a classe "green" para a drop-area
    } else {
      // Se a área já contiver uma palavra, troca as palavras
      var currentWord = dropArea.textContent;
      dropArea.textContent = word;
      selectedWord.textContent = currentWord;
    }
  }
}

function resetExercise() {
  var dropAreas = document.querySelectorAll(".drop-area");
  var selectedWords = document.querySelectorAll(".selected-word");

  dropAreas.forEach(function (dropArea) {
    dropArea.textContent = "";
    dropArea.classList.remove("green"); // Remove a classe "green" das drop-areas
  });

  selectedWords.forEach(function (selectedWord) {
    selectedWord.style.display = "block";
  });
}

function updateCheckboxLabel(checkboxId) {
  var checkbox = document.getElementById(checkboxId);
  var labelText = document.getElementById("labelText" + checkboxId.slice(-2));

  if (checkbox.checked) {
    labelText.textContent = "V";
  } else {
    labelText.textContent = "F";
  }
}

//<!--Funcao para saber mais sobre o assunto-->

function leiaMais(pontosId, maisId, btnId) {
  var pontos = document.getElementById(pontosId);
  var maisTexto = document.getElementById(maisId);
  var btnLeiaMais = document.getElementById(btnId);

  if (maisTexto.style.display === "none") {
    pontos.style.display = "none";
    maisTexto.style.display = "inline";
    btnLeiaMais.innerHTML = "Leia menos";
    btnLeiaMais.className = "btn btn-warning";
  } else {
    pontos.style.display = "inline";
    maisTexto.style.display = "none";
    btnLeiaMais.innerHTML = "Leia mais";
    btnLeiaMais.className = "btn btn-info";
  }
}

//<!--Função para conffecion-->

var fireworksEffect = function () {
  var duration = 2 * 1000;
  var animationEnd = Date.now() + duration;
  var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  var interval = setInterval(function () {
    var timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    var particleCount = 50 * (timeLeft / duration);
    // since particles fall down, start a bit higher than random
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.5), y: Math.random() - 0.2 },
      })
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    );
  }, 250);
};

// School Pride Effect
var schoolprideEffect = function () {
  var end = Date.now() + 2 * 1000;

  // go Buckeyes!
  var colors = ["#0db84e", "#bb0500", "#1e0ad1"];

  (function frame() {
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors,
    });
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
};

// Realistic Look Effect
var realisticlookEffect = function () {
  var count = 200;
  var defaults = {
    origin: { y: 0.7 },
  };

  function fire(particleRatio, opts) {
    confetti(
      Object.assign({}, defaults, opts, {
        particleCount: Math.floor(count * particleRatio),
      })
    );
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 60,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
};

// Stars Effect
var starsEffect = function () {
  var defaults = {
    spread: 360,
    ticks: 50,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
    shapes: ["star"],
    colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
  };

  function shoot() {
    confetti({
      ...defaults,
      particleCount: 40,
      scalar: 1.2,
      shapes: ["star"],
    });

    confetti({
      ...defaults,
      particleCount: 10,
      scalar: 0.75,
      shapes: ["circle"],
    });
  }

  setTimeout(shoot, 0);
  setTimeout(shoot, 100);
  setTimeout(shoot, 200);
};

// Snow Effect
var snowEffect = function () {
  var duration = 2 * 1000;
  var animationEnd = Date.now() + duration;
  var skew = 1;

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  (function frame() {
    var timeLeft = animationEnd - Date.now();
    var ticks = Math.max(200, 300 * (timeLeft / duration));
    skew = Math.max(0.8, skew - 0.001);

    confetti({
      particleCount: 1,
      startVelocity: 0,
      ticks: ticks,
      origin: {
        x: Math.random(),
        // since particles fall down, skew start toward the top
        y: Math.random() * skew - 0.2,
      },
      colors: ["#e317be"],
      shapes: ["circle"],
      gravity: randomInRange(0.4, 0.6),
      scalar: randomInRange(0.4, 1),
      drift: randomInRange(-0.4, 0.4),
    });

    if (timeLeft > 0) {
      requestAnimationFrame(frame);
    }
  })();
};
document.getElementById("flexCheck08").addEventListener("click", function () {
  if (this.checked) {
    fireworksEffect();
    schoolprideEffect();
    realisticlookEffect();
  }
});

document.getElementById("flexCheck09").addEventListener("click", function () {
  if (this.checked) {
    fireworksEffect();
    realisticlookEffect();
    starsEffect();
    snowEffect();
  }
});

document.getElementById("flexCheck10").addEventListener("click", function () {
  if (this.checked) {
    schoolprideEffect();
    realisticlookEffect();
    starsEffect();
  }
});

//Aumentar o tamanho dos inputs conforme letras forem sendo adicionada
function ajustarTamanhoCampo(input) {
  input.style.width = (input.value.length + 1) * 8 + "px"; // Ajusta a largura do campo
}

var currentTouchElement = null;

function allowDrop(event) {
  event.preventDefault();
}

function dragWord(event) {
  event.dataTransfer.setData("text", event.target.dataset.word);
}

function touchStart(event) {
  currentTouchElement = event.target;
}

function touchEnd(event) {
  var selectedWord = currentTouchElement;
  if (selectedWord) {
    var word = selectedWord.dataset.word;
    var dropArea = event.target;

    if (dropArea.classList.contains("drop-area")) {
      if (!dropArea.textContent) {
        // Se a área estiver vazia, simplesmente adiciona a palavra
        dropArea.textContent = word;
        selectedWord.style.display = "none";
        dropArea.classList.add("green"); // Adiciona a classe "green" para a drop-area
      } else {
        // Se a área já contiver uma palavra, troca as palavras
        var currentWord = dropArea.textContent;
        dropArea.textContent = word;
        selectedWord.textContent = currentWord;
      }
    }

    currentTouchElement = null;
  }
}

function resetExercise() {
  var dropAreas = document.querySelectorAll(".drop-area");
  var selectedWords = document.querySelectorAll(".selected-word");

  dropAreas.forEach(function (dropArea) {
    dropArea.textContent = "";
    dropArea.classList.remove("green"); // Remove a classe "green" das drop-areas
  });

  selectedWords.forEach(function (selectedWord) {
    selectedWord.style.display = "block";
  });
}

// Captura dos parâmetros da URL
const params = new URLSearchParams(window.location.search);
const contatoProfessor = params.get("contatoProfessor");
const contatoEstudante = params.get("contatoEstudante");
const nomeProfessor = params.get("nameProfessor");
const nomeEstudante = params.get("nameEstudante");
const respostas1 = params.get("respostas1");
const respostas21 = params.get("respostas21");
const respostas22 = params.get("respostas22");
const respostas31 = params.get("respostas31");
const respostas32 = params.get("respostas32");
const respostas33 = params.get("respostas33");
const respostas34 = params.get("respostas34");
const respostas41 = params.get("respostas41");
const respostas42 = params.get("respostas42");
const respostas51 = params.get("respostas51");
const respostas52 = params.get("respostas52");
const respostas61 = params.get("respostas61");
const respostas62 = params.get("respostas62");
const respostas71 = params.get("respostas71");
const respostas72 = params.get("respostas72");
const respostas73 = params.get("respostas73");
const respostas8 = params.get("respostas8");
const respostas9 = params.get("respostas9");
const respostas101 = params.get("respostas101");
const respostas102 = params.get("respostas102");
const respostasDrop1 = params.get("respostasDrop1");
const respostasDrop2 = params.get("respostasDrop2");
const respostasDrop3 = params.get("respostasDrop3");
const respostasDrop4 = params.get("respostasDrop4");
const respostasDrop5 = params.get("respostasDrop5");
const respostasDrop6 = params.get("respostasDrop6");
const respostasDrop7 = params.get("respostasDrop7");
const respostasDrop8 = params.get("respostasDrop8");
const respostasCompr1 = params.get("respostasCompr1");
const respostasCompr2 = params.get("respostasCompr2");
const respostasCompr3 = params.get("respostasCompr3");

// Preenchimento dos campos do formulário
document.getElementById("whatsappProfessor").value = contatoProfessor;
document.getElementById("nameProfessor").value = nomeProfessor;
document.getElementById("whatsappEstudante").value = contatoEstudante;
document.getElementById("nameEstudante").value = nomeEstudante;
document.getElementById("respostas1").value = decodeURIComponent(respostas1);
document.getElementById("respostas21").value = decodeURIComponent(respostas21);
document.getElementById("respostas22").value = decodeURIComponent(respostas22);
document.getElementById("respostas31").value = decodeURIComponent(respostas31);
document.getElementById("respostas32").value = decodeURIComponent(respostas32);
document.getElementById("respostas33").value = decodeURIComponent(respostas33);
document.getElementById("respostas34").value = decodeURIComponent(respostas34);
document.getElementById("respostas41").value = decodeURIComponent(respostas41);
document.getElementById("respostas42").value = decodeURIComponent(respostas42);
document.getElementById("respostas51").value = decodeURIComponent(respostas51);
document.getElementById("respostas52").value = decodeURIComponent(respostas52);
document.getElementById("respostas61").value = decodeURIComponent(respostas61);
document.getElementById("respostas62").value = decodeURIComponent(respostas62);
document.getElementById("respostas71").value = decodeURIComponent(respostas71);
document.getElementById("respostas72").value = decodeURIComponent(respostas72);
document.getElementById("respostas73").value = decodeURIComponent(respostas73);
document.getElementById("respostas8").value = decodeURIComponent(respostas8);
document.getElementById("respostas9").value = decodeURIComponent(respostas9);
document.getElementById("respostas101").value = decodeURIComponent(respostas101);
document.getElementById("respostas102").value = decodeURIComponent(respostas102);
document.getElementById("respostasDrop1").value = decodeURIComponent(respostasDrop1);
document.getElementById("respostasDrop2").value = decodeURIComponent(respostasDrop2);
document.getElementById("respostasDrop3").value = decodeURIComponent(respostasDrop3);
document.getElementById("respostasDrop4").value = decodeURIComponent(respostasDrop4);
document.getElementById("respostasDrop5").value = decodeURIComponent(respostasDrop5);
document.getElementById("respostasDrop6").value = decodeURIComponent(respostasDrop6);
document.getElementById("respostasDrop7").value = decodeURIComponent(respostasDrop7);
document.getElementById("respostasDrop8").value = decodeURIComponent(respostasDrop8);
document.getElementById("respostasCompr1").value = decodeURIComponent(respostasCompr1);
document.getElementById("respostasCompr2").value = decodeURIComponent(respostasCompr2);
document.getElementById("respostasCompr3").value = decodeURIComponent(respostasCompr3);


var utterance = null; // Variável global para controlar a síntese de fala

function lerVersiculo(versiculoId) {
  if (utterance && speechSynthesis.speaking) {
    // Se já houver uma síntese em andamento, interrompa-a
    speechSynthesis.cancel();
    return;
  }

  var versiculoElement = document.getElementById(versiculoId);

  // Verifique se o elemento do versículo existe
  if (!versiculoElement) {
    console.log("Erro: O elemento do versículo não foi encontrado.");
    return;
  }

  var versiculo = versiculoElement.textContent.trim();

  // Remover tags HTML do versículo
  var regexTags = /<[^>]+>/g;
  var regexNumeros = /\d+/g;

  versiculo = versiculo.replace(regexTags, "");
  versiculo = versiculo.replace(regexNumeros, "");

  utterance = new SpeechSynthesisUtterance(versiculo);

  // Obtenha a lista de vozes disponíveis
  var voices = speechSynthesis.getVoices();

  // Selecione uma voz feminina em português
  var selectedVoice = voices.find(function (voice) {
    if (voice.lang === "pt-BR" && voice.name.includes("Feminino")) {
      return voice;
    }
  });

  // Defina a voz selecionada na utterance
  utterance.voice = selectedVoice;

  speechSynthesis.speak(utterance);
}

function pausarVersiculo() {
  if (utterance && speechSynthesis.speaking) {
    // Pausa a síntese de fala
    speechSynthesis.pause();
  }
}

function retomarVersiculo() {
  if (utterance && speechSynthesis.paused) {
    // Retoma a síntese de fala
    speechSynthesis.resume();
  }
}

function ajustarVelocidade(velocidade) {
  if (utterance) {
    // Ajusta a velocidade da fala
    utterance.rate = velocidade;
  }
}

function pararAudio(versiculoId) {
  if (utterance && speechSynthesis.speaking) {
    // Interrompa a síntese de fala
    speechSynthesis.cancel();
  }

  // Redefina o estado de reprodução do versículo específico
  var versiculoElement = document.getElementById(versiculoId);
  if (versiculoElement) {
    versiculoElement.dataset.playing = "false";
    versiculoElement.dataset.paused = "false";
    versiculoElement.dataset.position = "0";
  }
}
