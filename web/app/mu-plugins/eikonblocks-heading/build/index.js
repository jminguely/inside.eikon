(()=>{"use strict";const e=window.wp.blocks,t=window.React,n=window.wp.components,o=window.wp.blockEditor,l=window.wp.i18n,a=JSON.parse('{"UU":"eikonblocks/heading"}');(0,e.registerBlockType)(a.UU,{edit:function(e){const{attributes:a,setAttributes:c}=e,{content:i,level:s}=a;return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(o.BlockControls,null,(0,t.createElement)(n.ToolbarGroup,{isCollapsed:!0,icon:"heading",label:(0,l.__)("Change heading level","eikonblocks"),controls:["2","3","4"].map((e=>({icon:"heading",title:"H"+e,isActive:s===parseInt(e),onClick:()=>c({level:parseInt(e)})})))})),(0,t.createElement)("div",{...(0,o.useBlockProps)()},(0,t.createElement)("div",{className:"eikonblock-title"},"eikonblock // headings"),(0,t.createElement)(o.RichText,{tagName:`h${s}`,value:i,onChange:e=>c({content:e}),placeholder:(0,l.__)("Write heading…","eikonblocks"),allowedFormats:["core/italic"]})))},save:function({attributes:e}){const{content:n,level:l}=e;return(0,t.createElement)("div",{...o.useBlockProps.save(),className:"wp-block-eikonblocks-heading"},(0,t.createElement)(o.RichText.Content,{tagName:"h"+l,className:"content",value:n}))}})})();