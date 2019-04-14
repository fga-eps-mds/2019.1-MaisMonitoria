---
id: doc-plano-medicao
title: Plano de Medição
sidebar_label: Plano de Medição
---

## 1. Introdução


## 2. Objetivo

<p align="justify">
O plano de medição tem o objetivo de fornecer uma análise sobre a definição de métricas, coleta de dados, interpretação dos dados em relação  ao código produzido pela equipe, focando na qualidade do desenvolvimento do projeto Mais Monitoria. O processo de medir um software ajuda na identificação de pontos positivos e falhos do código desenvolvido e na tomada de decisão baseada em fatos.
</p>

## 3. Processo de Medição

### 3.1 A abordagem GQM
<p align="justify">
O GQM (Goal Question Metric) é uma abordagem de medição de software criada por Victor Basili, a abordagem é baseada na ideia de que para uma medição eficaz a organização, que está fazendo a medida, deve primeiro especificar os objetivos da medida, por isso a medição é definida em três níveis.

#### 3.1.1 Nível Conceitual (GOAL) 
Nesse estágio é definido um objetivo em relação à um objeto de medição, que podem ser definidos como produto, processo e recursos.

#### 3.1.2 Nível Operacional (QUESTION)
No nível operacional é onde uma série de perguntas são levantadas para que possa ter uma caracterização de como um objetivo, levantado na fase conceitual, vai ser realizado.

#### 3.1.3 Nível Quantitativo (METRIC)
Nesse estágio as métricas são associadas ao um conjunto de dados para que possa responder às perguntas de um jeito quantitativo, esses dados podem ser objetivos e subjetivos.
</p>

## 4. Questões

<p align="justify">
Os objetivos da medição são definidos em termos da entidade, propósito, atributos de qualidade, ponto de vista e ambiente. Cada objetivo é refinado em um conjunto de perguntas que representam uma definição operacional do objetivo.
</p>

|||
|----|----|
|**Foco na qualidade**</br>-**Q.1.1** O produto é confiável?| **Fatores de variação**</br>- Conhecimento da equipe limitado|
|**Hipóteses de baseline**</br> -Cobertura de testes igual a 95%|**Impacto na Hipótese de BaseLine**</br> - A experiência da equipe com desenvolvimento de testes influência na cobertura de teste|


## 5. Métricas

### 5.1 Cobertura de teste

|||
|----|----|
|Indicador|Cobertura de testes|
|Escala de medição| Racional|
|Objetivo| Verificar a confiabilidade do código|
|Análise| **Ótimo:** Porcentagem de cobertura igual ou superior à 90%, este nível de cobertura é indicado pela cor verde na ferramenta.</br>**Medidas:** Manter nível de cobertura de código.</br>**Bom:** Porcentagem de cobertura entre 80% e 89%, este nível de cobertura é indicado pela cor amarela na ferramenta.</br>**Medidas:** Manter nível de cobertura de código, e se possível aumentar o nível para que este alcance o nível acima.</br>**Médio:** Porcentagem de cobertura entre 30% e 79%, este nível de cobertura é indicado pela cor vermelha na ferramenta.</br>**Medidas:** Direcionar esforços da equipe a fim de aumentar o nível de cobertura atual para o nível acima.</br>**Ruim:** Porcentagem de cobertura inferior a 30%, este nível de cobertura é indicado pela cor vermelha na ferramenta.</br>**Medidas:** Priorizar cobertura de testes como um fator crítico na equipe, e focar todos os esforços possíveis a fim de aumentar o nível de cobertura|


