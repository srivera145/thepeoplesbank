(this.webpackJsonpthepeoplesbank=this.webpackJsonpthepeoplesbank||[]).push([[0],{412:function(e){e.exports=JSON.parse('{"contractName":"TPBank","abi":[{"inputs":[{"internalType":"contract IERC20","name":"_Token","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_accountAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"_depositAmount","type":"uint256"}],"name":"LogWeiDeposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_accountAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"_withdrawalAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_updatedBalance","type":"uint256"}],"name":"LogWeiWithdrawal","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"ThePeoplesToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"getBankBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getWeiBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"mintThePeoplesTokenToUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amountToContractInThePeoplesToken","type":"uint256"}],"name":"transferThePeoplesTokenToContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amountToWithdrawInWei","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}]}')},413:function(e){e.exports=JSON.parse('{"contractName":"ThePeoplesToken","abi":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"}]}')},457:function(e,t){},460:function(e,t){},464:function(e,t){},465:function(e,t){},490:function(e,t){},492:function(e,t){},502:function(e,t){},504:function(e,t){},515:function(e,t){},517:function(e,t){},542:function(e,t){},557:function(e,t){},575:function(e,t){},587:function(e,t){},596:function(e,t){},606:function(e,t){},613:function(e,t){},614:function(e,t){},619:function(e,t){},626:function(e,t){},636:function(e,t){},644:function(e,t){},654:function(e,t){},699:function(e,t){},739:function(e,t){},741:function(e,t){},748:function(e,t){},749:function(e,t){},772:function(e,t){},774:function(e,t){},784:function(e,t){},787:function(e,t){},794:function(e,t){},877:function(e,t){},887:function(e,t,n){},888:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),i=n(46),r=n.n(i),c=n(31),u=n(73),o=n(23),p=n(41),l=n(184),d=n(146),y=n(261),m=n(260),b=n(145),f=n(123),h=n(259),j=n(257),x=n.n(j),O=n(258),T=n.n(O),w=n(412),g=n(413),v=n.p+"static/media/tpblogo.00383518.png",k=n.p+"static/media/metamask.02e3ec27.png",B=n.p+"static/media/bnb-logo.92643887.png",M=n.p+"static/media/logowhite.4d773d42.png",C=n(2),N=function(){var e=new T.a(T.a.givenProvider||"http://localhost:7545"),t=1e3,n=function(e){return new Promise((function(t){return setTimeout(t,e)}))},s=w.abi,i=new e.eth.Contract(s,"0x89cc38B7810955342E39c229397a9A6170911cBE"),r=g.abi,j=new e.eth.Contract(r,"0x4525fC549C2A4909a6C8992bbA30714Cf148CEED"),O=Object(a.useState)(""),N=Object(o.a)(O,2),S=N[0],W=N[1],A=Object(a.useState)(!1),P=Object(o.a)(A,2),E=P[0],_=P[1],L=Object(a.useState)(0),R=Object(o.a)(L,2),D=R[0],I=R[1],J=Object(a.useState)(0),U=Object(o.a)(J,2),H=U[0],q=U[1],F=Object(a.useState)(""),V=Object(o.a)(F,2),Y=V[0],z=V[1],$=Object(a.useState)(""),G=Object(o.a)($,2),K=G[0],Q=G[1],X=Object(a.useState)(0),Z=Object(o.a)(X,2),ee=Z[0],te=Z[1],ne=Object(a.useState)(!1),ae=Object(o.a)(ne,2),se=ae[0],ie=ae[1],re=Object(a.useState)(!1),ce=Object(o.a)(re,2),ue=ce[0],oe=ce[1],pe=Object(a.useState)(!1),le=Object(o.a)(pe,2),de=le[0],ye=le[1],me=function(){var t=Object(u.a)(Object(c.a)().mark((function t(){var n,a,s,r,u,o;return Object(c.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,n=window,a=n.ethereum){t.next=5;break}return alert("You need a MetaMask wallet to connect."),t.abrupt("return");case 5:return t.next=7,a.request({method:"eth_requestAccounts"});case 7:return s=t.sent,W(s[0]),_(!0),t.next=12,i.methods.getWeiBalance().call({from:s[0]});case 12:return r=t.sent,I(e.utils.fromWei(r,"ether")),t.next=16,i.methods.getBankBalance().call();case 16:return u=t.sent,q(e.utils.fromWei(String(u),"ether")),t.next=20,j.methods.balanceOf(s[0]).call().then((function(e){return e}));case 20:o=t.sent,te(e.utils.fromWei(o,"ether")),t.next=27;break;case 24:t.prev=24,t.t0=t.catch(0),console.log(t.t0);case 27:case"end":return t.stop()}}),t,null,[[0,24]])})));return function(){return t.apply(this,arguments)}}(),be=function(){var a=Object(u.a)(Object(c.a)().mark((function a(){var s,r,o;return Object(c.a)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,o=e.utils.toWei(Y,"ether"),a.next=4,i.methods.deposit().send({from:S,value:o.toString(),gasLimit:3e5},function(){var a=Object(u.a)(Object(c.a)().mark((function a(u,o){var p;return Object(c.a)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:console.log("Submitted transaction with hash: ",o),p=null;case 2:if(null!=p){a.next=11;break}return a.next=5,e.eth.getTransactionReceipt(o);case 5:return p=a.sent,oe(!0),a.next=9,n(t);case 9:a.next=2;break;case 11:return console.log("Transaction receipt: ",p),a.next=14,i.methods.getWeiBalance().call({from:S});case 14:return s=a.sent,a.next=17,i.methods.getBankBalance().call();case 17:r=a.sent,I(e.utils.fromWei(s,"ether")),q(e.utils.fromWei(String(r),"ether")),z(""),ie(!0),oe();case 23:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}());case 4:a.next=9;break;case 6:a.prev=6,a.t0=a.catch(0),console.log(a.t0);case 9:case"end":return a.stop()}}),a,null,[[0,6]])})));return function(){return a.apply(this,arguments)}}(),fe=function(){var a=Object(u.a)(Object(c.a)().mark((function a(){var s,r,o;return Object(c.a)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,s=e.utils.toWei(K,"ether"),a.next=4,i.methods.getWeiBalance().call({from:S});case 4:if(!((o=a.sent)<s)){a.next=10;break}alert("insufficient funds"),Q(""),a.next=12;break;case 10:return a.next=12,i.methods.withdraw(s).send({from:S},function(){var a=Object(u.a)(Object(c.a)().mark((function a(s,u){var p;return Object(c.a)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:console.log("Submitted transaction with hash: ",u),p=null;case 2:if(null!=p){a.next=11;break}return a.next=5,e.eth.getTransactionReceipt(u);case 5:return p=a.sent,oe(!0),a.next=9,n(t);case 9:a.next=2;break;case 11:return console.log("Transaction receipt: ",p),a.next=14,i.methods.getWeiBalance().call({from:S});case 14:return o=a.sent,I(e.utils.fromWei(o,"ether")),a.next=18,i.methods.getBankBalance().call();case 18:r=a.sent,q(e.utils.fromWei(String(r),"ether")),Q(""),oe();case 22:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}());case 12:a.next=17;break;case 14:a.prev=14,a.t0=a.catch(0),console.log(a.t0);case 17:case"end":return a.stop()}}),a,null,[[0,14]])})));return function(){return a.apply(this,arguments)}}(),he=function(){var a=Object(u.a)(Object(c.a)().mark((function a(){var s;return Object(c.a)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,j.methods.balanceOf(S).call().then((function(e){return e}));case 2:return s=a.sent,s=e.utils.fromWei(s.toString(),"ether"),a.next=6,i.methods.mintThePeoplesTokenToUser(S).send({from:S},function(){var a=Object(u.a)(Object(c.a)().mark((function a(i,r){var u;return Object(c.a)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:console.log("Submitted transaction with hash: ",r),u=null;case 2:if(null!=u){a.next=11;break}return a.next=5,e.eth.getTransactionReceipt(r);case 5:return u=a.sent,ye(!0),a.next=9,n(t);case 9:a.next=2;break;case 11:return console.log("Transaction receipt: ",u),a.next=14,j.methods.balanceOf(S).call().then((function(e){return e}));case 14:s=a.sent,te(e.utils.fromWei(s,"ether")),ye();case 17:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}());case 6:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return Object(C.jsxs)(l.a,{className:"p-3",children:[Object(C.jsxs)(l.a,{children:[Object(C.jsxs)(b.a,{className:"align-items-sm-center mb-5",children:[Object(C.jsx)(f.a,{sm:{span:6},children:Object(C.jsx)(h.a,{children:Object(C.jsx)(l.a,{children:Object(C.jsx)(h.a.Brand,{href:"#home",children:Object(C.jsx)("img",{src:v,height:"200",alt:"TPBank Logo"})})})})}),Object(C.jsxs)(f.a,{sm:{span:3,offset:3},children:[Object(C.jsx)("img",{src:v,height:"200",alt:"TPBank Logo"}),Object(C.jsxs)(d.a,{id:"connectBtn",style:{width:"14rem"},onClick:me,children:[" ",Object(C.jsx)("img",{src:k,height:"27",alt:"Metamask Logo"}),S?" ".concat(S.slice(0,6),"......").concat(S.slice(S.length-4,S.length)):"Connect Wallet"]})]})]}),Object(C.jsx)(b.a,{className:"justify-content-sm-center mb-3 text-center",children:Object(C.jsx)(f.a,{sm:{span:6},children:Object(C.jsxs)("span",{id:"description",children:["To make deposits and withdrawals, please connect your Metamask Wallet to the BSC TestNet network. You will need some test BNB as well. Try the official"," ",Object(C.jsx)("a",{href:"https://testnet.binance.org/faucet-smart",children:"BSC TestNet Faucet"}),"."]})})}),Object(C.jsx)(b.a,{className:"justify-content-sm-center",children:Object(C.jsx)(f.a,{sm:12,children:ue?Object(C.jsx)(p.a,{className:"m-auto mb-3 text-center p-3",style:{width:"32rem"},children:Object(C.jsx)(x.a,{type:"Oval",color:"#734b6d",height:80,width:80,timeout:15e3})}):Object(C.jsxs)(p.a,{className:"m-auto mb-3 text-center p-3",style:{width:"32rem"},text:"light",children:[Object(C.jsx)(p.a.Header,{children:Object(C.jsx)(p.a.Title,{children:"Bank Balance"})}),Object(C.jsxs)(p.a.Body,{children:[H," BNB"," ",Object(C.jsx)("img",{src:B,height:"32",alt:"Ether Logo"})]}),Object(C.jsx)(p.a.Header,{children:Object(C.jsx)(p.a.Title,{children:"Account Balance"})}),Object(C.jsxs)(p.a.Body,{children:[D," BNB ",Object(C.jsx)("img",{src:B,height:"32",alt:"Ether Logo"})]}),Object(C.jsxs)(m.a,{className:"mb-2 p-2",children:[Object(C.jsx)(y.a,{placeholder:"Amount (BNB)","aria-label":"Amount (BNB)","aria-describedby":"basic-addon2",value:Y,onChange:function(e){return z(e.target.value)}}),Object(C.jsx)(d.a,{id:"primary",style:{width:"8rem"},onClick:be,disabled:!E,children:"Deposit"})]}),Object(C.jsxs)(m.a,{className:"mb-2 p-2",children:[Object(C.jsx)(y.a,{placeholder:"Amount (BNB)","aria-label":"Amount (BNB)","aria-describedby":"basic-addon2",value:K,onChange:function(e){return Q(e.target.value)}}),Object(C.jsx)(d.a,{variant:"dark",id:"button-addon2",style:{width:"8rem"},disabled:!(D>0),onClick:fe,children:"Withdraw"})]})]})})}),Object(C.jsx)(b.a,{className:"justify-content-sm-center",children:Object(C.jsx)(f.a,{sm:12,children:de?Object(C.jsx)(p.a,{className:"m-auto mb-2 text-center  p-3",style:{width:"32rem"},text:"light",children:Object(C.jsx)(x.a,{type:"Oval",color:"#734b6d",height:80,width:80,timeout:18e3})}):Object(C.jsxs)(p.a,{className:"m-auto mb-3 text-center  p-3",style:{width:"32rem"},text:"light",children:[Object(C.jsx)(p.a.Header,{children:Object(C.jsx)(p.a.Title,{children:"Rewards"})}),Object(C.jsxs)(p.a.Body,{children:[Object(C.jsxs)(p.a.Text,{children:[ee," ThePeoplesToken"," ",Object(C.jsx)("img",{src:M,height:"32",alt:"Logo"})]}),Object(C.jsx)(d.a,{className:"mb-3",id:"primary",size:"lg",disabled:!se,onClick:he,children:se||0!==ee?se||"1000"!==ee?"Claim Rewards":"Claimed":"Deposit to Earn Rewards"})]})]})})})]}),Object(C.jsxs)("div",{id:"notice",children:[Object(C.jsx)("p",{children:"To display $TPT in MetaMask open the extension and go to the Assets tab. Select import token then copy and paste the TPT token address:"}),Object(C.jsx)("p",{children:"0x4525fC549C2A4909a6C8992bbA30714Cf148CEED"})]})]})};n(885),n(886),n(887);r.a.render(Object(C.jsx)(s.a.StrictMode,{children:Object(C.jsx)(N,{})}),document.getElementById("root"))}},[[888,1,2]]]);
//# sourceMappingURL=main.35d81d64.chunk.js.map