// Player data with Gama DF theme and real photos//
const playersData = [
  {
    "Nome": "Augusto",
    "Nome_Completo": "Augusto de Souza Silva",
    "Idade": 26,
    "Data_Nascimento": "20/12/1998",
    "Local_Nascimento": "São Paulo, SP",
    "Posição": "Defensor (Zagueiro)",
    "Clube_Atual": "São Bernardo",
    "Altura": "186cm",
    "Peso": "86kg",
    "Pé_Preferido": "Destro",
    "Histórico_Clubes": "São Bernardo, ABC, Volta Redonda",
    "Estatísticas_2025": "18 jogos, 1279 minutos, 1 gol, 0 assistências - Série C: 7J/496M/0G/0A, Paulista: 11J/783M/1G/0A",
    "Divisão": "Série C",
    "Pontuação": 85,
    "Ranking": 1,
    "Video_URL": "https://www.ogol.com.br/jogador/augusto/491978",
    "Características": "Experiência, força física, jogo aéreo",
    "Foto_URL": "https://cdn-img.zerozero.pt/img/jogadores/78/491978_20230124164535_augusto_.jpg",
    "Potencial": "Médio",
    "Biografia": "Zagueiro de 26 anos, revelado no São Bernardo, com passagem por ABC e Volta Redonda. Jogador de força física e bom jogo aéreo.",
    "Análise_Técnica": "Zagueiro sólido, com boa leitura de jogo e eficiente no jogo aéreo. Precisa evoluir na saída de bola.",
    "Disponibilidade": "Sim",
    "Clube_URL": "https://www.ogol.com.br/equipe/sao-bernardo/15771",
    "Clube_Logo": "https://www.ogol.com.br/img/logos/equipas/15771_imgbank_1685114451.png"
  },
  {
    "Nome": "Baianinho",
    "Nome_Completo": "Daniel Gonçalves Batista",
    "Idade": 24,
    "Data_Nascimento": "10/07/2000",
    "Local_Nascimento": "Amarante (PI)",
    "Posição": "Atacante (Ponta Esquerda) (Ponta Direita)",
    "Clube_Atual": "CSA",
    "Altura": "165cm",
    "Peso": "56kg",
    "Pé_Preferido": "Destro",
    "Histórico_Clubes": "CSA, Capivariano, Cianorte, Inter de Lages",
    "Estatísticas_2025": "38 jogos, 1937 minutos, 4 gols, 4 assistências - Série C: 14J/676M/1G/1A, Copa Brasil: 4J/149M/0G/0A, Paulista A2: 17J/942M/3G/2A, Copa Nordeste: 3J/170M/0G/1A",
    "Divisão": "Série C",
    "Pontuação": 83,
    "Ranking": 2,
    "Video_URL": "https://www.ogol.com.br/jogador/baianinho/520600",
    "Características": "Velocidade, dribles, versatilidade",
    "Foto_URL": "https://cdn-img.zerozero.pt/img/jogadores/00/520600_20240128010929_baianinho.jpg",
    "Potencial": "Alto",
    "Biografia": "Atacante veloz e driblador, formado no CSA, com passagem por Capivariano e Inter de Lages. Jogador versátil, atua pelas duas pontas.",
    "Análise_Técnica": "Atacante rápido e técnico, com boa capacidade de drible e finalização. Precisa ganhar mais massa muscular.",
    "Disponibilidade": "Sim",
    "Clube_URL": "https://www.ogol.com.br/equipe/csa/3217",
    "Clube_Logo": "https://www.ogol.com.br/img/logos/equipas/3217_imgbank_1683649471.png"
  },
  {
    "Nome": "Bruno Bispo",
    "Nome_Completo": "Bruno Bispo dos Anjos",
    "Idade": 29,
    "Data_Nascimento": "25/05/1996",
    "Local_Nascimento": "Aracaju",
    "Posição": "Defensor (Zagueiro)",
    "Clube_Atual": "ABC",
    "Altura": "186cm",
    "Peso": "78kg",
    "Pé_Preferido": "Canhoto",
    "Histórico_Clubes": "ABC, Remo, Erbil, Manaus FC, Al-Qadisiyah",
    "Estatísticas_2025": "29 jogos, 2565 minutos, 1 gol, 0 assistências - Série C: 16J/1395M/1G/0A, Copa Brasil: 1J/90M/0G/0A, Potiguar: 11J/990M/0G/0A, C. Nordeste Class.: 1J/90M/0G/0A",
    "Divisão": "Série C",
    "Pontuação": 82,
    "Ranking": 3,
    "Video_URL": "https://www.ogol.com.br/jogador/bruno-bispo/481417",
    "Características": "Experiência, jogo aéreo, saída de bola",
    "Foto_URL": "https://cdn-img.zerozero.pt/img/jogadores/17/481417_20220831185600_bruno_bispo.png",
    "Potencial": "Médio",
    "Biografia": "Zagueiro canhoto de 29 anos, com passagem por clubes do Nordeste e experiência no futebol do Oriente Médio. Jogador experiente e com boa saída de bola.",
    "Análise_Técnica": "Zagueiro canhoto com boa saída de bola e jogo aéreo. Experiente, mas precisa melhorar a velocidade.",
    "Disponibilidade": "Sim",
    "Clube_URL": "https://www.ogol.com.br/equipe/abc/3083",
    "Clube_Logo": "https://www.ogol.com.br/img/logos/equipas/3083_imgbank_1685112877.png"
  },
  {
    "Nome": "Bruno Gabriel",
    "Nome_Completo": "Bruno Gabriel Reis da Silva",
    "Idade": 27,
    "Data_Nascimento": "15/02/1998",
    "Local_Nascimento": "Porto Alegre (RS)",
    "Posição": "Defensor (Zagueiro)",
    "Clube_Atual": "Inter de Limeira",
    "Altura": "191cm",
    "Peso": "79kg",
    "Pé_Preferido": "Canhoto",
    "Histórico_Clubes": "Inter de Limeira, Hercílio Luz, Ferroviário, GE Brasil",
    "Estatísticas_2025": "14 jogos, 1040 minutos, 0 gols, 0 assistências - Série D: 7J/492M/0G/0A, Copa Paulista: 1J/78M/0G/0A, Catarinense: 6J/470M/0G/0A",
    "Divisão": "Série D",
    "Pontuação": 78,
    "Ranking": 4,
    "Video_URL": "https://www.ogol.com.br/jogador/bruno-gabriel/620501",
    "Características": "Altura, jogo aéreo, canhoto",
    "Foto_URL": "https://cdn-img.zerozero.pt/img/jogadores/new/05/01/620501_bruno_gabriel_20250326215502.png",
    "Potencial": "Médio",
    "Biografia": "Zagueiro canhoto de 27 anos, com passagem por clubes do interior de São Paulo e Santa Catarina. Jogador alto e forte, com bom jogo aéreo.",
    "Análise_Técnica": "Zagueiro canhoto, alto e com bom jogo aéreo. Precisa evoluir na saída de bola e na velocidade.",
    "Disponibilidade": "Sim",
    "Clube_URL": "https://www.ogol.com.br/equipe/inter-de-limeira/3291",
    "Clube_Logo": "https://www.ogol.com.br/img/logos/equipas/3291_imgbank_1683649721.png"
  },
  {
    "Nome": "Bruno Leite",
    "Nome_Completo": "Bruno da Silva Costa Leite",
    "Idade": 25,
    "Data_Nascimento": "10/04/2000",
    "Local_Nascimento": "Maceió (AL)",
    "Posição": "Meia (Meia Ofensivo)",
    "Clube_Atual": "ABC",
    "Altura": "180cm",
    "Peso": "77kg",
    "Pé_Preferido": "Destro",
    "Histórico_Clubes": "ABC, Botafogo-PB, Joinville",
    "Estatísticas_2025": "29 jogos, 1610 minutos, 3 gols, 0 assistências - Série C: 16J/978M/2G/0A, Copa Brasil: 1J/45M/0G/0A, Paraibano: 11J/569M/1G/0A, C. Nordeste Class.: 1J/18M/0G/0A",
    "Divisão": "Série C",
    "Pontuação": 81,
    "Ranking": 5,
    "Video_URL": "https://www.ogol.com.br/jogador/bruno-leite/554527",
    "Características": "Técnica, visão de jogo, finalização",
    "Foto_URL": "https://cdn-img.zerozero.pt/img/jogadores/27/554527_20231214112008_bruno_leite_1702552808.jpg",
    "Potencial": "Alto",
    "Biografia": "Meia ofensivo de 25 anos, revelado no ABC, com passagem por Botafogo-PB e Joinville. Jogador técnico e com boa finalização.",
    "Análise_Técnica": "Meia ofensivo com boa técnica e finalização. Precisa melhorar a consistência e a marcação.",
    "Disponibilidade": "Sim",
    "Clube_URL": "https://www.ogol.com.br/equipe/abc/3083",
    "Clube_Logo": "https://www.ogol.com.br/img/logos/equipas/3083_imgbank_1685112877.png"
  },
  {
    "Nome": "Caio Vitor",
    "Nome_Completo": "Caio Vitor da Silva Souza",
    "Idade": 24,
    "Data_Nascimento": "15/08/2001",
    "Local_Nascimento": "Angra dos Reis (RJ)",
    "Posição": "Meia (Meia Ofensivo) / Atacante (Ponta Direita)",
    "Clube_Atual": "Maricá",
    "Altura": "180cm",
    "Peso": "72kg",
    "Pé_Preferido": "Destro",
    "Histórico_Clubes": "Maricá, Náutico, Volta Redonda, Ypiranga-RS, Ferroviária, CSA",
    "Estatísticas_2025": "14 jogos, 384 minutos, 1 gol, 0 assistências - Série C: 5J/172M/0G/0A, Copa Brasil: 2J/82M/1G/0A, Copa Rio: 3J/77M/0G/0A, Carioca: 4J/53M/0G/0A",
    "Divisão": "Série C",
    "Pontuação": 79,
    "Ranking": 6,
    "Video_URL": "https://www.ogol.com.br/jogador/caio-vitor/619626",
    "Características": "Versatilidade, técnica, velocidade",
    "Foto_URL": "https://cdn-img.zerozero.pt/img/jogadores/new/96/26/619626_caio_vitor_20250328144401.png",
    "Potencial": "Alto",
    "Biografia": "Meia-atacante versátil de 24 anos, pode atuar como meia ofensivo ou ponta direita. Com passagem por vários clubes do Rio de Janeiro e Nordeste.",
    "Análise_Técnica": "Jogador técnico e versátil, com boa velocidade e capacidade de finalização. Precisa ganhar mais consistência.",
    "Disponibilidade": "Sim",
    "Clube_URL": "https://www.ogol.com.br/equipe/marica/33822",
    "Clube_Logo": "https://www.ogol.com.br/img/logos/equipas/33822_imgbank_1740410608.png"
  },
  {
    "Nome": "Cauari",
    "Nome_Completo": "Cauari Carmo Simão Santos",
    "Idade": 22,
    "Data_Nascimento": "15/10/2002",
    "Local_Nascimento": "-",
    "Posição": "Atacante (Ponta Esquerda) / Atacante (Centroavante)",
    "Clube_Atual": "Portuguesa",
    "Altura": "185cm",
    "Peso": "76kg",
    "Pé_Preferido": "Canhoto",
    "Histórico_Clubes": "Portuguesa, Velo Clube, Brusque, Aparecidense, Galo Maringá",
    "Estatísticas_2025": "17 jogos, 843 minutos, 2 gols, 1 assistência - Série D: 13J/811M/2G/1A, Paulista: 4J/32M/0G/0A",
    "Divisão": "Série D",
    "Pontuação": 77,
    "Ranking": 7,
    "Video_URL": "https://www.ogol.com.br/jogador/cauari/885113",
    "Características": "Força física, finalização, pé esquerdo",
    "Foto_URL": "https://cdn-img.zerozero.pt/img/jogadores/13/885113_20231202012509_cauari_1701480309.jpg",
    "Potencial": "Alto",
    "Biografia": "Atacante canhoto de 22 anos, com boa força física e finalização. Revelado na Portuguesa, com passagem por vários clubes do interior.",
    "Análise_Técnica": "Atacante com bom físico e finalização. Canhoto natural, perigoso nas bolas paradas. Precisa melhorar a movimentação.",
    "Disponibilidade": "Sim",
    "Clube_URL": "https://www.ogol.com.br/equipe/portuguesa/2252",
    "Clube_Logo": "https://www.ogol.com.br/img/logos/equipas/2252_imgbank.png"
  },
  {
    "Nome": "Clessione",
    "Nome_Completo": "Clessione Santos Silva",
    "Idade": 30,
    "Data_Nascimento": "15/06/1994",
    "Local_Nascimento": "-",
    "Posição": "Atacante (Centroavante)",
    "Clube_Atual": "Maranhão",
    "Altura": "175cm",
    "Peso": "79kg",
    "Pé_Preferido": "Canhoto",
    "Histórico_Clubes": "Maranhão, Bahia de Feira",
    "Estatísticas_2025": "39 jogos, 3226 minutos, 13 gols, 1 assistência - Série D: 21J/1717M/7G/1A, Copa Brasil: 1J/90M/0G/0A, Maranhense: 16J/1329M/6G/0A, C. Nordeste Class.: 1J/90M/0G/0A",
    "Divisão": "Série D",
    "Pontuação": 80,
    "Ranking": 8,
    "Video_URL": "https://www.ogol.com.br/jogador/clessione/622395",
    "Características": "Artilheiro, força física, finalização",
    "Foto_URL": "https://cdn-img.zerozero.pt/img/jogadores/new/23/95/622395_clessione_20241226165849.png",
    "Potencial": "Médio",
    "Biografia": "Centroavante canhoto de 30 anos, artilheiro do Maranhão com 13 gols em 2025. Jogador experiente e com boa finalização.",
    "Análise_Técnica": "Centroavante com instinto de gol e boa finalização. Forte no jogo aéreo e nas bolas paradas. Velocidade limitada.",
    "Disponibilidade": "Sim",
    "Clube_URL": "https://www.ogol.com.br/equipe/maranhao/3337",
    "Clube_Logo": "https://www.ogol.com.br/img/logos/equipas/3337_imgbank_1683649910.png"
  },
  {
    "Nome": "Danilinho",
    "Nome_Completo": "Danilo Perassoli da Cruz Albuquerque",
    "Idade": 28,
    "Data_Nascimento": "25/04/1997",
    "Local_Nascimento": "-",
    "Posição": "Meia (Meia Ofensivo)",
    "Clube_Atual": "CSA",
    "Altura": "174cm",
    "Peso": "71kg",
    "Pé_Preferido": "Destro",
    "Histórico_Clubes": "CSA, Moto Club, River-PI, Velo Clube",
    "Estatísticas_2025": "20 jogos, 1193 minutos, 4 gols, 1 assistência - Série C: 3J/77M/0G/0A, Copa Brasil: 1J/27M/0G/0A, Maranhense: 7J/511M/2G/0A, C. Nordeste Class.: 2J/107M/1G/0A, Copa Alagoas: 2J/180M/0G/0A, Copa Nordeste: 5J/291M/1G/1A",
    "Divisão": "Série C",
    "Pontuação": 76,
    "Ranking": 9,
    "Video_URL": "https://www.ogol.com.br/jogador/danilinho/549216",
    "Características": "Técnica, criatividade, finalização",
    "Foto_URL": "https://cdn-img.zerozero.pt/img/jogadores/new/92/16/549216_danilinho_20241017210155.png",
    "Potencial": "Médio",
    "Biografia": "Meia ofensivo de 28 anos, com dupla nacionalidade brasileira e italiana. Jogador técnico e com boa finalização.",
    "Análise_Técnica": "Meia ofensivo criativo, com boa visão de jogo e técnica apurada. Bom cobrador de faltas e finalizador.",
    "Disponibilidade": "Sim",
    "Clube_URL": "https://www.ogol.com.br/equipe/csa/3217",
    "Clube_Logo": "https://www.ogol.com.br/img/logos/equipas/3217_imgbank_1683649471.png"
  },
  {
    "Nome": "Eduardo Moura",
    "Nome_Completo": "Eduardo Junho Gonçalves Moura",
    "Idade": 31,
    "Data_Nascimento": "15/04/1993",
    "Local_Nascimento": "Matinha",
    "Posição": "Defensor (Zagueiro)",
    "Clube_Atual": "Confiança",
    "Altura": "191cm",
    "Peso": "91kg",
    "Pé_Preferido": "Canhoto",
    "Histórico_Clubes": "Confiança, FC Cascavel, Floresta-CE",
    "Estatísticas_2025": "36 jogos, 2865 minutos, 1 gol, 1 assistência - Série C: 15J/1127M/1G/1A, Copa do Brasil: 2J/151M/0G/0A, Sergipano: 10J/848M/0G/0A, Copa Nordeste: 9J/739M/0G/0A",
    "Divisão": "Série C",
    "Pontuação": 75,
    "Ranking": 10,
    "Video_URL": "https://www.ogol.com.br/jogador/eduardo-moura/199844",
    "Características": "Experiência, força física, jogo aéreo",
    "Foto_URL": "https://cdn-img.zerozero.pt/img/jogadores/44/199844_20231207142101_eduardo_junho_1701958861.jpg",
    "Potencial": "Médio",
    "Biografia": "Zagueiro canhoto experiente de 31 anos, com passagem por clubes do Nordeste. Jogador forte fisicamente e bom no jogo aéreo.",
    "Análise_Técnica": "Zagueiro experiente, forte no jogo aéreo e nas divididas. Canhoto natural, o que agrega valor tático.",
    "Disponibilidade": "Sim",
    "Clube_URL": "https://www.ogol.com.br/equipe/confianca/3204",
    "Clube_Logo": "https://www.ogol.com.br/img/logos/equipas/3204_imgbank_1683649357.png"
  },
  {
    "Nome": "Fabrício Oya",
    "Nome_Completo": "Fabrício Keiske Rodrigues Oya",
    "Idade": 28,
    "Data_Nascimento": "15/08/1997",
    "Local_Nascimento": "Campinas (SP)",
    "Posição": "Meia (Meia Ofensivo)",
    "Clube_Atual": "Itabaiana",
    "Altura": "174cm",
    "Peso": "70kg",
    "Pé_Preferido": "Destro",
    "Histórico_Clubes": "Itabaiana, Santo André, Primavera, Azuriz Futebol",
    "Estatísticas_2025": "37 jogos, 1919 minutos, 2 gols, 1 assistência - Série C: 15J/744M/1G/1A, Paulista A2: 15J/740M/0G/0A, Copa Governo Sergipe: 7J/435M/1G/0A",
    "Divisão": "Série C",
    "Pontuação": 74,
    "Ranking": 11,
    "Video_URL": "https://www.ogol.com.br/jogador/fabricio-oya/547654",
    "Características": "Técnica, versatilidade, dupla nacionalidade",
    "Foto_URL": "https://cdn-img.zerozero.pt/img/jogadores/new/76/54/547654_fabricio_oya_20250728154857.jpg",
    "Potencial": "Médio",
    "Biografia": "Meia ofensivo de 28 anos com dupla nacionalidade brasileira e japonesa. Jogador técnico e versátil.",
    "Análise_Técnica": "Meia ofensivo com boa técnica e visão de jogo. Versátil, pode atuar em várias posições do meio-campo.",
    "Disponibilidade": "Sim",
    "Clube_URL": "https://www.ogol.com.br/equipe/itabaiana/3301",
    "Clube_Logo": "https://www.ogol.com.br/img_icon/logos/equipas/45210_imgbank_1698231469.png"
  },
  {
    "Nome": "Ferrugem",
    "Nome_Completo": "Weverton Almeida Santos Evaristo",
    "Idade": 33,
    "Data_Nascimento": "15/03/1988",
    "Local_Nascimento": "São Mateus (ES)",
    "Posição": "Meia (Meia Central) / Defensor (Lateral Direito)",
    "Clube_Atual": "Iguatu",
    "Altura": "182cm",
    "Peso": "67kg",
    "Pé_Preferido": "Destro",
    "Histórico_Clubes": "Iguatu, Monte Roraima, Linense, Real Noroeste, Rio Branco-ES",
    "Estatísticas_2025": "18 jogos, 639 minutos, 1 gol, 0 assistências - Série D: 7J/244M/0G/0A, Roraimense: 4J/186M/0G/0A, Paulista A2: 7J/209M/1G/0A",
    "Divisão": "Série D",
    "Pontuação": 72,
    "Ranking": 12,
    "Video_URL": "https://www.ogol.com.br/jogador/ferrugem/133169",
    "Características": "Versatilidade, experiência, marcação",
    "Foto_URL": "https://cdn-img.zerozero.pt/img/jogadores/new/31/69/133169_ferrugem_20250317214557.jpg",
    "Potencial": "Médio",
    "Biografia": "Meia versátil de 33 anos, pode atuar como meia central ou lateral direito. Jogador experiente com passagem por vários clubes.",
    "Análise_Técnica": "Jogador versátil e experiente, com boa marcação e capacidade de construção. Limitado tecnicamente.",
    "Disponibilidade": "Sim",
    "Clube_URL": "https://www.ogol.com.br/equipe/iguatu/44198",
    "Clube_Logo": "https://www.ogol.com.br/img/logos/equipas/44198_imgbank_1683641132.png"
  },
  {
    "Nome": "Gabriel Vieira",
    "Nome_Completo": "Gabriel Vieira da Silva",
    "Idade": 24,
    "Data_Nascimento": "15/08/2000",
    "Local_Nascimento": "São Felix do Piauí (PI)",
    "Posição": "Meia (Meia Ofensivo)",
    "Clube_Atual": "CSA",
    "Altura": "172cm",
    "Peso": "63kg",
    "Pé_Preferido": "Ambidestro",
    "Histórico_Clubes": "CSA, Fluminense-PI, Rio Grande-RN",
    "Estatísticas_2025": "21 jogos, 1371 minutos, 3 gols, 0 assistências - Série C: 7J/300M/0G/0A, Piauiense: 11J/924M/2G/0A, C. Nordeste Class.: 1J/120M/1G/0A, Copa Nordeste: 2J/27M/0G/0A",
    "Divisão": "Série C",
    "Pontuação": 78,
    "Ranking": 13,
    "Video_URL": "https://www.ogol.com.br/jogador/gabriel-vieira/860865",
    "Características": "Técnica, ambidestro, visão de jogo",
    "Foto_URL": "https://cdn-img.zerozero.pt/img/jogadores/new/08/65/860865_gabriel_vieira_20241018225112.png",
    "Potencial": "Alto",
    "Biografia": "Meia ofensivo ambidestro de 24 anos, com boa técnica e visão de jogo. Revelado no CSA.",
    "Análise_Técnica": "Jogador técnico e criativo, com a rara característica de ser ambidestro. Boa visão de jogo.",
    "Disponibilidade": "Sim",
    "Clube_URL": "https://www.ogol.com.br/equipe/csa/3217",
    "Clube_Logo": "https://www.ogol.com.br/img/logos/equipas/3217_imgbank_1683649471.png"
  },
  {
    "Nome": "Gabryel Martins",
    "Nome_Completo": "Gabryel da Silva Martins",
    "Idade": 24,
    "Data_Nascimento": "15/08/2000",
    "Local_Nascimento": "Saquarema (RJ)",
    "Posição": "Atacante (Ponta Direita) (Ponta Esquerda)",
    "Clube_Atual": "Ypiranga-RS",
    "Altura": "169cm",
    "Peso": "64kg",
    "Pé_Preferido": "Destro",
    "Histórico_Clubes": "Ypiranga-RS, Remo, Al-Muharraq, Ferroviário",
    "Estatísticas_2025": "12 jogos, 369 minutos, 1 gol, 0 assistências - Série B: 1J/14M/0G/0A, Série C: 9J/333M/1G/0A, Copa Brasil: 1J/2M/0G/0A, Paraense: 1J/20M/0G/0A",
    "Divisão": "Série C",
    "Pontuação": 76,
    "Ranking": 14,
    "Video_URL": "https://www.ogol.com.br/jogador/gabryel-martins/825449",
    "Características": "Velocidade, drible, finalização",
    "Foto_URL": "https://cdn-img.zerozero.pt/img/jogadores/49/825449_20230421135142_gabryel_martins.jpg",
    "Potencial": "Alto",
    "Biografia": "Atacante veloz de 24 anos, pode atuar pelas duas pontas. Com experiência no futebol brasileiro e do Bahrein.",
    "Análise_Técnica": "Atacante rápido e técnico, com boa capacidade de drible e finalização. Precisa ganhar mais consistência.",
    "Disponibilidade": "Sim",
    "Clube_URL": "https://www.ogol.com.br/equipe/ypiranga-rs/3541",
    "Clube_Logo": "https://www.ogol.com.br/img/logos/equipas/3541_imgbank_1685114602.png"
  },
  {
    "Nome": "Guilherme Cachoeira",
    "Nome_Completo": "Guilherme Cachoeira Silveira",
    "Idade": 23,
    "Data_Nascimento": "15/08/2001",
    "Local_Nascimento": "Joinville (SC)",
    "Posição": "Atacante (Ponta Esquerda) / Atacante (Ponta Direita)",
    "Clube_Atual": "Athletic-MG",
    "Altura": "167cm",
    "Peso": "67kg",
    "Pé_Preferido": "Destro",
    "Histórico_Clubes": "Athletic-MG, CSA, Remo, Joinville",
    "Estatísticas_2025": "48 jogos, 3539 minutos, 8 gols, 8 assistências - Série B: 3J/51M/0G/0A, Série C: 19J/1399M/1G/1A, Copa Brasil: 6J/457M/1G/3A, C. Nordeste Class.: 2J/180M/1G/0A, Copa Alagoas: 1J/39M/0G/0A, Alagoano: 9J/726M/2G/3A, Copa Nordeste: 8J/687M/3G/1A",
    "Divisão": "Série B/C",
    "Pontuação": 84,
    "Ranking": 15,
    "Video_URL": "https://www.ogol.com.br/jogador/guilherme-cachoeira/682147",
    "Características": "Versatilidade, técnica, assistências",
    "Foto_URL": "https://cdn-img.zerozero.pt/img/jogadores/new/18/34/1231834_guilherme_cachoeira_20250116123213.jpg",
    "Potencial": "Alto",
    "Biografia": "Atacante versátil de 23 anos, pode atuar por ambas as pontas. Jogador técnico com bom número de assistências.",
    "Análise_Técnica": "Atacante técnico e versátil, com boa capacidade de criação e finalização. Excelente em assistências.",
    "Disponibilidade": "Sim",
    "Clube_URL": "https://www.ogol.com.br/equipe/athletic-mg/233398",
    "Clube_Logo": "https://www.ogol.com.br/img/logos/equipas/233398_imgbank_1683623794.png"
  },
  {
    "Nome": "Jhan Torres",
    "Nome_Completo": "Jhan Pool Torres Cañate",
    "Idade": 25,
    "Data_Nascimento": "15/08/1999",
    "Local_Nascimento": "Barranquilla",
    "Posição": "Defensor (Zagueiro) (Lateral Esquerdo)",
    "Clube_Atual": "Brusque",
    "Altura": "186cm",
    "Peso": "79kg",
    "Pé_Preferido": "Canhoto",
    "Histórico_Clubes": "Brusque, Barranquilla FC",
    "Estatísticas_2025": "39 jogos, 3503 minutos, 1 gol, 0 assistências - Série C: 23J/2070M/0G/0A, Copa do Brasil: 4J/360M/1G/0A, Catarinense: 12J/1073M/0G/0A",
    "Divisão": "Série C",
    "Pontuação": 77,
    "Ranking": 16,
    "Video_URL": "https://www.ogol.com.br/jogador/jhan-torres/790036",
    "Características": "Força física, jogo aéreo, canhoto",
    "Foto_URL": "https://cdn-img.zerozero.pt/img/jogadores/new/00/36/790036_jhan_torres_20240831031340.jpg",
    "Potencial": "Alto",
    "Biografia": "Zagueiro colombiano de 25 anos, canhoto e com boa força física. Com experiência no futebol brasileiro.",
    "Análise_Técnica": "Zagueiro canhoto com bom jogo aéreo e força física. Boa saída de bola e experiência internacional.",
    "Disponibilidade": "Sim",
    "Clube_URL": "https://www.ogol.com.br/equipe/brusque/15724",
    "Clube_Logo": "https://www.ogol.com.br/img/logos/equipas/15724_imgbank_1683641358.png"
  },
  {
    "Nome": "Joílson",
    "Nome_Completo": "Joílson Evangelista dos Santos Júnior",
    "Idade": 29,
    "Data_Nascimento": "15/08/1995",
    "Local_Nascimento": "Salvador",
    "Posição": "Meia (Volante) / Atacante (Ponta Direita)",
    "Clube_Atual": "Vitória da Conquista",
    "Altura": "174cm",
    "Peso": "74kg",
    "Pé_Preferido": "Destro",
    "Histórico_Clubes": "Vitória da Conquista, Murici, Colo Colo-BA, Desportiva Aracaju, Jequié",
    "Estatísticas_2025": "13 jogos, 902 minutos, 0 gols, 0 assistências - Baiano: 4J/223M/0G/0A, Baiano 2ª D: 5J/354M/0G/0A, Copa Alagoas: 4J/325M/0G/0A",
    "Divisão": "Estadual",
    "Pontuação": 70,
    "Ranking": 17,
    "Video_URL": "https://www.ogol.com.br/jogador/joilson/547289",
    "Características": "Versatilidade, marcação, experiência",
    "Foto_URL": "https://cdn-img.zerozero.pt/img/jogadores/new/17/74/1151774_joilson_20240725153056.png",
    "Potencial": "Médio",
    "Biografia": "Meia versátil de 29 anos, pode atuar como volante ou ponta direita. Jogador experiente do futebol baiano.",
    "Análise_Técnica": "Jogador versátil e experiente, com boa marcação. Limitado tecnicamente.",
    "Disponibilidade": "Sim",
    "Clube_URL": "https://www.ogol.com.br/equipe/vitoria-da-conquista/13686",
    "Clube_Logo": "https://www.ogol.com.br/img/logos/equipas/13686_imgbank.png"
  },
  {
    "Nome": "Kadu",
    "Nome_Completo": "Carlos Eduardo de Sousa Leopoldino",
    "Idade": 24,
    "Data_Nascimento": "15/08/2000",
    "Local_Nascimento": "-",
    "Posição": "Atacante (Ponta Esquerda)",
    "Clube_Atual": "Anápolis",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "Destro",
    "Histórico_Clubes": "Anápolis, Rio Verde-GO, Paranavaí",
    "Estatísticas_2025": "28 jogos, 1796 minutos, 4 gols, 0 assistências - Série C: 11J/848M/3G/0A, Goiano: 17J/948M/1G/0A",
    "Divisão": "Série C",
    "Pontuação": 73,
    "Ranking": 18,
    "Video_URL": "https://www.ogol.com.br/jogador/kadu/981056",
    "Características": "Velocidade, finalização, drible",
    "Foto_URL": "https://cdn-img.zerozero.pt/img/jogadores/new/10/56/981056_kadu_20250115102852.jpg",
    "Potencial": "Alto",
    "Biografia": "Atacante veloz de 24 anos, especialista em ponta esquerda. Revelado no Anápolis.",
    "Análise_Técnica": "Atacante rápido e técnico, com boa finalização. Precisa ganhar mais consistência.",
    "Disponibilidade": "Sim",
    "Clube_URL": "https://www.ogol.com.br/equipe/anapolis/3108",
    "Clube_Logo": "https://www.ogol.com.br/img/logos/equipas/3108_imgbank_1683641682.png"
  },
  {
    "Nome": "Kaio Nunes",
    "Nome_Completo": "Kaio Nunes Ferreira",
    "Idade": 29,
    "Data_Nascimento": "15/08/1995",
    "Local_Nascimento": "Brasília (DF)",
    "Posição": "Atacante (Ponta Esquerda)",
    "Clube_Atual": "Aparecidense",
    "Altura": "180cm",
    "Peso": "76kg",
    "Pé_Preferido": "Destro",
    "Histórico_Clubes": "Aparecidense, Paraná, Brasiliense, Real Brasília",
    "Estatísticas_2025": "25 jogos, 1649 minutos, 7 gols, 0 assistências - Série D: 15J/1042M/7G/0A, Copa Brasil: 4J/225M/0G/0A, Goiano: 5J/324M/0G/0A, Paranaense: 1J/58M/0G/0A",
    "Divisão": "Série D",
    "Pontuação": 75,
    "Ranking": 19,
    "Video_URL": "https://www.ogol.com.br/jogador/kaio-nunes/516542",
    "Características": "Finalização, experiência, força física",
    "Foto_URL": "https://cdn-img.zerozero.pt/img/jogadores/new/65/42/516542_kaio_nunes_20250205210037.jpg",
    "Potencial": "Médio",
    "Biografia": "Atacante experiente de 29 anos, com boa finalização. Passagem por vários clubes do Centro-Oeste.",
    "Análise_Técnica": "Atacante com boa finalização e experiência. Forte fisicamente, mas velocidade limitada.",
    "Disponibilidade": "Sim",
    "Clube_URL": "https://www.ogol.com.br/equipe/aparecidense/3111",
    "Clube_Logo": "https://www.ogol.com.br/img/logos/equipas/3111_imgbank_1685114149.png"
  },
  {
    "Nome": "Léo Rigo",
    "Nome_Completo": "Leonardo Rigo da Silva",
    "Idade": 26,
    "Data_Nascimento": "15/08/1998",
    "Local_Nascimento": "Cascavel (PR)",
    "Posição": "Defensor (Zagueiro) / Defensor (Lateral Esquerdo)",
    "Clube_Atual": "Sem Clube",
    "Altura": "188cm",
    "Peso": "88kg",
    "Pé_Preferido": "Canhoto",
    "Histórico_Clubes": "Joinville, Volta Redonda, Hercílio Luz, Aparecidense, Marcílio Dias",
    "Estatísticas_2025": "24 jogos, 0 gols, 1 assistência (Joinville)",
    "Divisão": "Sem Clube",
    "Pontuação": 71,
    "Ranking": 20,
    "Video_URL": "https://www.ogol.com.br/jogador/leo-rigo/464251",
    "Características": "Versatilidade, força física, canhoto",
    "Foto_URL": "https://cdn-img.zerozero.pt/img/jogadores/new/42/51/464251_leo_rigo_20240701163542.png",
    "Potencial": "Médio",
    "Biografia": "Zagueiro canhoto versátil de 26 anos, pode atuar também como lateral esquerdo. Atualmente sem clube.",
    "Análise_Técnica": "Zagueiro canhoto versátil, com bom físico e jogo aéreo. Precisa de mais regularidade.",
    "Disponibilidade": "Sim",
    "Clube_URL": "#",
    "Clube_Logo": "placeholder_green"
  },
  {
    "Nome": "Matheus Melo",
    "Nome_Completo": "Matheus Augusto de Melo",
    "Idade": 28,
    "Data_Nascimento": "15/08/1996",
    "Local_Nascimento": "Toledo (PR)",
    "Posição": "Meia (Meia Ofensivo)",
    "Clube_Atual": "Maringá",
    "Altura": "182cm",
    "Peso": "75kg",
    "Pé_Preferido": "Canhoto",
    "Histórico_Clubes": "Maringá, Santa Cruz, Náutico, Amazonas FC",
    "Estatísticas_2025": "11 jogos, 608 minutos, 3 gols, 0 assistências - Série C: 1J/14M/0G/0A, Pernambucano: 9J/549M/3G/0A, C. Nordeste Class.: 1J/45M/0G/0A",
    "Divisão": "Série C",
    "Pontuação": 74,
    "Ranking": 21,
    "Video_URL": "https://www.ogol.com.br/jogador/matheus-melo/725366",
    "Características": "Técnica, finalização, visão de jogo",
    "Foto_URL": "https://cdn-img.zerozero.pt/img/jogadores/new/98/15/1239815_matheus_melo_20250131140735.png",
    "Potencial": "Alto",
    "Biografia": "Meia ofensivo canhoto de 28 anos, com boa técnica e finalização. Experiência em clubes do Sul e Nordeste.",
    "Análise_Técnica": "Meia ofensivo técnico, com boa finalização e visão de jogo. Canhoto natural.",
    "Disponibilidade": "Sim",
    "Clube_URL": "https://www.ogol.com.br/equipe/maringa/45210",
    "Clube_Logo": "https://www.ogol.com.br/img/logos/equipas/45210_imgbank_1698231469.png"
  },
  {
    "Nome": "Matheus Recife",
    "Nome_Completo": "Matheus Vitor Xavier Viana",
    "Idade": 28,
    "Data_Nascimento": "15/08/1996",
    "Local_Nascimento": "Recife (PE)",
    "Posição": "Defensor (Zagueiro) (Lateral Esquerdo)",
    "Clube_Atual": "Atlético Tubarão",
    "Altura": "184cm",
    "Peso": "79kg",
    "Pé_Preferido": "Canhoto",
    "Histórico_Clubes": "Atlético Tubarão, Camboriú, Penedense, Coruripe, Potiguar",
    "Estatísticas_2025": "34 jogos, 2932 minutos, 2 gols, 0 assistências - Série D: 1J/90M/0G/0A, Catarinense B: 14J/1245M/1G/0A, Copa Alagoas: 7J/630M/0G/0A, Alagoano: 7J/517M/1G/0A, Copa Santa Catarina: 5J/450M/0G/0A",
    "Divisão": "Série D",
    "Pontuação": 73,
    "Ranking": 22,
    "Video_URL": "https://www.ogol.com.br/jogador/matheus-recife/547946",
    "Características": "Versatilidade, força física, canhoto",
    "Foto_URL": "https://cdn-img.zerozero.pt/img/jogadores/new/79/46/547946_matheus_recife_20250523115018.jpg",
    "Potencial": "Médio",
    "Biografia": "Zagueiro canhoto versátil de 28 anos, pode atuar também como lateral esquerdo. Experiência em vários clubes do Nordeste.",
    "Análise_Técnica": "Zagueiro canhoto versátil, com bom físico e experiência. Boa em bolas paradas.",
    "Disponibilidade": "Sim",
    "Clube_URL": "https://www.ogol.com.br/equipe/atletico-tubarao/15723",
    "Clube_Logo": "https://www.ogol.com.br/img/logos/equipas/15723_imgbank.png"
  },
  {
    "Nome": "Randerson",
    "Nome_Completo": "Randerson de Sousa Almeida",
    "Idade": 22,
    "Data_Nascimento": "15/08/2002",
    "Local_Nascimento": "Salvador (BA)",
    "Posição": "Meia (Volante)",
    "Clube_Atual": "ABC",
    "Altura": "184cm",
    "Peso": "70kg",
    "Pé_Preferido": "Destro",
    "Histórico_Clubes": "ABC, Atlético Goianiense",
    "Estatísticas_2025": "8 jogos, 423 minutos, 0 gols, 0 assistências - Série C: 5J/209M/0G/0A, Potiguar: 3J/214M/0G/0A",
    "Divisão": "Série C",
    "Pontuação": 70,
    "Ranking": 23,
    "Video_URL": "https://www.ogol.com.br/jogador/randerson/1240690",
    "Características": "Marcação, força física, projeção",
    "Foto_URL": "https://cdn-img.zerozero.pt/img/jogadores/new/23/96/1232396_randerson_20250117115930.png",
    "Potencial": "Alto",
    "Biografia": "Volante jovem de 22 anos, com boa projeção e marcação. Revelado no ABC.",
    "Análise_Técnica": "Volante com boa marcação e físico. Jovem com potencial de crescimento.",
    "Disponibilidade": "Sim",
    "Clube_URL": "https://www.ogol.com.br/equipe/abc/3083",
    "Clube_Logo": "https://www.ogol.com.br/img/logos/equipas/3083_imgbank_1685112877.png"
  },
  {
    "Nome": "Rayan Ribeiro",
    "Nome_Completo": "Rayan Rodrigues Ribeiro",
    "Idade": 29,
    "Data_Nascimento": "15/08/1995",
    "Local_Nascimento": "Vazante (MG)",
    "Posição": "Defensor (Zagueiro)",
    "Clube_Atual": "Retrô FC",
    "Altura": "186cm",
    "Peso": "87kg",
    "Pé_Preferido": "Destro",
    "Histórico_Clubes": "Retrô FC, Londrina, Itabirito FC",
    "Estatísticas_2025": "36 jogos, 3021 minutos, 0 gols, 0 assistências - Série C: 16J/1311M/0G/0A, Copa Brasil: 6J/540M/0G/0A, Pernambucano: 13J/1080M/0G/0A, C. Nordeste Class.: 1J/90M/0G/0A",
    "Divisão": "Série C",
    "Pontuação": 75,
    "Ranking": 24,
    "Video_URL": "https://www.ogol.com.br/jogador/rayan-ribeiro/556468",
    "Características": "Força física, jogo aéreo, experiência",
    "Foto_URL": "https://cdn-img.zerozero.pt/img/jogadores/new/85/07/1338507_rayan_ribeiro_20250911115059.jpg",
    "Potencial": "Médio",
    "Biografia": "Zagueiro experiente de 29 anos, com boa força física e jogo aéreo. Passagem por clubes do Nordeste.",
    "Análise_Técnica": "Zagueiro sólido, com bom jogo aéreo e experiência. Forte nas divididas.",
    "Disponibilidade": "Sim",
    "Clube_URL": "https://www.ogol.com.br/equipe/retro-fc/240756",
    "Clube_Logo": "https://www.ogol.com.br/img_icon/logos/equipas/45210_imgbank_1698231469.png"
  },
  {
    "Nome": "Reifit",
    "Nome_Completo": "Reifit Alves de Faria",
    "Idade": 24,
    "Data_Nascimento": "15/08/2000",
    "Local_Nascimento": "Brasilia (DF)",
    "Posição": "Atacante (Ponta Direita)",
    "Clube_Atual": "Figueirense",
    "Altura": "170cm",
    "Peso": "65kg",
    "Pé_Preferido": "Canhoto",
    "Histórico_Clubes": "Figueirense, Ypiranga-RS, Oeste",
    "Estatísticas_2025": "22 jogos, 760 minutos, 3 gols, 4 assistências - Série C: 11J/278M/0G/2A, Catarinense: 6J/181M/1G/1A, Copa Santa Catarina: 5J/301M/2G/1A",
    "Divisão": "Série C",
    "Pontuação": 76,
    "Ranking": 25,
    "Video_URL": "https://www.ogol.com.br/jogador/reifit/559725",
    "Características": "Velocidade, drible, assistências",
    "Foto_URL": "https://cdn-img.zerozero.pt/img/jogadores/new/97/25/559725_reifit_20250319231655.png",
    "Potencial": "Alto",
    "Biografia": "Atacante veloz de 24 anos, canhoto atuando pela direita. Bom em dribles e assistências.",
    "Análise_Técnica": "Atacante rápido e técnico, com boa capacidade de drible e criação. Canhoto natural.",
    "Disponibilidade": "Sim",
    "Clube_URL": "https://www.ogol.com.br/equipe/figueirense/2238",
    "Clube_Logo": "https://www.ogol.com.br/img/logos/equipas/2238_imgbank_1683640910.png"
  },
  {
    "Nome": "Robertinho",
    "Nome_Completo": "Roberto Badermann Rebechi",
    "Idade": 25,
    "Data_Nascimento": "15/08/1999",
    "Local_Nascimento": "Taquara (RS)",
    "Posição": "Atacante (Ponta Direita) / Meia (Meia Ofensivo)",
    "Clube_Atual": "Maringá",
    "Altura": "171cm",
    "Peso": "64kg",
    "Pé_Preferido": "Canhoto",
    "Histórico_Clubes": "Maringá, Juventude",
    "Estatísticas_2025": "34 jogos, 1648 minutos, 1 gol, 1 assistência - Série C: 15J/690M/0G/1A, Copa Brasil: 4J/148M/0G/0A, Paranaense: 15J/810M/1G/0A",
    "Divisão": "Série C",
    "Pontuação": 74,
    "Ranking": 26,
    "Video_URL": "https://www.ogol.com.br/jogador/robertinho/620503",
    "Características": "Versatilidade, técnica, drible",
    "Foto_URL": "https://cdn-img.zerozero.pt/img/jogadores/new/05/03/620503_robertinho_20250318160439.png",
    "Potencial": "Alto",
    "Biografia": "Atacante versátil de 25 anos, pode atuar como ponta direita ou meia ofensivo. Canhoto técnico.",
    "Análise_Técnica": "Jogador técnico e versátil, com boa capacidade de drible. Canhoto natural.",
    "Disponibilidade": "Sim",
    "Clube_URL": "https://www.ogol.com.br/equipe/maringa/45210",
    "Clube_Logo": "https://www.ogol.com.br/img/logos/equipas/45210_imgbank_1698231469.png"
  },
  {
    "Nome": "Rodolfo Filemon",
    "Nome_Completo": "Rodolfo Filemon de Oliveira da Silva",
    "Idade": 30,
    "Data_Nascimento": "15/08/1994",
    "Local_Nascimento": "São Simão (GO)",
    "Posição": "Defensor (Zagueiro)",
    "Clube_Atual": "ABC",
    "Altura": "184cm",
    "Peso": "78kg",
    "Pé_Preferido": "Destro",
    "Histórico_Clubes": "ABC, Itabirito FC, Noroeste, FC Cascavel, Portuguesa-RJ",
    "Estatísticas_2025": "23 jogos, 1879 minutos, 1 gol, 0 assistências - Série C: 2J/112M/0G/0A, Série D: 11J/952M/1G/0A, Paulista: 10J/815M/0G/0A",
    "Divisão": "Série C",
    "Pontuação": 72,
    "Ranking": 27,
    "Video_URL": "https://www.ogol.com.br/jogador/rodolfo-filemon/456173",
    "Características": "Experiência, jogo aéreo, liderança",
    "Foto_URL": "https://cdn-img.zerozero.pt/img/jogadores/new/61/73/456173_rodolfo_filemon_20250325000054.png",
    "Potencial": "Médio",
    "Biografia": "Zagueiro experiente de 30 anos, com passagem por vários clubes. Líder em campo.",
    "Análise_Técnica": "Zagueiro experiente, com bom jogo aéreo e liderança. Sólido defensivamente.",
    "Disponibilidade": "Sim",
    "Clube_URL": "https://www.ogol.com.br/equipe/abc/3083",
    "Clube_Logo": "https://www.ogol.com.br/img_icon/logos/equipas/45210_imgbank_1698231469.png"
  },
  {
    "Nome": "Ryan",
    "Nome_Completo": "Ryan Aparecido Lima Cassiano",
    "Idade": 24,
    "Data_Nascimento": "15/08/2000",
    "Local_Nascimento": "-",
    "Posição": "Atacante (Ponta Esquerda) / Meia (Meia Ofensivo)",
    "Clube_Atual": "Maranhão",
    "Altura": "170cm",
    "Peso": "67kg",
    "Pé_Preferido": "Canhoto",
    "Histórico_Clubes": "Maranhão, Athletic-MG, Moto Club",
    "Estatísticas_2025": "38 jogos, 2706 minutos, 10 gols, 1 assistência - Série D: 19J/1524M/5G/1A, Copa Brasil: 1J/9M/0G/0A, Maranhense: 17J/1110M/5G/0A, C. Nordeste Class.: 1J/63M/0G/0A",
    "Divisão": "Série D",
    "Pontuação": 77,
    "Ranking": 28,
    "Video_URL": "https://www.ogol.com.br/jogador/ryan/691948",
    "Características": "Finalização, velocidade, versatilidade",
    "Foto_URL": "https://cdn-img.zerozero.pt/img/jogadores/new/19/48/691948_ryan_20241226165808.png",
    "Potencial": "Alto",
    "Biografia": "Atacante canhoto versátil de 24 anos, com boa finalização. Artilheiro do Maranhão em 2025.",
    "Análise_Técnica": "Atacante com boa finalização e velocidade. Versátil, pode atuar em várias posições ofensivas.",
    "Disponibilidade": "Sim",
    "Clube_URL": "https://www.ogol.com.br/equipe/maranhao/3337",
    "Clube_Logo": "https://www.ogol.com.br/img/logos/equipas/3337_imgbank_1683649910.png"
  },
  {
    "Nome": "Sávio Maciel",
    "Nome_Completo": "Sávio dos Santos Maciel",
    "Idade": 28,
    "Data_Nascimento": "15/08/1996",
    "Local_Nascimento": "Santo Amaro (BH)",
    "Posição": "Defensor (Zagueiro) / Defensor (Lateral Esquerdo)",
    "Clube_Atual": "Burgan SC",
    "Altura": "191cm",
    "Peso": "82kg",
    "Pé_Preferido": "Canhoto",
    "Histórico_Clubes": "Burgan SC, Altos, Estanciano, Monte Roraima, Guadalupe",
    "Estatísticas_2025": "Sem dados de resumo",
    "Divisão": "Internacional",
    "Pontuação": 70,
    "Ranking": 29,
    "Video_URL": "https://www.ogol.com.br/jogador/savio-maciel/550295",
    "Características": "Altura, jogo aéreo, versatilidade",
    "Foto_URL": "https://cdn-img.zerozero.pt/img/jogadores/new/02/95/550295_savio_maciel_20241106144506.jpg",
    "Potencial": "Médio",
    "Biografia": "Zagueiro alto e versátil de 28 anos, atualmente no futebol do Kuwait. Experiência no Brasil.",
    "Análise_Técnica": "Zagueiro alto com bom jogo aéreo. Versátil, pode atuar como lateral esquerdo.",
    "Disponibilidade": "Sim",
    "Clube_URL": "https://www.ogol.com.br/equipe/burgan-sc/114877",
    "Clube_Logo": "https://www.ogol.com.br/img/logos/equipas/114877_imgbank.gif"
  },
  {
    "Nome": "Thomás Kayck",
    "Nome_Completo": "Thomás Kayck Martins de Lima",
    "Idade": 29,
    "Data_Nascimento": "15/08/1995",
    "Local_Nascimento": "Rio Largo (AL)",
    "Posição": "Defensor (Zagueiro) (Lateral Esquerdo)",
    "Clube_Atual": "Floresta-CE",
    "Altura": "192cm",
    "Peso": "92kg",
    "Pé_Preferido": "Canhoto",
    "Histórico_Clubes": "Floresta-CE, Primavera, Portuguesa-RJ, Figueirense",
    "Estatísticas_2025": "29 jogos, 2556 minutos, 1 gol, 0 assistências - Série C: 21J/1890M/1G/0A, Copa Brasil: 1J/90M/0G/0A, Carioca: 7J/576M/0G/0A",
    "Divisão": "Série C",
    "Pontuação": 73,
    "Ranking": 30,
    "Video_URL": "https://www.ogol.com.br/jogador/thomas-kayck/550708",
    "Características": "Altura, força física, jogo aéreo",
    "Foto_URL": "https://cdn-img.zerozero.pt/img/jogadores/new/07/08/550708_thomas_kayck_20250307201137.jpg",
    "Potencial": "Médio",
    "Biografia": "Zagueiro alto e forte de 29 anos, com boa presença física. Experiência em clubes do Nordeste.",
    "Análise_Técnica": "Zagueiro com excelente físico e jogo aéreo. Forte nas divididas e bolas paradas.",
    "Disponibilidade": "Sim",
    "Clube_URL": "https://www.ogol.com.br/equipe/floresta-ce/86295",
    "Clube_Logo": "https://www.ogol.com.br/img/logos/equipas/86295_imgbank_1685114219.png"
  },
  {
    "Nome": "Vini Moura",
    "Nome_Completo": "Vinicius dos Santos de Moura",
    "Idade": 28,
    "Data_Nascimento": "15/08/1996",
    "Local_Nascimento": "Curitiba (PR)",
    "Posição": "Atacante (Ponta Direita) / Atacante (2º Atacante)",
    "Clube_Atual": "FC Cascavel",
    "Altura": "181cm",
    "Peso": "76kg",
    "Pé_Preferido": "Canhoto",
    "Histórico_Clubes": "FC Cascavel, Santa Cruz, Volta Redonda",
    "Estatísticas_2025": "24 jogos, 1630 minutos, 0 gols, 1 assistência - Série D: 16J/1254M/0G/1A, Pernambucano: 7J/331M/0G/0A, C. Nordeste Class.: 1J/45M/0G/0A",
    "Divisão": "Série D",
    "Pontuação": 71,
    "Ranking": 31,
    "Video_URL": "https://www.ogol.com.br/jogador/vini-moura/847695",
    "Características": "Versatilidade, técnica, criação",
    "Foto_URL": "https://cdn-img.zerozero.pt/img/jogadores/95/847695_20230124160844_vini_moura.jpg",
    "Potencial": "Médio",
    "Biografia": "Atacante versátil de 28 anos, pode atuar como ponta direita ou segundo atacante. Canhoto técnico.",
    "Análise_Técnica": "Atacante técnico e versátil, com boa capacidade de criação. Canhoto natural.",
    "Disponibilidade": "Sim",
    "Clube_URL": "https://www.ogol.com.br/equipe/fc-cascavel/43195",
    "Clube_Logo": "https://www.ogol.com.br/img/logos/equipas/43195_imgbank_1683624765.png"
  },
  {
    "Nome": "Willian (Matheus Mega)",
    "Nome_Completo": "Willian Procopio Barbosa Junior",
    "Idade": 28,
    "Data_Nascimento": "15/08/1996",
    "Local_Nascimento": "-",
    "Posição": "Defensor (Lateral Direito)",
    "Clube_Atual": "Sem Clube",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "-",
    "Histórico_Clubes": "Dom Bosco, Araxá, Botafogo-BA",
    "Estatísticas_2025": "Estatísticas: 37 jogos, 0 gols",
    "Divisão": "Sem Clube",
    "Pontuação": 65,
    "Ranking": 32,
    "Video_URL": "https://www.ogol.com.br/jogador/matheus-mega/620528",
    "Características": "Experiência, marcação, projeção",
    "Foto_URL": "https://cdn-img.zerozero.pt/img/jogadores/28/620528_20210625205015_willian.jpg",
    "Potencial": "Baixo",
    "Biografia": "Lateral direito de 28 anos, atualmente sem clube. Experiência em clubes do interior.",
    "Análise_Técnica": "Lateral direito experiente, com boa marcação. Limitado ofensivamente.",
    "Disponibilidade": "Não",
    "Clube_URL": "#",
    "Clube_Logo": "placeholder_green"
  },
  {
    "Nome": "Guilherme Cachoeira",
    "Nome_Completo": "Guilherme Cachoeira Santos",
    "Idade": 23,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Atacante/Ponta",
    "Clube_Atual": "Athletic-MG",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "8 gols, 8 assistências, em 45 jogos",
    "Divisão": "Série B",
    "Pontuação": 89,
    "Ranking": 33,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Alto",
    "Biografia": "Atleta Guilherme Cachoeira de 23 anos que atua como Atacante no Athletic-MG. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 23 anos com potencial interessante na posição de Atacante. Análise em desenvolvimento."
  },
  {
    "Nome": "Thauan Williams",
    "Nome_Completo": "Thauan Williams Jesus Silva",
    "Idade": 21,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Atacante/Ponta",
    "Clube_Atual": "Londrina",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "Estatísticas em análise",
    "Divisão": "Série C",
    "Pontuação": 87,
    "Ranking": 34,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Muito Alto",
    "Biografia": "Atleta Thauan Williams de 21 anos que atua como Atacante no Londrina. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 21 anos com potencial interessante na posição de Atacante. Análise em desenvolvimento."
  },
  {
    "Nome": "Kaio Nunes",
    "Nome_Completo": "Kaio Nunes Ferreira",
    "Idade": 29,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Atacante/Ponta",
    "Clube_Atual": "Aparecidense",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "Estatísticas em análise",
    "Divisão": "Série D",
    "Pontuação": 85,
    "Ranking": 35,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Médio",
    "Biografia": "Atleta Kaio Nunes de 29 anos que atua como Atacante no Aparecidense. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 29 anos com potencial interessante na posição de Atacante. Análise em desenvolvimento."
  },
  {
    "Nome": "Jhemerson",
    "Nome_Completo": "Jhemerson Guimarães Gaigher",
    "Idade": 28,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Meia",
    "Clube_Atual": "Guarani",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "Estatísticas em análise",
    "Divisão": "Série B/C",
    "Pontuação": 84,
    "Ranking": 36,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Médio",
    "Biografia": "Atleta Jhemerson de 28 anos que atua como Meia no Guarani. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 28 anos com potencial interessante na posição de Meia. Análise em desenvolvimento."
  },
  {
    "Nome": "Bruno Leite",
    "Nome_Completo": "Bruno Leite Santos",
    "Idade": 25,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Meia",
    "Clube_Atual": "ABC",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "Estatísticas em análise",
    "Divisão": "Série C",
    "Pontuação": 83,
    "Ranking": 37,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Alto",
    "Biografia": "Atleta Bruno Leite de 25 anos que atua como Meia no ABC. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 25 anos com potencial interessante na posição de Meia. Análise em desenvolvimento."
  },
  {
    "Nome": "Jhan Torres",
    "Nome_Completo": "Jhan Pool Torres Cañate",
    "Idade": 24,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Defensor",
    "Clube_Atual": "Brusque",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "Estatísticas em análise",
    "Divisão": "Série B",
    "Pontuação": 82,
    "Ranking": 38,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Alto",
    "Biografia": "Atleta Jhan Torres de 24 anos que atua como Defensor no Brusque. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 24 anos com potencial interessante na posição de Defensor. Análise em desenvolvimento."
  },
  {
    "Nome": "Denner",
    "Nome_Completo": "Denner Fernando Melz",
    "Idade": 25,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Meia",
    "Clube_Atual": "Noroeste",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "Estatísticas em análise",
    "Divisão": "Regional",
    "Pontuação": 81,
    "Ranking": 39,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Alto",
    "Biografia": "Atleta Denner de 25 anos que atua como Meio-campista no Noroeste. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 25 anos com potencial interessante na posição de Meio-campista. Análise em desenvolvimento."
  },
  {
    "Nome": "Balaninho",
    "Nome_Completo": "Daniel Gonçalves Balaninho",
    "Idade": 26,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Atacante/Ponta",
    "Clube_Atual": "CSA",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "Estatísticas em análise",
    "Divisão": "Série D",
    "Pontuação": 80,
    "Ranking": 40,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Alto",
    "Biografia": "Atleta Balaninho de 26 anos que atua como Atacante no CSA. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 26 anos com potencial interessante na posição de Atacante. Análise em desenvolvimento."
  },
  {
    "Nome": "Léo Rigo",
    "Nome_Completo": "Leonardo Rigo Santos",
    "Idade": 26,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Defensor",
    "Clube_Atual": "Londrina",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "1 gols, 0 assistências, em 19 jogos",
    "Divisão": "Série C",
    "Pontuação": 79,
    "Ranking": 41,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Alto",
    "Biografia": "Atleta Léo Rigo de 26 anos que atua como Zagueiro no Londrina. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 26 anos com potencial interessante na posição de Zagueiro. Análise em desenvolvimento."
  },
  {
    "Nome": "Matheus Recife",
    "Nome_Completo": "Matheus Vitor Xavier Viana",
    "Idade": 26,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Defensor",
    "Clube_Atual": "Atlético Tubarão",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "Estatísticas em análise",
    "Divisão": "Regional",
    "Pontuação": 78,
    "Ranking": 42,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Alto",
    "Biografia": "Atleta Matheus Recife de 26 anos que atua como Defensor no Atlético Tubarão. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 26 anos com potencial interessante na posição de Defensor. Análise em desenvolvimento."
  },
  {
    "Nome": "Eduardo Moura",
    "Nome_Completo": "Eduardo Junho Gonçalves Moura",
    "Idade": 33,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Defensor",
    "Clube_Atual": "Confiança",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "0 gols, 0 assistências, em 29 jogos",
    "Divisão": "Série C",
    "Pontuação": 78,
    "Ranking": 43,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Médio",
    "Biografia": "Atleta Eduardo Moura de 33 anos que atua como Zagueiro no Confiança. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 33 anos com potencial interessante na posição de Zagueiro. Análise em desenvolvimento."
  },
  {
    "Nome": "Matheus Melo",
    "Nome_Completo": "Matheus Melo Santos",
    "Idade": 26,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Meia",
    "Clube_Atual": "Maringá FC",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "Estatísticas em análise",
    "Divisão": "Série C",
    "Pontuação": 77,
    "Ranking": 44,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Alto",
    "Biografia": "Atleta Matheus Melo de 26 anos que atua como Meia no Maringá FC. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 26 anos com potencial interessante na posição de Meia. Análise em desenvolvimento."
  },
  {
    "Nome": "Sávio Maciel",
    "Nome_Completo": "Sávio Maciel Silva",
    "Idade": 26,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Meia",
    "Clube_Atual": "Ypiranga-RS",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "2 gols, 4 assistências, em 25 jogos",
    "Divisão": "Série C",
    "Pontuação": 76,
    "Ranking": 45,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Alto",
    "Biografia": "Atleta Sávio Maciel de 26 anos que atua como Meia no Ypiranga-RS. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 26 anos com potencial interessante na posição de Meia. Análise em desenvolvimento."
  },
  {
    "Nome": "Leonan Santos",
    "Nome_Completo": "Leonan Santos Silva",
    "Idade": 26,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Defensor",
    "Clube_Atual": "Londrina",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "1 gols, 0 assistências, em 19 jogos",
    "Divisão": "Série C",
    "Pontuação": 75,
    "Ranking": 46,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Alto",
    "Biografia": "Atleta Leonan Santos de 26 anos que atua como Defensor no Londrina. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 26 anos com potencial interessante na posição de Defensor. Análise em desenvolvimento."
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
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "Estatísticas em análise",
    "Divisão": "Série C",
    "Pontuação": 74,
    "Ranking": 47,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Médio",
    "Biografia": "Atleta Roger de 29 anos que atua como Meia no Ypiranga-RS. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 29 anos com potencial interessante na posição de Meia. Análise em desenvolvimento."
  },
  {
    "Nome": "Reifit (Thomas Kayck)",
    "Nome_Completo": "Thomas Kayck Silva",
    "Idade": 22,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Atacante/Ponta",
    "Clube_Atual": "Floresta-CE",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "Estatísticas em análise",
    "Divisão": "Regional",
    "Pontuação": 73,
    "Ranking": 48,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Médio",
    "Biografia": "Atleta Reifit (Thomas Kayck) de - anos que atua como Atacante no Floresta-CE. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de - anos com potencial interessante na posição de Atacante. Análise em desenvolvimento."
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
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "Estatísticas em análise",
    "Divisão": "Regional",
    "Pontuação": 72,
    "Ranking": 49,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Alto",
    "Biografia": "Atleta Robertinho de 25 anos que atua como Atacante no Jacuipense. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 25 anos com potencial interessante na posição de Atacante. Análise em desenvolvimento."
  },
  {
    "Nome": "Renlison",
    "Nome_Completo": "Renlison Silva Santos",
    "Idade": 24,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Meia Ofensivo/Ponta Esquerda",
    "Clube_Atual": "Desportiva Aracaju",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "3 gols, 4 assistências, em 16 jogos",
    "Divisão": "Série D",
    "Pontuação": 71,
    "Ranking": 50,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Alto",
    "Biografia": "Atleta Renlison de 24 anos que atua como Meia Ofensivo no Desportiva Aracaju. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 24 anos com potencial interessante na posição de Meia Ofensivo. Análise em desenvolvimento."
  },
  {
    "Nome": "Gabriel Masson",
    "Nome_Completo": "Gabriel Luan Masson",
    "Idade": 23,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Meia Ofensivo/Ponta Esquerda",
    "Clube_Atual": "Manaus FC",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "4 gols, 0 assistências, em 18 jogos",
    "Divisão": "Série D",
    "Pontuação": 70,
    "Ranking": 51,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Alto",
    "Biografia": "Atleta Gabriel Masson de 23 anos que atua como Meia Ofensivo no Manaus FC. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 23 anos com potencial interessante na posição de Meia Ofensivo. Análise em desenvolvimento."
  },
  {
    "Nome": "Guilherme Dal Plan",
    "Nome_Completo": "Guilherme Devitte Dal Plan",
    "Idade": 26,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Lateral Esquerdo",
    "Clube_Atual": "Ituano",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "Estatísticas em análise",
    "Divisão": "Série C",
    "Pontuação": 70,
    "Ranking": 52,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Alto",
    "Biografia": "Atleta Guilherme Dal Plan de 26 anos que atua como Lateral Esquerdo no Ituano. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 26 anos com potencial interessante na posição de Lateral Esquerdo. Análise em desenvolvimento."
  },
  {
    "Nome": "Lucas Marques",
    "Nome_Completo": "Lucas Alexandre Marques Otaviano",
    "Idade": 27,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Lateral Direito",
    "Clube_Atual": "Itabaiana",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "0 gols, 2 assistências, em 18 jogos",
    "Divisão": "Série C",
    "Pontuação": 69,
    "Ranking": 53,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Médio",
    "Biografia": "Atleta Lucas Marques de 27 anos que atua como Lateral Direito no Itabaiana. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 27 anos com potencial interessante na posição de Lateral Direito. Análise em desenvolvimento."
  },
  {
    "Nome": "João Vitor",
    "Nome_Completo": "João Vitor Cardoso de Souza",
    "Idade": 23,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Defensor",
    "Clube_Atual": "Londrina",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "Estatísticas em análise",
    "Divisão": "Série C",
    "Pontuação": 68,
    "Ranking": 54,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Alto",
    "Biografia": "Atleta João Vitor de 23 anos que atua como Defensor no Londrina. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 23 anos com potencial interessante na posição de Defensor. Análise em desenvolvimento."
  },
  {
    "Nome": "PK",
    "Nome_Completo": "Pedro Kessler",
    "Idade": 24,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Meia",
    "Clube_Atual": "-",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "3 gols, em 18 jogos",
    "Divisão": "-",
    "Pontuação": 67,
    "Ranking": 55,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Alto",
    "Biografia": "Atleta PK de 24 anos que atua como Meio-campista no -. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 24 anos com potencial interessante na posição de Meio-campista. Análise em desenvolvimento."
  },
  {
    "Nome": "André Radija",
    "Nome_Completo": "André Devitte Radija",
    "Idade": 27,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Atacante/Ponta",
    "Clube_Atual": "-",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "8 gols, em 22 jogos",
    "Divisão": "-",
    "Pontuação": 66,
    "Ranking": 56,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Médio",
    "Biografia": "Atleta André Radija de 27 anos que atua como Atacante no -. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 27 anos com potencial interessante na posição de Atacante. Análise em desenvolvimento."
  },
  {
    "Nome": "Ronaldo",
    "Nome_Completo": "Ronaldo Silva Santos",
    "Idade": 29,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Atacante/Ponta",
    "Clube_Atual": "-",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "5 gols, em 20 jogos",
    "Divisão": "-",
    "Pontuação": 65,
    "Ranking": 57,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Médio",
    "Biografia": "Atleta Ronaldo de 29 anos que atua como Atacante no -. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 29 anos com potencial interessante na posição de Atacante. Análise em desenvolvimento."
  },
  {
    "Nome": "Edinho",
    "Nome_Completo": "Edinho Lima Pereira",
    "Idade": 31,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Defensor",
    "Clube_Atual": "-",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "1 gols, em 24 jogos",
    "Divisão": "-",
    "Pontuação": 64,
    "Ranking": 58,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Médio",
    "Biografia": "Atleta Edinho de 31 anos que atua como Zagueiro no -. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 31 anos com potencial interessante na posição de Zagueiro. Análise em desenvolvimento."
  },
  {
    "Nome": "Daniel Blanco",
    "Nome_Completo": "Daniel Martin Blanco",
    "Idade": 22,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Defensor",
    "Clube_Atual": "Sem clube",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "0 gols, em 10 jogos",
    "Divisão": "-",
    "Pontuação": 63,
    "Ranking": 59,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Muito Alto",
    "Biografia": "Atleta Daniel Blanco de 22 anos que atua como Zagueiro no Sem clube. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 22 anos com potencial interessante na posição de Zagueiro. Análise em desenvolvimento."
  },
  {
    "Nome": "Thierry",
    "Nome_Completo": "Thierry Domingos dos Santos Silva",
    "Idade": 20,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Meia",
    "Clube_Atual": "Lagarto-SE",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "2 gols, em 18 jogos",
    "Divisão": "Série D",
    "Pontuação": 62,
    "Ranking": 60,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Muito Alto",
    "Biografia": "Atleta Thierry de 20 anos que atua como Meia no Lagarto-SE. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 20 anos com potencial interessante na posição de Meia. Análise em desenvolvimento."
  },
  {
    "Nome": "Rafinha",
    "Nome_Completo": "Rafael Victor Silva Santos",
    "Idade": 28,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Volante",
    "Clube_Atual": "ABC",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "Estatísticas em análise",
    "Divisão": "Série C",
    "Pontuação": 62,
    "Ranking": 61,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Médio",
    "Biografia": "Atleta Rafinha de 28 anos que atua como Volante no ABC. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 28 anos com potencial interessante na posição de Volante. Análise em desenvolvimento."
  },
  {
    "Nome": "Rodolfo Filemon",
    "Nome_Completo": "Rodolfo Filemon Maranhão",
    "Idade": 28,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Defensor",
    "Clube_Atual": "-",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "Estatísticas em análise",
    "Divisão": "-",
    "Pontuação": 61,
    "Ranking": 62,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Médio",
    "Biografia": "Atleta Rodolfo Filemon de 28 anos que atua como Zagueiro no -. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 28 anos com potencial interessante na posição de Zagueiro. Análise em desenvolvimento."
  },
  {
    "Nome": "Buga",
    "Nome_Completo": "Ellison Correia da Conceição",
    "Idade": 24,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Meia",
    "Clube_Atual": "Maringá",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "0 gols, em 30 jogos",
    "Divisão": "Série C",
    "Pontuação": 60,
    "Ranking": 63,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Alto",
    "Biografia": "Atleta Buga de 24 anos que atua como Meia Central no Maringá. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 24 anos com potencial interessante na posição de Meia Central. Análise em desenvolvimento."
  },
  {
    "Nome": "Marquinhos",
    "Nome_Completo": "Marcos Antônio Severo dos Santos",
    "Idade": 28,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Meia",
    "Clube_Atual": "Vitória das Tabocas",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "Estatísticas em análise",
    "Divisão": "Série D",
    "Pontuação": 59,
    "Ranking": 64,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Médio",
    "Biografia": "Atleta Marquinhos de 28 anos que atua como Meia Central no Vitória das Tabocas. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 28 anos com potencial interessante na posição de Meia Central. Análise em desenvolvimento."
  },
  {
    "Nome": "Gabriel Terra",
    "Nome_Completo": "Gabriel Martins Terra",
    "Idade": 28,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Meia",
    "Clube_Atual": "Ypiranga-RS",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "Estatísticas em análise",
    "Divisão": "Série C",
    "Pontuação": 58,
    "Ranking": 65,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Médio",
    "Biografia": "Atleta Gabriel Terra de 28 anos que atua como Meia no Ypiranga-RS. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 28 anos com potencial interessante na posição de Meia. Análise em desenvolvimento."
  },
  {
    "Nome": "Jhonny Lucas",
    "Nome_Completo": "Jhonny Lucas Flora Barbosa",
    "Idade": 25,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Volante",
    "Clube_Atual": "Goiás",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "0 gols, em 30 jogos",
    "Divisão": "Série A",
    "Pontuação": 57,
    "Ranking": 66,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Alto",
    "Biografia": "Atleta Jhonny Lucas de 25 anos que atua como Volante no Goiás. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 25 anos com potencial interessante na posição de Volante. Análise em desenvolvimento."
  },
  {
    "Nome": "Jolison",
    "Nome_Completo": "Jolison Evangelista dos Santos Júnior",
    "Idade": 28,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Meia Ofensivo/Ponta Esquerda",
    "Clube_Atual": "Vitória da Conquista",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "0 gols, em 13 jogos",
    "Divisão": "Série D",
    "Pontuação": 56,
    "Ranking": 67,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Médio",
    "Biografia": "Atleta Jolison de 28 anos que atua como Meia Ofensivo no Vitória da Conquista. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 28 anos com potencial interessante na posição de Meia Ofensivo. Análise em desenvolvimento."
  },
  {
    "Nome": "Danriel Santos",
    "Nome_Completo": "Danriel Rosa dos Santos",
    "Idade": 31,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Defensor",
    "Clube_Atual": "Ponte Preta",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "0 gols, em 15 jogos",
    "Divisão": "Série B",
    "Pontuação": 55,
    "Ranking": 68,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Médio",
    "Biografia": "Atleta Danriel Santos de 31 anos que atua como Zagueiro no Ponte Preta. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 31 anos com potencial interessante na posição de Zagueiro. Análise em desenvolvimento."
  },
  {
    "Nome": "Dhuble Silva Oliveira",
    "Nome_Completo": "Dhuble Silva Oliveira",
    "Idade": 26,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Meia Ofensivo/Ponta Esquerda",
    "Clube_Atual": "Internacional de Lages",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "5 gols, 4 assistências, em 22 jogos",
    "Divisão": "Série D",
    "Pontuação": 54,
    "Ranking": 69,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Alto",
    "Biografia": "Atleta Dhuble Silva Oliveira de 26 anos que atua como Meia Ofensivo no Internacional de Lages. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 26 anos com potencial interessante na posição de Meia Ofensivo. Análise em desenvolvimento."
  },
  {
    "Nome": "Vander Luís",
    "Nome_Completo": "Vander Luís da Silva",
    "Idade": 29,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Meia Ofensivo/Ponta Esquerda",
    "Clube_Atual": "Bangkok United",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "Estatísticas em análise",
    "Divisão": "Tailândia",
    "Pontuação": 54,
    "Ranking": 70,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Médio",
    "Biografia": "Atleta Vander Luís de 29 anos que atua como Meia Ofensivo no Bangkok United. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 29 anos com potencial interessante na posição de Meia Ofensivo. Análise em desenvolvimento."
  },
  {
    "Nome": "Ianson",
    "Nome_Completo": "Ianson Alves da Silva",
    "Idade": 24,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Atacante/Ponta",
    "Clube_Atual": "Ituano",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "3 gols, em 16 jogos",
    "Divisão": "Série C",
    "Pontuação": 53,
    "Ranking": 71,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Alto",
    "Biografia": "Atleta Ianson de 24 anos que atua como Atacante no Ituano. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 24 anos com potencial interessante na posição de Atacante. Análise em desenvolvimento."
  },
  {
    "Nome": "Robert",
    "Nome_Completo": "Robert Ferreira da Rocha",
    "Idade": 29,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Meia Ofensivo/Ponta Esquerda",
    "Clube_Atual": "Botafogo-SP",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "0 gols, 5 assistências, em 20 jogos",
    "Divisão": "Paulista A2",
    "Pontuação": 52,
    "Ranking": 72,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Médio",
    "Biografia": "Atleta Robert de 29 anos que atua como Meia Ofensivo no Botafogo-SP. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 29 anos com potencial interessante na posição de Meia Ofensivo. Análise em desenvolvimento."
  },
  {
    "Nome": "Jackson Henrique Santos",
    "Nome_Completo": "Jackson Henrique Santos",
    "Idade": 27,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Volante",
    "Clube_Atual": "ABC",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "1 gols, 3 assistências, em 18 jogos",
    "Divisão": "Série C",
    "Pontuação": 51,
    "Ranking": 73,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Médio",
    "Biografia": "Atleta Jackson Henrique Santos de 27 anos que atua como Volante no ABC. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 27 anos com potencial interessante na posição de Volante. Análise em desenvolvimento."
  },
  {
    "Nome": "Jackson de Souza",
    "Nome_Completo": "Jackson de Souza",
    "Idade": 35,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Defensor",
    "Clube_Atual": "Amazonas FC",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "Estatísticas em análise",
    "Divisão": "Série D",
    "Pontuação": 50,
    "Ranking": 74,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Médio",
    "Biografia": "Atleta Jackson de Souza de 35 anos que atua como Zagueiro no Amazonas FC. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 35 anos com potencial interessante na posição de Zagueiro. Análise em desenvolvimento."
  },
  {
    "Nome": "Danilo Mendes",
    "Nome_Completo": "Danilo Mendes de Oliveira",
    "Idade": 26,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Meia",
    "Clube_Atual": "Camboriú",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "2 gols, 3 assistências, em 24 jogos",
    "Divisão": "Série D",
    "Pontuação": 49,
    "Ranking": 75,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Alto",
    "Biografia": "Atleta Danilo Mendes de 26 anos que atua como Meio-campista no Camboriú. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 26 anos com potencial interessante na posição de Meio-campista. Análise em desenvolvimento."
  },
  {
    "Nome": "Hebert",
    "Nome_Completo": "Hebert Oliveira da Silva",
    "Idade": 30,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Meia Ofensivo/Ponta Esquerda",
    "Clube_Atual": "Pesqueira",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "2 gols, em 29 jogos",
    "Divisão": "Pernambucano",
    "Pontuação": 48,
    "Ranking": 76,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Médio",
    "Biografia": "Atleta Hebert de 30 anos que atua como Meia Ofensivo no Pesqueira. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 30 anos com potencial interessante na posição de Meia Ofensivo. Análise em desenvolvimento."
  },
  {
    "Nome": "Wermeson",
    "Nome_Completo": "Wermeson do Carmo Silva",
    "Idade": 24,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Meia Ofensivo/Ponta Esquerda",
    "Clube_Atual": "Camboriú",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "4 gols, 2 assistências, em 18 jogos",
    "Divisão": "Série D",
    "Pontuação": 47,
    "Ranking": 77,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Alto",
    "Biografia": "Atleta Wermeson de 24 anos que atua como Meia-ofensivo no Camboriú. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 24 anos com potencial interessante na posição de Meia-ofensivo. Análise em desenvolvimento."
  },
  {
    "Nome": "Jotavé",
    "Nome_Completo": "João Vitor dos Santos",
    "Idade": 21,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Volante",
    "Clube_Atual": "Camboriú",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "2 gols, 1 assistências, em 13 jogos",
    "Divisão": "Série D",
    "Pontuação": 46,
    "Ranking": 78,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Muito Alto",
    "Biografia": "Atleta Jotavé de 21 anos que atua como Meia (Volante) no Camboriú. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 21 anos com potencial interessante na posição de Meia (Volante). Análise em desenvolvimento."
  },
  {
    "Nome": "Cássio",
    "Nome_Completo": "Cássio de Amorim de Deus",
    "Idade": 21,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Atacante/Ponta",
    "Clube_Atual": "Carlos Renaux",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "6 gols, em 18 jogos",
    "Divisão": "Série D",
    "Pontuação": 46,
    "Ranking": 79,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Muito Alto",
    "Biografia": "Atleta Cássio de 21 anos que atua como Atacante no Carlos Renaux. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 21 anos com potencial interessante na posição de Atacante. Análise em desenvolvimento."
  },
  {
    "Nome": "Jonathan",
    "Nome_Completo": "Jonathan Barbosa da Silva",
    "Idade": 23,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Meia",
    "Clube_Atual": "Altos",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "1 gols, em 22 jogos",
    "Divisão": "Série C",
    "Pontuação": 45,
    "Ranking": 80,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Alto",
    "Biografia": "Atleta Jonathan de 23 anos que atua como Meia no Altos. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 23 anos com potencial interessante na posição de Meia. Análise em desenvolvimento."
  },
  {
    "Nome": "Fábio Azevedo",
    "Nome_Completo": "Fábio Vitor Antonio Azevedo Pires",
    "Idade": 26,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Atacante/Ponta",
    "Clube_Atual": "Criciúma",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "14 gols, 1 assistências, em 23 jogos",
    "Divisão": "Série B",
    "Pontuação": 44,
    "Ranking": 81,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Alto",
    "Biografia": "Atleta Fábio Azevedo de 26 anos que atua como Atacante no Criciúma. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 26 anos com potencial interessante na posição de Atacante. Análise em desenvolvimento."
  },
  {
    "Nome": "Jeferson Lima",
    "Nome_Completo": "Jeferson Wagner de Lima Bólico",
    "Idade": 28,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Meia",
    "Clube_Atual": "São José",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "2 gols, em 29 jogos",
    "Divisão": "Série D",
    "Pontuação": 43,
    "Ranking": 82,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Médio",
    "Biografia": "Atleta Jeferson Lima de 28 anos que atua como Meia no São José. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 28 anos com potencial interessante na posição de Meia. Análise em desenvolvimento."
  },
  {
    "Nome": "Vinicius Tanque",
    "Nome_Completo": "Vinicius Lopes de Souza",
    "Idade": 26,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Atacante/Ponta",
    "Clube_Atual": "Sem clube",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "4 gols, em 18 jogos",
    "Divisão": "-",
    "Pontuação": 42,
    "Ranking": 83,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Alto",
    "Biografia": "Atleta Vinicius Tanque de 26 anos que atua como Atacante no Sem clube. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 26 anos com potencial interessante na posição de Atacante. Análise em desenvolvimento."
  },
  {
    "Nome": "Alexander Iecaros",
    "Nome_Completo": "Alexander Iecaros Mendoza",
    "Idade": 28,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Defensor",
    "Clube_Atual": "Cusco FC",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "1 gols, em 22 jogos",
    "Divisão": "Peru",
    "Pontuação": 41,
    "Ranking": 84,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Médio",
    "Biografia": "Atleta Alexander Iecaros de 28 anos que atua como Zagueiro no Cusco FC. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 28 anos com potencial interessante na posição de Zagueiro. Análise em desenvolvimento."
  },
  {
    "Nome": "Andrey Dias",
    "Nome_Completo": "Andrey Dias da Silva",
    "Idade": 24,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Meia Ofensivo/Ponta Esquerda",
    "Clube_Atual": "Figueirense",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "3 gols, 5 assistências, em 25 jogos",
    "Divisão": "Série C",
    "Pontuação": 40,
    "Ranking": 85,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Alto",
    "Biografia": "Atleta Andrey Dias de 24 anos que atua como Meia Ofensivo no Figueirense. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 24 anos com potencial interessante na posição de Meia Ofensivo. Análise em desenvolvimento."
  },
  {
    "Nome": "Alan Pires",
    "Nome_Completo": "Alan Pires da Silva",
    "Idade": 29,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Lateral Direito",
    "Clube_Atual": "São Bernardo",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "0 gols, 2 assistências, em 20 jogos",
    "Divisão": "Série C",
    "Pontuação": 39,
    "Ranking": 86,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Médio",
    "Biografia": "Atleta Alan Pires de 29 anos que atua como Lateral Direito no São Bernardo. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 29 anos com potencial interessante na posição de Lateral Direito. Análise em desenvolvimento."
  },
  {
    "Nome": "Rodrigo Silva",
    "Nome_Completo": "Rodrigo Silva dos Santos",
    "Idade": 29,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Volante",
    "Clube_Atual": "Avaí",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "1 gols, em 18 jogos",
    "Divisão": "Série B",
    "Pontuação": 38,
    "Ranking": 87,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Médio",
    "Biografia": "Atleta Rodrigo Silva de 29 anos que atua como Volante no Avaí. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 29 anos com potencial interessante na posição de Volante. Análise em desenvolvimento."
  },
  {
    "Nome": "Marcelo Sousa",
    "Nome_Completo": "Marcelo Sousa de Oliveira",
    "Idade": 26,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Meia",
    "Clube_Atual": "Paysandu",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "2 gols, 3 assistências, em 22 jogos",
    "Divisão": "Série C",
    "Pontuação": 38,
    "Ranking": 88,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Alto",
    "Biografia": "Atleta Marcelo Sousa de 26 anos que atua como Meia Central no Paysandu. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 26 anos com potencial interessante na posição de Meia Central. Análise em desenvolvimento."
  },
  {
    "Nome": "Diego Souza",
    "Nome_Completo": "Diego Souza da Silva",
    "Idade": 30,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Atacante/Ponta",
    "Clube_Atual": "Sport Recife",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "6 gols, em 22 jogos",
    "Divisão": "Série B",
    "Pontuação": 37,
    "Ranking": 89,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Médio",
    "Biografia": "Atleta Diego Souza de 30 anos que atua como Atacante no Sport Recife. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 30 anos com potencial interessante na posição de Atacante. Análise em desenvolvimento."
  },
  {
    "Nome": "Álvaro",
    "Nome_Completo": "Álvaro Rodrigues da Silva",
    "Idade": 26,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Defensor",
    "Clube_Atual": "Botafogo-SP",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "1 gols, em 19 jogos",
    "Divisão": "Série C",
    "Pontuação": 36,
    "Ranking": 90,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Alto",
    "Biografia": "Atleta Álvaro de 26 anos que atua como Zagueiro no Botafogo-SP. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 26 anos com potencial interessante na posição de Zagueiro. Análise em desenvolvimento."
  },
  {
    "Nome": "Michel Bennech",
    "Nome_Completo": "Michel Bennech de Oliveira",
    "Idade": 28,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Atacante/Ponta",
    "Clube_Atual": "Volta Redonda",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "7 gols, 2 assistências, em 21 jogos",
    "Divisão": "Série C",
    "Pontuação": 35,
    "Ranking": 91,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Médio",
    "Biografia": "Atleta Michel Bennech de 28 anos que atua como Atacante no Volta Redonda. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 28 anos com potencial interessante na posição de Atacante. Análise em desenvolvimento."
  },
  {
    "Nome": "Gabriel Santiago",
    "Nome_Completo": "Gabriel Santiago dos Santos",
    "Idade": 26,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Meia Ofensivo/Ponta Esquerda",
    "Clube_Atual": "Brasil de Pelotas",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "3 gols, 5 assistências, em 23 jogos",
    "Divisão": "Série C",
    "Pontuação": 34,
    "Ranking": 92,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Alto",
    "Biografia": "Atleta Gabriel Santiago de 26 anos que atua como Meia Ofensivo no Brasil de Pelotas. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 26 anos com potencial interessante na posição de Meia Ofensivo. Análise em desenvolvimento."
  },
  {
    "Nome": "Lucas Oliveira",
    "Nome_Completo": "Lucas Oliveira da Silva",
    "Idade": 28,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Meia",
    "Clube_Atual": "Vasco da Gama",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "4 gols, 6 assistências, em 28 jogos",
    "Divisão": "Série A",
    "Pontuação": 33,
    "Ranking": 93,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Médio",
    "Biografia": "Atleta Lucas Oliveira de 28 anos que atua como Meia Central no Vasco da Gama. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 28 anos com potencial interessante na posição de Meia Central. Análise em desenvolvimento."
  },
  {
    "Nome": "Carlos Henrique",
    "Nome_Completo": "Carlos Henrique de Souza",
    "Idade": 27,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Volante",
    "Clube_Atual": "Atlético Goianiense",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "2 gols, 3 assistências, em 25 jogos",
    "Divisão": "Série A",
    "Pontuação": 32,
    "Ranking": 94,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Médio",
    "Biografia": "Atleta Carlos Henrique de 27 anos que atua como Volante no Atlético Goianiense. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 27 anos com potencial interessante na posição de Volante. Análise em desenvolvimento."
  },
  {
    "Nome": "Neto Berola",
    "Nome_Completo": "Neto Berola de Oliveira",
    "Idade": 30,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Atacante/Ponta",
    "Clube_Atual": "Ituano",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "9 gols, 2 assistências, em 26 jogos",
    "Divisão": "Série C",
    "Pontuação": 31,
    "Ranking": 95,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Médio",
    "Biografia": "Atleta Neto Berola de 30 anos que atua como Atacante no Ituano. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 30 anos com potencial interessante na posição de Atacante. Análise em desenvolvimento."
  },
  {
    "Nome": "Júlio Simas",
    "Nome_Completo": "Júlio César Simas",
    "Idade": 25,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Lateral Direito",
    "Clube_Atual": "Criciúma",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "1 gols, 4 assistências, em 22 jogos",
    "Divisão": "Série B",
    "Pontuação": 30,
    "Ranking": 96,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Alto",
    "Biografia": "Atleta Júlio Simas de 25 anos que atua como Lateral Direito no Criciúma. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 25 anos com potencial interessante na posição de Lateral Direito. Análise em desenvolvimento."
  },
  {
    "Nome": "Matheus Castelo",
    "Nome_Completo": "Matheus Castelo Branco",
    "Idade": 27,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Goleiro",
    "Clube_Atual": "Avaí",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "0 gols, 0 assistências, em 30 jogos",
    "Divisão": "Série B",
    "Pontuação": 30,
    "Ranking": 97,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Médio",
    "Biografia": "Atleta Matheus Castelo de 27 anos que atua como Goleiro no Avaí. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 27 anos com potencial interessante na posição de Goleiro. Análise em desenvolvimento."
  },
  {
    "Nome": "Elessione",
    "Nome_Completo": "Elessione Rodrigues da Silva",
    "Idade": 26,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Atacante/Ponta",
    "Clube_Atual": "São José",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "5 gols, 1 assistências, em 18 jogos",
    "Divisão": "Série D",
    "Pontuação": 29,
    "Ranking": 98,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Alto",
    "Biografia": "Atleta Elessione de 26 anos que atua como Atacante no São José. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 26 anos com potencial interessante na posição de Atacante. Análise em desenvolvimento."
  },
  {
    "Nome": "Rafael Teixeira",
    "Nome_Completo": "Rafael Teixeira dos Santos",
    "Idade": 29,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Volante",
    "Clube_Atual": "ABC",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "2 gols, 3 assistências, em 24 jogos",
    "Divisão": "Série C",
    "Pontuação": 28,
    "Ranking": 99,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Médio",
    "Biografia": "Atleta Rafael Teixeira de 29 anos que atua como Volante no ABC. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 29 anos com potencial interessante na posição de Volante. Análise em desenvolvimento."
  },
  {
    "Nome": "Ryan",
    "Nome_Completo": "Ryan Gonçalves de Oliveira",
    "Idade": 23,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Meia Ofensivo/Ponta Esquerda",
    "Clube_Atual": "Aparecidense",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "3 gols, 4 assistências, em 20 jogos",
    "Divisão": "Série D",
    "Pontuação": 27,
    "Ranking": 100,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Alto",
    "Biografia": "Atleta Ryan de 23 anos que atua como Meia Ofensivo no Aparecidense. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 23 anos com potencial interessante na posição de Meia Ofensivo. Análise em desenvolvimento."
  },
  {
    "Nome": "Wesley",
    "Nome_Completo": "Wesley Rodrigues da Silva",
    "Idade": 28,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Lateral Direito",
    "Clube_Atual": "CRB",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "1 gols, 5 assistências, em 27 jogos",
    "Divisão": "Série B",
    "Pontuação": 26,
    "Ranking": 101,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Médio",
    "Biografia": "Atleta Wesley de 28 anos que atua como Lateral Direito no CRB. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 28 anos com potencial interessante na posição de Lateral Direito. Análise em desenvolvimento."
  },
  {
    "Nome": "Arturzinho",
    "Nome_Completo": "Arthur Silva Santos",
    "Idade": 25,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Atacante/Ponta",
    "Clube_Atual": "Remo",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "4 gols, 6 assistências, em 22 jogos",
    "Divisão": "Série C",
    "Pontuação": 25,
    "Ranking": 102,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Alto",
    "Biografia": "Atleta Arturzinho de 25 anos que atua como Ponta Direita no Remo. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 25 anos com potencial interessante na posição de Ponta Direita. Análise em desenvolvimento."
  },
  {
    "Nome": "Leandro Amorim",
    "Nome_Completo": "Leandro Amorim dos Santos",
    "Idade": 31,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Lateral Esquerdo",
    "Clube_Atual": "Botafogo-SP",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "1 gols, 4 assistências, em 26 jogos",
    "Divisão": "Série C",
    "Pontuação": 24,
    "Ranking": 103,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Médio",
    "Biografia": "Atleta Leandro Amorim de 31 anos que atua como Lateral Esquerdo no Botafogo-SP. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 31 anos com potencial interessante na posição de Lateral Esquerdo. Análise em desenvolvimento."
  },
  {
    "Nome": "Luiz Otávio",
    "Nome_Completo": "Luiz Otávio Santos de Oliveira",
    "Idade": 25,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Volante",
    "Clube_Atual": "CSA",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "3 gols, 2 assistências, em 28 jogos",
    "Divisão": "Série B",
    "Pontuação": 23,
    "Ranking": 104,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Alto",
    "Biografia": "Atleta Luiz Otávio de 25 anos que atua como Volante no CSA. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 25 anos com potencial interessante na posição de Volante. Análise em desenvolvimento."
  },
  {
    "Nome": "Neto Oliveira",
    "Nome_Completo": "Neto Oliveira da Silva",
    "Idade": 26,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Atacante/Ponta",
    "Clube_Atual": "Volta Redonda",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "8 gols, 3 assistências, em 24 jogos",
    "Divisão": "Série C",
    "Pontuação": 22,
    "Ranking": 105,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Alto",
    "Biografia": "Atleta Neto Oliveira de 26 anos que atua como Atacante no Volta Redonda. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 26 anos com potencial interessante na posição de Atacante. Análise em desenvolvimento."
  },
  {
    "Nome": "Fabrício",
    "Nome_Completo": "Fabrício Rodrigues da Silva",
    "Idade": 28,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Meia Ofensivo/Ponta Esquerda",
    "Clube_Atual": "Paysandu",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "5 gols, 7 assistências, em 26 jogos",
    "Divisão": "Série C",
    "Pontuação": 22,
    "Ranking": 106,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Médio",
    "Biografia": "Atleta Fabrício de 28 anos que atua como Meia Ofensivo no Paysandu. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 28 anos com potencial interessante na posição de Meia Ofensivo. Análise em desenvolvimento."
  },
  {
    "Nome": "André Penalva",
    "Nome_Completo": "André Penalva da Silva",
    "Idade": 29,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Defensor",
    "Clube_Atual": "São Bernardo",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "1 gols, em 23 jogos",
    "Divisão": "Série C",
    "Pontuação": 21,
    "Ranking": 107,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Médio",
    "Biografia": "Atleta André Penalva de 29 anos que atua como Zagueiro no São Bernardo. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 29 anos com potencial interessante na posição de Zagueiro. Análise em desenvolvimento."
  },
  {
    "Nome": "Darlan Santos",
    "Nome_Completo": "Darlan Santos de Oliveira",
    "Idade": 25,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Volante",
    "Clube_Atual": "Ituano",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "2 gols, 4 assistências, em 25 jogos",
    "Divisão": "Série C",
    "Pontuação": 20,
    "Ranking": 109,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Alto",
    "Biografia": "Atleta Darlan Santos de 25 anos que atua como Volante no Ituano. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 25 anos com potencial interessante na posição de Volante. Análise em desenvolvimento."
  },
  {
    "Nome": "Matheus Coruja",
    "Nome_Completo": "Matheus Coruja da Silva",
    "Idade": 25,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Atacante/Ponta",
    "Clube_Atual": "Ypiranga-RS",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "6 gols, 2 assistências, em 21 jogos",
    "Divisão": "Série C",
    "Pontuação": 19,
    "Ranking": 109,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Alto",
    "Biografia": "Atleta Matheus Coruja de 25 anos que atua como Atacante no Ypiranga-RS. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 25 anos com potencial interessante na posição de Atacante. Análise em desenvolvimento."
  },
  {
    "Nome": "Gabriel Canela",
    "Nome_Completo": "Gabriel Canela de Souza",
    "Idade": 27,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Lateral Direito",
    "Clube_Atual": "Botafogo-PB",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "2 gols, 3 assistências, em 24 jogos",
    "Divisão": "Série D",
    "Pontuação": 18,
    "Ranking": 110,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Médio",
    "Biografia": "Atleta Gabriel Canela de 27 anos que atua como Lateral Direito no Botafogo-PB. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 27 anos com potencial interessante na posição de Lateral Direito. Análise em desenvolvimento."
  },
  {
    "Nome": "João Miguel",
    "Nome_Completo": "João Miguel da Silva",
    "Idade": 24,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Meia Ofensivo/Ponta Esquerda",
    "Clube_Atual": "Santa Cruz",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "3 gols, 4 assistências, em 20 jogos",
    "Divisão": "Série C",
    "Pontuação": 17,
    "Ranking": 111,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Alto",
    "Biografia": "Atleta João Miguel de 24 anos que atua como Meia Ofensivo no Santa Cruz. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 24 anos com potencial interessante na posição de Meia Ofensivo. Análise em desenvolvimento."
  },
  {
    "Nome": "Ronald Falkoski",
    "Nome_Completo": "Ronald Falkoski",
    "Idade": 28,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Atacante/Ponta",
    "Clube_Atual": "Atlético Goianiense",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "10 gols, 2 assistências, em 26 jogos",
    "Divisão": "Série A",
    "Pontuação": 16,
    "Ranking": 112,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Médio",
    "Biografia": "Atleta Ronald Falkoski de 28 anos que atua como Atacante no Atlético Goianiense. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 28 anos com potencial interessante na posição de Atacante. Análise em desenvolvimento."
  },
  {
    "Nome": "Frank",
    "Nome_Completo": "Frank de Castro Rodrigues",
    "Idade": 28,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Atacante/Ponta",
    "Clube_Atual": "Central",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "8 gols, 3 assistências, em 23 jogos",
    "Divisão": "Série D",
    "Pontuação": 15,
    "Ranking": 113,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Médio",
    "Biografia": "Atleta Frank de 28 anos que atua como Atacante no Central. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 28 anos com potencial interessante na posição de Atacante. Análise em desenvolvimento."
  },
  {
    "Nome": "Karl",
    "Nome_Completo": "Karl Heinz Schneider",
    "Idade": 30,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Volante",
    "Clube_Atual": "Treze",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "2 gols, 1 assistências, em 26 jogos",
    "Divisão": "Série D",
    "Pontuação": 14,
    "Ranking": 114,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Médio",
    "Biografia": "Atleta Karl de 30 anos que atua como Volante no Treze. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 30 anos com potencial interessante na posição de Volante. Análise em desenvolvimento."
  },
  {
    "Nome": "Robson Duarte",
    "Nome_Completo": "Robson Duarte Gomes",
    "Idade": 26,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Meia",
    "Clube_Atual": "América-MG",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "4 gols, 5 assistências, em 24 jogos",
    "Divisão": "Série B",
    "Pontuação": 14,
    "Ranking": 115,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Alto",
    "Biografia": "Atleta Robson Duarte de 26 anos que atua como Meia Central no América-MG. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 26 anos com potencial interessante na posição de Meia Central. Análise em desenvolvimento."
  },
  {
    "Nome": "Ronald Silva Santos",
    "Nome_Completo": "Ronald Silva Santos",
    "Idade": 28,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Atacante/Ponta",
    "Clube_Atual": "Atlético Goianiense",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "9 gols, 2 assistências, em 25 jogos",
    "Divisão": "Série A",
    "Pontuação": 13,
    "Ranking": 116,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Médio",
    "Biografia": "Atleta Ronald Silva Santos de 28 anos que atua como Atacante no Atlético Goianiense. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 28 anos com potencial interessante na posição de Atacante. Análise em desenvolvimento."
  },
  {
    "Nome": "Alisson",
    "Nome_Completo": "Alisson Santana de Oliveira",
    "Idade": 22,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Atacante/Ponta",
    "Clube_Atual": "Atlético Mineiro",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "12 gols, 4 assistências, em 28 jogos",
    "Divisão": "Série A",
    "Pontuação": 12,
    "Ranking": 117,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Muito Alto",
    "Biografia": "Atleta Alisson de 22 anos que atua como Atacante no Atlético Mineiro. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 22 anos com potencial interessante na posição de Atacante. Análise em desenvolvimento."
  },
  {
    "Nome": "Pedro Oliveira",
    "Nome_Completo": "Pedro Oliveira da Silva",
    "Idade": 26,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Atacante/Ponta",
    "Clube_Atual": "Vasco da Gama",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "7 gols, 3 assistências, em 26 jogos",
    "Divisão": "Série A",
    "Pontuação": 11,
    "Ranking": 118,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Alto",
    "Biografia": "Atleta Pedro Oliveira de 26 anos que atua como Atacante no Vasco da Gama. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 26 anos com potencial interessante na posição de Atacante. Análise em desenvolvimento."
  },
  {
    "Nome": "Cristian Lucca",
    "Nome_Completo": "Cristian Lucca da Silva",
    "Idade": 28,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Meia Ofensivo/Ponta Esquerda",
    "Clube_Atual": "ASA",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "5 gols, 6 assistências, em 22 jogos",
    "Divisão": "Série D",
    "Pontuação": 10,
    "Ranking": 119,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Médio",
    "Biografia": "Atleta Cristian Lucca de 28 anos que atua como Meia Ofensivo no ASA. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 28 anos com potencial interessante na posição de Meia Ofensivo. Análise em desenvolvimento."
  },
  {
    "Nome": "Kaio Nunes",
    "Nome_Completo": "Kaio Nunes Silva",
    "Idade": 28,
    "Data_Nascimento": "15/03/1997",
    "Local_Nascimento": "São Paulo, SP",
    "Posição": "Meia",
    "Clube_Atual": "Ponte Preta",
    "Altura": "175cm",
    "Peso": "70kg",
    "Pé_Preferido": "Direito",
    "Histórico_Clubes": "Santos, Corinthians, América-MG",
    "Estatísticas_2024": "4 gols, 8 assistências em 28 jogos",
    "Divisão": "Série B",
    "Pontuação": 60,
    "Ranking": 120,
    "Video_URL": "N/D",
    "Características": "Experiência, liderança, passes precisos",
    "Foto_URL": "placeholder_green",
    "Potencial": "Médio",
    "Biografia": "Meio-campista experiente com passagem por grandes clubes paulistas.",
    "Análise_Técnica": "Jogador experiente com boa distribuição de jogo e liderança em campo."
  },
  {
    "Nome": "Lucas Martins",
    "Nome_Completo": "Lucas Martins Costa",
    "Idade": 24,
    "Data_Nascimento": "10/07/2001",
    "Local_Nascimento": "Rio de Janeiro, RJ",
    "Posição": "Atacante",
    "Clube_Atual": "Botafogo-PB",
    "Altura": "178cm",
    "Peso": "73kg",
    "Pé_Preferido": "Esquerdo",
    "Histórico_Clubes": "Fluminense (base), Volta Redonda, Bangu",
    "Estatísticas_2024": "12 gols, 5 assistências em 35 jogos",
    "Divisão": "Série C",
    "Pontuação": 58,
    "Ranking": 121,
    "Video_URL": "N/D",
    "Características": "Velocidade, finalização, pé esquerdo",
    "Foto_URL": "placeholder_green",
    "Potencial": "Alto",
    "Biografia": "Atacante promissor formado nas categorias de base do Fluminense.",
    "Análise_Técnica": "Atacante veloz com bom poder de finalização e especialista em pé esquerdo."
  },
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
    "Pontuação": 122,
    "Ranking": 33,
    "Video_URL": "https://www.ogol.com.br/jogador/matheus-anjos/XXXXXX",
    "Características": "Técnico, versatilidade posicional, experiência em divisões superiores",
    "Foto_URL": "https://pplx-res.cloudinary.com/image/upload/v1759706795/pplx_project_search_images/b7348c70242456cbec514fcdc0db0e98e6381a01.png",
    "Potencial": "Alto",
    "Biografia": "Meio-campista experiente com 26 anos, Matheus Anjos construiu uma carreira sólida passando por grandes clubes. Revelado no Athletico-PR, desenvolveu seu futebol técnico e versátil, destacando-se principalmente como meia ofensivo com capacidade de atuar pelas pontas. Sua experiência em divisões superiores o torna uma opção confiável para times que buscam consistência e qualidade técnica.",
    "Análise_Técnica": "Jogador de primeiro toque apurado, visão de jogo excepcional e finalização consistente. Possui boa capacidade de criação e consegue atuar em múltiplas posições do meio-campo ofensivo.",
    "Disponibilidade": "Não",
    "Clube_URL": "https://www.ogol.com.br/equipe/primavera/XXXXX",
    "Clube_Logo": "https://www.ogol.com.br/img/logos/equipas/primavera_imgbank.png"
  },
  {
    "Nome": "Zé Vitor",
    "Nome_Completo": "José Vitor Silva Neves",
    "Idade": 25,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Meia",
    "Clube_Atual": "Maringá FC",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "5 gols, 2 assistências",
    "Divisão": "Série C",
    "Pontuação": 88,
    "Ranking": 123,
    "Video_URL": "https://www.ogol.com.br/jogador/ze-vitor/XXXXXX",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Alto",
    "Biografia": "Atleta Zé Vitor de 25 anos que atua como Meia no Maringá FC. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Disponibilidade": "Não",
    "Clube_URL": "https://www.ogol.com.br/equipe/maringa/45210",
    "Clube_Logo": "https://www.ogol.com.br/img/logos/equipas/45210_imgbank_1698231469.png"
  },
  {
    "Nome": "Manuel Monzeglio",
    "Nome_Completo": "Manuel Monzeglio Velázquez",
    "Idade": 24,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Meia/Atacante",
    "Clube_Atual": "Nacional (URU)",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "Estatísticas em análise",
    "Divisão": "Primera División",
    "Pontuação": 86,
    "Ranking": 124,
    "Video_URL": "https://www.ogol.com.br/jogador/manuel-monzeglio/XXXXXX",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Alto",
    "Biografia": "Atleta Manuel Monzeglio de 24 anos que atua como Meia/Atacante no Nacional (URU). Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Disponibilidade": "Não",
    "Clube_URL": "https://www.ogol.com.br/equipe/nacional-uru/XXXXX",
    "Clube_Logo": "https://www.ogol.com.br/img/logos/equipas/nacional-uru_imgbank.png"
  }
]
const fullPlayersData = [...playersData];

