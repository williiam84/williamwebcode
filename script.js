# HTML Reescrito e Corrigido + Sistema de Avaliações

Substituí a seção antiga de depoimentos por um sistema pronto para avaliações com textarea e botão publicar.

```html
<!-- ===================== index.html ===================== -->
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>William Web Code | Criação de Sites Profissionais</title>

  <meta name="description" content="Criação de sites profissionais, landing pages e sistemas web para empresas.">
  <meta name="keywords" content="criação de sites, desenvolvimento web, landing pages, sites profissionais">
  <meta name="author" content="William Web Code">

  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
</head>

<body>

<header class="header">
  <div class="logo-area">
    <img src="logowilliam-removebg-preview.png" alt="Logo William Web Code" class="logo-img">
    <span class="logo-text">William Web Code</span>
  </div>

  <nav class="menu">
    <a href="#inicio">Início</a>
    <a href="#sobre">Sobre</a>
    <a href="#servicos">Serviços</a>
    <a href="#avaliacoes">Avaliações</a>
    <a href="#contato">Contato</a>
  </nav>

  <button class="btn-header" onclick="abrirFormulario()">
    Solicitar seu site
  </button>
</header>

<main>

<section class="hero reveal" id="inicio">
  <div class="hero-content">

    <span class="tag">Sites profissionais e modernos</span>

    <h1>
      Criação de Sites Profissionais<br>
      que Geram Clientes
    </h1>

    <p>
      Desenvolvo sites rápidos, modernos e focados em conversão para ajudar sua empresa a crescer.
    </p>

    <div class="hero-buttons">
      <button class="btn-principal" onclick="abrirFormulario()">
        Solicitar seu site
      </button>

      <a href="#servicos" class="btn-secundario">
        Ver serviços
      </a>
    </div>

    <div class="hero-stats">
      <div>
        <h3>+50</h3>
        <span>Sites criados</span>
      </div>

      <div>
        <h3>+100%</h3>
        <span>Mais clientes</span>
      </div>

      <div>
        <h3>24h</h3>
        <span>Suporte</span>
      </div>
    </div>

  </div>
</section>

<section id="sobre" class="sobre reveal">
  <div class="container-sobre">

    <div class="sobre-texto">
      <h2>Sobre a William Web Code</h2>

      <p>
        Desenvolvemos sites modernos, rápidos e personalizados para empresas e profissionais.
      </p>

      <ul>
        <li>Sites rápidos e responsivos</li>
        <li>Design profissional</li>
        <li>Foco em conversão</li>
        <li>Suporte contínuo</li>
      </ul>
    </div>

    <div class="sobre-box">
      <h3>Por que escolher?</h3>

      <div class="sobre-card">
        <strong>Qualidade</strong>
        <p>Projetos feitos com atenção aos detalhes.</p>
      </div>

      <div class="sobre-card">
        <strong>Resultado</strong>
        <p>Sites feitos para gerar clientes.</p>
      </div>

      <div class="sobre-card">
        <strong>Suporte</strong>
        <p>Ajuda rápida sempre que precisar.</p>
      </div>
    </div>

  </div>
</section>

<section id="servicos" class="servicos reveal">
  <div class="container">

    <h2>Serviços</h2>
    <p class="subtitulo">Soluções completas para o seu negócio</p>

    <div class="cards">

      <article class="card">
        <i class="fa-solid fa-code"></i>
        <h3>Criação de Sites</h3>
        <p>Sites modernos e profissionais.</p>
      </article>

      <article class="card">
        <i class="fa-solid fa-bullseye"></i>
        <h3>Landing Pages</h3>
        <p>Páginas focadas em conversão.</p>
      </article>

      <article class="card">
        <i class="fa-solid fa-laptop-code"></i>
        <h3>Sistemas Web</h3>
        <p>Soluções personalizadas.</p>
      </article>

      <article class="card">
        <i class="fa-solid fa-store"></i>
        <h3>Negócios Locais</h3>
        <p>Sites para atrair clientes locais.</p>
      </article>

    </div>
  </div>
</section>

<section class="beneficios reveal">
  <div class="container">

    <h2>Benefícios</h2>

    <div class="beneficios-grid">

      <div class="beneficio-card">
        <i class="fa-solid fa-bolt"></i>
        <h3>Alta Performance</h3>
        <p>Sites rápidos e otimizados.</p>
      </div>

      <div class="beneficio-card">
        <i class="fa-solid fa-mobile-screen-button"></i>
        <h3>Responsivo</h3>
        <p>Funciona em celular, tablet e PC.</p>
      </div>

      <div class="beneficio-card">
        <i class="fa-solid fa-headset"></i>
        <h3>Suporte</h3>
        <p>Ajuda sempre que precisar.</p>
      </div>

      <div class="beneficio-card">
        <i class="fa-brands fa-whatsapp"></i>
        <h3>WhatsApp</h3>
        <p>Contato direto com clientes.</p>
      </div>

    </div>
  </div>
</section>

<section class="processo reveal" id="faq">
  <div class="container">

    <h2>Como Funciona</h2>

    <div class="processo-grid">

      <div class="passo">
        <i class="fa-solid fa-paper-plane"></i>
        <h3>Pedido</h3>
        <p>Você envia as informações.</p>
      </div>

      <div class="passo">
        <i class="fa-solid fa-code"></i>
        <h3>Desenvolvimento</h3>
        <p>Criamos o projeto com foco em resultado.</p>
      </div>

      <div class="passo">
        <i class="fa-solid fa-rocket"></i>
        <h3>Entrega</h3>
        <p>Seu site pronto para vender.</p>
      </div>

    </div>
  </div>
</section>

<section id="avaliacoes" class="avaliacoes reveal">
  <div class="container">

    <h2>Avaliações</h2>
    <p class="subtitulo">Deixe sua opinião sobre o serviço</p>

    <div class="avaliacao-box">

      <textarea placeholder="Escreva sua avaliação aqui..."></textarea>

      <button class="btn-publicar">
        Publicar Avaliação
      </button>

    </div>

    <div class="lista-avaliacoes">
      <!-- avaliações serão adicionadas aqui -->
    </div>

  </div>
</section>

<section class="cta reveal">
  <div class="container">
    <h2>Pronto para ter seu site profissional?</h2>
    <p>Solicite agora e atraia mais clientes.</p>

    <button onclick="abrirFormulario()">
      Solicitar Agora
    </button>
  </div>
</section>

<section class="contato reveal" id="contato">
  <div class="container">

    <h2>Fale Comigo</h2>

    <p>
      Entre em contato e transforme sua ideia em um site profissional.
    </p>

    <div class="contato-botoes">

      <button onclick="abrirFormulario()">
        <i class="fa-brands fa-whatsapp"></i>
        WhatsApp
      </button>

      <button onclick="abrirFormulario()">
        <i class="fa-solid fa-envelope"></i>
        Solicitar Projeto
      </button>

    </div>

  </div>
</section>

<footer>
  <div class="container footer-content">

    <div class="footer-logo">
      <h3>William Web Code</h3>
      <p>Sites modernos que geram resultados</p>
    </div>

    <div class="footer-links">
      <h4>Navegação</h4>
      <a href="#inicio">Início</a>
      <a href="#sobre">Sobre</a>
      <a href="#servicos">Serviços</a>
      <a href="#contato">Contato</a>
    </div>

    <div class="footer-contato">
      <h4>Contato</h4>
      <p>WhatsApp: (27) 99723-0221</p>
      <p>Email: williamwebcode@gmail.com</p>
    </div>

  </div>

  <div class="footer-bottom">
    <p>© 2026 William Web Code — Todos os direitos reservados</p>
  </div>
</footer>

<script src="script.js"></script>

</body>
</html>
```

