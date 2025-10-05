// Player data from JSON
const playersData = [
  {
    "Nome": "Matheus Anjos",
    "Nome_Completo": "Matheus Anjos Silva",
    "Idade": 26,
    "Data_Nascimento": "20/12/1998",
    "Local_Nascimento": "Brasil",
    "Posição": "Meia Ofensivo/Ponta Esquerda",
    "Clube_Atual": "Primavera",
    "Altura": "181cm",
    "Peso": "72kg",
    "Pé_Preferido": "Direito",
    "Histórico_Clubes": "Athletico-PR, Ponte Preta, ABC, Remo, CSA",
    "Estatísticas_2024": "5 gols, 6 assistências em 34 jogos pelo ABC",
    "Divisão": "Paulista A2",
    "Pontuação": 74,
    "Ranking": 1,
    "Video_URL": "https://www.youtube.com/watch?v=TtDjPfGFWVs",
    "Características": "Técnico, versatilidade posicional, experiência em divisões superiores"
  },
  {
    "Nome": "Guilherme Cachoeira",
    "Nome_Completo": "Guilherme Cachoeira Santos",
    "Idade": 23,
    "Data_Nascimento": "24/04/2002",
    "Local_Nascimento": "Brasil",
    "Posição": "Atacante/Ponta",
    "Clube_Atual": "Athletic-MG",
    "Altura": "167cm",
    "Peso": "67kg",
    "Pé_Preferido": "Direito",
    "Histórico_Clubes": "São Paulo (base), Vasco (base), CSA, Remo, Fortaleza",
    "Estatísticas_2025": "8 gols, 8 assistências em 45 jogos",
    "Divisão": "Série B",
    "Pontuação": 71,
    "Ranking": 2,
    "Video_URL": "https://www.youtube.com/watch?v=FIhipm_UCYg",
    "Características": "Baixo mas veloz, bom drible, versatilidade nas pontas"
  },
  {
    "Nome": "Zé Vitor",
    "Nome_Completo": "José Vitor Silva Neves",
    "Idade": 25,
    "Data_Nascimento": "02/05/2000",
    "Local_Nascimento": "Goiânia, GO",
    "Posição": "Meia",
    "Clube_Atual": "Maringá FC",
    "Altura": "194cm",
    "Peso": "N/D",
    "Pé_Preferido": "Direito",
    "Histórico_Clubes": "Goiás (base), Operário-PR, Grêmio Sãocarlense, Athletico-PR, Mirassol",
    "Estatísticas_2025": "5 gols, 2 assistências em 36 jogos",
    "Divisão": "Série C",
    "Pontuação": 68,
    "Ranking": 3,
    "Video_URL": "N/D",
    "Características": "Alto, controle de bola, visão de jogo, potência, velocidade"
  },
  {
    "Nome": "Thauan Willians",
    "Nome_Completo": "Thauan Willians Jesus Silva",
    "Idade": 21,
    "Data_Nascimento": "17/04/2004",
    "Local_Nascimento": "Santos, SP",
    "Posição": "Atacante/Extremo",
    "Clube_Atual": "Londrina (emprestado pelo América-MG)",
    "Altura": "182cm",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Palmeiras (base), América-MG",
    "Estatísticas_2024": "6 jogos pelo América-MG profissional",
    "Divisão": "Série C (pelo Londrina)",
    "Pontuação": 52,
    "Ranking": 4,
    "Video_URL": "https://youtu.be/nbUKA18_ARc",
    "Características": "Jovem promissor, formação no Palmeiras, versatilidade posicional"
  },
  {
    "Nome": "Manuel Monzeglio",
    "Nome_Completo": "Manuel Monzeglio Velázquez",
    "Idade": 24,
    "Data_Nascimento": "25/09/2001",
    "Local_Nascimento": "Santa Lucía, Canelones, Uruguai",
    "Posição": "Meia/Atacante",
    "Clube_Atual": "Nacional (Uruguai)",
    "Altura": "180cm",
    "Peso": "68kg",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Nacional (divisões juvenis 2017-2020), Nacional, Danubio F.C., PFC Beroe Stara Zagora (Bulgária)",
    "Estatísticas": "Seleção Sub-23 do Uruguai",
    "Divisão": "Primera División Uruguaia",
    "Pontuação": 48,
    "Ranking": 5,
    "Video_URL": "N/D",
    "Características": "Internacional uruguaio, experiência na Europa"
  },
  {
    "Nome": "Gabryel Martins",
    "Nome_Completo": "Gabryel Martins Silva",
    "Idade": 23,
    "Data_Nascimento": "11/12/2001",
    "Local_Nascimento": "Brasil",
    "Posição": "Atacante/Ponta",
    "Clube_Atual": "Ypiranga-RS",
    "Altura": "169cm",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Fluminense (base), Ferroviário (campeão Série D 2023), Bahrein, Remo",
    "Estatísticas": "Campeão Série D 2023",
    "Divisão": "Série C",
    "Pontuação": 44,
    "Ranking": 6,
    "Video_URL": "https://www.youtube.com/watch?v=fq4pCRfoavI",
    "Características": "Formação em grande clube, experiência internacional, baixo mas técnico"
  },
  {
    "Nome": "Kaio Nunes",
    "Nome_Completo": "Kaio Nunes Ferreira",
    "Idade": 29,
    "Data_Nascimento": "10/01/1996",
    "Local_Nascimento": "Brasil",
    "Posição": "Atacante/Ponta",
    "Clube_Atual": "Aparecidense",
    "Altura": "180cm",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Goiás, Chapecoense, Brusque, CSA, Floresta",
    "Estatísticas": "Experiência em Série A e B",
    "Divisão": "Série D/Goiano",
    "Pontuação": 43,
    "Ranking": 7,
    "Video_URL": "https://www.youtube.com/watch?v=9xAkZqM3rNg",
    "Características": "Atacante experiente, passou por grandes clubes, versatilidade"
  },
  {
    "Nome": "Jhemerson",
    "Nome_Completo": "Jhemerson Guimarães Gaigher",
    "Idade": 28,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Meia",
    "Clube_Atual": "Guarani/Operário Ferroviário",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Tombense, Guarani",
    "Estatísticas": "Experiência em Série B e C",
    "Divisão": "Série B/C",
    "Pontuação": 39,
    "Ranking": 8,
    "Video_URL": "https://www.youtube.com/watch?v=wgXcdB2vuaM",
    "Características": "Meio-campista experiente, maturidade tática"
  },
  {
    "Nome": "Bruno Leite",
    "Nome_Completo": "Bruno Leite Santos",
    "Idade": 25,
    "Data_Nascimento": "06/04/2000",
    "Local_Nascimento": "Brasil",
    "Posição": "Meia",
    "Clube_Atual": "ABC",
    "Altura": "179cm",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Athletico-PR (base), Botafogo-RJ, Joinville, Botafogo-PB",
    "Estatísticas": "Jovem promissor",
    "Divisão": "Série C",
    "Pontuação": 38,
    "Ranking": 9,
    "Video_URL": "https://www.youtube.com/watch?v=RNfYQzXej0M",
    "Características": "Meia central técnico, formação em grande clube"
  },
  {
    "Nome": "Jhan Torres",
    "Nome_Completo": "Jhan Pool Torres Cañate",
    "Idade": 24,
    "Data_Nascimento": "15/04/2001",
    "Local_Nascimento": "Barranquilla, Colômbia",
    "Posição": "Defensor",
    "Clube_Atual": "Brusque",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Amazonas FC",
    "Estatísticas": "Defensor colombiano",
    "Divisão": "Série B",
    "Pontuação": 37,
    "Ranking": 10,
    "Video_URL": "N/D",
    "Características": "Defensor estrangeiro, experiência internacional"
  },
  {
    "Nome": "Denner",
    "Nome_Completo": "Denner Fernando Melz",
    "Idade": 25,
    "Data_Nascimento": "24/02/2008",
    "Local_Nascimento": "Brasil",
    "Posição": "Meio-campista",
    "Clube_Atual": "Esporte Clube Noroeste",
    "Altura": "176cm",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Juventude (base), Athletico-PR, Chapecoense, Sampaio Corrêa",
    "Estatísticas": "Destaque na Série C 2019",
    "Divisão": "Regional",
    "Pontuação": 36,
    "Ranking": 11,
    "Video_URL": "https://www.youtube.com/watch?v=V76ViqVzOdA",
    "Características": "Meio-campista técnico, visão de jogo, experiência em divisões superiores"
  },
  {
    "Nome": "Baianinho",
    "Nome_Completo": "Daniel Gonçalves Baianinho",
    "Idade": 26,
    "Data_Nascimento": "04/09/1999",
    "Local_Nascimento": "Piauí, Brasil",
    "Posição": "Atacante/Ponta",
    "Clube_Atual": "CSA",
    "Altura": "165cm",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Vila Nova, clubes do Sul e Nordeste",
    "Estatísticas_2025": "1 gol, 2 assistências",
    "Divisão": "Série D",
    "Pontuação": 33,
    "Ranking": 12,
    "Video_URL": "https://www.youtube.com/watch?v=Winii7fH8QE",
    "Características": "Baixo, ágil, bom nos cruzamentos e assistências"
  },
  {
    "Nome": "Léo Rigo",
    "Nome_Completo": "Leonardo Rigo Santos",
    "Idade": 30,
    "Data_Nascimento": "24/04/1995",
    "Local_Nascimento": "Brasil",
    "Posição": "Zagueiro",
    "Clube_Atual": "Joinville",
    "Altura": "188cm",
    "Peso": "87kg",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Guarani, RB Bragantino, Londrina, Aparecidense, Volta Redonda",
    "Estatísticas": "Defensor experiente",
    "Divisão": "Série C",
    "Pontuação": 32,
    "Ranking": 13,
    "Video_URL": "N/D",
    "Características": "Defensor experiente, boa altura, rodado no futebol brasileiro"
  },
  {
    "Nome": "Matheus Recife",
    "Nome_Completo": "Matheus Vitor Xavier Viana",
    "Idade": 26,
    "Data_Nascimento": "20/08/1999",
    "Local_Nascimento": "Recife, PE",
    "Posição": "Defensor",
    "Clube_Atual": "Atlético Tubarão",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Coruripe, outros clubes regionais",
    "Estatísticas": "Defensor regional",
    "Divisão": "Regional",
    "Pontuação": 30,
    "Ranking": 14,
    "Video_URL": "N/D",
    "Características": "Defensor com experiência regional"
  },
  {
    "Nome": "Eduardo Moura",
    "Nome_Completo": "Eduardo Junho Gonçalves Moura",
    "Idade": 32,
    "Data_Nascimento": "05/04/1993",
    "Local_Nascimento": "Matinha, Brasil",
    "Posição": "Defensor",
    "Clube_Atual": "Confiança",
    "Altura": "191cm",
    "Peso": "N/D",
    "Pé_Preferido": "Esquerdo",
    "Histórico_Clubes": "Floresta-CE, ABC, CRB, Anápolis, Cascavel-PR",
    "Estatísticas_2024": "6 jogos na Série C",
    "Divisão": "Série C",
    "Pontuação": 29,
    "Ranking": 15,
    "Video_URL": "N/D",
    "Características": "Zagueiro experiente, boa altura, canhoto"
  },
  {
    "Nome": "Matheus Melo",
    "Nome_Completo": "Matheus Melo Santos",
    "Idade": 26,
    "Data_Nascimento": "10/03/1999",
    "Local_Nascimento": "Brasil",
    "Posição": "Meia",
    "Clube_Atual": "Maringá",
    "Altura": "182cm",
    "Peso": "N/D",
    "Pé_Preferido": "Canhoto",
    "Histórico_Clubes": "Santa Cruz, Amazonas, Náutico, Guarany de Bagé",
    "Estatísticas": "Contrato até 2026 com Santa Cruz",
    "Divisão": "Série C",
    "Pontuação": 29,
    "Ranking": 16,
    "Video_URL": "https://www.youtube.com/watch?v=bUoGdox33v8",
    "Características": "Destaque no Santa Cruz, versatilidade posicional, canhoto"
  },
  {
    "Nome": "Sávio Maciel",
    "Nome_Completo": "Sávio Maciel Silva",
    "Idade": "N/D",
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "N/D",
    "Posição": "N/D",
    "Clube_Atual": "N/D",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "N/D",
    "Estatísticas": "Dados limitados",
    "Divisão": "N/D",
    "Pontuação": 25,
    "Ranking": 17,
    "Video_URL": "N/D",
    "Características": "Informações insuficientes"
  },
  {
    "Nome": "Leonan Santos",
    "Nome_Completo": "Leonan Santos Silva",
    "Idade": "N/D",
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "N/D",
    "Posição": "N/D",
    "Clube_Atual": "N/D",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "N/D",
    "Estatísticas": "Dados limitados",
    "Divisão": "N/D",
    "Pontuação": 25,
    "Ranking": 18,
    "Video_URL": "https://youtu.be/A-fZjjAk3CI?si=kg4pZwPtKFzqseBI",
    "Características": "Informações insuficientes"
  },
  {
    "Nome": "Roger",
    "Nome_Completo": "Roger Silva Santos",
    "Idade": 29,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Meia",
    "Clube_Atual": "Ypiranga-RS",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Lagarto, divisões inferiores",
    "Estatísticas": "Carreira em divisões inferiores",
    "Divisão": "Série C",
    "Pontuação": 26,
    "Ranking": 19,
    "Video_URL": "https://www.youtube.com/watch?v=umi_cC2-6NU",
    "Características": "Experiência em divisões regionais"
  },
  {
    "Nome": "Reifit (Thomas Kayck)",
    "Nome_Completo": "Thomás Kayck Silva",
    "Idade": "N/D",
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "N/D",
    "Posição": "Atacante/Ponta",
    "Clube_Atual": "Floresta-CE",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Floresta-CE",
    "Estatísticas": "Dados limitados",
    "Divisão": "Regional",
    "Pontuação": 24,
    "Ranking": 20,
    "Video_URL": "https://youtu.be/5ldKmh83Qng",
    "Características": "Jovem promissor"
  },
  {
    "Nome": "Robertinho",
    "Nome_Completo": "Roberto Silva Santos",
    "Idade": 25,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Atacante/Ponta",
    "Clube_Atual": "Jacuipense",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Clubes regionais",
    "Estatísticas": "Carreira regional",
    "Divisão": "Regional",
    "Pontuação": 22,
    "Ranking": 21,
    "Video_URL": "https://www.youtube.com/watch?v=xT0qgXp3UNc",
    "Características": "Jovem promissor nas divisões de base"
  },
  {
    "Nome": "Renilson",
    "Nome_Completo": "Renilson Silva Santos",
    "Idade": "N/D",
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "N/D",
    "Posição": "N/D",
    "Clube_Atual": "Desportiva Aracaju",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Desportiva Aracaju",
    "Estatísticas": "Dados limitados",
    "Divisão": "Regional",
    "Pontuação": 20,
    "Ranking": 22,
    "Video_URL": "https://youtu.be/qiEncVWNBwM",
    "Características": "Jogador regional"
  }
];