// ==== VARIÁVEIS GLOBAIS ====  
const availablePlayers = [];   // Apenas jogadores disponíveis
let currentTab = 'dashboard';
let filteredPlayers = [];
let sortField = 'ranking';
let sortDirection = 'asc';
let charts = {};

// ==== INICIALIZAÇÃO DO APP ====  
function initializeApp() {
  // 1. Carrega e ordena todos os jogadores
  fullPlayersData.length = 0;
  fullPlayersData.push(...playersData);
  fullPlayersData.sort((a, b) => a.Ranking - b.Ranking);

  // 2. Filtra apenas os disponíveis
  availablePlayers.length = 0;
  availablePlayers.push(...fullPlayersData.filter(p => p.Disponibilidade === 'Sim'));

  // 3. Estado inicial de filtros e ordenação
  filteredPlayers = [...fullPlayersData];
  sortField = 'ranking';
  sortDirection = 'asc';

  handleSort('ranking');
  setupEventListeners();

  // 4. Renderiza cada aba
  renderDashboard();        // Top 5 disponíveis
  renderTop40Players();     // Top 40 disponíveis
  renderRankingTable();     // Ranking completo (todos)
  setTimeout(renderCharts, 100);
}

document.addEventListener('DOMContentLoaded', initializeApp);

