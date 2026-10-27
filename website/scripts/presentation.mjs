// Presentation only: authoritative source bytes stay unchanged.
export function presentation({ base }) {
 const prefix=base.replace(/\/$/,'');
 const documents={'LICENSE.txt':'license/','COPYRIGHT.md':'copyright/','SUPPORT.md':'support/','SECURITY.md':'security/','PRIVACY.md':'privacy/','REQUIREMENTS.md':'requirements/','RELEASE_STATUS.md':'release-status/','SCIENTIFIC_SCOPE.md':'scientific-scope/','GETTING_STARTED.md':'learn/getting-started/'};
 return function transform(){return function walk(node){
  if(node.type==='element'){
   if(node.tagName==='h1')node.tagName='h2';
   if(node.tagName==='a'&&typeof node.properties?.href==='string'){
    let link=node.properties.href;
    if(!/^(?:https?:|mailto:|#)/.test(link)){
     const [file,anchor='']=link.split('#'),leaf=file.split('/').at(-1);
     if(documents[leaf])link=`/${documents[leaf]}${anchor?`#${anchor}`:''}`;
     else if(/\.md$/.test(file))link=`https://github.com/ahmedrabie-23/RBE-WaveLab/blob/main/${file.replace(/^\.\.\//,'')}`;
    }
    if(link.startsWith('/')&&!link.startsWith('//')&&prefix&&!link.startsWith(`${prefix}/`))link=prefix+link;
    node.properties.href=link;
   }
  }
  node.children?.forEach(walk);
 };};
}
