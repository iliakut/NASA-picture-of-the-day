(this["webpackJsonpnasa-picture-of-the-day"]=this["webpackJsonpnasa-picture-of-the-day"]||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(21)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),i=a.n(c),s=a(1),o=a.n(s),l=a(4),u=a(2),m=a(3),p=a(5),d=a(6),h=(a(15),new(function(){function e(){Object(u.a)(this,e),this.cache={}}return Object(m.a)(e,[{key:"_get",value:function(){var e=Object(l.a)(o.a.mark((function e(t){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.cache[t]){e.next=2;break}return e.abrupt("return",this.cache[t]);case 2:return e.next=4,fetch(t);case 4:return a=e.sent,e.next=7,a.json();case 7:if(n=e.sent,a.ok){e.next=12;break}throw n;case 12:this.cache[t]=n;case 13:return e.abrupt("return",n);case 14:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}())),y=function(){function e(){Object(u.a)(this,e),this._apiBase="https://api.nasa.gov/planetary/apod"}return Object(m.a)(e,[{key:"getData",value:function(){var e=Object(l.a)(o.a.mark((function e(t,a){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t||"DEMO_KEY",e.next=3,h._get("".concat(this._apiBase,"/?api_key=").concat(n).concat(a));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"getDataInExactDay",value:function(){var e=Object(l.a)(o.a.mark((function e(t,a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.getData(t,"&date=".concat(a)));case 1:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()}]),e}(),f=(a(16),a(17),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;Object(u.a)(this,a),(n=t.call(this,e)).state={isForm:!1,localKey:null},n.clickAcceptOrClear=function(e,t){n.setState({isForm:e}),n.writeKey(t)},n.onChangeInput=function(e){n.setState({localKey:e.target.value})};var r=sessionStorage.getItem("API-key");return r&&(n.state.localKey=r,n.props.onAcceptKey(r)),n}return Object(m.a)(a,[{key:"writeKey",value:function(e){e?(this.props.onAcceptKey(null),this.setState({localKey:null}),sessionStorage.removeItem("API-key")):(this.props.onAcceptKey(this.state.localKey),sessionStorage.setItem("API-key",this.state.localKey))}},{key:"render",value:function(){var e,t=this,a=this.state,c=a.isForm,i=a.localKey;return e=c?r.a.createElement("div",{className:"form-group header-login-form"},r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Enter API key",onChange:this.onChangeInput}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{className:"btn btn-outline-primary",onClick:function(){return t.clickAcceptOrClear(!1)}},"Accept")))):r.a.createElement("button",{className:"btn btn-outline-primary",onClick:function(){return t.clickAcceptOrClear(!0,!0)}},i?"Clear key":"Enter API key"),r.a.createElement(n.Fragment,null,e)}}]),a}(n.Component)),g=function(e){var t=e.date,a=e.onDateChange;return r.a.createElement(n.Fragment,null,r.a.createElement("input",{type:"date",className:"form-control",id:"pictureDateInput",value:t,onChange:a}))},v=function(e){var t=e.date,a=e.onDateChange,n=e.onAcceptKey;return r.a.createElement("div",null,r.a.createElement("h4",{className:"header-text"},"Astronomy Picture of the Day"),r.a.createElement("div",{className:"header-wrap"},r.a.createElement("div",{className:"header-item"}),r.a.createElement("div",{className:"header-item"},r.a.createElement(g,{date:t,onDateChange:a})),r.a.createElement("div",{className:"header-item"},r.a.createElement(f,{onAcceptKey:n}))))},k=(a(18),function(e){var t=e.src,a=e.title,n=e.mediaType;return r.a.createElement("div",{className:"carousel-item active"},"image"===n?r.a.createElement("img",{src:t,className:"d-block rounded mx-auto carousel-item-image",alt:"Loading error"}):r.a.createElement("iframe",{title:"video",src:t,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",className:"d-block rounded mx-auto carousel-item-video",allowFullScreen:!0}),r.a.createElement("span",{className:"carouselItem-text"},a))}),E=(a(19),function(e){var t=e.url,a=e.onClickNextPrevious,n=e.title,c=e.mediaType;return r.a.createElement("div",{id:"carouselControls",className:"carousel slide carousel-container","data-ride":"carousel"},r.a.createElement("div",{className:"carousel-inner"},r.a.createElement(k,{mediaType:c,src:t,title:n})),r.a.createElement("a",{className:"carousel-control-prev",href:"#",role:"button","data-slide":"prev",onClick:function(){return a(!1)}},r.a.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),r.a.createElement("span",{className:"sr-only"},"Previous")),r.a.createElement("a",{className:"carousel-control-next",href:"#",role:"button","data-slide":"next",onClick:function(){return a(!0)}},r.a.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),r.a.createElement("span",{className:"sr-only"},"Next")))}),x=(a(20),function(e){var t=e.text,a=e.copyright;return r.a.createElement("div",{className:"footer-container"},t,a?r.a.createElement("div",null,"\xa9 ",a):null)}),b=function(){return r.a.createElement("div",{className:"text-center"},r.a.createElement("div",{className:"spinner-grow",role:"status",style:{height:"100px",width:"100px"}},r.a.createElement("span",{className:"sr-only"},"Loading...")))},N=function(e){var t=e.message;return r.a.createElement("div",{className:"alert alert-danger text-center m-5",role:"alert"},t||"Error loading")},D=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={date:new Date,dateString:e.getDateString(),explanation:"",url:"",hdUrl:"",mediaType:"",title:"",copyright:"",key:sessionStorage.getItem("API-key"),pictureDate:"",loading:!0,error:!1,errorMessage:""},e.nasaService=new y,e.onDateChange=function(t){e.setState({dateString:t.target.value},(function(){return e.updatePictureOfTheDay(e.state.key,e.state.dateString)}))},e.onAcceptKey=function(t){e.state.key!==t&&e.setState({key:t})},e.onClickNextPrevious=function(t){e.setState((function(a){var n=a.date,r=n.getDate();if(t?r++:r--,n.setDate(r),!e.isFutureCheck(n))return{date:n,dateString:e.getDateString(n)}}),(function(){return e.updatePictureOfTheDay(e.state.key,e.state.dateString)}))},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.updatePictureOfTheDay(this.state.key,this.state.dateString)}},{key:"getDateString",value:function(e){var t=e||new Date,a="0".concat(t.getDate()).slice(-2),n="0".concat(t.getMonth()+1).slice(-2);return"".concat(t.getFullYear(),"-").concat(n,"-").concat(a)}},{key:"updatePictureOfTheDay",value:function(){var e=Object(l.a)(o.a.mark((function e(t,a){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.pictureDate!==a){e.next=2;break}return e.abrupt("return");case 2:return this.setLoading(!0),e.prev=3,e.next=6,this.nasaService.getDataInExactDay(t,a);case 6:n=e.sent,this.setState({explanation:n.explanation,url:n.url,hdUrl:n.hdurl,mediaType:n.media_type,title:n.title,copyright:n.copyright,pictureDate:n.date,loading:!1,error:!1,errorMessage:""}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),this.errorHandler(e.t0);case 13:case"end":return e.stop()}}),e,this,[[3,10]])})));return function(t,a){return e.apply(this,arguments)}}()},{key:"errorHandler",value:function(e){e?this.setState({error:!0,errorMessage:e.msg}):this.setState({error:!1,errorMessage:""})}},{key:"setLoading",value:function(e){this.setState({loading:e})}},{key:"isFutureCheck",value:function(e){return new Date<=e}},{key:"render",value:function(){var e=this.state,t=e.dateString,a=e.explanation,c=e.url,i=e.title,s=e.copyright,o=e.loading,l=e.error,u=e.errorMessage,m=e.mediaType,p=r.a.createElement(b,null);return l?p=r.a.createElement(N,{message:u}):o||(p=r.a.createElement(n.Fragment,null,r.a.createElement(E,{url:c,title:i,mediaType:m,onClickNextPrevious:this.onClickNextPrevious}),r.a.createElement(x,{text:a,copyright:s}))),r.a.createElement("div",{className:"app-text"},r.a.createElement(v,{date:t,onDateChange:this.onDateChange,onAcceptKey:this.onAcceptKey}),p)}}]),a}(n.Component);i.a.render(r.a.createElement(D,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.745e1c47.chunk.js.map