---
id: doc-arquitetura
title: Documento de Arquitetura
sidebar_label: Documento de Arquitetura
---

<br>

## 1. Introdução

<br>

### Objetivo

<p align="justify">
Este documento visa esclarecer as principais características  arquiteturais do +Monitoria, com o objetivo de elucidar como será modelada toda a arquitetura do sistema, garantindo uma facilidade de visualização da estrutura e dos requisitos para os desenvolvedores. 
</p>

### Escopo

<p align="justify">
O +Monitoria é um produto de software que contará com uma interface Web Progressiva (PWA) e uma estrutura de microsserviços responsável pela implementação das regras de negócios, com objetivo de facilitar as monitorias na FGA.
</p>

<p align="justify">
Neste documento são apresentadas as descrições do modelo arquitetural, sua composição e requisitos de integração.
</p>
    
<p align="justify"> 
Além disso este documento tem como objetivo orientar toda equipe de MDS e EPS no desenvolvimento do produto, oferecendo diretrizes quanto às tecnologias a serem utilizadas neste projeto, além de seu padrão de utilização.
</p>

### Visão Geral

<p align="justify">
Neste documento estão descritos os seguintes pontos, respectivamente: Representação Arquitetural, Backlog, Metas e Restrições de Arquitetura, Visão Lógica, Visão de Implantação, Visão da Implementação, Tamanho e Desempenho, Qualidade e Pipeline.
</p>

<br>

## 2. Representação Arquitetural

<br>
<!-- Corrigir -->

<p align="justify">
<<<<<<< HEAD

A arquitetura do Mais Monitoria, pode ser considerada uma arquitetura hibrida pois utiliza principios de três padroes arquiteturais,sendo eles: Cliente-Servidor, MVC e Microsserviços. Tambem será utilizada uma api para autenticação externa visando abstrair a complexidade da implementação de um sistema de autenticação, a api escolhida para tal fim foi a firebase autentication.
</p>

### Cliente Servidor

=======
A arquitetura do Mais Monitoria será uma arquitetura hibrida, por conta de abranger fundamentos algumas outras arquiteturas como: Cliente Servidor, Microserviço e Model View Controller (MVC).
</p>

### Cliente Servidor

>>>>>>> 0a4cff31cf515ff27f80c7a64e2cb67f5ffa434f
<p align="justify">
O principal relacionamento do projeto é implementado como um cliente-servidor. O cliente é representado pela Interface PWA, que irá realizar requisições na API Gateway, que é o servidor central do projeto.
</p>

### API Gateway

<p align="justify">
A API Gateway é a API central do projeto, uma fachada entre o frontend e os microsserviços. É responsável por validar as requisições vindas da Interface PWA redirecionando aos microsserviços apenas requisições autenticadas.
</p>

### Interface PWA

<<<<<<< HEAD
<!-- Reescrever -->
<p align="justify"> 
A interface de usuario do sistema, deverar se adequar ao PWA e será construida utilizando o ReactJS.
</p>

### Microsserviços
<!-- corrigir -->
<p align="justify">
Microsserviços são responsáveis por desenvolver sistemas mais flexíveis e com manutenção simples. A utilização de bancos dedicados para cada microsserviço é uma boa pratica, que pode ser adotada neste padrão arquitetural, para que o sistema seja escolanavel e independente, alem disso tambem é uma boa pratica possuir api gatwey para fornecer ponto de acesso aos microsserviços. 
=======
<p align="justify">
é um termo usado para denotar uma nova metodologia de desenvolvimento de software. Um Progressive Web App pode ser visto como uma evolução híbrida entre as páginas da web regulares e um aplicativo móvel. Este novo modelo de aplicação combina recursos oferecidos pelos navegadores.
</p>

### Microsserviços

<p align="justify">
Microsserviços são responsáveis por desenvolver sistemas mais flexíveis e com manutenção simples. A utilização de bancos dedicados para cada microsserviço é uma padronização da arquitetura, para que o sistema seja escolanavel e independente.
>>>>>>> 0a4cff31cf515ff27f80c7a64e2cb67f5ffa434f
</p>

### Model-View-Controller

<p align="justify">
Padrão de arquitetura de software para implementar interfaces com o usuário. Ele divide um determinado aplicativo de software em três camadas interconectadas: o modelo (Model), a visão (View) e o controlador (Controller). 
</p>

**Model -** Responsável por tratar as regras de negócio. Obter os dados e os traduzir em informações para serem exibidas pela View.

**View -** 
É camada de interface com usuário e responsável pela interação com a Model.
<<<<<<< HEAD
=======

**Controller -** Responsável por gerenciar as camadas Model e View.

</p>
>>>>>>> 0a4cff31cf515ff27f80c7a64e2cb67f5ffa434f

