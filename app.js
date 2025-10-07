// app.js

// Função de renderização existente:
function renderDashboard(athletes) {
  const container = document.getElementById('athlete-dashboard');
  container.innerHTML = '';
  for (let i = 0; i < 5; i++) {
    const card = document.createElement('div');
    card.className = 'athlete-card';
    if (athletes[i]) {
      card.innerHTML = `
        <div class="badge"><img src="${athletes[i].badgeUrl}" alt="Escudo"></div>
        <div class="photo"><img src="${athletes[i].fotoUrl}" alt="${athletes[i].nome}"></div>
        <div class="info">
          <h3>${athletes[i].nome}</h3>
          <p>${athletes[i].posicao}</p>
        </div>
      `;
    } else {
      card.innerHTML = `<div class="empty-slot">Vaga Disponível</div>`;
    }
    container.appendChild(card);
  }
}

// Removido array estático de atletas, substituído por carregamento dinâmico via fetchAthletes()

// Função fetchAthletes está em index.html
// A inicialização via DOMContentLoaded chama renderDashboard após buscar os dados