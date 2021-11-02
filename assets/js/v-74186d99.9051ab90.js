"use strict";(self.webpackChunkgmembertest=self.webpackChunkgmembertest||[]).push([[183],{6407:function(a,n,s){s.r(n),s.d(n,{data:function(){return t}});const t={key:"v-74186d99",path:"/compsPage/navigation/pagination.html",title:"Pagination 分页",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"基础用法",slug:"基础用法",children:[]},{level:2,title:"带有边框的分页",slug:"带有边框的分页",children:[]},{level:2,title:"带有背景色的分页",slug:"带有背景色的分页",children:[]},{level:2,title:"功能组合分页",slug:"功能组合分页",children:[]}],filePathRelative:"compsPage/navigation/pagination.md",git:{updatedTime:1634117277e3,contributors:[{name:"cloudsTwo",email:"18723432314@163.com",commits:1}]}}},3194:function(a,n,s){s.r(n),s.d(n,{default:function(){return x}});var t=s(6252);const p=(0,t._)("h1",{id:"pagination-分页",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#pagination-分页","aria-hidden":"true"},"#"),(0,t.Uk)(" Pagination 分页")],-1),e=(0,t._)("p",null,"当数据量过多时，采用分页可以进行快速的数据切换。",-1),l=(0,t._)("h2",{id:"基础用法",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#基础用法","aria-hidden":"true"},"#"),(0,t.Uk)(" 基础用法")],-1),o=(0,t._)("p",null,"基本分页，页面过多时会自动折叠",-1),u={style:{border:"1px solid rgb(238, 238, 238)",padding:"20px","padding-bottom":"20px","margin-top":"20px"}},c=(0,t.uE)('<details class="custom-container details"><summary>显示代码</summary><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>gm-pagination</span> <span class="token attr-name">:total</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>50<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>gm-pagination</span> <span class="token attr-name">:total</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1000<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></details><br><h2 id="带有边框的分页" tabindex="-1"><a class="header-anchor" href="#带有边框的分页" aria-hidden="true">#</a> 带有边框的分页</h2>',3),i={style:{border:"1px solid rgb(238, 238, 238)",padding:"20px","padding-bottom":"20px","margin-top":"20px"}},r=(0,t.uE)('<details class="custom-container details"><summary>显示代码</summary><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>gm-pagination</span> <span class="token attr-name">:total</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1000<span class="token punctuation">&quot;</span></span> <span class="token attr-name">border</span> <span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></details><br><h2 id="带有背景色的分页" tabindex="-1"><a class="header-anchor" href="#带有背景色的分页" aria-hidden="true">#</a> 带有背景色的分页</h2>',3),k={style:{border:"1px solid rgb(238, 238, 238)",padding:"20px","padding-bottom":"20px","margin-top":"20px"}},g=(0,t.uE)('<details class="custom-container details"><summary>显示代码</summary><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>gm-pagination</span> <span class="token attr-name">:total</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1000<span class="token punctuation">&quot;</span></span> <span class="token attr-name">background</span> <span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></details><br><h2 id="功能组合分页" tabindex="-1"><a class="header-anchor" href="#功能组合分页" aria-hidden="true">#</a> 功能组合分页</h2>',3),m={style:{border:"1px solid rgb(238, 238, 238)",padding:"20px","padding-bottom":"20px","margin-top":"20px"}},d=(0,t._)("span",{style:{display:"inline-block",padding:"10px"}},"显示总页数",-1),b=(0,t._)("span",{style:{display:"inline-block",padding:"10px"}},"可以切换每页显示条数",-1),v=(0,t._)("span",{style:{display:"inline-block",padding:"10px"}},"可以直接跳转到某一页",-1),h=(0,t._)("span",{style:{display:"inline-block",padding:"10px"}},"完整功能组合",-1),q=(0,t.uE)('<details class="custom-container details"><summary>显示代码</summary><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>显示总页数<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>gm-pagination</span> <span class="token attr-name">layout</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>total, prev, pager, next<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:total</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>可以切换每页显示条数<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>gm-pagination</span> <span class="token attr-name">:total</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1000<span class="token punctuation">&quot;</span></span> \n    <span class="token attr-name">:page-sizes</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[100, 200, 300, 400]<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">:page-size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span> \n    <span class="token attr-name">layout</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sizes, prev, pager, next<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>可以直接跳转到某一页<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>gm-pagination</span> <span class="token attr-name">:page-size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">layout</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>prev, pager, next, jumper<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">:total</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1000<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>完整功能组合<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>gm-pagination</span> <span class="token attr-name">:page-sizes</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[100, 200, 300, 400]<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">:page-size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">layout</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>total, sizes, prev, pager, next, jumper<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">:total</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1000<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">@size-change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleSizeChange<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div></details>',1);var x={render:function(a,n){const s=(0,t.up)("PaginationComp");return(0,t.wg)(),(0,t.iD)(t.HY,null,[p,e,l,o,(0,t._)("div",u,[(0,t.Wm)(s,{total:50}),(0,t.Wm)(s,{total:1e3})]),c,(0,t._)("div",i,[(0,t.Wm)(s,{total:1e3,border:""})]),r,(0,t._)("div",k,[(0,t.Wm)(s,{total:1e3,background:""})]),g,(0,t._)("div",m,[d,(0,t.Wm)(s,{layout:"total, prev, pager, next",total:100}),b,(0,t.Wm)(s,{total:1e3,"page-sizes":[100,200,300,400],"page-size":100,layout:"sizes, prev, pager, next"}),v,(0,t.Wm)(s,{"page-size":100,layout:"prev, pager, next, jumper",total:1e3}),h,(0,t.Wm)(s,{"page-sizes":[100,200,300,400],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:1e3})]),q],64)}}}}]);