**Controller -** Responsável por gerenciar as camadas Model e View.

</p>
<!-- mudança -->
<p align="justify">
<<<<<<< HEAD
Na arquitetura MVC do +Monitoria as camadas Model e Controller estão representadas dentro dos microserviços e a camada View é representada pela interface PWA.
=======
Na arquitetura MVC do +Monitoria as camadas Model e Controller estão representadas dentro dos microserviços e a camada View é representada pela interface feita em ReactJS.
>>>>>>> 0a4cff31cf515ff27f80c7a64e2cb67f5ffa434f

</p>

### Django Rest Framework

<p align="justify">
O DRF é um extensão do Django Framework e é utilizado para a construção de APIs em plataforma Web. Com esse, é possível criar um backend independente, através de serviços, podendo ser acessado por uma aplicação mobile ou web através de requisições do tipo REST. Uma arquitetura REST opera através de métodos de protocolo HTTP; como GET, POST, PUT, DELETE, entre outros.
</p>

<p align="justify">
A arquitetura do Django é baseada na arquitetura MVC, no entanto é descrita como MVT (Model-View-Template), o DRF provoca uma adaptação nessa arquitetura (utiliza apenas Model-View) visando disponibilizar uma API REST. Uma boa prática utilizada no DRF é representar cada funcionalidade através de um app interno, para melhor modularização do sistema.
</p>

<p align="justify">
A model do DRF é a camada responsável por gerir, modelar e persistir os dados. Tem como principais funções controlar o estado dos dados, responder a instruções para mudança de estado dos dados e cuidar das regras de negócio da aplicação.
</p>

<p align="justify">
A view do DRF é a camada encarregada por interpretar entradas vindas de outros sistemas (através de endpoints), distribuindo comandos que geram atualização, busca de dados ou requisições em outras partes do próprio sistema ou de outro sistema que esteja sendo consumido, podendo fazer uso das classes definidas na camada de modelo (model).
</p>
<<<<<<< HEAD

### Postgres

=======

### Postgres

>>>>>>> 0a4cff31cf515ff27f80c7a64e2cb67f5ffa434f
<p align="justify">
O PostgreSQL é um banco de dados objeto relacional, ele será responsável por armazenar os dados do projeto.
</p>

### ReactJS

<p align="justify">
O React é, como seus próprios criadores descrevem, “uma biblioteca JavaScript declarativa, eficiente e flexível para a criação de interfaces de usuário (UI)”. Ele permite criar seus próprios componentes. Numa aplicação em React, você deve quebrar os diferentes elementos dela em pequenos componentes reutilizáveis para transformar em uma componente maior. Essa técnica é chamada de Component Driven Development.
</p>

### FireBase

<p align="justify">
Firebase é um produto da Google, um conjunto de tecnologias disponíveis em diversas linguagens: Java, Swift, Objective-C, Python, JavaScript (incluindo Node.js), Go, Unity e C++. Será utilizado uma das ferramentas desse produto, o Firebase Authentication. Essa ferramenta fornece serviços de back-end, SDKs fáceis de usar e bibliotecas de IU prontas para autenticar usuários. A autenticação se dará por meio de email/senha e via Facebook.
</p>

### Diagrama de Relações

<br>

![Diagrama de relações](assets/diagrama.png)

<br>

- **Autenticação Externa** - Deve abstrair a complexidade da construção de um serviço de autenticação utilizando uma API externa para tal fim.

- **API Gateway** - Fornece um ponto de acesso único à sua aos microsserviços.

- **Microsserviço de Feed** - Responsável por manter feed's de novidades e atualizações gerados de acordo com o perfil dos usuários.

- **Microsserviço de Monitorias** - Responsável por gerenciar tudo que diz respeito a perfil do usuário, consequentemente sendo responsável por cuidar de toda lógica que envolve as monitorias.

- **Microsserviço de Gamificação** - Responsável gerenciar toda a parte gamificada do produto, incluindo processamento de um ranking, cálculo de pontuações e distribuição de recompensas.

- **Banco de Dados Monitorias** - Responsável por armazenar os dados do Microsserviço de Monitorias.

- **Banco de Dados Feed** - Responsável por armazenamento os dados do microsserviço de Feed.

- **Bancos de Dados Gamificação** - Responsável por armazenamento os dados do microsserviço de Gamificação.

- **Interface PWA** - Responsável por disponibilizar a interface do usuário.

<br>

## 3. Backlog

<br>

<p align="justify">
O backlog representa a acumulação de trabalho, é uma espécie de estoque relativo ao produto que ainda não foi desenvolvido, sendo assim entende-se como uma listagem de pedidos em espera. 

Especificaente neste documento, mesmo que de forma superficial e pouco eficiente, o Backlog supri a ausência de uma especicação dos casos de uso ou da descrição dos cenários de utilização.

