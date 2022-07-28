import React from 'react'

export const Refactory = () => {
  return (
    <div>
      <div class="sidebar col-3">
        <img src="require('@/assets/images/Avatar.png')" alt="Avatar" />
        <p>Anderson Martins</p>
      </div>

      <div class="main col-9">
        <section class="profile d-flex">
          <div class="profile__icon">
            <img src="require('@/assets/images/IconProfile.png')" alt="IconProfile" />
          </div>

          <div class="profile__info">
            <div class="profile__title">Perfil</div>
            <div class="profile__description">
              <p>UI Designer desde 2000 atuando em projetos com photoshop, illustrator, figma, html5, css3, sass,
                javascript, jquery e bootstrap. Hands-on em projetos com wordpress e woocommerce. Gerenciamento de código
                com bitbucket, git e github. Set-up básico de hospedagens como aws, heroku e digitalocean. Adepto da
                utilização de metodologias ágeis como scrum e kamban.</p>

              <p>Frontend Developer desde 2017 desenvolvendo e implementando soluções utilizando tecnologias como
                javascript, vue, react, styled-components, css-in-js, sass, webpack, etc. O aprendizado contínuo nessas
                tecnologias me trará mais próximo do meu objetivo que é dominar a stack javascript, typescript, react.js,
                vue.js e node.js. Além de paradigmas de programação orientada à objetos e programação funcional.</p>

              <p>Meu objetivo? Javascript Specialist Developer (Vue.js, React.js e Node.js). Meu desafio? Estar atualizado
                em assuntos como redux, context-api, react-router, reactstrap, gatsby, graphql, jamstack, node, express,
                mongodb, typescript, vuex, vue-router, vuetify, next.js, nuxt.js, nest.js, micro serviços, micro
                frontends, tdd e unit tests, utilizando ferramentas como youtube, udemy e livros.</p>
            </div>
          </div>
        </section>

        <section class="experience d-flex">
          <div class="experience__icon">
            <img src="require('@/assets/images/IconExperiences.png')" alt="IconExperiences" />
          </div>

          <div class="experience__info d-flex flex-column w-100">
            <div class="experience__title">Experiências Profissionais</div>
            <div class="experience__description">
              <div class="experience__header">
                <div class="experience__company d-flex align-items-center">
                  <div>GLOBANT  </div>
                  <small> Frontend Web UI Developer - Rio de Janeiro, Brasil. Remoto</small>
                  <img src="require('@/assets/images/IconCloseEye.png')" alt="IconCloseEye" />
                </div>
                <div class="years">
                  02/2022 - presente
                </div>
              </div>
              <div class="experience__body">
                <p>
                  <span>Contexto </span> Alocado no Jornal Estadão de São Paulo trabalhando na construção e manutenção de
                  portais notícias.
                </p>
                <ul>
                  <li>Manutenção e desenvolvimento em portais de notícias com php, html5, css3, sass, javascript, web
                    components, react.js, vue.js, tailwindcss e bootstrap.</li>
                  <li>Utilização do Zephr para acesso/automatização de conteúdos e fluxos.</li>
                  <li>Uso do Optimize360 para Testes A/B.</li>
                  <li>Gerenciamento de notícias com wordpress.</li>
                  <li>Uso de ferramentas no dia-a-dia como storybook, jira, clickup, git, github e bitbucket.</li>
                </ul>
                <p>
                  <span>Tecnologias </span> html5, css3, sass, tailwindcss, bootstrap, javascript, storybook, react.js,
                  vue.js, git, github, bitbucket, jira, scrum, optimize360, web components, php, rest api e node.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
