!function(){function e(e){e.querySelectorAll('[aria-expanded="true"]').forEach((function(e){e.setAttribute("aria-expanded","false")}))}function t(t){const n=t.target.closest("[aria-expanded]");if("true"===n.getAttribute("aria-expanded"))e(n.closest(".wp-block-navigation-item"));else{const t=n.closest(".wp-block-navigation-item");n.closest(".wp-block-navigation__submenu-container, .wp-block-navigation__container, .wp-block-page-list").querySelectorAll(".wp-block-navigation-item").forEach((function(n){n!==t&&e(n)})),n.setAttribute("aria-expanded","true")}}window.addEventListener("load",(()=>{document.querySelectorAll(".wp-block-navigation-submenu__toggle").forEach((function(e){e.addEventListener("click",t)})),document.addEventListener("click",(function(t){document.querySelectorAll(".wp-block-navigation").forEach((function(n){n.contains(t.target)||e(n)}))})),document.addEventListener("keyup",(function(t){document.querySelectorAll(".wp-block-navigation-item.has-child").forEach((function(n){if(n.contains(t.target)){if("Escape"===t.key){const t=n.querySelector('[aria-expanded="true"]');e(n),null==t||t.focus()}}else e(n)}))}))}))}();;
!function(){"use strict";function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function t(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}var n,i,a,r,s,l=(n=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'],i=function(){function o(e){var n=e.targetModal,i=e.triggers,a=void 0===i?[]:i,r=e.onShow,s=void 0===r?function(){}:r,l=e.onClose,c=void 0===l?function(){}:l,d=e.openTrigger,u=void 0===d?"data-micromodal-trigger":d,f=e.closeTrigger,h=void 0===f?"data-micromodal-close":f,v=e.openClass,g=void 0===v?"is-open":v,m=e.disableScroll,b=void 0!==m&&m,y=e.disableFocus,p=void 0!==y&&y,w=e.awaitCloseAnimation,k=void 0!==w&&w,E=e.awaitOpenAnimation,A=void 0!==E&&E,C=e.debugMode,L=void 0!==C&&C;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),this.modal=document.getElementById(n),this.config={debugMode:L,disableScroll:b,openTrigger:u,closeTrigger:h,openClass:g,onShow:s,onClose:c,awaitCloseAnimation:k,awaitOpenAnimation:A,disableFocus:p},a.length>0&&this.registerTriggers.apply(this,t(a)),this.onClick=this.onClick.bind(this),this.onKeydown=this.onKeydown.bind(this)}var i,a;return i=o,(a=[{key:"registerTriggers",value:function(){for(var e=this,t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];o.filter(Boolean).forEach((function(t){t.addEventListener("click",(function(t){return e.showModal(t)}))}))}},{key:"showModal",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(this.activeElement=document.activeElement,this.modal.setAttribute("aria-hidden","false"),this.modal.classList.add(this.config.openClass),this.scrollBehaviour("disable"),this.addEventListeners(),this.config.awaitOpenAnimation){var o=function t(){e.modal.removeEventListener("animationend",t,!1),e.setFocusToFirstNode()};this.modal.addEventListener("animationend",o,!1)}else this.setFocusToFirstNode();this.config.onShow(this.modal,this.activeElement,t)}},{key:"closeModal",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=this.modal;if(this.modal.setAttribute("aria-hidden","true"),this.removeEventListeners(),this.scrollBehaviour("enable"),this.activeElement&&this.activeElement.focus&&this.activeElement.focus(),this.config.onClose(this.modal,this.activeElement,e),this.config.awaitCloseAnimation){var o=this.config.openClass;this.modal.addEventListener("animationend",(function e(){t.classList.remove(o),t.removeEventListener("animationend",e,!1)}),!1)}else t.classList.remove(this.config.openClass)}},{key:"closeModalById",value:function(e){this.modal=document.getElementById(e),this.modal&&this.closeModal()}},{key:"scrollBehaviour",value:function(e){if(this.config.disableScroll){var t=document.querySelector("body");switch(e){case"enable":Object.assign(t.style,{overflow:""});break;case"disable":Object.assign(t.style,{overflow:"hidden"})}}}},{key:"addEventListeners",value:function(){this.modal.addEventListener("touchstart",this.onClick),this.modal.addEventListener("click",this.onClick),document.addEventListener("keydown",this.onKeydown)}},{key:"removeEventListeners",value:function(){this.modal.removeEventListener("touchstart",this.onClick),this.modal.removeEventListener("click",this.onClick),document.removeEventListener("keydown",this.onKeydown)}},{key:"onClick",value:function(e){(e.target.hasAttribute(this.config.closeTrigger)||e.target.parentNode.hasAttribute(this.config.closeTrigger))&&(e.preventDefault(),e.stopPropagation(),this.closeModal(e))}},{key:"onKeydown",value:function(e){27===e.keyCode&&this.closeModal(e),9===e.keyCode&&this.retainFocus(e)}},{key:"getFocusableNodes",value:function(){var e=this.modal.querySelectorAll(n);return Array.apply(void 0,t(e))}},{key:"setFocusToFirstNode",value:function(){var e=this;if(!this.config.disableFocus){var t=this.getFocusableNodes();if(0!==t.length){var o=t.filter((function(t){return!t.hasAttribute(e.config.closeTrigger)}));o.length>0&&o[0].focus(),0===o.length&&t[0].focus()}}}},{key:"retainFocus",value:function(e){var t=this.getFocusableNodes();if(0!==t.length)if(t=t.filter((function(e){return null!==e.offsetParent})),this.modal.contains(document.activeElement)){var o=t.indexOf(document.activeElement);e.shiftKey&&0===o&&(t[t.length-1].focus(),e.preventDefault()),!e.shiftKey&&t.length>0&&o===t.length-1&&(t[0].focus(),e.preventDefault())}else t[0].focus()}}])&&e(i.prototype,a),o}(),a=null,r=function(e){if(!document.getElementById(e))return console.warn("MicroModal: ❗Seems like you have missed %c'".concat(e,"'"),"background-color: #f8f9fa;color: #50596c;font-weight: bold;","ID somewhere in your code. Refer example below to resolve it."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<div class="modal" id="'.concat(e,'"></div>')),!1},s=function(e,t){if(function(e){e.length<=0&&(console.warn("MicroModal: ❗Please specify at least one %c'micromodal-trigger'","background-color: #f8f9fa;color: #50596c;font-weight: bold;","data attribute."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<a href="#" data-micromodal-trigger="my-modal"></a>'))}(e),!t)return!0;for(var o in t)r(o);return!0},{init:function(e){var o=Object.assign({},{openTrigger:"data-micromodal-trigger"},e),n=t(document.querySelectorAll("[".concat(o.openTrigger,"]"))),r=function(e,t){var o=[];return e.forEach((function(e){var n=e.attributes[t].value;void 0===o[n]&&(o[n]=[]),o[n].push(e)})),o}(n,o.openTrigger);if(!0!==o.debugMode||!1!==s(n,r))for(var l in r){var c=r[l];o.targetModal=l,o.triggers=t(c),a=new i(o)}},show:function(e,t){var o=t||{};o.targetModal=e,!0===o.debugMode&&!1===r(e)||(a&&a.removeEventListeners(),(a=new i(o)).showModal())},close:function(e){e?a.closeModalById(e):a.closeModal()}});"undefined"!=typeof window&&(window.MicroModal=l);var c=l;function d(e){const t=e.querySelector(".wp-block-navigation__responsive-dialog"),o="true"===e.getAttribute("aria-hidden");e.classList.toggle("has-modal-open",!o),t.toggleAttribute("aria-modal",!o),o?(t.removeAttribute("role"),t.removeAttribute("aria-modal")):(t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"));document.documentElement.classList.toggle("has-modal-open")}window.addEventListener("load",(()=>{c.init({onShow:d,onClose:d,openClass:"is-menu-open"});document.querySelectorAll(".wp-block-navigation-item__content").forEach((function(e){var t,o;if(null===(t=e.getAttribute("href"))||void 0===t||!t.startsWith("#")||"_blank"===(null===(o=e.attributes)||void 0===o?void 0:o.target))return;const n=e.closest(".wp-block-navigation__responsive-container"),i=null==n?void 0:n.getAttribute("id");e.addEventListener("click",(()=>{i&&n.classList.contains("has-modal-open")&&c.close(i)}))}))}))}();;
( function() {
		var skipLinkTarget = document.querySelector( 'main' ),
			sibling,
			skipLinkTargetID,
			skipLink;

		// Early exit if a skip-link target can't be located.
		if ( ! skipLinkTarget ) {
			return;
		}

		// Get the site wrapper.
		// The skip-link will be injected in the beginning of it.
		sibling = document.querySelector( '.wp-site-blocks' );

		// Early exit if the root element was not found.
		if ( ! sibling ) {
			return;
		}

		// Get the skip-link target's ID, and generate one if it doesn't exist.
		skipLinkTargetID = skipLinkTarget.id;
		if ( ! skipLinkTargetID ) {
			skipLinkTargetID = 'wp--skip-link--target';
			skipLinkTarget.id = skipLinkTargetID;
		}

		// Create the skip link.
		skipLink = document.createElement( 'a' );
		skipLink.classList.add( 'skip-link', 'screen-reader-text' );
		skipLink.href = '#' + skipLinkTargetID;
		skipLink.innerHTML = 'Skip to content';

		// Inject the skip link.
		sibling.parentElement.insertBefore( skipLink, sibling );
	}() );;
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
document.addEventListener("DOMContentLoaded",idempotentFn,!1);window.addEventListener("load",idempotentFn,!1)}})();lbwpsReady(function(){window.lbwpsPhotoSwipe=null;lbwpsInit(!1);let mutationObserver=null;if(typeof MutationObserver!=='undefined'){let mutationObserver=new MutationObserver(function(mutations){if(window.lbwpsPhotoSwipe===null){let nodesAdded=!1;for(let i=0;i<mutations.length;i++){if('childList'===mutations[i].type){nodesAdded=!0}};if(nodesAdded){lbwpsInit(!0)}}});mutationObserver.observe(document.querySelector('body'),{childList:!0,subtree:!0,attributes:!1})}})