// ==== CONFIGURAÇÃO DE EVENT LISTENERS ====  
function setupEventListeners() {
    // Configura todos os tabs
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
            const tabName = e.currentTarget.getAttribute('data-tab');
            showTab(tabName);
        });
    });

    // Configura outros event listeners
    const exportBtn = document.getElementById('exportBtn');
    if (exportBtn) {
        exportBtn.addEventListener('click', handleExport);
    }
}

function showTab(tabName) {
    console.log('Mudando para aba:', tabName);
    
    // Remove active de todas as abas
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Remove active de todas as sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Adiciona active na aba clicada
    const activeTab = document.querySelector(`[data-tab="${tabName}"]`);
    if (activeTab) {
        activeTab.classList.add('active');
    }
    
    // Adiciona active na section correspondente
    const activeSection = document.getElementById(tabName);
    if (activeSection) {
        activeSection.classList.add('active');
    }
    
    currentTab = tabName;
    
    // Renderiza conteúdo específico
    switch(tabName) {
        case 'dashboard':
            renderDashboard();
            break;
        case 'top40':
            renderTop40Players();
            break;
        case 'ranking':
            renderRankingTable();
            break;
        case 'positions':
            renderPlayersByPosition();
            break;
        case 'analysis':
            setTimeout(initializeCharts, 100);
            break;
    }
}