// Global variables
let currentTab = 'top10';
let filteredPlayers = [...playersData];
let sortField = 'ranking';
let sortDirection = 'asc';

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupEventListeners();
    renderTop10Players();
    renderRankingTable();
    renderPlayersByPosition();
    showTab('top10');
}

function setupEventListeners() {
    // Tab navigation
    const navTabs = document.querySelectorAll('.nav-tab');
    navTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.dataset.tab;
            showTab(tabName);
            
            // Update active tab
            navTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', debounce(handleSearch, 300));
    }

    // Filter functionality
    const positionFilter = document.getElementById('positionFilter');
    const divisionFilter = document.getElementById('divisionFilter');
    
    if (positionFilter) {
        positionFilter.addEventListener('change', handleFilters);
    }
    
    if (divisionFilter) {
        divisionFilter.addEventListener('change', handleFilters);
    }

    // Table sorting
    const sortHeaders = document.querySelectorAll('[data-sort]');
    sortHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const field = header.dataset.sort;
            handleSort(field);
        });
    });

    // Modal functionality
    const modal = document.getElementById('playerModal');
    const modalClose = document.querySelector('.modal-close');
    const modalOverlay = document.querySelector('.modal-overlay');
    
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeModal);
    }

    // Export functionality
    const exportBtn = document.getElementById('exportBtn');
    if (exportBtn) {
        exportBtn.addEventListener('click', handleExport);
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

function showTab(tabName) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Show selected section
    const activeSection = document.getElementById(tabName);
    if (activeSection) {
        activeSection.classList.add('active');
    }

    currentTab = tabName;
}

