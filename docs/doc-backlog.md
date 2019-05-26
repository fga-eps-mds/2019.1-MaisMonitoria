---
id: doc-backlog
title: Backlog 
sidebar_label: Backlog
---

<br>

## 1. Introdução

<br>

<p align="justify">
O backlog é um artefato que representa a acumulação de trabalho, é uma espécie de estoque relativo ao produto que ainda não foi desenvolvido, sendo assim entende-se como uma listagem de pedidos em espera.

Temos um backlog do produto em que engloba todas o trabalho planejado para o produto, e um backlog reduzido para descrever apenas o que está dentro do escopo do projeto que vai realizado durante as disciplinas de EPS e MDS.
</p>

## 2. Backlog do Projeto

<br>

## EPIC01 - Interface PWA

<br>

### Descrição

<br>

O produto deve oferecer uma interface web progressiva com usabilidade agradável, visual atraente e um bom desempenho.

### FT01 - Visual Atraente App-Like

<br>

O produto deve apresentar um visual App-Like para que o usuário se sinta utilizando um app nativo, além de ter um estilo moderno e minimalista, uma boa navegação entre suas telas aplicando conceito de single page application e se preocupar em ter uma usabilidade agradável.

| Id | Nome | Descrição | Relevância |
|--|--|--|--|
| US01 | Prototipação | Eu como usuário gostaria que fosse prototipado o produto para obter respostas iniciais sobre os requisitos através de um modelo funcional do produto, antes que seja efetivamente construído. | Alta |
| US02 | Modelagem de telas estáticas  | Eu como usuário gostaria de visualizar telas estáticas antes do desenvolvimento das funcionalidades. | Alta |
| TS03 | Configurar ambiente de desenvolvimento front-end | Eu como desenvolvedor gostaria de disponibilizar um ambiente de desenvolvimento front-end, para potencializar a produtividade da equipe. | Alta |

### FT02 - Experiência Offline Significativa

<br>

O produto deve fazer uso criterioso do armazenamento em cache para que mesmo com uma conexão ruim, ou inconstante, o usuário consiga usar o app.

| Id | Nome | Descrição | Relevância |
|--|--|--|--|
| TS05 | Avaliação da técnica de armazenamento | Eu como desenvolvedor gostaria de avaliar as formas de armazenamento em cache para definir a que melhor se encaixa no contexto do produto. | Média |
| US03 | Implantar armazenamento em cache | Eu como usuário gostaria de poder usar a aplicação mesmo com uma conexão ruim ou inconsistente à internet. | Média |

### FT03 - Engajavél, Instalavél e Progressivo

<br>

O produto deve enviar notificações por push via web, adicionar um ícone na tela principal do usuário com apenas um clique e se adequar ao máximo as limitações do dispositivo do usuário.

| Id | Nome | Descrição | Relevância |
|--|--|--|--|
| US04 | Implantar sistema de notificações | Eu como usuário gostaria de receber notificações por push sobre atividades do app. | Alta |
| US05 | Disponibilizar adição de ícone | Eu como usuário gostaria de adicionar ícone na tela principal com apenas um click. | Alta |

## EPIC02 - Microsserviço Gerenciador de Monitorias

<br>

### Descrição

<br>

O produto deve conter um microsserviço que gerencie tudo que diz respeito a perfil do usuário, consequentemente sendo responsável por cuidar de toda lógica que envolve as monitorias.

### FT04 - Manter Conta de Usuário

<br>

O produto deve disponibilizar criação, alteração, exclusão e visualização de conta para os usuários.

| Id | Nome | Descrição | Relevância |
|--|--|--|--|
| TS04 | Configurar ambiente de desenvolvimento back-end | Eu como desenvolvedor gostaria de disponibilizar um ambiente de desenvolvimento back-end, para potencializar a produtividade da equipe. | Alta |
| TS06 | Modelagem da estrutura de classes e do banco de dados | Eu como desenvolvedor desejo fazer a modelagem das classes e do banco de dados para que possa atender a necessidades do controle dos dados de usuários.| Alta |
| TS07 | Implantação da estrutura de classes e do banco de dados | Eu como desenvolvedor desejo implantar as classes e o banco de dados para o controle dos dados de usuário. | Alta |

### FT05 - Manter Monitorias

<br>

O produto deve disponibilizar criação, alteração, exclusão, visualização, avaliação, marcação e solicitação de monitorias para os usuários cadastrados.

| Id | Nome | Descrição | Relevância |
|--|--|--|--|
| TS08 | Modelagem da estrutura de classes e do banco de dados | Eu como desenvolvedor desejo fazer a modelagem das classes e do banco de dados para que possa atender a necessidades do controle dos dados de monitorias.| Alta |
| TS09 | Implantação da estrutura de classes e do banco de dados | Eu como desenvolvedor desejo implantar as classes e o banco de dados para o controle dos dados de monitorias. | Alta |

### FT06 - Sistema de Pesquisa

<br>

O produto deve oferecer um sistema de pesquisa dinâmico com filtros relevantes.

| Id | Nome | Descrição | Relevância |
|--|--|--|--|
| US06 | Implantar pesquisa dinâmico | Eu como usuário desejo que o sistema de pesquisa seja dinâmico. | Baixa |
| US07 | Disponibilizar filtros de pesquisa relevantes | Eu como usuário desejo pesquisar as monitorias de acordo com os filtros relevantes. | Alta |

## EPIC03 - Microsserviço Gateway

<br>

### Descrição

<br>

O produto deve conter um microsserviço responsável por intermediar a comunicação entre todos os outros microsserviços, além de cuidar da interação com uma API externa de autenticação.