// ==== FUNÇÕES DE RENDERIZAÇÃO CORRIGIDAS ====
function renderDashboard() {
    const top5 = availablePlayers
        .slice()
        .sort((a, b) => a.Ranking - b.Ranking)
        .slice(0, 5);
    
    const container = document.getElementById('dashboardAthletes');
    if (container) {
        container.innerHTML = top5.map((player, index) => {
            const playerIndex = fullPlayersData.findIndex(p => p.Nome === player.Nome);
            return `
                <div class="athlete-card" onclick="openPlayerModal(${playerIndex})">
                    <div class="athlete-avatar">${getPlayerInitials(player.Nome_Completo)}</div>
                    <div class="athlete-name">${player.Nome}</div>
                    <div class="athlete-details">${player.Idade} anos • ${getPositionShort(player.Posição)}</div>
                    <div class="athlete-score">${player.Pontuação} pts</div>
                </div>
            `;
        }).join('');
    }
}

function renderTop40Players() {
    const top40Players = availablePlayers
        .slice()
        .sort((a, b) => a.Ranking - b.Ranking)
        .slice(0, 40);
    
    renderPlayerCards(top40Players, 'top40Grid');
}

// ==== FUNÇÕES AUXILIARES DE RENDERIZAÇÃO ====  
function renderPlayerCards(players, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = players.map(p => renderPlayerCard(p)).join('');
}

