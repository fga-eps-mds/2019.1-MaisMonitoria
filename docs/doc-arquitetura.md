---
id: doc-arquitetura
title: Documento de Arquitetura
sidebar_label: Documento de Arquitetura
---

## 1. Introdução

### 1.1. Objetivo

<p align="justify">
    Este documento visa esclarecer as principais características  arquiteturais do +Monitoria, com o objetivo de elucidar como será modelada toda a arquitetura do sistema. garantindo uma facilidade de visualização da estrutura e dos requisitos para os desenvolvedores. </p>

### 1.2. Escopo

<p align="justify">
    O +Monitoria é um produto de software que contará com uma interface Web Progressiva (PWA) e uma estrutura de microsserviços responsável pela implementação das regras de negócios, com objetivo de facilitar as monitorias na FGA.</p>

<p align="justify">
    Neste documento são apresentadas as descrições do modelo arquitetural, sua composição e requisitos de integração.</p>
    
<p align="justify"> 
    Além disso este documento tem como objetivo orientar toda equipe de MDS e EPS no desenvolvimento do produto, oferecendo diretrizes quanto às tecnologias a serem utilizadas neste projeto, além de seu padrão de utilização.</p>

### 1.3. Visão Geral

<p align="justify">
Neste documento estão contidos os seguintes pontos, respectivamente: representação da arquitetura, metas e restrições de arquitetura, visão dos casos de uso, visão lógica, visão da implementação, tamanho e desempenho.</p>

## 2. Representação Arquitetural

<p align="justify">
Será utilizada na aplicação o padrão arquitetural de microsserviços, com uma interface PWA construída com React JS, um framework que baseia-se na linguagem de programação JavaScript. A organização dos microsserviços se dará através de uma API Gateway que será responsável por intermediar a comunicação entre todos os outros microsserviços, além de cuidar da interação com uma API externa de autenticação. Os microsserviços voltados à implementação das regras de negócio serão construídos com Django Rest, um framework feito a partir da linguagem de programação Python que implementa o design de arquitetura REST. </p>

### 2.1 Representação Interna dos Microsserviços

### Microsserviços de Regra de Negócio

### Django REST Framework

<p align="justify">
Os microsserviços voltados às regras de negócio do produto serão feitos com Django Rest Framework. O Django Rest Framework é uma biblioteca para o Framework Django que disponibiliza funcionalidades para implementar APIs Rest de forma extremamente rápida. As APIs são desenvolvidas seguindo o padrão Model - View, que é descrito logo abaixo:
</p>

**Model:**

<p align="justify">
Nessa camada é implementada o banco de dados ou o modelo objeto-relacional. Tem como principais objetivos controlar o estado dos dados, responder a instruções para mudança de estado dos dados e controlar as transações com o banco de dados da aplicação.</p>

**View:**

<p align="justify"> Encarrega-se de interpretar entradas vindas de outros sistemas, distribuindo comandos como autorização, busca de dados ou requisições em outros sistemas, fazendo uso das classes definidas no modelo (Model). Será responsável por gerenciar requisições http, protocolo este de comunicação de rede.</p>

### Postgres

<p align="justify">
O PostgreSQL é um banco de dados objeto relacional, ele será responsável por armazenar os dados do projeto.</p>

### Microsserviço da Interface PWA

### ReactJS

<p align="justify">
O React é, como seus próprios criadores descrevem, “uma biblioteca JavaScript declarativa, eficiente e flexível para a criação de interfaces de usuário (UI)”. Ele permite criar seus próprios componentes. Numa aplicação em React, você deve quebrar os diferentes elementos dela em pequenos componentes reutilizáveis. Essa técnica é chamada de Component Driven Development.

</p>

### 2.2 Diagrama de Relações

![Diagrama de relações](assets/diagrama.png)

- **API de Autenticação Externa** - Deve abstrair a complexidade da construção de um serviço de autenticação utilizando uma API externa para tal fim. (Ex: Telegram, Facebook, Google)

- **API Gateway** - Fornece um ponto de acesso único à sua arquitetura de microsserviços.

- **Microsserviço Feed** - Responsável por manter feed's de novidades e atualizações gerados de acordo com os perfis dos usuários.

- **Microsserviço Monitorias** - Responsável por gerenciar tudo que diz respeito a perfil do usuário, consequentemente sendo responsável por cuidar de toda lógica que envolve as monitorias.

- **Microsserviço Gamificação** - Responsável gerenciar toda a parte de gamificada do produto, incluindo processamento de um ranking, cálculo de pontuações e distribuição de recompensas.

- **Banco de dados Monitorias** - Responsável por armazenar os dados do microsserviço monitorias.

- **Banco de dados Feed** - Responsável por armazenamento os dados do microsserviço Feed.

- **Bancos de dados Gamificação** - Responsável por armazenamento os dados do microsserviço Ranking.

- **Interface PWA** - Constrói a interface para o usuário e realiza requisições através da API Gateway.

## 3. Visão das Histórias de Usuário

