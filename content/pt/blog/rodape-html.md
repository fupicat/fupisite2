---
title: Como fazer um rodapé HTML
description: Como fazer um rodapé que gruda no fim da página do jeito certo!
posted: 1637437784270
icon: /img/icons/site.png
tags: "#web #dev #tutorial #html #css"
---
## O problema

Se você já tentou fazer um site usando HTML deve ter encontrado esse problema: fez um cabeçalho e rodapé, tudo bonitinho, e aí ISSO acontece:

![](/img/blog/rodape-html/RodapeRuim.png)

Seu site não alcança o fim da janela e o rodapé fica flutuando.

Vou usar esse exemplo básico de site para o tutorial: https://codepen.io/fupicat/pen/QWMPjJr - **Acesse o link para acompanhar!!**

## O processo

A primeira coisa que eu pensei para consertar foi só colocar um tamanho mínimo no elemento ```section``` da página. Vou usar a medida de tamanho ```vh``` para dizer quanto por cento da altura da tela eu quero que a página tenha:

```css{3}[main.css]
section {
  margin: 0rem 6rem;
  min-height: 73.5vh;
}
```

(para achar o valor exato de 73,5% eu só fui testando valores maiores até conseguir fazer a barra de rolagem sumir)

Isso funcionou, mas tem um problema: só funciona com o meu tamanho de tela. Se eu der zoom, a barra de rolagem aparece novamente. Alguém com uma tela maior ainda veria o meu rodapé flutuando um pouquinho, o que é completamente inaceitável.

![](/img/blog/rodape-html/RodapeMedio.png)

## A solução

Portanto, um jeito mais elegante e prático de resolver esse problema é usando uma flexbox - uma caixa redimensionável que distribui os elementos dentro dela automaticamente de acordo com o seu próprio tamanho. Eu vou transformar o corpo inteiro do documento em uma flexbox e mudar a sua altura para ```100vh``` para que ele ocupe 100% da altura da tela:

```css{2-4}[main.css]
body {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
```

Agora é só eu ir nos estilos do elemento ```section``` e mudar a sua altura para ```100%```. Isso fará com que a página do site se expanda e tome conta do maior espaço possível na flexbox, respeitando o espaço do cabeçalho e do rodapé:

```css{3}[main.css]
section {
  margin: 0rem 6rem;
  height: 100%;
}
```

E está pronto! Agora você pode dar zoom o quanto quiser, adicionar quanto conteúdo quiser na página, e o rodapé vai continuar grudado no fundo da janela.

![](/img/blog/rodape-html/RodapeBom.png)

## O resumo

O CSS final que você precisa é assim (troque ```section``` por qualquer que seja o elemento que você quer expandir):

```css{}[main.css]
body {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

section {
  margin: 0rem 6rem;
  height: 100%;
}
```

Veja o projeto completo em ação aqui: https://codepen.io/fupicat/pen/rNzbNxr