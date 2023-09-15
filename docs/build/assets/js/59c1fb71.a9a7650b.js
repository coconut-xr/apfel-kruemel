(self.webpackChunkapfel_kruemel_docs=self.webpackChunkapfel_kruemel_docs||[]).push([[244],{9618:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/inputFields.8b46bf6.640.png 640w,"+a.p+"assets/ideal-img/inputFields.24e29d7.665.png 665w",images:[{path:a.p+"assets/ideal-img/inputFields.8b46bf6.640.png",width:640,height:270},{path:a.p+"assets/ideal-img/inputFields.24e29d7.665.png",width:665,height:281}],src:a.p+"assets/ideal-img/inputFields.8b46bf6.640.png",toString:function(){return a.p+"assets/ideal-img/inputFields.8b46bf6.640.png"},placeholder:void 0,width:640,height:270},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAECAYAAAC3OK7NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAh0lEQVQImSWLyQ6CMAAF+Tw1YQkH1hbSlgoKiDeISyJHiP88JvX4ZuZ5331jHHpu48D10jH0vdvd2dIYjdGK9+uJt8wzQgjquqLIc0RZopRyLM8y0iThPk14j2WhqqSTRmusbThbi9YKYwxSyn+4bxtta0iLmCgOicKYwI84Hk4EfuBO62flByfnVvC5ovANAAAAAElFTkSuQmCC"}},8110:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>g,frontMatter:()=>p,metadata:()=>s,toc:()=>o});var n=a(7462),l=(a(7294),a(4137)),i=a(5944),r=a(9705);const p={},d="Input",s={unversionedId:"inputFields",id:"inputFields",title:"Input",description:"Displays an input field.",source:"@site/docs/inputFields.md",sourceDirName:".",slug:"/inputFields",permalink:"/apfel-kruemel/inputFields",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Checkbox",permalink:"/apfel-kruemel/checkboxes"},next:{title:"List",permalink:"/apfel-kruemel/lists"}},u={},o=[{value:"Code Example",id:"code-example",level:3},{value:"Sandbox",id:"sandbox",level:3},{value:"<em>Params</em>",id:"params",level:4}],m={toc:o},k="wrapper";function g(e){let{components:t,...p}=e;return(0,l.kt)(k,(0,n.Z)({},m,p,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"input"},"Input"),(0,l.kt)("p",null,"Displays an input field."),(0,l.kt)(i.Z,{img:a(9618),mdxType:"Image"}),(0,l.kt)("h3",{id:"code-example"},"Code Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Glass, TextInput } from "@coconut-xr/apfel-kruemel";\nimport { BoxSelect } from "@coconut-xr/lucide-koestlich";\n\nexport default function CheckboxesPage() {\n  const [text, setText] = useState("");\n  return (\n    <Glass borderRadius={32} padding={16} flexDirection="row" gapRow={16}>\n        <TextInput value={text} onValueChange={setText} style="rect" placeholder="Placeholder" />\n        <TextInput\n            value={text}\n            onValueChange={setText}\n            style="rect"\n            placeholder="Placeholder"\n            prefix={<BoxSelect />}\n        />\n        <TextInput\n            value={text}\n            onValueChange={setText}\n            style="rect"\n            placeholder="Placeholder"\n            disabled\n        />\n        <TextInput\n            value={text}\n            onValueChange={setText}\n            style="rect"\n            placeholder="Placeholder"\n            disabled\n            prefix={<BoxSelect />}\n        />\n    </Glass>\n  );\n}\n')),(0,l.kt)("h3",{id:"sandbox"},"Sandbox"),(0,l.kt)(r.w,{defaultPath:"input-fields",mdxType:"CodesandboxEmbed"}),(0,l.kt)("h4",{id:"params"},(0,l.kt)("em",{parentName:"h4"},"Params")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"style"),(0,l.kt)("td",{parentName:"tr",align:null},"Style"),(0,l.kt)("td",{parentName:"tr",align:null},'optional / default: "rect"'),(0,l.kt)("td",{parentName:"tr",align:null},'Style of the input field. Options are "rect" / "pill"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"disabled"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"If true, disable all interactions for the input field")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"placeholder"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"A short hint displayed in the input field before the user enters a value")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"The value of the input field")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onValueChange"),(0,l.kt)("td",{parentName:"tr",align:null},"(value: string) => void"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"Callback fired when the value is changed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"prefix"),(0,l.kt)("td",{parentName:"tr",align:null},"RectNode"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"Customizable prefix displayed at front of the input field")))))}g.isMDXComponent=!0}}]);