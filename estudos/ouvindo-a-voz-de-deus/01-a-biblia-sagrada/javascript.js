function imprimirPagina() {
  window.print();
}

function baixarPDF() {
  // Opções para a geração do PDF
  var options = {
    filename: "arquivo.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: {
      unit: "pt",
      format: "a4",
      orientation: "portrait",
      margin: [50, 80, 50, 50],
    },
  };

  // Elemento HTML que deseja converter em PDF
  var conteudoHTML = document.documentElement;

  // Função html2pdf para converter o conteúdo HTML em PDF e fazer o download
  html2pdf().set(options).from(conteudoHTML).save();
}

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
document.getElementById("btnRespostas").addEventListener("click", function () {
    enviarResposta();  
});

function updateUrl(shortUrl) {
  var linkGeradoInput = document.getElementById("linkGerado");
  linkGeradoInput.value = shortUrl;
}

//Encurtador de link
function shortenUrl(longUrl, customSlug) {
  var apiUrl =
    "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(longUrl);
  if (customSlug) {
    apiUrl += "&alias=" + encodeURIComponent(customSlug);
  }

  return fetch(apiUrl)
    .then(function (response) {
      return response.text();
    })
    .catch(function (error) {
      console.log("Erro ao encurtar o link:", error);
    });
}

function enviarResposta() {
  var apiWhatsappWeb = "https://web.whatsapp.com/send/?phone=55";
  var apiWhatsappMobile = "https://wa.me/55";
  var nameEstudante = document.getElementById("nameEstudante").value;
  var nameProfessor = document.getElementById("nameProfessor").value;
  var whatsappProfessor = document.getElementById("whatsappProfessor").value;
  var whatsappEstudante = document.getElementById("whatsappEstudante").value;
  var estudoBiblico = "ouvindo-a-voz-de-deus";
  var tema = "01-a-biblia-sagrada";
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
  var viewProfessor = document.getElementById("viewProfessor").value;
  viewProfessor.value = false;

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
    nameEstudante &&
    nameProfessor &&
    whatsappProfessor &&
    whatsappEstudante
  ) {
    var linkBase = "https://otaviano07.github.io/revelacaobiblica/";
    var linkEstudo =
      linkBase +
      estudoBiblico +
      "/" +
      tema +
      "/index.html?nameProfessor=" +
      encodeURIComponent(nameProfessor) +
      "&whatsappProfessor=" +
      whatsappProfessor +
      "&nameEstudante=" +
      encodeURIComponent(nameEstudante) +
      "&whatsappEstudante=" +
      whatsappEstudante +
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
      encodeURIComponent(resposta30) +
      "&resposta31=" +
      encodeURIComponent(resposta31);+
      "&viewProfessor="+
      encodeURIComponent(viewProfessor);

      var linkGerado = document.getElementById("linkGerado");

      shortenUrl(linkEstudo).then(function (shortUrl) {
        linkGerado.value = shortUrl;
        console.log("Link gerado: " + shortUrl);
  
        estudoBiblico = formatarTexto(estudoBiblico);
        tema = formatarTexto(tema);
  
        var mensagem =
          "Olá *" +
          nameProfessor +
          "*, tudo bem!\n\nConsegui terminar o estudo bíblico *" +
          estudoBiblico +
          "* com o tema *" +
          tema +
          "*. Gostaria que você fizesse a correção das minhas resposta para ver como me saí.\n\nSegue o link: " +
          shortUrl +
          "\n\nAguardo ansiosamente pelo seu feedback!\n\nAtenciosamente,\n" +
          nameEstudante;
  
        if (detectDevice()) {
          var pre = apiWhatsappMobile + whatsappProfessor + "?text=";
        } else {
          var pre = apiWhatsappWeb + whatsappProfessor + "&text=";
        }
  
        var linkWhatsapp = pre + encodeURIComponent(mensagem);

      
  
        // Abre o link do WhatsApp em uma nova janela ou guia
        window.open(linkWhatsapp);
      });
    } else {
      console.log(
        "Campos preenchidos: " +
          resposta1 +
          ", " +
          resposta2 +
          ", " +
          resposta3 +
          ", " +
          resposta4 +
          ", " +
          resposta5 +
          // Resto do código...
          ", " +
          resposta31
      );
      alert(
        "Por favor, responda todas as perguntas antes de enviar as respostas para o professor."
      );
    }
  }

