---
id: doc-folhaEstilo
title: Folha de Estilo
sidebar_label: Folha de Estilo
---


# 1. Introdução

<p align="justify">Este documento tem como objetivo padronizar e organizar o estilo de código entre os integrantes do projeto. A folha de estilo é baseada no padrão PEP 8, que é um documento de convenções Python, onde são estabelecidas boas práticas e recomendações para se criar códigos organizados e, consequentemente, mais legíveis e baseada nos padrões de utilização do React.</p>

# 2. Python
## 2.1 Layout de Código
### 2.1.1 Indentação
### 2.1.1.1 Usar 4 espaços por nível de identação
   Exemplo correto:
   if (constant > iterator)
       do_something()

   Exemplo incorreto:
   if (constant > iterator)
   do_something()

### 2.1.1.2 As linhas são limitadas a no máximo 79 caracteres
   Exemplo correto:
   total = ((number_of_items * base_price) + (taxes * dollar_quotation)
           - (sub_total - commercial_discount))

   Exemplo incorreto:
   total = ((number_of_items * base_price) + (taxes * dollar_quotation) - (sub_total - commercial_discount))

### 2.1.1.3 Alinhar os operandos com a quebra do delimitador
   Exemplo correto:
   # Aligned with opening delimiter
   foo = long_function_name(var_one, var_two,
                            var_three, var_four)

   Exemplo incorreto:
   # Arguments on first line forbidden when not using vertical alignment
   foo = long_function_name(var_one, var_two,
       var_three, var_four)

### 2.1.1.4 O fechamento de parênteses, colchetes ou chaves pode ser alinhado sob o primeiro caractere não-espaço-branco da última linha da lista
   Exemplo correto:
   vector = [
   1, 2, 3,
   4, 5, 6,
   7, 8, 9
   ]

   Exemplo incorreto:
   vector = [
   1, 2, 3,
   4, 5, 6,
   7, 8, 9]
### 2.1.1.5 Uma linha deve ser quebrada depois de um operador binário
   Exemplo correto:
   income = (gross_wages +
             taxable_interest +
             (dividends - qualified_dividends) -
             ira_deduction -
             student_loan_interest)

   Exemplo incorreto:
   income = (gross_wages
         + taxable_interest
         + (dividends - qualified_dividends)
         - ira_deduction
         - student_loan_interest)

### 2.1.2 Linhas em branco
### 2.1.2.1 Colocar linhas em branco entre as linhas de código
   Exemplo correto:
   name = input('enter your name')
   age = input('enter your name')

   people = People(name,age)

   print(people.getName())
   print(people.getAge())

   Exemplo incorreto:
   name = input ('enter your name')
   age = input ('enter your name')
   people = People(name , age)
   print(people.getName())
   print(people.getAge())
  
### 2.1.2.2 Adicionar duas linhas em branco acima e abaixo das definições de classe e funções top-level

### 2.1.2.3 As definições de métodos dentro de uma classe são cercadas por uma única linha em branco

### 2.1.2.4 Linhas em branco podem ser usadas para separar grupos de funções relacionadas e omitidas entre um grupo de one-liners relacionados
   Exemplo correto:
   var_1 = 0
   var_2 = 2 ** 5
   result = var_1 + var_2

   string_1 = “Hello ”
   string_2 = “World!”
   phrase = string + string2

   Exemplo incorreto:
   var_1 = 0
   var_2 = 2 ** 5
   result = var_1 + var_2
   string_1 = “Hello ”
   string_2 = “World!”
   phrase = string + string2

### 2.1.3 Imports
### 2.1.3.1 Imports devem estar em linhas separadas
   Exemplo correto:
   import os
   import sys

   Exemplo incorreto:
   import sys, os

### 2.1.3.2 Os imports são sempre colocados na parte de cima do arquivo, logo após qualquer comentário e docstrings do arquivo, e antes dos módulos globais e constantes

## 2.2 Estruturas de Comentários
### 2.2.1 Comentários de linha única devem ser escritos com # (espaço) (comentário)
   Exemplo correto:
   # This is a commentary
  
   Exemplo incorreto:
   #This is a commentary

