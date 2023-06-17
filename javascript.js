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

function verificarNumeroWhatsapp() {
  const telProfessor = document.getElementById("contatoProfessor");
  const mensagemErroProfessor = document.getElementById(
    "mensagemErroProfessor"
  );

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

function verificarTelefone() {
  const telEstudante = document.getElementById("contatoEstudante");
  const mensagemErroEstudante = document.getElementById(
    "mensagemErroEstudante"
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

  // Verificar se todos os campos estão marcados como "is-valid"
  var camposValidos =
    document
      .getElementById("nomeEstudoBiblico")
      .classList.contains("is-valid") &&
    document
      .getElementById("temaEstudoBiblico")
      .classList.contains("is-valid") &&
    document.getElementById("nameProfessor").classList.contains("is-valid") &&
    document.getElementById("nameEstudante").classList.contains("is-valid") &&
    document
      .getElementById("contatoProfessor")
      .classList.contains("is-valid") &&
    document
      .getElementById("contatoEstudante")
      .classList.contains("is-valid") &&
    document.getElementById("linkGerado").classList.contains("is-valid");

  if (camposValidos) {
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
        "/?nameProfessor=" +
        encodeURIComponent(nameProfessor) +
        "&contatoProfessor=" +
        contatoProfessor +
        "&nameEstudante=" +
        encodeURIComponent(nameEstudante) +
        "&contatoEstudante=" +
        contatoEstudante;

      document.getElementById("linkGerado").value = linkGerado;
      document.getElementById("url").value = linkGerado;
    }
  } else {
    alert("Por favor, preencha todos os campos antes de gerar o link.");
  }
}

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
  var linkGerado = document.getElementById("linkGerado").value;

  // Verificar se todos os campos estão marcados como "is-valid"
  var camposValidos =
    document
      .getElementById("nomeEstudoBiblico")
      .classList.contains("is-valid") &&
    document
      .getElementById("temaEstudoBiblico")
      .classList.contains("is-valid") &&
    document.getElementById("nameProfessor").classList.contains("is-valid") &&
    document.getElementById("nameEstudante").classList.contains("is-valid") &&
    document
      .getElementById("contatoProfessor")
      .classList.contains("is-valid") &&
    document
      .getElementById("contatoEstudante")
      .classList.contains("is-valid") &&
    document.getElementById("linkGerado").classList.contains("is-valid");

  if (camposValidos) {
    // Verificar se todos os campos estão preenchidos
    if (
      nomeEstudoBiblico &&
      temaEstudoBiblico &&
      nameProfessor &&
      nameEstudante &&
      contatoProfessor &&
      contatoEstudante &&
      linkGerado
    ) {
      var urlInput = document.getElementById("url");
      var urlLongo = urlInput.value;

      shortenUrl(urlLongo).then(function (shortUrl) {
        updateUrl(shortUrl, urlLongo);
      });
      document.getElementById("url").value = "";
    }
  } else {
    alert(
      "Por favor, preencha todos os campos antes de gerar o link. Para depois clicar em Gerar Link."
    );
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
  var linkGerado = document.getElementById("linkGerado").value;

  // Verificar se todos os campos estão marcados como "is-valid"
  var camposValidos =
    document
      .getElementById("nomeEstudoBiblico")
      .classList.contains("is-valid") &&
    document
      .getElementById("temaEstudoBiblico")
      .classList.contains("is-valid") &&
    document.getElementById("nameProfessor").classList.contains("is-valid") &&
    document.getElementById("nameEstudante").classList.contains("is-valid") &&
    document
      .getElementById("contatoProfessor")
      .classList.contains("is-valid") &&
    document
      .getElementById("contatoEstudante")
      .classList.contains("is-valid") &&
    document.getElementById("linkGerado").classList.contains("is-valid");

  if (camposValidos) {
    // Verificar se todos os campos estão preenchidos
    if (
      nomeEstudoBiblico &&
      temaEstudoBiblico &&
      nameProfessor &&
      nameEstudante &&
      contatoProfessor &&
      contatoEstudante &&
      linkGerado
    ) {
      var linkGeradoInput = document.getElementById("linkGerado");
      linkGeradoInput.select();

      if (navigator.clipboard) {
        navigator.clipboard
          .writeText(linkGeradoInput.value)
          .then(function () {
            console.log("Link copiado com sucesso.");
            exibirMensagemInstantanea();
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
        exibirMensagemInstantanea();
      }
    }
  } else {
    alert(
      "Por favor, preencha todos os campos antes de gerar o link. Para depois clicar em Gerar Link."
    );
  }
}

function exibirMensagemInstantanea() {
  var mensagemInstantanea = document.querySelector(".message-instant");
  mensagemInstantanea.style.display = "inline";
  setTimeout(function () {
    mensagemInstantanea.style.display = "none";
  }, 2000); // Exibe a mensagem por 2 segundos
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
  var linkGerado = document.getElementById("linkGerado").value;

  // Verificar se todos os campos estão marcados como "is-valid"
  var camposValidos =
    document
      .getElementById("nomeEstudoBiblico")
      .classList.contains("is-valid") &&
    document
      .getElementById("temaEstudoBiblico")
      .classList.contains("is-valid") &&
    document.getElementById("nameProfessor").classList.contains("is-valid") &&
    document.getElementById("nameEstudante").classList.contains("is-valid") &&
    document
      .getElementById("contatoProfessor")
      .classList.contains("is-valid") &&
    document
      .getElementById("contatoEstudante")
      .classList.contains("is-valid") &&
    document.getElementById("linkGerado").classList.contains("is-valid");

  if (camposValidos) {
    // Verificar se todos os campos estão preenchidos
    if (
      nomeEstudoBiblico &&
      temaEstudoBiblico &&
      nameProfessor &&
      nameEstudante &&
      contatoProfessor &&
      contatoEstudante &&
      linkGerado
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
    }
  } else {
    alert(
      "Por favor, preencha todos os campos antes de gerar o link. Para depois clicar em Gerar Link"
    );
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
  var linkGerado = document.getElementById("linkGerado").value;

  // Verificar se todos os campos estão marcados como "is-valid"
  var camposValidos =
    document
      .getElementById("nomeEstudoBiblico")
      .classList.contains("is-valid") &&
    document
      .getElementById("temaEstudoBiblico")
      .classList.contains("is-valid") &&
    document.getElementById("nameProfessor").classList.contains("is-valid") &&
    document.getElementById("nameEstudante").classList.contains("is-valid") &&
    document
      .getElementById("contatoProfessor")
      .classList.contains("is-valid") &&
    document
      .getElementById("contatoEstudante")
      .classList.contains("is-valid") &&
    document.getElementById("linkGerado").classList.contains("is-valid");

  if (camposValidos) {
    // Verificar se todos os campos estão preenchidos
    if (
      nomeEstudoBiblico &&
      temaEstudoBiblico &&
      nameProfessor &&
      nameEstudante &&
      contatoProfessor &&
      contatoEstudante &&
      linkGerado
    ) {
      var linkGerado = document.getElementById("linkGerado").value;
      window.open(linkGerado, "_blank");
    }
  } else {
    alert(
      "Por favor, preencha todos os campos antes de gerar o link. Para depois clicar em Gerar Link."
    );
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Selecionar todos os campos de entrada
  var camposEntrada = document.querySelectorAll("input, select");

  // Adicionar evento input a cada campo de entrada
  camposEntrada.forEach(function (campo) {
    campo.addEventListener("input", verificarCampos);
  });
});

function verificarCampos() {
  var nomeEstudoBiblico = document.getElementById("nomeEstudoBiblico");
  var temaEstudoBiblico = document.getElementById("temaEstudoBiblico");
  var nameProfessor = document.getElementById("nameProfessor");
  var contatoProfessor = document.getElementById("contatoProfessor");
  var nameEstudante = document.getElementById("nameEstudante");
  var contatoEstudante = document.getElementById("contatoEstudante");

  if (nomeEstudoBiblico.value === "") {
    nomeEstudoBiblico.classList.remove("is-valid");
    nomeEstudoBiblico.classList.add("is-invalid");
  } else {
    nomeEstudoBiblico.classList.remove("is-invalid");
    nomeEstudoBiblico.classList.add("is-valid");
  }

  if (temaEstudoBiblico.value === "") {
    temaEstudoBiblico.classList.remove("is-valid");
    temaEstudoBiblico.classList.add("is-invalid");
  } else {
    temaEstudoBiblico.classList.remove("is-invalid");
    temaEstudoBiblico.classList.add("is-valid");
  }

  if (nameProfessor.value === "") {
    nameProfessor.classList.remove("is-valid");
    nameProfessor.classList.add("is-invalid");
  } else {
    nameProfessor.classList.remove("is-invalid");
    nameProfessor.classList.add("is-valid");
  }

  if (contatoProfessor.value === "") {
    contatoProfessor.classList.remove("is-valid");
    contatoProfessor.classList.add("is-invalid");
  } else {
    contatoProfessor.classList.remove("is-invalid");
    contatoProfessor.classList.add("is-valid");
  }

  if (nameEstudante.value === "") {
    nameEstudante.classList.remove("is-valid");
    nameEstudante.classList.add("is-invalid");
  } else {
    nameEstudante.classList.remove("is-invalid");
    nameEstudante.classList.add("is-valid");
  }

  if (contatoEstudante.value === "") {
    contatoEstudante.classList.remove("is-valid");
    contatoEstudante.classList.add("is-invalid");
  } else {
    contatoEstudante.classList.remove("is-invalid");
    contatoEstudante.classList.add("is-valid");
  }
}
