---
id: doc-backlog
title: Backlog do Produto
sidebar_label: Backlog do Produto
---

## EPIC01 - Interface PWA

### Descrição

O produto deve oferecer uma interface web progressiva com usabilidade agradável, visual atraente e um bom desempenho.

### FT01 - Visual Atraente App-Like 

O produto deve apresentar um visual App-Like para que o usuário se sinta utilizando um app nativo, além de ter um estilo moderno e minimalista, uma boa navegação entre suas telas aplicando conceito de single page application e se preocupar em ter uma usabilidade agradável.

| Id | Nome | Descrição | Relevancia |
|--|--|--|--|
| US01 | Prototipação | Eu como usuário gostaria que fosse prototipado o produto para obter respostas inciais sobre os requisitos através de um modelo funcional do produto, antes que seja efetivamente construído. | Alta |
| US02 | Modelagem de telas estáicas  | Eu como usuário gostaria de visualizar telas estáticas antes do desenvolvimento das funcionalidades. | Alta |
| TS03 | Configurar ambiente de desenvolvimento front-end | Eu como desenvolvedor gostaria de disponibilizar um ambiente de desenvolvimento front-end, para potencializar a produtividade da equipe. | Alta |

### FT02 - Experiencia Offline Significativa 

O produto deve fazer uso criterioso do armazenamento em cache para que mesmo com uma conexão ruim, ou inconstante, o usuário consiga usar o app.

| Id | Nome | Descrição | Relevancia |
|--|--|--|--|
| TS05 | Avaliação da técnica de armazenamento | Eu como desenvolvedor gostaria de avaliar as formas de armazenamento em cache para definir a que melhor se encaixa no contexto do produto. | Média |
| US03 | Implatar armazenamento em cache | Eu como usuário gostaria de poder usar a aplicação mesmo com uma conexão ruim ou inconsistente à internet. | Média |

### FT03 - Engajavél, Instalavél e Progressivo 

O produto deve enviar notificações por push via web, adicionar um icone na tela principal do usuario com apenas um clique e se adequar ao máximo as limitações do dispositivo do usuário.

| Id | Nome | Descrição | Relevancia |
|--|--|--|--|
| US04 | Implatar sistema de notificações | Eu como usuário gostaria de receber notificações por push sobre atividades do app. | Alta |
| US05 | Disponibilizar adição de ícone | Eu como usuário gostaria de adicionar ícone na tela principal com apenas um click. | Alta |

## EPIC02 - Microserviço Gerenciador de Monitorias

### Descrição

O produto deve conter um microserviço que gerencie tudo que diz respeito a perfil do usuário, consequentemente sendo responsável por cuidar de toda lógica que envolve as monitorias.

### FT04 - Manter Conta de Usuário

O produto deve disponibilizar criação, alteração, exclusão e visualização de conta para os usuários.

| Id | Nome | Descrição | Relevancia |
|--|--|--|--|
| TS04 | Configurar ambiente de desenvolvimento back-end | Eu como desenvolvedor gostaria de disponibilizar um ambiente de desenvolvimento back-end, para potencializar a produtividade da equipe. | Alta |
| TS06 | Modelagem da estrutura de classes e do banco de dados | Eu como desenvolvedor desejo fazer a modelagem das classes e do banco de dados para que possa atender a necessidades do controle dos dados de usuários.| Alta |
| TS07 | Implatação da estrutura de classes e do banco de dados | Eu como desenvolvedor desejo implantar as classes e o banco de dados para o controle dos dados de usuário. | Alta |

### FT05 - Manter Monitorias 

O produto deve disponibilizar criação, alteração, exclusão, visualização, avaliação, marcação e solicitação de monitorias para os usuários cadastrados.

| Id | Nome | Descrição | Relevancia |
|--|--|--|--|
| TS08 | Modelagem da estrutura de classes e do banco de dados | Eu como desenvolvedor desejo fazer a modelagem das classes e do banco de dados para que possa atender a necessidades do controle dos dados de monitorias.| Alta |
| TS09 | Implatação da estrutura de classes e do banco de dados | Eu como desenvolvedor desejo implantar as classes e o banco de dados para o controle dos dados de monitorias. | Alta |

### FT06 - Sistema de Pesquisa 

O produto deve oferer um sistema de pesquisa dinâmico com filtros relevantes.

| Id | Nome | Descrição | Relevancia |
|--|--|--|--|
| US06 | Implantar pesquisa dinâmico | Eu como usuário desejo que o sistema de pesquisa seja dinâmico. | Baixa |
| US07 | Disponibilizar filtros de pesquisa relevantes | Eu como usuário desejo pesquisar as monitorias de acordo com os filtros relevantes. | Alta |

## EPIC03 - Microserviço Gateway

### Descrição

O produto deve conter um microserviço responsável por intermediar a comunicação entre todos os outros microserviços, além de cuidar da interação com uma API externa de autenticação.

### FT07 - Realizar Autenticação por API Externa

O produto deve abstrair a complexidade da construção de um serviço de autenticação utilizando uma API externa para tal fim. (Ex: Telegram, Facebook, Google)