function formatarTexto(texto) {
  var palavras = texto.split("-"); // Divide o texto em um array de palavras separadas por hífens
  var resultado = "";

  for (var i = 0; i < palavras.length; i++) {
    var palavra = palavras[i];
    var primeiraLetra = palavra.charAt(0).toUpperCase(); // Obtém a primeira letra da palavra e converte para maiúscula
    var restante = palavra.slice(1); // Obtém o restante da palavra (exceto a primeira letra)
    var palavraFormatada = primeiraLetra + restante;
    resultado += palavraFormatada + " ";
  }

  return resultado.trim(); // Remove espaços extras no início e no final da string
}

function detectDevice() {
  var userAgent = navigator.userAgent;
  var isMobile =
    /Mobi|(iPhone|iPad|iPod|Android|Windows Phone|BlackBerry)/i.test(userAgent);
  return isMobile;
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
      dropArea.textContent = word;
      selectedWord.style.display = "none";
    } else {
      var currentWord = dropArea.textContent;
      dropArea.textContent = word;
      selectedWord.textContent = currentWord;
    }
    checkWords();
  }
}

function checkWords() {
  var dropAreas = document.getElementsByClassName("drop-area");
  var palavrasCorretas = {
    resposta21: "VERDADE",
    resposta22: "ENTENDEM",
    resposta23: "POUCO",
    resposta24: "ALI",
    resposta25: "ASSUNTO",
    resposta26: "DEUS",
    resposta27: "TIRAR",
    resposta28: "ACRESCENTAR",
  };

  for (var i = 0; i < dropAreas.length; i++) {
    var dropArea = dropAreas[i];
    var palavra = dropArea.textContent;
    var id = dropArea.id;

    if (palavrasCorretas[id] === palavra) {
      dropArea.classList.add("green");
    } else {
      dropArea.classList.remove("green");
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

  if (maisTexto.style.display === "none" || maisTexto.style.display === "") {
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

// Seletor CSS para todos os campos de entrada que deseja ajustar o tamanho
var camposDeEntrada = document.querySelectorAll('.blank');

// Adicionar o ouvinte de eventos 'input' para cada campo
camposDeEntrada.forEach(function(campo) {
  campo.addEventListener('input', function() {
    ajustarTamanhoCampo(campo);
  });
});

//Aumentar o tamanho dos inputs conforme letras forem sendo adicionada
function ajustarTamanhoCampo(input) {
  var quantidadeLetras = input.value.length;
  var tamanhoLetra = 11; // Tamanho aproximado de cada letra, em pixels
  var larguraMinima = 100; // Largura mínima do campo, em pixels
  
  var novaLargura = Math.max(quantidadeLetras * tamanhoLetra, larguraMinima) + 'px';
  input.style.width = novaLargura;
}

var currentTouchElement = null;
var previousDropArea = null;
var previousWord = null;
var previousDropAreaText = "";

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

        // Armazena o movimento anterior
        previousDropArea = dropArea;
        previousWord = selectedWord;
        previousDropAreaText = "";
      } else {
        // Se a área já contiver uma palavra, troca as palavras
        var currentWord = dropArea.textContent;
        dropArea.textContent = word;
        selectedWord.textContent = currentWord;

        // Exibe a palavra anteriormente oculta
        selectedWord.style.display = "inline-block";
        selectedWord.classList.remove("green");

        // Armazena o movimento anterior
        previousDropArea = dropArea;
        previousWord = selectedWord;
        previousDropAreaText = currentWord;
      }
    }

    currentTouchElement = null;
  }

  checkWords();
}

