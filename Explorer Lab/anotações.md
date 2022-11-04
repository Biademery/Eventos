# Expressões Regulares

Regex com JavaScript

---

## Expressões Regulares

Também conhecida como `Regular Expression` ou `Regex` é uma tecnologia usada para buscar padrões dentro de textos e funciona em diversas linguagens

<aside>
💡 Exemplo: Busque por todos os caracteres numéricos dentro de algum texto

</aside>

---

## Como pensar?

Existe uma maneira correta de pensar ao utilizar essa tecnologia para a busca de padrões.

◦ Leitura da esquerda para a direita

◦ Ler um caractere de cada vez, um após o outro

◦ Conhecer os caracteres reservados da tecnologia

---

## Criando regex no JavaScript

```jsx
const re = /foo/
const re = new RegExp(/foo/)
```

---

## Funções usadas em Strings

Existem diversas maneiras de usar expressões regulares em uma string no JavaScript. Abaixo, vamos verificar 3

```jsx
// agrupa os padrões em um array
const matches = "aBC".match(/[A-Z]/g)
// Output: Array [B, C]
// pesquisa se existe ou não o padrão
const index = "aBC".search(/[A-Z]/)
// Output: 1
// substitui os padrões por novo valor
const next = "aBC".replace(/a/, "A")
// Output: ABC
```

---

## Cheatsheet

**Básico**

◦ **`/ expression / flags`**

Exemplo: **`/[A-Z]+/g`**

◦ `\` usar caracteres especiais

Exemplo: **`/ Oi\?\*\\/`**

◦ **`()`** agrupador

◦ **`|`** OU lógico

◦ **`Fala Dev`** pesquisa exata

◦ `^Fala` o texto inicia com

◦ **`Dev$`** o texto termina com

**Colchetes**

◦ **`[xyz]`** qualquer um x, y, z

◦ **`[J-Z]`** qualquer caracter entre J e Z.

◦ **`[^xyz]`** nenhum x, y, z

**Classes de caracteres**

◦ **`\w`** palavra **`\d`** dígito **`\s`** espaços em branco (tabs, quebras de linha)

◦ **`\W`** NÃO palavra **`\D`** NÃO dígito **`\S`** NÃO espaços em branco

◦ **`\t`** tabs, **`\n`** quebra de linha

◦ **`.`** qualquer caracter (exceto nova linha)

◦ **`mayk|diego`** mayk ou diego

◦ **`?`** zero ou uma ocorrência

◦ **`*`** zero ou múltiplas ocorrências

◦ **`+`** uma ou múltiplas ocorrências

◦ **`{n}`** n ocorrências

◦ **`{min,max}`** mínima/máxima ocorrências

---

## Testando Expressões

Podemos testar de diversas formas, desde diretamente no seu código, ou:

- Direto no Editor (VSCode)
  Search and Replace
- Online
  [RegExr: Learn, Build, & Test RegEx](https://regexr.com/)