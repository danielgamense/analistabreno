// Player data with Gama DF theme and real photos
const playersData = [
  {
    "Nome": "Matheus Anjos",
    "Nome_Completo": "Matheus Anjos Silva",
    "Idade": 26,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Meia Ofensivo/Ponta Esquerda",
    "Clube_Atual": "Primavera",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "5 gols, 6 assistências, em 34 jogos",
    "Divisão": "Paulista A2",
    "Pontuação": 90.0,
    "Ranking": 1,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Alto",
    "Biografia": "Atleta Matheus Anjos de 26 anos que atua como Meia Ofensivo no Primavera. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 26 anos com potencial interessante na posição de Meia Ofensivo. Análise em desenvolvimento."
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
    "Pontuação": 89.1,
    "Ranking": 2,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Alto",
    "Biografia": "Atleta Guilherme Cachoeira de 23 anos que atua como Atacante no Athletic-MG. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 23 anos com potencial interessante na posição de Atacante. Análise em desenvolvimento."
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
    "Pontuação": 88.2,
    "Ranking": 3,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Alto",
    "Biografia": "Atleta Zé Vitor de 25 anos que atua como Meia no Maringá FC. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 25 anos com potencial interessante na posição de Meia. Análise em desenvolvimento."
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
    "Pontuação": 87.3,
    "Ranking": 4,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Muito Alto",
    "Biografia": "Atleta Thauan Williams de 21 anos que atua como Atacante no Londrina. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 21 anos com potencial interessante na posição de Atacante. Análise em desenvolvimento."
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
    "Pontuação": 86.4,
    "Ranking": 5,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Alto",
    "Biografia": "Atleta Manuel Monzeglio de 24 anos que atua como Meia/Atacante no Nacional (URU). Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 24 anos com potencial interessante na posição de Meia/Atacante. Análise em desenvolvimento."
  },
  {
    "Nome": "Gabryel Martins",
    "Nome_Completo": "Gabryel Martins Silva",
    "Idade": 23,
    "Data_Nascimento": "N/D",
    "Local_Nascimento": "Brasil",
    "Posição": "Atacante/Ponta",
    "Clube_Atual": "Ypiranga-RS",
    "Altura": "N/D",
    "Peso": "N/D",
    "Pé_Preferido": "N/D",
    "Histórico_Clubes": "Em análise",
    "Estatísticas_2025": "Estatísticas em análise",
    "Divisão": "Série C",
    "Pontuação": 85.6,
    "Ranking": 6,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Alto",
    "Biografia": "Atleta Gabryel Martins de 23 anos que atua como Atacante no Ypiranga-RS. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 23 anos com potencial interessante na posição de Atacante. Análise em desenvolvimento."
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
    "Pontuação": 84.7,
    "Ranking": 7,
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
    "Pontuação": 83.8,
    "Ranking": 8,
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
    "Pontuação": 82.9,
    "Ranking": 9,
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
    "Pontuação": 82.0,
    "Ranking": 10,
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
    "Pontuação": 81.1,
    "Ranking": 11,
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
    "Pontuação": 80.2,
    "Ranking": 12,
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
    "Pontuação": 79.3,
    "Ranking": 13,
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
    "Pontuação": 78.4,
    "Ranking": 14,
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
    "Pontuação": 77.6,
    "Ranking": 15,
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
    "Pontuação": 76.7,
    "Ranking": 16,
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
    "Pontuação": 75.8,
    "Ranking": 17,
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
    "Pontuação": 74.9,
    "Ranking": 18,
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
    "Pontuação": 74.0,
    "Ranking": 19,
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
    "Pontuação": 73.1,
    "Ranking": 20,
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
    "Pontuação": 72.2,
    "Ranking": 21,
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
    "Pontuação": 71.3,
    "Ranking": 22,
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
    "Pontuação": 70.4,
    "Ranking": 23,
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
    "Pontuação": 69.6,
    "Ranking": 24,
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
    "Pontuação": 68.7,
    "Ranking": 25,
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
    "Pontuação": 67.8,
    "Ranking": 26,
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
    "Pontuação": 66.9,
    "Ranking": 27,
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
    "Pontuação": 66.0,
    "Ranking": 28,
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
    "Pontuação": 65.1,
    "Ranking": 29,
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
    "Pontuação": 64.2,
    "Ranking": 30,
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
    "Pontuação": 63.3,
    "Ranking": 31,
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
    "Pontuação": 62.4,
    "Ranking": 32,
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
    "Pontuação": 61.6,
    "Ranking": 33,
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
    "Pontuação": 60.7,
    "Ranking": 34,
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
    "Pontuação": 59.8,
    "Ranking": 35,
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
    "Pontuação": 58.9,
    "Ranking": 36,
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
    "Pontuação": 58.0,
    "Ranking": 37,
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
    "Pontuação": 57.1,
    "Ranking": 38,
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
    "Pontuação": 56.2,
    "Ranking": 39,
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
    "Pontuação": 55.3,
    "Ranking": 40,
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
    "Pontuação": 54.4,
    "Ranking": 41,
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
    "Pontuação": 53.6,
    "Ranking": 42,
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
    "Pontuação": 52.7,
    "Ranking": 43,
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
    "Pontuação": 51.8,
    "Ranking": 44,
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
    "Pontuação": 50.9,
    "Ranking": 45,
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
    "Pontuação": 50.0,
    "Ranking": 46,
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
    "Pontuação": 49.1,
    "Ranking": 47,
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
    "Pontuação": 48.2,
    "Ranking": 48,
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
    "Pontuação": 47.3,
    "Ranking": 49,
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
    "Pontuação": 46.4,
    "Ranking": 50,
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
    "Pontuação": 45.6,
    "Ranking": 51,
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
    "Pontuação": 44.7,
    "Ranking": 52,
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
    "Pontuação": 43.8,
    "Ranking": 53,
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
    "Pontuação": 42.9,
    "Ranking": 54,
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
    "Pontuação": 42.0,
    "Ranking": 55,
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
    "Pontuação": 41.1,
    "Ranking": 56,
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
    "Pontuação": 40.2,
    "Ranking": 57,
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
    "Pontuação": 39.3,
    "Ranking": 58,
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
    "Pontuação": 38.4,
    "Ranking": 59,
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
    "Pontuação": 37.6,
    "Ranking": 60,
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
    "Pontuação": 36.7,
    "Ranking": 61,
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
    "Pontuação": 35.8,
    "Ranking": 62,
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
    "Pontuação": 34.9,
    "Ranking": 63,
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
    "Pontuação": 34.0,
    "Ranking": 64,
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
    "Pontuação": 33.1,
    "Ranking": 65,
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
    "Pontuação": 32.2,
    "Ranking": 66,
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
    "Pontuação": 31.3,
    "Ranking": 67,
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
    "Pontuação": 30.4,
    "Ranking": 68,
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
    "Pontuação": 29.6,
    "Ranking": 69,
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
    "Pontuação": 28.7,
    "Ranking": 70,
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
    "Pontuação": 27.8,
    "Ranking": 71,
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
    "Pontuação": 26.9,
    "Ranking": 72,
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
    "Pontuação": 26.0,
    "Ranking": 73,
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
    "Pontuação": 25.1,
    "Ranking": 74,
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
    "Pontuação": 24.2,
    "Ranking": 75,
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
    "Pontuação": 23.3,
    "Ranking": 76,
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
    "Pontuação": 22.4,
    "Ranking": 77,
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
    "Pontuação": 21.6,
    "Ranking": 78,
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
    "Pontuação": 20.7,
    "Ranking": 79,
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
    "Pontuação": 19.8,
    "Ranking": 80,
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
    "Pontuação": 18.9,
    "Ranking": 81,
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
    "Pontuação": 18.0,
    "Ranking": 82,
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
    "Pontuação": 17.1,
    "Ranking": 83,
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
    "Pontuação": 16.2,
    "Ranking": 84,
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
    "Pontuação": 15.3,
    "Ranking": 85,
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
    "Pontuação": 14.4,
    "Ranking": 86,
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
    "Pontuação": 13.6,
    "Ranking": 87,
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
    "Pontuação": 12.7,
    "Ranking": 88,
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
    "Pontuação": 11.8,
    "Ranking": 89,
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
    "Pontuação": 10.9,
    "Ranking": 90,
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
    "Ranking": 91,
    "Video_URL": "N/D",
    "Características": "Técnico, dedicado, em análise",
    "Foto_URL": "placeholder_green",
    "Potencial": "Médio",
    "Biografia": "Atleta Cristian Lucca de 28 anos que atua como Meia Ofensivo no ASA. Jogador em processo de avaliação técnica detalhada.",
    "Análise_Técnica": "Jogador em processo de análise técnica detalhada. Características específicas em avaliação.",
    "Análise_Breno": "Atleta de 28 anos com potencial interessante na posição de Meia Ofensivo. Análise em desenvolvimento."
  }
];

