---
id: plano-custos
title: Plano de Custos
sidebar_label: Plano de Custos
---

## 1. Introdução

<p align="justify">O plano de gerenciamento dos custos define o formato e estabelece as atividades e os critérios de planejamento, estruturação e controle dos custos do projeto.</p>

## 2. Estimativa de Custo

<p align="justify">O cálculo da espectativa de custo vai levar em conta custos de aquisição, custos com pessoal, custo de ferramentas, custos de capacitação e uma porcentagem para cobrir eventuais riscos e manter uma margen de lucro segura.</p>

## 3. Custo de Aquisição

<p align="justify">Incluem equipamentos, espaço de trabalho, transporte e alimentação. Para levantar o custo dos equipamentos o Devops e o Arquiteto levantaram os requistos minimos que um notebook precisa ter para que os Desenvolvedores possam realizar suas atividades tranquilamente, com base nisso o Product Owner fez uma pesquisa de preço e escolheu o modelo de Notebook que atende aos requisitos impostos equalisando qualidade e bom preço. No quesito espaço de trabalho o Product Owner chegou a conclusão que a melhor saída é alugar um espaço de Coworking pois todos os outros gastos e preocupações como contas de água, luz e a manutenção do espaço estão imbutidas no aluguel. Por fim para definir um valor para as despesas com transporte e alimentação o Product Owner considerou que cada membro da equipe pegará no máximo duas conduções para se deslocar até o local de trabalho e que o preço médio de uma refeição na região é 15 reais.</p>

<br>

| Recurso | Quantidade | Valor Unitário | Valor Total |
|:--:|:--:|:--:|:--:|
| Notebook Lenovo IdeaPad 320 | 9 unidades | R$ 2.600,00* | R$ 23.400,00 |
| Conecta Coworking | 15 sprints | R$ 920,00** | R$ 13.800,00 |
| Transporte | 657 dias de deslocamento x quantidade de membros | R$ 17,00*** | R$ 11.169,00 |
| Alimentação | 657 refeições | R$ 15,00 | R$ 9.855,00 |
| **Total** | - | - | **R$ 58.224,00** |

<br>

