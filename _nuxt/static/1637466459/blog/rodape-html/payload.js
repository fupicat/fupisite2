__NUXT_JSONP__("/blog/rodape-html", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj){return {data:[{post:{slug:"rodape-html",description:"Como fazer um rodapé que gruda no fim da página do jeito certo!",title:"Como fazer um rodapé HTML",posted:1637437784270,icon:"\u002Fimg\u002FSiteIcon.png",tags:"#web #dev #tutorial #html #css",toc:[{id:Q,depth:v,text:R},{id:S,depth:v,text:T},{id:U,depth:v,text:V},{id:W,depth:v,text:X}],body:{type:"root",children:[{type:b,tag:w,props:{id:Q},children:[{type:b,tag:p,props:{href:"#o-problema",ariaHidden:x,tabIndex:y},children:[{type:b,tag:c,props:{className:[z,A]},children:[]}]},{type:a,value:R}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"Se você já tentou fazer um site usando HTML deve ter encontrado esse problema: fez um cabeçalho e rodapé, tudo bonitinho, e aí ISSO acontece:"}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:b,tag:L,props:{alt:M,src:"\u002Fimg\u002Fblog\u002Frodape-html\u002FRodapeRuim.png"},children:[]}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"Seu site não alcança o fim da janela e o rodapé fica flutuando."}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"Vou usar esse exemplo básico de site para o tutorial: "},{type:b,tag:p,props:{href:Y,rel:[Z,_,$],target:aa},children:[{type:a,value:Y}]},{type:a,value:" - "},{type:b,tag:"strong",props:{},children:[{type:a,value:"Acesse o link para acompanhar!!"}]}]},{type:a,value:f},{type:b,tag:w,props:{id:S},children:[{type:b,tag:p,props:{href:"#o-processo",ariaHidden:x,tabIndex:y},children:[{type:b,tag:c,props:{className:[z,A]},children:[]}]},{type:a,value:T}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"A primeira coisa que eu pensei para consertar foi só colocar um tamanho mínimo no elemento "},{type:b,tag:o,props:{},children:[{type:a,value:q}]},{type:a,value:" da página. Vou usar a medida de tamanho "},{type:b,tag:o,props:{},children:[{type:a,value:B}]},{type:a,value:" para dizer quanto por cento da altura da tela eu quero que a página tenha:"}]},{type:a,value:f},{type:b,tag:C,props:{className:[D]},children:[{type:b,tag:c,props:{className:[E]},children:[{type:a,value:F}]},{type:b,tag:G,props:{className:[H,I],dataLine:ab},children:[{type:b,tag:o,props:{},children:[{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:q}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:r}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"min-height"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"73.5"}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"(para achar o valor exato de 73,5% eu só fui testando valores maiores até conseguir fazer a barra de rolagem sumir)"}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"Isso funcionou, mas tem um problema: só funciona com o meu tamanho de tela. Se eu der zoom, a barra de rolagem aparece novamente. Alguém com uma tela maior ainda veria o meu rodapé flutuando um pouquinho, o que é completamente inaceitável."}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:b,tag:L,props:{alt:M,src:"\u002Fimg\u002Fblog\u002Frodape-html\u002FRodapeMedio.png"},children:[]}]},{type:a,value:f},{type:b,tag:w,props:{id:U},children:[{type:b,tag:p,props:{href:"#a-solu%C3%A7%C3%A3o",ariaHidden:x,tabIndex:y},children:[{type:b,tag:c,props:{className:[z,A]},children:[]}]},{type:a,value:V}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"Portanto, um jeito mais elegante e prático de resolver esse problema é usando uma flexbox - uma caixa redimensionável que distribui os elementos dentro dela automaticamente de acordo com o seu tamanho. Eu vou transformar o corpo inteiro do documento em uma flexbox e mudar o seu tamanho para "},{type:b,tag:o,props:{},children:[{type:a,value:"100vh"}]},{type:a,value:" para que ele ocupe 100% da altura da tela:"}]},{type:a,value:f},{type:b,tag:C,props:{className:[D]},children:[{type:b,tag:c,props:{className:[E]},children:[{type:a,value:F}]},{type:b,tag:G,props:{className:[H,I],dataLine:"2-4"},children:[{type:b,tag:o,props:{},children:[{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:ac}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:ad}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:ae},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:af}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:ag},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"Agora é só eu ir nos estilos do elemento "},{type:b,tag:o,props:{},children:[{type:a,value:q}]},{type:a,value:" e mudar o seu tamanho para "},{type:b,tag:o,props:{},children:[{type:a,value:"100%"}]},{type:a,value:". Isso fará com que a página do site se expanda e tome conta do maior espaço possível na flexbox, respeitando o espaço do cabeçalho e do rodapé:"}]},{type:a,value:f},{type:b,tag:C,props:{className:[D]},children:[{type:b,tag:c,props:{className:[E]},children:[{type:a,value:F}]},{type:b,tag:G,props:{className:[H,I],dataLine:ab},children:[{type:b,tag:o,props:{},children:[{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:q}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:r}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:ah}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"E está pronto! Agora você pode dar zoom o quanto quiser, adicionar quanto conteúdo quiser na página, e o rodapé vai continuar grudado no fundo da janela."}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:b,tag:L,props:{alt:M,src:"\u002Fimg\u002Fblog\u002Frodape-html\u002FRodapeBom.png"},children:[]}]},{type:a,value:f},{type:b,tag:w,props:{id:W},children:[{type:b,tag:p,props:{href:"#o-resumo",ariaHidden:x,tabIndex:y},children:[{type:b,tag:c,props:{className:[z,A]},children:[]}]},{type:a,value:X}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"O CSS final que você precisa é assim (troque "},{type:b,tag:o,props:{},children:[{type:a,value:q}]},{type:a,value:" por qualquer que seja o elemento que você quer expandir):"}]},{type:a,value:f},{type:b,tag:C,props:{className:[D]},children:[{type:b,tag:c,props:{className:[E]},children:[{type:a,value:F}]},{type:b,tag:G,props:{className:[H,I]},children:[{type:b,tag:o,props:{},children:[{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:ac}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:ad}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:ae},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:af}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:ag},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:"\n\n"},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:q}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:r}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:ah}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"Veja o projeto completo em ação aqui: "},{type:b,tag:p,props:{href:ai,rel:[Z,_,$],target:aa},children:[{type:a,value:ai}]}]}]},dir:"\u002Fpt\u002Fblog",path:"\u002Fpt\u002Fblog\u002Frodape-html",extension:".md",createdAt:aj,updatedAt:aj}}],fetch:{},mutations:[]}}("text","element","span","token","punctuation","\n"," ","p","\n  ","property",":",";","number","unit","code","a","section","rem","selector","{","}",2,"h2","true",-1,"icon","icon-link","vh","div","nuxt-content-highlight","filename","main.css","pre","language-css","line-numbers","height","100","img","","margin","0","6","o-problema","O problema","o-processo","O processo","a-solução","A solução","o-resumo","O resumo","https:\u002F\u002Fcodepen.io\u002Ffupicat\u002Fpen\u002FQWMPjJr","nofollow","noopener","noreferrer","_blank","3","body","display"," flex","flex-direction"," column","%","https:\u002F\u002Fcodepen.io\u002Ffupicat\u002Fpen\u002FrNzbNxr","2021-11-21T03:46:32.769Z")));