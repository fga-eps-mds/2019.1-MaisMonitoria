---
id: doc-plano-medicao
title: Plano de Medição
sidebar_label: Plano de Medição
---

## 1. Introdução
</br>
A gerência de qualidade do Projeto se faz necessário para garantir que o projeto irá satisfazer as necessidades para as quais ele foi planejado.

## 2. Objetivo
<p align="justify">
</br>
O plano de medição tem o objetivo de fornecer uma análise sobre a definição de métricas, coleta de dados, interpretação dos dados em relação  ao código produzido pela equipe, focando na qualidade do desenvolvimento do projeto +Monitoria. O processo de medir um software ajuda na identificação de pontos positivos e falhos do código desenvolvido e na tomada de decisão baseada em fatos.
</p>

## 3. Processo de Medição
</br>
### 3.1 A abordagem GQM
<p align="justify">
</br>
O GQM (Goal Question Metric) é uma abordagem de medição de software criada por Victor Basili, a abordagem é baseada na ideia de que para uma medição eficaz a organização, que está fazendo a medida, deve primeiro especificar os objetivos da medida, por isso a medição é definida em três níveis.

#### 3.1.1 Nível Conceitual (GOAL)
</br>
Nesse estágio é definido um objetivo em relação à um objeto de medição, que podem ser definidos como produto, processo e recursos.

#### 3.1.2 Nível Operacional (QUESTION)
</br>
No nível operacional é onde uma série de perguntas são levantadas para que possa ter uma caracterização de como um objetivo, levantado na fase conceitual, vai ser realizado.

#### 3.1.3 Nível Quantitativo (METRIC)
</br>
Nesse estágio as métricas são associadas ao um conjunto de dados para que possa responder às perguntas de um jeito quantitativo, esses dados podem ser objetivos e subjetivos.
</p>

## 3.2 Objetivos
</br>

### 3.2.1 Qualidade do produto

</br>

|||
|:----:|:----:|
|Analisar| Código|
|Para o propósito de| verificar e ,se necessário, propor melhorias.|
|Com respeito a| qualidade |
|Ao ponto de vista do| desenvolvedor|
|No contexto do | +Monitoria|

### 3.2.2 Qualidade da equipe
</br>

|||
|:----:|:----:|
|Analisar| Equipes de desenvolvimento|
|Para o propósito de| verificar a eficiência das equipes e, se necessário, propor melhorias.|
|Com respeito a| entrega de funcionalidades, velocidade de desenvolvimento e conhecimento adquirido |
|Ao ponto de vista do| da equipe|
|No contexto do | +Monitoria|

</br>

## 3.3 Questões

<p align="justify">
</br>
Os objetivos da medição são definidos em termos da entidade, propósito, atributos de qualidade, ponto de vista e ambiente. Cada objetivo é refinado em um conjunto de perguntas que representam uma definição operacional do objetivo.
</p>
</br>

### 3.3.1 Abstraction Sheet produto
</br>

|||
|:----:|:----:|
|**Foco na qualidade**</br>-**Q.1.1** O produto é confiável?| **Fatores de variação**</br>- Conhecimento da equipe limitado|
|**Hipóteses de baseline**</br> -Cobertura de testes igual a 95%|**Impacto na Hipótese de BaseLine**</br> - A experiência da equipe com desenvolvimento de testes influência na cobertura de teste|

</br>

### 3.3.2 Abstraction Sheet equipe
</br>

|||
|:----:|:----:|
|**Foco na qualidade**</br>-**Q.2.1**- A equipe é produtiva?</br>**Q.2.2**- A equipe está nivelada em relação ao conhecimento ?| **Fatores de variação**</br>- Dificuldades com as tecnologias</br>- Problemas relativos à organização e planejamento das atividades|
|**Hipóteses de baseline**</br>- Bons indicadores de produtividade</br>- Bom nivelamento de conhecimento entre os membros da equipe|**Impacto na Hipótese de BaseLine**</br> - Grande volume de trabalho para ser entregue a curto prazo</br>- Dívidas técnicas|

## 3.4. Métricas

</br>

### 3.4.1 Métricas do produto

</br>

