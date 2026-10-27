import {parse} from 'parse5';
export function elements(html){const out=[];const walk=n=>{if(n.tagName)out.push(n);n.childNodes?.forEach(walk);if(n.content)walk(n.content);};walk(parse(html));return out;}
export function attr(node,name){return node.attrs?.find(a=>a.name===name)?.value;}
export function text(node){return node.nodeName==='#text'?node.value:(node.childNodes||[]).map(text).join('');}
export function find(nodes,tag,name,value){return nodes.find(n=>n.tagName===tag&&(!name||attr(n,name)===value));}
