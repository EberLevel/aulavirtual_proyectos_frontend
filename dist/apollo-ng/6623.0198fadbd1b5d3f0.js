"use strict";(self.webpackChunkapollo_ng=self.webpackChunkapollo_ng||[]).push([[6623],{6623:(z,v,n)=>{n.r(v),n.d(v,{CiclosModule:()=>X});var a=n(6814),b=n(4104),r=n(6223),x=n(9552),h=n(707),c=n(3714),M=n(6804),m=n(4480),u=n(4055),d=n(3965),g=n(1230),_=n(6760),B=n(6651),w=n(7902),F=n(6022),N=n(3722),Y=n(1494),D=n(6218),y=n(3259),I=n(3904),Z=n(8007),H=n(3519),f=n.n(H),t=n(8926),T=n(5118),S=n(4067),E=n(5219);function J(i,p){if(1&i&&(t.TgZ(0,"span",2),t._uU(1),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.hij(" ","add"===e.acciones?"Agregar ciclos":"ver"===e.acciones?"Ver ciclos":"Editar ciclos"," ")}}function L(i,p){1&i&&t._UZ(0,"button",15)}function U(i,p){1&i&&t._UZ(0,"button",16)}function O(i,p){if(1&i){const e=t.EpF();t.TgZ(0,"form",3),t.NdJ("ngSubmit",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.guardarCiclos())}),t.TgZ(1,"div",4)(2,"div",5)(3,"div",6)(4,"span",7),t._UZ(5,"input",8),t.TgZ(6,"label",9),t._uU(7,"Nombre"),t.qZA()()()()(),t.TgZ(8,"div",4)(9,"div",10)(10,"div",11),t.YNc(11,L,1,0,"button",12),t.YNc(12,U,1,0,"button",13),t.TgZ(13,"button",14),t.NdJ("click",function(s){t.CHM(e);const l=t.oxw();return t.KtG(l.closeModal(s))}),t.qZA()()()()()}if(2&i){const e=t.oxw();t.Q6J("formGroup",e.parametroForm),t.xp6(11),t.Q6J("ngIf","add"===e.acciones),t.xp6(1),t.Q6J("ngIf","actualizar"===e.acciones)}}let A=(()=>{class i{constructor(e,o,s,l){this.fb=e,this.ref=o,this.config=s,this.parametroService=l,this.loading=!1,this.acciones=this.config.data.acciones,this.parametroForm=this.fb.group({nombre:["",r.kI.required],color:[""]})}ngOnInit(){("ver"===this.acciones||"actualizar"===this.acciones)&&this.parametroForm.patchValue({nombre:this.config.data.data.nombre,color:this.config.data.data.color})}guardarCiclos(){if(this.parametroForm.valid){const e=this.parametroForm.value;if("actualizar"===this.acciones){const o={...e,id:this.config.data.data.id};this.parametroService.actualizarCiclos(o).subscribe(s=>{this.ref?.close(),f().fire({title:"\xa1\xc9xito!",text:"Los Datos se actualizaron correctamente",icon:"success",confirmButtonText:"Aceptar"}).then(()=>{})},s=>{console.error("Error al actualizar el parametro",s)})}else this.parametroService.guardarCiclos(e).subscribe(o=>{this.ref?.close(),f().fire({title:"\xa1\xc9xito!",text:"Los Datos se registraron correctamente",icon:"success",confirmButtonText:"Aceptar"}).then(()=>{})},o=>{console.error("Error al guardar el parametro",o)})}else console.error("Formulario inv\xe1lido")}closeModal(e){e.preventDefault(),this.ref?.close()}static#t=this.\u0275fac=function(o){return new(o||i)(t.Y36(r.qu),t.Y36(T.E7),t.Y36(T.S),t.Y36(S.m))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-ae-ciclos"]],decls:3,vars:0,consts:[["pTemplate","header"],["pTemplate","content"],[1,"text-primary","font-semibold","text-xl"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"grid","p-fluid"],[1,"field","col-12"],[1,"p-float-label"],["type","text","pInputText","","formControlName","nombre"],[1,"required"],[1,"flex","justify-content-end","flex-column","sm:flex-row"],[1,"flex","flex-wrap","gap-2"],["pButton","","icon","pi pi-plus","label","Guardar","iconPos","right","class","p-button-success p-button-sm","type","submit",4,"ngIf"],["pButton","","icon","pi pi-refresh","label","Actualizar","iconPos","right","class","p-button-warning p-button-sm","type","submit",4,"ngIf"],["pButton","","label","Cerrar","icon","pi pi-times","iconPos","right",1,"p-button-close-clean",3,"click"],["pButton","","icon","pi pi-plus","label","Guardar","iconPos","right","type","submit",1,"p-button-success","p-button-sm"],["pButton","","icon","pi pi-refresh","label","Actualizar","iconPos","right","type","submit",1,"p-button-warning","p-button-sm"]],template:function(o,s){1&o&&(t.TgZ(0,"p-panel"),t.YNc(1,J,2,1,"ng-template",0),t.YNc(2,O,14,3,"ng-template",1),t.qZA())},dependencies:[a.O5,r._Y,r.Fj,r.JJ,r.JL,h.Hq,E.jx,c.o,g.s,r.sg,r.u]})}return i})();function G(i,p){1&i&&(t.TgZ(0,"span",2),t._uU(1,"Listado de ciclos"),t.qZA())}function R(i,p){if(1&i){const e=t.EpF();t.TgZ(0,"div",12)(1,"div",13)(2,"span",14)(3,"input",15,16),t.NdJ("input",function(s){t.CHM(e);const l=t.oxw(2);return t.KtG(l.onGlobalFilter(s))}),t.qZA()()(),t.TgZ(5,"div",17)(6,"button",18),t.NdJ("click",function(){t.CHM(e);const s=t.oxw(2);return t.KtG(s.navigateAddCurso())}),t.qZA()()()}}function P(i,p){1&i&&(t.TgZ(0,"tr")(1,"th",19),t._uU(2,"Acciones"),t.qZA(),t.TgZ(3,"th",19),t._uU(4,"Nombre"),t.qZA(),t.TgZ(5,"th",19),t._uU(6,"Color"),t.qZA()())}function j(i,p){if(1&i){const e=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"button",20),t.NdJ("click",function(){const l=t.CHM(e).$implicit,C=t.oxw(2);return t.KtG(C.navigateToDetalle(l))}),t.qZA(),t.TgZ(3,"button",21),t.NdJ("click",function(){const l=t.CHM(e).$implicit,C=t.oxw(2);return t.KtG(C.navigateToEdit(l))}),t.qZA(),t.TgZ(4,"button",22),t.NdJ("click",function(){const l=t.CHM(e).$implicit,C=t.oxw(2);return t.KtG(C.navigateToDelete(l.id))}),t.qZA()(),t.TgZ(5,"td")(6,"span",23),t._uU(7),t.qZA()(),t.TgZ(8,"td"),t._UZ(9,"span",24),t._uU(10),t.qZA()()}if(2&i){const e=p.$implicit;t.xp6(7),t.Oqu(e.nombre),t.xp6(2),t.Udp("background-color",e.color),t.xp6(1),t.hij(" ",e.color," ")}}function K(i,p){1&i&&(t.TgZ(0,"tr")(1,"td",25),t._uU(2,"No se encontraron registros"),t.qZA()())}function V(i,p){1&i&&(t.TgZ(0,"tr")(1,"td",25),t._uU(2,"Cargando registros. Por favor espere."),t.qZA()())}function Q(i,p){if(1&i&&(t.TgZ(0,"div",3)(1,"div",4)(2,"div",5)(3,"p-table",6,7),t.YNc(5,R,7,0,"ng-template",8),t.YNc(6,P,7,0,"ng-template",0),t.YNc(7,j,11,4,"ng-template",9),t.YNc(8,K,3,0,"ng-template",10),t.YNc(9,V,3,0,"ng-template",11),t.qZA()()()()),2&i){const e=t.oxw();t.xp6(3),t.Q6J("value",e.ciclosList)("rows",10)("loading",e.loading)("rowHover",!0)("paginator",!0)}}let $=(()=>{class i{constructor(e,o){this.dialogService=e,this.areasDeFormacionService=o,this.loading=!1,this.ciclosList=[],this.originalciclosList=[]}ngOnInit(){this.listarCiclos()}listarCiclos(){this.areasDeFormacionService.getCiclos().subscribe(e=>{this.ciclosList=e,this.originalciclosList=[...e]})}navigateAddCurso(){this.ref=this.dialogService.open(A,{width:"60%",styleClass:"custom-dialog-header",data:{acciones:"add"}}),this.ref.onClose.subscribe(e=>{this.listarCiclos()})}navigateToDetalle(e){this.ref=this.dialogService.open(A,{width:"80%",styleClass:"custom-dialog-header",data:{acciones:"ver",data:e}}),this.ref.onClose.subscribe(o=>{this.listarCiclos()})}navigateToEdit(e){this.ref=this.dialogService.open(A,{width:"60%",styleClass:"custom-dialog-header",data:{acciones:"actualizar",data:e}}),this.ref.onClose.subscribe(o=>{this.listarCiclos()})}navigateToDelete(e){f().fire({title:"\xbfEst\xe1s seguro?",text:"No podr\xe1s revertir esto",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"S\xed, eliminarlo",customClass:{popup:"custom-swal-popup"},didOpen:()=>{const o=document.querySelector(".swal2-container");o&&o.setAttribute("style","z-index: 2147483647 !important")}}).then(o=>{o.isConfirmed&&this.areasDeFormacionService.eliminarCiclos(e).subscribe(s=>{f().fire({title:"Eliminado",text:"La carrera t\xe9cnica ha sido eliminada.",icon:"success",showClass:{popup:"\n                  background-color: #78CBF2;\n                  color: white;\n                  z-index: 10000!important;\n                "},didOpen:()=>{const l=document.querySelector(".swal2-container");l&&l.setAttribute("style","z-index: 2147483647 !important")}}),this.listarCiclos()},s=>{f().fire("Error","Hubo un problema al eliminar la carrera t\xe9cnica.","error")})})}onGlobalFilter(e){const o=e.target.value.toLowerCase();this.ciclosList=o?this.originalciclosList.filter(s=>s.nombre.toLowerCase().includes(o)):[...this.originalciclosList]}static#t=this.\u0275fac=function(o){return new(o||i)(t.Y36(T.xA),t.Y36(S.m))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-ciclos"]],decls:3,vars:0,consts:[["pTemplate","header"],["pTemplate","content"],[1,"text-primary","font-semibold","text-xl"],[1,"row","mb-4"],[1,"grid","p-fluid"],[1,"field","md:col-12"],["styleClass","p-datatable-gridlines","responsiveLayout","scroll",1,"custom-search-input",3,"value","rows","loading","rowHover","paginator"],["dt1",""],["pTemplate","caption"],["pTemplate","body"],["pTemplate","emptymessage"],["pTemplate","loadingbody"],[1,"flex","justify-content-between","flex-wrap"],[1,"flex-grow-1","mb-2","mr-2"],[1,"p-input-icon-left","w-full"],["pInputText","","type","text","placeholder","Buscar listado de ciclos",1,"w-full",3,"input"],["filter",""],[1,"mb-2"],["pButton","","label","Nuevo","icon","pi pi-user-plus","id","btnNuevo",1,"p-button-primary","mr-2",2,"border-radius","30px",3,"click"],["scope","col",2,"min-width","10rem"],["pButton","","icon","pi pi-eye","title","Ver",1,"p-button-rounded","p-button-text","p-button-success",2,"width","70px","border-radius","30px",3,"click"],["pButton","","icon","pi pi-pencil","title","Editar",1,"p-button-rounded","p-button-text","p-button-warning",2,"width","70px","border-radius","30px",3,"click"],["pButton","","icon","pi pi-trash","title","Eliminar",1,"p-button-rounded","p-button-text","p-button-danger",2,"width","70px","border-radius","30px",3,"click"],["pTooltip","Nombre del \xe1rea","tooltipPosition","top"],[1,"color-box"],["colspan","3"]],template:function(o,s){1&o&&(t.TgZ(0,"p-panel"),t.YNc(1,G,2,0,"ng-template",0),t.YNc(2,Q,10,5,"ng-template",1),t.qZA())},dependencies:[h.Hq,E.jx,c.o,g.s,y.u,x.iA]})}return i})(),W=(()=>{class i{static#t=this.\u0275fac=function(o){return new(o||i)};static#e=this.\u0275mod=t.oAB({type:i});static#i=this.\u0275inj=t.cJS({imports:[Z.Bz.forChild([{path:"",component:$}]),Z.Bz]})}return i})(),X=(()=>{class i{static#t=this.\u0275fac=function(o){return new(o||i)};static#e=this.\u0275mod=t.oAB({type:i});static#i=this.\u0275inj=t.cJS({imports:[a.ez,W,r.u5,_._8,F.Xt,h.hJ,w.JH,c.j,D.A,M.KZ,m.T,u.q4,d.kW,g.Q,B.q,N.O,y.z,b.EV,x.U$,Y.n,I.D,r.UX]})}return i})()},6218:(z,v,n)=>{n.d(v,{A:()=>h,g:()=>x});var a=n(8926),b=n(6814),r=n(6223);let x=(()=>{class c{el;ngModel;control;cd;autoResize;onResize=new a.vpe;filled;cachedScrollHeight;ngModelSubscription;ngControlSubscription;constructor(m,u,d,g){this.el=m,this.ngModel=u,this.control=d,this.cd=g}ngOnInit(){this.ngModel&&(this.ngModelSubscription=this.ngModel.valueChanges.subscribe(()=>{this.updateState()})),this.control&&(this.ngControlSubscription=this.control.valueChanges.subscribe(()=>{this.updateState()}))}ngAfterViewChecked(){this.updateState()}ngAfterViewInit(){this.autoResize&&this.resize(),this.updateFilledState(),this.cd.detectChanges()}onInput(m){this.updateState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length}resize(m){this.el.nativeElement.style.height="auto",this.el.nativeElement.style.height=this.el.nativeElement.scrollHeight+"px",parseFloat(this.el.nativeElement.style.height)>=parseFloat(this.el.nativeElement.style.maxHeight)?(this.el.nativeElement.style.overflowY="scroll",this.el.nativeElement.style.height=this.el.nativeElement.style.maxHeight):this.el.nativeElement.style.overflow="hidden",this.onResize.emit(m||{})}updateState(){this.updateFilledState(),this.autoResize&&this.resize()}ngOnDestroy(){this.ngModelSubscription&&this.ngModelSubscription.unsubscribe(),this.ngControlSubscription&&this.ngControlSubscription.unsubscribe()}static \u0275fac=function(u){return new(u||c)(a.Y36(a.SBq),a.Y36(r.On,8),a.Y36(r.a5,8),a.Y36(a.sBO))};static \u0275dir=a.lG2({type:c,selectors:[["","pInputTextarea",""]],hostAttrs:[1,"p-inputtextarea","p-inputtext","p-component","p-element"],hostVars:4,hostBindings:function(u,d){1&u&&a.NdJ("input",function(_){return d.onInput(_)}),2&u&&a.ekj("p-filled",d.filled)("p-inputtextarea-resizable",d.autoResize)},inputs:{autoResize:"autoResize"},outputs:{onResize:"onResize"}})}return c})(),h=(()=>{class c{static \u0275fac=function(u){return new(u||c)};static \u0275mod=a.oAB({type:c});static \u0275inj=a.cJS({imports:[b.ez]})}return c})()}}]);