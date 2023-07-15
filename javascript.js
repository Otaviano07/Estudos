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
  // Remove todos os caracteres não numéricos, exceto parênteses e hífens
  input.value = input.value.replace(/[^\d()\-]/g, "");

  // Verifica se há caracteres não numéricos após a remoção
  if (input.value.match(/[^\d()\-]/)) {
    alert("Digite somente números no campo de telefone.");
    input.value = input.value.replace(/[^\d()\-]/g, "");
  }
}

/* Máscaras ER */
function mascara(o, f) {
  v_obj = o;
  v_fun = f;
  setTimeout("execmascara()", 1);
}

function execmascara() {
  v_obj.value = v_fun(v_obj.value);
  validarDDD(v_obj.value);
  verificarTelefone()
}

function mtel(v) {
  v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito
  v = v.replace(/^(\d{2})(\d)/g, "($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
  v = v.replace(/(\d)(\d{4})$/, "$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
  return v;
}

function id(el) {
  return document.getElementById(el);
}

window.onload = function () {
  id("whatsappEstudante").onkeyup = function () {
    mascara(this, mtel);
  };
  id("whatsappProfessor").onkeyup = function () {
    mascara(this, mtel);
  };
};

function mascaraNome(input) {
  // Remove todos os caracteres não alfabéticos
  input.value = input.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, "");

  // Verifica se há caracteres não alfabéticos após a remoção
  if (input.value.match(/[^a-zA-ZÀ-ÿ\s]/)) {
    alert("Digite somente letras no campo de nome.");
    input.value = input.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, "");
  }
}

//Verificar numero de whatsapp
function validarDDD(telefone) {
  const dddsValidos = [
    "(11) 9", // São Paulo (SP)
    "(12) 9", // São José dos Campos e Região (SP)
    "(13) 9", // Baixada Santista (SP)
    "(14) 9", // Bauru e Região (SP)
    "(15) 9", // Sorocaba e Região (SP)
    "(16) 9", // Ribeirão Preto e Região (SP)
    "(17) 9", // São José do Rio Preto e Região (SP)
    "(18) 9", // Presidente Prudente e Região (SP)
    "(19) 9", // Campinas e Região (SP)
    "(21) 9", // Rio de Janeiro (RJ)
    "(22) 9", // Norte Fluminense (RJ)
    "(24) 9", // Serrana e Região (RJ)
    "(27) 9", // Espírito Santo (ES)
    "(28) 9", // Sul do Espírito Santo (ES)
    "(31) 9", // Belo Horizonte e Região (MG)
    "(32) 9", // Juiz de Fora e Região (MG)
    "(33) 9", // Governador Valadares e Região (MG)
    "(34) 9", // Uberlândia e Região (MG)
    "(35) 9", // Poços de Caldas e Região (MG)
    "(37) 9", // Divinópolis e Região (MG)
    "(38) 9", // Montes Claros e Região (MG)
    "(41) 9", // Curitiba e Região (PR)
    "(42) 9", // Ponta Grossa e Região (PR)
    "(43) 9", // Londrina e Região (PR)
    "(44) 9", // Maringá e Região (PR)
    "(45) 9", // Foz do Iguaçu e Região (PR)
    "(46) 9", // Francisco Beltrão e Região (PR)
    "(47) 9", // Joinville e Região (SC)
    "(48) 9", // Florianópolis e Região (SC)
    "(49) 9", // Chapecó e Região (SC)
    "(51) 9", // Porto Alegre e Região (RS)
    "(53) 9", // Pelotas e Região (RS)
    "(54) 9", // Caxias do Sul e Região (RS)
    "(55) 9", // Santa Maria e Região (RS)
    "(61) 9", // Distrito Federal (DF)
    "(62) 9", // Goiânia e Região (GO)
    "(63) 9", // Tocantins (TO)
    "(64) 9", // Rio Verde e Região (GO)
    "(65) 9", // Cuiabá e Região (MT)
    "(66) 9", // Rondonópolis e Região (MT)
    "(67) 9", // Mato Grosso do Sul (MS)
    "(68) 9", // Amapá (AP)
    "(69) 9", // Rondônia (RO)
    "(71) 9", // Salvador e Região (BA)
    "(73) 9", // Sul da Bahia (BA)
    "(74) 9", // Juazeiro e Região (BA)
    "(75) 9", // Feira de Santana e Região (BA)
    "(76) 9", // Rondônia e Região (RO)
    "(77) 9", // Barreiras e Região (BA)
    "(78) 9", // Tocantins (TO)
    "(81) 9", // Recife e Região (PE)
    "(82) 9", // Alagoas (AL)
    "(83) 9", // Paraíba (PB)
    "(84) 9", // Rio Grande do Norte (RN)
    "(85) 9", // Fortaleza e Região (CE)
    "(86) 9", // Piauí (PI)
    "(87) 9", // Petrolina e Região (PE)
    "(88) 9", // Ceará (CE)
    "(89) 9", // Sudoeste do Piauí (PI)
    "(91) 9", // Belém e Região (PA)
    "(92) 9", // Amazonas (AM)
    "(93) 9", // Oeste do Pará (PA)
    "(94) 9", // Marabá e Região (PA)
    "(95) 9", // Roraima (RR)
    "(96) 9", // Amapá (AP)
    "(97) 9", // Roraima e Região (RR)
    "(98) 9", // Maranhão (MA)
    "(99) 9", // Sul do Maranhão (MA)
  ];

  const dddTelefone = telefone.substring(0, 6);

  if (dddsValidos.includes(dddTelefone)) {
    return true;
  } else {
    return false;
  }
}

