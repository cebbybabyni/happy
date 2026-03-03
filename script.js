<!-- Confetti -->
<canvas id="confetti-canvas"></canvas>

<div id="wrapper">

  <!-- ═══ BANNER ═══════════════════════════════════ -->
  <div class="banner">
    <!-- Rope line drawn in SVG -->
    <div class="banner-rope">
      <svg viewBox="0 0 1440 18" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,9 Q60,2 120,9 Q180,16 240,9 Q300,2 360,9 Q420,16 480,9 Q540,2 600,9 Q660,16 720,9 Q780,2 840,9 Q900,16 960,9 Q1020,2 1080,9 Q1140,16 1200,9 Q1260,2 1320,9 Q1380,16 1440,9"
              stroke="#c0a060" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      </svg>
    </div>
    <!-- Pennant flags: H-A-P-P-Y (gap) B-I-R-T-H-D-A-Y -->
    <div class="pennant-row">
      <div class="flag fc-1"><span>H</span></div>
      <div class="flag fc-2"><span>A</span></div>
      <div class="flag fc-3"><span>P</span></div>
      <div class="flag fc-4"><span>P</span></div>
      <div class="flag fc-5"><span>Y</span></div>
      <div class="flag-gap"></div>
      <div class="flag fc-6"><span>B</span></div>
      <div class="flag fc-1"><span>I</span></div>
      <div class="flag fc-2"><span>R</span></div>
      <div class="flag fc-3"><span>T</span></div>
      <div class="flag fc-4"><span>H</span></div>
      <div class="flag fc-5"><span>D</span></div>
      <div class="flag fc-6"><span>A</span></div>
      <div class="flag fc-1"><span>Y</span></div>
    </div>
  </div>

  <!-- ═══ MAIN CONTENT ════════════════════════════ -->
  <div class="content">

    <!-- LEFT -->
    <div class="left">
      <div class="title">
        <h1 class="happy">
          <span style="--t:2s">H</span><span style="--t:2.2s">a</span><span style="--t:2.4s">p</span><span style="--t:2.6s">p</span><span style="--t:2.8s">y</span>
        </h1>
        <h1 class="birthday">
          <span style="--t:3s">B</span><span style="--t:3.2s">i</span><span style="--t:3.4s">r</span><span style="--t:3.6s">t</span><span style="--t:3.8s">h</span><span style="--t:4s">d</span><span style="--t:4.2s">a</span><span style="--t:4.4s">y</span>
        </h1>
        <div class="hat">
          <img src="./images/hat.png" alt="party hat">
        </div>
      </div>

      <div class="date__of__birth" id="dateBadge">
        <i class="fa-solid fa-star"></i>
        <span id="date-text"></span>
        <i class="fa-solid fa-star"></i>
      </div>

      <div class="btn">
        <button id="btn__letter">
          READ ME &nbsp;<i class="fa-regular fa-envelope"></i>
        </button>
      </div>
    </div><!-- /left -->

    <!-- RIGHT -->
    <div class="right">
      <div class="box__account">

        <div class="image">
          <img src="./images/unnamed.png" alt="Jeam Abby Keith"
               onerror="this.style.display='none';this.parentElement.innerHTML='<span style=\'font-size:5rem\'>🌸</span>'">
        </div>

        <div class="name">
          <i class="fa-solid fa-heart"></i>
          <span>JEAM ABBY KEITH</span>
          <i class="fa-solid fa-heart"></i>
        </div>

        <div class="balloon_one">
          <img src="./images/balloon1.png" alt="balloon"
               onerror="this.outerHTML='<span style=\'font-size:3rem\'>🎈</span>'">
        </div>

        <div class="balloon_two">
          <img src="./images/balloon2.png" alt="balloon"
               onerror="this.outerHTML='<span style=\'font-size:3rem\'>🎊</span>'">
        </div>

      </div>
    </div><!-- /right -->

  </div><!-- /content -->

  <!-- ═══ LETTER MODAL ════════════════════════════ -->
  <div class="boxMail" id="boxMail">
    <button class="boxMail__close" id="closeModal" aria-label="Close">
      <i class="fa-solid fa-xmark"></i>
    </button>
    <div class="boxMail-container">

      <!-- Card 1 -->
      <div class="card1">
        <div class="userImg">
          <img src="./images/unnamed.png" alt="profile"
               onerror="this.outerHTML='<div class=\'avatar-fallback\'>🌸</div>'">
        </div>
        <span class="username">My baby 💖</span>
        <h3>Happy<br>Birthday</h3>
        <span class="cute-img-left">🥳</span>
      </div>

      <!-- Card 2 -->
      <div class="card2">
        <div class="card2-inner" id="letterContent">
          <h3>To You!</h3>
          <p class="letter-body typing" id="letterText"></p>
          <div class="cute-img-right" id="cuteImgRight">🎂✨💖</div>
        </div>
      </div>

    </div>
  </div><!-- /boxMail -->

