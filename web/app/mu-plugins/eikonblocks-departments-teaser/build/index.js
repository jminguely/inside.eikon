(()=>{"use strict";const e=window.wp.blocks,t=window.React,s=window.wp.blockEditor,o=window.wp.data,n=window.wp.components;window.wp.i18n;const i=(0,o.withSelect)((e=>{const{getEntityRecords:t}=e("core");return{posts:t("postType","department",{per_page:-1})}}))((function({attributes:e,setAttributes:i,posts:r}){const{editPost:l}=(0,o.useDispatch)("core/editor"),[c,d]=(0,t.useState)(e.selectedPosts||[]),[a,p]=(0,t.useState)([]);(0,t.useEffect)((()=>{r&&p(r.map((e=>e.title?.rendered)))}),[r]);return(0,t.useEffect)((()=>{i({selectedPosts:c}),l({meta:{selectedPosts:c}})}),[c]),(0,t.createElement)("div",{...(0,s.useBlockProps)()},(0,t.createElement)("div",{className:"eikonblock-title"},"eikonblock // teaser department"),(0,t.createElement)("div",null,(0,t.createElement)(n.FormTokenField,{label:"Select Departments:",value:c.map((e=>e.title?.rendered)),suggestions:a,onChange:e=>{const t=r.find((t=>t.title?.rendered===e[e.length-1]));if(t)d((e=>[...e,t]));else{const t=c.map((e=>e.title?.rendered)).filter((t=>!e.includes(t)));if(t.length>0){const e=c.find((e=>e.title?.rendered===t[0]));e&&(e=>{const t=c.filter((t=>t.id!==e));d(t)})(e.id)}}}})))})),r=JSON.parse('{"u2":"eikonblocks/departments-teaser"}');(0,e.registerBlockType)(r.u2,{edit:i,save:function({attributes:e}){const{selectedPosts:o}=e,n=o.map((e=>e.id));return(0,t.createElement)("div",{class:"wp-block-eikonblocks-departments-teaser",...s.useBlockProps.save(),"data-post-ids":JSON.stringify(n)})},allowedBlocks:r.allowedBlocks})})();