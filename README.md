# Programa #Código <para> todXs - Mobile

## Sobre

Este repositório contém um app mobile em React Native e um back-end feito em Node.js.

Essa aplicação é para o programa Código para todXs edição Mobile - Serasa.

## Tecnologias utilizadas

- React Native

- Node.js

- MongoDB Atlas (versão online do MongoDB)

## Requisitos

- [**Git**](https://git-scm.com/).
- [**Node.js**](https://nodejs.org/en/).
- Um dispostivio ou emulador ([**Android Studio**](https://developer.android.com/studio) é recomendado)

## Execução

- Executar comandos em um terminal

```bash
  # Clonar o projeto:
  $ git clone https://github.com/felipekrgb/CodigoParaTodXs codigoparatodxs

  # Entrar na pasta:
  $ cd codigoparatodxs
```

- Iniciando back-end (aguardar mensagens no console, sinalizando que conectou com o Banco de Dados.)

```bash
  # Entrar na pasta do back-end:
  $ cd backend

  # Instalar as dependências:
  $ yarn
  #ou
  $ npm i


  # Iniciar a aplicação:
  $ yarn star
  #ou
  $ npm start
```

- Iniciando app

```bash
  # Voltar à pasta inicial:
  $ cd ..

  # Entrar na pasta mobile:
  $ cd mobile

  # Instalar as dependências:
  $ yarn
  #ou
  $ npm i


  # Rodar a aplicação:
  $ yarn star
  #ou
  $ npm start

  # Iniciar o emulador
  $ yarn android
  #ou
  $ npm android
```

## Instruções de utilização

- Ao entrar no app, será exibida a tela de login, solicitando e-mail e senha, e abaixo, um botão para fazer o cadastro do usuário. Você pode criar um usuário novo ou utilizar um já criado (email: user@email.com e senha: 123)

- Ao fazer login, na página inicial já é possivel realizar o empréstimo, o primeiro slider, é a opção de qual o valor que o usuário deseja no empréstimo. A segunda opção é em quantas parcelas o usuário deseja pagar, e também é mostrado o valor de cada parcela. A terceira opção é em que data o usuário deseja que seja o pagamento da sua primeira parcela.

- Abaixo das opções escolhidas pelo usuário, é mostrado os detalhes da oferta, apresentando o valor total do empréstimo, que é a soma do valor solicitado mais os juros, e ao lado é apresentado a taxa de juros do usuário (as taxas de juros foram simuladas através do Score do usuário, que também foi simulado através do salário que é cadastrado no momento de criar a conta).

- Ao clicar no botão de visualizar as informações, o usuário é levado para um página onde é apresentado a revisão de todas as informações que o mesmo escolheu. Logo abaixo, existem dois botões, um em que ele pode concluir o empréstimo e o outro ele pode cancelar e voltar para a página inicial.

- Caso conclua o empréstimo, o usuário é levado para uma página com a mensagem de sucesso e com um botão de voltar, no qual ele é direcionado para a página inicial.

- O usuário também tem acesso a uma outra aba, a aba **Empréstimos solicitados**, onde são apresentados todos os empréstimos que o usuário já solicitou, e também apresentado um breve resumo das informações do empréstimo.

## Adicionais

- Foi utilizado axios para fazer a conexão com o back-end

- Foi utilizado Formik para fazer o gerenciamento de formulários

- Foi utilizado Yup para fazer a validação dos dados dos formulários

- Foi utilizado mongoose para fazer a conexão com o banco de dados

- Foi utilizado styled-components para a estilização do app

- Foi utilizado bcrypt.js para fazer a criptografia das senhas

- Foi utilizado JSON Web Tokens para a geração de tokens para tratar a questão de rotas privadas

- Optei por não utilizar variáveis de ambiente para a conexão com o banco de dados e para a geração de tokens, visto que isto é apenas um teste.
