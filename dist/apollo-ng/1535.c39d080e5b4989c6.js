"use strict";(self.webpackChunkapollo_ng=self.webpackChunkapollo_ng||[]).push([[1535],{3731:(O,M,i)=>{i.d(M,{k:()=>w});var d=i(3519),C=i.n(d),t=i(8926),x=i(5118),b=i(5516),m=i(9862);let y=(()=>{class u{constructor(a){this.http=a,this.baseUrl=`${b.N.API_BASE}`,this.urlparametro=`${b.N.API_BASE}`}obtenerEvaluacionPorId(a){return this.http.get(`${this.baseUrl}evaluacion/${a}`)}crearEvaluacion(a){return this.http.post(`${this.baseUrl}evaluaciones`,a)}obtenerEvaluacionesPorGrupo(a){return this.http.get(`${this.baseUrl}/${a}`)}actualizarEvaluacion(a,r){return this.http.put(`${this.baseUrl}evaluacion/${a}`,r)}eliminarEvaluacion(a){return this.http.delete(`${this.baseUrl}/${a}`)}static#e=this.\u0275fac=function(r){return new(r||u)(t.LFG(m.eN))};static#t=this.\u0275prov=t.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"})}return u})();var _=i(5219),v=i(6814),h=i(6223),f=i(6760),E=i(707),R=i(3714),U=i(6218),N=i(3965),A=i(1230);function D(u,T){if(1&u&&(t.TgZ(0,"span",2),t._uU(1),t.qZA()),2&u){const a=t.oxw();t.xp6(1),t.hij(" ","registrar"===a.acciones?"Registrar Evaluaci\xf3n":"Actualizar Evaluaci\xf3n"," ")}}function P(u,T){if(1&u){const a=t.EpF();t.TgZ(0,"button",29),t.NdJ("click",function(){t.CHM(a);const l=t.oxw(2);return t.KtG(l.guardarEvaluacion())}),t.qZA()}}function S(u,T){if(1&u){const a=t.EpF();t.TgZ(0,"button",30),t.NdJ("click",function(){t.CHM(a);const l=t.oxw(2);return t.KtG(l.actualizarEvaluacion())}),t.qZA()}}function F(u,T){if(1&u){const a=t.EpF();t.TgZ(0,"div",3)(1,"div",4)(2,"div",5)(3,"span",6)(4,"input",7),t.NdJ("ngModelChange",function(l){t.CHM(a);const e=t.oxw();return t.KtG(e.nombre=l)}),t.qZA(),t.TgZ(5,"label",8),t._uU(6,"Nombre"),t.qZA()()()()(),t.TgZ(7,"div",3)(8,"div",4)(9,"div",5)(10,"span",6)(11,"input",7),t.NdJ("ngModelChange",function(l){t.CHM(a);const e=t.oxw();return t.KtG(e.porcentajeEvaluacion=l)}),t.qZA(),t.TgZ(12,"label",8),t._uU(13,"Valor %"),t.qZA()()()()(),t.TgZ(14,"div",3)(15,"div",4)(16,"div",9)(17,"span",6)(18,"p-calendar",10),t.NdJ("ngModelChange",function(l){t.CHM(a);const e=t.oxw();return t.KtG(e.fechaRegistro=l)}),t.qZA(),t.TgZ(19,"label",11),t._uU(20,"Fecha de la noticia"),t.qZA()()(),t.TgZ(21,"div",9)(22,"span",6)(23,"p-calendar",12),t.NdJ("ngModelChange",function(l){t.CHM(a);const e=t.oxw();return t.KtG(e.horaprogramada=l)})("onSelect",function(l){t.CHM(a);const e=t.oxw();return t.KtG(e.capturarHora(l))}),t.qZA(),t.TgZ(24,"label",13),t._uU(25,"Hora programada"),t.qZA()(),t.TgZ(26,"small",14),t._uU(27,"Campo obligatorio *"),t.qZA()()(),t.TgZ(28,"div",3)(29,"div",4)(30,"div",15)(31,"span",6)(32,"textarea",16),t.NdJ("ngModelChange",function(l){t.CHM(a);const e=t.oxw();return t.KtG(e.observaciones=l)}),t.qZA(),t.TgZ(33,"label",17),t._uU(34,"Observaciones"),t.qZA()()()()()(),t.TgZ(35,"div",3)(36,"div",4)(37,"div",18)(38,"span",6)(39,"p-dropdown",19),t.NdJ("ngModelChange",function(l){t.CHM(a);const e=t.oxw();return t.KtG(e.tipoEvaluacion=l)}),t.qZA(),t.TgZ(40,"label",20),t._uU(41,"Tipo de Evaluaci\xf3n"),t.qZA()()(),t.TgZ(42,"div",18)(43,"span",6)(44,"p-dropdown",21),t.NdJ("ngModelChange",function(l){t.CHM(a);const e=t.oxw();return t.KtG(e.estado=l)}),t.qZA(),t.TgZ(45,"label",22),t._uU(46,"Estados"),t.qZA()()()()(),t.TgZ(47,"div",23)(48,"div",24)(49,"div",25),t.YNc(50,P,1,0,"button",26),t.YNc(51,S,1,0,"button",27),t.TgZ(52,"button",28),t.NdJ("click",function(){t.CHM(a);const l=t.oxw();return t.KtG(l.closeModal())}),t.qZA()()()()}if(2&u){const a=t.oxw();t.xp6(4),t.Q6J("ngModel",a.nombre),t.xp6(7),t.Q6J("ngModel",a.porcentajeEvaluacion),t.xp6(7),t.Q6J("ngModel",a.fechaRegistro)("showTime",!1)("showSeconds",!1),t.xp6(5),t.Q6J("ngModel",a.horaprogramada)("showTime",!0)("showSeconds",!1)("timeOnly",!0),t.xp6(9),t.Q6J("ngModel",a.observaciones),t.xp6(7),t.Q6J("options",a.tipEvaluacion)("ngModel",a.tipoEvaluacion),t.xp6(5),t.Q6J("options",a.estados)("ngModel",a.estado),t.xp6(6),t.Q6J("ngIf","registrar"===a.acciones),t.xp6(1),t.Q6J("ngIf","actualizar"===a.acciones)}}let w=(()=>{class u{constructor(a,r,l,e){this.ref=a,this.evaluacionesService=r,this.messageService=l,this.config=e,this.loading=!1,this.tipEvaluacion=[{name:"Oral",value:65},{name:"Escrito",value:44},{name:"Recuperaci\xf3n",value:45}],this.estados=[{name:"Pendiente",value:1},{name:"En Proceso",value:2},{name:"Culminado",value:3},{name:"Desaprobado",value:4}]}ngOnInit(){this.config&&this.config.data&&(this.acciones=this.config.data.acciones,"registrar"===this.acciones&&(this.grupoDeEvaluacionesId=this.config.data.idGrupoEvaluaciones),"actualizar"===this.acciones)&&this.cargarDatosParaEditar(this.config.data.idEvaluacion)}capturarHora(a){if(a&&a instanceof Date){const r=a.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});console.log("Hora seleccionada:",r),this.horaprogramada=a}}cargarDatosParaEditar(a){this.evaluacionesService.obtenerEvaluacionPorId(a).subscribe(r=>{console.log("Datos obtenidos del backend:",r);const l=r;this.nombre=l.nombre,this.tipoEvaluacion=l.tipo_evaluacion_id,this.porcentajeEvaluacion=l.porcentaje_evaluacion,this.estado=l.estado_id,this.observaciones=l.observaciones,this.fechaRegistro=new Date(l.fecha_y_hora_programo),this.grupoDeEvaluacionesId=l.grupo_de_evaluaciones_id;const e=new Date(l.fecha_y_hora_programo),Z=new Date;Z.setHours(e.getHours()),Z.setMinutes(e.getMinutes()),Z.setSeconds(0),this.horaprogramada=Z},r=>{console.error("Error al obtener la evaluaci\xf3n:",r)})}guardarEvaluacion(){let a=null;this.fechaRegistro&&this.horaprogramada&&(a=`${this.fechaRegistro.toISOString().slice(0,10)} ${this.horaprogramada.toTimeString().slice(0,8)}`);const r={nombre:this.nombre,tipo_evaluacion_id:Number(this.tipoEvaluacion),porcentaje_evaluacion:Number(this.porcentajeEvaluacion),fecha_y_hora_programo:a,observaciones:this.observaciones||null,estado_id:Number(this.estado),domain_id:2,grupo_de_evaluaciones_id:this.grupoDeEvaluacionesId||null};console.log("Datos enviados:",r),this.loading=!0,this.evaluacionesService.crearEvaluacion(r).subscribe(l=>{this.loading=!1,C().fire({title:"Registrado",text:"La evaluaci\xf3n ha sido registrada exitosamente.",icon:"success",confirmButtonText:"Aceptar",showClass:{popup:"\n                            background-color: #78CBF2;\n                            color: white;\n                            z-index: 10000!important;\n                        "},didOpen:()=>{const e=document.querySelector(".swal2-container");e&&e.setAttribute("style","z-index: 2147483647 !important")}}).then(e=>{(e.isConfirmed||e.isDismissed)&&this.ref&&this.ref.close()})},l=>{this.loading=!1,this.messageService.add({severity:"error",summary:"Error",detail:"Error al registrar la evaluaci\xf3n. Por favor intenta de nuevo."})})}actualizarEvaluacion(){let a=null;this.fechaRegistro&&this.horaprogramada&&(a=`${this.fechaRegistro.toISOString().slice(0,10)} ${this.horaprogramada.toTimeString().slice(0,8)}`);const r={nombre:this.nombre,tipo_evaluacion_id:Number(this.tipoEvaluacion),porcentaje_evaluacion:Number(this.porcentajeEvaluacion),fecha_y_hora_programo:a,observaciones:this.observaciones||null,estado_id:Number(this.estado),domain_id:2,grupo_de_evaluaciones_id:this.grupoDeEvaluacionesId||null};console.log("Datos enviados para actualizar:",r),this.evaluacionesService.actualizarEvaluacion(this.config.data.idEvaluacion,r).subscribe(l=>{C().fire({title:"Actualizado",text:"La evaluaci\xf3n ha sido actualizada exitosamente.",icon:"success",confirmButtonText:"Aceptar"}),this.ref.close()},l=>{console.error("Error al actualizar la evaluaci\xf3n:",l)})}closeModal(){this.ref.close({register:!1})}static#e=this.\u0275fac=function(r){return new(r||u)(t.Y36(x.E7),t.Y36(y),t.Y36(_.ez),t.Y36(x.S))};static#t=this.\u0275cmp=t.Xpm({type:u,selectors:[["app-reg-evaluacion-docente"]],decls:3,vars:0,consts:[["pTemplate","header"],["pTemplate","content"],[1,"text-primary","font-semibold","text-xl"],[1,"row","mb-4"],[1,"grid","p-fluid"],[1,"field","col-12","md:col-6"],[1,"p-float-label"],["type","text","pInputText","",3,"ngModel","ngModelChange"],[1,"required"],[1,"field","md:col-3"],["inputId","calendar","dateFormat","dd-mm-yy",3,"ngModel","showTime","showSeconds","ngModelChange"],["for","calendar"],["inputId","horaprogramada","dateFormat","dd-mm-yy",3,"ngModel","showTime","showSeconds","timeOnly","ngModelChange","onSelect"],["for","horaprogramada"],[2,"color","brown"],[1,"field","col-12"],["pInputTextarea","","rows","3",3,"ngModel","ngModelChange"],["for","observaciones"],[1,"field","md:col-6"],["inputId","dropdownAula","optionLabel","name","optionValue","value",3,"options","ngModel","ngModelChange"],["for","dropdownAula"],["inputId","dropdownEstado","optionLabel","name","optionValue","value",3,"options","ngModel","ngModelChange"],["for","dropdownEstado"],[1,"row"],[1,"flex","justify-content-end","flex-column","sm:flex-row"],[1,"flex","flex-wrap","gap-2"],["pButton","","icon","pi pi-plus","label","Guardar Evaluaci\xf3n","iconPos","right","class","p-button-success p-button-sm",3,"click",4,"ngIf"],["pButton","","icon","pi pi-refresh","label","Actualizar Evaluaci\xf3n","iconPos","right","class","p-button-warning p-button-sm",3,"click",4,"ngIf"],["pButton","","label","Cerrar","icon","pi pi-times","iconPos","right",1,"p-button-close-clean",3,"click"],["pButton","","icon","pi pi-plus","label","Guardar Evaluaci\xf3n","iconPos","right",1,"p-button-success","p-button-sm",3,"click"],["pButton","","icon","pi pi-refresh","label","Actualizar Evaluaci\xf3n","iconPos","right",1,"p-button-warning","p-button-sm",3,"click"]],template:function(r,l){1&r&&(t.TgZ(0,"p-panel"),t.YNc(1,D,2,1,"ng-template",0),t.YNc(2,F,53,16,"ng-template",1),t.qZA())},dependencies:[v.O5,h.Fj,h.JJ,h.On,f.f,E.Hq,_.jx,R.o,U.g,N.Lt,A.s],styles:[".p-inputtext[_ngcontent-%COMP%]{width:-1px}.grid[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin-right:-1rem;margin-left:-1rem;margin-top:-1rem;gap:6rem;row-gap:0rem}"]})}return u})()},1535:(O,M,i)=>{i.r(M),i.d(M,{EvaluacionDocenteMenuModule:()=>de});var d=i(6814),C=i(4104),t=i(6223),x=i(9552),b=i(707),m=i(3714),y=i(6804),_=i(4480),v=i(4055),h=i(3965),f=i(1230),E=i(6760),R=i(6651),U=i(7902),N=i(6022),A=i(3722),D=i(1494),P=i(6218),S=i(3259),F=i(3904),w=i(6860),u=i(3530),T=i(5118),a=i(3999),r=i(8007),l=i(3731),e=i(8926),Z=i(5219),I=i(8057);function J(o,p){1&o&&(e.TgZ(0,"span",2),e._uU(1,"Registrar Preguntas"),e.qZA())}function G(o,p){if(1&o){const n=e.EpF();e.TgZ(0,"div",11)(1,"label",25),e._uU(2,"Seleccione opciones"),e.qZA(),e.TgZ(3,"p-multiSelect",26),e.NdJ("ngModelChange",function(c){e.CHM(n);const g=e.oxw(2);return e.KtG(g.selectedOptions=c)}),e.qZA()()}if(2&o){const n=e.oxw(2);e.xp6(3),e.Q6J("options",n.opciones)("ngModel",n.selectedOptions)}}function B(o,p){if(1&o&&(e.TgZ(0,"div",11)(1,"span",6),e._UZ(2,"input",7),e.TgZ(3,"label"),e._uU(4),e.qZA()()()),2&o){const n=p.$implicit;e.xp6(4),e.hij("Opci\xf3n ",n.label,"")}}function j(o,p){if(1&o&&(e.TgZ(0,"div",3)(1,"div",4),e.YNc(2,B,5,1,"div",27),e.qZA()()),2&o){const n=e.oxw(2);e.xp6(2),e.Q6J("ngForOf",n.selectedOptions)}}const H=function(){return{height:"70px"}};function z(o,p){if(1&o){const n=e.EpF();e.TgZ(0,"div",3)(1,"div",4)(2,"div",5)(3,"span",6),e._UZ(4,"input",7),e.TgZ(5,"label",8),e._uU(6,"Nro de Pregunta"),e.qZA()()()()(),e.TgZ(7,"div",3)(8,"div",4)(9,"div",5)(10,"label",9),e._uU(11,"Pregunta"),e.qZA(),e._UZ(12,"p-editor",10),e.qZA()()(),e.TgZ(13,"div",3)(14,"div",4)(15,"div",11)(16,"p-checkbox",12),e.NdJ("ngModelChange",function(c){e.CHM(n);const g=e.oxw();return e.KtG(g.checkboxChecked=c)})("ngModelChange",function(){e.CHM(n);const c=e.oxw();return e.KtG(c.onCheckboxChange())}),e.qZA()(),e.YNc(17,G,4,2,"div",13),e.qZA()(),e.YNc(18,j,3,1,"div",14),e.TgZ(19,"div",3)(20,"div",4)(21,"div",5)(22,"label",9),e._uU(23,"Respuesta alumno"),e.qZA(),e._UZ(24,"p-editor",10),e.qZA()()(),e.TgZ(25,"div",3)(26,"div",4)(27,"div",5)(28,"label",9),e._uU(29,"Observaciones docente"),e.qZA(),e._UZ(30,"p-editor",10),e.qZA()()(),e.TgZ(31,"div",3)(32,"div",4)(33,"div",5)(34,"span",6),e._UZ(35,"input",7),e.TgZ(36,"label",8),e._uU(37,"Ver"),e.qZA()()()()(),e.TgZ(38,"div",3)(39,"div",4)(40,"div",5)(41,"span",6),e._UZ(42,"input",7),e.TgZ(43,"label",8),e._uU(44,"Calificaci\xf3n %"),e.qZA()()()()(),e.TgZ(45,"div",15)(46,"div",4)(47,"div",16)(48,"span",6)(49,"p-dropdown",17),e.NdJ("ngModelChange",function(c){e.CHM(n);const g=e.oxw();return e.KtG(g.selectedEstado=c)})("onChange",function(){e.CHM(n);const c=e.oxw();return e.KtG(c.onAulaChange())}),e.qZA(),e.TgZ(50,"label",18),e._uU(51,"Estados"),e.qZA(),e.TgZ(52,"small",19),e._uU(53,"Campo obligatorio *"),e.qZA()()()()(),e.TgZ(54,"div",3)(55,"div",4)(56,"div",5)(57,"span",6),e._UZ(58,"input",7),e.TgZ(59,"label",8),e._uU(60,"Puntos valor"),e.qZA()()()()(),e.TgZ(61,"div",3)(62,"div",4)(63,"div",5)(64,"span",6),e._UZ(65,"input",7),e.TgZ(66,"label",8),e._uU(67,"Intentos permitidos"),e.qZA()()()()(),e.TgZ(68,"div",20)(69,"div",21)(70,"div",22)(71,"button",23),e.NdJ("click",function(){e.CHM(n);const c=e.oxw();return e.KtG(c.guardarpreguntas())}),e.qZA(),e.TgZ(72,"button",24),e.NdJ("click",function(){e.CHM(n);const c=e.oxw();return e.KtG(c.closeModal())}),e.qZA()()()()}if(2&o){const n=e.oxw();e.xp6(12),e.Akn(e.DdM(12,H)),e.xp6(4),e.Q6J("ngModel",n.checkboxChecked)("binary",!0),e.xp6(1),e.Q6J("ngIf",n.checkboxChecked),e.xp6(1),e.Q6J("ngIf",n.selectedOptions.length>0),e.xp6(6),e.Akn(e.DdM(13,H)),e.xp6(6),e.Akn(e.DdM(14,H)),e.xp6(19),e.Q6J("options",n.estados)("ngModel",n.selectedEstado)}}let Y=(()=>{class o{constructor(){this.checkboxChecked=!1,this.estados=[{name:"Pendiente"},{name:"En Proceso"},{name:"Culminado"},{name:"Desaprobado"}],this.opciones=[{label:"Alternativa 1",value:1},{label:"Alternativa 2",value:2},{label:"Alternativa 3",value:3},{label:"Alternativa 4",value:4},{label:"Alternativa 5",value:5}],this.selectedOptions=[]}guardarpreguntas(){}closeModal(){}onAulaChange(){}onCheckboxChange(){this.checkboxChecked||(this.selectedOptions=[])}static#e=this.\u0275fac=function(s){return new(s||o)};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-reg-preguntas-docente"]],decls:3,vars:0,consts:[["pTemplate","header"],["pTemplate","content"],[1,"text-primary","font-semibold","text-xl"],[1,"row","mb-4"],[1,"grid","p-fluid"],[1,"field","col-12","md:col-12"],[1,"p-float-label"],["type","text","pInputText",""],[1,"required"],["for",""],["placeholder",""],[1,"field","col-12","md:col-6"],["label","Activar alternativas",3,"ngModel","binary","ngModelChange"],["class","field col-12 md:col-6",4,"ngIf"],["class","row mb-4",4,"ngIf"],[1,"row","bm-4"],[1,"field","md:col-12"],["inputId","dropdownAula","optionLabel","name",3,"options","ngModel","ngModelChange","onChange"],["for","dropdownAula"],[2,"color","brown"],[1,"row"],[1,"flex","justify-content-end","flex-column","sm:flex-row"],[1,"flex","flex-wrap","gap-2"],["pButton","","icon","pi pi-plus","label","Guardar Preguntas","iconPos","right",1,"p-button-success","p-button-sm",3,"click"],["pButton","","label","Cerrar","icon","pi pi-times","iconPos","right",1,"p-button-close-clean",3,"click"],["for","multiSelect"],["id","multiSelect","optionLabel","label",3,"options","ngModel","ngModelChange"],["class","field col-12 md:col-6",4,"ngFor","ngForOf"]],template:function(s,c){1&s&&(e.TgZ(0,"p-panel"),e.YNc(1,J,2,0,"ng-template",0),e.YNc(2,z,73,15,"ng-template",1),e.qZA())},dependencies:[d.sg,d.O5,t.JJ,t.On,b.Hq,Z.jx,m.o,v.NU,h.Lt,f.s,w.ML,I.XZ]})}return o})();const K=["filter"],Q=["dt1"];function $(o,p){1&o&&(e.TgZ(0,"span",2),e._uU(1,"Detalle de preguntas por evaluaciones"),e.qZA())}function L(o,p){if(1&o){const n=e.EpF();e.TgZ(0,"div",10)(1,"div",11)(2,"span",12)(3,"input",13,14),e.NdJ("input",function(c){e.CHM(n),e.oxw();const g=e.MAs(4),q=e.oxw();return e.KtG(q.onGlobalFilter(g,c))}),e.qZA()()(),e.TgZ(5,"div",15)(6,"button",16),e.NdJ("click",function(){e.CHM(n);const c=e.oxw(2);return e.KtG(c.navigateToNuevo())}),e.qZA()()()}}function k(o,p){1&o&&(e.TgZ(0,"tr")(1,"th"),e._uU(2,"C\xf3digo"),e.qZA(),e.TgZ(3,"th"),e._uU(4,"Nombre"),e.qZA(),e.TgZ(5,"th"),e._uU(6,"Tipo"),e.qZA(),e.TgZ(7,"th"),e._uU(8,"Valor"),e.qZA()())}function V(o,p){if(1&o&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA()()),2&o){const n=p.$implicit;e.xp6(2),e.Oqu(n.codigo),e.xp6(2),e.Oqu(n.nombre),e.xp6(2),e.Oqu(n.tipo),e.xp6(2),e.Oqu(n.valor)}}function X(o,p){if(1&o&&(e.TgZ(0,"div",3)(1,"div",4)(2,"div",5)(3,"p-table",6,7),e.YNc(5,L,7,0,"ng-template",8),e.YNc(6,k,9,0,"ng-template",0),e.YNc(7,V,9,4,"ng-template",9),e.qZA()()()()),2&o){const n=e.oxw();e.xp6(3),e.Q6J("value",n.preguntas)("rows",10)("loading",n.loading)("rowHover",!0)("paginator",!0)}}let W=(()=>{class o{constructor(n,s){this.router=n,this.dialogService=s,this.loading=!1,this.preguntas=[{codigo:"154748100",nombre:"Pregunta 1",tipo:"Multiple Choice",valor:10},{codigo:"154748100",nombre:"Pregunta 2",tipo:"Essay",valor:20}]}ngOnInit(){}onGlobalFilter(n,s){n.filterGlobal(s.target.value,"contains")}navigateToNuevo(){this.ref=this.dialogService.open(Y,{width:"60%",styleClass:"custom-dialog-header"}),this.ref.onClose.subscribe(n=>{this.router.routeReuseStrategy.shouldReuseRoute=()=>!1,this.router.onSameUrlNavigation="reload"})}static#e=this.\u0275fac=function(s){return new(s||o)(e.Y36(r.F0),e.Y36(T.xA))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-bandeja-preguntas-docente"]],viewQuery:function(s,c){if(1&s&&(e.Gf(K,5),e.Gf(Q,5)),2&s){let g;e.iGM(g=e.CRH())&&(c.filter=g.first),e.iGM(g=e.CRH())&&(c.tabledt1=g.first)}},decls:3,vars:0,consts:[["pTemplate","header"],["pTemplate","content"],[1,"text-primary","font-semibold","text-xl"],[1,"row","mb-4"],[1,"grid","p-fluid"],[1,"field","md:col-12"],["styleClass","p-datatable-gridlines","responsiveLayout","scroll",1,"custom-search-input",3,"value","rows","loading","rowHover","paginator"],["dt1",""],["pTemplate","caption"],["pTemplate","body"],[1,"flex","justify-content-between","flex-wrap"],[1,"flex-grow-1","mb-2","mr-2"],[1,"p-input-icon-left","w-full"],["pInputText","","type","text","placeholder","Buscar",1,"w-full",3,"input"],["filter",""],[1,"mb-2"],["pButton","","label","Nueva Pregunta","icon","pi pi-question","id","btnNuevo",1,"p-button-primary","mr-2",2,"border-radius","30px",3,"click"]],template:function(s,c){1&s&&(e.TgZ(0,"p-panel"),e.YNc(1,$,2,0,"ng-template",0),e.YNc(2,X,8,5,"ng-template",1),e.qZA())},dependencies:[b.Hq,Z.jx,x.iA,m.o,f.s]})}return o})();const ee=["filter"],te=["dt1"];function ne(o,p){1&o&&(e.TgZ(0,"span",2),e._uU(1,"Gesti\xf3n de Evaluaciones"),e.qZA())}function oe(o,p){if(1&o){const n=e.EpF();e.TgZ(0,"div",13)(1,"div",14)(2,"span",15)(3,"input",16,17),e.NdJ("input",function(c){e.CHM(n),e.oxw();const g=e.MAs(4),q=e.oxw();return e.KtG(q.onGlobalFilter(g,c))}),e.qZA()()(),e.TgZ(5,"div",18)(6,"button",19),e.NdJ("click",function(){e.CHM(n);const c=e.oxw(2);return e.KtG(c.navigateToNuevo())}),e.qZA()()()}}function ae(o,p){1&o&&(e.TgZ(0,"tr")(1,"th",20)(2,"div",21),e._uU(3," C\xf3digo "),e.qZA()(),e.TgZ(4,"th",20)(5,"div",21),e._uU(6," Nombre de curso "),e.qZA()(),e.TgZ(7,"th",20)(8,"div",21),e._uU(9," Nombre "),e.qZA()(),e.TgZ(10,"th",20)(11,"div",21),e._uU(12," Tipo de Evaluaci\xf3n "),e.qZA()(),e.TgZ(13,"th",20)(14,"div",21),e._uU(15," Valor % "),e.qZA()(),e.TgZ(16,"th",20)(17,"div",21),e._uU(18," Acci\xf3n "),e.qZA()()())}function ie(o,p){if(1&o){const n=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td",22)(12,"button",23),e.NdJ("click",function(){e.CHM(n);const c=e.oxw(2);return e.KtG(c.showQuestions())}),e.qZA()()()}if(2&o){const n=p.$implicit;e.xp6(2),e.Oqu(n.codigo),e.xp6(2),e.Oqu(n.nombrecurso),e.xp6(2),e.Oqu(n.nombre),e.xp6(2),e.Oqu(n.tipoeval),e.xp6(2),e.Oqu(n.valor)}}function le(o,p){1&o&&(e.TgZ(0,"tr")(1,"td",24),e._uU(2,"No se encontraron registros"),e.qZA()())}function se(o,p){1&o&&(e.TgZ(0,"tr")(1,"td",24),e._uU(2,"Cargando registros. Por favor espere."),e.qZA()())}function re(o,p){1&o&&(e.TgZ(0,"div",3)(1,"div",4)(2,"div",5),e._UZ(3,"app-bandeja-preguntas-docente"),e.qZA()()())}function ce(o,p){if(1&o&&(e.TgZ(0,"div",3)(1,"div",4)(2,"div",5)(3,"p-table",6,7),e.YNc(5,oe,7,0,"ng-template",8),e.YNc(6,ae,19,0,"ng-template",0),e.YNc(7,ie,13,5,"ng-template",9),e.YNc(8,le,3,0,"ng-template",10),e.YNc(9,se,3,0,"ng-template",11),e.qZA()()()(),e.YNc(10,re,4,0,"div",12)),2&o){const n=e.oxw();e.xp6(3),e.Q6J("value",n.instituciones)("rows",10)("loading",n.loading)("rowHover",!0)("paginator",!0),e.xp6(7),e.Q6J("ngIf",n.showPreguntas)}}let ue=(()=>{class o{constructor(n,s){this.router=n,this.dialogService=s,this.instituciones=[{codigo:"154748100",nombrecurso:"Sistemas",nombre:"Harold Jams Carrillo G",tipoeval:"Escrito",email:"jamscg.developer@gmail.com",valor:"50"},{codigo:"154748100",nombrecurso:"Maniquiuri",nombre:"Ceiber abel contreras T",tipoeval:"Oral",email:"ceiber123@gmail.com",valor:"35"}],this.loading=!1,this.showPreguntas=!1}ngOnInit(){console.log("Datos-extraidos-de-bandeja-colegiado-PARA MIEMBRO"),this.cargaInicial()}cargaInicial(){}showQuestions(){this.showPreguntas=!0}closeQuestions(){this.showPreguntas=!1}navigateToNuevo(){this.ref=this.dialogService.open(l.k,{width:"60%",styleClass:"custom-dialog-header"}),this.ref.onClose.subscribe(n=>{this.router.routeReuseStrategy.shouldReuseRoute=()=>!1,this.router.onSameUrlNavigation="reload"})}onGlobalFilter(n,s){n.filterGlobal(s.target.value,"contains")}onRowSelect(n){console.log("Organo-colegaido-sect")}onRowUnselect(n){}vertodos(){}horarios(){}syllabus(){}foros(){}static#e=this.\u0275fac=function(s){return new(s||o)(e.Y36(r.F0),e.Y36(T.xA))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-evaluaciones-docente-menu"]],viewQuery:function(s,c){if(1&s&&(e.Gf(ee,5),e.Gf(te,5)),2&s){let g;e.iGM(g=e.CRH())&&(c.filter=g.first),e.iGM(g=e.CRH())&&(c.tabledt1=g.first)}},features:[e._Bn([T.xA])],decls:3,vars:0,consts:[["pTemplate","header"],["pTemplate","content"],[1,"text-primary","font-semibold","text-xl"],[1,"row","mb-4"],[1,"grid","p-fluid"],[1,"field","md:col-12"],["styleClass","p-datatable-gridlines","responsiveLayout","scroll",1,"custom-search-input",3,"value","rows","loading","rowHover","paginator"],["dt1",""],["pTemplate","caption"],["pTemplate","body"],["pTemplate","emptymessage"],["pTemplate","loadingbody"],["class","row mb-4",4,"ngIf"],[1,"flex","justify-content-between","flex-wrap"],[1,"flex-grow-1","mb-2","mr-2"],[1,"p-input-icon-left","w-full"],["pInputText","","type","text","placeholder","Buscar",1,"w-full",3,"input"],["filter",""],[1,"mb-2"],["pButton","","label","Nuevo","icon","pi pi-user-plus","id","btnNuevo",1,"p-button-primary","mr-2",2,"border-radius","30px",3,"click"],["scope","col",2,"min-width","10rem"],[1,"flex","justify-content-between","align-items-center"],[1,"flex","justify-content-center","align-items-center","gap-2"],["pButton","","icon","pi pi-question","title","Preguntas",1,"p-button-rounded","p-button-text","p-button-action",3,"click"],["colspan","8"]],template:function(s,c){1&s&&(e.TgZ(0,"p-panel"),e.YNc(1,ne,2,0,"ng-template",0),e.YNc(2,ce,11,6,"ng-template",1),e.qZA())},dependencies:[d.O5,b.Hq,Z.jx,x.iA,m.o,f.s,W]})}return o})(),pe=(()=>{class o{static#e=this.\u0275fac=function(s){return new(s||o)};static#t=this.\u0275mod=e.oAB({type:o});static#n=this.\u0275inj=e.cJS({imports:[r.Bz.forChild([{path:"",component:ue}]),r.Bz]})}return o})(),de=(()=>{class o{static#e=this.\u0275fac=function(s){return new(s||o)};static#t=this.\u0275mod=e.oAB({type:o});static#n=this.\u0275inj=e.cJS({imports:[d.ez,pe,t.u5,E._8,x.U$,N.Xt,b.hJ,U.JH,m.j,P.A,y.KZ,_.T,v.q4,h.kW,f.Q,R.q,C.EV,D.n,A.O,S.z,C.EV,f.Q,x.U$,D.n,F.D,A.O,w.Z_,u.S,T.DL,a.aw,I.nD]})}return o})()},6218:(O,M,i)=>{i.d(M,{A:()=>b,g:()=>x});var d=i(8926),C=i(6814),t=i(6223);let x=(()=>{class m{el;ngModel;control;cd;autoResize;onResize=new d.vpe;filled;cachedScrollHeight;ngModelSubscription;ngControlSubscription;constructor(_,v,h,f){this.el=_,this.ngModel=v,this.control=h,this.cd=f}ngOnInit(){this.ngModel&&(this.ngModelSubscription=this.ngModel.valueChanges.subscribe(()=>{this.updateState()})),this.control&&(this.ngControlSubscription=this.control.valueChanges.subscribe(()=>{this.updateState()}))}ngAfterViewChecked(){this.updateState()}ngAfterViewInit(){this.autoResize&&this.resize(),this.updateFilledState(),this.cd.detectChanges()}onInput(_){this.updateState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length}resize(_){this.el.nativeElement.style.height="auto",this.el.nativeElement.style.height=this.el.nativeElement.scrollHeight+"px",parseFloat(this.el.nativeElement.style.height)>=parseFloat(this.el.nativeElement.style.maxHeight)?(this.el.nativeElement.style.overflowY="scroll",this.el.nativeElement.style.height=this.el.nativeElement.style.maxHeight):this.el.nativeElement.style.overflow="hidden",this.onResize.emit(_||{})}updateState(){this.updateFilledState(),this.autoResize&&this.resize()}ngOnDestroy(){this.ngModelSubscription&&this.ngModelSubscription.unsubscribe(),this.ngControlSubscription&&this.ngControlSubscription.unsubscribe()}static \u0275fac=function(v){return new(v||m)(d.Y36(d.SBq),d.Y36(t.On,8),d.Y36(t.a5,8),d.Y36(d.sBO))};static \u0275dir=d.lG2({type:m,selectors:[["","pInputTextarea",""]],hostAttrs:[1,"p-inputtextarea","p-inputtext","p-component","p-element"],hostVars:4,hostBindings:function(v,h){1&v&&d.NdJ("input",function(E){return h.onInput(E)}),2&v&&d.ekj("p-filled",h.filled)("p-inputtextarea-resizable",h.autoResize)},inputs:{autoResize:"autoResize"},outputs:{onResize:"onResize"}})}return m})(),b=(()=>{class m{static \u0275fac=function(v){return new(v||m)};static \u0275mod=d.oAB({type:m});static \u0275inj=d.cJS({imports:[C.ez]})}return m})()}}]);