function renderTop10Players() {
    const top10Grid = document.getElementById('top10Grid');
    const top10Players = playersData.slice(0, 10);

    top10Grid.innerHTML = top10Players.map(player => {
        const characteristics = player.Características.split(', ').slice(0, 3);
        const initials = getPlayerInitials(player.Nome_Completo);
        
        return `
            <div class="player-card" onclick="openPlayerModal(${player.Ranking - 1})">
                <div class="ranking-badge">${player.Ranking}</div>
                <div class="player-header">
                    <div class="player-avatar">
                        ${initials}
                    </div>
                    <div class="player-info">
                        <h3>${player.Nome}</h3>
                        <div class="player-meta">
                            <span class="player-age">${player.Idade} anos</span>
                            <span class="player-position">${getPositionIcon(player.Posição)} ${getPositionShort(player.Posição)}</span>
                        </div>
                        <div class="player-club">${player.Clube_Atual}</div>
                    </div>
                </div>
                
                <div class="score-section">
                    <div class="score-label">Pontuação Geral</div>
                    <div class="score-bar">
                        <div class="score-fill" style="width: ${player.Pontuação}%"></div>
                    </div>
                    <div class="score-value">${player.Pontuação}/100</div>
                </div>

                <div class="characteristics">
                    <h4>Características Principais</h4>
                    <div class="characteristics-list">
                        ${characteristics.map(char => `<span class="characteristic-tag">${char.trim()}</span>`).join('')}
                    </div>
                </div>

                <div class="player-actions">
                    <button class="btn btn--secondary btn-icon" onclick="event.stopPropagation(); openPlayerModal(${player.Ranking - 1})">
                        <i class="fas fa-eye"></i> Detalhes
                    </button>
                    ${player.Video_URL !== 'N/D' ? `
                        <a href="${player.Video_URL}" target="_blank" class="btn btn--outline btn-icon video-link" onclick="event.stopPropagation()">
                            <i class="fas fa-play"></i> Vídeo
                        </a>
                    ` : ''}
                </div>
            </div>
        `;
    }).join('');
}