- **US03 - Implantar armazenamento em cache:** Eu como usuário gostaria de poder usar a aplicação mesmo com uma conexão ruim ou inconsistente à internet.

- **US04 - Implantar sistema de notificações:** Eu como usuário gostaria de receber notificações por push sobre atividades do app.

- **US05 - Disponibilizar adição de ícone:** Eu como usuário gostaria de adicionar ícone na tela principal com apenas um click.

- **US06 - Implantar pesquisa dinâmico:** Eu como usuário desejo que o sistema de pesquisa seja dinâmico.

- **US07 - Disponibilizar filtros de pesquisa relevantes:** Eu como usuário desejo pesquisar as monitorias de acordo com os filtros relevantes.

- **US08 - Disponibilizar autenticação por API externa:** Eu como usuário desejo autenticar minha conta utilizando meu cadastro de outro serviço.

- **US09 - Disponibilizar sistema de ranking:** Eu como usuário desejo ter acesso a um sistema de ranqueamento baseado na pontuação do usuário.

- **US10 - Atualizações de ranking:** Eu como usuário desejo que o ranking seja atualizado de acordo com período de tempo pré-definido.

- **US11 - Sistema de recompensas:** Eu como usuário desejo receber recompensas de acordo com meu engajamento na app, com base na minha classificação do ranking.

- **US12 - Sistema de feed personalizado:** Eu como usuário desejo ver um feed de acordo com meus temas de interesse, histórico de monitoria, usuários seguidos e novidades em geral..

- **US13 - Sistema de seguir usuário:** Eu como usuário desejo um poder de seguir usuários que eu ache interessante.

Para mais informações visite o [Backlog](doc-backlog.md).

## 4. Metas e Restrições de Arquitetura

Uma das principais metas e restrições é se encaixar como um Progressive Web APP, através dos seguintes requisitos:

- Poder ser utilizado independentemente do browser ou do dispositivo. O sistema será funcional em navegadores de internet, entretanto atualmente está mais otimizado para o Google Chrome.
- Funcionar também sem conexão com a internet (apesar que de forma limitada).
- Enviar push notifications.
- Permitir que o usuário adicione um ícone na tela do smartphone.
- Ser atualizado de forma automática.
- Oferecer uma experiência semelhante a de um aplicativo nativo.

<p align="justify">
O Ambiente de desenvolvimento será o terminal de uma distribuição Linux com auxílio do ambiente de virtualização Docker e um editor de texto, neste ambiente faremos uso da linguagem de programação Python junto ao framework Django Rest além do framework javascript ReactJS que nos permitirá gerar uma interface agradável ao usuário.</p>

<p align="justify">
O padrão de microsserviços proporciona uma composição, manutenibilidade e reutilização de código que é essencial, levando em consideração que a equipe é grande e tem conhecimentos diversos, conclui-se que seguir um padrão é fundamental para o sucesso do projeto.</p>

## 5. Visões Arquiteturais

### 5.1. Visão Lógica

<p align="justify">
Podemos dividir a visão lógica dos nossos microsserviços em Microsserviços de Regra de Negócio que são responsáveis por implementar as funcionalidades, API Gateway responsável por mediar a comunicação entre os serviços e Microsserviço da Interface PWA que é responsável por prover uma interface para o usuário fazer uso das funcionalidades.</p>

### Microsserviços de Regra de Negócio

<p align="justify">
É possível distribuir a visão lógica do Django Rest em 2 campos: model e view.</p>

- Model - A model é a representação dos objetos, permitindo obter informações do banco de dados sem conhecer a complexidade de tal. Essa camada contém tudo sobre os dados: como acessar, validar, comportamentos e relações entre dados.

- View - Responsável por alimentar o banco de dados por intermédio da Model e receber dados da API externa. Encarrega-se de interpretar entradas vindas de outros sistemas, distribuindo comandos como autorização, busca de dados ou requisições em outros sistemas, fazendo uso das classes definidas no modelo (Model). Será responsável por gerenciar requisições http, protocolo este de comunicação de rede.

### Microsserviço da Interface PWA
<p align="justify">
Responsável pelo desenvolvimento de interface o usuário e foca na utilização de componentes para que que seja possível aumentar o máximo do reuso na sua aplicação.</p>



### 5.2. Visão de Implementação

<p align="justify">
Do ponto de vista da implementação os Microsserviços de Regra de Negócio vão ser API's REST feitas com Django Rest, a API Gateway será também uma API desenvolvida em Django REST e o Microsserviço da Interface PWA será uma aplicação web progressiva feita com ReactJS.</p>

### Microsserviços de Regra de Negócio

<p align="justify">
Para realizar a implementação do microsserviço desenvolveremos app Django Rest, teremos uma estrutura Model - View juntamente com uma "Serializers" e uma "Urls".

Descrição da distribuição do Django Rest Framework:</p>

- Arquivo Views.py - Arquivo responsável por controlar o fluxo de informações.
- Arquivo Serializers.py - Arquivo responsável por serializar as instâncias em representações do tipo Json.
- Arquivo Urls.py - Arquivo responsável por conectar e configurar os URLs da API.
- Arquivo Models.py - Arquivo responsável por gerenciar e executar a comunicação com o banco de dados além de definir entidades e validações.

