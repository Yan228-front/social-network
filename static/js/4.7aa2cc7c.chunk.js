(this.webpackJsonpreact_prog1=this.webpackJsonpreact_prog1||[]).push([[4],{252:function(t,e,s){"use strict";s.d(e,"a",(function(){return b}));var n=s(2),o=s(3),i=s(4),r=s(9),c=s(10),a=s(0),u=s.n(a),p=s(23),j=s(7),l=s(1),f=function(t){return{isAuth:t.auth.isAuth}},b=function(t){var e=function(e){Object(r.a)(a,e);var s=Object(c.a)(a);function a(){return Object(o.a)(this,a),s.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return this.props.isAuth?Object(l.jsx)(t,Object(n.a)({},this.props)):Object(l.jsx)(j.a,{to:"/login"})}}]),a}(u.a.Component);return Object(p.b)(f)(e)}},256:function(t,e,s){t.exports={postBlock:"MyPosts_postBlock__17OD_",posts:"MyPosts_posts__2hv3M"}},257:function(t,e,s){t.exports={item:"Post_item__2kT32"}},258:function(t,e,s){t.exports={descriptoinBlock:"ProfileInfo_descriptoinBlock__2VrV0",profilePhoto:"ProfileInfo_profilePhoto__1CtFx"}},260:function(t,e,s){"use strict";s.r(e);var n=s(2),o=s(3),i=s(4),r=s(9),c=s(10),a=s(0),u=s.n(a),p=s(23),j=s(7),l=s(25),f=s(252),b=s(71),d=s(256),h=s.n(d),O=s(257),x=s.n(O),v=s(1),m=function(t){return Object(v.jsxs)("div",{className:x.a.item,children:[Object(v.jsx)("img",{src:"https://i.ytimg.com/vi/CtI_D76BcV0/maxresdefault.jpg",alt:"sad"}),t.message,Object(v.jsxs)("div",{children:[Object(v.jsx)("span",{children:"like"})," ",t.likesCount]})]})},g=s(103),P=function(t){var e=t.posts.map((function(t){return Object(v.jsx)(m,{message:t.message,likesCount:t.likesCount})})),s=u.a.createRef(),n=Object(g.b)({initialValues:{post:""},onSubmit:function(t){}});return Object(v.jsxs)("form",{onSubmit:n.handleSubmit,children:[Object(v.jsx)("div",{children:Object(v.jsx)("label",{htmlFor:"post",children:"My post"})}),Object(v.jsx)("textarea",{name:"post",type:"text",onChange:function(){var e=s.current.value;t.updateNewPostText(e)},ref:s,value:t.newPostText}),Object(v.jsx)("button",{onClick:function(){t.addPost()},children:"Add post"}),Object(v.jsx)("div",{className:h.a.posts,children:e})]})},_=P,k=Object(p.b)((function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText}}),(function(t){return{updateNewPostText:function(e){var s=Object(b.e)(e);t(s)},addPost:function(){t(Object(b.a)())}}}))(_),S=s(35),y=s(258),C=s.n(y),w=s(32),B=function(t){var e=Object(a.useState)(!1),s=Object(w.a)(e,2),n=s[0],o=s[1],i=Object(a.useState)(t.status),r=Object(w.a)(i,2),c=r[0],u=r[1];Object(a.useEffect)((function(){u(t.status)}),[t.status]);return Object(v.jsxs)("div",{children:[!n&&Object(v.jsx)("div",{children:Object(v.jsx)("span",{onDoubleClick:function(){o(!0)},children:t.status||"-----"})}),n&&Object(v.jsx)("div",{children:Object(v.jsx)("input",{autoFocus:!0,onBlur:function(){o(!1),t.updateStatus(c)},onChange:function(t){u(t.target.value)},value:c})})]})},I=function(t){return t.profile?Object(v.jsx)("div",{children:Object(v.jsxs)("div",{className:C.a.descriptoinBlock,children:[Object(v.jsx)("img",{src:t.profile.photos.large,className:C.a.profilePhoto}),Object(v.jsxs)("div",{children:[t.profile.fullName,Object(v.jsx)(B,{status:t.status,updateStatus:t.updateStatus})]})]})}):Object(v.jsx)(S.a,{})},N=function(t){return Object(v.jsxs)("div",{children:[Object(v.jsx)(I,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),Object(v.jsx)(k,{})]})},A=function(t){Object(r.a)(s,t);var e=Object(c.a)(s);function s(){return Object(o.a)(this,s),e.apply(this,arguments)}return Object(i.a)(s,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return Object(v.jsx)(N,Object(n.a)(Object(n.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),s}(u.a.Component);e.default=Object(l.c)(Object(p.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getUserProfile:b.d,getStatus:b.c,updateStatus:b.f}),j.f,f.a)(A)}}]);
//# sourceMappingURL=4.7aa2cc7c.chunk.js.map