function renderRankingTable() {
    const tableBody = document.getElementById('rankingTableBody');
    
    tableBody.innerHTML = filteredPlayers.map(player => {
        return `
            <tr onclick="openPlayerModal(${playersData.findIndex(p => p.Nome === player.Nome)})">
                <td><span class="ranking-number">${player.Ranking}</span></td>
                <td>
                    <strong>${player.Nome}</strong><br>
                    <small style="color: var(--color-text-secondary);">${player.Nome_Completo}</small>
                </td>
                <td>${player.Idade || 'N/D'}</td>
                <td>
                    <span class="position-icon ${getPositionClass(player.Posição)}">
                        ${getPositionIcon(player.Posição)}
                    </span>
                    ${getPositionShort(player.Posição)}
                </td>
                <td>${player.Clube_Atual}</td>
                <td>
                    <span class="division-badge ${getDivisionClass(player.Divisão)}">
                        ${player.Divisão}
                    </span>
                </td>
                <td><strong>${player.Pontuação}</strong></td>
                <td>
                    <button class="btn btn--sm btn--secondary" onclick="event.stopPropagation(); openPlayerModal(${playersData.findIndex(p => p.Nome === player.Nome)})">
                        <i class="fas fa-eye"></i>
                    </button>
                </td>
            </tr>
        `;
    }).join('');
}

