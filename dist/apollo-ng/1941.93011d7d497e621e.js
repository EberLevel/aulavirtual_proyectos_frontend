"use strict";(self.webpackChunkapollo_ng=self.webpackChunkapollo_ng||[]).push([[1941],{6013:(f,g,i)=>{i.r(g),i.d(g,{NewProductModule:()=>J});var t=i(6814),m=i(6223),_=i(1214),e=i(8926),c=i(3714),h=i(2169),u=i(5219),s=i(3965),a=i(3722),v=i(707),x=i(4480),M=i(5609),b=i(9537);const w=["buttonEl"];function Z(n,C){1&n&&(e.TgZ(0,"div",37),e._UZ(1,"i",38),e.TgZ(2,"span",39),e._uU(3,"Drop or select images"),e.qZA()())}function T(n,C){if(1&n){const o=e.EpF();e.TgZ(0,"div",42),e.NdJ("mouseenter",function(){const p=e.CHM(o).$implicit,d=e.oxw(3);return e.KtG(d.onImageMouseOver(p))})("mouseleave",function(){const p=e.CHM(o).$implicit,d=e.oxw(3);return e.KtG(d.onImageMouseLeave(p))}),e._UZ(1,"img",43),e.TgZ(2,"button",44,45),e.NdJ("click",function(r){const d=e.CHM(o).$implicit,D=e.oxw(3);return r.stopPropagation(),e.KtG(D.removeImage(d))}),e.qZA()()}if(2&n){const o=C.$implicit;e.xp6(1),e.Q6J("src",o.objectURL,e.LSH)("alt",o.name),e.xp6(1),e.Q6J("id",o.name)}}function y(n,C){if(1&n&&(e.TgZ(0,"div",40),e.YNc(1,T,4,3,"div",41),e.qZA()),2&n){const o=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",o.product.images)}}function P(n,C){if(1&n){const o=e.EpF();e.TgZ(0,"div",34),e.NdJ("click",function(){e.CHM(o),e.oxw();const r=e.MAs(18);return e.KtG(r.advancedFileInput.nativeElement.click())}),e.YNc(1,Z,4,0,"div",35),e.YNc(2,y,2,1,"div",36),e.qZA()}if(2&n){const o=e.oxw();e.xp6(1),e.Q6J("ngIf",!o.product.images.length),e.xp6(1),e.Q6J("ngIf",o.product.images.length)}}const I=function(){return{"border-radius":"20px"}};function N(n,C){if(1&n){const o=e.EpF();e.TgZ(0,"p-chip",46)(1,"span",47),e._uU(2),e.qZA(),e.TgZ(3,"span",48),e.NdJ("click",function(){const p=e.CHM(o).$implicit,d=e.oxw();return e.KtG(d.onChipRemove(p))}),e._UZ(4,"i",49),e.qZA()()}if(2&n){const o=C.$implicit;e.Akn(e.DdM(3,I)),e.xp6(2),e.Oqu(o)}}function O(n,C){1&n&&e._UZ(0,"i",52)}function A(n,C){if(1&n){const o=e.EpF();e.TgZ(0,"div",50),e.NdJ("click",function(){const p=e.CHM(o).$implicit,d=e.oxw();return e.KtG(d.onColorSelect(p.name))}),e.YNc(1,O,1,0,"i",51),e.qZA()}if(2&n){const o=C.$implicit,l=e.oxw();e.Tol(o.background),e.xp6(1),e.Q6J("ngIf",-1!==l.product.colors.indexOf(o.name))}}const U=function(){return{height:"250px"}};let E=(()=>{class n{constructor(){this.text="",this.categoryOptions=["Sneakers","Apparel","Socks"],this.colorOptions=[{name:"Black",background:"bg-gray-900"},{name:"Orange",background:"bg-orange-500"},{name:"Navy",background:"bg-blue-500"}],this.product={name:"",price:"",code:"",sku:"",status:"Draft",tags:["Nike","Sneaker"],category:"Sneakers",colors:["Blue"],stock:"Sneakers",inStock:!0,description:"",images:[]},this.uploadedFiles=[],this.showRemove=!1}onChipRemove(o){this.product.tags=this.product.tags.filter(l=>l!==o)}onColorSelect(o){-1==this.product.colors.indexOf(o)?this.product.colors.push(o):this.product.colors.splice(this.product.colors.indexOf(o),1)}onUpload(o){for(let l of o.files)this.product.images.push(l)}onImageMouseOver(o){this.buttonEl.toArray().forEach(l=>{l.nativeElement.id===o.name&&(l.nativeElement.style.display="flex")})}onImageMouseLeave(o){this.buttonEl.toArray().forEach(l=>{l.nativeElement.id===o.name&&(l.nativeElement.style.display="none")})}removeImage(o){this.product.images=this.product.images.filter(l=>l!==o)}static#e=this.\u0275fac=function(l){return new(l||n)};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["ng-component"]],viewQuery:function(l,r){if(1&l&&e.Gf(w,5),2&l){let p;e.iGM(p=e.CRH())&&(r.buttonEl=p)}},decls:58,vars:21,consts:[[1,"card"],[1,"block","text-900","font-bold","text-xl","mb-4"],[1,"grid","grid-nogutter","flex-wrap","gap-3","p-fluid"],[1,"col-12","lg:col-8"],[1,"grid","formgrid"],[1,"col-12","field"],["pInputText","","type","text","placeholder","Product Name","label","Product Name",3,"ngModel","ngModelChange"],[1,"col-12","lg:col-4","field"],["pInputText","","type","text","placeholder","Price","label","Price",3,"ngModel","ngModelChange"],["pInputText","","type","text","placeholder","Product Code","label","Product Code",3,"ngModel","ngModelChange"],["pInputText","","type","text","placeholder","Product SKU","label","SKU",3,"ngModel","ngModelChange"],[3,"ngModel","ngModelChange"],["name","demo[]","url","./upload.php","accept","image/*","styleClass","border-1 surface-border surface-card border-round",3,"customUpload","multiple","showUploadButton","showCancelButton","auto","onUpload","onSelect"],["fileUploader",""],["pTemplate","content"],[1,"flex-1","w-full","lg:w-3","xl:w-4","flex","flex-column","row-gap-3"],[1,"border-1","surface-border","border-round"],[1,"text-900","font-bold","block","border-bottom-1","surface-border","p-3"],[1,"p-3"],[1,"bg-gray-100","py-2","px-3","flex","align-items-center","border-round"],[1,"text-black-alpha-90","font-bold","mr-3"],[1,"text-black-alpha-60","font-semibold"],["pButton","","pRipple","","type","button","icon","pi pi-fw pi-pencil",1,"p-button-rounded","p-button-text","text-black-alpha-60","ml-auto"],[1,"p-3","flex","flex-wrap","gap-1"],["styleClass","mr-2 py-2 px-3 text-900 font-bold surface-card border-1 surface-border",3,"style",4,"ngFor","ngForOf"],["placeholder","Select a category",3,"options","ngModel","ngModelChange"],[1,"p-3","flex"],["class","w-2rem h-2rem mr-2 border-1 surface-border border-circle cursor-pointer flex justify-content-center align-items-center",3,"class","click",4,"ngFor","ngForOf"],["placeholder","Select stock",3,"options","ngModel","ngModelChange"],[1,"border-1","surface-border","flex","justify-content-between","align-items-center","py-2","px-3","border-round"],[1,"text-900","font-bold","p-3"],[1,"flex","flex-column","sm:flex-row","justify-content-between","align-items-center","gap-3","py-2"],["pButton","","pRipple","","label","Discard","icon","pi pi-fw pi-trash",1,"p-button-danger","flex-1","p-button-outlined"],["pButton","","pRipple","","label","Save","icon","pi pi-fw pi-check",1,"p-button-primary","flex-1","border-round"],[1,"h-15rem","overflow-y-auto","py-3","border-round",2,"cursor","copy",3,"click"],["class","flex flex-column w-full h-full justify-content-center align-items-center",4,"ngIf"],["class","flex flex-wrap gap-3 border-round",4,"ngIf"],[1,"flex","flex-column","w-full","h-full","justify-content-center","align-items-center"],[1,"pi","pi-file","text-4xl","text-primary"],[1,"block","font-semibold","text-900","text-lg","mt-3"],[1,"flex","flex-wrap","gap-3","border-round"],["class","h-full relative w-7rem h-7rem border-3 border-transparent border-round hover:bg-primary transition-duration-100 cursor-auto","style","padding: 1px;",3,"mouseenter","mouseleave",4,"ngFor","ngForOf"],[1,"h-full","relative","w-7rem","h-7rem","border-3","border-transparent","border-round","hover:bg-primary","transition-duration-100","cursor-auto",2,"padding","1px",3,"mouseenter","mouseleave"],[1,"w-full","h-full","border-round","shadow-2",3,"src","alt"],["pButton","","pRipple","","type","button","icon","pi pi-times",1,"p-button-rounded","p-button-primary","text-sm","absolute","justify-content-center","align-items-center","cursor-pointer","w-2rem","h-2rem",2,"top","-10px","right","-10px","display","none",3,"id","click"],["buttonEl",""],["styleClass","mr-2 py-2 px-3 text-900 font-bold surface-card border-1 surface-border"],[1,"mr-3"],[1,"chip-remove-icon","flex","align-items-center","justify-content-center","border-1","surface-border","bg-gray-100","border-circle","cursor-pointer",3,"click"],[1,"pi","pi-fw","pi-times","text-black-alpha-60"],[1,"w-2rem","h-2rem","mr-2","border-1","surface-border","border-circle","cursor-pointer","flex","justify-content-center","align-items-center",3,"click"],["class","pi pi-check text-sm text-white",4,"ngIf"],[1,"pi","pi-check","text-sm","text-white"]],template:function(l,r){1&l&&(e.TgZ(0,"div",0)(1,"span",1),e._uU(2,"Create Product"),e.qZA(),e.TgZ(3,"div",2)(4,"div",3)(5,"div",4)(6,"div",5)(7,"input",6),e.NdJ("ngModelChange",function(d){return r.product.name=d}),e.qZA()(),e.TgZ(8,"div",7)(9,"input",8),e.NdJ("ngModelChange",function(d){return r.product.price=d}),e.qZA()(),e.TgZ(10,"div",7)(11,"input",9),e.NdJ("ngModelChange",function(d){return r.product.code=d}),e.qZA()(),e.TgZ(12,"div",7)(13,"input",10),e.NdJ("ngModelChange",function(d){return r.product.sku=d}),e.qZA()(),e.TgZ(14,"div",5)(15,"p-editor",11),e.NdJ("ngModelChange",function(d){return r.product.description=d}),e.qZA()(),e.TgZ(16,"div",5)(17,"p-fileUpload",12,13),e.NdJ("onUpload",function(d){return r.onUpload(d)})("onSelect",function(d){return r.onUpload(d)}),e.YNc(19,P,3,2,"ng-template",14),e.qZA()()()(),e.TgZ(20,"div",15)(21,"div",16)(22,"span",17),e._uU(23,"Publish"),e.qZA(),e.TgZ(24,"div",18)(25,"div",19)(26,"span",20),e._uU(27,"Status:"),e.qZA(),e.TgZ(28,"span",21),e._uU(29),e.qZA(),e._UZ(30,"button",22),e.qZA()()(),e.TgZ(31,"div",16)(32,"span",17),e._uU(33,"Tags"),e.qZA(),e.TgZ(34,"div",23),e.YNc(35,N,5,4,"p-chip",24),e.qZA()(),e.TgZ(36,"div",16)(37,"span",17),e._uU(38,"Category"),e.qZA(),e.TgZ(39,"div",18)(40,"p-dropdown",25),e.NdJ("ngModelChange",function(d){return r.product.category=d}),e.qZA()()(),e.TgZ(41,"div",16)(42,"span",17),e._uU(43,"Colors"),e.qZA(),e.TgZ(44,"div",26),e.YNc(45,A,2,3,"div",27),e.qZA()(),e.TgZ(46,"div",16)(47,"span",17),e._uU(48,"Stock"),e.qZA(),e.TgZ(49,"div",18)(50,"p-dropdown",28),e.NdJ("ngModelChange",function(d){return r.product.stock=d}),e.qZA()()(),e.TgZ(51,"div",29)(52,"span",30),e._uU(53,"In stock"),e.qZA(),e.TgZ(54,"p-inputSwitch",11),e.NdJ("ngModelChange",function(d){return r.product.inStock=d}),e.qZA()(),e.TgZ(55,"div",31),e._UZ(56,"button",32)(57,"button",33),e.qZA()()()()),2&l&&(e.xp6(7),e.Q6J("ngModel",r.product.name),e.xp6(2),e.Q6J("ngModel",r.product.price),e.xp6(2),e.Q6J("ngModel",r.product.code),e.xp6(2),e.Q6J("ngModel",r.product.sku),e.xp6(2),e.Akn(e.DdM(20,U)),e.Q6J("ngModel",r.product.description),e.xp6(2),e.Q6J("customUpload",!0)("multiple",!0)("showUploadButton",!0)("showCancelButton",!1)("auto",!0),e.xp6(12),e.Oqu(r.product.status),e.xp6(6),e.Q6J("ngForOf",r.product.tags),e.xp6(5),e.Q6J("options",r.categoryOptions)("ngModel",r.product.category),e.xp6(5),e.Q6J("ngForOf",r.colorOptions),e.xp6(5),e.Q6J("options",r.categoryOptions)("ngModel",r.product.stock),e.xp6(4),e.Q6J("ngModel",r.product.inStock))},dependencies:[t.sg,t.O5,c.o,h.A,u.jx,s.Lt,m.Fj,m.JJ,m.On,a.p,v.Hq,x.H,M.Ql,b.ML],styles:[".chip-remove-icon[_ngcontent-%COMP%]{width:1.5rem;height:1.5rem}.chip-remove-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:9px}[_nghost-%COMP%]     .p-fileupload{padding:0}[_nghost-%COMP%]     .p-fileupload .p-fileupload-buttonbar{display:none}[_nghost-%COMP%]     .p-fileupload .p-fileupload-content{border:0 none}[_nghost-%COMP%]     .p-fileupload .p-fileupload-row{display:none}[_nghost-%COMP%]     .p-fileupload .p-progressbar{display:none}"]})}return n})(),k=(()=>{class n{static#e=this.\u0275fac=function(l){return new(l||n)};static#t=this.\u0275mod=e.oAB({type:n});static#o=this.\u0275inj=e.cJS({imports:[_.Bz.forChild([{path:"",component:E}]),_.Bz]})}return n})(),J=(()=>{class n{static#e=this.\u0275fac=function(l){return new(l||n)};static#t=this.\u0275mod=e.oAB({type:n});static#o=this.\u0275inj=e.cJS({imports:[t.ez,k,c.j,h.o,s.kW,m.u5,a.O,v.hJ,x.T,M.Iu,b.Z_]})}return n})()},4552:(f,g,i)=>{i.d(g,{l:()=>t});const t={now:()=>(t.delegate||Date).now(),delegate:void 0}},2736:(f,g,i)=>{i.d(g,{L:()=>e});var t=i(8926),m=i(4713),_=i(2332);let e=(()=>{class c extends m.s{pathId;ngOnInit(){this.pathId="url(#"+(0,_.Th)()+")"}static \u0275fac=function(){let u;return function(a){return(u||(u=t.n5z(c)))(a||c)}}();static \u0275cmp=t.Xpm({type:c,selectors:[["ExclamationTriangleIcon"]],standalone:!0,features:[t.qOj,t.jDz],decls:8,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M13.4018 13.1893H0.598161C0.49329 13.189 0.390283 13.1615 0.299143 13.1097C0.208003 13.0578 0.131826 12.9832 0.0780112 12.8932C0.0268539 12.8015 0 12.6982 0 12.5931C0 12.4881 0.0268539 12.3848 0.0780112 12.293L6.47985 1.08982C6.53679 1.00399 6.61408 0.933574 6.70484 0.884867C6.7956 0.836159 6.897 0.810669 7 0.810669C7.103 0.810669 7.2044 0.836159 7.29516 0.884867C7.38592 0.933574 7.46321 1.00399 7.52015 1.08982L13.922 12.293C13.9731 12.3848 14 12.4881 14 12.5931C14 12.6982 13.9731 12.8015 13.922 12.8932C13.8682 12.9832 13.792 13.0578 13.7009 13.1097C13.6097 13.1615 13.5067 13.189 13.4018 13.1893ZM1.63046 11.989H12.3695L7 2.59425L1.63046 11.989Z","fill","currentColor"],["d","M6.99996 8.78801C6.84143 8.78594 6.68997 8.72204 6.57787 8.60993C6.46576 8.49782 6.40186 8.34637 6.39979 8.18784V5.38703C6.39979 5.22786 6.46302 5.0752 6.57557 4.96265C6.68813 4.85009 6.84078 4.78686 6.99996 4.78686C7.15914 4.78686 7.31179 4.85009 7.42435 4.96265C7.5369 5.0752 7.60013 5.22786 7.60013 5.38703V8.18784C7.59806 8.34637 7.53416 8.49782 7.42205 8.60993C7.30995 8.72204 7.15849 8.78594 6.99996 8.78801Z","fill","currentColor"],["d","M6.99996 11.1887C6.84143 11.1866 6.68997 11.1227 6.57787 11.0106C6.46576 10.8985 6.40186 10.7471 6.39979 10.5885V10.1884C6.39979 10.0292 6.46302 9.87658 6.57557 9.76403C6.68813 9.65147 6.84078 9.58824 6.99996 9.58824C7.15914 9.58824 7.31179 9.65147 7.42435 9.76403C7.5369 9.87658 7.60013 10.0292 7.60013 10.1884V10.5885C7.59806 10.7471 7.53416 10.8985 7.42205 11.0106C7.30995 11.1227 7.15849 11.1866 6.99996 11.1887Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(s,a){1&s&&(t.O4$(),t.TgZ(0,"svg",0)(1,"g"),t._UZ(2,"path",1)(3,"path",2)(4,"path",3),t.qZA(),t.TgZ(5,"defs")(6,"clipPath",4),t._UZ(7,"rect",5),t.qZA()()()),2&s&&(t.Tol(a.getClassNames()),t.uIk("aria-label",a.ariaLabel)("aria-hidden",a.ariaHidden)("role",a.role),t.xp6(1),t.uIk("clip-path",a.pathId),t.xp6(5),t.Q6J("id",a.pathId))},encapsulation:2})}return c})()},3823:(f,g,i)=>{i.d(g,{u:()=>e});var t=i(8926),m=i(4713),_=i(2332);let e=(()=>{class c extends m.s{pathId;ngOnInit(){this.pathId="url(#"+(0,_.Th)()+")"}static \u0275fac=function(){let u;return function(a){return(u||(u=t.n5z(c)))(a||c)}}();static \u0275cmp=t.Xpm({type:c,selectors:[["InfoCircleIcon"]],standalone:!0,features:[t.qOj,t.jDz],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M3.11101 12.8203C4.26215 13.5895 5.61553 14 7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.61553 13.5895 4.26215 12.8203 3.11101C12.0511 1.95987 10.9579 1.06266 9.67879 0.532846C8.3997 0.00303296 6.99224 -0.13559 5.63437 0.134506C4.2765 0.404603 3.02922 1.07129 2.05026 2.05026C1.07129 3.02922 0.404603 4.2765 0.134506 5.63437C-0.13559 6.99224 0.00303296 8.3997 0.532846 9.67879C1.06266 10.9579 1.95987 12.0511 3.11101 12.8203ZM3.75918 2.14976C4.71846 1.50879 5.84628 1.16667 7 1.16667C8.5471 1.16667 10.0308 1.78125 11.1248 2.87521C12.2188 3.96918 12.8333 5.45291 12.8333 7C12.8333 8.15373 12.4912 9.28154 11.8502 10.2408C11.2093 11.2001 10.2982 11.9478 9.23232 12.3893C8.16642 12.8308 6.99353 12.9463 5.86198 12.7212C4.73042 12.4962 3.69102 11.9406 2.87521 11.1248C2.05941 10.309 1.50384 9.26958 1.27876 8.13803C1.05367 7.00647 1.16919 5.83358 1.61071 4.76768C2.05222 3.70178 2.79989 2.79074 3.75918 2.14976ZM7.00002 4.8611C6.84594 4.85908 6.69873 4.79698 6.58977 4.68801C6.48081 4.57905 6.4187 4.43185 6.41669 4.27776V3.88888C6.41669 3.73417 6.47815 3.58579 6.58754 3.4764C6.69694 3.367 6.84531 3.30554 7.00002 3.30554C7.15473 3.30554 7.3031 3.367 7.4125 3.4764C7.52189 3.58579 7.58335 3.73417 7.58335 3.88888V4.27776C7.58134 4.43185 7.51923 4.57905 7.41027 4.68801C7.30131 4.79698 7.1541 4.85908 7.00002 4.8611ZM7.00002 10.6945C6.84594 10.6925 6.69873 10.6304 6.58977 10.5214C6.48081 10.4124 6.4187 10.2652 6.41669 10.1111V6.22225C6.41669 6.06754 6.47815 5.91917 6.58754 5.80977C6.69694 5.70037 6.84531 5.63892 7.00002 5.63892C7.15473 5.63892 7.3031 5.70037 7.4125 5.80977C7.52189 5.91917 7.58335 6.06754 7.58335 6.22225V10.1111C7.58134 10.2652 7.51923 10.4124 7.41027 10.5214C7.30131 10.6304 7.1541 10.6925 7.00002 10.6945Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(s,a){1&s&&(t.O4$(),t.TgZ(0,"svg",0)(1,"g"),t._UZ(2,"path",1),t.qZA(),t.TgZ(3,"defs")(4,"clipPath",2),t._UZ(5,"rect",3),t.qZA()()()),2&s&&(t.Tol(a.getClassNames()),t.uIk("aria-label",a.ariaLabel)("aria-hidden",a.ariaHidden)("role",a.role),t.xp6(1),t.uIk("clip-path",a.pathId),t.xp6(3),t.Q6J("id",a.pathId))},encapsulation:2})}return c})()},8468:(f,g,i)=>{i.d(g,{x:()=>e});var t=i(8926),m=i(4713),_=i(2332);let e=(()=>{class c extends m.s{pathId;ngOnInit(){this.pathId="url(#"+(0,_.Th)()+")"}static \u0275fac=function(){let u;return function(a){return(u||(u=t.n5z(c)))(a||c)}}();static \u0275cmp=t.Xpm({type:c,selectors:[["TimesCircleIcon"]],standalone:!0,features:[t.qOj,t.jDz],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(s,a){1&s&&(t.O4$(),t.TgZ(0,"svg",0)(1,"g"),t._UZ(2,"path",1),t.qZA(),t.TgZ(3,"defs")(4,"clipPath",2),t._UZ(5,"rect",3),t.qZA()()()),2&s&&(t.Tol(a.getClassNames()),t.uIk("aria-label",a.ariaLabel)("aria-hidden",a.ariaHidden)("role",a.role),t.xp6(1),t.uIk("clip-path",a.pathId),t.xp6(3),t.Q6J("id",a.pathId))},encapsulation:2})}return c})()}}]);