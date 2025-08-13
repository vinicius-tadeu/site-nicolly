// Utilidade: gerar vários corações em posições e velocidades diferentes
    const heartsLayer = document.getElementById('hearts');
    const makeHeart = (left, size, dur, delay) => {
      const h = document.createElement('span');
      h.className = 'heart';
      h.style.left = left + 'vw';
      h.style.bottom = '-10vh';
      h.style.width = h.style.height = size + 'px';
      h.style.animationDuration = dur + 's';
      h.style.animationDelay = delay + 's';
      h.style.opacity = (Math.random() * 0.35 + 0.1).toFixed(2);
      heartsLayer.appendChild(h);
      return h;
    }

    const HEART_COUNT = 26;
    const hearts = [];
    for(let i=0;i<HEART_COUNT;i++){
      hearts.push(
        makeHeart(
          Math.random()*100,               // posição horizontal
          Math.random()*12 + 14,            // tamanho
          Math.random()*10 + 12,            // duração da subida
          Math.random()*-20                 // atraso inicial (negativo = já em andamento)
        )
      );
    }

    // Botão: mais carinho = solta alguns corações extras mais fortes
    const loveBtn = document.getElementById('loveBtn');
    loveBtn.addEventListener('click', () => {
      for(let i=0;i<6;i++){
        const h = makeHeart(10 + Math.random()*80, 18 + Math.random()*16, 8 + Math.random()*8, 0);
        h.style.opacity = .6; h.style.filter = 'saturate(1.2)';
        setTimeout(()=> h.remove(), 16000);
      }
      loveBtn.animate([{ transform:'translateY(0)' },{ transform:'translateY(-3px)' },{ transform:'translateY(0)'}],{ duration:250, easing:'ease-out' });
    });

    // Pausar/retomar animação
    const toggleBtn = document.getElementById('toggleHearts');
    let paused = false;
    toggleBtn.addEventListener('click', () => {
      paused = !paused;
      heartsLayer.style.animationPlayState = paused ? 'paused' : 'running';
      hearts.forEach(h => h.style.animationPlayState = paused ? 'paused' : 'running');
      toggleBtn.textContent = paused ? 'Retomar corações' : 'Pausar corações';
      toggleBtn.setAttribute('aria-pressed', String(paused));
    });

    // Corrige o título com a grafia certa
    document.title = 'Slow Fashion — Com Amor';