### 2.2.2 Todos os comentários devem começar com letra maiúscula
   Exemplo correto:
   # This is a commentary
  
   Exemplo incorreto:
   # this is a commentary

### 2.2.3 Todos os comentários devem ser redigidos em inglês
   Exemplo correto:
   # This is a commentary   

   Exemplo incorreto:
   # Este é um comentário

### 2.2.4 Todos os comentários devem ter uma linha em branco acima
   Exemplo correto:
   string_1 = “Hello ”
   string_2 = “World!”
   phrase = string + string2

   # Printing “Hello World!”
   print(phrase)
  
   Exemplo incorreto:
   string_1 = “Hello ”
   string_2 = “World!”
   phrase = string + string2
   # Printing “Hello World!”
   print(phrase)
  
### 2.2.5 Os comentários devem ter no máximo 75 caracteres por linha

### 2.2.6 Os comentários devem ser frases completas

### 2.2.7 Todos os comentários devem ser identificados com o código

## 2.3 Organização de Estruturas de Controle
### 2.3.1 Usar parênteses em estruturas de decisão
   Exemplo correto:
   if (age >= 18):
       print (maior de idade)

   Exemplo incorreto:
   if age >= 18:
       print (maior de idade)

### 2.3.2 Colocar um espaço entre condicionais muito extensas
   Exemplo correto:
   if((name == 'Lira' and age == 10) or (name == 'Jessica' and age == 8)):   

   Exemplo incorreto:
   if((name=='Lira'and age==10)or(name=='Jessica'and age == 8)):

## 2.4 Indentação de Estruturas de Controle
### 2.4.1 Quando uma estrutura é subordinada a outra, deve ser recuada sob essa estrutura
   Exemplo correto:
   if (variable_1 > 100):
       do_this( )
   else:
       do_that( )

   Exemplo incorreto:
   if (variable_1 > 100):
       do_this( )
       else:
       do_that( )

### 2.4.2 Estruturas complicadas
   Exemplo correto:
   if (((var_1 > var_2) && (var_1 > var_3)) ||
       ((var_1 > 1) && (var_2 < 10)) ||
        (var_3 = 0)):
       do_this( )
   else:
       do_that( )

   Exemplo incorreto:
   if (((var_1 > var_2) && (var_1 > var_3)) || ((var_1 > 1) && (var_2 < 10))|| (var_3 = 0)):
       do_this( )
   else:
     do_that( )

## 2.5 Rotinas
### 2.5.1 Usar linhas em branco para separar as partes da rotina
   Exemplo correto:
   def showAccount(accountNumber):

       print(accountNumber)

   def retrieveAccount(accountNumber):

       findNumber()

   Exemplo incorreto:
   def showAccount(accountNumber):
       print(accountNumber)
   def retrieveAccount(accountNumber):
       findNumber()   

### 2.5.2 Usar a indentação padrão nos parâmetros da rotina
   Exemplo correto:
   def setBalance (
       id,
       balance,
       date,
       user
   ):

   Exemplo incorreto:
   def setBalance (id, balance, date, user):

## 2.6 Convenção de Nomeação
### 2.6.1 Evitar caracteres ‘l’ (‘L’ minúsculo), ‘O’ (‘o’ maiúsculo) ou ‘I’ (‘i’ maiúsculo) como nomes de variáveis de único caractere
   Exemplo correto:
   i = True
   L = 47
   o = 3.14

   Exemplo incorreto:
   I = True
   l = 47
   O = 3.14

### 2.6.2 Nomes de classes devem usar a convenção das iniciais de cada palavra em letra maiúscula
   Exemplo correto:
   class PersonNames:

   Exemplo incorreto:
   class person_Names:

### 2.6.3 Nomes de variáveis devem ser escritos em letra minúscula e separados por underline ‘_’
   Exemplo correto:
   person_name = "John"
   person_last_name = "Smith"

   Exemplo incorreto:
   PersonName = "John"
   PersonLastName = "Smith"