Os épicos levantados para o produto são:
</p> 

- **EPIC01 - Interface PWA:** O produto deve oferecer uma interface web progressiva com usabilidade agradável, visual atraente e um bom desempenho.

- **EPIC02 - Microsserviço Gerenciador de Monitorias:** O produto deve conter um microsserviço que gerencie tudo que diz respeito a perfil do usuário, consequentemente sendo responsável por cuidar de toda lógica que envolve as monitorias.

- **EPIC03 - Microsserviço Gateway:** O produto deve conter um microsserviço responsável por intermediar a comunicação entre todos os outros microsserviços, além de cuidar da interação com uma API externa de autenticação.

- **EPIC04 - Microsserviço de Gamificação:** O produto deve conter um microsserviço responsável gerenciar toda a parte de gamificada do produto, incluindo processamento de um ranking, cálculo de pontuações e distribuição de recompensas.

- **EPIC05 - Microsserviço Gerador de Feed:** O produto deve conter um microsserviço responsável por manter feed's de novidades e atualizações gerados de acordo com os perfis dos usuários.

Para mais informações visite o [Backlog](doc-backlog.md) completo.

<br>

## 4. Metas e Restrições de Arquitetura

<br>

<p align="justify">
Uma das principais metas é se encaixar como um Progressive Web APP, através dos seguintes pré-requisitos:
</p>

- Poder ser utilizado independentemente do browser ou do dispositivo.

- Funcionar também sem conexão com a internet (apesar que de forma limitada).

- Enviar notificações por push.

- Permitir que o usuário adicione um ícone na tela inicial do seu smartphone.

- Ser atualizado de forma automática.

- Oferecer uma experiência semelhante a de um aplicativo nativo.

<p align="justify">
O Ambiente de desenvolvimento devera ser o terminal de uma distribuição Linux com auxílio de um ambiente de virtualização Docker e um editor de texto, neste ambiente deve ser utilizada a linguagem de programação Python junto ao framework Django Rest além do framework javascript ReactJS que nos permitirá gerar uma interface agradável ao usuário.
</p>

<p align="justify">
O padrão de arquitetural de microsserviços devera ser utilizado para proporciona uma composição, manutenibilidade e reutilização de código que é essencial, levando em consideração que a equipe é grande e tem conhecimentos diversos, conclui-se que seguir tal padrão é fundamental para o sucesso do projeto.
</p>

<br>

## 5. Visão Lógica

<br>

<p align="justify">
Visualização arquitetural (visão lógica) fornece uma base para compreensão da estrutura e a organização do design do sistema. Descrevendo os requisitos comportamentais e a decomposição do sistema em um conjunto de abstrações.
</p>

<!-- colocar o diagrama de pacotes nesse topico e explicar sobre -->

### Interface PWA

### Microsserviço de Monitorias
<!-- explicar sobre diagrama de classe -->
![Diagrama de Classe](assets/diagrama_de_classe.jpeg)

</p>

<br>

## 6. Visão de Implantação

<!-- explicar diagrama de estados do diagrama de implantação -->

<br>

![Diagrama de Implantação](assets/diagrama_de_implantacao.png)

<br>

<p align="justify">O diagrama de implantação é responsável por estabelecer a relação entre os recursos de infraestrutura e artefatos do sistema, em outras palavras, ele mapeia as necessidades do software a ser implantado.
</p>

<br>

## 7. Visão de Implementação

<br>

### Microsserviços

<p align="justify">
No projeto, centro de cada serviço possui seus APPs. Cada app é composto pelos seguintes arquivos:
</p>

 - **models.py** - implementa a camada model e as validações personalizadas dos dados que serão guardados no banco de dados.

- **views.py** - implementa a camada view, que é responsável pela interação com a model e por processar todos os dados advindos da API do GitHub.

- **urls.py** - endpoints que permitem acesso às views.

- **serializers.py** - responsável por serializar dados, convertê-los de objeto para JSON e também por validá-los de acordo com os dados da modelo.

- **tests.py** - arquivo onde serão escritos todos os testes realizados dentro do APP.

### Interface PWA

<p align="justify">
No projeto, a interface PWA será construida utilizando ReactJS, que tem sua estrutura composta por os seguintes arquivos: 
</p>

- **App.js** - Possui o compenente raíz do aplicativo.

- **index.js** - Ponto de entrada tradicional dos nós da aplicação, indica o que será renderizado e aonde ocorrerá a renderização.

- **Assets** - Guarda os arquivos estáticos.

- **Components** - Guarda as componentes.

<br>

## 8. Tamanho e desempenho

<br>

