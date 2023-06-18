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
    var apiWhatsapp = "https://api.whatsapp.com/send?phone=55";

    var nomeEstudante = document.getElementById("nameEstudante").value;
    var nomeProfessor = document.getElementById("nameProfessor").value;
    var contantoProfessor = document.getElementById("whatsappProfessor").value;
    var estudoBiblico = "Ouvindo a Voz de Deus";
    var tema = "01 - A Bliblia Sagrada";

    var respostas1 = document.getElementById("resposta1").value;
    var respostas21 = document.getElementById("resposta21").value;
    var respostas22 = document.getElementById("resposta22").value;
    var respostas31 = document.getElementById("labelText01").value;
    var respostas32 = document.getElementById("labelText02").value;
    var respostas33 = document.getElementById("labelText03").value;
    var respostas34 = document.getElementById("labelText04").value;
    var respostas41 = document.getElementById("resposta41").value;
    var respostas42 = document.getElementById("resposta42").value;
    var respostas51 = document.getElementById("resposta51").value;
    var respostas52 = document.getElementById("resposta52").value;
    var respostas61 = document.getElementById("resposta61").value;
    var respostas62 = document.getElementById("resposta62").value;
    var respostas71 = document.getElementById("labelText05").value;
    var respostas72 = document.getElementById("labelText06").value;
    var respostas73 = document.getElementById("labelText07").value;
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

    var linkWhatsapp =
      apiWhatsapp + contantoProfessor + "&text=" + encodeURIComponent(mensagem);

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

// Preenchimento dos campos do formulário
document.getElementById("whatsappProfessor").value = contatoProfessor;
document.getElementById("nameProfessor").value = nomeProfessor;
document.getElementById("whatsappEstudante").value = contatoEstudante;
document.getElementById("nameEstudante").value = nomeEstudante;

var utterance = null; // Variável global para controlar a síntese de fala
var isPlaying = false; // Variável para controlar o estado de reprodução
var isPaused = false; // Variável para controlar o estado de pausa
var audioPosition = 0; // Variável para armazenar a posição de reprodução

function alternarAudio(versiculoId) {
  var btnOuvirTexto = document.getElementById("btnOuvirTexto");
  var icone = document.getElementById("iconeAudio");

  if (!isPlaying) {
    // Iniciar a reprodução de áudio ou retomar de onde parou
    if (isPaused) {
      retomarVersiculo();
    } else {
      lerVersiculo(versiculoId);
    }
    icone.textContent = "volume_off"; // Alterar o ícone para volume_off
    btnOuvirTexto.classList.remove("btn-primary");
    btnOuvirTexto.classList.add("btn-danger"); // Alterar a classe do botão para btn-danger
  } else {
    // Pausar a reprodução de áudio
    pausarVersiculo();
    icone.textContent = "volume_up"; // Alterar o ícone para volume_on
    btnOuvirTexto.classList.remove("btn-danger");
    btnOuvirTexto.classList.add("btn-primary"); // Alterar a classe do botão para btn-primary
  }

  isPlaying = !isPlaying; // Alternar o estado de reprodução
  isPaused = !isPlaying; // Alternar o estado de pausa
}

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
  speechSynthesis.onvoiceschanged = function () {
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
  };
}

function pausarVersiculo() {
  if (utterance && speechSynthesis.speaking) {
    // Pausa a síntese de fala
    speechSynthesis.pause();
    // Atualize a variável 'audioPosition' com a posição de pausa
    audioPosition = speechSynthesis.resume();
  }
  isPaused = true; // Define o estado de pausa como true
}

function retomarVersiculo() {
  if (utterance && speechSynthesis.paused) {
    // Retoma a síntese de fala
    speechSynthesis.resume();
    // Atualize a variável 'audioPosition' com a posição atual
    audioPosition = speechSynthesis.resume();
  }
  isPaused = false; // Define o estado de pausa como false
}
