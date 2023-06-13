// Obter a referência para o elemento onde a data atual será exibida
var dataAtualElement = document.getElementById("dataAtual");

// Função para obter a data atual no formato dd/mm/aaaa
function getDataAtualFormatada() {
  var data = new Date();
  var dia = String(data.getDate()).padStart(2, "0");
  var mes = String(data.getMonth() + 1).padStart(2, "0");
  var ano = data.getFullYear();
  return dia + "/" + mes + "/" + ano;
}

// Preencher o elemento com a data atual formatada
dataAtualElement.textContent = getDataAtualFormatada();

//Exiber versos biblicos

var verseButtons = document.querySelectorAll(".show-verse");
verseButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    // Exibir o modal usando o Bootstrap JavaScript
    var targetModal = button.getAttribute("data-target");
    var modal = document.querySelector(targetModal);
    var bootstrapModal = new bootstrap.Modal(modal);
    bootstrapModal.show();
  });
});

//<!--Enviar respostas para contato do professor-->
// Adicione um event listener ao botão
document
  .getElementById("respostasButton")
  .addEventListener("click", function () {
    var apiWhatsapp = "https://api.whatsapp.com/send?phone=55XXXXXXXXXXX"; // Substitua XXXXXXXXXXX pelo número de telefone correto

    var nomeEstudante = document.getElementById("nomeEstudante").value;
    var nomeProfessor = document.getElementById("nomeProfessor").value;
    var contatoTelefonico = document.getElementById("contatoTelefonico").value;
    var estudoBiblico = document.getElementById("estudoBiblico").value;

    var respostas = "";
    respostas +=
      "Resposta 1: " + document.getElementById("resposta1").value + "\n";
    respostas +=
      "Resposta 21: " + document.getElementById("resposta21").value + "\n";
    respostas +=
      "Resposta 22: " + document.getElementById("resposta22").value + "\n";
    respostas +=
      "Resposta 4: " + document.getElementById("labelText01").value + "\n";
    respostas +=
      "Resposta 5: " + document.getElementById("labelText02").value + "\n";
    respostas +=
      "Resposta 6: " + document.getElementById("labelText03").value + "\n";
    respostas +=
      "Resposta 41: " + document.getElementById("resposta41").value + "\n";
    respostas +=
      "Resposta 42: " + document.getElementById("resposta42").value + "\n";
    respostas +=
      "Resposta 51: " + document.getElementById("resposta51").value + "\n";
    respostas +=
      "Resposta 52: " + document.getElementById("resposta52").value + "\n";
    respostas +=
      "Resposta 61: " + document.getElementById("resposta61").value + "\n";
    respostas +=
      "Resposta 62: " + document.getElementById("resposta62").value + "\n";
    respostas +=
      "Resposta 8: " + document.getElementById("resposta08").value + "\n";
    respostas +=
      "Resposta 9: " + document.getElementById("resposta09").value + "\n";
    respostas +=
      "Resposta 10.1: " + document.getElementById("resposta101").value + "\n";
    respostas +=
      "Resposta 10.2: " + document.getElementById("resposta102").value + "\n";
    respostas +=
      "Resposta drop-area1: " +
      document.getElementById("drop-area1").value +
      "\n";
    respostas +=
      "Resposta drop-area2: " +
      document.getElementById("drop-area2").value +
      "\n";
    respostas +=
      "Resposta drop-area3: " +
      document.getElementById("drop-area3").value +
      "\n";
    respostas +=
      "Resposta drop-area4: " +
      document.getElementById("drop-area4").value +
      "\n";
    respostas +=
      "Resposta drop-area5: " +
      document.getElementById("drop-area5").value +
      "\n";
    respostas +=
      "Resposta drop-area6: " +
      document.getElementById("drop-area6").value +
      "\n";
    respostas +=
      "Resposta drop-area7: " +
      document.getElementById("drop-area7").value +
      "\n";
    respostas +=
      "Resposta drop-area8: " +
      document.getElementById("drop-area8").value +
      "\n";
    respostas +=
      "Resposta flexCheck08: " +
      document.getElementById("flexCheck08").checked +
      "\n";
    respostas +=
      "Resposta flexCheck09: " +
      document.getElementById("flexCheck09").checked +
      "\n";
    respostas +=
      "Resposta flexCheck10: " + document.getElementById("flexCheck10").checked;

    var mensagem =
      'Olá, gostaria de participar do estudo bíblico "' +
      estudoBiblico +
      '".\n\n';
    mensagem += "Nome do Estudante: " + nomeEstudante + "\n";
    mensagem += "Nome do Professor: " + nomeProfessor + "\n";
    mensagem += "Contato Telefônico: " + contatoTelefonico + "\n\n";
    mensagem += "Respostas:\n" + respostas;

    var linkWhatsapp = apiWhatsapp + "&text=" + encodeURIComponent(mensagem);

    // Abre o link do WhatsApp em uma nova janela ou guia
    window.open(linkWhatsapp);
  });

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
  var duration = 5 * 1000;
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
  var end = Date.now() + 5 * 1000;

  // go Buckeyes!
  var colors = ["#bb0500", "#ffffff"];

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
  var duration = 3 * 1000;
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
      colors: ["#ffffff"],
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
    starsEffect();
    snowEffect();
  }
});

document.getElementById("flexCheck09").addEventListener("click", function () {
  if (this.checked) {
    fireworksEffect();
    schoolprideEffect();
    realisticlookEffect();
    starsEffect();
    snowEffect();
  }
});

document.getElementById("flexCheck10").addEventListener("click", function () {
  if (this.checked) {
    fireworksEffect();
    schoolprideEffect();
    realisticlookEffect();
    starsEffect();
    snowEffect();
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
