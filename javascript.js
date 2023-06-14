//Remove os acentos da string
function removerAcentos(texto) {
  return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

//Formata a string, sem nenhum espaço substituindo por "-",somente letras minuscula
function gerarSlug(texto) {
  var slug = removerAcentos(texto.toLowerCase()).replace(/[^a-z0-9]+/g, "-");
  return slug;
}

//Mascara para telefone
function mascaraTelefone(input) {
  input.value = input.value.replace(/[^\d()\-]/g, "");

  if (input.value.match(/[^\d()\-]/)) {
    alert("Digite somente números no campo de telefone.");
    input.value = input.value.replace(/[^\d()\-]/g, "");
  }
}

//Gera o link para enviar estudo
function gerarLink() {
  var nomeEstudoBiblico = gerarSlug(
    document.getElementById("nomeEstudoBiblico").value
  );
  var temaEstudoBiblico = gerarSlug(
    document.getElementById("temaEstudoBiblico").value
  );
  var nameProfessor = document.getElementById("nameProfessor").value;
  var nameEstudante = document.getElementById("nameEstudante").value;
  var contatoProfessor = document.getElementById("contatoProfessor").value;
  var contatoEstudante = document.getElementById("contatoEstudante").value;

  // Verificar se todos os campos estão preenchidos
  if (
    nomeEstudoBiblico &&
    temaEstudoBiblico &&
    nameProfessor &&
    nameEstudante &&
    contatoProfessor &&
    contatoEstudante
  ) {
    var linkBase = "https://otaviano07.github.io/aprendendomais/";

    var linkGerado =
      linkBase +
      nomeEstudoBiblico +
      "/" +
      temaEstudoBiblico +
      "/index.html" +
      "?nameProfessor=" +
      encodeURIComponent(nameProfessor) +
      "&contatoProfessor=" +
      contatoProfessor +
      "&nameEstudante=" +
      encodeURIComponent(nameEstudante) +
      "&contatoEstudante=" +
      contatoEstudante;

    document.getElementById("linkGerado").value = linkGerado;
    document.getElementById("url").value = linkGerado;
  } else {
    alert("Por favor, preencha todos os campos antes de gerar o link.");
  }
}
/*
function copiarLink() {
    var nomeEstudoBiblico = gerarSlug(
    document.getElementById("nomeEstudoBiblico").value
  );
  var temaEstudoBiblico = gerarSlug(
    document.getElementById("temaEstudoBiblico").value
  );
  var nameProfessor = document.getElementById("nameProfessor").value;
  var nameEstudante = document.getElementById("nameEstudante").value;
  var contatoProfessor = document.getElementById("contatoProfessor").value;
  var contatoEstudante = document.getElementById("contatoEstudante").value;

  // Verificar se todos os campos estão preenchidos
  if (
    nomeEstudoBiblico &&
    temaEstudoBiblico &&
    nameProfessor &&
    nameEstudante &&
    contatoProfessor &&
    contatoEstudante
  ) {
    var linkGerado = document.getElementById("linkGerado");
    linkGerado.select();
    linkGerado.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Link copiado para a área de transferência!");
  } else {
    alert("Por favor, preencha todos os campos antes de gerar o link.");
  }
}*/

const nomeSelect = document.getElementById("nomeEstudoBiblico");
const numeroSelect = document.getElementById("temaEstudoBiblico");
const numeroPorNome = {
  "Ouvindo a Voz de Deus": [
    "01 - A Bíblia Sagrada",
    "02 - A beleza da criação",
    "03 - A origem do mal",
    "04 - O plano da salvação",
    "05 - Fé, arrependimento e confissão",
    "06 - Sinais da volta de Cristo",
    "07 - A volta de Cristo",
    "08 - O Milênio",
    "09 - A verdade sobre a morte",
    "10 - A nova terra",
    "11 - Salvação pela graça",
    "12 - O Santuário",
    "13 - O Juízo",
    "14 - As leis na Bíblia",
    "15 - A Lei Moral",
    "16 - O mandamento esquecido",
    "17 - Do sábado para o domingo",
    "18 - Princípios de Saúde",
    "19 - O dom de profecia",
    "20 - O dízimo",
    "21 - As ofertas",
    "22 - A igreja verdadeira",
    "23 - O Batismo",
    "24 - Princípios de vida Cristã",
    "25 - Educação Cristã",
    "26 - Vida no Espírito",
    "27 - Ministério para Todos",
  ],
  "Ensinos de Jesus": [
    "01 - O que JESUS ensinou sobre as ESCRITURAS",
    "02 - O que JESUS ensinou sobre a SALVAÇÃO",
    "03 - O que JESUS ensinou sobre a SANTIFICAÇÃO",
    "04 - O que JESUS ensinou sobre o ESPÍRITO SANTO",
    "05 - O que JESUS ensinou sobre a ORAÇÃO",
    "06 - O que JESUS ensinou sobre o PERDÃO",
    "07 - O que JESUS ensinou sobre o DINHEIRO",
    "08 - O que JESUS ensinou sobre SUA VOLTA",
    "09 - O que JESUS ensinou sobre a MORTE",
    "10 - O que JESUS ensinou sobre a RESSURREIÇÃO",
    "11 - O que JESUS ensinou sobre o JUÍZO",
    "12 - O que JESUS ensinou sobre a LEI",
    "13 - O que JESUS ensinou sobre o SÁBADO",
    "14 - O que JESUS ensinou sobre a IGREJA",
    "15 - O que JESUS ensinou sobre os PROFETAS",
    "16 - O que JESUS ensinou sobre o BATISMO",
    "17 - O que JESUS ensinou sobre o CUIDADO COM O CORPO",
    "18 - O que JESUS ensinou sobre ritos e TRADIÇÕES",
  ],
};

nomeSelect.addEventListener("change", function () {
  const selectedNome = this.value;
  const numeros = numeroPorNome[selectedNome] || [];

  // Limpar as opções atuais do select
  numeroSelect.innerHTML = '<option value="">Selecione um tema</option>';

  // Adicionar as novas opções filtradas
  numeros.forEach(function (numero) {
    const option = document.createElement("option");
    option.value = numero;
    option.textContent = numero;
    numeroSelect.appendChild(option);
  });
});

//Encurtador de link
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

function updateUrl(shortUrl, longUrl) {
  var linkGeradoInput = document.getElementById("linkGerado");
  var urlInput = document.getElementById("url");

  linkGeradoInput.value = shortUrl;
  urlInput.value = longUrl;
}

function encurtarLink() {
  var nomeEstudoBiblico = gerarSlug(
    document.getElementById("nomeEstudoBiblico").value
  );
  var temaEstudoBiblico = gerarSlug(
    document.getElementById("temaEstudoBiblico").value
  );
  var nameProfessor = document.getElementById("nameProfessor").value;
  var nameEstudante = document.getElementById("nameEstudante").value;
  var contatoProfessor = document.getElementById("contatoProfessor").value;
  var contatoEstudante = document.getElementById("contatoEstudante").value;

  // Verificar se todos os campos estão preenchidos
  if (
    nomeEstudoBiblico &&
    temaEstudoBiblico &&
    nameProfessor &&
    nameEstudante &&
    contatoProfessor &&
    contatoEstudante
  ) {
    var urlInput = document.getElementById("url");
    var urlLongo = urlInput.value;

    shortenUrl(urlLongo).then(function (shortUrl) {
      updateUrl(shortUrl, urlLongo);
    });
    document.getElementById("url").value = "";
  } else {
    alert("Por favor, preencha todos os campos antes de gerar o link.");
  }
}

//Copia o link para outra area
function copiarLink() {
  var nomeEstudoBiblico = gerarSlug(
    document.getElementById("nomeEstudoBiblico").value
  );
  var temaEstudoBiblico = gerarSlug(
    document.getElementById("temaEstudoBiblico").value
  );
  var nameProfessor = document.getElementById("nameProfessor").value;
  var nameEstudante = document.getElementById("nameEstudante").value;
  var contatoProfessor = document.getElementById("contatoProfessor").value;
  var contatoEstudante = document.getElementById("contatoEstudante").value;

  // Verificar se todos os campos estão preenchidos
  if (
    nomeEstudoBiblico &&
    temaEstudoBiblico &&
    nameProfessor &&
    nameEstudante &&
    contatoProfessor &&
    contatoEstudante
  ) {
    var linkGeradoInput = document.getElementById("linkGerado");
    linkGeradoInput.select();

    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(linkGeradoInput.value)
        .then(function () {
          console.log("Link copiado com sucesso.");
        })
        .catch(function (error) {
          console.log("Erro ao copiar o link:", error);
        });
    } else {
      // Fallback para navegadores que não suportam a API Clipboard
      var tempInput = document.createElement("input");
      tempInput.value = linkGeradoInput.value;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
    }
  } else {
    alert("Por favor, preencha todos os campos antes de gerar o link.");
  }
}