<p align="justify">
O produto deve ser simples e eficiente. Por ter uma interface PWA utilizará scripts de execução em segundo plano, arquivos JavaScript, que armazenam em cache os ativos e permitem desempenho mais alto. As principais vantagens de se utilizar PWA são retenção e economia. O produto deve fazer uso criterioso do armazenamento em cache para que mesmo com uma conexão ruim, ou inconstante, o usuário consiga utilizar o app.
</p>

<p align="justify">
Apesar de precisar de requisições externas para a comunicação, essa aplicação não tende a sofrer muitas quedas de desempenho, inclusive pode ser usado em sistemas com menor poder de processamento e memória.
</p>

<p align="justify">
Os microsserviços independentes, se construídos corretamente, não afetam uns aos outros. Isso significa que, se um elemento falhar, o restante da aplicação permanece em funcionamento, diferentemente do modelo monolítico.
</p>

<br>

## 9. Qualidade

<br>

<p align="justify">
A arquitetura organiza a aplicação em microsserviços, isso faz com que a compreensão e manutenção do sistema seja facilitada para os desenvolvedores. Serão utilizados frameworks adequados para o que é requisitado no projeto, sendo Django REST para os microsserviços de Regra de Negócio e ReactJS para a interface PWA, ambos são altamente utilizados pela comunidade de desenvolvedores.
</p>

<p align="justify">
O banco de dados Postgres é um software multi-plataforma altamente escalável. O software garantirá a segurança dos dados informados pelo usuário, além de disponibilizar ferramentas simples, funcionais e intuitivas.
</p>

## 10. Pipeline

<!-- reescrever pipeline -->

<br>

<p align="justify">O objetivo do pipeline é automatizar o processo de entrega de software em produção de forma rápida, ao mesmo tempo garantindo sua estabilidade, qualidade e resiliência.
</p>



![Pipeline](assets/pipeline_mm.png)


Passos utilizados:


- **Build** - Constrói o código, garantindo sua execução.

- **Testing** - Realiza a execução de testes automatizados.
    
- **Style Guide** - Verifica se o código está de acordo com a folha de estilo.

- **CodeCov** - Verifica se a cobertura de testes do código atingiu nível pŕe-definido.

<!-- reescrevr docker hub -->

- **Docker Hub** - Após passar por todas etapas da intregação continua irá atualizar as imagens no Docker Hub.

</p>

 <!-- reescrever ranch( não precisa ser um topico) -->


<br>

## 11. Referências Bibliográficas

<br>

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

> Diagramas Estruturais da UML: Diagrama de Implantação. Disponível em : 
http://micreiros.com/diagrama-de-implantacao/

> MVC. Disponível em: 
https://tableless.com.br/mvc-afinal-e-o-que/

> Padrão MVC | Arquitetura Model-View-Controller. Disponível em: 
https://www.portalgsti.com.br/2017/08/padrao-mvc-arquitetura-model-view-controller.html
___

<br>

## Histórico de Revisão

<br>

| Data | Versão | Descrição | Autor(es) |
|:--:|:--:|:--:|:--:|
| 02/04/2019 | 0.1 |  Abertura do Documento|João Pedro, Lucas Alexandre, Moacir Mascarenha |
| 03/04/2019 | 0.2 |  Adição dos tópicos: Representação da Arquitetura, Metas e Restrições de Arquitetura, Visões Arquiteturais e Referências Bibliográficas| João Pedro, Lucas Alexandre, Mateus Estanislau, Moacir Mascarenha, Renan Cristyan |
| 04/04/2019 | 0.3 | Adição dos tópicos: Tamanho e Desempenho; Qualidade;  Atualizado: Representação da arquitetura | João Pedro, Lucas Alexandre |
| 04/04/2019 | 0.4 | Adição o tópico: Visão de implementação; Atualizado: PWA | Matheus Estanislau |
| 07/04/2019 | 0.5 | Revisão de vários tópicos e adição de outros | João Pedro, Lucas Alexandre, Lucas Macêdo, Matheus Estanislau, Matheus Rodrigues, Moacir Mascarenha, Renan Cristyan |
| 21/04/2019 | 0.6 | Adição do pipeline | Matheus Rodrigues |
| 26/04/2019 | 0.7 | Refatorado Representação arquitetural | João Pedro |
| 26/04/2019 | 0.8 | Refatorado os tópicos 2 e 3 | João Pedro, Lucas Alexandre, Renan Cristyan |
| 26/04/2019 | 0.9 | Atualizado topico 5, refatorado diagrama de transição | João Pedro, Lucas Alexandre, Renan Cristyan |
| 27/04/2019 | 0.9 | Atualizado topico 2 e 5 | João Pedro, Lucas Alexandre, Mateus Estanislau |
| 29/04/2019 | 1.0 | Documento Refatorado | João Pedro, Lucas Alexandre, Mateus Estanislau, Renan Cristyan e Lucas Alexandre|

