// ============================
// MODAL
// ============================
const modal = document.getElementById("formModal");

window.abrirFormulario = function () {
    if (modal) modal.classList.add("active");
};

window.fecharFormulario = function () {
    if (modal) modal.classList.remove("active");
};

// Fechar modal clicando fora
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        fecharFormulario();
    }
});

// ============================
// WHATSAPP
// ============================
window.enviarWhatsApp = function () {
    const nome = document.getElementById("nome")?.value.trim();
    const modalidade = document.getElementById("modalidade")?.value.trim();
    const tipo = document.getElementById("tipo")?.value.trim();
    const produto = document.getElementById("produto")?.value.trim();
    const publico = document.getElementById("publico")?.value.trim();
    const descricao = document.getElementById("descricao")?.value.trim();
    const prazo = document.getElementById("prazo")?.value.trim();

    if (!nome || !tipo) {
        alert("Preencha Nome e Tipo de Site.");
        return;
    }

    const mensagem = `Olá, meu nome é ${nome}

Área: ${modalidade || "Não informada"}
Tipo de site: ${tipo}
Produto/Serviço: ${produto || "Não informado"}
Público-alvo: ${publico || "Não informado"}
Descrição: ${descricao || "Sem descrição"}
Prazo: ${prazo || "Não informado"}`;

    const numero = "5527997230221";

    // Redireciona corretamente para WhatsApp
    const url = `https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(mensagem)}`;

    // Fecha modal
    fecharFormulario();

    // Abre WhatsApp
    window.location.href = url;
};

// ============================
// CONTADORES
// ============================
function iniciarContadores() {
    const counters = document.querySelectorAll(".contador");

    counters.forEach(counter => {
        const target = +counter.dataset.target;
        let current = 0;
        const increment = target / 50;

        const updateCounter = () => {
            current += increment;

            if (current < target) {
                counter.innerText = Math.ceil(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.innerText = target;
            }
        };

        updateCounter();
    });
}

// ============================
// SCROLL + HEADER
// ============================
function handleScrollEffects() {
    const header = document.querySelector(".header");

    if (header) {
        header.classList.toggle("header-scroll", window.scrollY > 50);
    }

    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add("active");
        }
    });
}

// ============================
// AVALIAÇÕES
// ============================
function iniciarAvaliacoes() {
    const publicarBtn = document.getElementById("publicarAvaliacao");
    const textarea = document.getElementById("textoAvaliacao");
    const listaAvaliacoes = document.getElementById("listaAvaliacoes");

    if (!publicarBtn || !textarea || !listaAvaliacoes) return;

    publicarBtn.onclick = () => {
        const texto = textarea.value.trim();

        if (!texto) {
            alert("Digite sua avaliação.");
            return;
        }

        const novaAvaliacao = document.createElement("div");
        novaAvaliacao.className = "avaliacao-item";
        novaAvaliacao.innerHTML = `<p>${texto}</p>`;

        listaAvaliacoes.prepend(novaAvaliacao);
        textarea.value = "";
    };
}

// ============================
// SCROLL SUAVE
// ============================
function iniciarScrollSuave() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            const id = this.getAttribute("href");

            if (id === "#") return;

            const target = document.querySelector(id);

            if (target) {
                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });
}

// ============================
// INIT
// ============================
document.addEventListener("DOMContentLoaded", () => {
    iniciarContadores();
    iniciarAvaliacoes();
    iniciarScrollSuave();
    handleScrollEffects();
});

window.addEventListener("scroll", handleScrollEffects);
