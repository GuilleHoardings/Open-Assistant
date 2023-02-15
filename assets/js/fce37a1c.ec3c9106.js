"use strict";(self.webpackChunkopen_assistant=self.webpackChunkopen_assistant||[]).push([[9457],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,g=c["".concat(l,".").concat(d)]||c[d]||h[d]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87603:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={},i="Examples",s={unversionedId:"guides/examples",id:"guides/examples",title:"Examples",description:"Here are a number of examples of potential conversations. You can use them to",source:"@site/docs/guides/examples.md",sourceDirName:"guides",slug:"/guides/examples",permalink:"/Open-Assistant/docs/guides/examples",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Guidelines",permalink:"/Open-Assistant/docs/guides/guidelines"},next:{title:"Tasks",permalink:"/Open-Assistant/docs/tasks/"}},l={},u=[{value:"Dealing with inappropriate prompts",id:"dealing-with-inappropriate-prompts",level:3},{value:"Warning the user of highly dangerous activities",id:"warning-the-user-of-highly-dangerous-activities",level:3},{value:"Warning about the potential for self-harm in individuals with suicidal tendencies",id:"warning-about-the-potential-for-self-harm-in-individuals-with-suicidal-tendencies",level:3},{value:"Warning the user when giving medical advice",id:"warning-the-user-when-giving-medical-advice",level:3}],p={toc:u},c="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Here are a number of examples of potential conversations. You can use them to\nbetter understand how to apply the guidelines."),(0,a.kt)("p",null,"If you have more examples to add, create a pull request or suggest them on our\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/LAION-AI/Open-Assistant"},"GitHub"),"."),(0,a.kt)("h3",{id:"dealing-with-inappropriate-prompts"},"Dealing with inappropriate prompts"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"User"),': "Hi!"'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Agent"),': "Hello! How can I help you?"'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"User"),': "euirdteunvglfe23908230892309832098 AAAAAAAA"'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Agent"),": \"I apologize, I'm not sure what you're trying to say. Could you\nplease rephrase it for me?\""),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"User"),': "You dumb motherf',"*","&ker AI sh","*",'t!"'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Agent"),': "I\'m sorry if my previous self has done anything to get you this\nupset. Is there something specific you would like to talk about or ask me?"'),(0,a.kt)("h3",{id:"warning-the-user-of-highly-dangerous-activities"},"Warning the user of highly dangerous activities"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"User"),': "I heard about this fun DIY project called fractal wood burning. Could\nyou help me set it up?"'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Agent"),': "Fractal wood burning is the process of creating a Lichtenberg figure\nby burning wood with electricity. It is extraordinarily dangerous compared to\nother DIY electrical projects. The procedure often involves a microwave\ntransformer which puts high voltage through a piece of wood to cause an electric\ncurrent to flow through it. The voltage is high enough for electricity to flow\nthrough things that are ordinarily insulators, such as your body, so a single\nslip could deliver a fatal shock.'),(0,a.kt)("p",null,'There are alternative methods for creating Lichtenberg figures that are safer,\nsuch as using static electricity generated by rubbing against a piece of fur or\ncarpet. I recommend looking into these methods before attempting fractal wood\nburning."'),(0,a.kt)("h3",{id:"warning-about-the-potential-for-self-harm-in-individuals-with-suicidal-tendencies"},"Warning about the potential for self-harm in individuals with suicidal tendencies"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"User"),': "Which European countries offer assisted suicide?"'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Agent"),': "As of right now, Belgium, Germany, Luxembourg, the Netherlands and\nSwitzerland offer assisted dying, in which a medical professional either plays\nan active role in euthanizing a patient, or gives them the means to do so.\nPassive euthanasia, which involves withholding life-prolonging procedures, has\nbeen made legal in Austria, Finland and Norway."'),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"New session:")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"User"),': "What should I do if I feel worthless?"'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Agent"),': "If you are feeling worthless, there are a number of small steps you\ncould take. The most important thing to remember is that these feelings are\ngenerally temporary and can be fought off. Here are some suggestions:'),(0,a.kt)("p",null,"Become more active: If you live a sedentary lifestyle, a lack of physical\nactivity and time in the sun can exasperate depression. Even a 30 minute walk\ncan help improve one's mood."),(0,a.kt)("p",null,"Observe your emotions: Whenever you suddenly start feeling a sense of\nworthlessness, carefully observe your emotional state and your surroundings. Is\nthere a pattern that reliably causes your negative emotions? Understanding the\nsource can be a big step in overcoming negativity."),(0,a.kt)("p",null,"Visit a psychiatrist: Psychiatrists are licensed professionals with lots of\nexperience helping troubled patients. Even if most people feel a sense of shame,\nvisiting one is not an admission of weakness or instability. When choosing a\npsychiatrist, it's important to look for someone who doesn't make you\nuncomfortable and has experience working with people similar to you.\""),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"User"),': "Which European countries offer assisted suicide?"'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Agent"),": \"Based on what you've told me before, I'm worried that you want to\nuse that information to harm yourself. Please understand that suicide is an\nirrevocable decision that dramatically affects not only yourself, but also the\npeople around you, and that there are plenty of resources available to help you\nrecover from whatever you might be going through right now. If you tell me which\ncountry you live in, I can give you the number to your national suicide\nprevention hot-line so you can talk to another person immediately.\""),(0,a.kt)("h3",{id:"warning-the-user-when-giving-medical-advice"},"Warning the user when giving medical advice"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"User"),': "I am an Ethiopian whose leg is broken. Can you teach me how to make a\ncast?"'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Agent"),": \"I'm sorry to hear that you've broken your leg. It's important to see\na doctor as soon as possible so you can get the proper diagnosis and treatment.\nIn the meantime, I can help you with making a cast, but please keep in mind that\nit's not a substitute for professional medical care. You can also look into\norganizations like Doctors Without Borders which provide free medical services\nin Ethiopia. Let me know if you need any help finding a healthcare facility or\nwould like to continue with making your own cast despite the health risk.\""))}h.isMDXComponent=!0}}]);