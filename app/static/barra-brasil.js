!function(){var a,e,r,t,i,l,s,o='<div id="wrapper-barra-brasil"><div class="brasil-flag"><a href="http://brasil.gov.br" class="link-barra">Brasil</a></div><span class="acesso-info"><a href="http://brasil.gov.br/barra#acesso-informacao" class="link-barra">Acesso &agrave; informa&ccedil;&atilde;o</a></span><span class="copa-counter"><a href="http://www.copa2014.gov.br" class="link-barra"><span id="counter-barra-brasil"></span></a></span><ul class="list"><li class="list-item first"><a href="http://brasil.gov.br/barra#participe" class="link-barra">Participe</a></li><li class="list-item"><a href="http://www.servicos.gov.br/" class="link-barra">Servi&ccedil;os</a></li><li class="list-item"><a href="http://www.planalto.gov.br/legislacao" class="link-barra">Legisla&ccedil;&atilde;o</a></li><li class="list-item last last-item"><a href="http://brasil.gov.br/barra#orgaos-atuacao-canais" class="link-barra">Canais</a></li></ul></div>';e=document.getElementById("barra-brasil"),e&&e.parentNode.removeChild(e),r=document.getElementsByTagName("head")[0],a=document.getElementsByTagName("body")[0],l=document.createElement("link"),t=document.createAttribute("href"),s=document.createElement("div"),i=document.createAttribute("id"),i.nodeValue="barra-brasil",s.setAttributeNode(i),s.innerHTML=o,a.insertBefore(s,a.childNodes[0]),window._barrabrasil={insere_css:function(a){var e,t,i;return t=document.createElement("style"),i=document.createAttribute("type"),i.nodeValue="text/css",e=document.createAttribute("media"),e.nodeValue="all",t.setAttributeNode(i),t.setAttributeNode(e),t.styleSheet?t.styleSheet.cssText=a:t.appendChild(document.createTextNode(a)),r.appendChild(t)}},window._barrabrasil.copa_counter=function(){var a,e,r,t,i,l,s;for(l=void 0,s=void 0,e=void 0,t=void 0,r=void 0,a=void 0,l=document.getElementById("counter-barra-brasil"),s=new Date,e=new Date(2014,5,12,0,0,0),t="",r=String(Math.floor(Math.abs((s.getTime()-e.getTime())/864e5))+1),a=r.split(""),i=0;i<a.length;)t+="<span>"+a[i]+"</span>",i++;s.getTime()<e.getTime()&&(parseInt(r)>1?l.innerHTML="Faltam "+t+" dias para a Copa":1===parseInt(r)&&(l.innerHTML="Amanhã começa a Copa!"))};var r,n,d,p;r=document.getElementsByTagName("head")[0],n=document.createElement("script"),p=document.createAttribute("type"),p.nodeValue="text/javascript",d=document.createAttribute("src"),d.nodeValue="//coletajavascript.serpro.gov.br/estatistica.js",n.setAttributeNode(p),n.setAttributeNode(d),r.appendChild(n)}(),window._barrabrasil.insere_css('#barra-brasil{height:32px;background:#FCCA00;font-weight:bold;font-size:13px;line-height:32px;font-family:"Open Sans",Arial,Helvetica,sans-serif;border-bottom:1px solid #d3a725}#barra-brasil div,#barra-brasil a,#barra-brasil ul,#barra-brasil li{margin:0;padding:0;border:0;font-size:100%;font-family:inherit;vertical-align:baseline}#barra-brasil ul{list-style:none}#barra-brasil a{text-decoration:none}@font-face{font-family:"Open Sans";font-style:normal;font-weight:700;src:local("Open Sans Bold"),local("OpenSans-Bold"),url("/static/opensans-bold.woff") format("woff")}div#wrapper-barra-brasil{position:relative;overflow:hidden;margin:0 auto;width:100%;max-width:960px}#barra-brasil .brasil-flag{float:left;padding:7px 0 6px;width:116px;height:19px;border-right:1px solid #d3a725}#barra-brasil .brasil-flag .link-barra{display:block;padding-left:42px;width:43px;background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAATCAIAAAABJ4pRAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABINJREFUeNqUVFtsFFUYPrfdmdnLbLe021baQqWUtdJKL5QiASPiNVqC0TYqUWLShJQmRH3RqPHFRKJvQqIPQNSAAcMDptGEiKjYpLZIkSqGXqjdFlppd3vb7c7Ozpxz/M+2wZD44snszOzJnP//vv///g9XnNiXtNISI1gYq4eUEu4CC7SyiLpJgtSOIJKg/1ySB3x+NmsvJLNpgVUwlAu08iIkzi2pUhHIAa/q1L9p7l6YWmmHEOSBWJD6LixwJ7DDAKR06c6imQOVYxoRyEV4BR3JBYfvqNqBtILrSGNEKgoCsVxWDMmxgAOADeDjQsP+oHbo1egk7B+Mju/vq7kwVYhohsAxoiogiIM5hBaSUIBFfS21WRcOSwUHOwgTqoJR+O0pv31u56XmUKrvt4o/RyNrjVRHw40iLdU9Hck4DPBQxOQKK/XQqQa7nGNb8UICSUoE4y4rCyweqh164b7Jk12N737x2NjtfMAeCDit268e7jj7yOqfX++p+ebvQk5coAB8BQIMroqaf7xt3p4TUATgxj0Y0wOVN96uHomE3I+Ob37zSJvUHURshjySIZ4JPLhp+IcPj3h1eSZ2zxu/R8cXDeThuSLJkGZSY/fGjGOrenG9xlz8vPnK/g0xEwprl52PH9ryUGRLk1lfXWqGCcE0lUqOjxeHVy01141V+5Mvlk+lOLmcAOwC6OpMo8FnqlOCh2j2taqRE1sHKk2LuFJq6NveumNd9f0Dt2IjC1aGVKwzdz1cUryaxSasW9Oo/dFfoaEB6jxdOl2Xt3BtwYw7Xh/VmQNNcNHj5fH3N40CQgnNAAUQMjgh+y/dpIblN9j14fHuHqEFvPUP5L3Svp4mHNtGmgbaVF1oWZNIi8GXextALUpEhLqnJ0o3f9fcEw9iD3RFCaUiMmvmG/lhI50VBQX6ujX5ju3+dHHm1Mmb9dGsxyRKSwylHNLRt2HvL42O4C5IhsLsgEII74+Hd1zY+s5AdMklguMnmkaLwn9RGgr7dSfLk5ZreGhJUdD0+oz0ZxSOMNQ1VdB4fscnw5VCiOUBpb7d91vcklBJJpDwXpwOn50qKdXs2tLZpoqJU99XxVPBbMayXRnOK/Dp5p5tZzpbu0cT+sErG9/6o2rW9iLKQbOget2jQbgay3UIJrlhlJSK6Yz3dKx4dD74Ut3Ivu2X5xe8CSvopdm1kdh7e7/sfO7Ho4PlrT0NvTMhTISaaRhUoImITr244Njz8WwSVKOMhBI1hdIBMQuXlARShxuvPbt+3k0gx9GMsDVp0c7emq8nSiSFjzkVlCuKfHl+Q0aQai21Gb4E7SA59wDWGLLBg+Kk6/lqrKw/4dtWOLfKn/74+r2t3fVX5/IwcyExIBAKFFWOhskyWVx4tG3GmUfKCFRbOHYBNjiC6hBkBTrQRl+mSLeHZkOYOXeMRxIFCb6SME5gYJiGvH7MPn0q5wBCgqkgF4xBEVfdhksTyMmNpFT/chJQJQbkgitE8o73gRe4HsRYe/RJy86IFYtU1pVzSqxC/J8F5fMz/z8CDAAkCSSg0qSX5AAAAABJRU5ErkJggg==") 8px center no-repeat;text-transform:uppercase;line-height:19px}#barra-brasil .acesso-info{float:left;padding:0 13px;border-right:1px solid #d3a725}#barra-brasil .copa-counter{position:absolute;top:0;left:343px;padding:0;color:#138542;width:210px;text-align:center}#barra-brasil .copa-counter>span{margin:0 2px 0 1px}#barra-brasil .copa-counter span span{background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAwMi8yNy8xNHAjaMgAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzQGstOgAAAAXElEQVQ4je3UsRlAQBAF4d9+14cS6EKqBE3JlaAVJQg0oAIBCjgCgpt85m20VYxdiwmNPBYMCTPqTNk1OMdD+aaOFzIogRKAFNv+7QUl8JfA+sJfA73zQeayoD8A1xcLB3KMhwsAAAAASUVORK5CYII=") no-repeat;color:#FCCA00;display:inline-block;width:16px;height:22px;margin-left:1px;text-align:center;line-height:22px}#barra-brasil .portal-copa{float:left;padding:0 13px;color:#138542;border-right:1px solid #d3a725}#barra-brasil .list{position:absolute;top:0;right:0;border-left:1px solid #d3a725}#barra-brasil .list-item{display:inline-block;padding:0 15px 0 14px;height:32px;float:left;border-right:1px solid #d3a725}#barra-brasil .link-barra{color:#138542}@media screen and (max-width: 870px){#barra-brasil .list{top:-100px}#barra-brasil .copa-counter,#barra-brasil .portal-copa{display:none}}@media screen and (min-width: 960px){#wrapper-barra-brasil{width:960px}}'),window._barrabrasil.copa_counter();