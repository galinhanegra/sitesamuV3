// Aguarda o carregamento completo do DOM
document.addEventListener("DOMContentLoaded", function () {
  
  // Elementos do Modal de Anamnese
  const openModalBtn = document.getElementById("openAnamnese");
  const openModal = document.getElementById("open");
  const closeModalBtn = document.getElementById("closeAnamnese");
  const modalOverlay = document.getElementById("anamneseModal");
  const cadastroForm = document.getElementById("anamneseForm");
  const openModali = document.getElementById("openi");
  // Abrir Modal
  if (openModalBtn) {
    openModalBtn.addEventListener("click", function () {
      modalOverlay.classList.add("active");
    });
  }
  if (openModal) {
    openModal.addEventListener("click", function () {
      modalOverlay.classList.add("active");
    });
  }
  if (openModali) {
    openModali.addEventListener("click", function () {
      modalOverlay.classList.add("active");
    });
  }
  // Fechar Modal pelo botão X
  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", function () {
      modalOverlay.classList.remove("active");
    });
  }

  // Fechar Modal ao clicar fora da caixa do formulário
  if (modalOverlay) {
    modalOverlay.addEventListener("click", function (e) {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove("active");
      }
    });
  }
  if (cadastroForm) {
  cadastroForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const cadastroData = {
      nome: document.getElementById("nome").value,
      numero: document.getElementById("numew").value,
      email: document.getElementById("email").value
    };
    localStorage.setItem("dadosCadastro", JSON.stringify(cadastroData));
    window.location.href = "paginas/fazeranamnese.html";
    });
}
 });
//parenteses do telefone
function mascaraTelefone(input) {
  // 1. Remove tudo que não for dígito
  let valor = input.value.replace(/\D/g, "");

  // 2. Limita a no máximo 11 dígitos (DDD + 9 dígitos)
  valor = valor.substring(0, 11);

  // 3. Aplica os parênteses no DDD e o hífen no número
  if (valor.length > 10) {
    // Formato Celular: (XX) XXXXX-XXXX
    valor = valor.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
  } else if (valor.length > 6) {
    // Formato parcial: (XX) XXXXX-X ou Fixo (XX) XXXX-XXXX
    valor = valor.replace(/^(\d{2})(\d{4,5})(\d{0,4})$/, "($1) $2-$3");
  } else if (valor.length > 2) {
    // Formato apenas DDD: (XX) XXX...
    valor = valor.replace(/^(\d{2})(\d{0,5})$/, "($1) $2");
  } else if (valor.length > 0) {
    // Formato inicial: (X...
    valor = valor.replace(/^(\d*)$/, "($1");
  }

  // 4. Atualiza o valor exibido no input
  input.value = valor;
}
document.addEventListener("DOMContentLoaded", function () {
  const pesoInput = document.getElementById("peso");
  const alturaInput = document.getElementById("altura");

  // Impedir a digitação do sinal de menos (-) no Peso
  pesoInput.addEventListener("keydown", function (e) {
    if (e.key === "-" || e.key === "e") {
      e.preventDefault();
    }
  });

  pesoInput.addEventListener("input", function () {
    if (this.value < 0) {
      this.value = "";
    }
  });

  // Máscara para a Altura (formatar automaticamente como 1,72)
  alturaInput.addEventListener("input", function (e) {
    // Remove tudo o que não for número
    let value = this.value.replace(/\D/g, "");

    // Limita a 3 dígitos (ex: 172 -> 1,72)
    if (value.length > 3) {
      value = value.slice(0, 3);
    }

    // Formata com vírgula
    if (value.length >= 2) {
      this.value = value.charAt(0) + "," + value.slice(1);
    } else {
      this.value = value;
    }
  });
});