!function(){"use strict";var a;a=()=>{const a=document.querySelectorAll(".wp-block-themeisle-blocks-progress-bar");Array.from(a).forEach(a=>{const i=1e3*a.dataset.duration,b=a.querySelector(".wp-block-themeisle-blocks-progress-bar__area__bar");let j=window.getComputedStyle(b).borderTopLeftRadius.replace("px","")||0;const e=a.querySelector(".wp-block-themeisle-blocks-progress-bar__number"),c=a.querySelector(".wp-block-themeisle-blocks-progress-bar__area__tooltip"),d=a.querySelector(".wp-block-themeisle-blocks-progress-bar__progress__append"),g=a.querySelector(".wp-block-themeisle-blocks-progress-bar__outer__title"),f=a.querySelector(".wp-block-themeisle-blocks-progress-bar__area__title");let h;g?h=g.getBoundingClientRect().width:f&&(h=f.getBoundingClientRect().width);const k=.5*window.getComputedStyle(b).height.replace("px","");if(c&&!g&&(c.style.opacity=1),0===i)b.style.width=`${parseInt(a.dataset.percent)}%`,e.innerHTML=`${parseInt(a.dataset.percent)}%`,b.style.opacity=1,c&&(c.style.opacity=1),d&&(d.style.opacity=1);else{e&&(e.innerText="0%"),f&&f.classList.contains("highlight")&&(j*=2);const l=new IntersectionObserver(m=>{m.forEach(m=>{if(m.isIntersecting){if(0>=m.intersectionRect.height)return b.style.width=`${parseInt(a.dataset.percent)}%`,e.innerHTML=`${parseInt(a.dataset.percent)}%`,b.style.opacity=1,c&&(c.style.opacity=1),d&&(d.style.opacity=1),void l.unobserve(b);let n;n&&clearInterval(n);const o=20,q=parseInt(a.dataset.percent),p=((a,b,c)=>{const e=[],d=typeof a,f=typeof b;if(0===c)throw TypeError("Step cannot be zero.");if(void 0===d||void 0===f)throw TypeError("Must pass start and end arguments.");if(d!==f)throw TypeError("Start and end arguments must be of same type.");if(void 0===typeof c&&(c=1),b<a&&(c=-c),"number"===d)for(;0<c?b>=a:b<=a;)e.push(a),a+=c;else{if("string"!==d)throw TypeError("Only string and number types are supported");if(1!==a.length||1!==b.length)throw TypeError("Only strings with one character are supported.");for(a=a.charCodeAt(0),b=b.charCodeAt(0);0<c?b>=a:b<=a;)e.push(String.fromCharCode(a)),a+=c}return e})(0,i,o).map(a=>a/i*q).reverse();n=setInterval(()=>{const i=p.pop();b.style.width=`${i}%`,e&&(e.innerText=`${Math.ceil(i)}%`);const a=b.getBoundingClientRect().width;a>j&&(b.style.opacity=1),c&&g&&a>h+10&&(c.style.opacity=1),d&&(f?a>h+1.5*k&&(d.style.opacity=1):a>1.8*k&&(d.style.opacity=1)),p.length||(l.unobserve(b),clearInterval(n))},o)}})},{root:null,rootMargin:"0px",threshold:[.6]});setTimeout(()=>l.observe(b),100)}})},"undefined"!=typeof document&&("complete"!==document.readyState&&"interactive"!==document.readyState?document.addEventListener("DOMContentLoaded",a):a())}();
import PhotoSwipeLightbox from './lib/photoswipe-lightbox.esm.min.js';import PhotoSwipeDynamicCaption from './dynamic-caption/photoswipe-dynamic-caption-plugin.esm.min.js';import PhotoSwipeAutoHideUI from './auto-hide-ui/photoswipe-auto-hide-ui.esm.min.js';import PhotoSwipeFullscreen from './fullscreen/photoswipe-fullscreen.esm.min.js';let lbwpsInit=function(domUpdate){if(!domUpdate){document.addEventListener('click',(event)=>{if(event.target.parentNode.getAttribute('data-lbwps-width')){event.preventDefault();openPhotoSwipe(!1,0,event.target.parentNode,!1,'');return}
let path=event.composedPath&&event.composedPath();if(!path){return}
let num=0;while(num<path.length){if(typeof path[num].getAttribute==='function'&&path[num].getAttribute('data-lbwps-width')){event.preventDefault();openPhotoSwipe(!1,0,path[num],!1,'');return}
num++}})}
let elementorCarouselWidgetList=document.querySelectorAll('div[class*="elementor-widget-image-carousel"]');for(let i=0;i<elementorCarouselWidgetList.length;i++){let widgetId=elementorCarouselWidgetList[i].getAttribute('data-lbwps-gid');if(widgetId!=null){if(elementorCarouselWidgetList[i].firstElementChild!=null&&elementorCarouselWidgetList[i].firstElementChild.firstElementChild!=null&&elementorCarouselWidgetList[i].firstElementChild.firstElementChild.firstElementChild!=null&&elementorCarouselWidgetList[i].firstElementChild.firstElementChild.firstElementChild.firstElementChild!=null){let imageBlock=elementorCarouselWidgetList[i].firstElementChild.firstElementChild.firstElementChild.firstElementChild;while(imageBlock!=null){if(imageBlock.classList.contains('swiper-slide')&&!imageBlock.classList.contains('swiper-slide-duplicate')){let imageLink=imageBlock.firstElementChild;if(imageLink!=null&&imageLink.nodeName==='A'&&imageLink.getAttribute('data-lbwps-gid')==null){imageLink.setAttribute('data-lbwps-gid',widgetId)}}
imageBlock=imageBlock.nextElementSibling}}}}
let elementorImageWidgetList=document.querySelectorAll('div[class*="elementor-widget-image"]');for(let i=0;i<elementorImageWidgetList.length;i++){let widgetId=elementorImageWidgetList[i].getAttribute('data-lbwps-gid');if(widgetId!=null){if(elementorImageWidgetList[i].firstElementChild!=null&&elementorImageWidgetList[i].firstElementChild.firstElementChild!=null){let imageLink=elementorImageWidgetList[i].firstElementChild.firstElementChild;if(imageLink!=null&&imageLink.nodeName=='A'&&imageLink.getAttribute('data-lbwps-gid')==null){imageLink.setAttribute('data-lbwps-gid',widgetId)}}}}
let originalBodyPaddingRight='';let originalBodyOverflow='';let hideScrollbar=function(){const scrollbarWidth=window.innerWidth-document.body.offsetWidth;originalBodyPaddingRight=document.body.style.paddingRight;originalBodyOverflow=document.body.style.overflow;document.body.style.paddingRight=scrollbarWidth+'px';document.body.style.overflow='hidden'};let showScrollbar=function(){document.body.style.paddingRight=originalBodyPaddingRight;document.body.style.overflow=originalBodyOverflow};let parseThumbnailElements=function(link,id){let elements,galleryItems=[],index;if(id==null||id==1){elements=document.querySelectorAll('a[data-lbwps-width]:not([data-lbwps-gid])')}else{elements=document.querySelectorAll('a[data-lbwps-width][data-lbwps-gid="'+id+'"]')}
for(let i=0;i<elements.length;i++){let element=elements[i];let useImage=!0;let linkHref=element.getAttribute('href');for(let j=0;j<galleryItems.length;j++){if(galleryItems[j].src==linkHref){useImage=!1}}
if(useImage){let caption=null;let title=null;let tabindex=element.getAttribute('tabindex');if(tabindex==null){tabindex=0}
caption=element.getAttribute('data-lbwps-caption');if(caption==null&&element.firstElementChild){let describedby=element.firstElementChild.getAttribute('aria-describedby');if(describedby!=null){let description=document.getElementById(describedby);if(description!=null)caption=description.innerHTML}}
if(caption==null){let nextElement=element.nextElementSibling;let parentElement=element.parentElement.nextElementSibling;let parentElement2=element.parentElement.parentElement.nextElementSibling;let parentElement3=element.parentElement.parentElement.parentElement.nextElementSibling;if(nextElement!=null){if(nextElement.className==='.wp-caption-text'){caption=nextElement.innerHTML}else if(nextElement&&nextElement.nodeName==="FIGCAPTION"){caption=nextElement.innerHTML}}else if(parentElement!=null){if(parentElement.className==='.wp-caption-text'){caption=parentElement.innerHTML}else if(parentElement.className==='.gallery-caption'){caption=parentElement.innerHTML}else if(parentElement.nextElementSibling&&parentElement.nextElementSibling.nodeName==="FIGCAPTION"){caption=parentElement.nextElementSibling.innerHTML}}else if(parentElement2&&parentElement2.nodeName==="FIGCAPTION"){caption=parentElement2.innerHTML}else if(parentElement3&&parentElement3.nodeName==="FIGCAPTION"){caption=parentElement3.innerHTML}}
if(caption==null){caption=element.getAttribute('title')}
title='';if(element.getAttribute('data-lbwps-title')!=null&&element.getAttribute('data-lbwps-title')!=''){title=title+'<div class="pswp__caption__title">'+element.getAttribute('data-lbwps-title')+'</div>'}
if(lbwpsOptions.usecaption==='1'&&caption!=null&&caption!=''){title=title+'<div class="pswp__caption__text">'+caption+'</div>'}
if(lbwpsOptions.use_alt==='1'&&element.firstElementChild&&element.firstElementChild.getAttribute('alt')){title=title+'<div class="pswp__caption__alt">'+element.firstElementChild.getAttribute('alt')+'</div>'}
if(element.getAttribute('data-lbwps-description')!=null){title=title+'<div class="pswp__caption__desc">'+element.getAttribute('data-lbwps-description')+'</div>'}
let msrc=element.getAttribute('href');if(element.getAttribute('data-lbwps-srcsmall')){msrc=element.getAttribute('data-lbwps-srcsmall')}
let exif=element.getAttribute('data-lbwps-exif');if(!exif){exif=''}
galleryItems.push({src:element.getAttribute('href'),msrc:msrc,width:element.getAttribute('data-lbwps-width'),height:element.getAttribute('data-lbwps-height'),title:title,exif:exif,el:element,tabindex:tabindex})}}
galleryItems.sort(function(a,b){let indexa=parseInt(a.tabindex);let indexb=parseInt(b.tabindex);if(indexa>indexb){return 1}
if(indexa<indexb){return-1}
return 0});if(link!=null){for(let i=0;i<galleryItems.length;i++){if(galleryItems[i].el.getAttribute('href')===link.getAttribute('href')){index=i}}}
return[galleryItems,parseInt(index,10)]};let photoswipeParseHash=function(){let hash=window.location.hash.substring(1),params={};if(hash.length<5){return params}
let vars=hash.split('&');for(let i=0;i<vars.length;i++){if(!vars[i]){continue}
let pair=vars[i].split('=');if(pair.length<2){continue}
params[pair[0]]=pair[1]}
if(params.gid){params.gid=parseInt(params.gid,10)}
return params};let openPhotoSwipe=function(element_index,group_index,element,fromURL,returnToUrl){let id=1,items,index;if(element!=null){id=element.getAttribute('data-lbwps-gid')}else{id=group_index}
items=parseThumbnailElements(element,id);if(element_index===!1){index=items[1]}else{index=element_index}
items=items[0];const options={dataSource:items,bgOpacity:1,showHideAnimationType:'fade',showAnimationDuration:250,hideAnimationDuration:250,closeTitle:lbwpsOptions.label_ui_close,zoomTitle:lbwpsOptions.label_ui_zoom,arrowPrevTitle:lbwpsOptions.label_ui_prev,arrowNextTitle:lbwpsOptions.label_ui_next,errorMsg:lbwpsOptions.label_ui_error,pswpModule:()=>import('./lib/photoswipe.esm.min.js'),}
options.spacing=lbwpsOptions.spacing/100;options.loop=lbwpsOptions.loop==='1';options.wheelToZoom=lbwpsOptions.wheelmode==='zoom';options.pinchToClose=lbwpsOptions.pinchtoclose==='1';options.closeOnVerticalDrag=lbwpsOptions.close_on_drag==='1';options.clickToCloseNonZoomable=!0;const lightbox=new PhotoSwipeLightbox(options);lightbox.on('destroy',()=>{const pswpElements=document.getElementsByClassName('pswp__scroll-wrap');if(lbwpsOptions.hide_scrollbars==='1'){showScrollbar()}
if(element){element.focus()}});if(lbwpsOptions.show_fullscreen==='1'){const fullscreenPlugin=new PhotoSwipeFullscreen(lightbox,{fullscreenTitle:lbwpsOptions.label_ui_fullscreen})}
if(lbwpsOptions.show_caption==='1'){const captionPlugin=new PhotoSwipeDynamicCaption(lightbox,{type:lbwpsOptions.caption_type,captionContent:(slide)=>{let caption='';if(slide.data.title&&slide.data.title!==''){caption=caption+'<div class="pswp__caption">'+slide.data.title+'</div>'}
if(slide.data.exif&&slide.data.exif!==''){caption=caption+'<div class="pswp__caption__exif">'+slide.data.exif+'</div>'}
return caption},mobileLayoutBreakpoint:function(){if(this.options.type!=='overlay'){return window.innerWidth<600}}})}
if(lbwpsOptions.idletime>0){const autoHideUI=new PhotoSwipeAutoHideUI(lightbox,{idleTime:lbwpsOptions.idletime})}
lightbox.init();if(lbwpsOptions.hide_scrollbars==='1'){hideScrollbar()}
lightbox.loadAndOpen(index)};window.lbwpsCopyToClipboard=function(str){const el=document.createElement('textarea');el.value=str;el.setAttribute('readonly','');el.style.position='absolute';el.style.left='-9999px';document.body.appendChild(el);const selected=document.getSelection().rangeCount>0?document.getSelection().getRangeAt(0):!1;el.select();document.execCommand('copy');document.body.removeChild(el);if(selected){document.getSelection().removeAllRanges();document.getSelection().addRange(selected)}}
let hashData=photoswipeParseHash();if(hashData.pid&&hashData.gid){let elements;if(hashData.gid==1){elements=document.querySelectorAll('a[data-lbwps-width]:not([data-lbwps-gid])')}else{elements=document.querySelectorAll('a[data-lbwps-width][data-lbwps-gid="'+hashData.gid+'"]')}
history.replaceState(null,null,' ');elements[hashData.pid-1].click()}}
let lbwpsReady=(function(){let readyEventFired=!1;return function(fn){let idempotentFn=function(){if(readyEventFired){return}
readyEventFired=!0;return fn()}
if(document.readyState==="complete"){return idempotentFn()}
document.addEventListener("DOMContentLoaded",idempotentFn,!1);window.addEventListener("load",idempotentFn,!1)}})();lbwpsReady(function(){window.lbwpsPhotoSwipe=null;lbwpsInit(!1);let mutationObserver=null;if(typeof MutationObserver!=='undefined'){let mutationObserver=new MutationObserver(function(mutations){if(window.lbwpsPhotoSwipe===null){let nodesAdded=!1;for(let i=0;i<mutations.length;i++){if('childList'===mutations[i].type){nodesAdded=!0}};if(nodesAdded){lbwpsInit(!0)}}});mutationObserver.observe(document.querySelector('body'),{childList:!0,subtree:!0,attributes:!1})}});
!function(){"use strict";const c=(a,b,c)=>{(a instanceof NodeList?a:[a]).forEach(a=>a.addEventListener(b,b=>c(b,a)))},j=(a,b)=>{h(a,b,"toggle")},f=(a,b)=>{h(a,b,"add")},d=(a,b)=>{h(a,b,"remove")},h=(a,b,c)=>{const d=b.split(" ");(a instanceof NodeList?a:[a]).forEach(a=>a.classList[c].apply(a.classList,d))};let g=null,i=2;const x=()=>{const{masonryStatus:b,masonryColumns:c,blogLayout:a}=NeveProperties;"enabled"!==b||c<2||(g=document.querySelector(".nv-index-posts .posts-wrapper"),null!==g&&imagesLoaded(g,()=>{window.nvMasonry=new Masonry(g,{itemSelector:"article.layout-".concat(a),columnWidth:"article.layout-".concat(a),percentPosition:!0})}))},w=()=>{"enabled"===NeveProperties.infScroll&&null!==document.querySelector(".nv-index-posts .posts-wrapper")&&((a,b,c=.5)=>{if(!a)return;new IntersectionObserver(d=>{if(d[0].intersectionRatio<=c)return;b();const e=setInterval(()=>{const c=a.getBoundingClientRect(),{top:d,left:f,right:g,bottom:h}=c,{innerWidth:i,innerHeight:j}=window;d>=0&&f>=0&&g<=i&&h<=j?b():clearInterval(e)},750)}).observe(a)})(document.querySelector(".infinite-scroll-trigger"),()=>{if(parent&&parent.wp&&parent.wp.customize)return parent.wp.customize.requestChangesetUpdate().then(()=>{q()}),!1;q()})},q=()=>{const a=document.querySelector(".infinite-scroll-trigger");if(null===a)return;if(document.querySelector(".nv-loader").style.display="block",i>NeveProperties.maxPages)return a.parentNode.removeChild(a),void(document.querySelector(".nv-loader").style.display="none");const d=document.querySelector(".nv-index-posts .posts-wrapper"),b=NeveProperties.lang,c=NeveProperties.endpoint+i,e=v(b?c+"/"+b:c);i++,((b,c,d)=>{const a=new XMLHttpRequest;a.onload=()=>{4===a.readyState&&200===a.status&&c(a.response)},a.onerror=()=>{},a.open("POST",b,!0),a.setRequestHeader("Content-Type","application/json; charset=UTF-8"),a.send(d)})(e,a=>{if(d.innerHTML+=JSON.parse(a),"enabled"!==NeveProperties.masonryStatus)return!1;window.nvMasonry.reloadItems(),window.nvMasonry.layout()},NeveProperties.query)},v=a=>"undefined"==typeof wp||void 0===wp.customize?a:(a+="?customize_changeset_uuid="+wp.customize.settings.changeset.uuid+"&customize_autosaved=on","undefined"==typeof _wpCustomizeSettings?a:a+="&customize_preview_nonce="+_wpCustomizeSettings.nonce.preview),b=["dropdown-open","active","nav-clickaway-overlay"],A=()=>{s(),document.addEventListener("click",function(a){a.target.hash&&a.target.hash.includes("#")&&window.HFG.toggleMenuSidebar(!1)}),o(),m(),p(),window.HFG.initSearch=function(){m(),o()}},s=()=>{const{isRTL:a}=NeveProperties,b=document.querySelectorAll(".sub-menu, .minimal .nv-nav-search")||[];if(0===b.length)return;const c=window.innerWidth;b.forEach(b=>{const d=b.getBoundingClientRect(),e=d.left;e<0&&(b.style.right=a?"-100%":"auto",b.style.left=a?"auto":0),e+d.width>=c&&(b.style.right=a?0:"100%",b.style.left="auto")}),"undefined"!=typeof menuCalcEvent&&window.dispatchEvent(menuCalcEvent)};function o(){const a=document.querySelectorAll(".caret-wrap");c(a,"click",u)}function u(a,c){a.preventDefault(),a.stopPropagation();const d=c.parentNode.parentNode.querySelector(".sub-menu");j(c,b[0]),j(d,b[0]),n(document.querySelectorAll(".".concat(b[0])),b[0])}let a={};function r(b){const c=a.elements||function(b=document){return a.elements=[...b.querySelectorAll('a[href], button, input, textarea, select, details,[tabindex]:not([tabindex="-1"])')].filter(a=>!a.hasAttribute("disabled")&&!a.getAttribute("aria-hidden")),a.elements}(a.container),d=9===b.keyCode,g=b.shiftKey,i=27===b.keyCode,h=document.activeElement,e=c[c.length-1],f=c[0];i&&(b.preventDefault(),a.container.querySelector(a.close).click(),a.backFocus.focus(),document.dispatchEvent(new CustomEvent("nv-focus-trap-end"))),!g&&d&&e===h&&(b.preventDefault(),f.focus()),g&&d&&f===h&&(b.preventDefault(),e.focus()),d&&f===e&&b.preventDefault()}function m(){const e=document.querySelectorAll(".nv-nav-search")||[],a=document.querySelectorAll(".menu-item-nav-search")||[],f=document.querySelectorAll(".close-responsive-search")||[];c(a,"click",(c,a)=>{c.preventDefault(),c.stopPropagation(),j(a,b[1]),n(a,b[1]),document.dispatchEvent(new CustomEvent("nv-focus-trap-start",{detail:{container:a.querySelector(".nv-nav-search"),close:".close-responsive-search",firstFocus:".search-field",backFocus:a}}))}),c(e,"click",a=>{a.stopPropagation()}),c(f,"click",e=>{e.preventDefault(),d(a,b[1]);const c=document.querySelector(".".concat(b[2]));null!==c&&c.parentNode.removeChild(c)})}function p(){const a=document.querySelector(".header--row .menu-item-nav-cart");if(null===a)return;const b=a.querySelector(".nv-nav-cart:not(.cart-off-canvas)");null!==b&&(b.style.left=a.getBoundingClientRect().left<350?0:null)}function n(e,g){let a=document.querySelector(".".concat(b[2]));null!==a&&a.parentNode.removeChild(a),a=document.createElement("div"),f(a,b[2]);const c=document.querySelector("header.header");c.parentNode.insertBefore(a,c),a.addEventListener("click",()=>{d(e,g),a.parentNode.removeChild(a)})}document.addEventListener("nv-focus-trap-start",function(b){a=b.detail,setTimeout(()=>{a.container.querySelector(a.firstFocus).focus()},100),document.addEventListener("keydown",r)}),document.addEventListener("nv-focus-trap-end",function(){a={},document.removeEventListener("keydown",r)}),window.addEventListener("resize",p);const l=".close-sidebar-panel .navbar-toggle",k=function(){this.options={menuToggleDuration:300},this.init()},e=(a,b=!0)=>{a.forEach(function(a){b?a.setAttribute("aria-hidden","true"):a.removeAttribute("aria-hidden")})};function y(){window.HFG=new k,(()=>{if(null===document.querySelector(".blog.nv-index-posts"))return!1;x(),w()})(),A()}function z(){s()}let t;k.prototype.init=function(b=!1){if(!1===b){const a=document.querySelectorAll(l);c(a,"click",()=>{this.toggleMenuSidebar(!1)})}const d=document.querySelectorAll(".menu-mobile-toggle");c(d,"click",a=>{this.toggleMenuSidebar(!0,a.target)});const a=document.querySelector(".header-menu-sidebar-overlay");a&&c(a,"click",function(){this.toggleMenuSidebar(!1)}.bind(this))},k.prototype.toggleMenuSidebar=function(h,a=null){const b=document.querySelectorAll(".menu-mobile-toggle");d(document.body,"hiding-header-menu-sidebar");const c=document.querySelectorAll("#header-menu-sidebar, .hfg-ov"),g=document.querySelectorAll(".neve-skip-link, #content, .scroll-to-top, #site-footer, .header--row");if(!NeveProperties.isCustomize&&document.body.classList.contains("is-menu-sidebar")||!1===h){const a=document.querySelector(".nav-clickaway-overlay");null!==a&&a.parentNode.removeChild(a),f(document.body,"hiding-header-menu-sidebar"),d(document.body,"is-menu-sidebar"),d(b,"is-active"),setTimeout(function(){d(document.body,"hiding-header-menu-sidebar")}.bind(this),1e3),e(g,!1),e(c)}else f(document.body,"is-menu-sidebar"),f(b,"is-active"),a&&document.dispatchEvent(new CustomEvent("nv-focus-trap-start",{detail:{container:document.getElementById("header-menu-sidebar"),close:l,firstFocus:l,backFocus:a}})),e(c,!1),e(g)},window.addEventListener("load",()=>{y()}),window.addEventListener("resize",()=>{clearTimeout(t),t=setTimeout(z,500)})}();
var html = document.documentElement;
	var theme = html.getAttribute('data-neve-theme') || 'light';
	var variants = {"logo":{"light":{"src":"http:\/\/joshcoast.com\/wp-content\/uploads\/2021\/06\/logo-portfolio_v2.svg","srcset":false,"sizes":""},"dark":{"src":"http:\/\/joshcoast.com\/wp-content\/uploads\/2021\/06\/logo-portfolio_v2.svg","srcset":false,"sizes":""},"same":true}};

	function setCurrentTheme( theme ) {
		var pictures = document.getElementsByClassName( 'neve-site-logo' );
		for(var i = 0; i<pictures.length; i++) {
			var picture = pictures.item(i);
			if( ! picture ) {
				continue;
			};
			var fileExt = picture.src.slice((Math.max(0, picture.src.lastIndexOf(".")) || Infinity) + 1);
			if ( fileExt === 'svg' ) {
				picture.removeAttribute('width');
				picture.removeAttribute('height');
				picture.style = 'width: var(--maxwidth)';
			}
			var compId = picture.getAttribute('data-variant');
			if ( compId && variants[compId] ) {
				var isConditional = variants[compId]['same'];
				if ( theme === 'light' || isConditional || variants[compId]['dark']['src'] === false ) {
					picture.src = variants[compId]['light']['src'];
					picture.srcset = variants[compId]['light']['srcset'] || '';
					picture.sizes = variants[compId]['light']['sizes'];
					continue;
				};
				picture.src = variants[compId]['dark']['src'];
				picture.srcset = variants[compId]['dark']['srcset'] || '';
				picture.sizes = variants[compId]['dark']['sizes'];
			};
		};
	};

	var observer = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			if (mutation.type == 'attributes') {
				theme = html.getAttribute('data-neve-theme');
				setCurrentTheme(theme);
			};
		});
	});

	observer.observe(html, {
		attributes: true
	});;