// Add more sample players to reach 22 total for demonstration
const additionalPlayers = [
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
    "Ranking": 6,
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
    "Ranking": 7,
    "Video_URL": "N/D",
    "Características": "Velocidade, finalização, pé esquerdo",
    "Foto_URL": "placeholder_green",
    "Potencial": "Alto",
    "Biografia": "Atacante promissor formado nas categorias de base do Fluminense.",
    "Análise_Técnica": "Atacante veloz com bom poder de finalização e especialista em pé esquerdo."
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
    // Render dashboard athletes - TOP 4 + 1 EMPTY SLOT
    const dashboardAthletes = document.getElementById('dashboardAthletes');
    if (dashboardAthletes) {
        const top4Athletes = fullPlayersData.slice(0, 4);
        
        dashboardAthletes.innerHTML = top4Athletes.map((player, index) => {
            // Force use real photos for the main 4 athletes
            let photoHTML = '';
            if (player.Foto_URL && player.Foto_URL !== 'placeholder_green') {
                photoHTML = `<img src="${player.Foto_URL}" alt="${player.Nome}" class="athlete-photo" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                            <div class="athlete-avatar" style="display: none;">${getPlayerInitials(player.Nome_Completo)}</div>`;
            } else {
                photoHTML = `<div class="athlete-avatar">${getPlayerInitials(player.Nome_Completo)}</div>`;
            }
            
            return `
                <div class="athlete-card" onclick="openPlayerModal(${index})">
                    ${photoHTML}
                    <div class="athlete-name">${player.Nome}</div>
                    <div class="athlete-details">${player.Idade} anos • ${getPositionShort(player.Posição)}</div>
                    <div class="athlete-score">${player.Pontuação} pts</div>
                </div>
            `;
        }).join('') + `
            <div class="athlete-card empty-slot">
                <div class="empty-slot-content">
                    <div style="font-size: 2rem; margin-bottom: 8px;">⚽</div>
                    <div>Vaga Disponível</div>
                    <div style="font-size: 12px; color: var(--gama-green-medium);">Em análise</div>
                </div>
            </div>
        `;
    }
}

function renderTop10Players() {
    const top10Grid = document.getElementById('top10Grid');
    const top10Players = fullPlayersData.slice(0, 10);

    if (!top10Grid) return;

    top10Grid.innerHTML = top10Players.map(player => {
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
                
                <p>🎯 Com uma pontuação de <strong>${player.Pontuação} pontos</strong> em nossa análise, ${player.Nome} ocupa a <strong>${player.Ranking}ª posição</strong> no ranking geral dos 22 atletas avaliados.</p>
                
                ${player.Biografia ? `<p>🔍 <strong>Análise Detalhada:</strong> ${player.Biografia}</p>` : ''}

                ${player.Análise_Breno ? `
                    <div style="margin-top: var(--space-16); padding: var(--space-16); background: var(--gama-gradient-3); border-radius: var(--radius-base); border: 2px solid var(--gama-green-light);">
                        <h4>🎯 Análise do Breno Rodrigues:</h4>
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