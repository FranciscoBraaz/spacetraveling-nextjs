## Spacetraveling - Um blog com NextJS e Prismic CMS

###  🔽 Veja funcionando:
[Deploy](https://spacetraveling-nextjs.vercel.app/)
#### Aplicação desenvolvida com o objetivo de praticar conceitos dentro do ecossistema do nextJS. Consiste num blog, que utiliza a API do Prismic CMS, para consumir os conteúdos criados (neste caso, posts). A aplicação conta com um sessão de comentários desenvolvida com o serviço disponibilizado pelo [Utteranc](https://utteranc.es/) e utiliza Static Site Generation (SSG) para renderizar as páginas do site.

<img src="https://i.imgur.com/lM6jeaZ.png" alt="Home do site, com feed de fotos" width="90%"/>

## 🛠️ Tencologias utilizadas
- Typescript
 - Prismic CMS
 - NextJS
 - [Utterances](https://utteranc.es/)

## 💻 Preview:

https://user-images.githubusercontent.com/50181942/149679426-c209faac-ba7c-4e2c-9e4b-667389234cb2.mp4

## 👷  Executando o projeto

 ### Baixando repositório para sua máquina
    # Clone o repositório com:
    git clone https://github.com/FranciscoBraaz/ig-news
    
    # Navegue para a pasta raíz com:
    cd ignews

    
   ### Instalando dependências
   

    # Baixe as dependências com:
    yarn install

### Configurando aplicações de terceiros
  #### PrismicCMS
 
 - É necessário possuir uma conta no Prismic CMS e criar alguns artigos para popular a aplicação. Após a criação da conta e dos artigos, copie suas credencias e coloque-as no arquivo 'env.local'. 
  ```
   NEXT_PUBLIC_PRISMIC_API_ENDPOINT = Seu endpoint
   NEXT_PUBLIC_PRISMIC_ACCESS_TOKEN = Seu token
  ```

<br/><br/> 
##
👨‍💻 Desenvolvido por [Francisco Braz](https://github.com/FranciscoBraaz)