### FT07 - Realizar Autenticação por API Externa

<br>

O produto deve abstrair a complexidade da construção de um serviço de autenticação utilizando uma API externa para tal fim. (Ex: Telegram, Facebook, Google)

| Id | Nome | Descrição | Relevância |
|--|--|--|--|
| US08 |  Disponibilizar autenticação por API externa | Eu como usuário desejo autenticar minha conta utilizando meu cadastro de outro serviço. | Alta |
| TS10 | Avaliação técnica da autenticação | Eu como desenvolvedor gostaria de avaliar as opções de autenticação via API externa, para definir a que melhor se encaixa no contexto do produto. | Alta |

### FT08 - Realizar Transformação e Agregação de Dados

<br>

O produto deve através da API Gateway transformar e agregar dados visando diminuir ao máximo a quantidade de chamadas ao microsserviço e o consumo de internet / dados do usuário, simplificando as requisições do lado do usuário.

| Id | Nome | Descrição | Relevância |
|--|--|--|--|
| TS11 | Gerenciamento de informações no cache | Eu como desenvolvedor gostaria de diminuir o número de requisições de acordo com informações contidas no cache. | Alta |

### FT09 - Oferecer Ponto de Acesso Único aos Microsserviços

<br>

O produto deve oferecer um 'Proxy' para servir de ponto acesso único aos microsserviços.

| Id | Nome | Descrição | Relevância |
|--|--|--|--|
| TS12 | Gerenciamento de requisição | Eu como desenvolvedor desejo que as requisições sejam gerenciadas a partir de um único ponto. | Alta |

## 3. Backlog do Produto
<br>
O backlog do produto engloba todos os épicos descritos acima e também os seguintes épicos:

## EPIC04 - Microsserviço de Gamificação

<br>

### Descrição

<br>

O produto deve conter um microsserviço responsável gerenciar toda a parte de gamificada do produto, incluindo processamento de um ranking, cálculo de pontuações e distribuição de recompensas.

### FT10 - Ranking

<br>

O produto deve oferecer um sistema de ranqueamento entre os usuários visando estimulá-los a dar monitorias como uma forma de competir.

| Id | Nome | Descrição | Relevância |
|--|--|--|--|
| TS13 | Algoritmo de pontuação  | Eu como desenvolvedor desejo definir um algoritmo de cálculo para pontuação dos usuários, levando em conta quantidade monitoria dadas, avaliação da monitoria e sequência de monitorias em um espaço de tempo. | Média |
| US09 | Disponibilizar sistema de ranking | Eu como usuário desejo ter acesso a um sistema de ranqueamento baseado na pontuação do usuário. | Média |
| US10 | Atualizações de ranking | Eu como usuário desejo que o ranking seja atualizado de acordo com período de tempo pré-definido. | Baixa |

### FT11 - Recompensas

<br>

O produto deve recompensar o usuário baseado em sua faixa de pontuação no ranking com títulos em forma de badges em seu perfil.

| Id | Nome | Descrição | Relevância |
|--|--|--|--|
| TS14 | Algoritmo de distribuição de recompensas | Eu como desenvolvedor desejo implantar um algoritmo de distribuição de recompensas de acordo com período pré-definido de tempo. | Baixa |
| US11 | Sistema de recompensas | Eu como usuário desejo receber recompensas de acordo com meu engajamento na app, com base na minha classificação do ranking. | Baixa |

## EPIC05 - Microsserviço Gerador de Feed

<br>

### Descrição

O produto deve conter um microsserviço responsável por manter feed's de novidades e atualizações gerados de acordo com os perfis dos usuários.

### FT12 - Feed personalizado

<br>

O produto deve contar com um algoritmo de geração de feed que leva em conta temas de interesse, histórico de monitorias, usuários seguidos e novidades e atualizações em geral.

| Id | Nome | Descrição | Relevância |
|--|--|--|--|
| TS15 | Algoritmo de Geração do Feed | Eu como desenvolvedor desejo implantar um algoritmo de feed personalizado baseado em temas de interesse, histórico de monitoria, usuários seguidos e novidades em geral. |  Baixa |
| US12 | Sistema de feed personalizado | Eu como usuário desejo ver um feed de acordo com meus temas de interesse, histórico de monitoria, usuários seguidos e novidades em geral.  | Baixa |

### FT13 - Sistema de Follow

<br>

O produto deve oferecer a funcionalidade de seguir outros usuários para receber atualizações dos mesmos em seu feed.

| Id | Nome | Descrição | Relevância |
|--|--|--|--|
| US13 | Sistema de seguir usuário | Eu como usuário desejo um poder de seguir usuários que eu ache interessante.  | Baixa |


## Histórico de Revisão

<br>

| Data | Versão | Descrição | Autor(es) |
|:--:|:--:|:--:|:--:|
| 06/04/2019 | 0.1 | Abertura do documento | Lucas Siqueira, Lucas Macêdo, Caio Oliveira, Matheus Rodrigues |
| 06/04/2019 | 0.2 | Definição dos épicos | Lucas Siqueira, Lucas Macêdo, Caio Oliveira, Matheus Rodrigues |
| 06/04/2019 | 0.3 | Definição das features  | Lucas Siqueira, Lucas Macêdo, Caio Oliveira, Matheus Rodrigues |
| 07/04/2019 | 0.4 | Definição das historias de usuário, historias técnicas  | Lucas Siqueira, Lucas Macêdo, Caio Oliveira, Matheus Rodrigues |
| 12/04/2019 | 0.5 | Adição de introdução  | Lucas Siqueira|
| 01/05/2019 | 0.6 | Adição de backlog do projeto  | Lucas Siqueira|




