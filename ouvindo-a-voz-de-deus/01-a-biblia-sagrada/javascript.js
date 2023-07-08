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


  function shortenUrl(longUrl, customSlug) {
    var apiUrl =
      "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(longUrl);
    if (customSlug) {
      apiUrl += "&alias=" + encodeURIComponent(customSlug);
    }
  
    //Seria para colocar a url original em id="url"
    //document.getElementById("linkGerado").value = longUrl;
    //document.getElementById("url").value = apiUrl;
  
    return fetch(apiUrl)
      .then(function (response) {
        return response.text();
      })
      .catch(function (error) {
        console.log("Erro ao encurtar o link:", error);
      });
  }  

  function enviarResposta() {
    var apiWhatsapp = "https://web.whatsapp.com/send/?phone=55";
    var nomeEstudante = document.getElementById("nameEstudante").value;
    var nomeProfessor = document.getElementById("nameProfessor").value;
    var contatoProfessor = document.getElementById("whatsappProfessor").value;
    var estudoBiblico = "ouvindo-a-voz-de-deus";
    var tema ="01-a-biblia-sagrada";
    var resposta1 = document.getElementById("resposta1").value;
    var resposta2 = document.getElementById("resposta2").value;
    var resposta3 = document.getElementById("resposta3").value;
    var resposta4 = document.getElementById("resposta4").checked;
    var resposta5 = document.getElementById("resposta5").checked;
    var resposta6 = document.getElementById("resposta6").checked;
    var resposta7 = document.getElementById("resposta7").checked;
    var resposta8 = document.getElementById("resposta8").value;
    var resposta9 = document.getElementById("resposta9").value;
    var resposta10 = document.getElementById("resposta10").value;
    var resposta11 = document.getElementById("resposta11").value;
    var resposta12 = document.getElementById("resposta12").value;
    var resposta13 = document.getElementById("resposta13").value;
    var resposta14 = document.getElementById("resposta14").checked;
    var resposta15 = document.getElementById("resposta15").checked;
    var resposta16 = document.getElementById("resposta16").checked;
    var resposta17 = document.getElementById("resposta17").value;
    var resposta18 = document.getElementById("resposta18").value;
    var resposta19 = document.getElementById("resposta19").value;
    var resposta20 = document.getElementById("resposta20").value;
    var resposta21 = document.getElementById("resposta21").textContent;
    var resposta22 = document.getElementById("resposta22").textContent;
    var resposta23 = document.getElementById("resposta23").textContent;
    var resposta24 = document.getElementById("resposta24").textContent;
    var resposta25 = document.getElementById("resposta25").textContent;
    var resposta26 = document.getElementById("resposta26").textContent;
    var resposta27 = document.getElementById("resposta27").textContent;
    var resposta28 = document.getElementById("resposta28").textContent;
    var resposta29 = document.getElementById("resposta29").checked;
    var resposta30 = document.getElementById("resposta30").checked;
    var resposta31 = document.getElementById("resposta31").checked;


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
        resposta1 &&
        resposta2 &&
        resposta3 &&
        resposta8 &&
        resposta9 &&
        resposta10 &&
        resposta11 &&
        resposta12 &&
        resposta13 &&
        resposta17 &&
        resposta18 &&
        resposta19 &&
        resposta20 &&
        resposta21 &&
        resposta22 &&
        resposta23 &&
        resposta24 &&
        resposta25 &&
        resposta26 &&
        resposta27 &&
        resposta28 &&
        resposta29 &&
        resposta30 &&
        resposta31 &&
        nomeEstudante &&
        nomeProfessor &&
        contatoProfessor &&
        contatoEstudante
      ) {
        var linkBase = "https://otaviano07.github.io/revelacaobiblica/";
        var linkGerado =
          linkBase +
          estudoBiblico +
          "/" +
          tema +
          "/index.html?nameProfessor=" +
          encodeURIComponent(nomeProfessor) +
          "&contatoProfessor=" +
          contatoProfessor +
          "&nameEstudante=" +
          encodeURIComponent(nomeEstudante) +
          "&contatoEstudante=" +
          contatoEstudante +
          "&resposta1=" +
          encodeURIComponent(resposta1) +
          "&resposta2=" +
          encodeURIComponent(resposta2) +
          "&resposta3=" +
          encodeURIComponent(resposta3) +
          "&resposta4=" +
          encodeURIComponent(resposta4) +
          "&resposta5=" +
          encodeURIComponent(resposta5) +
          "&resposta6=" +
          encodeURIComponent(resposta6) +
          "&resposta7=" +
          encodeURIComponent(resposta7) +
          "&resposta8=" +
          encodeURIComponent(resposta8) +
          "&resposta9=" +
          encodeURIComponent(resposta9) +
          "&resposta10=" +
          encodeURIComponent(resposta10) +
          "&resposta11=" +
          encodeURIComponent(resposta11) +
          "&resposta12=" +
          encodeURIComponent(resposta12) +
          "&resposta13=" +
          encodeURIComponent(resposta13) +
          "&resposta14=" +
          encodeURIComponent(resposta14) +
          "&resposta15=" +
          encodeURIComponent(resposta15) +
          "&resposta16=" +
          encodeURIComponent(resposta16) +
          "&resposta17=" +
          encodeURIComponent(resposta17) +
          "&resposta18=" +
          encodeURIComponent(resposta18) +
          "&resposta19=" +
          encodeURIComponent(resposta19) +
          "&resposta20=" +
          encodeURIComponent(resposta20) +
          "&resposta21=" +
          encodeURIComponent(resposta21) +
          "&resposta22=" +
          encodeURIComponent(resposta22) +
          "&resposta23=" +
          encodeURIComponent(resposta23) +
          "&resposta24=" +
          encodeURIComponent(resposta24) +
          "&resposta25=" +
          encodeURIComponent(resposta25) +
          "&resposta26=" +
          encodeURIComponent(resposta26) +
          "&resposta27=" +
          encodeURIComponent(resposta27) +
          "&resposta28=" +
          encodeURIComponent(resposta28) +
          "&resposta29=" +
          encodeURIComponent(resposta29) +
          "&resposta30=" +
          encodeURIComponent(resposta30)+
          "&resposta31=" +
          encodeURIComponent(resposta31);

          //linkGerado = shortenUrl(linkGerado, "EstudoBiblico");

        var mensagem = (linkGerado);
          "Olá " +
          nomeProfessor +
          ", tudo bem!\n\nConsegui terminar o estudo bíblico " +
          estudoBiblico +
          " com o tema " +
          tema +
          ". Gostaria que você fizesse a correção das minhas resposta para ver como me saí.\nSegue o link: " +
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
      console.log("Campos preenchidos: " + resposta1 + ", " + resposta2 + ", " + resposta3 + ", " + resposta4 + ", " + resposta5 + ", " + resposta6 + ", " + resposta7 + ", " + resposta8 + ", " + resposta9 + ", " + resposta10 + ", " + resposta11 + ", " + resposta12 + ", " + resposta13 + ", " + resposta14 + ", " + resposta15 + ", " + resposta16 + ", " + resposta17 + ", " + resposta18 + ", " + resposta19 + ", " + resposta20 + ", " + resposta21 + ", " + resposta22 + ", " + resposta23 + ", " + resposta24 + ", " + resposta25 + ", " + resposta26 + ", " + resposta27 + ", " + resposta28 + ", " + resposta29 + ", " + resposta30 + ", " + resposta31);
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

/*
function updateCheckboxLabel(checkboxId) {
  var checkbox = document.getElementById(checkboxId);
  var labelText = document.getElementById("labelText" + checkboxId.slice(-2));

  if (checkbox.checked) {
    labelText.textContent = "V";
  } else {
    labelText.textContent = "F";
  }
}*/

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
document.getElementById("resposta29").addEventListener("click", function () {
  if (this.checked) {
    fireworksEffect();
    schoolprideEffect();
    realisticlookEffect();
  }
});

document.getElementById("resposta30").addEventListener("click", function () {
  if (this.checked) {
    fireworksEffect();
    realisticlookEffect();
    starsEffect();
    snowEffect();
  }
});

document.getElementById("resposta31").addEventListener("click", function () {
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

    // Obter os dados das áreas de soltar
    function getDropAreasData() {
      var dropAreas = document.getElementsByClassName("drop-area");
      var respostas = {};

      for (var i = 0; i < dropAreas.length; i++) {
          var dropArea = dropAreas[i];
          var resposta = dropArea.getAttribute("data-resposta");
          var conteudo = dropArea.textContent;
          respostas[resposta] = conteudo;
      }

      return respostas;
  }

  // Exemplo de uso: obter os dados e exibi-los no console
  var respostas = getDropAreasData();
  console.log(respostas);