</div><!-- /wrapper -->

<script>
/* ─── CONFETTI ──────────────────────────────────── */
(function(){
  const canvas = document.getElementById('confetti-canvas');
  const ctx    = canvas.getContext('2d');
  let W, H, pieces = [];
  const cols = ['#FF7882','#ffb3ba','#ffd6e0','#ffc0cb','#ffffff','#ffe4e1','#ffaab5','#ffee88','#b8e986','#7ec8e3'];

  function resize(){ W = canvas.width = innerWidth; H = canvas.height = innerHeight; }
  resize();
  window.addEventListener('resize', resize);

  for(let i = 0; i < 65; i++){
    pieces.push({
      x: Math.random() * 1400,
      y: Math.random() * H - H,
      r: Math.random() * 5 + 2,
      d: Math.random() * 70 + 20,
      color: cols[Math.floor(Math.random() * cols.length)],
      tiltAngle: 0,
      tiltInc: Math.random() * 0.07 + 0.03,
      tilt: 0,
      shape: Math.random() > 0.5 ? 'circle' : 'rect'
    });
  }

  function draw(){
    ctx.clearRect(0, 0, W, H);
    pieces.forEach(p => {
      p.tiltAngle += p.tiltInc;
      p.y += (Math.cos(p.d) + 1.3);
      p.x += Math.sin(p.d) * 0.3;
      p.tilt = Math.sin(p.tiltAngle) * 10;
      if(p.y > H + 10){ p.y = -10; p.x = Math.random() * W; }
      ctx.beginPath();
      ctx.fillStyle = p.color;
      ctx.globalAlpha = 0.72;
      if(p.shape === 'circle'){
        ctx.arc(p.x + p.tilt, p.y, p.r, 0, Math.PI * 2);
      } else {
        ctx.rect(p.x + p.tilt, p.y, p.r * 2.5, p.r);
      }
      ctx.fill();
    });
    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }
  draw();
})();

/* ─── DATE TYPEWRITER ───────────────────────────── */
(function(){
  const dateStr = '27 May';
  let idx = 0;
  const el = document.getElementById('date-text');
  setTimeout(() => {
    const t = setInterval(() => {
      if(idx < dateStr.length){ el.textContent += dateStr[idx++]; }
      else clearInterval(t);
    }, 120);
  }, 7000);
})();

/* ─── LETTER MODAL ──────────────────────────────── */
(function(){
  const msg = "My love. You are a very special girl. I always silently thank you for coming into my life. Today, I wish you all the best, lots of health, and lots of joy 🌸\n\nHappy birthday 🥳🎂🥳 — the day you came into my life, we weren't so close at first, but day by day you became dear to my heart. And now you are truly my younger sister. I wish I could remove some of the pain from your life which you are bearing alone. But you're always welcome 🤗 — you can talk anytime, especially the things you can't say to others.\n\nThis year, may all your dreams come true 🌟. Don't be sad, ok? Be happy 😌 I always hope we will celebrate many more birthdays like this together. Happy birthday to you. 💕";

  const openBtn   = document.getElementById('btn__letter');
  const modal     = document.getElementById('boxMail');
  const closeBtn  = document.getElementById('closeModal');
  const letterEl  = document.getElementById('letterText');
  const cuteRight = document.getElementById('cuteImgRight');
  const content   = document.getElementById('letterContent');

  let timer = null, idx = 0, isOpen = false;

  function openModal(){
    if(isOpen) return;
    isOpen = true;
    idx = 0;
    letterEl.textContent = '';
    letterEl.classList.add('typing');
    cuteRight.classList.remove('show');
    modal.classList.add('active');

    setTimeout(() => {
      timer = setInterval(() => {
        if(idx < msg.length){
          // handle newlines
          if(msg[idx] === '\n'){
            letterEl.innerHTML += '<br>';
          } else {
            letterEl.textContent += msg[idx];
          }
          idx++;
          content.scrollTop = content.scrollHeight;
        } else {
          clearInterval(timer);
          letterEl.classList.remove('typing');
          cuteRight.classList.add('show');
        }
      }, 28);
    }, 500);
  }

  function closeModal(){
    modal.classList.remove('active');
    clearInterval(timer);
    setTimeout(() => {
      letterEl.textContent = '';
      letterEl.classList.remove('typing');
      cuteRight.classList.remove('show');
      idx = 0;
      isOpen = false;
    }, 400);
  }

  openBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', e => { if(e.target === modal) closeModal(); });
})();
