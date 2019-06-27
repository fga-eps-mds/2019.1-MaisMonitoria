---
id: doc-cenarios
title: Cenários
sidebar_label: Cenarios
---

# Introdução

A técnica de cenários é usada na modelagem de requisitos de software, os cenários buscam compreender a interação entre usuário e o sistema, por meio de linguagem natural demonstrar os fluxos e interações dos atores

# Cenários

## Registrar 
| | |
| ------| ------|
|**Objetivo**| Criar uma conta no mais monitoria |
|**Contexto**| **Pré condição** <ul><li>Email válido</li><li>Telegram válido</li></ul> **Pós Condição** <ul><li>Conta criada no mais monitoria</li></ul> |
|**Atores**| Usuário, mais monitoria |
|**Episódios**| <ol><li>Usuário entra na aplicação</li><li>Usuário clica no botão de registrar</li><li>Usuário preenche as informações</li><li>Usuário clica em registrar</li></ol> |
|**Restrição**| Email já cadastrado |
|**Exceção**| <ul><li>Se alguma informação não for preenchida corretamente abre uma mensagem de erro</li></ul> |

  

## Fazer login
| | |
| ------| ------|
|**Objetivo**| Entrar na aplicação com email e senha previamente cadastrados. |
|**Contexto**| **Pré condição**<ul><li>Possuir Cadastro</li></ul> **Pós Condição** <ul><li>Estar logado no sistema.</li></ul>|
|**Atores**| <li>Usuário</li> <li>Mais monitoria</li> |
|**Episódios**| <ol><li>Usuário está na tela inicial do mais monitoria</li><li>Usuário insere dados nos campos correspondentes</li><li>Usuário clica no botão de login</li> <li>Usuário entra na aplicação.</li></ol> |
|**Restrição**| <li> Possuir conta no mais monitoria</li> |
|**Exceção**| <li> Dados do usuário inválido</li> |

  

## Adicionar monitoria
| | |
| ------| ------|
|**Objetivo**| Usuário deseja criar uma monitoria. |
|**Contexto**| **Pré condição**<ul><li>Estar logado na aplicação</li></ul> **Pós Condição** <ul><li></li></ul>|
|**Atores**| <li> Usuário |
|**Episódios**| <ol><li>Usuário loga na aplicação</li><li>Na tela de feed usuário clica no botão de adicionar monitoria</li><li>Na tela de adicionar monitoria o usuário preenche as informações da monitoria</li><li>Usuário clica no botão de confirmar monitoria</li> <li>Após mensagem de confirmação usuário é redirecionado para o feed.</li></ol>|
|**Restrição**| Usuários devem preencher todos os campos obrigatórios. |
|**Exceção**| <ul><li></li></ul> |


## Editar perfil
| | |
| ------| ------|
|**Objetivo**| O usuário deve conseguir mudar informações básicas do perfil. |
|**Contexto**| **Pré condição**<ul><li>Estar logado no mais monitoria</li></ul> **Pós Condição** <ul><li>Informações do usuário devem ser alteradas.</li></ul>|
|**Atores**| Usuário, mais monitoria |
|**Episódios**| <ol><li>Usuário loga no mais monitoria</li><li>Clica a aba de perfil</li><li>Clica no botão "editar perfil"</li><li>É redirecionado para a página de edição do perfil</li><li>Preenche os dados que deseja editar</li><li>Clica no botão de confirmar edição</li></ol> |
|**Restrição**| |
|**Exceção**| <ul><li></li></ul> |

## Esqueceu senha
| | |
| ------| ------|
|**Objetivo**| Redefinir senha após ter esquecido a mesma. |
|**Contexto**| **Pré condição**<ul><li>Ter cadastro no mais monitoria</li></ul> **Pós Condição** <ul><li>Nova senha</li></ul>|
|**Atores**| Usuário, mais monitoria |
|**Episódios**| <ol><li>Usuário entra na tela inicial do aplicativo</li><li>Seleciona o botão esqueceu senha</li><li>Insere o email</li><li>Entra no email registrado</li><li></li> </ol> |
|**Restrição**| |
|**Exceção**| <ul><li></li></ul> |

## Curtir Monitoria 
| | |
| ------| ------|
|**Objetivo**| Usuário curtir uma monitoria para que ela seja acessada facilmente caso queira encontrá-la novamente  |
|**Contexto**| **Pré condição** <ul><li>Estar logado no mais monitoria</li><li>Existir monitoria para dar o like</li><li> Não ter dado o like na monitoria</li></ul> **Pós Condição** <ul><li>Monitoria estar salva na lista de like</li></ul> |
|**Atores**| Usuário, mais monitoria |
|**Episódios**| <ol><li>Fazer login no mais monitoria</li><li>Entrar em uma monitoria</li><li>Clicar no botão de like da monitoria</li></ol> |
|**Restrição**| Caso usuário já tenha curtido a monitoria, o like será removido se o botão for clicado novamente |
|**Exceção**| <ul><li></li></ul> |

