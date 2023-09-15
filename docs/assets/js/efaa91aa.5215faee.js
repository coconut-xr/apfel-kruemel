(self.webpackChunkapfel_kruemel_docs=self.webpackChunkapfel_kruemel_docs||[]).push([[223],{2253:(t,e,a)=>{t.exports={src:{srcSet:a.p+"assets/ideal-img/lists.fa79074.640.png 640w,"+a.p+"assets/ideal-img/lists.44b1142.1024.png 1024w",images:[{path:a.p+"assets/ideal-img/lists.fa79074.640.png",width:640,height:389},{path:a.p+"assets/ideal-img/lists.44b1142.1024.png",width:1024,height:622}],src:a.p+"assets/ideal-img/lists.fa79074.640.png",toString:function(){return a.p+"assets/ideal-img/lists.fa79074.640.png"},placeholder:void 0,width:640,height:389},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA10lEQVQImR3LT0+CYACA8fez2UleONmqS2utuaTswkTkn1aKJC9girnSNGVjrQ59xaeNw297Lo/4+6koDzuOXzumk2dec8VbsUAlL+SpQiUzfr8rxPZ9zTAMeHocMXAcQt/FG9iYZoeH7j2mabJeFYiqPDDPM4rlknmesyoWtSxVpCohS1PK4x6x337guQ5hENC3e8TRmFk8rdvp2/iez3gSIuIoQkpJq3WK1DU0KWk2JY3GCYZhoOt6PYnPzQbLsrB7NtdXl+iaxsXZObftG7p3ndoocPkHhNCSbY36FygAAAAASUVORK5CYII="}},1151:(t,e,a)=>{"use strict";a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>p,default:()=>g,frontMatter:()=>s,metadata:()=>m,toc:()=>o});var l=a(7462),n=(a(7294),a(4137)),i=a(5944),r=a(9705);const s={},p="List",m={unversionedId:"lists",id:"lists",title:"List",description:"A component enabling a visual arrangement of items presented in a structured format.",source:"@site/docs/lists.md",sourceDirName:".",slug:"/lists",permalink:"/apfel-kruemel/docs/lists",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Input",permalink:"/apfel-kruemel/docs/inputFields"},next:{title:"Indicators",permalink:"/apfel-kruemel/docs/progressIndicators"}},d={},o=[{value:"Code Example",id:"code-example",level:3},{value:"Sandbox",id:"sandbox",level:3},{value:"<em>Params</em>",id:"params",level:4},{value:"<em>List Item</em>",id:"list-item",level:5},{value:"<em>List</em>",id:"list-1",level:5}],u={toc:o},k="wrapper";function g(t){let{components:e,...s}=t;return(0,n.kt)(k,(0,l.Z)({},u,s,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"list"},"List"),(0,n.kt)("p",null,"A component enabling a visual arrangement of items presented in a structured format."),(0,n.kt)("div",{style:{display:"flex"}},(0,n.kt)(i.Z,{img:a(2253),mdxType:"Image"}),(0,n.kt)(i.Z,{img:a(7760),style:{width:"37.8%"},mdxType:"Image"})),(0,n.kt)("h3",{id:"code-example"},"Code Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Glass, IconButton, List, ListItem } from "@coconut-xr/apfel-kruemel";\nimport { Text } from "@coconut-xr/koestlich";\n\nexport default function List() {\n  return (\n    <Glass borderRadius={32} padding={16}>\n        <List type="plain" width={400}>\n            <ListItem subtitle={<Text>Subtitle</Text>}>\n                <Text>Title</Text>\n            </ListItem>\n            <ListItem>\n                <Text>Title</Text>\n            </ListItem>\n            <ListItem\n                subtitle={<Text>Subtitle</Text>}\n                selected\n            >\n                <Text>Title</Text>\n            </ListItem>\n        </List>\n    </Glass>\n  );\n}\n')),(0,n.kt)("h3",{id:"sandbox"},"Sandbox"),(0,n.kt)(r.w,{defaultPath:"lists",mdxType:"CodesandboxEmbed"}),(0,n.kt)("h4",{id:"params"},(0,n.kt)("em",{parentName:"h4"},"Params")),(0,n.kt)("h5",{id:"list-item"},(0,n.kt)("em",{parentName:"h5"},"List Item")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"subtitle"),(0,n.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,n.kt)("td",{parentName:"tr",align:null},'optional / default: "rect"'),(0,n.kt)("td",{parentName:"tr",align:null},"Customizable subtitle of the item")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"selected"),(0,n.kt)("td",{parentName:"tr",align:null},"boolean"),(0,n.kt)("td",{parentName:"tr",align:null},"optional"),(0,n.kt)("td",{parentName:"tr",align:null},"If true, apply selected styling")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"leadingAccessory"),(0,n.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,n.kt)("td",{parentName:"tr",align:null},"optional"),(0,n.kt)("td",{parentName:"tr",align:null},"Customizable accessory displayed at the front of the list item")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"trailingAccessory"),(0,n.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,n.kt)("td",{parentName:"tr",align:null},"optional"),(0,n.kt)("td",{parentName:"tr",align:null},"Customizable accessory displayed at the end of the list item")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"isFirst"),(0,n.kt)("td",{parentName:"tr",align:null},"boolean"),(0,n.kt)("td",{parentName:"tr",align:null},"optional"),(0,n.kt)("td",{parentName:"tr",align:null},"If true, apply styling for first item in the list.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"isLast"),(0,n.kt)("td",{parentName:"tr",align:null},"boolean"),(0,n.kt)("td",{parentName:"tr",align:null},"optional"),(0,n.kt)("td",{parentName:"tr",align:null},"If true, apply styling for last item in the list.")))),(0,n.kt)("h5",{id:"list-1"},(0,n.kt)("em",{parentName:"h5"},"List")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"type"),(0,n.kt)("td",{parentName:"tr",align:null},"Type"),(0,n.kt)("td",{parentName:"tr",align:null},'optional / default: "plain"'),(0,n.kt)("td",{parentName:"tr",align:null},'Style of the list. Options are "plain" / "inset"')))))}g.isMDXComponent=!0},7760:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>l});const l=a.p+"assets/images/xr1-35b11ca0607e09778a850c398a41675e.gif"}}]);