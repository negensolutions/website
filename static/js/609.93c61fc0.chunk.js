"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[609],{4609:function(e,n,i){i.r(n),i.d(n,{default:function(){return Q}});var a=i(605),t=i(9603),r=i(4720),s=i(1758),d=i(4942),l=i(1413),m=i(9439),o=i(2791),c=i(8691),h=i(1243),u=function(e){var n=(0,o.useState)({name:"",email:"",message:""}),i=(0,m.Z)(n,2),a=i[0],t=i[1],r=(0,o.useState)({}),s=(0,m.Z)(r,2),u=s[0],p=s[1],x=(0,o.useState)(!1),g=(0,m.Z)(x,2),Z=g[0],j=g[1];(0,o.useEffect)((function(){0===Object.keys(u).length&&Z&&(t((function(e){return{name:"",email:"",message:""}})),c.Z.success({message:"Success",description:"Your message has been sent!"}))}),[u,Z]);return{handleChange:function(e){e.persist(),t((function(n){return(0,l.Z)((0,l.Z)({},n),{},(0,d.Z)({},e.target.name,e.target.value))})),p((function(n){return(0,l.Z)((0,l.Z)({},n),{},(0,d.Z)({},e.target.name,""))}))},handleSubmit:function(n){n.preventDefault(),p(e(a));Object.values(a).every((function(e){return""!==e}))&&h.Z.post("",(0,l.Z)({},a)).then((function(){j(!0)}))},values:a,errors:u}};function p(e){var n={};return e.name||(n.name="Name is required"),e.email?/\S+@\S+\.\S+/.test(e.email)||(n.email="Email address is invalid"):n.email="Email address is required",e.message||(n.message="Message is required"),n}var x,g,Z,j,f,v,b,y,w,C,P,S,k=i(5224),z=i(168),E=i(1191),M=(0,E.ZP)("p")(x||(x=(0,z.Z)(["\n  margin-top: 1.5rem;\n"]))),O=(0,E.ZP)("div")(g||(g=(0,z.Z)(["\n  position: relative;\n  max-width: 700px;\n"]))),Y=(0,E.ZP)("div")(Z||(Z=(0,z.Z)(["\n  border-radius: 3rem;\n  max-width: 400px;\n"]))),q=i(184),F=(0,r.Z)()((function(e){var n=e.title,i=e.content,a=e.t;return(0,q.jsxs)(O,{children:[(0,q.jsx)("h6",{children:a(n)}),(0,q.jsx)(Y,{children:(0,q.jsx)(M,{children:a(i)})})]})})),N=(0,E.ZP)("div")(j||(j=(0,z.Z)(["\n  display: inline-block;\n  width: 100%;\n  padding: 10px 5px;\n"]))),_=(0,E.ZP)("input")(f||(f=(0,z.Z)(["\n  font-size: 0.875rem;\n"]))),D=(0,E.ZP)("div")(v||(v=(0,z.Z)(["\n  display: inline-block;\n  width: 100%;\n  padding: 10px 5px;\n  margin-bottom: -0.625rem;\n"]))),G=(0,E.ZP)("textarea")(b||(b=(0,z.Z)(["\n  resize: none;\n  font-size: 0.875rem;\n  height: 185px;\n"]))),L=(0,E.ZP)("label")(y||(y=(0,z.Z)(["\n  display: block;\n  padding-bottom: 10px;\n  text-transform: capitalize;\n"]))),A=(0,r.Z)()((function(e){var n=e.name,i=e.placeholder,a=e.onChange,t=e.t;return(0,q.jsxs)(N,{children:[(0,q.jsx)(L,{htmlFor:n,children:t(n)}),(0,q.jsx)(_,{placeholder:t(i),name:n,id:n,onChange:a})]})})),B=(0,r.Z)()((function(e){var n=e.name,i=e.placeholder,a=e.onChange,t=e.t;return(0,q.jsxs)(D,{children:[(0,q.jsx)(L,{htmlFor:n,children:t(n)}),(0,q.jsx)(G,{placeholder:t(i),id:n,name:n,onChange:a})]})})),H=(0,E.ZP)("div")(w||(w=(0,z.Z)(["\n  padding: 5rem 0;\n\n  @media only screen and (max-width: 1024px) {\n    padding: 3rem 0;\n  }\n"]))),I=(0,E.ZP)("form")(C||(C=(0,z.Z)(["\n  width: 100%;\n  max-width: 520px;\n\n  @media only screen and (max-width: 1045px) {\n    max-width: 100%;\n    margin-top: 2rem;\n  }\n"]))),J=(0,E.ZP)("span")(P||(P=(0,z.Z)(["\n  display: block;\n  font-weight: 600;\n  color: rgb(255, 130, 92);\n  height: 0.775rem;\n  padding: 0 0.675rem;\n"]))),K=(0,E.ZP)("div")(S||(S=(0,z.Z)(["\n  text-align: end;\n  position: relative;\n\n  @media only screen and (max-width: 414px) {\n    padding-top: 0.75rem;\n  }\n"]))),Q=(0,r.Z)()((function(e){var n=e.title,i=e.content,r=e.id,d=e.t,l=u(p),m=l.values,o=l.errors,c=l.handleChange,h=l.handleSubmit,x=function(e){var n=e.type,i=o[n];return(0,q.jsx)(s.LG,{direction:"left",children:(0,q.jsx)(J,{children:i})})};return(0,q.jsx)(H,{id:r,children:(0,q.jsxs)(a.Z,{justify:"space-between",align:"middle",children:[(0,q.jsx)(t.Z,{lg:12,md:11,sm:24,xs:24,children:(0,q.jsx)(s.Mi,{direction:"left",triggerOnce:!0,children:(0,q.jsx)(F,{title:n,content:i})})}),(0,q.jsx)(t.Z,{lg:12,md:12,sm:24,xs:24,children:(0,q.jsx)(s.Mi,{direction:"right",triggerOnce:!0,children:(0,q.jsxs)(I,{autoComplete:"off",onSubmit:h,children:[(0,q.jsxs)(t.Z,{span:24,children:[(0,q.jsx)(A,{type:"text",name:"name",placeholder:"Your Name",value:m.name||"",onChange:c}),(0,q.jsx)(x,{type:"name"})]}),(0,q.jsxs)(t.Z,{span:24,children:[(0,q.jsx)(A,{type:"text",name:"email",placeholder:"Your Email",value:m.email||"",onChange:c}),(0,q.jsx)(x,{type:"email"})]}),(0,q.jsxs)(t.Z,{span:24,children:[(0,q.jsx)(B,{placeholder:"Your Message",value:m.message||"",name:"message",onChange:c}),(0,q.jsx)(x,{type:"message"})]}),(0,q.jsx)(K,{children:(0,q.jsx)(k.z,{name:"submit",children:d("Submit")})})]})})})]})})}))}}]);
//# sourceMappingURL=609.93c61fc0.chunk.js.map