// Player data with Gama DF theme and real photos
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
    "Características": "Técnico, versatilidade posicional, experiência em divisões superiores",
    "Foto_URL": "https://pplx-res.cloudinary.com/image/upload/v1759706795/pplx_project_search_images/b7348c70242456cbec514fcdc0db0e98e6381a01.png",
    "Potencial": "Alto",
    "Biografia": "Meio-campista experiente com 26 anos, Matheus Anjos construiu uma carreira sólida passando por grandes clubes. Revelado no Athletico-PR, desenvolveu seu futebol técnico e versátil, destacando-se principalmente como meia ofensivo com capacidade de atuar pelas pontas. Sua experiência em divisões superiores o torna uma opção confiável para times que buscam consistência e qualidade técnica.",
    "Análise_Técnica": "Jogador de primeiro toque apurado, visão de jogo excepcional e finalização consistente. Possui boa capacidade de criação e consegue atuar em múltiplas posições do meio-campo ofensivo."
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
    "Características": "Baixo mas veloz, bom drible, versatilidade nas pontas",
    "Foto_URL": "https://pplx-res.cloudinary.com/image/upload/v1759706794/pplx_project_search_images/60e4d9f35b8943440e4b2e2371ec77f6671cddd6.png",
    "Potencial": "Muito Alto", 
    "Biografia": "Jovem atacante de 23 anos com formação nas categorias de base de grandes clubes. Apesar da baixa estatura, Guilherme Cachoeira compensa com velocidade excepcional e técnica apurada. Revelado pelo São Paulo, passou também pela base do Vasco antes de se profissionalizar.",
    "Análise_Técnica": "Drible em velocidade, arranques explosivos e boa finalização. Consegue jogar por ambas as pontas e como segundo atacante. Tem potencial para crescer muito ainda."
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
    "Características": "Alto, controle de bola, visão de jogo, potência, velocidade",
    "Foto_URL": "https://pplx-res.cloudinary.com/image/upload/v1759706796/pplx_project_search_images/43b9b0c182c658541d7fe0cfd5f9cc9a2f12c6df.png",
    "Potencial": "Alto",
    "Biografia": "Meia de características físicas diferenciadas, com 1,94m de altura. Natural de Goiânia, desenvolveu-se nas categorias de base do Goiás. Sua estatura privilegiada aliada à técnica o torna um jogador único no meio-campo brasileiro.",
    "Análise_Técnica": "Presença física dominante, bom no jogo aéreo, controle de bola refinado para sua altura. Consegue distribuir o jogo com qualidade e tem potência nos chutes de média distância."
  }
];

// Add more sample players to reach 22 total for demonstration
const additionalPlayers = [
  {
    "Nome": "Thauan Willians",
    "Nome_Completo": "Thauan Willians Jesus Silva",
    "Idade": 21,
    "Data_Nascimento": "17/04/2004",
    "Local_Nascimento": "Santos, SP",
    "Posição": "Atacante/Extremo",
    "Clube_Atual": "Londrina",
    "Altura": "182cm",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Palmeiras (base), América-MG",
    "Estatísticas_2024": "6 jogos pelo América-MG profissional",
    "Divisão": "Série C",
    "Pontuação": 65,
    "Ranking": 4,
    "Video_URL": "https://youtu.be/nbUKA18_ARc",
    "Características": "Jovem promissor, formação no Palmeiras, versatilidade posicional",
    "Foto_URL": "https://pplx-res.cloudinary.com/image/upload/v1759704276/pplx_project_search_images/2cd79016430d7532fdf75604cd0dce429765e54f.png",
    "Potencial": "Muito Alto",
    "Biografia": "Promessa das categorias de base do Palmeiras, Thauan Willians tem apenas 21 anos e já desperta interesse de vários clubes.",
    "Análise_Técnica": "Jovem com muito potencial, boa técnica e capacidade de adaptação em diferentes posições do ataque."
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
    "Histórico_Clubes": "Nacional, Danubio F.C., PFC Beroe Stara Zagora",
    "Estatísticas": "Seleção Sub-23 do Uruguai",
    "Divisão": "Primera División Uruguaia",
    "Pontuação": 62,
    "Ranking": 5,
    "Video_URL": "N/D",
    "Características": "Internacional uruguaio, experiência na Europa",
    "Foto_URL": "placeholder_green",
    "Potencial": "Alto",
    "Biografia": "Meia uruguaio com experiência internacional, tendo atuado na Europa e representado seu país nas categorias de base.",
    "Análise_Técnica": "Jogador técnico com boa visão de jogo e experiência internacional que pode agregar qualidade ao meio-campo."
  }
];

