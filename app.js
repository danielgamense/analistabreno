// app.js

// Renderização simplificada sem imagens
function renderDashboard(athletes) {
  const container = document.getElementById('athlete-dashboard');
  container.innerHTML = '';

  for (let i = 0; i < 5; i++) {
    const card = document.createElement('div');
    card.className = 'athlete-card';

    if (athletes[i]) {
      card.innerHTML = `
        <div class="info">
          <h3>${athletes[i].Nome}</h3>
          <p>${athletes[i]['Posição']}</p>
        </div>
      `;
    } else {
      card.innerHTML = `<div class="empty-slot">Vaga Disponível</div>`;
    }

    container.appendChild(card);
  }
}

// Carregamento dinâmico via fetchAthletes() definido em index.html
// A inicialização ocorre no DOMContentLoaded em index.html