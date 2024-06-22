import{r as h,j as s,m as l}from"./index-95d06e15.js";import{r as b}from"./resolve-element-1ea75fc3.js";const E={some:0,all:1};function _(t,e,{root:r,margin:c,amount:i="some"}={}){const a=b(t),n=new WeakMap,o=p=>{p.forEach(d=>{const x=n.get(d.target);if(d.isIntersecting!==!!x)if(d.isIntersecting){const j=e(d);typeof j=="function"?n.set(d.target,j):m.unobserve(d.target)}else x&&(x(d),n.delete(d.target))})},m=new IntersectionObserver(o,{root:r,rootMargin:c,threshold:typeof i=="number"?i:E[i]});return a.forEach(p=>m.observe(p)),()=>m.disconnect()}function y(t,{root:e,margin:r,amount:c,once:i=!1}={}){const[a,n]=h.useState(!1);return h.useEffect(()=>{if(!t.current||i&&a)return;const o=()=>(n(!0),i?void 0:()=>n(!1)),m={root:e&&e.current||void 0,margin:r,amount:c};return _(t.current,o,m)},[e,t,r,i]),a}const f={_origin:"https://api.emailjs.com"},I=(t,e="https://api.emailjs.com")=>{f._userID=t,f._origin=e},v=(t,e,r)=>{if(!t)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class w{constructor(e){this.status=e?e.status:0,this.text=e?e.responseText:"Network Error"}}const g=(t,e,r={})=>new Promise((c,i)=>{const a=new XMLHttpRequest;a.addEventListener("load",({target:n})=>{const o=new w(n);o.status===200||o.text==="OK"?c(o):i(o)}),a.addEventListener("error",({target:n})=>{i(new w(n))}),a.open("POST",f._origin+t,!0),Object.keys(r).forEach(n=>{a.setRequestHeader(n,r[n])}),a.send(e)}),S=(t,e,r,c)=>{const i=c||f._userID;return v(i,t,e),g("/api/v1.0/email/send",JSON.stringify({lib_version:"3.11.0",user_id:i,service_id:t,template_id:e,template_params:r}),{"Content-type":"application/json"})},N=t=>{let e;if(typeof t=="string"?e=document.querySelector(t):e=t,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},V=(t,e,r,c)=>{const i=c||f._userID,a=N(r);v(i,t,e);const n=new FormData(a);return n.append("lib_version","3.11.0"),n.append("service_id",t),n.append("template_id",e),n.append("user_id",i),g("/api/v1.0/email/send-form",n)},C={init:I,send:S,sendForm:V},u={initial:{y:500,opacity:0},animate:{y:0,opacity:1,transition:{duration:.5,staggerChildren:.1}}},T=()=>{const t=h.useRef(),e=h.useRef(),[r,c]=h.useState(!1),[i,a]=h.useState(!1),n=y(t,{margin:"-100px"}),o=m=>{m.preventDefault(),C.sendForm("service_87e5uia","template_abtchg9",e.current,"N9vnKaGe65QTWKIKS").then(p=>{a(!0)},p=>{c(!0)})};return s.jsxs(l.div,{ref:t,className:"contact",variants:u,initial:"initial",whileInView:"animate",children:[s.jsxs(l.div,{className:"textContainer",variants:u,children:[s.jsx(l.h1,{variants:u,children:"Let’s work together"}),s.jsxs(l.div,{className:"item",variants:u,children:[s.jsx("h2",{children:"Mail"}),s.jsx("span",{children:"mingyangxia.career@gmail.com"})]}),s.jsxs(l.div,{className:"item",variants:u,children:[s.jsx("h2",{children:"Address"}),s.jsx("span",{children:"167A Richmond St, Dublin"})]}),s.jsxs(l.div,{className:"item",variants:u,children:[s.jsx("h2",{children:"Phone"}),s.jsx("span",{children:"+353 89 242 2305"})]})]}),s.jsxs("div",{className:"formContainer",children:[s.jsx(l.div,{className:"phoneSvg",initial:{opacity:1},whileInView:{opacity:0},transition:{delay:1.5,duration:1},children:s.jsx("svg",{width:"450px",height:"450px",viewBox:"0 0 32.666 32.666",children:s.jsx(l.path,{strokeWidth:.2,fill:"none",initial:{pathLength:0},animate:n&&{pathLength:1},transition:{duration:1.5},d:`M28.189,16.504h-1.666c0-5.437-4.422-9.858-9.856-9.858l-0.001-1.664C23.021,4.979,28.189,10.149,28.189,16.504z
            M16.666,7.856L16.665,9.52c3.853,0,6.983,3.133,6.981,6.983l1.666-0.001C25.312,11.735,21.436,7.856,16.666,7.856z M16.333,0
            C7.326,0,0,7.326,0,16.334c0,9.006,7.326,16.332,16.333,16.332c0.557,0,1.007-0.45,1.007-1.006c0-0.559-0.45-1.01-1.007-1.01
            c-7.896,0-14.318-6.424-14.318-14.316c0-7.896,6.422-14.319,14.318-14.319c7.896,0,14.317,6.424,14.317,14.319
            c0,3.299-1.756,6.568-4.269,7.954c-0.913,0.502-1.903,0.751-2.959,0.761c0.634-0.377,1.183-0.887,1.591-1.529
            c0.08-0.121,0.186-0.228,0.238-0.359c0.328-0.789,0.357-1.684,0.555-2.518c0.243-1.064-4.658-3.143-5.084-1.814
            c-0.154,0.492-0.39,2.048-0.699,2.458c-0.275,0.366-0.953,0.192-1.377-0.168c-1.117-0.952-2.364-2.351-3.458-3.457l0.002-0.001
            c-0.028-0.029-0.062-0.061-0.092-0.092c-0.031-0.029-0.062-0.062-0.093-0.092v0.002c-1.106-1.096-2.506-2.34-3.457-3.459
            c-0.36-0.424-0.534-1.102-0.168-1.377c0.41-0.311,1.966-0.543,2.458-0.699c1.326-0.424-0.75-5.328-1.816-5.084
            c-0.832,0.195-1.727,0.227-2.516,0.553c-0.134,0.057-0.238,0.16-0.359,0.24c-2.799,1.774-3.16,6.082-0.428,9.292
            c1.041,1.228,2.127,2.416,3.245,3.576l-0.006,0.004c0.031,0.031,0.063,0.06,0.095,0.09c0.03,0.031,0.059,0.062,0.088,0.095
            l0.006-0.006c1.16,1.118,2.535,2.765,4.769,4.255c4.703,3.141,8.312,2.264,10.438,1.098c3.67-2.021,5.312-6.338,5.312-9.719
            C32.666,7.326,25.339,0,16.333,0z`})})}),s.jsxs(l.form,{ref:e,onSubmit:o,initial:{opacity:0},whileInView:{opacity:1},transition:{delay:2,duration:1},children:[s.jsx("input",{type:"text",required:!0,placeholder:"Name",name:"name"}),s.jsx("input",{type:"email",required:!0,placeholder:"Email",name:"email"}),s.jsx("textarea",{rows:8,placeholder:"Message",name:"message"}),s.jsx("button",{children:"Submit"}),r&&s.jsx("span",{style:{color:"white"},children:"Error"}),i&&s.jsx("span",{style:{color:"white"},children:"Success"})]})]})]})};export{T as default};
