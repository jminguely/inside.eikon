(()=>{"use strict";const e=window.wp.blocks,t=window.React,o=window.wp.components,l=window.wp.blockEditor,n=window.wp.i18n,c=JSON.parse('{"UU":"eikonblocks/heading"}');(0,e.registerBlockType)(c.UU,{edit:function(e){const{attributes:c,setAttributes:a}=e,{content:r,level:i,fullWidth:s}=c;return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(l.BlockControls,null,(0,t.createElement)(o.ToolbarGroup,{isCollapsed:!0,icon:"heading",label:(0,n.__)("Change heading level","eikonblocks"),controls:["2","3","4"].map((e=>({icon:"heading",title:"H"+e,isActive:i===parseInt(e),onClick:()=>a({level:parseInt(e)})})))}),(0,t.createElement)(o.ToolbarButton,{icon:"align-full-width",label:(0,n.__)("Pleine largeur","eikonblocks"),isPressed:s,onClick:()=>a({fullWidth:!s})})),(0,t.createElement)("div",{...(0,l.useBlockProps)()},(0,t.createElement)("div",{className:"eikonblock-title"},"eikonblock // titre"),(0,t.createElement)(l.RichText,{tagName:`h${i}`,value:r,onChange:e=>a({content:e}),placeholder:(0,n.__)("Write heading…","eikonblocks"),allowedFormats:["core/italic"]})))},save:function({attributes:e}){const{content:o,level:n,fullWidth:c}=e;return(0,t.createElement)("div",{...l.useBlockProps.save(),className:"wp-block-eikonblocks-heading "+(c?"full-width":"")},(0,t.createElement)(l.RichText.Content,{tagName:"h"+n,className:"content",value:o}))},transforms:{from:[{type:"block",blocks:["core/paragraph"],transform:({content:t})=>(0,e.createBlock)(c.UU,{content:t})}],to:[{type:"block",blocks:["core/paragraph"],transform:({content:t})=>(0,e.createBlock)("core/paragraph",{content:t})}]}})})();