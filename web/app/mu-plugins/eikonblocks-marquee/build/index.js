(()=>{"use strict";const e=window.wp.blocks,t=window.React,o=window.wp.blockEditor,c=window.wp.i18n,n=JSON.parse('{"UU":"eikonblocks/marquee"}'),a=wp.element.createElement,r=a("svg",{width:24,height:24},a("path",{d:"M7 3h15c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H7.07c-.69 0-1.3-.36-1.66-.89L0 12l5.41-8.12C5.77 3.35 6.31 3 7 3Zm.5 9c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5Zm6.5 1.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5Zm3.5-1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5Z"}));(0,e.registerBlockType)(n.UU,{edit:function(e){const{attributes:n,setAttributes:a}=e,{content:r}=n;return(0,t.createElement)("div",{...(0,o.useBlockProps)()},(0,t.createElement)("div",{className:"eikonblock-title"},"eikonblock // marquee"),(0,t.createElement)(o.RichText,{tagName:"p",value:r,onChange:e=>a({content:e}),placeholder:(0,c.__)("Add your custom text","eikonblocks"),allowedFormats:["core/italic"],style:{fontSize:"60px",padding:"0",margin:"0"}}))},save:function({attributes:e}){const{content:c}=e,n=c.length/5+"s";return(0,t.createElement)("div",{...o.useBlockProps.save(),className:"wp-block-eikonblocks-marquee"},(0,t.createElement)("div",{className:"marquee-container"},(0,t.createElement)(o.RichText.Content,{className:"content",tagName:"p","data-text":c,value:c,style:{animationDuration:n}})))},icon:r,transforms:{from:[{type:"block",blocks:["core/paragraph"],transform:({content:t})=>(0,e.createBlock)(n.UU,{content:t})}],to:[{type:"block",blocks:["core/paragraph"],transform:({content:t})=>(0,e.createBlock)("core/paragraph",{content:t})}]}})})();