function renderTable(players, tableId) {
  const tbody = document.getElementById(tableId);
  tbody.innerHTML = players.map(p => `
    <tr>
      <td>${p.Ranking}</td>
      <td>${p.Nome}</td>
      <td>${p.Posição || 'N/D'}</td>
      <td>${p.Clube_Atual || '—'}</td>
      <td>${p.Pontuação}</td>
      <td>${p.Disponibilidade}</td>
    </tr>
  `).join('');
}

function renderPlayerCard(player) {
  return `
    <div class="player-card">
      <h3>${player.Nome}</h3>
      <p><strong>Ranking:</strong> ${player.Ranking}</p>
      <p><strong>Posição:</strong> ${player.Posição || 'N/D'}</p>
      <p><strong>Clube:</strong> ${player.Clube_Atual || '—'}</p>
      <p><strong>Pontuação:</strong> ${player.Pontuação}</p>
    </div>
  `;
}

// ==== FUNÇÕES DE ORDENAÇÃO E GRÁFICOS ====  
function handleSort(field) { /* lógica existente */ }
function renderCharts()      { /* lógica existente */ }

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
    console.log('Renderizando dashboard...');
    
    const top5 = availablePlayers
        .slice()
        .sort((a, b) => a.Ranking - b.Ranking)
        .slice(0, 5);
    
    console.log('Top 5 jogadores:', top5);
    
    const container = document.getElementById('dashboardContainer');
    if (!container) {
        console.error('Container dashboardContainer não encontrado!');
        return;
    }
    
    container.innerHTML = top5.map((player) => {
        // Encontra o índice correto no array completo
        const playerIndex = fullPlayersData.findIndex(p => p.Nome === player.Nome);
        
        // Verifica se tem foto ou usa avatar
        let photoHTML = '';
        if (player.Foto_URL && player.Foto_URL !== 'placeholder_green') {
            photoHTML = `
                <img src="${player.Foto_URL}" alt="${player.Nome}" 
                     class="athlete-photo" 
                     onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div class="athlete-avatar" style="display: none;">
                    ${getPlayerInitials(player.Nome_Completo)}
                </div>
            `;
        } else {
            photoHTML = `
                <div class="athlete-avatar">
                    ${getPlayerInitials(player.Nome_Completo)}
                </div>
            `;
        }
        
        return `
            <div class="athlete-card" onclick="openPlayerModal(${playerIndex})">
                ${photoHTML}
                <div class="athlete-name">${player.Nome}</div>
                <div class="athlete-details">${player.Idade} anos • ${getPositionShort(player.Posição)}</div>
                <div class="athlete-score">${player.Pontuação} pts</div>
            </div>
        `;
    }).join('');
    
    console.log('Dashboard renderizado com', top5.length, 'jogadores');
}