## Pesquisar Monitoria 
| | |
| ------| ------|
|**Objetivo**| Usuário deve conseguir achar um monitoria a partir do nome, na aba de pesquisa |
|**Contexto**| **Pré condição** <ul><li>Estar logado</li><li>Monitoria a ser procurada deve existir</li></ul> **Pós Condição** <ul><li>Monitoria correspondente na aba de pesquisa</li></ul> |
|**Atores**| Usuário, mais monitoria |
|**Episódios**| <ol><li>Usuário loga no mais monitoria</li><li>Usuário acessa aba de pesquisa</li><li>Na aba de pesquisa usuário insere o nome da monitoria que deseja pesquisar</li><li>Monitorias correspondentes estão disponíveis na aba de pesquisa</li></ol>|
|**Restrição**| |
|**Exceção**| <ul><li>Se não há nenhuma monitoria correspondente não será mostrado nenhuma monitoria.</li></ul> |


## Ver monitorias curtidas/a ministrar
| | |
| ------| ------|
|**Objetivo**| Conseguir visualizar monitorias que você curtiu e monitorias que você tem a ministrar |
|**Contexto**| **Pré condição**<ul><li>Estar logado </li><li> Existir monitorias curtidas/ a ministrar </li></ul> **Pós Condição** <ul><li>Lista de monitorias curtidas/a ministrar</li></ul>|
|**Atores**| Usuário, mais monitoria |
|**Episódios**| <ol><li>Usuário loga no mais monitoria</li><li>Usuário abre a aba de perfil pessoal</li> <li>Usuário seleciona se deseja ver monitorias a ministrar ou curtidas </li></ol>|
|**Restrição**| |
|**Exceção**| <ul><li> Se não há monitorias curtidas ou a ministrar as listas ficam vazias</li></ul> |

## Editar monitoria
| | |
| ------| ------|
|**Objetivo**| Editar informações de uma monitoria caso deseje. |
|**Contexto**| **Pré condição**<ul><li>Estar logado</li><li>Ser dono da monitoria que deseja editar</li></ul> **Pós Condição** <ul><li>Informações editadas na monitoria</li></ul>|
|**Atores**| Usuário, mais monitoria |
|**Episódios**| Fluxo principal<ol><li>Usuário loga no mais monitoria</li><li>Usuário entrar na monitoria</li><li>Clica no botão de editar monitoria</li><li>Usuário digita novas informações das monitorias</li><li>Usuário confirma edição</li></ol> Fluxo alternativo <ol><li>Usuário  loga no mais monitoria</li><li>Usuário entra na aba de perfil pessoal</li> <li>Na aba de monitorias a ministrar usuário entra na monitoria</li><li>Clica no botão de editar monitoria</li><li>Usuário digita novas informações das monitorias</li><li>Usuário confirma edição</li></ol> |
|**Restrição**| Você deve ser dono da monitoria que deseja editar |
|**Exceção**| <ul><li></li></ul> |

## Fazer logout
| | |
| ------| ------|
|**Objetivo**| Usuário sair da conta da aplicação do mais monitoria. |
|**Contexto**| **Pré condição**<ul><li>Estar logado no mais monitoria</li></ul> **Pós Condição** <ul><li>Estar deslogado no mais monitoria</li></ul>|
|**Atores**| Usuário, mais monitoria |
|**Episódios**| <ol><li>Usuário entra na aba de perfil pessoal</li><li>Usuário clica no botão de de mais opções</li><li>Usuário clica em sair</li></ol> |
|**Restrição**|  |
|**Exceção**| <ul><li></li></ul> |

## Iniciar conversa com monitor
| | |
| ------| ------|
|**Objetivo**| Iniciar a comunicação entre o aluno e o monitor |
|**Contexto**| **Pré condição**<ul><li>Estar logado no mais monitoria</li><li>Possuir telegram</li></ul> **Pós Condição** <ul><li>Chat inciado no telegram com o monitor</li></ul>|
|**Atores**| Usuário, mais monitoria e telegram |
|**Episódios**| <ol><li>Usuário loga no mais monitoria</li><li>Usuário clica na monitoria</li><li>Usuário clica no botão do telegram</li><li>Usuário é redirecionado para o chat no telegram com o monitor</li></ol> Fluxo alternativo <ol><li>Usuário loga no mais monitoria </li><li>Usuário entra na aba de perfil pessoal</li><li>Vai nas monitorias curtidas</li><li>Clica no perfil do monitor</li><li>Clica no botão do telegram</li><li>Usuário é redirecionado para o chat no telegram com o monitor</li></ol> |
|**Restrição**| Telgram do monitor e usuário deve ser válido |
|**Exceção**| <ul><li></li></ul> |