function undoPreviousMove() {
  if (previousDropArea && previousWord) {
    // Restaura a palavra à sua posição anterior
    previousDropArea.textContent = previousDropAreaText;
    previousWord.style.display = "inline-block";
    previousWord.classList.add("green");

    previousDropArea = null;
    previousWord = null;
    previousDropAreaText = "";
  }

  checkWords();
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

  var versiculo = versiculoElement.innerText.trim();

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
    //speechSynthesis.pause();
    window.speechSynthesis.pause();
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

window.addEventListener("DOMContentLoaded", (event) => {
  preencherFormulario();
});

//document.addEventListener('DOMContentLoaded', preencherFormulario);

function preencherFormulario() {
  // Extrai os parâmetros da URL
  const urlParams = new URLSearchParams(window.location.search);

  // Obtém os valores dos parâmetros
  const nameProfessor = urlParams.get("nameProfessor");
  const whatsappProfessor = urlParams.get("whatsappProfessor");
  const nameEstudante = urlParams.get("nameEstudante");
  const whatsappEstudante = urlParams.get("whatsappEstudante");
  const resposta1 = urlParams.get("resposta1");
  const resposta2 = urlParams.get("resposta2");
  const resposta3 = urlParams.get("resposta3");
  const resposta4 = urlParams.get("resposta4");
  const resposta5 = urlParams.get("resposta5");
  const resposta6 = urlParams.get("resposta6");
  const resposta7 = urlParams.get("resposta7");
  const resposta8 = urlParams.get("resposta8");
  const resposta9 = urlParams.get("resposta9");
  const resposta10 = urlParams.get("resposta10");
  const resposta11 = urlParams.get("resposta11");
  const resposta12 = urlParams.get("resposta12");
  const resposta13 = urlParams.get("resposta13");
  const resposta14 = urlParams.get("resposta14");
  const resposta15 = urlParams.get("resposta15");
  const resposta16 = urlParams.get("resposta16");
  const resposta17 = urlParams.get("resposta17");
  const resposta18 = urlParams.get("resposta18");
  const resposta19 = urlParams.get("resposta19");
  const resposta20 = urlParams.get("resposta20");
  const resposta21 = urlParams.get("resposta21");
  const resposta22 = urlParams.get("resposta22");
  const resposta23 = urlParams.get("resposta23");
  const resposta24 = urlParams.get("resposta24");
  const resposta25 = urlParams.get("resposta25");
  const resposta26 = urlParams.get("resposta26");
  const resposta27 = urlParams.get("resposta27");
  const resposta28 = urlParams.get("resposta28");
  const resposta29 = urlParams.get("resposta29");
  const resposta30 = urlParams.get("resposta30");
  const resposta31 = urlParams.get("resposta31");
  const viewProfessor = urlParams.get("viewProfessor");

  // Preenche os campos do formulário
  document.getElementById("nameProfessor").value = nameProfessor;
  document.getElementById("whatsappProfessor").value = whatsappProfessor;
  document.getElementById("nameEstudante").value = nameEstudante;
  document.getElementById("whatsappEstudante").value = whatsappEstudante;
  document.getElementById("resposta1").value = resposta1;
  document.getElementById("resposta2").value = resposta2;
  document.getElementById("resposta3").value = resposta3;
  document.getElementById("resposta4").checked = resposta4 === "true";
  document.getElementById("resposta5").checked = resposta5 === "true";
  document.getElementById("resposta6").checked = resposta6 === "true";
  document.getElementById("resposta7").checked = resposta7 === "true";
  document.getElementById("resposta8").value = resposta8;
  document.getElementById("resposta9").value = resposta9;
  document.getElementById("resposta10").value = resposta10;
  document.getElementById("resposta11").value = resposta11;
  document.getElementById("resposta12").value = resposta12;
  document.getElementById("resposta13").value = resposta13;
  document.getElementById("resposta14").checked = resposta14 === "true";
  document.getElementById("resposta15").checked = resposta15 === "true";
  document.getElementById("resposta16").checked = resposta16 === "true";
  document.getElementById("resposta17").value = resposta17;
  document.getElementById("resposta18").value = resposta18;
  document.getElementById("resposta19").value = resposta19;
  document.getElementById("resposta20").value = resposta20;
  document.getElementById("resposta21").textContent = resposta21;
  document.getElementById("resposta22").textContent = resposta22;
  document.getElementById("resposta23").textContent = resposta23;
  document.getElementById("resposta24").textContent = resposta24;
  document.getElementById("resposta25").textContent = resposta25;
  document.getElementById("resposta26").textContent = resposta26;
  document.getElementById("resposta27").textContent = resposta27;
  document.getElementById("resposta28").textContent = resposta28;
  document.getElementById("resposta29").checked = resposta29 === "true";
  document.getElementById("resposta30").checked = resposta30 === "true";
  document.getElementById("resposta31").checked = resposta31 === "true";
  document.getElementById("viewProfessor").value = viewProfessor;
  viewElementosProfessor();
}

var inputs = [
  document.getElementById("resposta1"),
  document.getElementById("resposta2"),
  document.getElementById("resposta3"),
  document.getElementById("resposta4"),
  document.getElementById("resposta5"),
  document.getElementById("resposta6"),
  document.getElementById("resposta7"),
  document.getElementById("resposta8"),
  document.getElementById("resposta9"),
  document.getElementById("resposta10"),
  document.getElementById("resposta11"),
  document.getElementById("resposta12"),
  document.getElementById("resposta13"),
  document.getElementById("resposta14"),
  document.getElementById("resposta15"),
  document.getElementById("resposta16"),
  document.getElementById("resposta17"),
  document.getElementById("resposta18"),
  document.getElementById("resposta19"),
  document.getElementById("resposta20"),
  document.getElementById("resposta21"),
  document.getElementById("resposta22"),
  document.getElementById("resposta23"),
  document.getElementById("resposta24"),
  document.getElementById("resposta25"),
  document.getElementById("resposta26"),
  document.getElementById("resposta27"),
  document.getElementById("resposta28"),
  document.getElementById("resposta29"),
  document.getElementById("resposta30"),
  document.getElementById("resposta31"),
];

inputs.forEach(function (input) {
  input.addEventListener("input", function () {
    if (input.value !== "" || input.checked || input.textContent !== "") {
      input.classList.add("filled");
    } else {
      input.classList.remove("filled");
    }
  });
});

//Ocultar elementos quando o professor visualizar as respostas

function viewElementosProfessor() {

  var viewProfessor = document.getElementById("viewProfessor");

  if(viewProfessor.value === "false"){
    // Selecione todos os elementos com a classe "selected-word"
    var selectedWords = document.querySelectorAll(".selected-word");
    var inputGroupAppends = document.querySelectorAll(".input-group-append");
    var btnLimparDropArea = document.getElementById("btnLimparDropArea");
    var h1Element = document.querySelector("h1");
    var divComentario = document.querySelectorAll(".comentario");

    checkWords();

    // Percorra todos os elementos selecionados
    selectedWords.forEach(function(element) {
      // Adicione a classe "oculto" para tornar o elemento oculto
      element.classList.add("oculto");
    });

    inputs.forEach(function (input) {
      input.readOnly = true; // Definir como somente leitura
      input.disabled = true; // Desabilitar checkbox
    });
      // Percorra todos os elementos selecionados
    inputGroupAppends.forEach(function(element) {
      // Adicione a classe "oculto" para tornar o elemento oculto
      element.classList.add("oculto");
    });

    divComentario.forEach(function(element) {
      element.style.display = "block";
    });

    btnLimparDropArea.classList.add("oculto");
    h1Element.style.display = "block";
    
  }
  else{
    h1Element.style.display = "none";
    divComentario.style.display = "none";
  }
}

(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