function renderPlayersByPosition() {
    const positions = {
        'Meia': [],
        'Atacante': [],
        'Defensor': []
    };

    playersData.forEach(player => {
        const pos = player.Posição.toLowerCase();
        if (pos.includes('meia') || pos.includes('meio')) {
            positions['Meia'].push(player);
        } else if (pos.includes('atacante') || pos.includes('ponta') || pos.includes('extremo')) {
            positions['Atacante'].push(player);
        } else if (pos.includes('defensor') || pos.includes('zagueiro')) {
            positions['Defensor'].push(player);
        }
    });

    // Render each position group
    Object.keys(positions).forEach(position => {
        const container = document.getElementById(`${position.toLowerCase()}${position === 'Atacante' ? 's' : position === 'Meia' ? 's' : 'es'}Players`);
        if (container) {
            container.innerHTML = positions[position]
                .sort((a, b) => a.Ranking - b.Ranking)
                .map(player => `
                    <div class="position-player-card" onclick="openPlayerModal(${player.Ranking - 1})">
                        <div class="position-player-info">
                            <div>
                                <div class="position-player-name">${player.Nome}</div>
                                <div class="position-player-meta">${player.Clube_Atual} • ${player.Idade || 'N/D'} anos</div>
                            </div>
                            <div class="position-player-score">${player.Pontuação}</div>
                        </div>
                    </div>
                `).join('');
        }
    });
}

