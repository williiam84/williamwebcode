// ================= MODAL =================
function abrirFormulario() {
    document.getElementById("formModal").classList.add("active");
}

function fecharFormulario() {
    document.getElementById("formModal").classList.remove("active");
}

// Fechar modal clicando fora
window.addEventListener("click", function (e) {
    const modal = document.getElementById("formModal");

    if (e.target === modal) {
        fecharFormulario();
    }
});

// ================= WHATSAPP =================
function enviarWhatsApp() {
    const nome = document.getElementById("nome").value;
    const modalidade = document.getElementById("modalidade").value;
    const tipo = document.getElementById("tipo").value;
    const produto = document.getElementById("produto").value;
    const publico = document.getElementById("publico").value;
    const descricao = document.getElementById("descricao").value;
    const prazo = document.getElementById("prazo").value;

    if (!nome || !tipo) {
        alert("Preencha pelo menos nome e tipo de site.");
        return;
    }

    const mensagem = `
Olá, meu nome é ${nome}

Área: ${modalidade}
Tipo de site: ${tipo}
Produto/Serviço: ${produto}
Público-alvo: ${publico}
Descrição: ${descricao}
Prazo: ${prazo}
    `;

    const numero = "5527997230221";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");
}

// ================= CONTADORES =================
const counters = document.querySelectorAll(".contador");

function iniciarContadores() {
    counters.forEach(counter => {
        const target = +counter.getAttribute("data-target");
        let current = 0;

        const updateCounter = () => {
            const increment = target / 80;

            if (current < target) {
                current += increment;
                counter.innerText = Math.ceil(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.innerText = target;
            }
        };

        updateCounter();
    });
}

iniciarContadores();

// ================= REVEAL SCROLL =================
function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ================= HEADER SCROLL =================
window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");

    if (window.scrollY > 50) {
        header.classList.add("header-scroll");
    } else {
        header.classList.remove("header-scroll");
    }
});

// ================= AVALIAÇÕES =================
const publicarBtn = document.getElementById("publicarAvaliacao");
const textarea = document.getElementById("textoAvaliacao");
const listaAvaliacoes = document.getElementById("listaAvaliacoes");

if (publicarBtn) {
    publicarBtn.addEventListener("click", () => {
        const texto = textarea.value.trim();

        if (texto === "") return;

        const novaAvaliacao = document.createElement("div");
        novaAvaliacao.classList.add("avaliacao-item");

        novaAvaliacao.innerHTML = `
            <p>${texto}</p>
        `;

        listaAvaliacoes.prepend(novaAvaliacao);

        textarea.value = "";
    });
}

// ================= SCROLL SUAVE =================
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if (destino) {
            destino.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
