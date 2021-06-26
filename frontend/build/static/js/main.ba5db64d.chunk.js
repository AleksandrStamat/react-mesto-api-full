(this["webpackJsonpreact-mesto-auth"]=this["webpackJsonpreact-mesto-auth"]||[]).push([[0],{17:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(19),i=n.n(o),s=n(8),r=(n(17),n(23)),u=n(2),l=n(3),p=c.a.createContext(),d=n(20),b=n(21),j="https://api.mesto.astamat.ru",m=new(function(){function e(t){var n=t.baseUrl;Object(d.a)(this,e),this._url=n}return Object(b.a)(e,[{key:"_erorrCheck",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getInitialCards",value:function(e){return fetch("".concat(this._url,"/cards"),{headers:{authorization:e,"Content-Type":"application/json"}}).then(this._erorrCheck)}},{key:"getProfile",value:function(e){return fetch("".concat(this._url,"/users/me"),{headers:{authorization:e,"Content-Type":"application/json"}}).then(this._erorrCheck)}},{key:"getAllNeededData",value:function(e){return Promise.all([this.getProfile(e),this.getInitialCards(e)])}},{key:"changeProfile",value:function(e,t){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:{authorization:t,"Content-Type":"application/json"},body:JSON.stringify(e)}).then(this._erorrCheck)}},{key:"changeAvatar",value:function(e,t){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:{authorization:t,"Content-Type":"application/json"},body:JSON.stringify(e)}).then(this._erorrCheck)}},{key:"addCard",value:function(e,t){var n=e.name,a=e.link;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:{authorization:t,"Content-Type":"application/json"},body:JSON.stringify({name:n,link:a})}).then(this._erorrCheck)}},{key:"deleteCard",value:function(e,t){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:{authorization:t,"Content-Type":"application/json"}}).then(this._erorrCheck)}},{key:"toggleLike",value:function(e,t,n){return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:t?"DELETE":"PUT",headers:{authorization:n,"Content-Type":"application/json"}}).then(this._erorrCheck)}}]),e}())({baseUrl:j}),h=n.p+"static/media/logo.a307e1c4.svg",O=n(0);var f=function(e){var t=Object(a.useContext)(p),n=Object(l.h)().pathname,c="".concat("/signin"===n?"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f":"\u0412\u043e\u0439\u0442\u0438"),o="".concat("/signin"===n?"/signup":"/signin");return Object(O.jsx)("header",{className:"header__position",children:Object(O.jsxs)("div",{className:"header",children:[Object(O.jsx)("img",{src:h,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \xabMesto Russia\xbb",className:"header__logo"}),e.loggedIn?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:"header__info-desktop",children:[Object(O.jsx)("span",{children:t.email||""}),Object(O.jsx)("button",{className:"button header__link",onClick:e.loggedOut,children:"\u0412\u044b\u0439\u0442\u0438"})]}),Object(O.jsx)("button",{className:"header__menu  ".concat(e.classHeaderMenu),onClick:function(){e.showMenu("mobile_position")},children:Object(O.jsx)("span",{})})]}):Object(O.jsx)(s.b,{to:o,className:"button header__link",children:c})]})})},g=n.p+"static/media/edit.a086f758.svg",x=n.p+"static/media/plus.bf78040b.svg",v=n.p+"static/media/trash.a274c87c.svg";var _=function(e){var t=Object(a.useContext)(p),n=e.card,c=e.onCardClick,o=e.onCardLike,i=e.onCardDelete,s=n.name,r=n.link,u=n.likes,l=n.owner===t._id,d=n.likes.some((function(e){return e===t._id})),b="button card__button-like ".concat(d?"card__button-like_solid":""),j="button card__button-delete ".concat(l?"":"card__button-delete_invisible");return Object(O.jsxs)("article",{className:"card",children:[Object(O.jsx)("img",{src:r,alt:s,className:"card__image",onClick:function(){c(n)}}),Object(O.jsx)("button",{className:j,type:"submit",onClick:function(){i(n)},children:Object(O.jsx)("img",{alt:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",className:"card__button-delete-vector",src:v})}),Object(O.jsxs)("div",{className:"card__description",children:[Object(O.jsx)("h2",{className:"card__name",children:s}),Object(O.jsxs)("div",{className:"card__likes-container",children:[Object(O.jsx)("button",{className:b,type:"submit",onClick:function(){o(n)}}),Object(O.jsx)("p",{className:"card__count-likes",children:u.length})]})]})]})};var N=function(e){var t=e.onEditAvatar,n=e.onEditProfile,c=e.onAddPlace,o=e.cards,i=e.onCardClick,s=e.onCardLike,r=e.onCardDelete,u=Object(a.useContext)(p);return Object(O.jsxs)("main",{className:"content",children:[Object(O.jsxs)("section",{className:"profile",children:[Object(O.jsxs)("div",{className:"profile__position",children:[Object(O.jsx)("button",{className:"button profile__avatar-edit",type:"button",onClick:t,onKeyDown:t,children:Object(O.jsx)("img",{src:u.avatar,alt:u.name,className:"profile__avatar-image"})}),Object(O.jsxs)("div",{className:"profile__user-info",children:[Object(O.jsxs)("div",{className:"profile__name-edit-position",children:[Object(O.jsx)("h1",{className:"profile__user-info-name",children:u.name}),Object(O.jsx)("button",{className:"button profile__button-edit",type:"button",onClick:n,onKeyDown:n,children:Object(O.jsx)("img",{alt:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",className:"profile__button-edit-vector",src:g})})]}),Object(O.jsx)("p",{className:"profile__user-info-about",children:u.about})]})]}),Object(O.jsx)("button",{className:"button profile__button-add",type:"button",onClick:c,onKeyDown:c,children:Object(O.jsx)("img",{alt:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443",className:"profile__button-add-vector",src:x})})]}),Object(O.jsx)("section",{className:"card-container",children:o&&o.map((function(e){return Object(O.jsx)(_,{card:e,onCardClick:i,onCardDelete:r,onCardLike:s},e._id)}))})]})};var C=function(){return Object(O.jsx)("footer",{className:"footer__position",children:Object(O.jsx)("div",{className:"footer",children:Object(O.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Mesto Russia"})})})};var k=function(e){var t=e.onClose,n=e.image,a=n.isImageOpen,c=n.link,o=n.name;return Object(O.jsx)("div",{className:"popup popup-image ".concat(a&&"popup_opened"),onClick:function(e){e.target===e.currentTarget&&t()},children:Object(O.jsxs)("div",{className:"popup-image__container",children:[Object(O.jsx)("img",{src:c,className:"popup-image__element",alt:o}),Object(O.jsx)("h2",{className:"popup-image__text",children:o}),Object(O.jsx)("button",{onClick:t,type:"button",id:"popup-image-close",className:"popup__button-close","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u041e\u043a\u043d\u043e"})]})})};var y=function(e){var t=e.name,n=e.isOpen,a=e.onClose,c=e.title,o=e.children,i=e.buttonSubmit,s=e.onSubmit;return Object(O.jsx)("div",{className:"popup ".concat(t," ").concat(n?"popup_opened":""),onClick:function(e){e.target===e.currentTarget&&a()},children:Object(O.jsx)("div",{className:"popup__container popup__container_".concat(t),children:Object(O.jsxs)("form",{className:"popup__form",name:t,onSubmit:s,children:[Object(O.jsx)("button",{type:"button",onClick:a,className:"popup__button-close"}),Object(O.jsxs)("h2",{className:"popup__title",children:[" ",c," "]}),o,Object(O.jsx)("button",{className:"popup__button-save",type:"submit","aria-label":i,children:i})]})})})};var A=function(e){var t=Object(a.useContext)(p),n=e.isOpen,c=e.onClose,o=e.onUpdateUser,i=e.isLoading,s=Object(a.useState)(""),r=Object(u.a)(s,2),l=r[0],d=r[1],b=Object(a.useState)(""),j=Object(u.a)(b,2),m=j[0],h=j[1];return Object(a.useEffect)((function(){d(t.name),h(t.about)}),[t]),Object(O.jsxs)(y,{name:"popup-profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonSubmit:i?"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:n,onClose:c,onSubmit:function(e){e.preventDefault(),o({name:l,about:m})},children:[Object(O.jsx)("input",{value:l||"",name:"name",type:"text",id:"name",className:"popup__input popup__input_name",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",minLength:"2",maxLength:"40",onChange:function(e){d(e.target.value)},required:!0}),Object(O.jsx)("span",{id:"name-error",className:"popup__span"}),Object(O.jsx)("input",{value:m||"",name:"about",type:"text",id:"hobby",className:"popup__input popup__input_hobby",placeholder:"\u0412\u0430\u0448\u0435 \u0445\u043e\u0431\u0431\u0438",minLength:"2",maxLength:"200",onChange:function(e){h(e.target.value)},required:!0}),Object(O.jsx)("span",{id:"hobby-error",className:"popup__span"})]})};var S=function(e){var t=e.isOpen,n=e.onClose,c=e.onUpdateAvatar,o=e.isLoading,i=Object(a.useRef)("");return Object(O.jsxs)(y,{name:"popup_avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonSubmit:o?"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),c({avatar:i.current.value})},children:[Object(O.jsx)("input",{ref:i,type:"url",className:"popup__input popup__input_avatar",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),Object(O.jsx)("span",{id:"avatar-error",className:"popup__span"})]})};var w=function(e){var t=e.isOpen,n=e.onClose,c=e.onAddPlace,o=e.isLoading,i=Object(a.useState)(""),s=Object(u.a)(i,2),r=s[0],l=s[1],p=Object(a.useState)(""),d=Object(u.a)(p,2),b=d[0],j=d[1];return Object(O.jsxs)(y,{name:"popup-item",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),c({name:r,link:b}),l(""),j("")},buttonSubmit:o?"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",children:[Object(O.jsx)("input",{name:"name",type:"text",id:"place",className:"popup__input popup__input_link",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"1",maxLength:"30",onChange:function(e){l(e.target.value)},value:r,required:!0}),Object(O.jsx)("span",{id:"place-error",className:"popup__span"}),Object(O.jsx)("input",{name:"link",type:"url",id:"link",className:"popup__input",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",onChange:function(e){j(e.target.value)},value:b,required:!0}),Object(O.jsx)("span",{id:"link-error",className:"popup__span"})]})};var E=function(e){var t=e.isOpen,n=e.onClose,a=e.onConfirmDelete,c=e.isLoading;return Object(O.jsx)(y,{name:"popup_confirm",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",buttonSubmit:c?"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435...":"\u0414\u0430",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a()}})};var L=function(e){return Object(O.jsx)("div",{className:"preloader__position",children:Object(O.jsx)("div",{className:"preloader"})})};var R=Object(l.i)((function(e){var t=Object(a.useState)(""),n=Object(u.a)(t,2),c=n[0],o=n[1],i=Object(a.useState)(""),r=Object(u.a)(i,2),l=r[0],p=r[1];function d(t){t.preventDefault(),l&&c&&e.handleLogin(l,c)}return Object(O.jsxs)("div",{className:"login",children:[Object(O.jsx)("p",{className:"login__heading",children:"\u0412\u0445\u043e\u0434"}),Object(O.jsxs)("form",{className:"login__form",onSubmit:d,children:[Object(O.jsx)("input",{className:"login__input",id:"email",name:"email",type:"email",required:!0,value:l,onChange:function(e){return p(e.target.value)},placeholder:"Email"}),Object(O.jsx)("input",{className:"login__input",id:"password",name:"password",type:"password",required:!0,value:c,onChange:function(e){return o(e.target.value)},placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(O.jsx)("button",{className:"button login__submit-button",type:"submit",onSubmit:d,children:"\u0412\u043e\u0439\u0442\u0438"})]}),Object(O.jsx)(s.b,{className:"login__link",to:"/signup",children:"\u0415\u0449\u0451 \u043d\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})]})}));var I=Object(l.i)((function(e){var t=Object(a.useState)(""),n=Object(u.a)(t,2),c=n[0],o=n[1],i=Object(a.useState)(""),r=Object(u.a)(i,2),l=r[0],p=r[1];function d(t){t.preventDefault(),e.handleRegister(l,c),o(""),p("")}return Object(O.jsxs)("div",{className:"register",children:[Object(O.jsx)("p",{className:"register__heading",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(O.jsxs)("form",{className:"register__form",onSubmit:d,children:[Object(O.jsx)("input",{className:"register__input",id:"email",name:"email",type:"email",required:!0,value:l,onChange:function(e){return p(e.target.value)},placeholder:"Email"}),Object(O.jsx)("input",{className:"register__input",id:"password",name:"password",type:"password",required:!0,value:c,onChange:function(e){return o(e.target.value)},placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(O.jsx)("button",{className:"button register__submit-button",type:"submit",onSubmit:d,children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]}),Object(O.jsx)(s.b,{className:"register__link",to:"/signin",children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? \u0412\u043e\u0439\u0442\u0438"})]})}));var P=function(e){var t=e.onClose;return Object(O.jsx)("div",{className:"popup popup-status ".concat(e.isOpen?"popup_opened":" "),id:"info-tooltip",children:Object(O.jsxs)("div",{className:"popup-status__container",children:[Object(O.jsx)("img",{className:"popup-status__image",src:e.status?"data:image/png;base64,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":"data:image/png;base64,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",alt:e.status?"\u0423\u0441\u043f\u0435\u0448\u043d\u043e":"\u041e\u0448\u0438\u0431\u043a\u0430"}),Object(O.jsx)("h2",{className:"popup-status__title",children:e.status?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a!\n          \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."}),Object(O.jsx)("button",{onClick:t,type:"button",id:"popup-image-close",className:"popup__button-close","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u041e\u043a\u043d\u043e"})]})})},q=n(24),X=n(25),K=function(e){var t=e.component,n=Object(X.a)(e,["component"]);return Object(O.jsx)(l.b,{children:function(){return n.loggedIn?Object(O.jsx)(t,Object(q.a)({},n)):Object(O.jsx)(l.a,{to:"./signin"})}})};function M(e){return e.ok?e.json():Promise.reject("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a: ".concat(e.status))}var J=function(e){var t=Object(a.useContext)(p);return Object(O.jsx)("div",{className:"menu-mobile__position ".concat(e.isShowMenu),children:Object(O.jsxs)("menu",{className:"menu-mobile",children:[Object(O.jsx)("span",{children:t.email||""}),Object(O.jsx)("button",{className:"button header__link menu-mobile__exit",onClick:e.loggedOut,children:"\u0412\u044b\u0439\u0442\u0438"})]})})};var Z=Object(l.i)((function(){var e=Object(l.g)(),t=Object(l.h)(),n=Object(a.useState)(!1),o=Object(u.a)(n,2),i=o[0],s=o[1],d=Object(a.useState)(!1),b=Object(u.a)(d,2),h=b[0],g=b[1],x=Object(a.useState)(!1),v=Object(u.a)(x,2),_=v[0],y=v[1],q=Object(a.useState)(!1),X=Object(u.a)(q,2),Z=X[0],D=X[1],H=Object(a.useState)(!1),Y=Object(u.a)(H,2),T=Y[0],U=Y[1],B=Object(a.useState)(!1),V=Object(u.a)(B,2),G=V[0],z=V[1],Q=Object(a.useState)(!1),F=Object(u.a)(Q,2),W=F[0],$=F[1],ee=Object(a.useState)({}),te=Object(u.a)(ee,2),ne=te[0],ae=te[1],ce=Object(a.useState)(!0),oe=Object(u.a)(ce,2),ie=oe[0],se=oe[1],re=Object(a.useState)(),ue=Object(u.a)(re,2),le=ue[0],pe=ue[1],de=Object(a.useState)({}),be=Object(u.a)(de,2),je=be[0],me=be[1],he=Object(a.useState)([]),Oe=Object(u.a)(he,2),fe=Oe[0],ge=Oe[1],xe=Object(a.useState)({isImageOpen:!1,link:"",name:""}),ve=Object(u.a)(xe,2),_e=ve[0],Ne=ve[1],Ce=c.a.useState("menu-mobile_type_close"),ke=Object(u.a)(Ce,2),ye=ke[0],Ae=ke[1],Se=c.a.useState("header__menu_type_closed"),we=Object(u.a)(Se,2),Ee=we[0],Le=we[1];function Re(t){m.getAllNeededData(t).then((function(t){var n=Object(u.a)(t,2),a=n[0],c=n[1];ge(c),me(a),$(!0),e.push("/")})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0434\u0430\u043d\u043d\u044b\u0445: ".concat(e))})).finally((function(){return setTimeout((function(){return se(!1)}),500)}))}function Ie(){s(!1),y(!1),g(!1),D(!1),U(!1),Ne({isImageOpen:!1,link:"",name:""})}function Pe(){localStorage.removeItem("jwt"),$(!1)}function qe(e){"Escape"===e.key&&Ie()}return Object(a.useEffect)((function(){var e,t=localStorage.getItem("jwt");t?(e=t,fetch("".concat(j,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",authorization:"Bearer ".concat(e)}}).then(M)).then((function(e){e.email&&Re(t)})).catch((function(e){return console.log(e)})):se(!1)}),[]),Object(a.useEffect)((function(){return window.addEventListener("keydown",qe),function(){window.removeEventListener("keydown",qe)}})),Object(O.jsxs)(p.Provider,{value:je,children:[W&&Object(O.jsx)(J,{loggedOut:Pe,isShowMenu:ye}),Object(O.jsx)(f,{loggedIn:W,locaction:t,showMenu:function(){Ae("menu-mobile_type_close"===ye?"menu-mobile_type_open":"menu-mobile_type_close"),Le("header__menu_type_opened"===Ee?"header__menu_type_closed":"header__menu_type_opened")},classHeaderMenu:Ee,loggedOut:Pe}),Object(O.jsxs)(l.d,{children:[ie?Object(O.jsx)(L,{}):Object(O.jsx)(K,{exact:!0,path:"/",loggedIn:W,component:N,onEditProfile:function(){s(!0)},onAddPlace:function(){g(!0)},onEditAvatar:function(){y(!0)},onCardClick:function(e){var t=e.link,n=e.name;Ne({isImageOpen:!0,link:t,name:n})},onCardLike:function(e){var t=e.likes.some((function(e){return e===je._id})),n=localStorage.getItem("jwt");m.toggleLike(e._id,t,n).then((function(t){var n=fe.map((function(n){return n._id===e._id?t:n}));ge(n)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u043b\u0430\u0439\u043a\u043e\u0432: ".concat(e))}))},onCardDelete:function(e){D(!0),ae(e)},cards:fe}),Object(O.jsx)(l.b,{path:"/signin",children:Object(O.jsx)(R,{handleLogin:function(e,t){(function(e,t){return fetch("".concat(j,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then(M)})(e,t).then((function(e){var t=e.token;t&&(localStorage.setItem("jwt",t),$(!0),Re(t))})).catch((function(e){console.log(e),U(!0),z(!1)}))}})}),Object(O.jsx)(l.b,{path:"/signup",children:Object(O.jsx)(I,{handleRegister:function(t,n){(function(e,t){return fetch("".concat(j,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then(M)})(t,n).then((function(t){t&&(U(!0),z(!0),e.push("/signin"))})).catch((function(e){console.log(e),U(!0),z(!1)}))}})})]}),Object(O.jsx)(C,{}),Object(O.jsx)(A,{isOpen:i,onClose:Ie,onUpdateUser:function(e){var t=localStorage.getItem("jwt");pe(!0),m.changeProfile(e,t).then((function(e){me(e),Ie(),pe(!1)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445: ".concat(e))}))},isLoading:le}),Object(O.jsx)(w,{isOpen:h,onClose:Ie,onAddPlace:function(e){var t=e.name,n=e.link,a=localStorage.getItem("jwt");pe(!0),m.addCard({name:t,link:n},a).then((function(e){ge([e].concat(Object(r.a)(fe))),Ie(),setTimeout((function(){return pe(!1)}),200)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438: ".concat(e))}))},isLoading:le}),Object(O.jsx)(E,{isOpen:Z,onClose:Ie,onConfirmDelete:function(){var e=localStorage.getItem("jwt");pe(!0),m.deleteCard(ne._id,e).then((function(){var e=fe.filter((function(e){return e!==ne}));Ie(),ge(e),setTimeout((function(){return pe(!1)}),200)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435: ".concat(e))})).finally((function(){return pe(!1)}))},isLoading:le}),Object(O.jsx)(S,{isOpen:_,onClose:Ie,onUpdateAvatar:function(e){var t=localStorage.getItem("jwt");pe(!0),m.changeAvatar(e,t).then((function(e){me(e),Ie(),setTimeout((function(){return pe(!1)}),200)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438 \u0430\u0432\u0430\u0442\u0430\u0440\u0430: ".concat(e))}))},isLoading:le}),Object(O.jsx)(k,{image:_e,onClose:Ie}),Object(O.jsx)(P,{status:G,isOpen:T,onClose:Ie})]})})),D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),o(e),i(e)}))};i.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(s.a,{children:Object(O.jsx)(Z,{})})}),document.getElementById("root")),D()}},[[36,1,2]]]);
//# sourceMappingURL=main.ba5db64d.chunk.js.map