### Microsserviço da Interface PWA

<p align="justify">
Para realizar a implementação do microsserviço desenvolveremos app ReactJS, teremos uma estrutura App.js juntamente com uma index.js </p>

Descrição da distribuição no ambiente React:

- Arquivo App.js - Ponto inicial da aplicação, também é capaz de referenciar componentes do projeto.
- index.js - Fazer com que retorne um elemento JSX da app.


## 6. Tamanho e desempenho

<p align="justify">
O produto deve ser simples e eficiente. Por ter uma interface PWA utilizará scripts de execução em segundo plano, arquivos JavaScript, que armazenam em cache os ativos e permitem desempenho mais alto. As principais vantagens de se utilizar PWA são retenção e economia. O produto deve fazer uso criterioso do armazenamento em cache para que mesmo com uma conexão ruim, ou inconstante, o usuário consiga usar o app.</p>

<p align="justify">
Apesar de precisar de requisições externas para a comunicação, essa aplicação não tende a sofrer muitas quedas de desempenho, inclusive pode ser usado em sistemas com menor poder de processamento e memória.</p>

<p align="justify">
Os microsserviços independentes, se construídos corretamente, não afetam uns aos outros. Isso significa que, se um elemento falhar, o restante da aplicação permanece em funcionamento, diferentemente do modelo monolítico.</p>

## 7. Qualidade

<p align="justify">
A arquitetura organiza a aplicação em microsserviços, isso faz com que a compreensão e manutenção do sistema seja facilitada para os desenvolvedores. Serão utilizados frameworks adequados para o que é requisitado no projeto, sendo Django REST para os microsserviços de regra de negócio e ReactJS para o microsserviço da interface PWA, ambos são altamente utilizados pela comunidade de desenvolvedores.</p>

<p align="justify">
O banco de dados Postgres é um software multi-plataforma altamente escalável. O software garantirá a segurança dos dados informados pelo usuário, além de disponibilizar ferramentas simples, funcionais e intuitivas.</p>
 ## 8. Referências Bibliográficas

>Documentação oficial do Django. Disponível em:
https://docs.djangoproject.com/pt-br/1.11/

>Página "Padrões Arquiteturais MVC x Arquitetura Django da wiki de fga-gpp-mds. Disponível em: https://github.com/fga-gpp-mds/00-Disciplina/wiki/Padr%C3%B5es-Arquiteturais

> Conceito de PWA. Disponível em:
https://www.opus-software.com.br/o-que-e-pwa/
> API Gateway em arquitetura de microsserviços. Disponível em:
https://imasters.com.br/apis-microsservicos/api-gateway-em-arquitetura-de-microservices-com-node-js

> External authentication services. Disponível em:
https://docs.microsoft.com/pt-br/aspnet/web-api/overview/security/external-authentication-services

> QueroCultura documento de arquitetura. Disponível em:
https://github.com/fga-eps-mds/2017.2.i/Documento-de-Arquitetura

> CabecaVoleiJoelhoPe documento de Arquitetura. Disponível em:
https://github.com/2018-2-Desenho/CabecaVoleiJoelhoPe/wiki/Documento-de-Arquitetura

> Documentação Django. Disponível em:
https://djangobook.com/mdj2-django-structure/

> Documentação ReactJS. Disponível em:
https://reactjs.org/

> Django REST Framework - HTML & Forms. Disponível em :
https://www.django-rest-framework.org/topics/html-and-forms/

> MVC, MTV e Django. Disponível em :
http://pyman.blogspot.com/2007/04/o-mvc-o-mtv-e-o-django.html

> Criando uma API REST utilizando Django REST Framework. Disponível em :
https://medium.com/@marcosrabaioli/criando-uma-api-rest-utilizando-django-rest-framework-parte-1-55ac3e394fa

___

## Histórico de Revisão
| Data | Versão | Descrição | Autor(es) |
|:--:|:--:|:--:|:--:|
| 02/04/2019 | 0.1 |  Abertura do Documento|João Pedro, Lucas Alexandre, Moacir Mascarenha |
| 03/04/2019 | 0.2 |  Adição dos tópicos: Representação da Arquitetura, Metas e Restrições de Arquitetura, Visões Arquiteturais e Referências Bibliográficas| João Pedro, Lucas Alexandre, Mateus Estanislau, Moacir Mascarenha, Renan Cristyan |
| 04/04/2019 | 0.3 | Adição dos tópicos: Tamanho e Desempenho; Qualidade;  Atualizado: Representação da arquitetura | João Pedro, Lucas Alexandre |
| 04/04/2019 | 0.4 | Adição o tópico: Visão de implementação; Atualizado: PWA | Matheus Estanislau |
| 07/04/2019  | 0.5 | Revisão de vários tópicos e adição de outros | João Pedro, Lucas Alexandre, Lucas Macêdo, Matheus Estanislau, Matheus Rodrigues, Moacir Mascarenha, Renan Cristyan |

