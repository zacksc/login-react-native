# Aplicativo de Login React Native (Convertido do Snacks da Expo)

Este é um aplicativo de login desenvolvido em React Native com TypeScript, originalmente concebido no ambiente Snacks da Expo.

## Funcionalidades Principais

* **Tela de Login Intuitiva:**
    * Campos de entrada para e-mail e senha.
    * Validação de credenciais em tempo real, fornecendo feedback imediato ao usuário.
    * Transição suave para a tela de boas-vindas após o login bem-sucedido.
* **Tela de Boas-Vindas Personalizada:**
    * Exibição de mensagens de boas-vindas.
    * Funcionalidade de logout com retorno à tela de login.
    * Notificações de status para informar o usuário sobre o resultado das açoes tomadas na tela.

## Tecnologias Empregadas

* **React Native:** Framework essencial para a construção de aplicativos móveis multiplataforma.
* **TypeScript:** Adição de tipagem estática para um código mais robusto.
* **React Native StyleSheet:** Estilização eficiente e adaptável para interfaces móveis.

## Estrutura do Projeto

* `App.tsx`: Componente central, orquestrando o estado e a navegação do aplicativo.
* `assets/`: Repositório de recursos visuais, como imagens.

## Instalação e Execução

1.  **Pré-requisitos:**
    * Ambiente Node.js e npm (ou yarn) configurado.
    * React Native CLI instalado globalmente.
    * Android Studio ou Xcode prontos para o desenvolvimento mobile.
2.  **Instalação de Dependências:**
    * Clone o repositório do projeto.
    * Navegue até o diretório do projeto no seu terminal.
    * Execute `npm install` ou `yarn install`.
3.  **Execução do Aplicativo:**
    * Para dispositivos Android: `npx react-native run-android`.
    * Para dispositivos iOS: `npx react-native run-ios`.

## Detalhes da Conversão

O processo de migração do "Snacks da Expo" para React Native apresentou desafios, notavelmente na adaptação dos estilos para a plataforma mobile. A propriedade `display`, pedia ajustes para funcionar no React Native (`'none'` ou `'flex'`).

## Melhorias Futuras

* Implementação de navegação avançada com React Navigation.
* Aprimoramento da validação de dados e experiência do usuário.
* Otimização do design para diferentes tamanhos de tela.
* Expansão das funcionalidades com a adição de novas telas.
* Integração com bancos de dados locais ou remotos para gerenciamento de usuários.

## Contribuição

Contribuições são incentivadas! Sinta-se à vontade para relatar problemas ou sugerir melhorias por meio de issues ou pull requests.