| Id | Nome | Descrição | Relevancia |
|--|--|--|--|
| US08 |  Disponibilizar autenticação por API externa | Eu como usuário desejo autenticar minha contar utilizando meu cadastro de outro serviço. | Alta |
| TS10 | Avaliação técnica da autenticação | Eu como desenvolvedor gostaria de avaliar as opções de autenticação via API externa, para definir a que melhor se encaixa no contexto do produto. | Alta |

### FT08 - Realizar Transformação e Agregação de Dados 

O produto deve através da API Gateway transformar e agregar dados visando diminuir ao máximo a quantidade de chamadas ao microserviço e o consumo de internet / dados do usuário, simplificando as requisições do lado do usuário.

| Id | Nome | Descrição | Relevancia |
|--|--|--|--|
| TS11 | Gerenciamento de informações no cache | Eu como desenvolvedor gostaria de diminuir o número de requisições de acordo com informações contidas no cache. | Alta |

### FT09 - Oferecer Ponto de Acesso Único aos Microserviços 

O produto deve oferecer um 'Proxy' para servir de ponto acesso único aos microserviços.

| Id | Nome | Descrição | Relevancia |
|--|--|--|--|
| TS12 | Gerenciamento de requisição | Eu como desenvolvedor desejo que as requisições sejam gerenciadas a partir de um único ponto. | Alta |

## EPIC04 - Microserviço de Gameficação

### Descrição

O produto deve conter um microserviço responsável gerenciar toda a parte de gamificada do produto, incluindo processamento de um ranking, cálculo de pontuações e distribuição de recompensas.

### FT10 - Ranking 

O produto deve oferecer um sistema de ranqueamento entre os usuários visando estimula-los a dar monitorias como uma forma de competir.

| Id | Nome | Descrição | Relevancia |
|--|--|--|--|
| TS13 | Algoritmo de pontuação  | Eu como desenvolvedor desejo definir um algoritmo de calculo para pontuação dos usuários, levando em conta quantidade monitoria dadas, avaliação da monitoria e sequencia de monitorias em um espaço de tempo. | Média |
| US09 | Disponibilizar sistema de ranking | Eu como usuário desejo ter acesso a um sistema de ranqueamento baseado na pontuação do usuário. | Média |
| US10 | Atualizações de ranking | Eu como usuário desejo que o ranking seja atualizado de acorodo com período de tempo pré-definido. | Baixa |

### FT11 - Recompensas 

O produto deve recompensar o usuário baseado em sua faixa de pontuação no ranking com titulos em forma de badges em seu perfil.

| Id | Nome | Descrição | Relevancia |
|--|--|--|--|
| TS14 | Algoritmo de distribuição de recompensas | Eu como desenvolvedor desejo implatar um algoritmo de distribuição de recompensas de acordo com período pré-definido de tempo. | Baixa |
| US11 | Sistema de recompensas | Eu como usuário desejo recber recompensas de acordo com meu engajamento na app, com base na minha classificação do ranking. | Baixa |

## EPIC05 - Microserviço Gerador de Feed

### Descrição

O produto deve conter um microserviço responsável por manter feed's de novidades e atualizações gerados de acordo com os perfis dos usuários.

### FT12 - Feed personalizado 

O produto deve contar com um algoritmo de geração de feed que leva em conta temas de interresse, histórico de monitorias, usuários seguidos e novidades e atualizações em geral. 

| Id | Nome | Descrição | Relevancia |
|--|--|--|--|
| TS15 | Algoritimo de Geração do Feed | Eu como desenvolvedor desejo implantar um algoritmo de feed personalizado baseado em temas de interesse, historico de monitoria, usuários seguidos e novidades em geral. |  Baixa |
| US12 | Sistema de feed perdonalizado | Eu como usuário desejo ver um feed de acordo com meus temas de interesse, historico de monitoria, usuários seguidos e novidades em geral.  | Baixa |

### FT13 - Sistema de Follow 

O produto deve oferecer a funcionalidade de seguir outros usuários para receber atualizações dos mesmos em seu feed.

| Id | Nome | Descrição | Relevancia |
|--|--|--|--|
| US13 | Sistema de seguir usuário | Eu como usuário desejo um poder de seguir usuários que eu ache interessante.  | Baixa |

## Histórico de Revisão
| Data | Versão | Descrição | Autor(es) |
|:--:|:--:|:--:|:--:|
| 06/04/2019 | 0.1 | Abertura do documento | Lucas Siqueira, Lucas Pereira, Caio Oliveira, Matheus Rodrigues |
| 06/04/2019 | 0.2 | Definição dos épicos | Lucas Siqueira, Lucas Pereira, Caio Oliveira, Matheus Rodrigues |
| 06/04/2019 | 0.3 | Definição das features  | Lucas Siqueira, Lucas Pereira, Caio Oliveira, Matheus Rodrigues |
| 07/04/2019 | 0.4 | Definição das historias de usuário, historias técnicas  | Lucas Siqueira, Lucas Pereira, Caio Oliveira, Matheus Rodrigues |