function handleSearch() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    applyFilters();
}

function handleFilters() {
    applyFilters();
}

function applyFilters() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const positionFilter = document.getElementById('positionFilter').value;
    const divisionFilter = document.getElementById('divisionFilter').value;

    filteredPlayers = playersData.filter(player => {
        const matchesSearch = !searchTerm || 
            player.Nome.toLowerCase().includes(searchTerm) ||
            player.Nome_Completo.toLowerCase().includes(searchTerm) ||
            player.Clube_Atual.toLowerCase().includes(searchTerm);

        const matchesPosition = !positionFilter || 
            player.Posição.toLowerCase().includes(positionFilter.toLowerCase());

        const matchesDivision = !divisionFilter || 
            player.Divisão.includes(divisionFilter);

        return matchesSearch && matchesPosition && matchesDivision;
    });

    renderRankingTable();
}

function handleSort(field) {
    if (sortField === field) {
        sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
        sortField = field;
        sortDirection = 'asc';
    }

    filteredPlayers.sort((a, b) => {
        let valueA = a[getFieldKey(field)];
        let valueB = b[getFieldKey(field)];

        // Handle numeric fields
        if (field === 'ranking' || field === 'score' || field === 'age') {
            valueA = parseInt(valueA) || 0;
            valueB = parseInt(valueB) || 0;
        }

        // Handle string fields
        if (typeof valueA === 'string') {
            valueA = valueA.toLowerCase();
        }
        if (typeof valueB === 'string') {
            valueB = valueB.toLowerCase();
        }

        if (sortDirection === 'asc') {
            return valueA > valueB ? 1 : -1;
        } else {
            return valueA < valueB ? 1 : -1;
        }
    });

    renderRankingTable();
    updateSortIndicators();
}

function getFieldKey(field) {
    const fieldMap = {
        'ranking': 'Ranking',
        'name': 'Nome',
        'age': 'Idade',
        'position': 'Posição',
        'club': 'Clube_Atual',
        'division': 'Divisão',
        'score': 'Pontuação'
    };
    return fieldMap[field] || field;
}

function updateSortIndicators() {
    const headers = document.querySelectorAll('[data-sort]');
    headers.forEach(header => {
        const icon = header.querySelector('i');
        if (header.dataset.sort === sortField) {
            icon.className = sortDirection === 'asc' ? 'fas fa-sort-up' : 'fas fa-sort-down';
        } else {
            icon.className = 'fas fa-sort';
        }
    });
}

