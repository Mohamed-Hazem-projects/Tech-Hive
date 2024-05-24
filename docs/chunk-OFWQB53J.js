import{b as z,d as F,e as V,g as N,i as R,j as q,m as Q,n as Y,o as A,q as D,r as G}from"./chunk-OU2ICHVS.js";import{C as f,E as l,G as n,H as t,I as o,L as u,M as _,N as P,Q as w,R as S,S as b,T as M,U as e,Y as y,_ as h,fa as E,ha as I,ka as k,l as O,n as v,pa as T,r as d,s as p,y as s}from"./chunk-HAKFRK7R.js";var H=["theForm"],L=i=>({touched:i});function U(i,r){i&1&&(n(0,"p"),o(1,"i",26),e(2," Please enter your email "),t())}function j(i,r){i&1&&(n(0,"p"),o(1,"i",26),e(2," Please enter a correct email "),t())}function B(i,r){i&1&&(n(0,"p"),o(1,"i",26),e(2," Please enter your password "),t())}function J(i,r){if(i&1&&(n(0,"div"),f(1,U,3,0,"p",12)(2,j,3,0,"p",12)(3,B,3,0,"p",12),t()),i&2){P();let C=M(5),a=M(8);s(),l("ngIf",!a.touched),s(),l("ngIf",!a.valid&&a.touched),s(),l("ngIf",!C.control.controls.password.valid)}}function K(i,r){if(i&1){let C=u();n(0,"confirm-exit",27),_("closePopup",function(m){d(C);let c=P();return p(c.closePopUp(m))}),t()}}var mn=(()=>{let r=class r{constructor(){this.userInfo={email:"",password:""},this.emailTouched=!1,this.passwordTouched=!1,this.submitClicked=!1,this.confirmExitFlag=!0,this.showConfirmation=!1,this.confirmNav=O(D)}onFormSubmit(){this.submitClicked=!0,this.confirmExitFlag=!0,this.form.valid&&(this.userInfo.email=this.form.value.email,this.userInfo.password=this.form.value.password)}inputChange(a){this.confirmExitFlag=!1,a===1?this.form.value.email!==""?this.emailTouched=!0:this.emailTouched=!1:this.form.value.password!==""?this.passwordTouched=!0:this.passwordTouched=!1}closePopUp(a){this.showConfirmation=a}confirmExit(){return this.confirmExitFlag===!0?!0:(this.showConfirmation=!0,this.confirmNav.confirmNavEvent)}};r.\u0275fac=function(m){return new(m||r)},r.\u0275cmp=v({type:r,selectors:[["app-sign-in"]],viewQuery:function(m,c){if(m&1&&w(H,5),m&2){let g;S(g=b())&&(c.form=g.first)}},standalone:!0,features:[y],decls:67,vars:8,consts:[["theForm","ngForm"],["email","ngModel"],[1,"main"],[1,"form"],["action","",3,"ngSubmit"],[1,"email"],["type","text","name","email","id","email","ngModel","","required","","email","",3,"change","ngClass"],["for","email"],[1,"password"],["type","password","name","password","id","password","ngModel","","required","",3,"change","ngClass"],["for","password"],["type","submit","value","Sign In"],[4,"ngIf"],[1,"or"],["routerLink","/Home"],[1,"fa-solid","fa-arrow-right"],[1,"createacc"],[1,"part"],["src","assets/images/sign1.svg","alt",""],[1,"writing"],["src","assets/images/sign2.svg","alt",""],["src","assets/images/sign3.svg","alt",""],["src","assets/images/sign4.svg","alt",""],["src","assets/images/sign5.svg","alt",""],["routerLink","/Register"],[3,"closePopup",4,"ngIf"],[1,"fa-solid","fa-xmark"],[3,"closePopup"]],template:function(m,c){if(m&1){let g=u();n(0,"div",2)(1,"div",3)(2,"h2"),e(3,"Sign In"),t(),n(4,"form",4,0),_("ngSubmit",function(){return d(g),p(c.onFormSubmit())}),n(6,"div",5)(7,"input",6,1),_("change",function(){return d(g),p(c.inputChange(1))}),t(),n(9,"label",7),e(10,"Email"),t()(),n(11,"div",8)(12,"input",9),_("change",function(){return d(g),p(c.inputChange(2))}),t(),n(13,"label",10),e(14,"Password"),t()(),o(15,"input",11),f(16,J,4,3,"div",12),t(),n(17,"div",13)(18,"p"),e(19,"Or"),t(),o(20,"span"),t(),n(21,"a",14),e(22,"Continue as Guest "),o(23,"i",15),t()(),n(24,"div",16)(25,"h2"),e(26,"New Customer?"),t(),n(27,"p"),e(28,"Create an account with us and you'll be able to:"),t(),n(29,"div",17),o(30,"img",18),n(31,"div",19)(32,"h3"),e(33,"Get Reward"),t(),n(34,"p"),e(35," You can receive reward points with every purchase which will be discounted for cash in the next purchase. "),t()()(),n(36,"div",17),o(37,"img",20),n(38,"div",19)(39,"h3"),e(40,"Access Order History"),t(),n(41,"p"),e(42," Check the details and status of your order history in your account. "),t()()(),n(43,"div",17),o(44,"img",21),n(45,"div",19)(46,"h3"),e(47,"Track Order Status"),t(),n(48,"p"),e(49," Check the details and status of your orders and returns in your account. "),t()()(),n(50,"div",17),o(51,"img",22),n(52,"div",19)(53,"h3"),e(54,"Stay Informed"),t(),n(55,"p"),e(56," Receive our e-mail updates about new products, promotions and more. "),t()()(),n(57,"div",17),o(58,"img",23),n(59,"div",19)(60,"h3"),e(61,"Faster, Easier Checkout"),t(),n(62,"p"),e(63," The system will remember the last checkout information and bring it in automatically. "),t()()(),n(64,"button",24),e(65,"Create Account"),t()()(),f(66,K,1,0,"confirm-exit",25)}m&2&&(s(7),l("ngClass",h(4,L,c.emailTouched)),s(5),l("ngClass",h(6,L,c.passwordTouched)),s(4),l("ngIf",c.submitClicked),s(50),l("ngIf",c.showConfirmation))},dependencies:[T,A,q,z,F,V,Q,Y,R,N,k,E,I,G],styles:['.main[_ngcontent-%COMP%] > .form[_ngcontent-%COMP%] > form[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > input.touched[_ngcontent-%COMP%] ~ label[_ngcontent-%COMP%]{top:0%;transform:translateY(-10%)}input.ng-invalid.ng-touched.ng-dirty[_ngcontent-%COMP%]{box-shadow:inset 0 0 3px #ff000078}input.ng-invalid.ng-touched.ng-dirty[_ngcontent-%COMP%] ~ label[_ngcontent-%COMP%]:before{content:"x";color:red;position:relative;left:290px;font-size:16px;display:inline-block;width:0px}.main[_ngcontent-%COMP%]{color:#333;display:flex;flex-direction:row;padding:80px;width:100%}@media (max-width: 1250px){.main[_ngcontent-%COMP%]{flex-direction:column}}@media (max-width: 500px){.main[_ngcontent-%COMP%]{padding:20px}}.main[_ngcontent-%COMP%] > .form[_ngcontent-%COMP%]{width:50%;display:flex;align-items:center;flex-direction:column}@media (max-width: 1250px){.main[_ngcontent-%COMP%] > .form[_ngcontent-%COMP%]{width:100%}}.main[_ngcontent-%COMP%] > .form[_ngcontent-%COMP%] > h2[_ngcontent-%COMP%]{margin:0 0 40px;font-size:45px}@media (max-width: 615px){.main[_ngcontent-%COMP%] > .form[_ngcontent-%COMP%] > h2[_ngcontent-%COMP%]{font-size:30px}}.main[_ngcontent-%COMP%] > .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{position:relative}.main[_ngcontent-%COMP%] > .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding:0 8px;margin:10px 0;width:330px;height:40px;border-radius:4px;font-size:1.2rem;outline:none;border:1px solid #333333}.main[_ngcontent-%COMP%] > .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus ~ label[_ngcontent-%COMP%]{top:0%;transform:translateY(-10%)}.main[_ngcontent-%COMP%] > .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{position:absolute;left:5px;color:#5c5b5ba7;font-size:13px;top:50%;transform:translateY(-50%);padding:2px;background:#fff;border-radius:2px;cursor:text;transition:.2s}.main[_ngcontent-%COMP%] > .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{margin-top:25px;width:330px;font-size:1.3rem;font-weight:700;background-color:transparent;border-radius:30px;padding:7px 20px;cursor:pointer;transition:background-color .3s,color .3s}.main[_ngcontent-%COMP%] > .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]:hover{background-color:#333;color:#fff}.main[_ngcontent-%COMP%] > .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;color:red}.main[_ngcontent-%COMP%] > .form[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative}.main[_ngcontent-%COMP%] > .form[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{margin:20px 0;font-weight:700;font-size:20px;padding:5px 14px;position:relative;background-color:#fff;z-index:5}.main[_ngcontent-%COMP%] > .form[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{position:absolute;height:2px;width:330px;background-color:#333;transform:translate(-42.95%);top:37px;z-index:1}.main[_ngcontent-%COMP%] > .form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin-bottom:20px}.main[_ngcontent-%COMP%] > .form[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:visited{color:#1694f5}.main[_ngcontent-%COMP%] > .createacc[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:50%;padding-right:8%}@media (max-width: 1250px){.main[_ngcontent-%COMP%] > .createacc[_ngcontent-%COMP%]{width:100%}}@media (max-width: 1250px){.main[_ngcontent-%COMP%] > .createacc[_ngcontent-%COMP%]{padding:100px}}@media (max-width: 800px){.main[_ngcontent-%COMP%] > .createacc[_ngcontent-%COMP%]{padding:50px}}@media (max-width: 615px){.main[_ngcontent-%COMP%] > .createacc[_ngcontent-%COMP%]{padding:20px;align-items:center}}@media (max-width: 485px){.main[_ngcontent-%COMP%] > .createacc[_ngcontent-%COMP%]{padding:5px}}.main[_ngcontent-%COMP%] > .createacc[_ngcontent-%COMP%] > h2[_ngcontent-%COMP%]{margin:0;font-size:2.05rem}@media (max-width: 615px){.main[_ngcontent-%COMP%] > .createacc[_ngcontent-%COMP%] > h2[_ngcontent-%COMP%]{font-size:1.6rem}}.main[_ngcontent-%COMP%] > .createacc[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{font-size:1.2rem;margin-top:.5rem}@media (max-width: 615px){.main[_ngcontent-%COMP%] > .createacc[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{font-size:.875rem;text-align:center}}.main[_ngcontent-%COMP%] > .createacc[_ngcontent-%COMP%] > .part[_ngcontent-%COMP%]{display:flex}.main[_ngcontent-%COMP%] > .createacc[_ngcontent-%COMP%] > .part[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{padding:20px 20px 20px 0}.main[_ngcontent-%COMP%] > .createacc[_ngcontent-%COMP%] > .part[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.6rem;font-weight:700;margin-bottom:0;margin-top:10px}@media (max-width: 615px){.main[_ngcontent-%COMP%] > .createacc[_ngcontent-%COMP%] > .part[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.4rem}}.main[_ngcontent-%COMP%] > .createacc[_ngcontent-%COMP%] > .part[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{line-height:1.8rem;font-size:1.2rem;margin:9px 0}@media (max-width: 615px){.main[_ngcontent-%COMP%] > .createacc[_ngcontent-%COMP%] > .part[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.875rem;line-height:1.3rem}}.main[_ngcontent-%COMP%] > .createacc[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{margin-top:25px;width:330px;font-size:1.3rem;background-color:transparent;border-radius:30px;padding:7px 20px;cursor:pointer;transition:background-color .3s,color .3s}.main[_ngcontent-%COMP%] > .createacc[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:hover{background-color:#333;color:#fff}']});let i=r;return i})();export{mn as SignInComponent};