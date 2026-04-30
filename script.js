
# JavaScript Reescrito Completo — Organizado e Corrigido

```javascript
/* =========================
   MODAL
========================= */
const modal = document.getElementById('formModal');

function abrirFormulario() {
  modal.style.display = 'flex';

  setTimeout(() => {
    modal.classList.add('active');
  }, 10);
}

function fecharFormulario() {
  modal.classList.remove('active');

  setTimeout(() => {
    modal.style.display = 'none';
  }, 300);
}

// fechar clicando fora
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    fecharFormulario();
  }
});

/* =========================
   ENVIAR WHATSAPP
========================= */
function enviarWhatsApp() {
  const nome = document.getElementById('nome').value.trim();
  const modalidade = document.getElementById('modalidade').value.trim();
  const tipo = document.getElementById('tipo').value.trim();
  const produto = document.getElementById('produto').value.trim();
  const publico = document.getElementById('publico').value.trim();
  const descricao = document.getElementById('descricao').value.trim();
  const prazo = document.getElementById('prazo').value.trim();

  if (!nome || !tipo) {
    alert('Preencha pelo menos nome e tipo de site.');
    return;
  }

  const mensagem = `Olá, meu nome é ${nome}

Área: ${modalidade}
Tipo de site: ${tipo}
Produto ou serviço: ${produto}
Público-alvo: ${publico}
Descrição: ${descricao}
Prazo: ${prazo}`;

  const numero = '5527997230221';
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, '_blank');
}

/* =========================
   CONTADOR
========================= */
const counters = document.querySelectorAll('.contador');

const iniciarContadores = () => {
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    const speed = 100;

    const updateCount = () => {
      const current = +counter.innerText;
      const increment = target / speed;

      if (current < target) {
        counter.innerText = Math.ceil(current + increment);
        requestAnimationFrame(updateCount);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
};

/* =========================
   REVEAL SCROLL
========================= */
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');

  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      element.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);

/* =========================
   HEADER SCROLL
========================= */
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');

  if (window.scrollY > 50) {
    header.style.background = 'rgba(5,8,22,0.95)';
    header.style.backdropFilter = 'blur(20px)';
  } else {
    header.style.background = 'rgba(5,8,22,0.75)';
  }
});

/* =========================
   AVALIAÇÕES
========================= */
const publicarBtn = document.querySelector('.btn-publicar');
const textarea = document.querySelector('.avaliacao-box textarea');
const listaAvaliacoes = document.querySelector('.lista-avaliacoes');

if (publicarBtn) {
  publicarBtn.addEventListener('click', () => {
    const texto = textarea.value.trim();

    if (texto === '') {
      alert('Digite uma avaliação antes de publicar.');
      return;
    }

    const novaAvaliacao = document.createElement('div');
    novaAvaliacao.classList.add('card');

    novaAvaliacao.innerHTML = `
      <i class="fa-solid fa-user"></i>
      <p>${texto}</p>
    `;

    listaAvaliacoes.prepend(novaAvaliacao);

    textarea.value = '';
  });
}

/* =========================
   SCROLL SUAVE MENU
========================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const destino = document.querySelector(this.getAttribute('href'));

    if (destino) {
      destino.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

/* =========================
   INICIAR
========================= */
window.addEventListener('load', () => {
  revealOnScroll();
  iniciarContadores();
});
```
