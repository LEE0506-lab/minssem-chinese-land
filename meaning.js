/* Shared meaning presentation. Formatting never shortens, rewrites or hides source text. */
(() => {
 'use strict';
 function set(node,value){
  if(!node)return;
  const text=String(value??'');node.replaceChildren();
  let end=-1,depth=0;
  if(text.startsWith('('))for(let i=0;i<text.length;i++){
   if(text[i]==='(')depth++;
   if(text[i]===')'&&--depth===0){end=i+1;break;}
  }
  if(end>0&&text.slice(end).trim()){
   const context=document.createElement('span');context.className='meaning-context';context.textContent=text.slice(0,end);
   const core=document.createElement('span');core.className='meaning-core';core.textContent=text.slice(end);
   node.append(context,core);
  }else node.textContent=text;
  node.classList.add('meaning-copy');
  node.classList.toggle('meaning-long',text.length>60);
  node.classList.toggle('meaning-very-long',text.length>100);
 }
 window.MinssemMeaning=Object.freeze({set});
})();
