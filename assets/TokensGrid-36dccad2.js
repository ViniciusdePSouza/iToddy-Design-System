var s=Object.defineProperty;var a=(r,n)=>s(r,"name",{value:n,configurable:!0});import{j as t,a as e}from"./jsx-runtime-8be73ed9.js";function l({tokens:r,hasRemValue:n}){return t("table",{className:"tokens-grid",children:[e("thead",{children:t("tr",{children:[e("th",{children:"Name"}),e("th",{children:"Value"}),n&&e("th",{children:"Pixels"})]})}),e("tbody",{children:Object.entries(r).map(([d,i])=>t("tr",{children:[e("td",{children:d}),e("td",{children:i}),n&&t("td",{children:[Number(i.replace("rem",""))*16,"px"]})]},d))})]})}a(l,"TokensGrid");try{l.displayName="TokensGrid",l.__docgenInfo={description:"",displayName:"TokensGrid",props:{tokens:{defaultValue:null,description:"",name:"tokens",required:!0,type:{name:"Record<string, string>"}},hasRemValue:{defaultValue:null,description:"",name:"hasRemValue",required:!1,type:{name:"boolean"}}}}}catch{}export{l as T};
//# sourceMappingURL=TokensGrid-36dccad2.js.map