---

# CSS Reescrito Completo — Visual Moderno e Profissional

```css
/* =========================
   RESET
========================= */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --bg: #050816;
  --bg-light: #0d1326;
  --card: rgba(255,255,255,0.05);
  --border: rgba(255,255,255,0.08);
  --primary: #00c6ff;
  --secondary: #00ffb3;
  --text: #ffffff;
  --text-light: #b8bfd0;
  --shadow: 0 0 30px rgba(0,198,255,0.15);
  --radius: 20px;
}

/* =========================
   BODY
========================= */
body {
  font-family: Arial, sans-serif;
  background: linear-gradient(180deg, #040611, #09101f);
  color: var(--text);
  overflow-x: hidden;
  padding-top: 90px;
}

body::before {
  content: "";
  position: fixed;
  width: 100%;
  height: 100%;
  inset: 0;
  background:
    radial-gradient(circle at top right, rgba(0,198,255,0.15), transparent 35%),
    radial-gradient(circle at bottom left, rgba(0,255,179,0.12), transparent 30%);
  z-index: -1;
}

/* =========================
   CONTAINER
========================= */
.container,
.container-sobre {
  width: 90%;
  max-width: 1200px;
  margin: auto;
}

section {
  padding: 100px 20px;
}

h1,
h2,
h3,
h4 {
  line-height: 1.2;
}

h2 {
  font-size: 38px;
  margin-bottom: 15px;
  text-align: center;
}

.subtitulo {
  color: var(--text-light);
  text-align: center;
  margin-bottom: 50px;
}

p {
  color: var(--text-light);
  line-height: 1.7;
}

/* =========================
   HEADER
========================= */
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 40px;
  background: rgba(5,8,22,0.75);
  backdrop-filter: blur(15px);
  border-bottom: 1px solid rgba(255,255,255,0.05);
  z-index: 999;
}

.logo-area {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-img {
  width: 48px;
}

.logo-text {
  font-size: 18px;
  font-weight: bold;
}

.menu {
  display: flex;
  gap: 30px;
}

.menu a {
  color: var(--text-light);
  text-decoration: none;
  transition: 0.3s;
  position: relative;
}

.menu a::after {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  background: var(--secondary);
  left: 0;
  bottom: -6px;
  transition: 0.3s;
}

.menu a:hover {
  color: white;
}

.menu a:hover::after {
  width: 100%;
}

/* =========================
   BOTÕES
========================= */
button,
.btn-principal,
.btn-header,
.btn-enviar,
.btn-publicar {
  border: none;
  cursor: pointer;
  transition: 0.3s;
}

.btn-header,
.btn-principal,
.btn-enviar,
.btn-publicar,
.cta button,
.contato button {
  padding: 14px 28px;
  border-radius: 40px;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  color: white;
  font-weight: bold;
  box-shadow: var(--shadow);
}

.btn-header:hover,
.btn-principal:hover,
.btn-enviar:hover,
.btn-publicar:hover,
.cta button:hover,
.contato button:hover {
  transform: translateY(-3px);
  box-shadow: 0 0 35px rgba(0,198,255,0.35);
}

.btn-secundario {
  padding: 14px 28px;
  border-radius: 40px;
  text-decoration: none;
  border: 1px solid rgba(255,255,255,0.2);
  color: white;
}

.btn-secundario:hover {
  background: rgba(255,255,255,0.08);
}

/* =========================
   HERO
========================= */
.hero {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.hero-content {
  max-width: 850px;
}

.tag {
  display: inline-block;
  padding: 8px 18px;
  border-radius: 30px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.08);
  margin-bottom: 25px;
  color: var(--secondary);
}

.hero h1 {
  font-size: 58px;
  margin-bottom: 20px;
}

.hero p {
  max-width: 700px;
  margin: auto;
  margin-bottom: 35px;
  font-size: 18px;
}

.hero-buttons {
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 60px;
}

.hero-stats div {
  background: rgba(255,255,255,0.04);
  padding: 20px 30px;
  border-radius: var(--radius);
  border: 1px solid var(--border);
}

.hero-stats h3 {
  color: var(--secondary);
  font-size: 28px;
}

/* =========================
   CARDS
========================= */
.cards,
.beneficios-grid,
.processo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 25px;
}

.card,
.beneficio-card,
.passo,
.sobre-box,
.resultado-card,
.avaliacao-box,
.garantia-box {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  backdrop-filter: blur(14px);
  transition: 0.3s;
}

.card,
.beneficio-card,
.passo,
.resultado-card {
  padding: 35px 25px;
}

.card:hover,
.beneficio-card:hover,
.passo:hover,
.resultado-card:hover {
  transform: translateY(-8px);
  border-color: rgba(0,255,179,0.4);
  box-shadow: var(--shadow);
}

.card i,
.beneficio-card i,
.passo i,
.resultado-card i {
  font-size: 36px;
  margin-bottom: 18px;
  color: var(--secondary);
}

.card p,
.beneficio-card p,
.passo p {
  margin-top: 10px;
}

/* =========================
   SOBRE
========================= */
.container-sobre {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
}

.sobre-texto ul {
  list-style: none;
  margin-top: 25px;
}

.sobre-texto li {
  margin-bottom: 12px;
  color: var(--text-light);
}

.sobre-card {
  padding: 18px;
  margin-top: 15px;
  border-radius: 14px;
  background: rgba(255,255,255,0.04);
}

/* =========================
   AVALIAÇÕES
========================= */
.avaliacao-box {
  max-width: 800px;
  margin: auto;
  padding: 35px;
}

.avaliacao-box textarea {
  width: 100%;
  min-height: 160px;
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,0.08);
  background: rgba(255,255,255,0.04);
  color: white;
  padding: 18px;
  resize: none;
  margin-bottom: 20px;
  outline: none;
}

.avaliacao-box textarea:focus {
  border-color: rgba(0,198,255,0.4);
  box-shadow: 0 0 20px rgba(0,198,255,0.15);
}

/* =========================
   MODAL
========================= */
.modal {
  position: fixed;
  inset: 0;
  display: none;
  justify-content: center;
  align-items: center;
  background: rgba(0,0,0,0.75);
  z-index: 1000;
}

.modal-content {
  width: 90%;
  max-width: 700px;
  background: #0b1224;
  border-radius: 24px;
  padding: 35px;
  border: 1px solid rgba(255,255,255,0.08);
}

.close {
  float: right;
  font-size: 28px;
  cursor: pointer;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.input-group {
  display: flex;
  flex-direction: column;
}

.input-group.full {
  grid-column: span 2;
}

.input-group label {
  margin-bottom: 8px;
  color: var(--text-light);
}

input,
textarea {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.08);
  color: white;
  padding: 14px;
  border-radius: 12px;
  outline: none;
}

input:focus,
textarea:focus {
  border-color: rgba(0,198,255,0.5);
}

/* =========================
   CTA
========================= */
.cta {
  text-align: center;
  background: linear-gradient(135deg, rgba(0,198,255,0.15), rgba(0,255,179,0.08));
}

.cta h2 {
  margin-bottom: 15px;
}

.cta p {
  margin-bottom: 25px;
}

/* =========================
   CONTATO
========================= */
.contato {
  text-align: center;
}

.contato-botoes {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 30px;
}

/* =========================
   FOOTER
========================= */
footer {
  background: rgba(0,0,0,0.45);
  border-top: 1px solid rgba(255,255,255,0.06);
  padding: 70px 20px 25px;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 35px;
}

.footer-links a {
  display: block;
  color: var(--text-light);
  text-decoration: none;
  margin-bottom: 10px;
}

.footer-links a:hover {
  color: white;
}

.footer-bottom {
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid rgba(255,255,255,0.06);
  text-align: center;
  color: var(--text-light);
}

/* =========================
   WHATSAPP FIXO
========================= */
.whatsapp-fixo {
  position: fixed;
  right: 25px;
  bottom: 25px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(90deg, #25D366, #00b85c);
  color: white;
  font-size: 24px;
  text-decoration: none;
  box-shadow: 0 0 25px rgba(37,211,102,0.35);
  z-index: 999;
}

.whatsapp-fixo:hover {
  transform: scale(1.1);
}

/* =========================
   ANIMAÇÕES
========================= */
.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: 0.8s ease;
}

.reveal.active {
  opacity: 1;
  transform: translateY(0);
}

/* =========================
   RESPONSIVO
========================= */
@media (max-width: 900px) {
  .container-sobre {
    grid-template-columns: 1fr;
  }

  .hero h1 {
    font-size: 42px;
  }

  .hero-stats {
    flex-direction: column;
    gap: 15px;
  }
}

@media (max-width: 768px) {
  .header {
    padding: 18px 20px;
  }

  .menu {
    display: none;
  }

  .hero h1 {
    font-size: 34px;
  }

  .hero p {
    font-size: 16px;
  }

  h2 {
    font-size: 28px;
  }

  .form-grid {
    grid-template-columns: 1fr;
  }

  .input-group.full {
    grid-column: span 1;
  }
}
```

---

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
