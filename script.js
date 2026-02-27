
function abrirFormulario() {
  document.getElementById('formModal').style.display = 'block';
}

function fecharFormulario() {
  document.getElementById('formModal').style.display = 'none';
}

function enviarWhatsApp() {
  let nome = document.getElementById('nome').value;
  let modalidade = document.getElementById('modalidade').value;
  let tipo = document.getElementById('tipo').value;
  let produto = document.getElementById('produto').value;
  let publico = document.getElementById('publico').value;
  let descricao = document.getElementById('descricao').value;
  let prazo = document.getElementById('prazo').value;

  let mensagem = `Olá, meu nome é ${nome}%0A
+Área: ${modalidade}%0A
+Tipo de site: ${tipo}%0A
+Produto: ${produto}%0A
+Público: ${publico}%0A
+Descrição: ${descricao}%0A
+Prazo: ${prazo}`;

  let numero = '5527997230221';
  let url = `https://wa.me/${numero}?text=${mensagem}`;

  window.open(url, '_blank');
}
const counters = document.querySelectorAll(".contador");

counters.forEach(counter => {
    const update = () => {
        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;

        const increment = target / 100;

        if (current < target) {
            counter.innerText = Math.ceil(current + increment);
            setTimeout(update, 20);
        } else {
            counter.innerText = target;
        }
    };

    update();
});
const slides = document.querySelectorAll(".slide");
const dotsContainer = document.querySelector(".dots");

let index = 0;

// Criar dots automaticamente
slides.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");

    if (i === 0) dot.classList.add("active");

    dot.addEventListener("click", () => {
        index = i;
        showSlide(index);
    });

    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function showSlide(i) {
    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    slides[i].classList.add("active");
    dots[i].classList.add("active");
}

// Slider automático
setInterval(() => {
    index++;
    if (index >= slides.length) index = 0;
    showSlide(index);
}, 4000);

function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        const visible = 100;

        if (elementTop < windowHeight - visible) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);

// rodar quando abrir a página
revealOnScroll();
window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");

    if (window.scrollY > 50) {
        header.style.background = "rgba(0,0,0,0.9)";
    } else {
        header.style.background = "rgba(0,0,0,0.6)";
    }
});
function abrirFormulario() {
    document.getElementById("formModal").classList.add("active");
}

function fecharFormulario() {
    document.getElementById("formModal").classList.remove("active");
}