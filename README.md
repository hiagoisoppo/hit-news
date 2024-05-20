<img src="/public/Preview.png" alt="Application Preview" />

# [HIT News](https://hitnews.vercel.app/)

![Static Badge](https://img.shields.io/badge/ViteJs-4.4.5-yellow)
![Static Badge](https://img.shields.io/badge/TypeScript-5.0.2-blue)
![Static Badge](https://img.shields.io/badge/ReactJs-18.2.0-blue)
![Static Badge](https://img.shields.io/badge/Vitest-0.34.4-yellow)
![Static Badge](https://img.shields.io/badge/ReactTestingLibrary-14.0.0-red)
![Static Badge](https://img.shields.io/badge/TailwindCss-3.3.3-blue)  
![Static Badge](https://img.shields.io/badge/PostCss-8.4.29-red)
![Static Badge](https://img.shields.io/badge/HeroIcons-2.0.18-purple)
![Static Badge](https://img.shields.io/badge/IBGE_API_Notícias-3.0.0-white)

### Descrição:
O HIT News é uma aplicação web desenvolvida com o objetivo de distribuir e organizar as notícias mais recentes, disponibilizadas através da API do IBGE. Durante o desenvolvimento foi utilizado as seguintes tecnologias:  ViteJs, TypeScript, ReactJs, ReactTestingLibrary, Vitest, TailwindCss, PostCss, HeroIcons.
  
### Funcionalidades:
- Listagem com resumo das últimas noticias atualizadas, atráves da API: [IBGE API Notícias](https://servicodados.ibge.gov.br/api/docs/noticias?versao=3).
- Buscar e filtragem de receitas, atráves de categorias e palavras-chaves.
- Acesso a noticia completa atráves do redirecionamento para a pagina oficial do IBGE.
- Aba de Favoritos, para armazenar em LocalStorage todas as noticias que o usuário mais gostou.
- Opção de compartilhamento, onde você poderá enviar para seus amigos o link de acesso a receita.

### Como acessar a aplicação:
  Se for de sua preferência visualizar a aplicação em operação, basta acessar o [deploy](https://hitnews.vercel.app/), caso deseje instalar localmente prossiga com o passo a passo:
  - Abra o terminal e faça um clone do repositório.
  ```bash
    git clone git@github.com:hiagoisoppo/hit-news.git
  ```
  - Acesse a pasta clonada do repositório, e instale as dependências.
  ```bash
    cd hit-news
    npm install
  ```
  - Inicie o servidor de desenvolvimento.
  ```bash
    npm run dev
  ```
  - Abra o navegador no endereço [http://localhost:5173](http://localhost:5173).
</details>