(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(894)}])},828:function(e,t,n){"use strict";var r=n(5893),s=n(8568),a=n(5675),i=n.n(a),c=n(7504),l=function(e){var t=e.borderBottom,n=e.content;return(0,r.jsxs)("div",{className:"w-full block ".concat(t?"bottom-border":""),children:[(0,r.jsx)(s.Z,{contentType:n.contentType,tag:n.tag}),(0,r.jsx)("div",{className:"my-4 min-w-[335px] aspect-[2/1] w-full image-wrapper",children:(0,r.jsx)(i(),{src:n.banner.url,alt:n.title+" image",className:"object-cover",layout:"fill"})}),(0,r.jsx)("h2",{className:"text-2xl font-jakarta-bold text-black",children:n.title}),(0,r.jsx)("p",{className:"pt-[0.3rem] mb-9 text-medium-sm-darkgray",children:n.description}),(0,r.jsx)("div",{className:"mb-6",children:(0,r.jsx)(c.Z,{author:n.author,published:n.published})})]})};t.Z=l},7504:function(e,t,n){"use strict";var r=n(5893),s=function(e){var t=new Date(e.published),n="".concat(new Intl.DateTimeFormat("en-US",{month:"short"}).format(t)," ").concat(t.getDate(),", ").concat(t.getFullYear());return(0,r.jsxs)("div",{className:"grid grid-cols-2",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"inline font-jakarta-medium text-custom-darkgray",children:"By "}),(0,r.jsx)("p",{className:"inline font-jakarta-bold text-black",children:e.author})]}),(0,r.jsx)("p",{className:"font-jakarta-medium text-sm text-custom-darkgray text-right",children:n})]})};t.Z=s,s.defaultProps={author:"Anonymous",published:"2022-01-01"}},14:function(e,t,n){"use strict";var r=n(5893),s=n(851),a=n(8568),i=n(7504),c=function(e){var t=e.borderBottom,n=e.content;return(0,r.jsx)("div",{className:"flex flex-row items-center self-center mb-6 ".concat(t?"bottom-border":""),children:(0,r.jsxs)("div",{className:"flex flex-col justify-center basis-60 grow",children:[(0,r.jsx)(a.Z,{className:"min-h-4",contentType:n.contentType,tag:n.tag}),(0,r.jsx)("h2",{className:"base-extrabold-text my-[0.2em]",children:n.title}),(0,r.jsx)("p",{className:"mb-[6px] text-medium-sm-darkgray",children:(0,s.H)(n.description)}),(0,r.jsx)("div",{className:"",children:(0,r.jsx)(i.Z,{author:n.author,published:n.published})})]})})};t.Z=c},4683:function(e,t,n){"use strict";var r=n(5893),s=n(5675),a=n.n(s),i=function(e){var t=e.contentType,n={news:{heading:"Latest Stories",subheading:"Dig into the top trending bao-sized stories"},interviews:{heading:"Interviews",subheading:"Learn more about the humans of web3"},rss:{heading:"More Stories",subheading:"Find more stories on what's happening"}};return(0,r.jsxs)("div",{className:"mb-8",children:[(0,r.jsxs)("div",{className:"flex relative",children:[(0,r.jsx)("h1",{className:"mr-[10px] heading-extrabold",children:n[t].heading}),(0,r.jsx)(a(),{src:"/assets/home-arrow-icon.svg",alt:"home arrow icon",width:20,height:28})]}),(0,r.jsx)("p",{className:"base-medium-text",children:n[t].subheading})]})};t.Z=i},8568:function(e,t,n){"use strict";var r=n(5893),s=function(e){var t=e.contentType,n=e.tag,s=e.className,a=t.charAt(0).toUpperCase()+t.slice(1);return(0,r.jsx)("p",{className:"text-xs font-jakarta-bold text-custom-blue ".concat(s),children:"".concat(a," > ").concat(n)})};t.Z=s,s.defaultProps={contentType:"INSERT CONTENT TYPE",tag:"INSERT TAG",className:""}},5154:function(e,t,n){"use strict";n.d(t,{d:function(){return f}});var r,s,a=n(4924),i=n(5893),c=n(6437),l=n(9512),o=n(9915),d=n.n(o),u=n(5675),m=n.n(u),h=function(e){if(e&&e.length>0&&"string"==typeof e[0]&&e[0].match(/https:\/\/twitter\.com/g)){var t=e[0].replace(/https:\/\/twitter\.com\/(.*)status\//g,"");if(!t.match(/[0-9]/g)){console.log("tweet id is invalid");return}return(0,i.jsx)("div",{className:"centering",children:(0,i.jsx)("div",{className:"h-[fit-content] max-w-lg w-full flex flex-col mb-10 self-center",children:(0,i.jsx)(l.iD,{tweetId:t})})})}return(0,i.jsx)("p",{className:d().contentfulText,children:e})},f={renderMark:(r={},(0,a.Z)(r,c.MARKS.BOLD,function(e){return(0,i.jsx)("b",{className:"font-jakarta-bold inline",children:e})}),(0,a.Z)(r,c.MARKS.UNDERLINE,function(e){return(0,i.jsx)("u",{className:"decoration-solid decoration-1 inline",children:e})}),r),renderNode:(s={},(0,a.Z)(s,c.BLOCKS.PARAGRAPH,function(e,t){return h(t)}),(0,a.Z)(s,c.BLOCKS.HEADING_1,function(e,t){return(0,i.jsx)("h1",{className:"".concat(d().contentfulHeading," leading-[2.7rem]"),children:t})}),(0,a.Z)(s,c.BLOCKS.HEADING_2,function(e,t){return(0,i.jsx)("h2",{className:"".concat(d().contentfulHeading," leading-[2.2rem]"),children:t})}),(0,a.Z)(s,c.BLOCKS.HEADING_3,function(e,t){return(0,i.jsx)("h3",{className:"".concat(d().contentfulHeading," leading-[1.87rem]"),children:t})}),(0,a.Z)(s,c.BLOCKS.HEADING_4,function(e,t){return(0,i.jsx)("h4",{className:"".concat(d().contentfulHeading," leading-[1.7rem]"),children:t})}),(0,a.Z)(s,c.BLOCKS.HEADING_5,function(e,t){return(0,i.jsx)("h5",{className:"".concat(d().contentfulHeading," leading-[1.5rem]"),children:t})}),(0,a.Z)(s,c.BLOCKS.HEADING_6,function(e,t){return(0,i.jsx)("h6",{className:"".concat(d().contentfulHeading," leading-[1.35rem]"),children:t})}),(0,a.Z)(s,c.BLOCKS.UL_LIST,function(e,t){return(0,i.jsx)("ul",{className:"ml-5 list-disc",children:t})}),(0,a.Z)(s,c.BLOCKS.LIST_ITEM,function(e,t){return(0,i.jsx)("li",{className:"mt-0 ml-[2.5rem] inline leading-[1.8rem]",children:t})}),(0,a.Z)(s,c.BLOCKS.EMBEDDED_ASSET,function(e,t){var n=e.data.target.fields;return(0,i.jsx)("div",{className:"flex w-fit self-center",children:(0,i.jsx)(m(),{src:"https://".concat(n.file.url),alt:n.description,height:n.file.details.image.height,width:n.file.details.image.width})})}),(0,a.Z)(s,c.INLINES.HYPERLINK,function(e,t){var n=e.data;return(0,i.jsx)("a",{href:n.uri,className:"font-jakarta-bold inline decoration-solid decoration-1 decoration-custom-blue text-custom-blue",children:t})}),s)}},894:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return Z},default:function(){return _}});var r,s,a=n(5893),i=n(9008),c=n.n(i),l=n(7568),o=n(6042),d=n(655),u=n(196);n(4129),n(5154),(0,l.Z)(function(e,t){var n,r,s,a;return(0,d.__generator)(this,function(s){switch(s.label){case 0:if(n="https://us-central1-news-api-37579.cloudfunctions.net/app"+"/contentful/".concat(e),!t)return[3,2];return[4,u.ZP.get("".concat(n,"?id=").concat(t))];case 1:return r=s.sent(),[3,4];case 2:return[4,u.ZP.get(n)];case 3:r=s.sent(),s.label=4;case 4:return[2,r.data.map(function(e){var t,n;return t=(0,o.Z)({},e),n=(n={banner:e.banner?{url:"https:".concat(e.banner.fields.file.url),height:e.banner.fields.file.details.image.height,width:e.banner.fields.file.details.image.width}:null},!0,n),Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n.push.apply(n,r)}return n})(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}),t}).sort(function(e,t){return Date.parse(t.published)-Date.parse(e.published)})]}})}),(0,l.Z)(function(e){var t;return(0,d.__generator)(this,function(t){switch(t.label){case 0:return[4,u.ZP.get("https://us-central1-news-api-37579.cloudfunctions.net/app"+"/contentful/".concat(e,"/?onlyIds=1"))];case 1:return[2,t.sent().data.ids]}})});var m=n(1664),h=n.n(m),f=n(4683),x=n(828),p=n(8568),j=n(5675),b=n.n(j),g=n(7504),N=function(e){var t=e.borderBottom,n=e.content;return(0,a.jsxs)("div",{className:"w-full block mb-4 ".concat(t?"bottom-border":""),children:[(0,a.jsx)(p.Z,{contentType:n.contentType,tag:n.tag}),(0,a.jsx)("div",{className:"h-[195px] w-full my-4 min-w-[200px] image-wrapper",children:(0,a.jsx)(b(),{src:n.banner.url,alt:n.title+" image",className:"object-cover",layout:"fill"})}),(0,a.jsx)("h2",{className:"base-extrabold-text",children:n.title}),(0,a.jsx)("p",{className:"pt-[0.3rem] mb-4 text-medium-sm-darkgray",children:n.description}),(0,a.jsx)("div",{className:"mb-4",children:(0,a.jsx)(g.Z,{author:n.author,published:n.published})})]})},v=n(851),w=function(e){var t=e.borderBottom,n=e.content;return(0,a.jsxs)("div",{className:"flex flex-row items-center self-center mt-6 ".concat(t?"bottom-border":""),children:[(0,a.jsx)("div",{className:"h-[120px] max-w-[165px] basis-[75px] grow shrink image-wrapper",children:(0,a.jsx)(b(),{src:n.banner.url,alt:n.title+" image",className:"object-cover",layout:"fill"})}),(0,a.jsxs)("div",{className:"flex flex-col justify-center ml-4 basis-60 grow",children:[(0,a.jsx)(p.Z,{className:"h-4",contentType:n.contentType,tag:n.tag}),(0,a.jsx)("h2",{className:"base-extrabold-text my-[0.2em]",children:n.title}),(0,a.jsx)("p",{className:"mb-[6px] text-medium-sm-darkgray w-fit",children:(0,v.H)(n.description)}),(0,a.jsx)("div",{className:"",children:(0,a.jsx)(g.Z,{author:n.author,published:n.published})})]})]})},y=n(14),Z=!0,_=function(e){var t=e.newsJSON,n=e.interviewsJSON,r=e.RSS,s=JSON.parse(t),i=JSON.parse(n),l=s&&s.length>0?(0,a.jsx)(h(),{href:"/news/".concat(s[0].contentfulId),children:(0,a.jsx)("a",{children:(0,a.jsx)(x.Z,{content:s[0],borderBottom:!0})})}):null,o=s&&s.length>1?s.slice(1).map(function(e,t){return(0,a.jsx)(h(),{href:"/news/".concat(e.contentfulId),children:(0,a.jsx)("a",{children:(0,a.jsx)(w,{content:e})})},t)}):null,d=i&&i.length>0?i.slice(0,2).map(function(e,t){return(0,a.jsx)(h(),{href:"/interviews/".concat(e.contentfulId),children:(0,a.jsx)("a",{children:(0,a.jsx)(N,{content:s[0],borderBottom:!0})})},t)}):null,u=r&&r.length>0?r.slice(0,5).map(function(e,t){return(0,a.jsx)("a",{href:e.link,children:(0,a.jsx)(y.Z,{content:e})},t)}):null;return(0,a.jsxs)("div",{children:[(0,a.jsxs)(c(),{children:[(0,a.jsx)("title",{children:"My app"}),(0,a.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsx)("div",{className:"flex justify-center p-8",children:(0,a.jsxs)("div",{className:"w-full grid grid-areas-home-mobile justify-items-center xl:grid-areas-home-desktop xl:justify-evenly",children:[(0,a.jsxs)("div",{className:"grid-in-news flex flex-col max-w-[700px] xl:mr-4 mb-8",children:[(0,a.jsx)(f.Z,{contentType:"news"}),l,o]}),(0,a.jsxs)("div",{className:"grid-in-interviews flex flex-col max-w-[385px] w-full xl:ml-4 mb-8",children:[(0,a.jsx)(f.Z,{contentType:"interviews"}),d]}),(0,a.jsx)("div",{className:"grid-in-rss flex flex-col max-w-[385px] w-full xl:ml-4",children:u})]})})]})}},851:function(e,t,n){"use strict";n.d(t,{H:function(){return r}});var r=function(e){for(var t=e.slice(0,90).split(" "),n="";t.length>0;){var r=t.pop();if(r.match(/^[a-zA-Z]+$/g)){t.push(r),n=t.join(" ");break}}return n+"..."}},9915:function(e){e.exports={contentfulText:"contentful_contentfulText__fs1ou",contentfulHeading:"contentful_contentfulHeading__ql27f"}},9008:function(e,t,n){e.exports=n(5443)}},function(e){e.O(0,[917,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);