function verificarTelefone() {
  const telProfessor = document.getElementById("whatsappProfessor");
  const telEstudante = document.getElementById("whatsappEstudante");

  if (telProfessor.value.length > 0 && validarDDD(telProfessor.value)) {
    if (telProfessor.value.length < 15) {
      telProfessor.classList.remove("is-valid");
      telProfessor.classList.add("is-invalid");
    } else {
      telProfessor.classList.remove("is-invalid");
      telProfessor.classList.add("is-valid");
    }
  } else {
    telProfessor.classList.remove("is-valid");
    telProfessor.classList.add("is-invalid");
  }

  if (telEstudante.value.length > 0 && validarDDD(telEstudante.value)) {
    if (telEstudante.value.length < 15) {
      telEstudante.classList.remove("is-valid");
      telEstudante.classList.add("is-invalid");
    } else {
      telEstudante.classList.remove("is-invalid");
      telEstudante.classList.add("is-valid");
    }
  } else {
    telEstudante.classList.remove("is-valid");
    telEstudante.classList.add("is-invalid");
  }
}

function verificarNome() {
  const nameEstudante = document.getElementById("nameEstudante");
  const nameProfessor = document.getElementById("nameProfessor");

  if (nameEstudante.value.length > 0) {
    if (nameEstudante.value.length < 5) {
      nameEstudante.classList.remove("is-valid");
      nameEstudante.classList.add("is-invalid");
    } else {
      nameEstudante.classList.remove("is-invalid");
      nameEstudante.classList.add("is-valid");
    }
  }

  if (nameProfessor.value.length > 0) {
    if (nameProfessor.value.length < 5) {
      nameProfessor.classList.remove("is-valid");
      nameProfessor.classList.add("is-invalid");
    } else {
      nameProfessor.classList.remove("is-invalid");
      nameProfessor.classList.add("is-valid");
    }
  }
}

