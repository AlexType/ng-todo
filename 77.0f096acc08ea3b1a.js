"use strict";(self.webpackChunkng_todo=self.webpackChunkng_todo||[]).push([[77],{3077:(se,k,u)=>{u.r(k),u.d(k,{AuthorizationModule:()=>ne});var p=u(9808),g=u(845),e=u(5e3),r=u(5730),m=u(1424),_=u(2382);const E=["input"],P={provide:_.JU,useExisting:(0,e.Gpc)(()=>v),multi:!0};let v=(()=>{class s{constructor(t,i){this.el=t,this.cd=i,this.type="text",this.slotChar="_",this.autoClear=!0,this.characterPattern="[A-Za-z]",this.onComplete=new e.vpe,this.onFocus=new e.vpe,this.onBlur=new e.vpe,this.onInput=new e.vpe,this.onKeydown=new e.vpe,this.onModelChange=()=>{},this.onModelTouched=()=>{}}ngOnInit(){let t=r.p.getUserAgent();this.androidChrome=/chrome/i.test(t)&&/android/i.test(t),this.initMask()}get mask(){return this._mask}set mask(t){this._mask=t,this.initMask(),this.writeValue(""),this.onModelChange(this.value)}initMask(){this.tests=[],this.partialPosition=this.mask.length,this.len=this.mask.length,this.firstNonMaskPos=null,this.defs={9:"[0-9]",a:this.characterPattern,"*":`${this.characterPattern}|[0-9]`};let t=this.mask.split("");for(let i=0;i<t.length;i++){let n=t[i];"?"==n?(this.len--,this.partialPosition=i):this.defs[n]?(this.tests.push(new RegExp(this.defs[n])),null===this.firstNonMaskPos&&(this.firstNonMaskPos=this.tests.length-1),i<this.partialPosition&&(this.lastRequiredNonMaskPos=this.tests.length-1)):this.tests.push(null)}this.buffer=[];for(let i=0;i<t.length;i++){let n=t[i];"?"!=n&&this.buffer.push(this.defs[n]?this.getPlaceholder(i):n)}this.defaultBuffer=this.buffer.join("")}writeValue(t){this.value=t,this.inputViewChild&&this.inputViewChild.nativeElement&&(this.inputViewChild.nativeElement.value=null==this.value||null==this.value?"":this.value,this.checkVal(),this.focusText=this.inputViewChild.nativeElement.value,this.updateFilledState())}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}caret(t,i){let n,o,a;if(this.inputViewChild.nativeElement.offsetParent&&this.inputViewChild.nativeElement===this.inputViewChild.nativeElement.ownerDocument.activeElement){if("number"!=typeof t)return this.inputViewChild.nativeElement.setSelectionRange?(o=this.inputViewChild.nativeElement.selectionStart,a=this.inputViewChild.nativeElement.selectionEnd):document.selection&&document.selection.createRange&&(n=document.selection.createRange(),o=0-n.duplicate().moveStart("character",-1e5),a=o+n.text.length),{begin:o,end:a};o=t,a="number"==typeof i?i:o,this.inputViewChild.nativeElement.setSelectionRange?this.inputViewChild.nativeElement.setSelectionRange(o,a):this.inputViewChild.nativeElement.createTextRange&&(n=this.inputViewChild.nativeElement.createTextRange(),n.collapse(!0),n.moveEnd("character",a),n.moveStart("character",o),n.select())}}isCompleted(){for(let i=this.firstNonMaskPos;i<=this.lastRequiredNonMaskPos;i++)if(this.tests[i]&&this.buffer[i]===this.getPlaceholder(i))return!1;return!0}getPlaceholder(t){return this.slotChar.charAt(t<this.slotChar.length?t:0)}seekNext(t){for(;++t<this.len&&!this.tests[t];);return t}seekPrev(t){for(;--t>=0&&!this.tests[t];);return t}shiftL(t,i){let n,o;if(!(t<0)){for(n=t,o=this.seekNext(i);n<this.len;n++)if(this.tests[n]){if(!(o<this.len&&this.tests[n].test(this.buffer[o])))break;this.buffer[n]=this.buffer[o],this.buffer[o]=this.getPlaceholder(o),o=this.seekNext(o)}this.writeBuffer(),this.caret(Math.max(this.firstNonMaskPos,t))}}shiftR(t){let i,n,o,a;for(i=t,n=this.getPlaceholder(t);i<this.len;i++)if(this.tests[i]){if(o=this.seekNext(i),a=this.buffer[i],this.buffer[i]=n,!(o<this.len&&this.tests[o].test(a)))break;n=a}}handleAndroidInput(t){var i=this.inputViewChild.nativeElement.value,n=this.caret();if(this.oldVal&&this.oldVal.length&&this.oldVal.length>i.length){for(this.checkVal(!0);n.begin>0&&!this.tests[n.begin-1];)n.begin--;if(0===n.begin)for(;n.begin<this.firstNonMaskPos&&!this.tests[n.begin];)n.begin++;setTimeout(()=>{this.caret(n.begin,n.begin),this.updateModel(t),this.isCompleted()&&this.onComplete.emit()},0)}else{for(this.checkVal(!0);n.begin<this.len&&!this.tests[n.begin];)n.begin++;setTimeout(()=>{this.caret(n.begin,n.begin),this.updateModel(t),this.isCompleted()&&this.onComplete.emit()},0)}}onInputBlur(t){if(this.focused=!1,this.onModelTouched(),this.checkVal(),this.updateFilledState(),this.onBlur.emit(t),this.inputViewChild.nativeElement.value!=this.focusText||this.inputViewChild.nativeElement.value!=this.value){this.updateModel(t);let i=document.createEvent("HTMLEvents");i.initEvent("change",!0,!1),this.inputViewChild.nativeElement.dispatchEvent(i)}}onInputKeydown(t){if(this.readonly)return;let n,o,a,i=t.which||t.keyCode,h=/iphone/i.test(r.p.getUserAgent());this.oldVal=this.inputViewChild.nativeElement.value,this.onKeydown.emit(t),8===i||46===i||h&&127===i?(n=this.caret(),o=n.begin,a=n.end,a-o==0&&(o=46!==i?this.seekPrev(o):a=this.seekNext(o-1),a=46===i?this.seekNext(a):a),this.clearBuffer(o,a),this.shiftL(o,a-1),this.updateModel(t),this.onInput.emit(t),t.preventDefault()):13===i?(this.onInputBlur(t),this.updateModel(t)):27===i&&(this.inputViewChild.nativeElement.value=this.focusText,this.caret(0,this.checkVal()),this.updateModel(t),t.preventDefault())}onKeyPress(t){if(!this.readonly){var o,a,h,L,i=t.which||t.keyCode,n=this.caret();t.ctrlKey||t.altKey||t.metaKey||i<32||i>34&&i<41||(i&&13!==i&&(n.end-n.begin!=0&&(this.clearBuffer(n.begin,n.end),this.shiftL(n.begin,n.end-1)),(o=this.seekNext(n.begin-1))<this.len&&(a=String.fromCharCode(i),this.tests[o].test(a)&&(this.shiftR(o),this.buffer[o]=a,this.writeBuffer(),h=this.seekNext(o),/android/i.test(r.p.getUserAgent())?setTimeout(()=>{this.caret(h)},0):this.caret(h),n.begin<=this.lastRequiredNonMaskPos&&(L=this.isCompleted()),this.onInput.emit(t))),t.preventDefault()),this.updateModel(t),this.updateFilledState(),L&&this.onComplete.emit())}}clearBuffer(t,i){let n;for(n=t;n<i&&n<this.len;n++)this.tests[n]&&(this.buffer[n]=this.getPlaceholder(n))}writeBuffer(){this.inputViewChild.nativeElement.value=this.buffer.join("")}checkVal(t){let o,a,h,i=this.inputViewChild.nativeElement.value,n=-1;for(o=0,h=0;o<this.len;o++)if(this.tests[o]){for(this.buffer[o]=this.getPlaceholder(o);h++<i.length;)if(a=i.charAt(h-1),this.tests[o].test(a)){this.buffer[o]=a,n=o;break}if(h>i.length){this.clearBuffer(o+1,this.len);break}}else this.buffer[o]===i.charAt(h)&&h++,o<this.partialPosition&&(n=o);return t?this.writeBuffer():n+1<this.partialPosition?this.autoClear||this.buffer.join("")===this.defaultBuffer?(this.inputViewChild.nativeElement.value&&(this.inputViewChild.nativeElement.value=""),this.clearBuffer(0,this.len)):this.writeBuffer():(this.writeBuffer(),this.inputViewChild.nativeElement.value=this.inputViewChild.nativeElement.value.substring(0,n+1)),this.partialPosition?o:this.firstNonMaskPos}onInputFocus(t){if(this.readonly)return;let i;this.focused=!0,clearTimeout(this.caretTimeoutId),this.focusText=this.inputViewChild.nativeElement.value,i=this.checkVal(),this.caretTimeoutId=setTimeout(()=>{this.inputViewChild.nativeElement===this.inputViewChild.nativeElement.ownerDocument.activeElement&&(this.writeBuffer(),i==this.mask.replace("?","").length?this.caret(0,i):this.caret(i))},10),this.onFocus.emit(t)}onInputChange(t){this.androidChrome?this.handleAndroidInput(t):this.handleInputChange(t),this.onInput.emit(t)}handleInputChange(t){this.readonly||setTimeout(()=>{var i=this.checkVal(!0);this.caret(i),this.updateModel(t),this.isCompleted()&&this.onComplete.emit()},0)}getUnmaskedValue(){let t=[];for(let i=0;i<this.buffer.length;i++){let n=this.buffer[i];this.tests[i]&&n!=this.getPlaceholder(i)&&t.push(n)}return t.join("")}updateModel(t){const i=this.unmask?this.getUnmaskedValue():t.target.value;(null!==i||void 0!==i)&&(this.value=i,this.onModelChange(this.value))}updateFilledState(){this.filled=this.inputViewChild.nativeElement&&""!=this.inputViewChild.nativeElement.value}focus(){this.inputViewChild.nativeElement.focus()}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(e.SBq),e.Y36(e.sBO))},s.\u0275cmp=e.Xpm({type:s,selectors:[["p-inputMask"]],viewQuery:function(t,i){if(1&t&&e.Gf(E,7),2&t){let n;e.iGM(n=e.CRH())&&(i.inputViewChild=n.first)}},hostAttrs:[1,"p-element"],hostVars:4,hostBindings:function(t,i){2&t&&e.ekj("p-inputwrapper-filled",i.filled)("p-inputwrapper-focus",i.focused)},inputs:{type:"type",slotChar:"slotChar",autoClear:"autoClear",style:"style",inputId:"inputId",styleClass:"styleClass",placeholder:"placeholder",size:"size",maxlength:"maxlength",tabindex:"tabindex",title:"title",ariaLabel:"ariaLabel",ariaRequired:"ariaRequired",disabled:"disabled",readonly:"readonly",unmask:"unmask",name:"name",required:"required",characterPattern:"characterPattern",autoFocus:"autoFocus",autocomplete:"autocomplete",mask:"mask"},outputs:{onComplete:"onComplete",onFocus:"onFocus",onBlur:"onBlur",onInput:"onInput",onKeydown:"onKeydown"},features:[e._Bn([P])],decls:2,vars:17,consts:[["pInputText","",1,"p-inputmask",3,"ngStyle","ngClass","disabled","readonly","focus","blur","keydown","keypress","input","paste"],["input",""]],template:function(t,i){1&t&&(e.TgZ(0,"input",0,1),e.NdJ("focus",function(o){return i.onInputFocus(o)})("blur",function(o){return i.onInputBlur(o)})("keydown",function(o){return i.onInputKeydown(o)})("keypress",function(o){return i.onKeyPress(o)})("input",function(o){return i.onInputChange(o)})("paste",function(o){return i.handleInputChange(o)}),e.qZA()),2&t&&(e.Q6J("ngStyle",i.style)("ngClass",i.styleClass)("disabled",i.disabled)("readonly",i.readonly),e.uIk("id",i.inputId)("type",i.type)("name",i.name)("placeholder",i.placeholder)("title",i.title)("size",i.size)("autocomplete",i.autocomplete)("maxlength",i.maxlength)("tabindex",i.tabindex)("aria-label",i.ariaLabel)("aria-required",i.ariaRequired)("required",i.required)("autofocus",i.autoFocus))},directives:[m.o,p.PC,p.mk],encapsulation:2,changeDetection:0}),s})(),A=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[[p.ez,m.j]]}),s})();var c=u(1777),d=u(9783),y=u(5921);const I=["input"];function B(s,l){if(1&s){const t=e.EpF();e.TgZ(0,"i",4),e.NdJ("click",function(){return e.CHM(t),e.oxw().onMaskToggle()}),e.qZA()}if(2&s){const t=e.oxw();e.Q6J("ngClass",t.toggleIconClass())}}function Z(s,l){1&s&&e.GkF(0)}function S(s,l){1&s&&e.GkF(0)}function V(s,l){if(1&s&&(e.ynx(0),e.YNc(1,S,1,0,"ng-container",6),e.BQk()),2&s){const t=e.oxw(2);e.xp6(1),e.Q6J("ngTemplateOutlet",t.contentTemplate)}}const R=function(s){return{width:s}};function z(s,l){if(1&s&&(e.TgZ(0,"div",9),e._UZ(1,"div",0),e.qZA(),e.TgZ(2,"div",10),e._uU(3),e.qZA()),2&s){const t=e.oxw(2);e.xp6(1),e.Q6J("ngClass",t.strengthClass())("ngStyle",e.VKq(3,R,t.meter?t.meter.width:"")),e.xp6(2),e.Oqu(t.infoText)}}function D(s,l){1&s&&e.GkF(0)}const F=function(s,l){return{showTransitionParams:s,hideTransitionParams:l}},O=function(s){return{value:"visible",params:s}};function H(s,l){if(1&s){const t=e.EpF();e.TgZ(0,"div",4,5),e.NdJ("click",function(n){return e.CHM(t),e.oxw().onOverlayClick(n)})("@overlayAnimation.start",function(n){return e.CHM(t),e.oxw().onAnimationStart(n)})("@overlayAnimation.done",function(n){return e.CHM(t),e.oxw().onAnimationEnd(n)}),e.YNc(2,Z,1,0,"ng-container",6),e.YNc(3,V,2,1,"ng-container",7),e.YNc(4,z,4,5,"ng-template",null,8,e.W1O),e.YNc(6,D,1,0,"ng-container",6),e.qZA()}if(2&s){const t=e.MAs(5),i=e.oxw();e.Q6J("ngClass","p-password-panel p-component")("@overlayAnimation",e.VKq(9,O,e.WLB(6,F,i.showTransitionOptions,i.hideTransitionOptions))),e.xp6(2),e.Q6J("ngTemplateOutlet",i.headerTemplate),e.xp6(1),e.Q6J("ngIf",i.contentTemplate)("ngIfElse",t),e.xp6(3),e.Q6J("ngTemplateOutlet",i.footerTemplate)}}let U=(()=>{class s{constructor(t,i){this.el=t,this.zone=i,this.promptLabel="Enter a password",this.weakLabel="Weak",this.mediumLabel="Medium",this.strongLabel="Strong",this.feedback=!0}set showPassword(t){this.el.nativeElement.type=t?"text":"password"}ngDoCheck(){this.updateFilledState()}onInput(t){this.updateFilledState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length}createPanel(){this.panel=document.createElement("div"),this.panel.className="p-password-panel p-component p-password-panel-overlay p-connected-overlay",this.meter=document.createElement("div"),this.meter.className="p-password-meter",this.info=document.createElement("div"),this.info.className="p-password-info",this.info.textContent=this.promptLabel,this.panel.appendChild(this.meter),this.panel.appendChild(this.info),this.panel.style.minWidth=r.p.getOuterWidth(this.el.nativeElement)+"px",document.body.appendChild(this.panel)}showOverlay(){this.feedback&&(this.panel||this.createPanel(),this.panel.style.zIndex=String(++r.p.zindex),this.panel.style.display="block",this.zone.runOutsideAngular(()=>{setTimeout(()=>{r.p.addClass(this.panel,"p-connected-overlay-visible"),this.bindScrollListener(),this.bindDocumentResizeListener()},1)}),r.p.absolutePosition(this.panel,this.el.nativeElement))}hideOverlay(){this.feedback&&this.panel&&(r.p.addClass(this.panel,"p-connected-overlay-hidden"),r.p.removeClass(this.panel,"p-connected-overlay-visible"),this.unbindScrollListener(),this.unbindDocumentResizeListener(),this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.ngOnDestroy()},150)}))}onFocus(){this.showOverlay()}onBlur(){this.hideOverlay()}onKeyup(t){if(this.feedback){let n=t.target.value,o=null,a=null;if(0===n.length)o=this.promptLabel,a="0px 0px";else{var i=this.testStrength(n);i<30?(o=this.weakLabel,a="0px -10px"):i>=30&&i<80?(o=this.mediumLabel,a="0px -20px"):i>=80&&(o=this.strongLabel,a="0px -30px")}(!this.panel||!r.p.hasClass(this.panel,"p-connected-overlay-visible"))&&this.showOverlay(),this.meter.style.backgroundPosition=a,this.info.textContent=o}}testStrength(t){let n,i=0;return n=t.match("[0-9]"),i+=25*this.normalize(n?n.length:1/4,1),n=t.match("[a-zA-Z]"),i+=10*this.normalize(n?n.length:.5,3),n=t.match("[!@#$%^&*?_~.,;=]"),i+=35*this.normalize(n?n.length:1/6,1),n=t.match("[A-Z]"),i+=30*this.normalize(n?n.length:1/6,1),i*=t.length/8,i>100?100:i}normalize(t,i){return t-i<=0?t/i:1+t/(t+i/4)*.5}get disabled(){return this.el.nativeElement.disabled}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new r.V(this.el.nativeElement,()=>{r.p.hasClass(this.panel,"p-connected-overlay-visible")&&this.hideOverlay()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}bindDocumentResizeListener(){this.documentResizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.documentResizeListener)}unbindDocumentResizeListener(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)}onWindowResize(){this.hideOverlay()}ngOnDestroy(){this.panel&&(this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.unbindDocumentResizeListener(),document.body.removeChild(this.panel),this.panel=null,this.meter=null,this.info=null)}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(e.SBq),e.Y36(e.R0b))},s.\u0275dir=e.lG2({type:s,selectors:[["","pPassword",""]],hostAttrs:[1,"p-inputtext","p-component","p-element"],hostVars:2,hostBindings:function(t,i){1&t&&e.NdJ("input",function(o){return i.onInput(o)})("focus",function(){return i.onFocus()})("blur",function(){return i.onBlur()})("keyup",function(o){return i.onKeyup(o)}),2&t&&e.ekj("p-filled",i.filled)},inputs:{promptLabel:"promptLabel",weakLabel:"weakLabel",mediumLabel:"mediumLabel",strongLabel:"strongLabel",feedback:"feedback",showPassword:"showPassword"}}),s})();const N={provide:_.JU,useExisting:(0,e.Gpc)(()=>q),multi:!0};let q=(()=>{class s{constructor(t,i,n,o){this.cd=t,this.config=i,this.el=n,this.overlayService=o,this.mediumRegex="^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})",this.strongRegex="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})",this.feedback=!0,this.showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)",this.hideTransitionOptions=".1s linear",this.onFocus=new e.vpe,this.onBlur=new e.vpe,this.overlayVisible=!1,this.focused=!1,this.unmasked=!1,this.value=null,this.onModelChange=()=>{},this.onModelTouched=()=>{}}ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"content":default:this.contentTemplate=t.template;break;case"header":this.headerTemplate=t.template;break;case"footer":this.footerTemplate=t.template}})}ngOnInit(){this.infoText=this.promptText(),this.mediumCheckRegExp=new RegExp(this.mediumRegex),this.strongCheckRegExp=new RegExp(this.strongRegex),this.translationSubscription=this.config.translationObserver.subscribe(()=>{this.updateUI(this.value||"")})}onAnimationStart(t){switch(t.toState){case"visible":this.overlay=t.element,y.P9.set("overlay",this.overlay,this.config.zIndex.overlay),this.appendContainer(),this.alignOverlay(),this.bindScrollListener(),this.bindResizeListener();break;case"void":this.unbindScrollListener(),this.unbindResizeListener(),this.overlay=null}}onAnimationEnd(t){"void"===t.toState&&y.P9.clear(t.element)}appendContainer(){this.appendTo&&("body"===this.appendTo?document.body.appendChild(this.overlay):document.getElementById(this.appendTo).appendChild(this.overlay))}alignOverlay(){this.appendTo?(this.overlay.style.minWidth=r.p.getOuterWidth(this.input.nativeElement)+"px",r.p.absolutePosition(this.overlay,this.input.nativeElement)):r.p.relativePosition(this.overlay,this.input.nativeElement)}onInput(t){this.value=t.target.value,this.onModelChange(this.value),this.onModelTouched()}onInputFocus(t){this.focused=!0,this.feedback&&(this.overlayVisible=!0),this.onFocus.emit(t)}onInputBlur(t){this.focused=!1,this.feedback&&(this.overlayVisible=!1),this.onBlur.emit(t)}onKeyDown(t){"Escape"===t.key&&(this.overlayVisible=!1)}onKeyUp(t){this.feedback&&(this.updateUI(t.target.value),this.overlayVisible||(this.overlayVisible=!0))}updateUI(t){let i=null,n=null;switch(this.testStrength(t)){case 1:i=this.weakText(),n={strength:"weak",width:"33.33%"};break;case 2:i=this.mediumText(),n={strength:"medium",width:"66.66%"};break;case 3:i=this.strongText(),n={strength:"strong",width:"100%"};break;default:i=this.promptText(),n=null}this.meter=n,this.infoText=i}onMaskToggle(){this.unmasked=!this.unmasked}onOverlayClick(t){this.overlayService.add({originalEvent:t,target:this.el.nativeElement})}testStrength(t){let i=0;return this.strongCheckRegExp.test(t)?i=3:this.mediumCheckRegExp.test(t)?i=2:t.length&&(i=1),i}writeValue(t){this.value=void 0===t?null:t,this.feedback&&this.updateUI(this.value||""),this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new r.V(this.input.nativeElement,()=>{this.overlayVisible&&(this.overlayVisible=!1)})),this.scrollHandler.bindScrollListener()}bindResizeListener(){this.resizeListener||(this.resizeListener=()=>{this.overlayVisible&&(this.overlayVisible=!1)},window.addEventListener("resize",this.resizeListener))}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unbindResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)}unbindOutsideClickListener(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)}containerClass(){return{"p-password p-component p-inputwrapper":!0,"p-input-icon-right":this.toggleMask}}inputFieldClass(){return{"p-password-input":!0,"p-disabled":this.disabled}}toggleIconClass(){return this.unmasked?"pi pi-eye-slash":"pi pi-eye"}strengthClass(){return`p-password-strength ${this.meter?this.meter.strength:""}`}filled(){return null!=this.value&&this.value.toString().length>0}promptText(){return this.promptLabel||this.getTranslation(d.ws.PASSWORD_PROMPT)}weakText(){return this.weakLabel||this.getTranslation(d.ws.WEAK)}mediumText(){return this.mediumLabel||this.getTranslation(d.ws.MEDIUM)}strongText(){return this.strongLabel||this.getTranslation(d.ws.STRONG)}restoreAppend(){this.overlay&&this.appendTo&&("body"===this.appendTo?document.body.removeChild(this.overlay):document.getElementById(this.appendTo).removeChild(this.overlay))}inputType(){return this.unmasked?"text":"password"}getTranslation(t){return this.config.getTranslation(t)}ngOnDestroy(){this.overlay&&(y.P9.clear(this.overlay),this.overlay=null),this.restoreAppend(),this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.translationSubscription&&this.translationSubscription.unsubscribe()}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(e.sBO),e.Y36(d.b4),e.Y36(e.SBq),e.Y36(d.F0))},s.\u0275cmp=e.Xpm({type:s,selectors:[["p-password"]],contentQueries:function(t,i,n){if(1&t&&e.Suo(n,d.jx,4),2&t){let o;e.iGM(o=e.CRH())&&(i.templates=o)}},viewQuery:function(t,i){if(1&t&&e.Gf(I,5),2&t){let n;e.iGM(n=e.CRH())&&(i.input=n.first)}},hostAttrs:[1,"p-element","p-inputwrapper"],hostVars:4,hostBindings:function(t,i){2&t&&e.ekj("p-inputwrapper-filled",i.filled())("p-inputwrapper-focus",i.focused)},inputs:{ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",label:"label",disabled:"disabled",promptLabel:"promptLabel",mediumRegex:"mediumRegex",strongRegex:"strongRegex",weakLabel:"weakLabel",mediumLabel:"mediumLabel",strongLabel:"strongLabel",inputId:"inputId",feedback:"feedback",appendTo:"appendTo",toggleMask:"toggleMask",inputStyleClass:"inputStyleClass",styleClass:"styleClass",style:"style",inputStyle:"inputStyle",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",placeholder:"placeholder"},outputs:{onFocus:"onFocus",onBlur:"onBlur"},features:[e._Bn([N])],decls:5,vars:17,consts:[[3,"ngClass","ngStyle"],["pInputText","",3,"ngClass","ngStyle","value","input","focus","blur","keyup","keydown"],["input",""],[3,"ngClass","click",4,"ngIf"],[3,"ngClass","click"],["overlay",""],[4,"ngTemplateOutlet"],[4,"ngIf","ngIfElse"],["content",""],[1,"p-password-meter"],["className","p-password-info"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"input",1,2),e.NdJ("input",function(o){return i.onInput(o)})("focus",function(o){return i.onInputFocus(o)})("blur",function(o){return i.onInputBlur(o)})("keyup",function(o){return i.onKeyUp(o)})("keydown",function(o){return i.onKeyDown(o)}),e.qZA(),e.YNc(3,B,1,1,"i",3),e.YNc(4,H,7,11,"div",3),e.qZA()),2&t&&(e.Tol(i.styleClass),e.Q6J("ngClass",i.containerClass())("ngStyle",i.style),e.xp6(1),e.Tol(i.inputStyleClass),e.Q6J("ngClass",i.inputFieldClass())("ngStyle",i.inputStyle)("value",i.value),e.uIk("label",i.label)("aria-label",i.ariaLabel)("aria-labelledBy",i.ariaLabelledBy)("id",i.inputId)("type",i.inputType())("placeholder",i.placeholder),e.xp6(2),e.Q6J("ngIf",i.toggleMask),e.xp6(1),e.Q6J("ngIf",i.overlayVisible))},directives:[p.mk,p.PC,m.o,p.O5,p.tP],styles:[".p-password{position:relative;display:inline-flex}.p-password-panel{position:absolute;top:0;left:0}.p-password .p-password-panel{min-width:100%}.p-password-meter{height:10px}.p-password-strength{height:100%;width:0%;transition:width 1s ease-in-out}.p-fluid .p-password{display:flex}\n"],encapsulation:2,data:{animation:[(0,c.X$)("overlayAnimation",[(0,c.eR)(":enter",[(0,c.oB)({opacity:0,transform:"scaleY(0.8)"}),(0,c.jt)("{{showTransitionParams}}")]),(0,c.eR)(":leave",[(0,c.jt)("{{hideTransitionParams}}",(0,c.oB)({opacity:0}))])])]},changeDetection:0}),s})(),J=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[[p.ez,m.j],d.m8]}),s})();var f=u(1366);let Q=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-layout"]],decls:4,vars:0,consts:[[1,"container"],[1,"wrapper"],[1,"box"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._UZ(3,"router-outlet"),e.qZA()()())},directives:[f.lC],styles:[".wrapper[_ngcontent-%COMP%]{max-width:380px;margin:0 auto;width:100%;height:100vh;display:flex;align-items:center;justify-content:center}.box[_ngcontent-%COMP%]{width:100%;background:#2a323d;border:1px solid #3f4b5b;border-radius:5px;padding:30px 20px}.title[_ngcontent-%COMP%]{text-align:center;margin-bottom:30px}"]}),s})();const w=function(){return{width:"100%"}},C=function(){return{padding:0}},j=function(){return["/authorization","registration"]},K=function(){return["/authorization","recovery"]};let Y=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-log-in"]],decls:15,vars:20,consts:[[1,"text-center","mb-4"],[1,"mb-3"],["placeholder","\u0412\u0430\u0448 \u043d\u043e\u043c\u0435\u0440","mask","+7 999 999 99 99",1,"p-inputtext-sm"],["pPassword","","type","password","placeholder","\u0412\u0430\u0448 \u043f\u0430\u0440\u043e\u043b\u044c",1,"p-inputtext-sm",3,"feedback"],[1,"mt-4"],["pButton","","type","button","label","\u0412\u043e\u0439\u0442\u0438",1,"p-button-sm","p-button-success"],[1,"mt-3"],[1,"row","justify-content-between","align-items-center"],[1,"col-auto"],["pButton","","type","button","label","\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",1,"p-button-sm","p-button-text",3,"routerLink"],["pButton","","type","button","label","\u0417\u0430\u0431\u044b\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c ?",1,"p-button-sm","p-button-text",3,"routerLink"]],template:function(t,i){1&t&&(e.TgZ(0,"h2",0),e._uU(1,"\u0412\u0445\u043e\u0434"),e.qZA(),e.TgZ(2,"form")(3,"div",1),e._UZ(4,"p-inputMask",2),e.qZA(),e.TgZ(5,"div"),e._UZ(6,"input",3),e.qZA()(),e.TgZ(7,"div",4),e._UZ(8,"button",5),e.qZA(),e.TgZ(9,"div",6)(10,"div",7)(11,"div",8),e._UZ(12,"button",9),e.qZA(),e.TgZ(13,"div",8),e._UZ(14,"button",10),e.qZA()()()),2&t&&(e.xp6(4),e.Akn(e.DdM(13,w)),e.xp6(2),e.Akn(e.DdM(14,w)),e.Q6J("feedback",!1),e.xp6(2),e.Akn(e.DdM(15,w)),e.xp6(4),e.Akn(e.DdM(16,C)),e.Q6J("routerLink",e.DdM(17,j)),e.xp6(2),e.Akn(e.DdM(18,C)),e.Q6J("routerLink",e.DdM(19,K)))},directives:[v,U,g.Hq,f.rH],styles:[""]}),s})();const T=function(){return{width:"100%"}},M=function(){return{padding:0}},G=function(){return["/authorization","log-in"]},W=function(){return["/authorization","registration"]};let X=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-recovery"]],decls:12,vars:16,consts:[[1,"text-center","mb-4"],["placeholder","\u0412\u0430\u0448 \u043d\u043e\u043c\u0435\u0440","mask","+7 999 999 99 99",1,"p-inputtext-sm"],[1,"mt-4"],["pButton","","type","button","label","\u041d\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c",1,"p-button-sm","p-button-success"],[1,"mt-3"],[1,"row","justify-content-between","align-items-center"],[1,"col-auto"],["pButton","","type","button","label","\u0412\u0445\u043e\u0434",1,"p-button-sm","p-button-text",3,"routerLink"],["pButton","","type","button","label","\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",1,"p-button-sm","p-button-text",3,"routerLink"]],template:function(t,i){1&t&&(e.TgZ(0,"h2",0),e._uU(1,"\u0417\u0430\u0431\u044b\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c ?"),e.qZA(),e.TgZ(2,"form"),e._UZ(3,"p-inputMask",1),e.qZA(),e.TgZ(4,"div",2),e._UZ(5,"button",3),e.qZA(),e.TgZ(6,"div",4)(7,"div",5)(8,"div",6),e._UZ(9,"button",7),e.qZA(),e.TgZ(10,"div",6),e._UZ(11,"button",8),e.qZA()()()),2&t&&(e.xp6(3),e.Akn(e.DdM(10,T)),e.xp6(2),e.Akn(e.DdM(11,T)),e.xp6(4),e.Akn(e.DdM(12,M)),e.Q6J("routerLink",e.DdM(13,G)),e.xp6(2),e.Akn(e.DdM(14,M)),e.Q6J("routerLink",e.DdM(15,W)))},directives:[v,g.Hq,f.rH],styles:[""]}),s})();const b=function(){return{width:"100%"}},x=function(){return{padding:0}},$=function(){return["/authorization","log-in"]},ee=function(){return["/authorization","recovery"]},te=[{path:"",component:Q,children:[{path:"",pathMatch:"full",redirectTo:"log-in"},{path:"log-in",component:Y},{path:"registration",component:(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-registration"]],decls:17,vars:22,consts:[[1,"text-center","mb-4"],[1,"mb-3"],["type","text","pInputText","","placeholder","\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",1,"p-inputtext-sm"],["type","e-mail","pInputText","","placeholder","\u0412\u0430\u0448 e-mail",1,"p-inputtext-sm"],["placeholder","\u0412\u0430\u0448 \u043d\u043e\u043c\u0435\u0440","mask","+7 999 999 99 99",1,"p-inputtext-sm"],[1,"mt-4"],["pButton","","type","button","label","\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",1,"p-button-sm","p-button-success"],[1,"mt-3"],[1,"row","justify-content-between","align-items-center"],[1,"col-auto"],["pButton","","type","button","label","\u0412\u0445\u043e\u0434",1,"p-button-sm","p-button-text",3,"routerLink"],["pButton","","type","button","label","\u0417\u0430\u0431\u044b\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c ?",1,"p-button-sm","p-button-text",3,"routerLink"]],template:function(t,i){1&t&&(e.TgZ(0,"h2",0),e._uU(1,"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),e.qZA(),e.TgZ(2,"form")(3,"div",1),e._UZ(4,"input",2),e.qZA(),e.TgZ(5,"div",1),e._UZ(6,"input",3),e.qZA(),e.TgZ(7,"div"),e._UZ(8,"p-inputMask",4),e.qZA()(),e.TgZ(9,"div",5),e._UZ(10,"button",6),e.qZA(),e.TgZ(11,"div",7)(12,"div",8)(13,"div",9),e._UZ(14,"button",10),e.qZA(),e.TgZ(15,"div",9),e._UZ(16,"button",11),e.qZA()()()),2&t&&(e.xp6(4),e.Akn(e.DdM(14,b)),e.xp6(2),e.Akn(e.DdM(15,b)),e.xp6(2),e.Akn(e.DdM(16,b)),e.xp6(2),e.Akn(e.DdM(17,b)),e.xp6(4),e.Akn(e.DdM(18,x)),e.Q6J("routerLink",e.DdM(19,$)),e.xp6(2),e.Akn(e.DdM(20,x)),e.Q6J("routerLink",e.DdM(21,ee)))},directives:[m.o,v,g.Hq,f.rH],styles:[""]}),s})()},{path:"recovery",component:X}]}];let ie=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[[f.Bz.forChild(te)],f.Bz]}),s})(),ne=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({providers:[],imports:[[p.ez,g.hJ,J,A,m.j,ie]]}),s})()}}]);