#### 3.4.1.1 Cobertura de teste

</br>

|||
|:----:|:----|
|Indicador|Cobertura de testes|
|Escala de medição| Racional|
|Objetivo| Verificar a confiabilidade do código|
|Análise| **Ótimo:** Porcentagem de cobertura igual ou superior à 90%, este nível de cobertura é indicado pela cor verde na ferramenta.</br>**Medidas:** Manter nível de cobertura de código.</br>**Bom:** Porcentagem de cobertura entre 80% e 89%, este nível de cobertura é indicado pela cor amarela na ferramenta.</br>**Medidas:** Manter nível de cobertura de código, e se possível aumentar o nível para que este alcance o nível acima.</br>**Médio:** Porcentagem de cobertura entre 30% e 79%, este nível de cobertura é indicado pela cor vermelha na ferramenta.</br>**Medidas:** Direcionar esforços da equipe a fim de aumentar o nível de cobertura atual para o nível acima.</br>**Ruim:** Porcentagem de cobertura inferior a 30%, este nível de cobertura é indicado pela cor vermelha na ferramenta.</br>**Medidas:** Priorizar cobertura de testes como um fator crítico na equipe, e focar todos os esforços possíveis a fim de aumentar o nível de cobertura|

</br>

### 3.4.2 Métricas da equipe

</br>

#### 3.4.2.1 Burndown

</br>

|||
|:----:|:----|
|Indicador|Burndown|
|Escala de medição| Absoluta|
|Objetivo| Acompanhar a produtividade da equipe durante a sprint|
|Fórmula|X=Y</br>Y: Pontos entregues na sprint|
|Análise| **Ótimo:** quantidade de pontos entregues igual a quantidade de pontos planejados.</br>**Bom:**  quantidade de pontos entregues superior a metade da quantidade de pontos planejados.</br>**Médio:**  quantidade de pontos entregues igual a metade da quantidade de pontos planejados.</br>**Ruim:**  quantidade de pontos entregues inferior a metade da quantidade de pontos planejado.|
|Ferramenta| Manual |

</br>

#### 3.4.2.1 Velocity

</br>

|||
|:----:|:----|
|Indicador|Velocity|
|Escala de medição| Racional|
|Objetivo| Acompanhar a produtividade da equipe durante a sprint|
|Fórmula|∑Ps/nS</br>Ps : somatório dos pontos entregues em cada sprint</br>nS: número total de sprints realizadas|
|Análise| **Bom:**  Acima da média de pontos entregues</br>**Regular:** Igual a média de pontos entregues.</br>**Ruim:**  Abaixo da média de pontos entregues.|
|Ferramenta| Manual |
</br>

#### 3.4.3.1 Nivel de conhecimento da equipe

</br>

|||
|:----:|:----|
|Indicador|Nivelamento da equipe|
|Escala de medição| Racional|
|Objetivo| Acompanhar o nivelamento da equipe|
|Fórmula|∑Ps/nS</br>Ps : somatório dos níveis de conhecimento</br>nS: número máximo em relação ao nível de conhecimento das tecnologias|
|Análise| **Bom:**  Nível acima da média.</br>**Regular:** Nível Igual a média.</br>**Ruim:** Nível Abaixo da média.|
|Ferramenta| Quadro de conhecimento (Manual)|

## Referências
</br>

> Devmedia, disponível em : [Link](https://www.devmedia.com.br/o-processo-de-medicao-de-software-engenharia-de-software-31/18730)

> QueroCultura, disponível em: [Link](https://github.com/fga-eps-mds/2017.2-QueroCultura/wiki/Medi%C3%A7%C3%A3o-e-An%C3%A1lise)

</br>

## Histórico de Revisão
</br>

| Data | Versão | Descrição | Autor(es) |
|:--:|:--:|:--:|:--:|
| 14/04/2019 | 0.1 | Abertura do documento | Lucas Siqueira, Caio Oliveira, Matheus Rodrigues |
|14/04/2019| 0.2 | Tópicos adicionados: Objetivo, processos de medição, referências | Matheus Rodrigues|
|11/04/2019|0.3 | Revisão do documento|Lucas Macêdo e Matheus Rodrigues|