//Gera o link para enviar estudo
function gerandoLink() {
  var linkGeradoInput = document.getElementById("linkGerado");
  var nameEstudoBiblico = gerarSlug(document.getElementById("nameEstudoBiblico").value);
  var temaEstudoBiblico = gerarSlug(document.getElementById("temaEstudoBiblico").value);
  var nameProfessor = document.getElementById("nameProfessor").value;
  var nameEstudante = document.getElementById("nameEstudante").value;
  var whatsappProfessor = document.getElementById("whatsappProfessor").value;
  var whatsappEstudante = document.getElementById("whatsappEstudante").value;

  // Verificar se todos os campos estão marcados como "is-valid"
  var camposValidos =
    document.getElementById("nameEstudoBiblico").classList.contains("is-valid") &&
    document.getElementById("temaEstudoBiblico").classList.contains("is-valid") &&
    document.getElementById("nameProfessor").classList.contains("is-valid") &&
    document.getElementById("nameEstudante").classList.contains("is-valid") &&
    document.getElementById("whatsappProfessor").classList.contains("is-valid") &&
    document.getElementById("whatsappEstudante").classList.contains("is-valid");

    console.log(camposValidos);

  if (camposValidos) {
    // Verificar se todos os campos estão preenchidos
    if (
      nameEstudoBiblico &&
      temaEstudoBiblico &&
      nameProfessor &&
      nameEstudante &&
      whatsappProfessor &&
      whatsappEstudante
    ) {
      var linkBase = "https://otaviano07.github.io/estudos/estudandoaverdade/";

      var linkGerado =
        linkBase +
        nameEstudoBiblico +
        "/" +
        temaEstudoBiblico +
        "/index.html?nameProfessor=" +
        encodeURIComponent(nameProfessor) +
        "&whatsappProfessor=" +
        whatsappProfessor +
        "&nameEstudante=" +
        encodeURIComponent(nameEstudante) +
        "&whatsappEstudante=" +
        whatsappEstudante;

      document.getElementById("linkGerado").value = linkGerado;
      document.getElementById("url").value = linkGerado;
      linkGeradoInput.classList.remove("is-invalid");
      linkGeradoInput.classList.add("is-valid");
      atualizarProgresso();
    }
  } else {
    alert("Por favor, preencha todos os campos antes de Gerar o link.");
  }
}



window.addEventListener("DOMContentLoaded", function () {
  const nomeSelect = document.getElementById("nameEstudoBiblico");
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
});


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

function updateUrl(shortUrl, longUrl) {
  var linkGeradoInput = document.getElementById("linkGerado");
  var urlInput = document.getElementById("url");

  linkGeradoInput.value = shortUrl;
  urlInput.value = longUrl;
}

function encurtarLink() {
  var linkGeradoInput = document.getElementById("linkGerado");
  var nameEstudoBiblico = gerarSlug( document.getElementById("nameEstudoBiblico").value);
  var temaEstudoBiblico = gerarSlug(document.getElementById("temaEstudoBiblico").value);
  var nameProfessor = document.getElementById("nameProfessor").value;
  var nameEstudante = document.getElementById("nameEstudante").value;
  var whatsappProfessor = document.getElementById("whatsappProfessor").value;
  var whatsappEstudante = document.getElementById("whatsappEstudante").value;

  // Verificar se todos os campos estão marcados como "is-valid"
  var camposValidos =
    document.getElementById("nameEstudoBiblico").classList.contains("is-valid") &&
    document.getElementById("temaEstudoBiblico").classList.contains("is-valid") &&
    document.getElementById("nameProfessor").classList.contains("is-valid") &&
    document.getElementById("nameEstudante").classList.contains("is-valid") &&
    document.getElementById("whatsappProfessor").classList.contains("is-valid") &&
    document.getElementById("whatsappEstudante").classList.contains("is-valid") &&
    document.getElementById("linkGerado").classList.contains("is-valid");

  if (camposValidos) {
    // Verificar se todos os campos estão preenchidos
    if (
      nameEstudoBiblico &&
      temaEstudoBiblico &&
      nameProfessor &&
      nameEstudante &&
      whatsappProfessor &&
      whatsappEstudante &&
      linkGeradoInput
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
      "Por favor, preencha todos os campos antes de encurtar o link. Para depois clicar em Gerar e Encurtart Link."
    );
  }
}

