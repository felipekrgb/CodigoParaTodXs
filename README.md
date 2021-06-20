# Programa #Código <para> todXs - Mobile

## Sobre

Este repositório contém um app mobile em React Native e um back-end feito em Node.js.

Essa aplicação é para o programa Código para todXs edição Mobile - Serasa.

## Tecnologias utilizadas

- React Native

- Node.js

- MongoDB Atlas (versão online do MongoDB)

## Requisitos

- [**Git**](https://git-scm.com/)
- [**Node.js**](https://nodejs.org/en/)
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
  # ou
  $ npm i


  # Iniciar a aplicação:
  $ yarn start
  # ou
  $ npm start
```

- Iniciando app

```bash
  # Entrar na pasta mobile:
  $ cd mobile

  # Instalar as dependências:
  $ yarn
  # ou
  $ npm i

  # Rodar a aplicação:
  $ yarn start
  # ou
  $ npm start

  # Iniciar o emulador
  $ yarn android
  # ou
  $ npx react-native run-android
```

## Instruções de utilização

- Ao entrar no app, será exibida a tela de login, solicitando e-mail e senha, e abaixo, um botão para fazer o cadastro do usuário. Você pode criar um usuário novo ou utilizar um já criado (email: user@email.com e senha: 123)

- Ao fazer login, na página inicial já é possivel realizar o empréstimo, o primeiro slider, é a opção de qual o valor que o usuário deseja no empréstimo. A segunda opção é em quantas parcelas o usuário deseja pagar, e também é mostrado o valor de cada parcela. A terceira opção é em que data o usuário deseja que seja o pagamento da sua primeira parcela.

- Abaixo das opções escolhidas pelo usuário, é mostrado os detalhes da oferta, apresentando o valor total do empréstimo, que é a soma do valor solicitado mais os juros, e ao lado é apresentado a taxa de juros do usuário (as taxas de juros foram simuladas através do Score do usuário, que também foi simulado através do salário que é cadastrado no momento de criar a conta).

- Ao clicar no botão de visualizar as informações, o usuário é levado para um página onde é apresentado a revisão de todas as informações que o mesmo escolheu. Logo abaixo, existem dois botões, um em que ele pode concluir o empréstimo e o outro ele pode cancelar e voltar para a página inicial.

- Caso conclua o empréstimo, o usuário é levado para uma página com a mensagem de sucesso e com um botão de voltar, no qual ele é direcionado para a página inicial.

- O usuário também tem acesso a uma outra aba, a aba **Empréstimos Solicitados**, onde são apresentados todos os empréstimos que o usuário já solicitou, e também apresentado um breve resumo das informações do empréstimo.

## Documentação

### Back-end

#### Routes

- No back-end, existe a pasta routes, onde tem todas as rotas de requisições possíveis da aplicação.
- O arquivo user.routes apresenta a rota para criação (método POST) de um usuário. Ele verifica no banco de dados se existe algum usuário com o email fornecido no app mobile, caso não exista, ele realiza o cadastro e também é criado um Score (apenas simulação) com base no salário que o usuário informou.
- O arquivo loan.routes apresenta as rotas para a criação (método POST) e apresentação (método GET) de empréstimos. No método POST, ele cria um empréstimo e faz a conexão dele com o usuário que criou. No método GET ele retorna todos os empréstimos solicitados por um usuário.
- O arquivo session.routes apresenta a rota para fazer login no app. Ele busca por um email, caso não exista ele retorna um erro. Compara a senha criptografada que está no banco de dados com a senha enviada pelo usuário no formulário do app e caso esteja correto, é permitida a entrada do usuário no sistema, caso esteja errada, retorna uma mensagem de senha inválida.

#### Models

- Na pasta models existem os schemas do moongose, basicamente um modelo de como iremos salvar os dados dentro da base de dados.

#### Middlewares

- Na pasta middlewares existe um único arquivo que é executado antes que uma determinada rota seja chamada, no caso, ele é executado antes da chamada das rotas de criação e visualização de empréstimos, para que tenha certeza que o usuário esteja logado (rotas privadas) e para que seja possível identificar qual o usuário que está chamando tal rota.

#### Database

- Na pasta database é onde é feita a conexão com o MongoDB Atlas e algumas configurações.

#### Config

- Na pasta config é onde temos variáveis de configurações para geração de tokens e para a conexão com o banco de dados.

### Mobile

#### Pages

- Na pasta pages é onde temos todas as possíveis telas da aplicação.
- Temos a tela de login, a tela de registro.
- Temos a tela Principal (Dashboard), onde é apresentado todo o esquema para realizar um empréstimo.
- Temos a tela de Empréstimos (Loans), onde são apresentados todos os empréstimos de um usuário.
- Temos a tela de Informações de Empréstimo (LoansInfo), onde é apresentado uma revisão das informações antes que o usuário conclua o empréstimo.
- Temos a tela de Empréstimo realizado com Sucesso (LoanCreated), onde é exibido que o empréstimo foi bem-sucedido.

#### Hooks

- Na pasta hooks temos um arquivo responsável por disponibilizar para o resto da aplicação algumas funcões e váriaveis necessárias, como por exemplo, é possível disponibilizar dados do usuário em diversas páginas apenas fazendo um import deste arquivo.

#### Components

- Na pasta components temos recursos visuais que são utilizados com frequência, como por exemplo, botões e inputs.

#### Routes

- Na pasta routes é onde temos as parte que controla o fluxo das telas da pasta Pages.

#### Services

- Na pasta services temos a configuração da chamada do back-end, utilizando o axios.

## Adicionais

- Foi utilizado axios para fazer a conexão com o back-end.

- Foi utilizado Formik para fazer o gerenciamento de formulários.

- Foi utilizado Yup para fazer a validação dos dados dos formulários.

- Foi utilizado mongoose para fazer a conexão com o banco de dados.

- Foi utilizado styled-components para a estilização do app.

- Foi utilizado bcrypt.js para fazer a criptografia das senhas.

- Foi utilizado JSON Web Tokens para a geração de tokens para tratar a questão de rotas privadas.

- Foi utilizado Editorconfig, Prettier e ESLint para manter uma organização nos padrões de código.

- Optei por não utilizar variáveis de ambiente para a conexão com o banco de dados e para a geração de tokens, visto que isto é apenas um teste.

- Optei pela versão online do MongoDB para que não seja necessário a instalação local de uma base de dados.