!function(){const t=["none","bounce","flash","pulse","rubberBand","shakeX","shakeY","headShake","swing","tada","wobble","jello","heartBeat","hinge","jackInTheBox","backInDown","backInLeft","backInRight","backInUp","backOutDown","backOutLeft","backOutRight","backOutUp","bounceIn","bounceInDown","bounceInLeft","bounceInRight","bounceInUp","bounceOut","bounceOutDown","bounceOutLeft","bounceOutRight","bounceOutUp","fadeIn","fadeInDown","fadeInDownBig","fadeInLeft","fadeInLeftBig","fadeInRight","fadeInRightBig","fadeInUp","fadeInTopLeft","fadeInTopRight","fadeInBottomLeft","fadeInBottomRight","fadeOut","fadeOutDown","fadeOutDownBig","fadeOutLeft","fadeOutLeftBig","fadeOutRight","fadeOutRightBig","fadeOutUp","fadeOutUpBig","fadeOutTopLeft","fadeOutTopRight","fadeOutBottomRight","fadeOutBottomLeft","flip","flipInX","flipInY","flipOutX","flipOutY","lightSpeedInRight","lightSpeedInLeft","lightSpeedOutRight","lightSpeedOutLeft","rotateIn","rotateInDownLeft","rotateInDownRight","rotateInUpLeft","rotateInUpRight","rotateOut","rotateOutDownLeft","rotateOutDownRight","rotateOutUpLeft","rotateOutUpRight","slideInDown","slideInLeft","slideInRight","slideInUp","slideOutDown","slideOutLeft","slideOutRight","slideOutUp","zoomIn","zoomInDown","zoomInLeft","zoomInRight","zoomInUp","zoomOut","zoomOutDown","zoomOutLeft","zoomOutRight","zoomOutUp","rollIn","rollOut"],e=["backOutDown","backOutLeft","backOutRight","backOutUp","bounceOut","bounceOutDown","bounceOutLeft","bounceOutRight","bounceOutUp","fadeOut","fadeOutDown","fadeOutDownBig","fadeOutLeft","fadeOutLeftBig","fadeOutRight","fadeOutRightBig","fadeOutUp","fadeOutUpBig","fadeOutTopLeft","fadeOutTopRight","fadeOutBottomRight","fadeOutBottomLeft","flipOutX","flipOutY","lightSpeedOutRight","lightSpeedOutLeft","rotateOut","rotateOutDownLeft","rotateOutDownRight","rotateOutUpLeft","rotateOutUpRight","slideOutDown","slideOutLeft","slideOutRight","slideOutUp","zoomOut","zoomOutDown","zoomOutLeft","zoomOutRight","zoomOutUp","rollOut"],o=["none","delay-100ms","delay-200ms","delay-500ms","delay-1s","delay-2s","delay-3s","delay-4s","delay-5s"],n=["none","slow","slower","fast","faster"];window.addEventListener("load",(()=>{const i=document.querySelectorAll(".animated");for(const s of i){if(classes=s.classList,s.animationClasses=[],classes.add("o-anim-ready"),!a(s)){const e=t.find((t=>Array.from(classes).find((e=>e===t)))),a=o.find((t=>Array.from(classes).find((e=>e===t)))),i=n.find((t=>Array.from(classes).find((e=>e===t))));s.classList.add("hidden-animated"),e&&(s.animationClasses.push(e),s.classList.remove(e)),a&&(s.animationClasses.push(a),s.classList.remove(a)),i&&(s.animationClasses.push(i),s.classList.remove(i))}e.forEach((t=>{s.className.includes(t)&&s.addEventListener("animationend",(()=>{s.classList.remove(t)}))}))}window.addEventListener("scroll",(()=>{for(const t of i)t.getBoundingClientRect().top<=.95*window.innerHeight&&0<t.getBoundingClientRect().top&&t.animationClasses&&0<t.animationClasses.length&&(t.animationClasses.forEach((e=>t.classList.add(e))),t.classList.remove("hidden-animated"),delete t.animationClasses)}))}));const a=t=>{const e=window.scrollY||window.pageYOffset,o=t.getBoundingClientRect().top+e,n=e,a=e+window.innerHeight,i=o,s=o+t.clientHeight;return s>=n&&s<=a||i<=a&&i>=n}}();