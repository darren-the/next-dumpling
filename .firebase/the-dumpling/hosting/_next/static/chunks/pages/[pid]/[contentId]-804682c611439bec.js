(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[194],{3544:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[pid]/[contentId]",function(){return n(8956)}])},7504:function(e,t,n){"use strict";var s=n(5893),a=function(e){var t=new Date(e.published),n="".concat(new Intl.DateTimeFormat("en-US",{month:"short"}).format(t)," ").concat(t.getDate(),", ").concat(t.getFullYear());return(0,s.jsxs)("div",{className:"grid grid-cols-2",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"inline font-jakarta-medium text-custom-darkgray",children:"By "}),(0,s.jsx)("p",{className:"inline font-jakarta-bold text-black",children:e.author})]}),(0,s.jsx)("p",{className:"font-jakarta-medium text-sm text-custom-darkgray text-right",children:n})]})};t.Z=a,a.defaultProps={author:"Anonymous",published:"2022-01-01"}},14:function(e,t,n){"use strict";var s=n(5893),a=n(851),i=n(8568),r=n(7504),c=function(e){var t=e.borderBottom,n=e.content;return(0,s.jsx)("div",{className:"flex flex-row items-center self-center mb-6 ".concat(t?"bottom-border":""),children:(0,s.jsxs)("div",{className:"flex flex-col justify-center basis-60 grow",children:[(0,s.jsx)(i.Z,{className:"min-h-4",contentType:n.contentType,tag:n.tag}),(0,s.jsx)("h2",{className:"base-extrabold-text my-[0.2em]",children:n.title}),(0,s.jsx)("p",{className:"mb-[6px] text-medium-sm-darkgray",children:(0,a.H)(n.description)}),(0,s.jsx)("div",{className:"",children:(0,s.jsx)(r.Z,{author:n.author,published:n.published})})]})})};t.Z=c},4683:function(e,t,n){"use strict";var s=n(5893),a=n(5675),i=n.n(a),r=function(e){var t=e.contentType,n={news:{heading:"Latest Stories",subheading:"Dig into the top trending bao-sized stories"},interviews:{heading:"Interviews",subheading:"Learn more about the humans of web3"},rss:{heading:"More Stories",subheading:"Find more stories on what's happening"}};return(0,s.jsxs)("div",{className:"mb-8",children:[(0,s.jsxs)("div",{className:"flex relative",children:[(0,s.jsx)("h1",{className:"mr-[10px] heading-extrabold",children:n[t].heading}),(0,s.jsx)(i(),{src:"/assets/home-arrow-icon.svg",alt:"home arrow icon",width:20,height:28})]}),(0,s.jsx)("p",{className:"base-medium-text",children:n[t].subheading})]})};t.Z=r},8568:function(e,t,n){"use strict";var s=n(5893),a=function(e){var t=e.contentType,n=e.tag,a=e.className,i=t.charAt(0).toUpperCase()+t.slice(1);return(0,s.jsx)("p",{className:"text-xs font-jakarta-bold text-custom-blue ".concat(a),children:"".concat(i," > ").concat(n)})};t.Z=a,a.defaultProps={contentType:"INSERT CONTENT TYPE",tag:"INSERT TAG",className:""}},5154:function(e,t,n){"use strict";n.d(t,{d:function(){return x}});var s,a,i=n(4924),r=n(5893),c=n(6437),l=n(9512),o=n(9915),d=n.n(o),u=n(5675),h=n.n(u),m=function(e){if(e&&e.length>0&&"string"==typeof e[0]&&e[0].match(/https:\/\/twitter\.com/g)){var t=e[0].replace(/https:\/\/twitter\.com\/(.*)status\//g,"");if(!t.match(/[0-9]/g)){console.log("tweet id is invalid");return}return(0,r.jsx)("div",{className:"centering",children:(0,r.jsx)("div",{className:"h-[fit-content] max-w-lg w-full flex flex-col mb-10 self-center",children:(0,r.jsx)(l.iD,{tweetId:t})})})}return(0,r.jsx)("p",{className:d().contentfulText,children:e})},x={renderMark:(s={},(0,i.Z)(s,c.MARKS.BOLD,function(e){return(0,r.jsx)("b",{className:"font-jakarta-bold inline",children:e})}),(0,i.Z)(s,c.MARKS.UNDERLINE,function(e){return(0,r.jsx)("u",{className:"decoration-solid decoration-1 inline",children:e})}),s),renderNode:(a={},(0,i.Z)(a,c.BLOCKS.PARAGRAPH,function(e,t){return m(t)}),(0,i.Z)(a,c.BLOCKS.HEADING_1,function(e,t){return(0,r.jsx)("h1",{className:"".concat(d().contentfulHeading," leading-[2.7rem]"),children:t})}),(0,i.Z)(a,c.BLOCKS.HEADING_2,function(e,t){return(0,r.jsx)("h2",{className:"".concat(d().contentfulHeading," leading-[2.2rem]"),children:t})}),(0,i.Z)(a,c.BLOCKS.HEADING_3,function(e,t){return(0,r.jsx)("h3",{className:"".concat(d().contentfulHeading," leading-[1.87rem]"),children:t})}),(0,i.Z)(a,c.BLOCKS.HEADING_4,function(e,t){return(0,r.jsx)("h4",{className:"".concat(d().contentfulHeading," leading-[1.7rem]"),children:t})}),(0,i.Z)(a,c.BLOCKS.HEADING_5,function(e,t){return(0,r.jsx)("h5",{className:"".concat(d().contentfulHeading," leading-[1.5rem]"),children:t})}),(0,i.Z)(a,c.BLOCKS.HEADING_6,function(e,t){return(0,r.jsx)("h6",{className:"".concat(d().contentfulHeading," leading-[1.35rem]"),children:t})}),(0,i.Z)(a,c.BLOCKS.UL_LIST,function(e,t){return(0,r.jsx)("ul",{className:"ml-5 list-disc",children:t})}),(0,i.Z)(a,c.BLOCKS.LIST_ITEM,function(e,t){return(0,r.jsx)("li",{className:"mt-0 ml-[2.5rem] inline leading-[1.8rem]",children:t})}),(0,i.Z)(a,c.BLOCKS.EMBEDDED_ASSET,function(e,t){var n=e.data.target.fields;return(0,r.jsx)("div",{className:"flex w-fit self-center",children:(0,r.jsx)(h(),{src:"https://".concat(n.file.url),alt:n.description,height:n.file.details.image.height,width:n.file.details.image.width})})}),(0,i.Z)(a,c.INLINES.HYPERLINK,function(e,t){var n=e.data;return(0,r.jsx)("a",{href:n.uri,className:"font-jakarta-bold inline decoration-solid decoration-1 decoration-custom-blue text-custom-blue",children:t})}),a)}},8956:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return x}});var s=n(5893),a=n(7504),i=n(8568),r=n(5675),c=n.n(r),l=n(4129),o=n(5154),d=n(2442),u=n(4683),h=n(14),m=function(e){var t=e.contentJSON,n=e.RSS,r=JSON.parse(t);r.body=(0,l.h)(r.body,o.d);var m=n&&n.length>0?n.slice(0,4).map(function(e,t){return(0,s.jsx)("a",{href:e.link,className:"max-w-[385px]",children:(0,s.jsx)(h.Z,{content:e})},t)}):null;return(0,s.jsxs)("div",{className:"grid grid-areas-content grid-cols-content",children:[(0,s.jsxs)("div",{className:"grid-in-content-outer p-8 flex flex-col justify-center max-w-[865px]",children:[(0,s.jsxs)("div",{className:"flex flex-col mb-8",children:[(0,s.jsx)(i.Z,{contentType:r.contentType,tag:r.tag}),(0,s.jsxs)("div",{className:"flex flex-col w-full mb-8 self-center",children:[(0,s.jsx)("h1",{className:"heading-extrabold mt-[10px]",children:r.title}),(0,s.jsx)("p",{className:"base-medium-text mb-[10px]",children:r.description}),(0,s.jsx)(a.Z,{author:r.author,published:r.published})]}),(0,s.jsx)("div",{className:"flex self-center image-wrapper",children:(0,s.jsx)(c(),{src:r.banner.url,alt:"content banner",height:r.banner.height,width:r.banner.width})}),(0,s.jsx)("div",{className:"flex flex-col",children:r.body})]}),(0,s.jsx)("div",{className:"bg-custom-blue p-8 rounded-md flex justify-center",children:(0,s.jsxs)("div",{className:"max-w-[550px] flex flex-col items-center",children:[(0,s.jsx)("h1",{className:"heading-extrabold text-white text-center",children:"Stay on top of the space, get the hottest degen news in your inbox."}),(0,s.jsx)("div",{className:"mt-4 h-[52px] max-w-[265px] w-full",children:(0,s.jsx)(d.Z,{href:"https://dumpling.beehiiv.com/"})})]})})]}),(0,s.jsx)("div",{className:"grid-in-content-rec bg-white w-full flex justify-center",children:(0,s.jsxs)("div",{className:"p-5",children:[(0,s.jsx)(u.Z,{contentType:"rss"}),(0,s.jsx)("div",{className:"flex flex-col md:grid md:grid-cols-2-auto md:grid-rows-2-auto md:gap-x-8",children:m})]})}),(0,s.jsx)("div",{className:"grid-in-content-side left-border"})]})},x=!0;t.default=m},851:function(e,t,n){"use strict";n.d(t,{H:function(){return s}});var s=function(e){for(var t=e.slice(0,90).split(" "),n="";t.length>0;){var s=t.pop();if(s.match(/^[a-zA-Z]+$/g)){t.push(s),n=t.join(" ");break}}return n+"..."}},9915:function(e){e.exports={contentfulText:"contentful_contentfulText__fs1ou",contentfulHeading:"contentful_contentfulHeading__ql27f"}}},function(e){e.O(0,[917,774,888,179],function(){return e(e.s=3544)}),_N_E=e.O()}]);