(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){e.exports={searchForm:"SearchForm_searchForm__2LIzA",cardList:"SearchForm_cardList__1sGSd",card:"SearchForm_card__KaDoO"}},20:function(e,t,n){},30:function(e,t,n){e.exports={Loader:"Spinner_Loader__29jS-",load2:"Spinner_load2__drFiG"}},32:function(e,t,n){e.exports={Button:"ProfileDataForm_Button__X6vC1"}},33:function(e,t,n){e.exports={Button:"PostForm_Button__MQ79L"}},35:function(e,t,n){e.exports=n(70)},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(28),l=n.n(r),i=(n(40),n(9)),c=n(10),s=n(13),u=n(12),d=n(14),m=(n(41),n(1)),h=(n(42),n(3)),p=n(20),f=n.n(p),v=n(30),g=n.n(v),E=function(){return o.a.createElement("div",{className:g.a.Loader},"Loading...")},S=n(31),b=n.n(S),w=function(e,t){return{type:"AUTH_SUCCESS",idToken:e,userId:t}},y=function(){return localStorage.removeItem("token"),localStorage.removeItem("userId"),localStorage.removeItem("expirationDate"),{type:"AUTH_LOGOUT"}},C=function(e){return function(t){setTimeout(function(){t(y())},1e3*e)}},I=Object(h.b)(function(e){return{token:e.auth.token,isAuthenticated:null!==e.auth.token,userId:e.auth.userId,loading:e.auth.loading}},function(e){return{onLogout:function(){return e(y())},onAuth:function(t,n,a){return e(function(e,t,n){return function(a){a({type:"AUTH_START"});var o={email:e,password:t,returnSecureToken:!0},r="https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyAXrU6Nlxlu3jibtiCMZQ8EpvVWZGzmC3w";n||(r="https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyAXrU6Nlxlu3jibtiCMZQ8EpvVWZGzmC3w"),b.a.post(r,o).then(function(e){var t=new Date((new Date).getTime()+1e3*e.data.expiresIn);localStorage.setItem("token",e.data.idToken),localStorage.setItem("userId",e.data.localId),localStorage.setItem("expirationDate",t),a(w(e.data.idToken,e.data.localId)),a(C(e.data.expiresIn))}).catch(function(e){a({type:"AUTH_FAIL",error:e.response.data.error})})}}(t,n,a))}}})(function(e){return o.a.createElement("div",{className:f.a.appcontainer},o.a.createElement("div",{className:f.a.nav},e.loading?o.a.createElement(E,null):null,o.a.createElement("ul",null,e.isAuthenticated?o.a.createElement("li",{onClick:function(){return e.onLogout()}},o.a.createElement("div",null,"SIGNOUT")):o.a.createElement("li",{onClick:function(){return e.onAuth("a@gmail.com","123123",!1)}},o.a.createElement("div",null,"SIGNIN")),o.a.createElement("li",null,o.a.createElement("button",{className:"button",onClick:e.onSearchClicked},"Search")))),e.children)}),_=Object(h.b)(function(e){return{isAuthenticated:null!==e.auth.token}},null)(function(e){return o.a.createElement("div",{className:"app-container"},o.a.createElement("div",{className:"container"},o.a.createElement(I,{className:"Nav",onSearchClicked:e.onShowSearchFormClicked}),o.a.createElement("div",{className:"bg"}),e.showSearch?null:o.a.createElement("nav",{className:"nav"},o.a.createElement("div",{className:"icon-container"},o.a.createElement("img",{className:"icon",src:e.IconUrl,alt:"icon",onClick:e.onIconClick})),o.a.createElement("div",{className:"profileNav"},e.isAuthenticated?o.a.createElement("ul",null,o.a.createElement("li",{onClick:e.onUpdateFormClick},o.a.createElement("p",null,"UPDATE PROFILE")),o.a.createElement("li",{onClick:e.onPostFormClick},o.a.createElement("p",null,"NEW POST"))):null))))}),O=(n(66),function(e){return o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"name"},e.name),o.a.createElement("div",{className:"tag"},e.intro),o.a.createElement("div",{className:"tag"},e.location),o.a.createElement("div",{className:"tag"},o.a.createElement("a",{href:e.website,target:"_blank",rel:"noopener noreferrer"},"@",e.name)),o.a.createElement("div",{className:"tag"},"Joined May 2009"))}),N=(n(67),function(e){return o.a.createElement("div",{className:"Project"},o.a.createElement("h3",null,e.title),o.a.createElement("div",{className:"content-body"},o.a.createElement("p",null,e.content.split("\n").map(function(e,t){return o.a.createElement("span",{key:t},e,o.a.createElement("br",null))})," "),o.a.createElement("div",{className:"date"},e.date," ")))}),T=(n(68),function(e){var t=[];for(var n in e.posts)t.push({id:n,config:e.posts[n]});var a=o.a.createElement("div",{className:"item2"},t.map(function(e){return o.a.createElement(N,{key:e.id,title:e.config.title,content:e.config.body,date:e.config.date})}));return o.a.createElement("div",{className:"grid-container"},o.a.createElement("div",{className:"item1"},o.a.createElement(O,{name:e.name,intro:e.intro,location:e.location,website:e.website})),a)}),U=(n(69),function(e){return o.a.createElement("div",null,o.a.createElement("div",{className:e.style},e.children),e.show?o.a.createElement("div",{className:"Backdrop",onClick:e.closed}):null)}),j=n(6),k=n(8),P=n.n(k),F=function(e){var t=null,n=[P.a.InputElement];e.invalid&&e.shouldValidate&&e.touched&&n.push(P.a.Invalid);var a=null;switch(e.invalid&&e.touched&&(a=o.a.createElement("p",{className:P.a.ValidationError},"Please enter a valid value!")),e.elementType){case"input":t=o.a.createElement("input",Object.assign({className:n.join(" "),onChange:e.changed},e.elementConfig,{value:e.value}));break;case"textarea":t=o.a.createElement("textarea",Object.assign({className:n.join(" "),onChange:e.changed},e.elementConfig,{value:e.value}));break;case"select":t=o.a.createElement("select",{className:n.join(" "),onChange:e.changed,value:e.value},e.elementConfig.options.map(function(e){return o.a.createElement("option",{key:e.value,value:e.value},e.displayValue)}));break;default:t=o.a.createElement("input",Object.assign({className:n.join(" "),onChange:e.changed},e.elementConfig,{value:e.value}))}return o.a.createElement("div",null,o.a.createElement("label",{className:P.a.Label},e.label),t,a)},M=n(32),L=n.n(M),A=function(e,t){return Object(m.a)({},e,t)},R=function(e,t){var n=!0;if(!t)return!0;if(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),t.isEmail){n=/[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&n}if(t.isNumeric){n=/^\d+$/.test(e)&&n}if(t.isImage){n=/\.(jpg|png|gif)/.test(e)&&n}return n},x=function(e){var t=Object(a.useState)({icon:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Icon"},value:e.icon,validation:{required:!0,isImage:!1},valid:!1,touched:!1},name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Name"},value:e.name,validation:{required:!0,minLength:4},valid:!1,touched:!1},intro:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Introduction"},value:e.intro,validation:{required:!0,maxLength:100},valid:!1,touched:!1},location:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Location"},value:e.location,validation:{required:!0},valid:!1,touched:!1}}),n=Object(j.a)(t,2),r=n[0],l=n[1],i=Object(a.useState)(!1),c=Object(j.a)(i,2),s=c[0],u=c[1],d=[];for(var h in r)d.push({id:h,config:r[h]});var p=o.a.createElement("div",null,d.map(function(e){return o.a.createElement(F,{label:e.id,key:e.id,elementType:e.config.elementType,elementConfig:e.config.elementConfig,value:e.config.value?e.config.value:"",invalid:!e.config.valid,shouldValidate:e.config.validation,touched:e.config.touched,changed:function(t){return function(e,t){var n=Object(m.a)({},r),a=Object(m.a)({},n[t]);a.value=e.target.value,a.touched=!0,n[t]=a,a.valid=R(a.value,a.validation);var o=!0;for(var i in n)n[i].value&&(n[i].valid=R(n[i].value,n[i].validation)),o=n[i].valid&&o;u(o),l(n)}(t,e.id)}})}),o.a.createElement("button",{className:L.a.Button,onClick:function(){console.log("submit"),e.updateForm(r.icon.value,r.name.value,r.intro.value,r.location.value),e.closed()},disabled:!s},"Update"));return o.a.createElement("div",null,p)},D=n(33),G=n.n(D),Q=function(e){var t=Object(a.useState)({Title:{elementType:"input",elementConfig:{type:"text",placeholder:"POST TITLE"},value:e.icon,validation:{required:!0},valid:!1,touched:!1},Content:{elementType:"textarea",elementConfig:{type:"textarea",placeholder:"POST CONTENT"},value:e.name,validation:{required:!0,maxLength:200},valid:!1,touched:!1}}),n=Object(j.a)(t,2),r=n[0],l=n[1],i=Object(a.useState)(!1),c=Object(j.a)(i,2),s=c[0],u=c[1],d=[];for(var h in r)d.push({id:h,config:r[h]});var p=o.a.createElement("div",null,d.map(function(e){return o.a.createElement(F,{label:e.id,key:e.id,elementType:e.config.elementType,elementConfig:e.config.elementConfig,value:e.config.value?e.config.value:"",invalid:!e.config.valid,shouldValidate:e.config.validation,touched:e.config.touched,changed:function(t){return function(e,t){var n=Object(m.a)({},r),a=Object(m.a)({},n[t]);a.value=e.target.value,a.touched=!0,n[t]=a,a.valid=R(a.value,a.validation);var o=!0;for(var i in n)n[i].value&&(n[i].valid=R(n[i].value,n[i].validation)),o=n[i].valid&&o;u(o),l(n)}(t,e.id)}})}),o.a.createElement("button",{className:G.a.Button,onClick:function(){console.log("submit"),e.updateForm(r.Title.value,r.Content.value,(new Date).toLocaleString()),e.closed()},disabled:!s},"Update"));return o.a.createElement("div",null,p)},z=n(15),q=n.n(z),H=Object(h.b)(function(e){return{searchField:e.user.searchField,users:e.user.robots,isPending:e.user.isPending,error:e.user.error}},function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestUsers:function(){return e(function(e){e({type:"REQUEST_USERS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e({type:"REQUEST_USERS_SUCCESS",payload:t})}).catch(function(t){return e({type:"REQUEST_USERS_FAILED",payload:t})})})}}})(function(e){Object(a.useEffect)(function(){e.onRequestUsers()},[]);var t=e.users.filter(function(t){return t.username.toLowerCase().includes(e.searchField.toLowerCase())});console.log(t);var n=o.a.createElement("div",null,o.a.createElement("div",{className:q.a.cardList},t.map(function(n,a){return o.a.createElement("div",{className:q.a.card,key:a,onClick:function(){return e.onCardClicked(t[a].username,t[a].name,t[a].email,t[a].id)}},o.a.createElement("img",{src:"https://robohash.org/".concat(t[a].username),alt:"avatar"}),o.a.createElement("br",null),t[a].username)})));return o.a.createElement("div",null,o.a.createElement("div",{className:q.a.searchForm},o.a.createElement("input",{type:"text",value:e.searchField,placeholder:"keywords",onChange:function(t){return e.onSearchChange(t)}})),n)}),B=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={showModal:!1,Modalstyle:"Modal ModalClosed",ProfileStyle:"Profile ProfileOpen",showUpdateForm:!1,showIcon:!1,showPostForm:!1,posts:[],showSearch:!0,userIconURL:"https://pbs.twimg.com/profile_images/1105852053493088258/keQ6njSw_400x400.jpg",userName:"",intro:"",location:"",website:"https://burgerbuilder-e577c.firebaseapp.com/"},n.onShowModal=function(){n.setState({showModal:!n.state.showModal,Modalstyle:"Modal ModalOpen"})},n.onCloseModal=function(){n.setState({showModal:!1,Modalstyle:"Modal ModalClosed",showUpdateForm:!1,showIcon:!1,showPostForm:!1})},n.onShowUpdateForm=function(){n.setState(Object(m.a)({},n.state,{showUpdateForm:!0,showModal:!n.state.showModal,Modalstyle:"Modal ModalOpen"}))},n.onCloseUpdateForm=function(){n.setState(Object(m.a)({},n.state,{showUpdateForm:!1,showModal:!n.state.showModal,Modalstyle:"Modal ModalOpen"}))},n.onShowIcon=function(){n.setState(Object(m.a)({},n.state,{showIcon:!0,showModal:!n.state.showModal,Modalstyle:"Modal ModalOpen"}))},n.onShowPostForm=function(){console.log("on onShowPostForm"),n.setState(Object(m.a)({},n.state,{showIcon:!1,showModal:!n.state.showModal,Modalstyle:"Modal ModalOpen",showPostForm:!0}))},n.onShowSearchForm=function(){console.log("on show search form"),n.setState(Object(m.a)({},n.state,{showIcon:!1,showModal:!1,showPostForm:!1,showSearch:!0,Modalstyle:"Modal ModalClosed"}))},n.onSubmitForm=function(e,t,a,o){console.log(e),n.setState(Object(m.a)({},n.state,{userIconURL:e,userName:t,intro:a,location:o}))},n.onSubmitNewPost=function(e,t,a){n.props.onUpdatePost({title:e,body:t,date:a})},n.onCardClicked=function(e,t,a,o){n.setState(Object(m.a)({},n.state,{userName:e,intro:t,userIconURL:"https://robohash.org/".concat(e),location:a,showSearch:!1})),n.props.onRequestUsers(o)},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"Profile"},o.a.createElement(_,{showSearch:this.state.showSearch,onShowSearchFormClicked:this.onShowSearchForm,onPostFormClick:this.onShowPostForm,onUpdateFormClick:this.onShowUpdateForm,IconUrl:this.state.userIconURL,onIconClick:this.onShowIcon,onNewPost:this.onSubmitNewPost}),o.a.createElement(U,{show:this.state.showModal,style:this.state.Modalstyle,closed:function(){return e.onCloseModal()}},this.state.showUpdateForm?o.a.createElement(x,{updateForm:this.onSubmitForm,icon:this.state.userIconURL,name:this.state.userName,intro:this.state.intro,location:this.state.location,website:this.state.website,closed:function(){return e.onCloseModal()}}):null,this.state.showIcon?o.a.createElement("img",{src:this.state.userIconURL,alt:"icon"}):null,this.state.showPostForm?o.a.createElement(Q,{updateForm:this.onSubmitNewPost,closed:function(){return e.onCloseModal()}}):null),this.state.showSearch?o.a.createElement(H,{onCardClicked:this.onCardClicked}):o.a.createElement(T,{name:this.state.userName,intro:this.state.intro,location:this.state.location,website:this.state.website,posts:this.props.posts}))}}]),t}(a.Component),V=Object(h.b)(function(e){return{posts:e.user.posts,isPending:e.user.isPending,error:e.user.error}},function(e){return{onRequestUsers:function(t){return e(function(e){return function(t){t({type:"REQUEST_POSTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/posts?userId=".concat(e)).then(function(e){return e.json()}).then(function(e){return t({type:"REQUEST_POSTS_SUCCESS",payload:e})}).catch(function(e){return t({type:"REQUEST_POSTS_FAILED",payload:e})})}}(t))},onUpdatePost:function(t){return e(function(e){return function(t){t({type:"UPDATE_POSTS",payload:e})}}(t))}}})(B),W=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.onTryAutoSignin()}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(V,null))}}]),t}(a.Component),Y=Object(h.b)(null,function(e){return{onTryAutoSignin:function(){return e(function(e){var t=localStorage.getItem("token");if(t){var n=new Date(localStorage.getItem("expirationDate"));if(n<=new Date)e(y());else{var a=localStorage.getItem("userId");e(w(t,a)),e(C((n.getTime()-(new Date).getTime())/1e3))}}else e(y())})}}})(W);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Z=n(4),$=n(34),J={token:null,userId:null,error:null,email:null,name:null,loading:!1},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_START":return function(e,t){return A(e,{token:null,userId:null,error:null,email:null,name:null,loading:!0})}(e);case"AUTH_SUCCESS":return function(e,t){return A(e,{token:t.idToken,userId:t.userId,error:null,loading:!1})}(e,t);case"AUTH_FAIL":return function(e,t){return A(e,{error:t.error,loading:!1})}(e,t);case"AUTH_LOGOUT":return function(e,t){return A(e,{token:null,userId:null,error:null,email:null,name:null})}(e);default:return e}},K={isPending:!1,robots:[],error:"",searchField:"",posts:[]},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_USERS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_USERS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_USERS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});case"REQUEST_POSTS_PENDING":return Object.assign({},e,{posts:"",isPending:!0});case"REQUEST_POSTS_SUCCESS":return Object.assign({},e,{posts:t.payload,isPending:!1});case"REQUEST_POSTS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});case"UPDATE_POSTS":var n=e.posts;return n.push(t.payload),Object.assign({},e,{posts:n,isPending:!1});default:return e}},te=Z.d,ne=Object(Z.c)({auth:X,user:ee}),ae=Object(Z.e)(ne,te(Object(Z.a)($.a))),oe=o.a.createElement(h.a,{store:ae},o.a.createElement(Y,null));l.a.render(oe,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports={Input:"Input_Input__32Ded",Label:"Input_Label__GrCtG",InputElement:"Input_InputElement__14dWf",Invalid:"Input_Invalid__21Tnp",ValidationError:"Input_ValidationError__35Dq2"}}},[[35,1,2]]]);
//# sourceMappingURL=main.24af8c31.chunk.js.map