// app.js

// Função existente para renderizar o layout original de cards
function renderAthletes(athletes) {
  const container = document.getElementById('athlete-dashboard');
  container.innerHTML = '';

  athletes.slice(0,5).forEach((athlete, index) => {
    const card = document.createElement('div');
    card.className = 'athlete-card';

    // Mantém o HTML e classes originais do template
    card.innerHTML = `
      <div class="badge"><img src="${athlete.badgeUrl || ''}" alt="Escudo"></div>
      <div class="photo"><img src="${athlete.fotoUrl || ''}" alt="${athlete.nome}"></div>
      <div class="info">
        <h3>${athlete.nome}</h3>
        <p>${athlete.posicao}</p>
      </div>
    `;

    container.appendChild(card);
  });

  // Se tiver menos de 5 atletas, adicionar vagas
  for (let i = athletes.length; i < 5; i++) {
    const emptyCard = document.createElement('div');
    emptyCard.className = 'athlete-card empty-slot';
    emptyCard.innerHTML = '<div>Vaga Disponível</div>';
    container.appendChild(emptyCard);
  }
}

// Fetch dinâmico de dados
async function fetchAthletes() {
  try {
    const res = await fetch('atletas.json');
    if (!res.ok) throw new Error('Não foi possível carregar atletas');
    return await res.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}

// Inicialização
document.addEventListener('DOMContentLoaded', async () => {
  const athletes = await fetchAthletes();
  renderAthletes(athletes);
});