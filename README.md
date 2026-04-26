# Netflix Clone

> Clone da interface Netflix desenvolvido durante a Imersão AI da Alura.

## 📋 Visão Geral do Projeto

Interface web que replica a experiência de seleção de perfil e navegação do catálogo Netflix, com tema claro/escuro e design responsivo.

## 🛠️ Tecnologias

| Categoria | Tecnologia |
|-----------|------------|
| **Frontend** | HTML5, CSS3, JavaScript (ES6+) |
| **Armazenamento** | LocalStorage |
| **Ícones** | Font Awesome 6.0 |
| **Fontes** | Google Fonts (Roboto) |

## 🏗️ Arquitetura

```
netflix/
├── index.html          # Página inicial de seleção de perfis
├── index.js           # Script para gerenciamento de perfis
├── styles.css         # Estilos globais e tema
├── script.js          # Scripts globais
├── assets/            # Imagens e recursos estáticos
└── catalogo/
    ├── catalogo.html  # Página do catálogo de filmes/séries
    ├── catalogo.css   # Estilos específicos do catálogo
    └── js/
        ├── main.js   # Componente principal
        ├── data.js   # Dados dos filmes/séries
        ├── utils.js  # Utilitários
        └── components/
            ├── Card.js      # Componente de card
            └── Carousel.js  # Componente de carrossel
```

## ✨ Funcionalidades

- **Seleção de Perfis**: Interface para escolher perfil de usuário
- **Persistência de Dados**: Armazenamento do perfil ativo via LocalStorage
- **Catálogo Dinâmico**: Exibição de filmes/séries em carrosséis
- **Tema Claro/Escuro**: Alternância de tema visual
- **Design Responsivo**: Adaptação para diferentes tamanhos de tela

## 🚀 Como Executar

1. Clone o repositório
2. Abra o arquivo `index.html` em um navegador web
3. Selecione um perfil para acessar o catálogo

## 📄 Licença

Este projeto é apenas para fins educacionais e não possui afiliação com a Netflix.