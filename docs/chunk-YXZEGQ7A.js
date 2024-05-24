import{a as $,b as j,c as x,d as Z,e as B,f as J,h,j as K,k as Q,l as X,p as ee,q as ne,r as te}from"./chunk-OU2ICHVS.js";import{C as g,E as r,G as i,H as l,I as f,L as O,M as u,N as _,U as m,Y as U,_ as c,fa as G,ha as Y,ka as D,l as A,n as W,pa as H,r as M,s as w,y as a}from"./chunk-HAKFRK7R.js";var C=class{static required(t){return t.value===""?{requiredPW:!0}:null}static minLength(t){return t.value.length<8?{pwMinLength:!0}:null}static lowerUpper(t){return/[A-Z]+/.test(t.value)&&/[a-z]+/.test(t.value)?null:{lowerUpper:!0}}static numberPW(t){return/[0-9]+/.test(t.value)?null:{numbermin:!0}}static specialChar(t){return/[-+_!@#$%^&*.,?()]/.test(t.value)?null:{specialChar:!0}}static confirmPassword(t){let s=t.get("password")?.value,o=t.get("confirmPW")?.value;return s&&o&&s===o?null:{confirmPW:!0}}};var v=e=>({touched:e}),P=e=>({greenify:e});function ie(e,t){e&1&&(i(0,"small"),m(1,"*First Name is required."),l())}function re(e,t){e&1&&(i(0,"small"),m(1,"*Last Name is required."),l())}function oe(e,t){e&1&&(i(0,"small"),m(1,"*A correct e-mail is required. (ex:mo12@gmail.com)"),l())}function le(e,t){if(e&1){let s=O();i(0,"i",36),u("click",function(){M(s);let p=_();return w(p.showPassword=!p.showPassword)}),l()}}function ae(e,t){if(e&1){let s=O();i(0,"i",37),u("click",function(){M(s);let p=_();return w(p.showPassword=!p.showPassword)}),l()}}function se(e,t){e&1&&f(0,"i",38)}function me(e,t){if(e&1&&f(0,"i",39),e&2){let s,o=_();r("ngClass",c(1,P,!(!((s=o.form.get("password"))==null||s.errors==null)&&s.errors.pwMinLength)))}}function pe(e,t){e&1&&f(0,"i",38)}function ce(e,t){if(e&1&&f(0,"i",39),e&2){let s,o=_();r("ngClass",c(1,P,!(!((s=o.form.get("password"))==null||s.errors==null)&&s.errors.lowerUpper)))}}function ge(e,t){e&1&&f(0,"i",38)}function ue(e,t){if(e&1&&f(0,"i",39),e&2){let s,o=_();r("ngClass",c(1,P,!(!((s=o.form.get("password"))==null||s.errors==null)&&s.errors.numbermin)))}}function fe(e,t){e&1&&f(0,"i",38)}function _e(e,t){if(e&1&&f(0,"i",39),e&2){let s,o=_();r("ngClass",c(1,P,!(!((s=o.form.get("password"))==null||s.errors==null)&&s.errors.specialChar)))}}function de(e,t){if(e&1){let s=O();i(0,"i",36),u("click",function(){M(s);let p=_();return w(p.showPasswordConfirm=!p.showPasswordConfirm)}),l()}}function Ce(e,t){if(e&1){let s=O();i(0,"i",37),u("click",function(){M(s);let p=_();return w(p.showPasswordConfirm=!p.showPasswordConfirm)}),l()}}function he(e,t){e&1&&(i(0,"small"),m(1,"*Not equal to your password."),l())}function Pe(e,t){e&1&&(i(0,"h4",40),m(1," Your account has been created! "),l())}function Me(e,t){if(e&1){let s=O();i(0,"confirm-exit",41),u("closePopup",function(p){M(s);let n=_();return w(n.closePopUp(p))}),l()}}var Te=(()=>{let t=class t{constructor(){this.confirmExitFlag=!0,this.inputChangeFlags=[!1,!1,!1,!1,!1,!1],this.showPassword=!1,this.showPasswordConfirm=!1,this.formSubmitFlag=!1,this.accountCreated=!1,this.showConfirmation=!1,this.confirmNav=A(ne)}ngOnInit(){this.form=new J({firstname:new h("",x.required),lastname:new h("",x.required),email:new h("",[x.email,x.required]),phoneNo:new h(""),password:new h("",[C.required,C.minLength,C.lowerUpper,C.numberPW,C.specialChar]),confirmPW:new h("",x.required),newsletter:new h(!1)},{validators:C.confirmPassword})}inputChanged(o){switch(this.confirmExitFlag=!1,o){case 0:this.form.value.firstname!==""?this.inputChangeFlags[o]=!0:this.inputChangeFlags[o]=!1;break;case 1:this.form.value.lastname!==""?this.inputChangeFlags[o]=!0:this.inputChangeFlags[o]=!1;break;case 2:this.form.value.email!==""?this.inputChangeFlags[o]=!0:this.inputChangeFlags[o]=!1;break;case 3:this.form.value.phoneNo!==""?this.inputChangeFlags[o]=!0:this.inputChangeFlags[o]=!1;break;case 4:this.form.value.password!==""?this.inputChangeFlags[o]=!0:this.inputChangeFlags[o]=!1;break;case 5:this.form.value.confirmPW!==""?this.inputChangeFlags[o]=!0:this.inputChangeFlags[o]=!1;break}}formSubmitted(){this.form.invalid?this.formSubmitFlag=!0:this.form.valid&&(this.confirmExitFlag=!0,this.user=this.form.value,this.reset(),this.accountCreated=!0)}reset(){this.form.reset({firstname:null,lastname:null,email:null,phoneNo:null,password:"",confirmPW:"",newsletter:!1})}closePopUp(o){this.showConfirmation=o}confirmExit(){return this.confirmExitFlag===!0?!0:(this.showConfirmation=!0,this.confirmNav.confirmNavEvent)}};t.\u0275fac=function(p){return new(p||t)},t.\u0275cmp=W({type:t,selectors:[["app-register"]],standalone:!0,features:[U],decls:71,vars:51,consts:[[1,"main"],[1,"form"],["action","",3,"ngSubmit","formGroup"],[1,"fname"],["type","text","id","fname","formControlName","firstname",3,"change","ngClass"],["for","fname"],[4,"ngIf"],[1,"lname"],["type","text","id","lname","formControlName","lastname",3,"change","ngClass"],["for","lname"],[1,"email"],["type","text","id","email","formControlName","email",3,"change","ngClass"],["for","email"],[1,"phoneNo"],["type","text","name","phoneNo","id","phoneNo","formControlName","phoneNo",3,"change","ngClass"],["for","phoneNo"],[1,"password"],["id","password","formControlName","password",3,"change","type","ngClass"],["for","password"],["class","fa-regular fa-eye",3,"click",4,"ngIf"],["class","fa-regular fa-eye-slash",3,"click",4,"ngIf"],[1,"password-rules"],["class","fa-solid fa-x",4,"ngIf"],["class","fa-solid fa-check",3,"ngClass",4,"ngIf"],[3,"ngClass"],[1,"confirmP"],["id","confirmP","formControlName","confirmPW",3,"change","type","ngClass"],["for","confirmP"],[1,"checks"],["type","checkbox","value","subscribe","formControlName","newsletter"],["for","subscribe"],["type","submit","value","Create Account"],["class","created",4,"ngIf"],[1,"go-to-signin"],["routerLink","/sign-in"],[3,"closePopup",4,"ngIf"],[1,"fa-regular","fa-eye",3,"click"],[1,"fa-regular","fa-eye-slash",3,"click"],[1,"fa-solid","fa-x"],[1,"fa-solid","fa-check",3,"ngClass"],[1,"created"],[3,"closePopup"]],template:function(p,n){if(p&1&&(i(0,"div",0)(1,"div",1)(2,"h2"),m(3,"Create Account"),l(),i(4,"form",2),u("ngSubmit",function(){return n.formSubmitted()}),i(5,"div",3)(6,"input",4),u("change",function(){return n.inputChanged(0)}),l(),i(7,"label",5),m(8,"First Name"),l()(),g(9,ie,2,0,"small",6),i(10,"div",7)(11,"input",8),u("change",function(){return n.inputChanged(1)}),l(),i(12,"label",9),m(13,"Last Name"),l()(),g(14,re,2,0,"small",6),i(15,"div",10)(16,"input",11),u("change",function(){return n.inputChanged(2)}),l(),i(17,"label",12),m(18,"Email Address"),l()(),g(19,oe,2,0,"small",6),i(20,"div",13)(21,"input",14),u("change",function(){return n.inputChanged(3)}),l(),i(22,"label",15),m(23,"Phone Number (Optional)"),l()(),i(24,"div",16)(25,"input",17),u("change",function(){return n.inputChanged(4)}),l(),i(26,"label",18),m(27,"Password"),l(),g(28,le,1,0,"i",19)(29,ae,1,0,"i",20),l(),i(30,"div",21)(31,"h4"),m(32,"Password must contain:"),l(),i(33,"div"),g(34,se,1,0,"i",22)(35,me,1,3,"i",23),i(36,"p",24),m(37," Minimum 8 characters "),l()(),i(38,"div"),g(39,pe,1,0,"i",22)(40,ce,1,3,"i",23),i(41,"p",24),m(42," At least 1 lower case and 1 upper case character. "),l()(),i(43,"div"),g(44,ge,1,0,"i",22)(45,ue,1,3,"i",23),i(46,"p",24),m(47," At least 1 number "),l()(),i(48,"div"),g(49,fe,1,0,"i",22)(50,_e,1,3,"i",23),i(51,"p",24),m(52," At least 1 special character from - + _ ! @ # $ % ^ & * . , ? ( ) (other special characters are not supported) "),l()()(),i(53,"div",25)(54,"input",26),u("change",function(){return n.inputChanged(5)}),l(),i(55,"label",27),m(56,"Re-enter Password"),l(),g(57,de,1,0,"i",19)(58,Ce,1,0,"i",20),l(),g(59,he,2,0,"small",6),i(60,"div",28),f(61,"input",29),i(62,"label",30),m(63,"Subscribe to Hive Tech Newsletter"),l()(),f(64,"input",31),g(65,Pe,2,0,"h4",32),i(66,"p",33),m(67," Have an account? "),i(68,"a",34),m(69,"Sign In"),l()()()()(),g(70,Me,1,0,"confirm-exit",35)),p&2){let d,q,L,b,y,S,F,E,k,N,R,T,I,V,z;a(4),r("formGroup",n.form),a(2),r("ngClass",c(31,v,n.inputChangeFlags[0])),a(3),r("ngIf",((d=n.form.get("firstname"))==null?null:d.invalid)&&n.formSubmitFlag),a(2),r("ngClass",c(33,v,n.inputChangeFlags[1])),a(3),r("ngIf",((q=n.form.get("lastname"))==null?null:q.invalid)&&n.formSubmitFlag),a(2),r("ngClass",c(35,v,n.inputChangeFlags[2])),a(3),r("ngIf",((L=n.form.get("email"))==null?null:L.invalid)&&n.formSubmitFlag),a(2),r("ngClass",c(37,v,n.inputChangeFlags[3])),a(4),r("type",n.showPassword?"tex":"password")("ngClass",c(39,v,n.inputChangeFlags[4])),a(3),r("ngIf",n.showPassword),a(),r("ngIf",!n.showPassword),a(5),r("ngIf",(b=n.form.get("password"))==null||b.errors==null?null:b.errors.pwMinLength),a(),r("ngIf",!(!((y=n.form.get("password"))==null||y.errors==null)&&y.errors.pwMinLength)),a(),r("ngClass",c(41,P,!(!((S=n.form.get("password"))==null||S.errors==null)&&S.errors.pwMinLength))),a(3),r("ngIf",(F=n.form.get("password"))==null||F.errors==null?null:F.errors.lowerUpper),a(),r("ngIf",!(!((E=n.form.get("password"))==null||E.errors==null)&&E.errors.lowerUpper)),a(),r("ngClass",c(43,P,!(!((k=n.form.get("password"))==null||k.errors==null)&&k.errors.lowerUpper))),a(3),r("ngIf",(N=n.form.get("password"))==null||N.errors==null?null:N.errors.numbermin),a(),r("ngIf",!(!((R=n.form.get("password"))==null||R.errors==null)&&R.errors.numbermin)),a(),r("ngClass",c(45,P,!(!((T=n.form.get("password"))==null||T.errors==null)&&T.errors.numbermin))),a(3),r("ngIf",(I=n.form.get("password"))==null||I.errors==null?null:I.errors.specialChar),a(),r("ngIf",!(!((V=n.form.get("password"))==null||V.errors==null)&&V.errors.specialChar)),a(),r("ngClass",c(47,P,!(!((z=n.form.get("password"))==null||z.errors==null)&&z.errors.specialChar))),a(3),r("type",n.showPasswordConfirm?"text":"password")("ngClass",c(49,v,n.inputChangeFlags[5])),a(3),r("ngIf",n.showPasswordConfirm),a(),r("ngIf",!n.showPasswordConfirm),a(),r("ngIf",(n.form.errors==null?null:n.form.errors.confirmPW)&&n.formSubmitFlag),a(6),r("ngIf",n.accountCreated),a(5),r("ngIf",n.showConfirmation)}},dependencies:[D,G,Y,H,ee,K,j,$,Z,B,Q,X,te],styles:['.main[_ngcontent-%COMP%] > .form[_ngcontent-%COMP%] > form[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > input.touched[_ngcontent-%COMP%] ~ label[_ngcontent-%COMP%]{top:0%;transform:translateY(-10%)}input.ng-invalid.ng-touched.ng-dirty[_ngcontent-%COMP%]{box-shadow:inset 0 0 3px #ff000078}input.ng-invalid.ng-touched.ng-dirty[_ngcontent-%COMP%] ~ label[_ngcontent-%COMP%]:before{content:"x";color:red;position:relative;left:290px;font-size:16px;display:inline-block;width:0px}.main[_ngcontent-%COMP%]{color:#333;display:flex;padding:30px;width:100%}@media (max-width: 500px){.main[_ngcontent-%COMP%]{padding:20px}}.main[_ngcontent-%COMP%] > .form[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;flex-direction:column}.main[_ngcontent-%COMP%] > .form[_ngcontent-%COMP%] > h2[_ngcontent-%COMP%]{margin:0 0 20px;font-size:35px}@media (max-width: 615px){.main[_ngcontent-%COMP%] > .form[_ngcontent-%COMP%] > h2[_ngcontent-%COMP%]{font-size:25px}}.main[_ngcontent-%COMP%] > .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(.checks){position:relative}.main[_ngcontent-%COMP%] > .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(.checks)   input[_ngcontent-%COMP%]{padding:0 8px;margin:10px 0;width:330px;height:40px;border-radius:4px;font-size:1.2rem;outline:none;border:1px solid #333333}.main[_ngcontent-%COMP%] > .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(.checks)   input[_ngcontent-%COMP%]:focus ~ label[_ngcontent-%COMP%]{top:0%;transform:translateY(-10%)}.main[_ngcontent-%COMP%] > .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(.checks)   label[_ngcontent-%COMP%]{position:absolute;left:5px;color:#5c5b5ba7;font-size:13px;top:50%;transform:translateY(-50%);padding:2px;background:#fff;border-radius:2px;cursor:text;transition:.2s}.main[_ngcontent-%COMP%] > .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(.checks) > i[_ngcontent-%COMP%]{color:#333333db;position:absolute;right:13px;font-size:20px;top:50%;transform:translateY(-50%);cursor:pointer}.main[_ngcontent-%COMP%] > .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .checks[_ngcontent-%COMP%]{display:flex;align-items:center}.main[_ngcontent-%COMP%] > .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .checks[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{margin-right:10px;width:19px;height:20px;cursor:pointer}.main[_ngcontent-%COMP%] > .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .checks[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{position:relative;top:1px}.main[_ngcontent-%COMP%] > .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:#fe1b1b;position:relative;top:-7px}.main[_ngcontent-%COMP%] > .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .password-rules[_ngcontent-%COMP%]{width:330px;color:#fe1b1b;display:flex;flex-direction:column}.main[_ngcontent-%COMP%] > .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .password-rules[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex}.main[_ngcontent-%COMP%] > .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .password-rules[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#333;margin-top:10px;margin-bottom:5px}.main[_ngcontent-%COMP%] > .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .password-rules[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:left;margin-bottom:3px;margin-top:2px;margin-left:8px;line-height:1.1rem;font-size:14px;letter-spacing:.03rem}.main[_ngcontent-%COMP%] > .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .password-rules[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{display:flex;align-items:flex-start;position:relative;top:6px;font-size:11px}.main[_ngcontent-%COMP%] > .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .password-rules[_ngcontent-%COMP%]   .greenify[_ngcontent-%COMP%]{color:#2ecc4e}.main[_ngcontent-%COMP%] > .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] > .created[_ngcontent-%COMP%]{text-align:center;font-size:19px;color:#2ecc4e;border-radius:50px;border:1px solid #2ecc4e;padding:5px 11px;margin:16px 0;box-shadow:inset 0 0 5px -1px #2ecc4e}.main[_ngcontent-%COMP%] > .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{margin-top:25px;width:330px;font-size:1.3rem;font-weight:700;background-color:transparent;border-radius:30px;padding:7px 20px;cursor:pointer;transition:background-color .3s,color .3s}.main[_ngcontent-%COMP%] > .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]:hover{background-color:#333;color:#fff}.main[_ngcontent-%COMP%] > .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{text-align:center;color:red;font-size:14px}.main[_ngcontent-%COMP%] > .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] > p.go-to-signin[_ngcontent-%COMP%]{color:#333}.main[_ngcontent-%COMP%] > .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] > p.go-to-signin[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#1694f5}.main[_ngcontent-%COMP%] > .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] > p.go-to-signin[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited{color:#1694f5}']});let e=t;return e})();export{Te as RegisterComponent};