//Envia a mensagem para o estudante pelo whatsapp
function enviarMensagemWhatsapp() {
  var nomeEstudoBiblico = gerarSlug(
    document.getElementById("nomeEstudoBiblico").value
  );
  var temaEstudoBiblico = gerarSlug(
    document.getElementById("temaEstudoBiblico").value
  );
  var nameProfessor = document.getElementById("nameProfessor").value;
  var nameEstudante = document.getElementById("nameEstudante").value;
  var contatoProfessor = document.getElementById("contatoProfessor").value;
  var contatoEstudante = document.getElementById("contatoEstudante").value;

  // Verificar se todos os campos estão preenchidos
  if (
    nomeEstudoBiblico &&
    temaEstudoBiblico &&
    nameProfessor &&
    nameEstudante &&
    contatoProfessor &&
    contatoEstudante
  ) {
    var numeroEstudante = document.getElementById("contatoEstudante").value;
    var linkGerado = document.getElementById("linkGerado").value;
    var mensagem = "Olá! Aqui está o link para o estudo: " + linkGerado;

    if (isDispositivoMobile()) {
      var url =
        "https://api.whatsapp.com/send?phone=55" +
        numeroEstudante +
        "&text=" +
        encodeURIComponent(mensagem);
    } else {
      var url =
        "https://web.whatsapp.com/send/?phone=55" +
        numeroEstudante +
        "&text=" +
        encodeURIComponent(mensagem);
    }

    window.open(url, "_blank");
  } else {
    alert("Por favor, preencha todos os campos antes de gerar o link.");
  }
}

//Verifica se é dispositivo mobile
function isDispositivoMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}


//Abrir Link gerado
function abrirLink() {
  var nomeEstudoBiblico = gerarSlug(
    document.getElementById("nomeEstudoBiblico").value
  );
  var temaEstudoBiblico = gerarSlug(
    document.getElementById("temaEstudoBiblico").value
  );
  var nameProfessor = document.getElementById("nameProfessor").value;
  var nameEstudante = document.getElementById("nameEstudante").value;
  var contatoProfessor = document.getElementById("contatoProfessor").value;
  var contatoEstudante = document.getElementById("contatoEstudante").value;

  // Verificar se todos os campos estão preenchidos
  if (
    nomeEstudoBiblico &&
    temaEstudoBiblico &&
    nameProfessor &&
    nameEstudante &&
    contatoProfessor &&
    contatoEstudante
  ) {
  var linkGerado = document.getElementById("linkGerado").value;
  window.open(linkGerado, "_blank");
} else {
  alert("Por favor, preencha todos os campos antes de gerar o link.");
}
}