//Copia o link para outra area
function copiarLink() {
  var nameEstudoBiblico = gerarSlug(document.getElementById("nameEstudoBiblico").value);
  var temaEstudoBiblico = gerarSlug(document.getElementById("temaEstudoBiblico").value);
  var nameProfessor = document.getElementById("nameProfessor").value;
  var nameEstudante = document.getElementById("nameEstudante").value;
  var whatsappProfessor = document.getElementById("whatsappProfessor").value;
  var whatsappEstudante = document.getElementById("whatsappEstudante").value;
  var linkGeradoInput = document.getElementById("linkGerado");

  // Verificar se todos os campos estão marcados como "is-valid"
  var camposValidos =
    document.getElementById("nameEstudoBiblico").classList.contains("is-valid") &&
    document.getElementById("temaEstudoBiblico").classList.contains("is-valid") &&
    document.getElementById("nameProfessor").classList.contains("is-valid") &&
    document.getElementById("nameEstudante").classList.contains("is-valid") &&
    document.getElementById("whatsappProfessor").classList.contains("is-valid") &&
    document.getElementById("whatsappEstudante").classList.contains("is-valid") &&
    document.getElementById("linkGerado").classList.contains("is-valid");

  if (camposValidos) {
    // Verificar se todos os campos estão preenchidos
    if (
      nameEstudoBiblico &&
      temaEstudoBiblico &&
      nameProfessor &&
      nameEstudante &&
      whatsappProfessor &&
      whatsappEstudante &&
      linkGeradoInput
    ) {
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
      "Por favor, preencha todos os campos antes de copiar o link. Para depois clicar em Gerar e Copiar Link."
    );
  }
}