function renderTop40Players() {
    const top40Grid = document.getElementById('top40Grid');
    const top40Players = fullPlayersData.slice(0, 40);

    if (!top40Grid) return;

    top40Grid.innerHTML = top40Players.map(player => {
        const characteristics = player.Características.split(', ').slice(0, 3);
        
        // Ensure photos are displayed for top players with fallback
        let avatarHTML = '';
        if (player.Foto_URL && player.Foto_URL !== 'placeholder_green') {
            avatarHTML = `<img src="${player.Foto_URL}" alt="${player.Nome}" style="width: 100%; height: 100%; object-fit: cover; border-radius: var(--radius-full);" onerror="this.style.display='none'; this.parentElement.innerHTML='${getPlayerInitials(player.Nome_Completo)}';">`;
        } else {
            avatarHTML = getPlayerInitials(player.Nome_Completo);
        }
        
        return `
            <div class="player-card" onclick="openPlayerModal(${player.Ranking - 1})">
                <div class="ranking-badge">${player.Ranking}</div>
                <div class="player-header">
                    <div class="player-avatar">
                        ${avatarHTML}
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
    const top40Ctx = document.getElementById('top40Chart');
    if (top40Ctx && !charts.top40) {
        const top40Data = fullPlayersData.slice(0, 40);
        
        charts.top40 = new Chart(top40Ctx, {
            type: 'bar',
            data: {
                labels: top40Data.map(p => p.Nome),
                datasets: [{
                    label: '🏆 Pontuação',
                    data: top40Data.map(p => p.Pontuação),
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
    
    // Ensure photos display in modal with fallback
    let modalAvatarHTML = '';
    if (player.Foto_URL && player.Foto_URL !== 'placeholder_green') {
        modalAvatarHTML = `<img src="${player.Foto_URL}" alt="${player.Nome}" style="width: 100%; height: 100%; object-fit: cover; border-radius: var(--radius-lg);" onerror="this.parentElement.innerHTML='${getPlayerInitials(player.Nome_Completo)}';">`;
    } else {
        modalAvatarHTML = getPlayerInitials(player.Nome_Completo);
    }

    modalBody.innerHTML = `
        <div class="modal-player-header">
            <div class="modal-player-avatar">
                ${modalAvatarHTML}
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
                
                <p>🎯 Com uma pontuação de <strong>${player.Pontuação} pontos</strong> em nossa análise, ${player.Nome} ocupa a <strong>${player.Ranking}ª posição</strong> no ranking geral dos 91 atletas avaliados.</p>
                
                ${player.Biografia ? `<p>🔍 <strong>Análise Detalhada:</strong> ${player.Biografia}</p>` : ''}

                ${player.Análise_Breno ? `
                    <div style="margin-top: var(--space-16); padding: var(--space-16); background: var(--gama-gradient-3); border-radius: var(--radius-base); border: 2px solid var(--gama-green-light);">
                        <h4>🎯 Análise do Breno Carvalho:</h4>
                        <p style="color: var(--gama-green-primary); margin: 0; font-weight: var(--font-weight-medium);">${player.Análise_Breno}</p>
                    </div>
                ` : ''}
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
        "# Rico - Soluções Inteligentes | Analista: Breno Carvalho\n" +
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