### 2.6.4 Os nomes de exceções devem seguir a convenção de nomenclatura de classes com o sufixo “Error”
   Exemplo correto:
   except IOError:

   Exemplo incorreto:
   except i_o_error:

### 2.6.5 Os nomes de funções e métodos devem ser minúsculos, com palavras separadas por underline ‘_’
   Exemplo correto:
   def calc_total(number_1, number_2):

   Exemplo incorreto:
   def calcTotal(number_1, number_2):

### 2.6.6 Constantes devem ser escritas com todas as letras maiúsculas e palavras separadas por underline ‘_’
   Exemplo correto:
   MAX_LENGTH = 25

   Exemplo incorreto:
   max_length = 25

# 3. React
## 3.1 Regras Básicas
- Apenas um componente por arquivo.
- contudo, múltiplos componentes são permitidos quando são dependentes um do outro:

       function Hello(props) {
       return <div>Hello {props.name}</div>;
       }
       class HelloJohn extends React.Component {
       render() {
           return <Hello name="John" />;
           }
       }
       module.exports = HelloJohn;

- Sempre use a sintaxe JSX.
- Não use React.createElement a não ser que você esteja declarando a partir de um arquivo que não seja JSX.
  
## 3.2 Nomenclatura
- Extensão: Use a extensão .jsx para componentes React.
Nome do arquivo: use PascalCase para os arquivos. Ex.: MeuComponente.jsx
Referência de nomenclatura: Use PascalCase para componentes e camelCase para as instâncias.

       // ruim
       import reservationCard from './ReservationCard';

       // ideal
       import ReservationCard from './ReservationCard';

       // ruim
       const ReservationItem = <ReservationCard />;

       // ideal
       const reservationItem = <ReservationCard />; //instância em camel e componente em Pascal
- Nomeando componentes: Use o mesmo nome do componente. Ex.: MeuComponente.jsx tem um nome que referencia MeuComponente. No entanto, para os componentes de raiz de um diretório, use index.jsx como o nome do arquivo e usar o nome de diretório como o nome do componente.

## 3.3 Declaração
- Não use displayName para nomear componentes. Em vez disso, o nome do componente por referência.
      
       // ruim
       export default React.createClass({
       displayName: 'MeuComponente',
       });

       // ideal
       export default class MeuComponente extends React.Component {
       }