// Combine arrays and ensure we have 22 players total
const fullPlayersData = [...playersData, ...additionalPlayers];

// Add more players to reach 22 (simplified data for demo)
while (fullPlayersData.length < 22) {
  const index = fullPlayersData.length;
  fullPlayersData.push({
    "Nome": `Jogador ${index + 1}`,
    "Nome_Completo": `Jogador Completo ${index + 1}`,
    "Idade": 22 + (index % 10),
    "Data_Nascimento": `01/01/199${5 + (index % 5)}`,
    "Local_Nascimento": "Brasil",
    "Posição": index % 3 === 0 ? "Meia" : index % 3 === 1 ? "Atacante/Ponta" : "Defensor",
    "Clube_Atual": `Clube ${index + 1}`,
    "Altura": `1${70 + (index % 20)}cm`,
    "Peso": "N/D",
    "Pé_Preferido": index % 2 === 0 ? "Direito" : "Esquerdo",
    "Histórico_Clubes": `Clube A, Clube B, Clube C`,
    "Estatísticas_2024": `${index % 5} gols, ${index % 3} assistências`,
    "Divisão": index % 4 === 0 ? "Série A" : index % 4 === 1 ? "Série B" : index % 4 === 2 ? "Série C" : "Regional",
    "Pontuação": Math.max(20, 70 - (index * 2)),
    "Ranking": index + 1,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, promissor",
    "Foto_URL": "placeholder_green",
    "Potencial": index % 3 === 0 ? "Alto" : "Médio",
    "Biografia": `Jogador em desenvolvimento com potencial interessante.`,
    "Análise_Técnica": "Características técnicas em desenvolvimento com margem para crescimento."
  });
}

// Global variables
let currentTab = 'dashboard';
let filteredPlayers = [...fullPlayersData];
let sortField = 'ranking';
let sortDirection = 'asc';
let charts = {};

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupEventListeners();
    renderDashboard();
    renderTop10Players();
    renderRankingTable();
    renderPlayersByPosition();
    showTab('dashboard');
    
    // Initialize charts after a brief delay to ensure containers are ready
    setTimeout(() => {
        initializeCharts();
    }, 100);
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
    
    // Reinitialize charts if switching to analysis tab
    if (tabName === 'analysis') {
        setTimeout(() => {
            initializeCharts();
        }, 100);
    }
}

function renderDashboard() {
    // Dashboard is mostly static HTML, but we can update dynamic content here
    const topPlayer = fullPlayersData[0];
    
    // Update highlight player if needed
    const highlightPlayer = document.querySelector('.highlight-player');
    if (highlightPlayer) {
        const playerPhoto = highlightPlayer.querySelector('.player-photo');
        const playerName = highlightPlayer.querySelector('.player-name');
        const playerDetails = highlightPlayer.querySelector('.player-details');
        const playerScore = highlightPlayer.querySelector('.player-score');
        
        if (playerPhoto && topPlayer.Foto_URL !== 'placeholder_green') {
            playerPhoto.src = topPlayer.Foto_URL;
            playerPhoto.alt = topPlayer.Nome;
        }
        
        if (playerName) playerName.textContent = topPlayer.Nome;
        if (playerDetails) playerDetails.textContent = `${topPlayer.Idade} anos • ${getPositionShort(topPlayer.Posição)}`;
        if (playerScore) playerScore.textContent = `${topPlayer.Pontuação} pontos`;
    }
}

function renderTop10Players() {
    const top10Grid = document.getElementById('top10Grid');
    const top10Players = fullPlayersData.slice(0, 10);

    if (!top10Grid) return;

    top10Grid.innerHTML = top10Players.map(player => {
        const characteristics = player.Características.split(', ').slice(0, 3);
        const hasPhoto = player.Foto_URL && player.Foto_URL !== 'placeholder_green';
        
        return `
            <div class="player-card" onclick="openPlayerModal(${player.Ranking - 1})">
                <div class="ranking-badge">${player.Ranking}</div>
                <div class="player-header">
                    <div class="player-avatar">
                        ${hasPhoto ? 
                            `<img src="${player.Foto_URL}" alt="${player.Nome}" style="width: 100%; height: 100%; object-fit: cover; border-radius: var(--radius-full);">` :
                            getPlayerInitials(player.Nome_Completo)
                        }
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
                    <div class="score-label">⚡ Pontuação Geral</div>
                    <div class="score-bar">
                        <div class="score-fill" style="width: ${player.Pontuação}%"></div>
                    </div>
                    <div class="score-value">${player.Pontuação}/100 🏆</div>
                </div>

                <div class="characteristics">
                    <h4>🎯 Características Principais</h4>
                    <div class="characteristics-list">
                        ${characteristics.map(char => `<span class="characteristic-tag">✅ ${char.trim()}</span>`).join('')}
                    </div>
                </div>

                <div class="player-actions">
                    <button class="btn btn--secondary btn-icon" onclick="event.stopPropagation(); openPlayerModal(${player.Ranking - 1})">
                        <i class="fas fa-eye"></i> 👁️ Detalhes
                    </button>
                    ${player.Video_URL !== 'N/D' ? `
                        <a href="${player.Video_URL}" target="_blank" class="btn btn--outline btn-icon video-link" onclick="event.stopPropagation()">
                            <i class="fas fa-play"></i> 🎥 Vídeo
                        </a>
                    ` : ''}
                </div>
            </div>
        `;
    }).join('');
}

