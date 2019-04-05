---
id: doc-arquitetura
title: Documento de Arquitetura
sidebar_label: Documento de Arquitetura
---


## Introdução

### 1.1. Objetivo
<p align="justify"> 
	Este documento visa esclarecer as principais características  arquiteturais do YouTutor, com o objetivo de elucidar como será modelada toda a arquitetura do sistema. garantindo uma facilidade de visualização da estrutura e dos requisitos e para os desenvolvedores. </p>
 
### 1.2. Escopo
<p align="justify"> 
	YouTutor é um Progressive Web App (PWA) com objetivo de facilitar as monitorias na FGA. Um dos papéis dos desenvolvedores é seguir este documento com a finalidade de garantir que  padrão proposto pela arquitetura seja executado. </p>

### 1.2. Visão Geral

<p align="justify">
Neste documento estão contidos os seguintes pontos, respectivamente: representação da arquitetura, metas e restrições de arquitetura, visão dos casos de uso, visão lógica, visão da implementação, tamanho e desempenho.</p>

## 2. Representação da Arquitetura
<p align="justify">
	A arquitetura da aplicação seguirá o modelo MVT (Model - View - Template), já que usaremos o Django Rest Framework para o desenvolvimento do back-end que é escrito na linguagem de programação python, React JS para a interface com o usuário baseado na linguagem de programação JavaScript. GATEWAY</p>

### 2.1 MVT


**O MVT pode ser resumido da seguinte maneira:**

**Model:**

<p align="justify">
Nessa camada é implementada o banco de dados ou o modelo objeto-relacional. Tem como principais objetivos controlar o estado dos dados, responder a instruções para mudança de estado dos dados e controlar as transações com o banco de dados da aplicação.</p>

**View:**
<p align="justify"> Encarrega-se de interpretar entradas vindas de outros sistemas, distribuindo comandos como autorização, busca de dados ou requisições em outros sistemas, fazendo uso das classes definidas no modelo (Model). Os comandos dados pela camada View podem ser utilizados pela camada Template para realizar interação do usuário com o sistema, atendendo suas demandas de busca, visualização de dados, entre outras.
</p>

**Template:**
<p align="justify">
 Nessa camada fica a interface do sistema, responsável por fazer a comunicação entre o usuário e o sistema de forma ágil e visualmente agradável. Implementada principalmente em HTML, CSS e JavaScript, mas podendo também utilizar tecnologias menos usuais. 
</p>

### 2.2 API Connection
<p align="justify">
Cuidará da comunicação com a API Mapas Culturais, gerando encapsulamento das transações e disponibilizando as outras partes do sistema os dados provenientes da API Mapas Culturais que necessitam para realizar suas funções dentro do contexto de processamento de dados, geração de indicadores e afins. Tem interação direta com a camada View e indireta com as demais através da camada View.</p>

### 2.3 PWA

<p align="justify">
	PWA (Progressive Web App) é uma metodologia de desenvolvimento que torna a experiência de uso de uma página web pelo smartphone muito semelhante a de um aplicativo mobile. Basicamente, trata-se de um híbrido entre página web e aplicativo mobile. Algumas das principais características dos PWA são:</p>

- Podem ser utilizados independentemente do browser ou do dispositivo;

- Funcionam também sem conexão com a internet;
Enviam push notifications;
- Permitem que o usuário adicione um ícone na tela do smartphone;
- São atualizados de forma automática;
- Oferecem uma experiência semelhante a de um aplicativo nato.

<p align="justify">
As principais vantagens de se utilizar PWA são retenção e economia. Geralmente em um aplicativo o usuário segue uma série de etapas, como buscar o app, instalar, se cadastrar e interagir. Em cada etapa cerca de 20% dos usuários deixam de usar o app, porém com PWA todo esse processo é agilizado, evitando que o usuário perca o interesse logo no começo. Além disso, desenvolver um PWA é muito mais barato do que um aplicativo, já que se trata de uma plataforma disponível para todos os usuários, independente do dispositivo.</p>

<p align="justify">
Entretanto, se comparado aos aplicativos nativos, os PWA tem problemas de compatibilidade de lista de contatos, Near Field Connection (NFC) e Bluetooth. Além disso, a Apple é bastante relutante em aderir aos PWA.</p>

## 3. Metas e Restrições de Arquitetura
<p align="justify">
O sistema que será utilizado trata-se de um PWA (Progressive Web App), que suportam ou, na verdade, substituem uma estratégia de design para dispositivos móveis, na qual você pode criar o PWA para dispositivos móveis e disponibilizá-los em todos os dispositivos. O PWA depende de CSS3, JavaScript e outras ferramentas padrão, e elas podem ser facilmente portada s para outros navegadores e plataformas. Por ser um Progressive Web App a aplicação permitirá a execução off-line e o acesso ao armazenamento off-line, podendo exibir notificações push.
</p>
<p align="justify">
O Ambiente de desenvolvimento será o terminal de uma distribuição Linux com auxílio do ambiente de virtualização Docker e editores de texto, neste ambiente faremos uso da linguagem de programação Python junto ao framework Django Rest além de tecnologias e ferramentas que nos permitam gerar uma interface agradável ao usuário, como por exemplo CSS e JavaScript. As funcionalidades serão implementadas por meio da comunicação com uma API que irá interagir com o sistema por meio de requisições para atualização e requisição de dados a base.
</p>
<p align="justify">
O padrão MVT proporciona uma composição, manutenibilidade e reutilização de código que é essencial, levando em consideração que a equipe é grande e tem conhecimentos diversos, conclui-se que seguir um padrão é fundamental para o sucesso do projeto.
</p>


## 4. Visão dos Casos de Uso

### 4.1 Diagramas de casos de uso

### 4.2 Descrição dos casos de uso

## 5. Visões Arquiteturais

### 5.1. Visão lógica
<p align="justify">
É possível distribuir a visão lógica em 3 campos, sendo eles model,view e template</p>

- Model - Responsável por gerenciar toda  comunicação com o banco de dados da aplicação desde a persistência até busca de dados.
- View - Responsável por alimentar o banco de dados por intermédio da Model e receber dados em formato Json da API e após refiná-los  apresenta informações através da camada Template.
- Template - Responsável pela interação com o usuário, conterá as telas de apresentação dos indicadores, tela de apresentação do mapa de atualizações em tempo real e as demais páginas do sistema.


### 5.2 Visão de implementação

### 5.3 Diagrama de Classes

## 6. Tamanho e desempenho

## 7. Qualidade
 
 
 
## 8. Referências Bibliográficas



>Documentação oficial do Django disponível em : https://docs.djangoproject.com/pt-br/1.11/
>Página "Padrões Arquiteturais MVC x Arquitetura Django da wiki de fga-gpp-mds disponível em: https://github.com/fga-gpp-mds/00-Disciplina/wiki/Padr%C3%B5es-Arquiteturais 
___

## Histórico de Revisão
| Data | Versão | Descrição | Autor(es) |
|:--:|:--:|:--:|:--:|
| 02/04/2019 | 0.1 |  Abertura do Documento|João Pedro, Lucas Alexandre, Moacir Mascarenha |
| 03/04/2019 | 0.2 |  Adição dos tópicos: Representação da Arquitetura, Metas e Restrições de Arquitetura, Visões Arquiteturais e Referências Bibliográficas| João Pedro, Lucas Alexandre, Mateus Estanislau, Moacir Mascarenha, Renan Cristyan |


