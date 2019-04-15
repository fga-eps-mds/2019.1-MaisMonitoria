---
id: plano-riscos
title: Plano de Riscos
sidebar_label: Plano de Riscos
---

<br>

## 1. Introdução

<br>

<p align="justify">O Plano de gerenciamento de riscos consiste da identificação, análise, planejamento de respostas e controle dos riscos. Depois do planejamento, torna-se possível fazer a gerência dos riscos, esta será feita pelo scrum master ao decorrer das sprints.</p>

## 2. Estrutura Analítica de Riscos - EAR

<br>

<p align="justify">A EAR facilita a identificação de riscos em projetos, servindo como guia para análise do contexto, da documentação e também para questionamento das partes interessadas. Tem como objetivo mostrar as principais categorias de risco para um tipo de projeto buscando especificidade, pois dessa forma o ganho de tempo na identificação é mais significativo[1]. </p>

### 2.2. Categoria dos Riscos

<br>

Os riscos podem ser apresentados em categorias. São elas:

* **Técnico**

Os riscos técnicos abordam os requisitos, tecnologia, complexidade, interfaces, desempenho e confiabilidade e qualidade.

* **Externo**

Os riscos externos abordam o ambiente acadêmico, os fatores pessoais e cliente(Product Owner).

* **Organizacional**

Os riscos organizacionais abordam as dependências do projeto, recursos, financiamento e priorização.

* **Gerenciamento de projetos**

Os riscos de gerenciamento do projeto abordam a estimativa, planejamento, controle e a comunicação.

## 3. Análise quantitativa dos riscos

<br>

### 3.1. Impacto

<br>

<p align = "justify">Para se quantificar o impacto do risco no projeto o <b>custo</b>, o <b>tempo</b>, o <b>escopo</b> e a <b>qualidade</b> devem ser levados em conta.

A tabela abaixo deve ser usada como referência:

| Impacto | Intervalo | Descrição | Representação |
|:-------------:|:---------:|:---------:|:---------:|
| **Muito Baixo** | menor que 20% |Impacto pouco expressivo no desenvolvimento do projeto|1|
| **Baixo** | de 21% a 40% |Pouco impacto no desenvolvimento do projeto|2|
| **Médio** | de 41% a 60% |Possui certo impacto porém é facilmente recuperado |3|
| **Alto** | de 61% a 80% |Há grande impacto no desenvolvimento do projeto|4|
| **Muito Alto** | Acima de 80% |O impacto inviabiliza o projeto|5|

### 3.2. Probabilidade

<br>

<p align = "justify">Para quantificar um risco em relação a sua probabilidade de ocorrência a tabela a seguir deve ser utilizada:

| Probabilidade | Intervalo | Representação | 
|:-------------:|:---------:|:---------:|
| **Muito Baixa** | menor que 10% |1|
| **Baixa** | de 11% a 30% |2|
| **Média** | de 31% a 50% |3|
| **Alta** | de 51% a 60% |4|
| **Muito Alta** | maior que 61%  |5|

### 3.3. Prioridade

<br>

<p align = "justify">Para definir a prioridade do risco deve-se relacionar a Probabilidade com o Impacto por meio da matriz <b>Probabilidade</b>x<b>Impacto</b> a seguir:

| Probabilidade / Impacto | Muito Baixa | Baixo | Média | Alta | Muito Alta |
|:-----------------------:|:-----------:|:-----:|:-----:|:----:|:----------:|
| **Muito Baixo** | 1 | 2 | 3 | 4 | 5 |
| **Baixo** | 2 | 4 | 6 | 8 | 10 |
| **Médio** | 3 | 6 | 9 | 12 | 15 |
| **Alto** | 4 | 8 | 12 | 16 | 20 |
| **Muito Alto** | 5 | 10 | 15 | 20 | 25 |

<p align = "justify">O valor da prioridade definido na matriz <b>Probabilidade</b>x<b>Impacto</b> deve ser traduzido, utilizando a seguinte tabela:

| Prioridade | Intervalo |
|:-------------:|:---------:|
| **Muito Baixa** | 1 ~ 4 |
| **Baixa** | 5 ~ 9 |
| **Média** | 10 ~ 14 |
| **Alta** | 15 ~ 19 |
| **Muito Alta** | 20 ~ 25 |

## 4. Riscos levantados

<br>

| **Risco** | **Descrição** | **Categoria EAR** | **Prob.** | **Impacto** | **Ação** | **Prioridade**
| --- | --- | --- | --- | --- | --- | --- | 
| R01 | Dificuldade com as tecnologias | Técnico - Tecnologia | Alta | Muito Alto | Estudo e pareamentos efetivos | 20
| R02 | Redução dos membros da equipe | Externo - Fatores pessoais  | Baixa | Muito Alto | Comunicação efetiva, motivação, e redistribuição das tarefas | 10
| R03 | Mudança de escopo | Gerenciamento do projeto - Planejamento  | Alta | Alto | Redefinir o escopo e redistribuir as novas tarefas | 16
| R04 | Falta de comunicação | Organizacionais - Estratégias  | Média | Médio | Usar meios de comunicações comuns entre os membros | 9
| R05 | Perda de equipamentos da equipe | Externo - Fatores pessoais | Muito Baixa | Muito Alto | Definir pareamentos que permitam ocorrer presencialmente | 5
| R06 | Alteração nas datas da disciplina | Externo - Ambiente acadêmico | Baixa | Alto | Redefinir datas das entregas | 8
| R07 | Entregas atrasadas | Gerenciamento do projeto - Planejamento | Alta | Alto | Definição de uma nova data para a entrega e se necessário um novo pareamento | 16
| R08 | Dependência das atividades | Gerenciamento do projeto - Planejamento | Muito baixa | Alto | Redefinição das tarefas a fim de acabar com a dependência | 4
| R09 | Qualidade do projeto não atender às expectativas do Product Owner | Externo - "Cliente" | Media | Alto | Acompanhamento do desenvolvimento junto ao Product Owner | 12
| R10 | Fácil adaptação a tecnologia | Técnico - Tecnologia | Baixa  | Baixo | Possibilidade de adição de novas features | 4
| R11 | Falta de salas na faculdade para encontros | Externo - Ambiente acadêmico | Média  | Alto | Realocar equipe para outro local que possua internet, tomadas, entre outros | 12
| R12 | Pareamentos não efetivos | Externo - Fatores pessoais | Média  | Alto | Tentar aumentar a comunicação entre os membros, se possível alguém da equipe de EPS monitorar o pareamento, e se extremamente necessário realocar membros em outras atividades. | 12
| R13 | Conflito entre entregas da sprint e de tarefas de outras disciplinas. | Externo - Fatores pessoais | Muito Alta  | Alto | diminuir o escopo da sprint e redistribuir tarefas. | 12


## 5. Referências

<br>

>[1] RODRIGUES, Eli. EAR para projetos de software. Disponivel em https://www.elirodrigues.com/2013/09/21/gerenciamento-de-riscos-ear-para-projetos-de-software/  
>[2] NAKASHIMA, D. T. V. Identificação de riscos em projetos de TI.

## Histórico de Revisão

<br>

| Data | Versão | Descrição | Autor(es) |
|:--:|:--:|:--:|:--:|
|27/03/2019 | 0.1 | Abertura e desenvolvimento do documento | Lucas Siqueira e Caio Oliveira