// Função para mostrar a mensagem e agendar o desaparecimento
function exibirMensagemInstantanea() {
  var mensagemCopiado = document.getElementById("mensagemCopiado");
  mensagemCopiado.classList.add("show");

  setTimeout(function () {
    mensagemCopiado.classList.remove("show");
  }, 2000); // 2000 milissegundos = 2 segundos
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

//Envia a mensagem para o estudante pelo whatsapp
function enviarMensagemWhatsapp() {
  var nameEstudoBiblico = gerarSlug(document.getElementById("nameEstudoBiblico").value);
  var temaEstudoBiblico = gerarSlug(document.getElementById("temaEstudoBiblico").value);
  var nameProfessor = document.getElementById("nameProfessor").value;
  var nameEstudante = document.getElementById("nameEstudante").value;
  var whatsappProfessor = document.getElementById("whatsappProfessor").value;
  var whatsappEstudante = document.getElementById("whatsappEstudante").value;
  var linkGeradoInput = document.getElementById("linkGerado").value;

  // Verificar se todos os campos estão marcados como "is-valid"
  var camposValidos =
    document.getElementById("nameEstudoBiblico").classList.contains("is-valid") &&
    document.getElementById("temaEstudoBiblico").classList.contains("is-valid") &&
    document.getElementById("nameProfessor").classList.contains("is-valid") &&
    document.getElementById("nameEstudante").classList.contains("is-valid") &&
    document.getElementById("whatsappProfessor").classList.contains("is-valid") &&
    document.getElementById("whatsappEstudante").classList.contains("is-valid") &&
    document.getElementById("linkGerado").classList.contains("is-valid");

  if (camposValidos) {
    // Verificar se todos os campos estão preenchidos
    if (
      nameEstudoBiblico &&
      temaEstudoBiblico &&
      nameProfessor &&
      nameEstudante &&
      whatsappProfessor &&
      whatsappEstudante &&
      linkGeradoInput
    ) {
      nameEstudoBiblico = formatarTexto(nameEstudoBiblico);
      temaEstudoBiblico = formatarTexto(temaEstudoBiblico);

      var numeroEstudante = document.getElementById("whatsappEstudante").value;
      var linkGerado = document.getElementById("linkGerado").value;
      var mensagem =
        "Olá! *" +
        nameEstudante +
        "* segue abaixo link para o estudo *" +
        nameEstudoBiblico +
        "* com o tema *" +
        temaEstudoBiblico +
        "*:\n\n*_Clique aqui_*:👉 " +
        linkGerado +
        "\n\nAtenciosamente\n" +
        nameProfessor;

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
      "Por favor, preencha todos os campos antes de enviar mensagem para o Whatsapp. Para depois clicar em Gerar Link"
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
  var nameEstudoBiblico = gerarSlug(document.getElementById("nameEstudoBiblico").value);
  var temaEstudoBiblico = gerarSlug(document.getElementById("temaEstudoBiblico").value);
  var nameProfessor = document.getElementById("nameProfessor").value;
  var nameEstudante = document.getElementById("nameEstudante").value;
  var whatsappProfessor = document.getElementById("whatsappProfessor").value;
  var whatsappEstudante = document.getElementById("whatsappEstudante").value;
  var linkGeradoInput = document.getElementById("linkGerado").value;

  // Verificar se todos os campos estão marcados como "is-valid"
  var camposValidos =
    document.getElementById("nameEstudoBiblico").classList.contains("is-valid") &&
    document.getElementById("temaEstudoBiblico").classList.contains("is-valid") &&
    document.getElementById("nameProfessor").classList.contains("is-valid") &&
    document.getElementById("nameEstudante").classList.contains("is-valid") &&
    document.getElementById("whatsappProfessor").classList.contains("is-valid") &&
    document.getElementById("whatsappEstudante").classList.contains("is-valid") &&
    document.getElementById("linkGerado").classList.contains("is-valid");

  if (camposValidos) {
    // Verificar se todos os campos estão preenchidos
    if (
      nameEstudoBiblico&&
      temaEstudoBiblico &&
      nameProfessor &&
      nameEstudante &&
      whatsappProfessor &&
      whatsappEstudante &&
      linkGeradoInput
    ) {
      var linkGerado = document.getElementById("linkGerado").value;
      window.open(linkGerado, "_blank");
    }
  } else {
    alert(
      "Por favor, preencha todos os campos antes de abrir o link. Para depois clicar em Gerar e Abrir Link."
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
  var nameEstudoBiblico = document.getElementById("nameEstudoBiblico");
  var temaEstudoBiblico = document.getElementById("temaEstudoBiblico");
  var nameProfessor = document.getElementById("nameProfessor");
  var whatsappProfessor = document.getElementById("whatsappProfessor");
  var nameEstudante = document.getElementById("nameEstudante");
  var whatsappEstudante = document.getElementById("whatsappEstudante");
  var linkGeradoInput = document.getElementById("linkGerado");

  if (nameEstudoBiblico.value === "") {
    nameEstudoBiblico.classList.remove("is-valid");
    nameEstudoBiblico.classList.add("is-invalid");
  } else {
    nameEstudoBiblico.classList.remove("is-invalid");
    nameEstudoBiblico.classList.add("is-valid");
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

  if (whatsappProfessor.value === "") {
    whatsappProfessor.classList.remove("is-valid");
    whatsappProfessor.classList.add("is-invalid");
  } else {
    whatsappProfessor.classList.remove("is-invalid");
    whatsappProfessor.classList.add("is-valid");
  }

  if (nameEstudante.value === "") {
    nameEstudante.classList.remove("is-valid");
    nameEstudante.classList.add("is-invalid");
  } else {
    nameEstudante.classList.remove("is-invalid");
    nameEstudante.classList.add("is-valid");
  }

  if (whatsappEstudante.value === "") {
    whatsappEstudante.classList.remove("is-valid");
    whatsappEstudante.classList.add("is-invalid");
  } else {
    whatsappEstudante.classList.remove("is-invalid");
    whatsappEstudante.classList.add("is-valid");
  }

  if (linkGeradoInput.value === "") {
    linkGeradoInput.classList.remove("is-valid");
    linkGeradoInput.classList.add("is-invalid");
  } else {
    linkGeradoInput.classList.remove("is-invalid");
    linkGeradoInput.classList.add("is-valid");
  }
}

// Função para atualizar o progresso
function atualizarProgresso() {
  var elementosValidos = document.querySelectorAll(".is-valid");
  var nameEstudoBiblico= document.getElementById("nameEstudoBiblico").classList.contains("is-invalid");
  var temaEstudoBiblico = document.getElementById("temaEstudoBiblico").classList.contains("is-valid");
  var nameProfessor = document.getElementById("nameProfessor").classList.contains("is-valid");
  var nameEstudante = document.getElementById("nameEstudante").classList.contains("is-valid");
  var whatsappProfessor = document.getElementById("whatsappProfessor").classList.contains("is-valid");
  var whatsappEstudante = document.getElementById("whatsappEstudante").classList.contains("is-valid");

  var progresso = (elementosValidos.length / 7) * 100; // Total de elementos válidos dividido pelo número total de elementos
  // Atualizar a largura da barra de progresso
  var progressBar = document.querySelector(".progress-bar");
  progressBar.style.width = progresso + "%";
  progressBar.textContent = progresso.toFixed(2) + "%";

  // Atualizar o atributo 'aria-valuenow' para a leitura de acessibilidade
  var progress = document.querySelector(".progress");
  progress.setAttribute("aria-valuenow", progresso);

  // Verificar se algum campo voltou a ser inválido
  if (
    !nameEstudoBiblico ||
    !temaEstudoBiblico ||
    !nameEstudante ||
    !nameProfessor ||
    !whatsappEstudante ||
    !whatsappProfessor
  ) {
    // Recalcular o valor da barra de progresso excluindo o campo inválido
    progresso = (elementosValidos.length / 7) * 100;

    if (progresso < 0) {
      progresso = 0;
    }

    progressBar.style.width = progresso + "%";
    progressBar.textContent = progresso.toFixed(2) + "%";
  }
}

// Event listener para verificar mudanças nos elementos válidos
document.addEventListener("input", function (event) {
  var target = event.target;
  var elementosValidos = document.querySelectorAll(".is-valid");
  var linkGeradoInput = document.getElementById("linkGerado");

  // Verificar se o elemento é válido
  if (target.classList.contains("is-valid")) {
    if (elementosValidos.length < 7) {
      atualizarProgresso();
      verificarCampos();
    }
  } else {
    linkGeradoInput.value = "";
    var progress = document.querySelector(".progress");
    progress.setAttribute("aria-valuenow", progresso);

    var progresso = (elementosValidos.length / 7) * 100;

    if (progresso < 0) {
      progresso = 0;
    }

    var progressBar = document.querySelector(".progress-bar");
    progressBar.style.width = progresso + "%";
    progressBar.textContent = progresso.toFixed(2) + "%";
  }
});

window.addEventListener("DOMContentLoaded", function () {
  document.getElementById("btnReset").addEventListener("click", function () {
    var elementosValidos = document.querySelectorAll(".is-valid");
    elementosValidos.forEach(function (elemento) {
      elemento.classList.remove("is-valid");
      elemento.classList.add("is-invalid");
      atualizarProgresso();
    });
  });
});

window.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("input", function (event) {
    if (
      document
        .getElementById("nameEstudoBiblico")
        .classList.contains("is-valid")
    ) {
      console.log("nameEstudoBiblico = " + true);
    }
    if (
      document
        .getElementById("temaEstudoBiblico")
        .classList.contains("is-valid")
    ) {
      console.log("temaEstudoBiblico = " + true);
    }
    if (
      document.getElementById("nameProfessor").classList.contains("is-valid")
    ) {
      console.log("nameProfessor = " + true);
    }
    if (
      document.getElementById("nameEstudante").classList.contains("is-valid")
    ) {
      console.log("nameEstudante = " + true);
    }
    if (
      document
        .getElementById("whatsappProfessor")
        .classList.contains("is-valid")
    ) {
      console.log("whatsappProfessor = " + true);
    }
    if (
      document
        .getElementById("whatsappEstudante")
        .classList.contains("is-valid")
    ) {
      console.log("whatsappEstudante =" + true);
    }
    if (document.getElementById("linkGerado").classList.contains("is-valid")) {
      console.log("linkGerado = " + true);
    }
  });
});