function renderRankingTable() {
    const tableBody = document.getElementById('rankingTableBody');
    
    if (!tableBody) return;
    
    tableBody.innerHTML = filteredPlayers.map(player => {
        return `
            <tr onclick="openPlayerModal(${fullPlayersData.findIndex(p => p.Nome === player.Nome)})">
                <td><span class="ranking-badge">${player.Ranking}</span></td>
                <td>
                    <strong>${player.Nome}</strong><br>
                    <small style="color: var(--gama-green-medium);">${player.Nome_Completo}</small>
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
                    <button class="btn btn--sm btn--secondary" onclick="event.stopPropagation(); openPlayerModal(${fullPlayersData.findIndex(p => p.Nome === player.Nome)})">
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

    fullPlayersData.forEach(player => {
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
                                <div class="position-player-name">⚽ ${player.Nome}</div>
                                <div class="position-player-meta">🏛️ ${player.Clube_Atual} • 📅 ${player.Idade || 'N/D'} anos</div>
                            </div>
                            <div class="position-player-score">🏆 ${player.Pontuação}</div>
                        </div>
                    </div>
                `).join('');
        }
    });
}

function initializeCharts() {
    // Positions Chart
    const positionsCtx = document.getElementById('positionsChart');
    if (positionsCtx && !charts.positions) {
        const positionCounts = {
            'Meia': 0,
            'Atacante': 0,
            'Defensor': 0
        };
        
        fullPlayersData.forEach(player => {
            const pos = player.Posição.toLowerCase();
            if (pos.includes('meia') || pos.includes('meio')) {
                positionCounts['Meia']++;
            } else if (pos.includes('atacante') || pos.includes('ponta') || pos.includes('extremo')) {
                positionCounts['Atacante']++;
            } else if (pos.includes('defensor') || pos.includes('zagueiro')) {
                positionCounts['Defensor']++;
            }
        });

        charts.positions = new Chart(positionsCtx, {
            type: 'doughnut',
            data: {
                labels: ['🎯 Meias', '⚽ Atacantes', '🛡️ Defensores'],
                datasets: [{
                    data: [positionCounts.Meia, positionCounts.Atacante, positionCounts.Defensor],
                    backgroundColor: ['#4A7C59', '#6B8E23', '#2D5016'],
                    borderColor: ['#FFFFFF', '#FFFFFF', '#FFFFFF'],
                    borderWidth: 3
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: '#2D5016',
                            font: {
                                size: 14,
                                weight: 'bold'
                            },
                            padding: 20
                        }
                    }
                }
            }
        });
    }

    // Top 10 Chart
    const top10Ctx = document.getElementById('top10Chart');
    if (top10Ctx && !charts.top10) {
        const top10Data = fullPlayersData.slice(0, 10);
        
        charts.top10 = new Chart(top10Ctx, {
            type: 'bar',
            data: {
                labels: top10Data.map(p => p.Nome),
                datasets: [{
                    label: '🏆 Pontuação',
                    data: top10Data.map(p => p.Pontuação),
                    backgroundColor: '#4A7C59',
                    borderColor: '#2D5016',
                    borderWidth: 2,
                    borderRadius: 8,
                    borderSkipped: false,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: {
                            color: '#2D5016',
                            font: {
                                size: 14,
                                weight: 'bold'
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            color: '#2D5016',
                            font: {
                                weight: 'bold'
                            }
                        },
                        grid: {
                            color: 'rgba(75, 124, 89, 0.2)'
                        }
                    },
                    x: {
                        ticks: {
                            color: '#2D5016',
                            font: {
                                weight: 'bold'
                            }
                        },
                        grid: {
                            color: 'rgba(75, 124, 89, 0.2)'
                        }
                    }
                }
            }
        });
    }
}

function handleSearch() {
    applyFilters();
}