*Preço aproximado definido com base em pesquisa feita dia 31/03/2019 no site de comparação de preços Buscapé. Link da pesquisa: [Lenovo IdeaPad 320](https://www.buscape.com.br/lenovo-ideapad-320-80yh0003br-intel-core-i5-7200u-2-5-ghz-8192-mb-1024-gb).

**Preço aproximado do aluguel de 4 baias com espaço para um pareamento em cada baia durante 10 horas por semana, com base em pesquisa feita dia 31/03/2019. Link da pesquisa: [Conecta Coworking](https://coworkingbrasil.org/spaces/conecta-coworking/).

***Preço das passagens de onibus no DF utilizando uma linha de R$ 5,00 e outra de R$ 3,50 para ir e para voltar. Link da pesquisa: [DFTRANS](http://www.dftrans.df.gov.br/tarifas/).

## 4. Custo de Pessoal

<p align="justify"> Para chegar nos valores salariais definidos o Product Owner fez uma pesquisa de quanto se paga em média por uma hora de trabalho de desenvolvedores junior para se estimar o salário da equipe de MDS, já no caso da equipe de EPS se levantou quanto se paga em média pela hora de trabalho de cada um dos papéis definidos para a equipe e ao final calculamos a média aritmética entre os ganhos médios, pois levamos em conta que tais papeis serão rotacionados entre a equipe de EPS.</p>

<br>

| Cargo | Quantidade | Salário Mensal | Meses de Trabalho | Custo Total |
|:--:|:--:|:--:|:--:|:--:|
| Desenvolvedor júnior | 5 | R$ 2.866,00* | 4 | R$ 45.856,00 |
| Gerentes de projeto | 4 | R$ 8.195,75* | 4 | R$ 131.132,00 |
| **Total** | - | - | - | **R$ 176.988,00** |

<br>

*Valor médio do salário dos Gerentes consideou que um Product Owner ganha em média R$ 8.180, um Scrum Master R$ 7.913, um Devops R$ 7.514 e um Arquiteto R$ 9.855. Valores aproximados definidos com base em pesquisa feita dia 31/03/2019 no site LoveMondays. Link da pesquisa: [LoveMondays](https://www.lovemondays.com.br/).  

## 5. Custo de Ferramentas

Não estão previstos gastos com ferramentas durante a execução do projeto, pois o grupo pretende utilizar apenas ferramentas Open Source ou em caso extremo em que não existam soluções Open Source adequadas utilizar ferramentas proprietarias dentro de seu limite Free de uso. As ferramentas que esperamos utilizar podem ser vistas no [Plano de GCS](https://fga-eps-mds.github.io/2019.1-Hora-Da-Hora/docs/plano-gcs).

## 6. Custo de Capacitação

<p align="justify">Ao discutir com a equipe de EPS sobre o atual nível técnico da equipe de MDS o Product Owner chegou a conclusão que seria necessário investir na capacitação da equipe MDS, tendo em vista que eles ainda não tem tanta desenvoltura para pesquisar e aprender por conta própria sobre os conhecimentos demandados para execução do projeto. A partir dessa decisão foram adotadas duas formas de realizar capacitação da equipe de MDS, a primeira através de Dojos ministrados pelos membros da equipe de EPS e a segunda forma que é através de cursos em plataformas online de ensino, sendo alguns gratuitos e outros adiquiridos.</p>

<br>

| Forma de Capacitação | Quantidade | Custo Unitário | Custo Total |
|:--:|:--:|:--:|:--:|
| Dojo | 4 | R$ 0,00* | R$ 0,00 |
| Curso online de Django Rest | 1 | R$ 309,99 | R$ 309,99 |
| Curso online de React Js | 1 | R$ 0,00 | R$ 0,00 |
| **Total** | - | - | **R$ 309,99** |

<br>

*Consideramos custo zero para os dojos pois a equipe de EPS recebe salário para desenvolver as atividades do projeto e os dojos foram encarados como uma atividade do projeto.

## 7. Custo Total

<p align="justify">Para estimar o custo total, além de somar todas as despesas levantadas nos tópicos anteriores o Product Owner adicionou um acrescimo de 20% no custo para garantir uma margem de lucro segura e mais 20% para cobrir eventuais riscos ou atrasos que venham a ocorrer durante a execução do projeto.</p>

<br>

| Custo | Valor Total |
|:--:|:--:|
| Aquisição | R$ 58.224,00 |
| Pessoal | R$ 176.988,00 |
| Ferramentas | R$ 0,00 |
| Capacitação | R$ 309,99 |
| **Total** | **R$ 235.521,99** |

<br>

| Custo | Valor Total |
|:--:|:--:|
| Custos de aquisição, pessoal, ferramentas e capacitação | R$ 235.521,99 |
| Acrescimo de risco | R$ 47.104,40 | 
| Margem de lucro | R$ 47.104,40 |
| **Total** | **R$ 329.730,79** |

<br>

## 8. Referências

> GUIA PMBOK®. Disponível em: https://brasil.pmi.org/brazil/PMBOKGuideAndStandards.aspx

> LOVEMONDAYS. <b>Salários para programadores e equipe de analista, arquiteto, scrum master, DevOps e PO</b>. Disponível em: <https://www.lovemondays.com.br/>.

> COWORKING BRASIL.<b> Espaços para Coworking no Distrito Federal</b>. Disponível em:
<https://coworkingbrasil.org/df/>.

___

## Histórico de Revisão
| Data | Versão | Descrição | Autor(es) |
|:--:|:--:|:--:|:--:|
| 31/03/2019 | 0.1 | Criação do documento | Lucas Macêdo |
| 31/03/2019 | 0.2 | Criação dos Tópicos | Lucas Macêdo e Lucas Siqueira |
| 31/03/2019 | 0.3 | Criação das Tabelas de Custos | Lucas Macêdo, Lucas Siqueira, Caio Oliveira e Matheus Rodrigues |