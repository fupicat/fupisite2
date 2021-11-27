---
title: Áudio estilo Flash antigo
description: Como comprimir uma música para parecer que ela veio da internet dos anos 2000.
posted: 1637971790112
icon: /img/icons/flash-lixo.png
tags: "#audio #musica #tutorial"
---
## O problema

Se você cresceu jogando jogos em Flash já deve ter ouvido essa música:

<vid-yt url="https://www.youtube.com/watch?v=8x8SQSgA2Do"></vid-yt>

É a música do clássico *Jogo Mais Difícil do Mundo*, um sucesso das aulas de informática de todo o mundo. Só de ouvir essa música as memórias já devem voltar, e isto é um sentimento compartilhado por muitos outros que viveram essa mesma era dos jogos! Pelo que parece, muitos zoomers têm algum tipo de obsessão bizarra com esse estilo de música acid eletrônica que parece estar sendo tocada pelos auto-falantes de um PC tubão. Nostalgia é um bicho estranho.

Se você nunca ouviu a versão original, descomprimida dessa música, aí está:

<vid-yt url="https://www.youtube.com/watch?v=T1xZBHetmGI"></vid-yt>

É como se 30 anos de cera fossem tirados do seu ouvido.

Isso me levou a pensar: por que isso acontece? Por que os jogos antigos em Flash tinham esse som característico? E como eu posso replicar esse som pela nostalgia?

## O processo

Acho que o motivo de por que isso acontece é bem óbvio: para a época, jogos e animações em Flash eram super pesadas. Todo tipo de otimização era bem-vindo, e arquivos de áudio eram especialmente problemáticos. Para incentivar downloads leves, deixar o programa mais acessível, e não obrigar o usuário a ter que comprimir os arquivos de áudio ele mesmo, o programa fazia isso automaticamente por padrão. Isso também explica por que tantos jogos tinham esse efeito de som comprimido: o padrão do programa era comprimir o áudio pra bitrates *absurdas*. (E, aparentemente, [ainda é??](https://community.adobe.com/t5/animate-discussions/sound-quality/td-p/10213942) Wtf Adobe)

A primeira coisa que eu pensei para replicar esse efeito foi só pesquisar. Para a surpresa de ninguém, não existe muita documentação sobre exatamente quais configurações o Flash usava pra deixar o áudio chiado e gostoso. Portanto, eu tive que baixar uma versão antiga do Flash (Macromedia Flash MX 2004) e tentar não pegar um vírus no caminho.

## A solução

![](/img/blog/comprimir-audio-flash/flashui.png)

Depois de ter uma crise de nostalgia vendo esses templates antigos eu criei um novo documento. Tudo que eu queria é ver qual configuração de áudio o programa usava. Rapidamente eu achei:

![](/img/blog/comprimir-audio-flash/achei.png)

Eu resolvi testar colocando a música do Jogo Mais Difícil, [que eu baixei da Newgrounds](https://www.newgrounds.com/audio/listen/94726), para dentro do projeto e exportando como arquivo SWF. Descobri que eu precisava clicar em "Override sound settings" pra realmente ter efeito. O resultado foi inesperado....... Eu ouvi uma versão comprimida e cagada da música, igual no jogo, do jeito que eu queria! Quem diria?

Talvez isso pareça óbvio mas eu realmente não tava esperando que fosse dar certo de primeira.

Show, temos um arquivo SWF com uma música comprimida dentro. Agora como fazemos pra tirar o arquivo de lá e usá-lo? Pelo que eu entendi, não é possível abrir arquivos SWF usando o Flash MX 2004, ele não faz a descompilação, portanto, é necessário outro programa. Para isso, eu usei o [JPEXS Free Flash Decompiler](https://github.com/jindrapetrik/jpexs-decompiler). Esse programa te deixa ver e extrair todos os conteúdos de um arquivo SWF.

Aí foi fácil, só arrastar o SWF pra dentro do programa e achar o som na pasta *Sounds*. Depois de selecioná-lo, é só clicar em *Export Selection* e salvar onde eu quiser.

![](/img/blog/comprimir-audio-flash/som.png)

## O resumo

Para comprimir um som até a morte, basta:

1. Baixar uma versão antiga do Flash.
2. Abrir o programa e criar um novo documento.
3. Ir em *File > Import > Import to Library...* e importar a sua música. Arrastar ela da *Library* até a sua cena.
4. Ir em *File > Export > Export Movie...* e exportar seu filme como um arquivo SWF.
5. Baixar o [JPEXS Free Flash Decompiler](https://github.com/jindrapetrik/jpexs-decompiler).
6. Abrir o programa e arrastar seu arquivo SWF pra dentro.
7. Abrir a pasta *sounds* e selecionar o arquivo *DefineSound (1)*.
8. Clicar em *Export selection* e escolher uma pasta onde salvar.

No final de todo esse processo, você terá uma música super comprimida estilo Flash antigo.

## A alternativa

Tem também outro jeito pelo qual você pode obter um efeito *parecido*.. mas não igual, que envolve apenas usar um conversor online:

1. Acesse [este conversor online de arquivos de áudio](https://audio.online-convert.com/convert-to-mp3).
2. Arraste sua música para aquela área verde enorme:

![](/img/blog/comprimir-audio-flash/arraste.png)

3. Role um pouco a página e você verá algumas opções. Troque o bitrate para 24 kbps e a frequência para 11025 Hz. Por que 24 kbps e não 16, igual o Flash usa? Não sei explicar, esse conversor deve usar um método diferente do Flash pra comprimir, só sei que, se você escolher 16 kbps, a qualidade fica ruim demais. Confia em mim e coloca 24 kbps:

![](/img/blog/comprimir-audio-flash/mude.png)

4. Clique no botão *Start!*:

![](/img/blog/comprimir-audio-flash/start.png)

Quando a conversão terminar, sua música vai começar a baixar imediatamente.