## 3.4 Aspas
- Sempre usa aspas duplas (") para atributos, mas aspas simples para todos os outros JS usados no componente.
  
       // ruim
       <Componente bar='bar' />

       // ideal
       <Componente bar="bar" />

       // ruim
       <Componente style={{ left: "20px" }} />

       // ideal
       <Componente style={{ left: '20px' }} />

## 3.5 Espaçamento
Sempre inclua um único espaço no fechamento de suas tags que não recebem filhos.
  
       // ruim
       <Foo/>
       // ruim
       <Foo
       />

       // ideal
       <Foo />
- Não precisa usar espaço dentro nas chaves de parâmetros de um componente.
  
       // ruim
       <Foo bar={ baz } />
       // ideal
       <Foo bar={baz} />

## 3.6 Props
- Sempre use camelCase para nomes de props.
          
       // ruim
       <Componente
       UserName="hello"
       phone_number={12345678}
       />
       // ideal
       <Componente
           userName="hello"
           phoneNumber={12345678}
       />
- uando o valor Booleano for true pode ser omitido.
      
       // ruim
       <Component
       hidden={true}
       />
       // ideal
       <Component
       hidden
       />
- Evite usar index como key de props, opte por um ID.
          
       // ruim
       {todos.map((todo, index) =>
       <Todo
           {...todo}
           key={index}
       />
       )}

       // ideal
       {todos.map(todo => (
       <Todo
           {...todo}
           key={todo.id}
       />
       ))}
## 3.7 Refs
- Sempre use ref callbacks.
      
       // ruim
       <Foo
       ref="myRef"
       />
       // ideal
       <Foo
       ref={(ref) => this.myRef = ref}
                                   />
## 3.8 Parênteses
- Coloque Tags JSX entre parênteses quando eles abrangem mais de uma linha.

       // ruim
       render() {
       return <Componente className="long body" foo="bar">
               <ComponenteFilho />
               </Componente>;
       }

       // ideal
       render() {
       return (
           <Componente className="long body" foo="bar">
           <ComponenteFilho />
           </Componente>
       );
       }

       // ideal, para uma linha.
       render() {
       const body = <div>hello</div>;
       return <Componente>{body}</Componente>;
       }
## 3.9 Tags
- Sempre que a Tag não possuir children use self-close ( ).

       // ruim
       <Foo className="stuff"></Foo>

       // ideal
       <Foo className="stuff" />
- Se o seu componente tiver mais de uma linha de propriedades(props), feche a Tag em uma nova linha.
      
       // ruim
       <Foo
       bar="bar"
       baz="baz" />

       // ideal
       <Foo
       bar="bar"
       baz="baz"
       />
## 3.10 Métodos
- Manipuladores de evento do método render dentro do constructor().

       // ruim
       class extends React.Component {
       onClickDiv() {
           // do stuff
       }

       render() {
           return <div onClick={this.onClickDiv.bind(this)} />
       }
       }

       // ideal
       class extends React.Component {
       constructor(props) {
           super(props);
       this.onClickDiv = this.onClickDiv.bind(this);
       }
       onClickDiv() {
               // do stuff
       }
       render() {
           return <div onClick={this.onClickDiv} />
       }
       }
- Não use underscore prefix para métodos internos de um componente React.
      
       // ruim
       React.createClass({
       _onClickSubmit() {
           // do stuff
       },

       // other stuff
       });

       // ideal
       class extends React.Component {
       onClickSubmit() {
           // do stuff
       }
       // other stuff
       }
- Certifique-se de retornar um valor em seu método render.

       // ruim
       render() {
       (<div />);
       }

       // ideal
       render() {
       return (<div />);
       }

## 3.11 Prioridades
   - Prioridades para class extends                      
           -React.Component:
           -opcional static
           -constructor
           -getChildContext
           -componentWillMount
           -componentDidMount
           -componentWillReceiveProps
           -shouldComponentUpdate
           -componentWillUpdate
           -componentDidUpdate
           -componentWillUnmount
           clickHandlers ou eventHandlers tipo onClickSubmit() ou onChangeDescription()
           -getter methods para o render tipo getSelectReason() ou getFooterContent()
           -Métodos opcionais de render tipo renderNavigation() ou renderProfilePicture()
           -ender

- Prioridades para React.createClass:
      
       -displayName
       -propTypes
       -contextTypes
       -childContextTypes
       -mixins
       -statics
       -defaultProps
       -getDefaultProps
       -getInitialState
       -getChildContext
       -componentWillMount
       -componentDidMount
       -componentWillReceiveProps
       -shouldComponentUpdate
       -componentWillUpdate
       -componentDidUpdate
       -componentWillUnmount
       -clickHandlers ou eventHandlers tipo -onClickSubmit() ou onChangeDescription()
       -getter methods for render tipo getSelectReason() ou getFooterContent()
       -Optional render methods tipo renderNavigation() ou renderProfilePicture()
       -render

## 4. Referências Bibliográficas
> Quero Cultura - Folha de Estilo. Disponível em: https://github.com/fga-eps-mds/2017.2-QueroCultura/wiki/Folha-de-estilo. Acesso em: 03 de Abril de 2019.

> PEP 8 - Style Guide for Python Code. Disponível em: https://www.python.org/dev/peps/pep-0008/. Acesso em: 03 de Abril de 2019

> PEP 8 - Guia de Estilo para Python. Disponível em: https://wiki.python.org.br/GuiaDeEstilo. Acesso em: 03 de Abril de 2019

> Airbnb React/JSX Style Guide
https://github.com/airbnb/javascript/tree/master/react. Acesso em: 04 de Abril de 2019


## 5. Histórico de Revisão
| Data | Versão | Descrição | Autor(es) |
|:--:|:--:|:--:|:--:|
| 05/04/2019 | 0.1 |  Abertura do Documento|Matheus Estanislau, Renan Cristyan|


