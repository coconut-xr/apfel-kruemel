(self.webpackChunkapfel_kruemel_docs=self.webpackChunkapfel_kruemel_docs||[]).push([[591],{6400:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/sliders.a6b8643.635.png 635w",images:[{path:a.p+"assets/ideal-img/sliders.a6b8643.635.png",width:635,height:234}],src:a.p+"assets/ideal-img/sliders.a6b8643.635.png",toString:function(){return a.p+"assets/ideal-img/sliders.a6b8643.635.png"},placeholder:void 0,width:635,height:234},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAECAYAAAC3OK7NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAnklEQVQImR3LTwvBYADA4X03KaKl5DA7KNRuDmtak5XeJIyNIZf9wUHWvGLh6/2U5/4o33fB+ZRy3Ics5zNW3pLtxmftLZi4I2ZTwfMhUS7nlCAI2IUhtm2j621M08SyhhiGQVvTSKIIJb9diaOILMuQUnI47HEcB9cdI4T4pySOUT7FCz+YM7D6dHsdmo0WlXKNcqmKWlfx1z4yv/MDjWNmLvqQF2EAAAAASUVORK5CYII="}},3630:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>k,frontMatter:()=>d,metadata:()=>p,toc:()=>o});var l=a(7462),n=(a(7294),a(4137)),r=a(5944),i=a(9705);const d={},s="Slider",p={unversionedId:"slider",id:"slider",title:"Slider",description:"A component enabling the user to adjust a value within a specific range by dragging a handle along a track.",source:"@site/docs/slider.md",sourceDirName:".",slug:"/slider",permalink:"/apfel-kruemel/slider",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Segmented Controls",permalink:"/apfel-kruemel/segmentedControls"},next:{title:"Tabs",permalink:"/apfel-kruemel/tabBars"}},m={},o=[{value:"Code Example",id:"code-example",level:3},{value:"Sandbox",id:"sandbox",level:3},{value:"<em>Params</em>",id:"params",level:4}],u={toc:o},g="wrapper";function k(e){let{components:t,...d}=e;return(0,n.kt)(g,(0,l.Z)({},u,d,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"slider"},"Slider"),(0,n.kt)("p",null,"A component enabling the user to adjust a value within a specific range by dragging a handle along a track."),(0,n.kt)("div",{style:{display:"flex"}},(0,n.kt)(r.Z,{img:a(6400),style:{width:"73.1%"},mdxType:"Image"}),(0,n.kt)(r.Z,{img:a(4611),style:{width:"26.9%"},mdxType:"Image"})),(0,n.kt)("h3",{id:"code-example"},"Code Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Glass, Slider } from "@coconut-xr/apfel-kruemel";\n\nexport default function Checkboxes() {\n  return (\n    <Glass borderRadius={32} padding={16} flexDirection="column" gapRow={16}>\n        <Slider size="sm" defaultValue={5} />\n    </Glass>\n  );\n}\n')),(0,n.kt)("h3",{id:"sandbox"},"Sandbox"),(0,n.kt)(i.w,{defaultPath:"sliders",mdxType:"CodesandboxEmbed"}),(0,n.kt)("h4",{id:"params"},(0,n.kt)("em",{parentName:"h4"},"Params")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"value"),(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"optional"),(0,n.kt)("td",{parentName:"tr",align:null},"The current value of the slider")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"defaultValue"),(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"optional"),(0,n.kt)("td",{parentName:"tr",align:null},"The default value of the slider")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"onValueChange"),(0,n.kt)("td",{parentName:"tr",align:null},"(value: number) => void"),(0,n.kt)("td",{parentName:"tr",align:null},"optional"),(0,n.kt)("td",{parentName:"tr",align:null},"Callback that is fired when the user changes the slider position")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"range"),(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"optional / default: 10"),(0,n.kt)("td",{parentName:"tr",align:null},"Min and max value of the slider given as a range (0 to 'range')")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"size"),(0,n.kt)("td",{parentName:"tr",align:null},"Size"),(0,n.kt)("td",{parentName:"tr",align:null},'optional / default: "md"'),(0,n.kt)("td",{parentName:"tr",align:null},'Sets the size of the slider. Options are "xs" / "sm" / "md" / "lg"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"icon"),(0,n.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,n.kt)("td",{parentName:"tr",align:null},"optional"),(0,n.kt)("td",{parentName:"tr",align:null},"An icon displayed at the front of the slider")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"disabled"),(0,n.kt)("td",{parentName:"tr",align:null},"boolean"),(0,n.kt)("td",{parentName:"tr",align:null},"optional / default: false"),(0,n.kt)("td",{parentName:"tr",align:null},"If true, disable all interactions for the slider")))))}k.isMDXComponent=!0},4611:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>l});const l=a.p+"assets/images/xr3-9d998f71853d933fb825af2196867da1.gif"}}]);