function openPlayerModal(playerIndex) {
    const player = playersData[playerIndex];
    const modal = document.getElementById('playerModal');
    const modalBody = document.getElementById('modalBody');

    const characteristics = player.Características.split(', ');
    const clubes = player.Histórico_Clubes.split(', ').filter(club => club.trim() !== '');
    const initials = getPlayerInitials(player.Nome_Completo);

    modalBody.innerHTML = `
        <div class="modal-player-header">
            <div class="modal-player-avatar">
                ${initials}
            </div>
            <div class="modal-player-info">
                <h2>${player.Nome_Completo}</h2>
                <div class="modal-player-details">
                    <div class="detail-item">
                        <span class="detail-label">Posição:</span>
                        <span class="detail-value">${player.Posição}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Idade:</span>
                        <span class="detail-value">${player.Idade || 'N/D'} anos</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Data de Nascimento:</span>
                        <span class="detail-value">${player.Data_Nascimento}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Local de Nascimento:</span>
                        <span class="detail-value">${player.Local_Nascimento}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Altura:</span>
                        <span class="detail-value">${player.Altura}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Peso:</span>
                        <span class="detail-value">${player.Peso}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Pé Preferido:</span>
                        <span class="detail-value">${player.Pé_Preferido}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Clube Atual:</span>
                        <span class="detail-value">${player.Clube_Atual}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Divisão:</span>
                        <span class="detail-value">${player.Divisão}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Ranking:</span>
                        <span class="detail-value text-primary">#${player.Ranking}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Pontuação:</span>
                        <span class="detail-value text-primary">${player.Pontuação}/100</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal-section">
            <h3><i class="fas fa-user"></i> Biografia</h3>
            <div class="biography">
                <p><strong>${player.Nome_Completo}</strong> é um ${getPositionDescription(player.Posição)} de ${player.Idade || 'idade não informada'} anos, nascido em ${player.Local_Nascimento} em ${player.Data_Nascimento}.</p>
                
                <p>Atualmente defendendo as cores do <strong>${player.Clube_Atual}</strong> na <strong>${player.Divisão}</strong>, ${player.Nome} demonstra ${characteristics.join(', ').toLowerCase()}.</p>
                
                ${player.Estatísticas_2024 || player.Estatísticas_2025 || player.Estatísticas ? `
                    <p><strong>Estatísticas:</strong> ${player.Estatísticas_2024 || player.Estatísticas_2025 || player.Estatísticas}</p>
                ` : ''}
                
                <p>Com uma pontuação de <strong>${player.Pontuação} pontos</strong> em nossa análise, ${player.Nome} ocupa a <strong>${player.Ranking}ª posição</strong> no ranking geral dos 22 atletas avaliados.</p>
            </div>
        </div>

        <div class="modal-section">
            <h3><i class="fas fa-star"></i> Características Técnicas</h3>
            <div class="characteristics-list">
                ${characteristics.map(char => `<span class="characteristic-tag">${char.trim()}</span>`).join('')}
            </div>
        </div>

        <div class="modal-section">
            <h3><i class="fas fa-history"></i> Histórico de Clubes</h3>
            <div class="career-timeline">
                ${clubes.map(clube => `
                    <div class="timeline-item">
                        <div class="timeline-club">${clube.trim()}</div>
                        <div class="timeline-period">Período de atuação</div>
                    </div>
                `).join('')}
            </div>
        </div>

        ${player.Video_URL !== 'N/D' ? `
            <div class="modal-section">
                <h3><i class="fas fa-play"></i> Vídeo Destacado</h3>
                <div style="text-align: center;">
                    <a href="${player.Video_URL}" target="_blank" class="btn btn--primary btn-icon">
                        <i class="fas fa-external-link-alt"></i> Assistir no YouTube
                    </a>
                </div>
            </div>
        ` : ''}

        <div class="modal-section">
            <h3><i class="fas fa-chart-line"></i> Análise de Potencial</h3>
            <div class="biography">
                <p>${getPlayerAnalysis(player)}</p>
            </div>
        </div>
    `;

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('playerModal');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

function handleExport() {
    // Simulate CSV export
    const csvContent = "data:text/csv;charset=utf-8," + 
        "Ranking,Nome,Idade,Posição,Clube,Divisão,Pontuação\n" +
        playersData.map(player => 
            `${player.Ranking},"${player.Nome}",${player.Idade || 'N/D'},"${player.Posição}","${player.Clube_Atual}","${player.Divisão}",${player.Pontuação}`
        ).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "ranking_jogadores_scout.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Utility functions
function getPlayerInitials(fullName) {
    return fullName.split(' ')
        .map(name => name.charAt(0))
        .slice(0, 2)
        .join('')
        .toUpperCase();
}

function getPositionIcon(position) {
    const pos = position.toLowerCase();
    if (pos.includes('meia') || pos.includes('meio')) return '🎯';
    if (pos.includes('atacante') || pos.includes('ponta') || pos.includes('extremo')) return '⚽';
    if (pos.includes('defensor') || pos.includes('zagueiro')) return '🛡️';
    return '⚽';
}

function getPositionShort(position) {
    const pos = position.toLowerCase();
    if (pos.includes('meia') || pos.includes('meio')) return 'Meia';
    if (pos.includes('atacante') || pos.includes('ponta') || pos.includes('extremo')) return 'Atacante';
    if (pos.includes('defensor') || pos.includes('zagueiro')) return 'Defensor';
    return position.split('/')[0];
}

function getPositionClass(position) {
    const pos = position.toLowerCase();
    if (pos.includes('meia') || pos.includes('meio')) return 'position-meia';
    if (pos.includes('atacante') || pos.includes('ponta') || pos.includes('extremo')) return 'position-atacante';
    if (pos.includes('defensor') || pos.includes('zagueiro')) return 'position-defensor';
    return 'position-meia';
}

function getDivisionClass(division) {
    if (division.includes('A')) return 'division-a';
    if (division.includes('B')) return 'division-b';
    if (division.includes('C')) return 'division-c';
    if (division.includes('D')) return 'division-d';
    return 'division-regional';
}

function getPositionDescription(position) {
    const pos = position.toLowerCase();
    if (pos.includes('meia') || pos.includes('meio')) return 'meio-campista';
    if (pos.includes('atacante') || pos.includes('ponta') || pos.includes('extremo')) return 'atacante';
    if (pos.includes('defensor') || pos.includes('zagueiro')) return 'defensor';
    return 'jogador';
}

function getPlayerAnalysis(player) {
    const analyses = {
        high: [
            "Demonstra excelente potencial para clubes de divisões superiores, com características técnicas que se destacam no cenário atual.",
            "Perfil ideal para investimento imediato, apresentando maturidade tática e experiência comprovada em competições de alto nível.",
            "Atleta diferenciado que pode ser uma peça-chave em projetos ambiciosos, com capacidades excepcionais para sua posição."
        ],
        medium: [
            "Jogador com bom potencial de desenvolvimento, ideal para clubes que buscam apostas consistentes no médio prazo.",
            "Apresenta características interessantes e margem para evolução, podendo ser uma boa opção para fortalecimento do elenco.",
            "Atleta sólido com experiência relevante, oferecendo equilíbrio entre custo-benefício e qualidade técnica."
        ],
        low: [
            "Opção interessante para divisões regionais ou como reforço pontual, com potencial limitado mas características específicas.",
            "Jogador que pode contribuir em contextos específicos, ideal para clubes com orçamento mais restrito.",
            "Atleta em desenvolvimento que pode surpreender com o ambiente e treinamento adequados."
        ]
    };

    let category = 'low';
    if (player.Pontuação >= 60) category = 'high';
    else if (player.Pontuação >= 40) category = 'medium';

    const randomIndex = Math.floor(Math.random() * analyses[category].length);
    return analyses[category][randomIndex];
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}