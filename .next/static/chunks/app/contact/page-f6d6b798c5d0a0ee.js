(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{5145:function(e,t,s){Promise.resolve().then(s.t.bind(s,5250,23)),Promise.resolve().then(s.t.bind(s,1922,23)),Promise.resolve().then(s.t.bind(s,8191,23)),Promise.resolve().then(s.bind(s,7351))},7351:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return r}});var a=s(7437),l=s(2265),o=s(2670),r=()=>{let{register:e,handleSubmit:t}=(0,o.cI)(),[s,r]=(0,l.useState)(!1),d=async e=>{r(!0),await function(e){fetch("/api/email",{method:"POST",body:JSON.stringify(e)}).then(e=>e.json()).then(e=>{alert(e.message)}).catch(e=>{alert(e)})}(e),r(!1)};return(0,a.jsxs)("form",{onSubmit:t(d),children:[(0,a.jsxs)("div",{className:"mb-5 mt-20",children:[(0,a.jsx)("label",{htmlFor:"name",className:"mb-3 block text-base font-medium text-black",children:"Full Name"}),(0,a.jsx)("input",{type:"text",placeholder:"Full Name",className:"w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-black focus:shadow-md",...e("name",{required:!0}),disabled:s})]}),(0,a.jsxs)("div",{className:"mb-5",children:[(0,a.jsx)("label",{htmlFor:"email",className:"mb-3 block text-base font-medium text-black",children:"Email Address"}),(0,a.jsx)("input",{type:"email",placeholder:"example@domain.com",className:"w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-black focus:shadow-md",...e("email",{required:!0}),disabled:s})]}),(0,a.jsxs)("div",{className:"mb-5",children:[(0,a.jsx)("label",{htmlFor:"message",className:"mb-3 block text-base font-medium text-black",children:"Message"}),(0,a.jsx)("textarea",{rows:4,placeholder:"Type your message",className:"w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-black focus:shadow-md",...e("message",{required:!0}),disabled:s})]}),(0,a.jsx)("div",{children:(0,a.jsx)("button",{className:"rounded-md bg-black py-3 px-8 text-base font-semibold text-white outline-none ".concat(s?"cursor-not-allowed opacity-50":"hover:shadow-form"),type:"submit",disabled:s,children:s?"Submitting...":"Submit"})})]})}}},function(e){e.O(0,[725,670,971,69,744],function(){return e(e.s=5145)}),_N_E=e.O()}]);