function handleFilters() {
    applyFilters();
}

function applyFilters() {
    const searchInput = document.getElementById('searchInput');
    const positionFilter = document.getElementById('positionFilter');
    const divisionFilter = document.getElementById('divisionFilter');
    
    if (!searchInput || !positionFilter || !divisionFilter) return;
    
    const searchTerm = searchInput.value.toLowerCase();
    const positionFilterValue = positionFilter.value;
    const divisionFilterValue = divisionFilter.value;

    filteredPlayers = fullPlayersData.filter(player => {
        const matchesSearch = !searchTerm || 
            player.Nome.toLowerCase().includes(searchTerm) ||
            player.Nome_Completo.toLowerCase().includes(searchTerm) ||
            player.Clube_Atual.toLowerCase().includes(searchTerm);

        const matchesPosition = !positionFilterValue || 
            player.Posição.toLowerCase().includes(positionFilterValue.toLowerCase());

        const matchesDivision = !divisionFilterValue || 
            player.Divisão.includes(divisionFilterValue);

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
    const player = fullPlayersData[playerIndex];
    const modal = document.getElementById('playerModal');
    const modalBody = document.getElementById('modalBody');

    if (!player || !modal || !modalBody) return;

    const characteristics = player.Características.split(', ');
    const clubes = player.Histórico_Clubes.split(', ').filter(club => club.trim() !== '');
    const hasPhoto = player.Foto_URL && player.Foto_URL !== 'placeholder_green';

    modalBody.innerHTML = `
        <div class="modal-player-header">
            <div class="modal-player-avatar">
                ${hasPhoto ? 
                    `<img src="${player.Foto_URL}" alt="${player.Nome}" style="width: 100%; height: 100%; object-fit: cover; border-radius: var(--radius-lg);">` :
                    getPlayerInitials(player.Nome_Completo)
                }
            </div>
            <div class="modal-player-info">
                <h2>🏆 ${player.Nome_Completo}</h2>
                <div class="modal-player-details">
                    <div class="detail-item">
                        <span class="detail-label">⚽ Posição:</span>
                        <span class="detail-value">${player.Posição}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">📅 Idade:</span>
                        <span class="detail-value">${player.Idade || 'N/D'} anos</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">🎂 Data de Nascimento:</span>
                        <span class="detail-value">${player.Data_Nascimento}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">🌍 Local de Nascimento:</span>
                        <span class="detail-value">${player.Local_Nascimento}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">📏 Altura:</span>
                        <span class="detail-value">${player.Altura}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">⚖️ Peso:</span>
                        <span class="detail-value">${player.Peso}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">🦶 Pé Preferido:</span>
                        <span class="detail-value">${player.Pé_Preferido}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">🏛️ Clube Atual:</span>
                        <span class="detail-value">${player.Clube_Atual}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">🏆 Divisão:</span>
                        <span class="detail-value">${player.Divisão}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">🥇 Ranking:</span>
                        <span class="detail-value text-primary">#${player.Ranking}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">📊 Pontuação:</span>
                        <span class="detail-value text-primary">${player.Pontuação}/100</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal-section">
            <h3><i class="fas fa-user"></i> 📖 Biografia</h3>
            <div class="biography">
                <p><strong>⚽ ${player.Nome_Completo}</strong> é um ${getPositionDescription(player.Posição)} de ${player.Idade || 'idade não informada'} anos, nascido em ${player.Local_Nascimento} em ${player.Data_Nascimento}.</p>
                
                <p>🏛️ Atualmente defendendo as cores do <strong>${player.Clube_Atual}</strong> na <strong>${player.Divisão}</strong>, ${player.Nome} demonstra ${characteristics.join(', ').toLowerCase()}.</p>
                
                ${player.Estatísticas_2024 || player.Estatísticas_2025 || player.Estatísticas ? `
                    <p><strong>📊 Estatísticas:</strong> ${player.Estatísticas_2024 || player.Estatísticas_2025 || player.Estatísticas}</p>
                ` : ''}
                
                <p>🎯 Com uma pontuação de <strong>${player.Pontuação} pontos</strong> em nossa análise, ${player.Nome} ocupa a <strong>${player.Ranking}ª posição</strong> no ranking geral dos 22 atletas avaliados.</p>
                
                ${player.Biografia ? `<p>🔍 <strong>Análise Detalhada:</strong> ${player.Biografia}</p>` : ''}
            </div>
        </div>

        <div class="modal-section">
            <h3><i class="fas fa-star"></i> ⭐ Características Técnicas</h3>
            <div class="characteristics-list">
                ${characteristics.map(char => `<span class="characteristic-tag">✅ ${char.trim()}</span>`).join('')}
            </div>
            ${player.Análise_Técnica ? `
                <div style="margin-top: var(--space-16); padding: var(--space-16); background: var(--color-bg-1); border-radius: var(--radius-base); border: 1px solid var(--gama-green-light);">
                    <h4>🎯 Análise Técnica Profissional:</h4>
                    <p style="color: var(--gama-green-medium); margin: 0;">${player.Análise_Técnica}</p>
                </div>
            ` : ''}
        </div>

        <div class="modal-section">
            <h3><i class="fas fa-history"></i> 🏛️ Histórico de Clubes</h3>
            <div class="career-timeline">
                ${clubes.map(clube => `
                    <div class="timeline-item">
                        <div class="timeline-club">⚽ ${clube.trim()}</div>
                        <div class="timeline-period">📅 Período de atuação</div>
                    </div>
                `).join('')}
            </div>
        </div>

        ${player.Video_URL !== 'N/D' ? `
            <div class="modal-section">
                <h3><i class="fas fa-play"></i> 🎥 Vídeo Destacado</h3>
                <div style="text-align: center;">
                    <a href="${player.Video_URL}" target="_blank" class="btn btn--primary btn-icon">
                        <i class="fas fa-external-link-alt"></i> 🎬 Assistir no YouTube
                    </a>
                </div>
            </div>
        ` : ''}

        <div class="modal-section">
            <h3><i class="fas fa-chart-line"></i> 📈 Análise de Potencial</h3>
            <div class="biography">
                <p>🎯 ${getPlayerAnalysis(player)}</p>
                ${player.Potencial ? `
                    <div style="margin-top: var(--space-12); padding: var(--space-12); background: var(--gama-gradient-3); border-radius: var(--radius-base); border: 2px solid var(--gama-green-light);">
                        <strong>🚀 Potencial de Crescimento: ${player.Potencial}</strong>
                    </div>
                ` : ''}
            </div>
        </div>
    `;

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('playerModal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

function handleExport() {
    // Simulate CSV export with Gama DF branding
    const csvContent = "data:text/csv;charset=utf-8," + 
        "# Relatório Premium de Scout - Gama DF 2025\n" +
        "# Rico - Soluções Inteligentes | Analista: Breno Rodrigues\n" +
        "# CNPJ: 27.175.217/0001-99 | Desenvolvido por: Daniel Morais\n" +
        "Ranking,Nome,Idade,Posição,Clube,Divisão,Pontuação,Potencial\n" +
        fullPlayersData.map(player => 
            `${player.Ranking},"${player.Nome}",${player.Idade || 'N/D'},"${player.Posição}","${player.Clube_Atual}","${player.Divisão}",${player.Pontuação},"${player.Potencial || 'N/D'}"`
        ).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "scout_report_gama_df_2025.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Show success message
    alert("📊 Dados exportados com sucesso! 🏆\n\nRelatório Premium - Gama DF\nRico Soluções Inteligentes");
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
            "🏆 Demonstra excelente potencial para clubes de divisões superiores, com características técnicas que se destacam no cenário atual. Investimento recomendado para o Gama DF! ⚽",
            "🎯 Perfil ideal para contratação imediata, apresentando maturidade tática e experiência comprovada em competições de alto nível. Uma peça que pode fazer a diferença! 🔥",
            "⭐ Atleta diferenciado que pode ser uma peça-chave em projetos ambiciosos, com capacidades excepcionais para sua posição. Potencial de valorização significativa! 💪"
        ],
        medium: [
            "📈 Jogador com bom potencial de desenvolvimento, ideal para clubes que buscam apostas consistentes no médio prazo. Opção interessante para o elenco! 🚀",
            "✅ Apresenta características interessantes e margem para evolução, podendo ser uma boa opção para fortalecimento do plantel verde e branco. 💚",
            "⚽ Atleta sólido com experiência relevante, oferecendo equilíbrio entre custo-benefício e qualidade técnica para o Gama DF. 🏛️"
        ],
        low: [
            "🎯 Opção interessante para desenvolvimento, com potencial específico que pode ser lapidado com o treinamento adequado no Gama DF. 💎",
            "📊 Jogador que pode contribuir em contextos específicos, ideal para projetos de médio prazo com acompanhamento técnico especializado. 📝",
            "🌱 Atleta em desenvolvimento que pode surpreender com o ambiente e estrutura adequados, típico projeto de crescimento verde e branco! 💚"
        ]
    };

    let category = 'low';
    if (player.Pontuação >= 65) category = 'high';
    else if (player.Pontuação >= 45) category = 'medium';

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