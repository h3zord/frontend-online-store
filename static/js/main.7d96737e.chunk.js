(this["webpackJsonpsd-0x-project-frontend-online-store"]=this["webpackJsonpsd-0x-project-frontend-online-store"]||[]).push([[0],[,function(t,e,a){t.exports={checkoutPage:"Checkout_checkoutPage__30E38",checkoutContainer:"Checkout_checkoutContainer__1ky9v",productsCheckout:"Checkout_productsCheckout__15m7p",title:"Checkout_title__1N2Ff",productCheckout:"Checkout_productCheckout__3Fob1",infoContainer:"Checkout_infoContainer__3r-uB",formCheckout:"Checkout_formCheckout__8tJnD",fullName:"Checkout_fullName__3a74X",cpf:"Checkout_cpf__2k7ML",email:"Checkout_email__1YK_9",phone:"Checkout_phone__5AUOd",cep:"Checkout_cep__3bzw6",adress:"Checkout_adress__3ymFr",complement:"Checkout_complement__3Oo5g",number:"Checkout_number__1Gth9",paymentContainer:"Checkout_paymentContainer__ky5oU",paymentMethod:"Checkout_paymentMethod__4R5wO",paymentDescription:"Checkout_paymentDescription__1vCJm",boletoPayment:"Checkout_boletoPayment__avWjr",creditPayment:"Checkout_creditPayment__VuUTa",boleto:"Checkout_boleto__aSj0w",creditCard:"Checkout_creditCard__1Hf1i",purchase:"Checkout_purchase__3tRH7",boletoMethod:"Checkout_boletoMethod__2kNA1"}},,,,,,,,,,,function(t,e,a){t.exports={infoPage:"MoreInfo_infoPage__1eCYL",infoTitle:"MoreInfo_infoTitle__sHNR9",infoContent:"MoreInfo_infoContent__16CFo",infoProductCard:"MoreInfo_infoProductCard__1gxbl",infoForm:"MoreInfo_infoForm__DpcAk",star:"MoreInfo_star__2UbFV",rating:"MoreInfo_rating__3J4H2",infoComments:"MoreInfo_infoComments__1OK47",commentTitle:"MoreInfo_commentTitle__2e0tV",comments:"MoreInfo_comments__IEhfp",textComent:"MoreInfo_textComent__1-103"}},function(t,e,a){t.exports={"home-page":"Home_home-page__1YJza",mainContainer:"Home_mainContainer__1PFeY",categoryList:"Home_categoryList__2QFvK",searchAndCart:"Home_searchAndCart__2q8CZ",searchInput:"Home_searchInput__b5KCC",searchButton:"Home_searchButton__21Sda",cartButton:"Home_cartButton__2g-Fb",cart:"Home_cart__kpvnk",searchedProducts:"Home_searchedProducts__wkth9",productContainer:"Home_productContainer__3l8vu"}},,function(t,e,a){t.exports={emptyCart:"Cart_emptyCart__37c8t",cartContainer:"Cart_cartContainer__aohje",productImage:"Cart_productImage__3MjAE",cartProducts:"Cart_cartProducts__2MTGa",title:"Cart_title__3Ozvk",cartProduct:"Cart_cartProduct__11Whk",cartButtons:"Cart_cartButtons__3Q17B",closeOrder:"Cart_closeOrder__snv2s"}},,,,,,,function(t,e,a){t.exports={productCard:"ProductList_productCard__3NN62",link:"ProductList_link__23vrO",productImage:"ProductList_productImage__9-Ctp"}},,,function(t,e,a){t.exports={purchaseContainer:"Purchase_purchaseContainer__2r-1A",purchaseText:"Purchase_purchaseText__2EkKb"}},,,,,function(t,e,a){t.exports={headerContainer:"Header_headerContainer__2DpSF"}},function(t,e,a){t.exports=a.p+"static/media/logo.2968255e.svg"},function(t,e,a){t.exports=a.p+"static/media/magnifier.8bae4642.svg"},function(t,e,a){t.exports=a.p+"static/media/text.87c6057f.svg"},function(t,e,a){t.exports=a.p+"static/media/text2.3fc54b26.svg"},function(t,e,a){t.exports=a.p+"static/media/emptyCart.bb8b39dc.svg"},function(t,e,a){t.exports=a.p+"static/media/voltar.6b1c45c7.svg"},function(t,e,a){t.exports={backButton:"BackButton_backButton__2zhNR"}},function(t,e,a){t.exports=a.p+"static/media/sum.12c9569e.svg"},function(t,e,a){t.exports=a.p+"static/media/sub.9273d597.svg"},function(t,e,a){t.exports=a.p+"static/media/star.9324c81c.svg"},function(t,e,a){t.exports=a.p+"static/media/boleto.ecd17b03.svg"},function(t,e,a){t.exports=a.p+"static/media/visa.a42fe1b7.svg"},function(t,e,a){t.exports=a.p+"static/media/mastercard.34b3f074.svg"},function(t,e,a){t.exports=a.p+"static/media/elo.cbdf2d6f.svg"},function(t,e,a){t.exports=a(60)},,,,,,,,,,,,,,function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),c=a(27),o=a.n(c),i=a(2),u=a(3),s=a(5),l=a(4),m=a(20),p=a(6),d=a(19),h=a(8),f=a.n(h),_=a(14),y=a(17),v=a(13),g=a.n(v),C=function(t){Object(s.a)(a,t);var e=Object(l.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).redirectToCart=function(){t.props.history.push("/cart")},t}return Object(u.a)(a,[{key:"render",value:function(){var t=this.props.quantityProducts;return r.a.createElement("div",{className:g.a.cartButton},r.a.createElement("button",{"data-testid":"shopping-cart-button",type:"button",id:"",onClick:this.redirectToCart},r.a.createElement(y.b,{className:g.a.cart}),r.a.createElement("p",{"data-testid":"shopping-cart-size"},t)))}}]),a}(r.a.Component);function E(){return b.apply(this,arguments)}function b(){return(b=Object(_.a)(f.a.mark((function t(){var e,a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.mercadolibre.com/sites/MLB/categories");case 2:return e=t.sent,t.next=5,e.json();case 5:return a=t.sent,t.abrupt("return",a);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function k(t,e){return N.apply(this,arguments)}function N(){return(N=Object(_.a)(f.a.mark((function t(e,a){var n,r,c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.mercadolibre.com/sites/MLB/search?category=".concat(e,"&q=").concat(a),t.next=3,fetch(n);case 3:return r=t.sent,t.next=6,r.json();case 6:return c=t.sent,t.abrupt("return",c);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t){return O.apply(this,arguments)}function O(){return(O=Object(_.a)(f.a.mark((function t(e){var a,n,r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="https://api.mercadolibre.com/items/".concat(e),t.next=3,fetch(a);case 3:return n=t.sent,t.next=6,n.json();case 6:return r=t.sent,t.abrupt("return",r);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var I=function(t){Object(s.a)(a,t);var e=Object(l.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("h2",null,"Carregando...")}}]),a}(n.Component),j=a(22),P=a.n(j),S=function(t){Object(s.a)(a,t);var e=Object(l.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).adjustPrice=function(t){if(t)return t.toFixed(2)},t}return Object(u.a)(a,[{key:"render",value:function(){var t=this.props,e=t.productData,a=t.updateCartAndQuantityItems;return r.a.createElement("div",{"data-testid":"product",className:P.a.productCard},r.a.createElement("img",{src:e.thumbnail,alt:"imagem ilustrativa do produto",className:P.a.productImage}),r.a.createElement("p",null,e.title),r.a.createElement("p",null,"R$ ".concat(this.adjustPrice(e.price))),e.shipping.free_shipping&&r.a.createElement("div",{"data-testid":"free-shipping"},r.a.createElement(y.a,null),r.a.createElement("p",null,"Frete Gr\xe1tis")),r.a.createElement(m.b,{to:"/moreInfo/".concat(e.id),"data-testid":"product-detail-link",className:P.a.link},"Mais Informa\xe7\xf5es"),r.a.createElement("button",{type:"button","data-testid":"product-add-to-cart",onClick:function(){return a(e)}},"Adicionar ao Carrinho"))}}]),a}(n.Component),q=a(30),L=a.n(q),A=a(31),B=a.n(A),M=function(t){Object(s.a)(a,t);var e=Object(l.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("header",{className:L.a.headerContainer},r.a.createElement("img",{src:B.a,alt:"logo img"}))}}]),a}(r.a.Component),w=a(32),F=a.n(w),Q=a(33),T=a.n(Q),D=a(34),H=a.n(D),J=function(t){Object(s.a)(a,t);var e=Object(l.a)(a);function a(){var t;return Object(i.a)(this,a),(t=e.call(this)).getProductCategories=function(){t.setState({isLoading:!0},Object(_.a)(f.a.mark((function e(){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:a=e.sent,t.setState({productCategories:a,isLoading:!1});case 4:case"end":return e.stop()}}),e)}))))},t.getCategoryBtns=function(e){return e.map((function(e){var a=e.id,n=e.name;return r.a.createElement("button",{key:a,type:"button","data-testid":"category",id:a,onClick:t.getProductsListCategory},n)}))},t.getProductsListCategory=function(){var e=Object(_.a)(f.a.mark((function e(a){var n,r,c,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.target,r=n.id,e.next=4,k(r);case 4:c=e.sent,o=c.results,t.setState({productList:o,productSearch:!0});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.handleStateInput=function(e){var a=e.target,n=a.name,r=a.value;t.setState(Object(d.a)({},n,r))},t.getProductsListSearch=Object(_.a)(f.a.mark((function e(){var a,n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.state.searchInput,e.next=3,k("categoryId",a);case 3:n=e.sent,r=n.results,t.setState({productList:r,productSearch:!0});case 6:case"end":return e.stop()}}),e)}))),t.state={productSearch:!1,productCategories:[],isLoading:!1,searchInput:"",productList:[]},t}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.getProductCategories()}},{key:"render",value:function(){var t=this.state,e=t.productSearch,a=t.searchInput,n=t.productList,c=t.isLoading,o=t.productCategories,i=this.props,u=i.history,s=i.updateCartAndQuantityItems,l=i.quantityProducts;return r.a.createElement("div",{className:"home-page"},r.a.createElement(M,null),r.a.createElement("div",{className:g.a.mainContainer},r.a.createElement("aside",{className:g.a.categoryList},r.a.createElement("p",null,"Categorias"),r.a.createElement("hr",null),c?r.a.createElement(I,null):this.getCategoryBtns(o)),r.a.createElement("main",null,r.a.createElement("div",{className:g.a.searchAndCart},r.a.createElement("input",{"data-testid":"query-input",type:"search",placeholder:"Digite aqui o que voc\xea procura",name:"searchInput",value:a,onChange:this.handleStateInput,id:"search-input",className:g.a.searchInput}),r.a.createElement("button",{"data-testid":"query-button",type:"button",onClick:this.getProductsListSearch,className:g.a.searchButton},r.a.createElement("img",{src:F.a,alt:"magnifier"})),r.a.createElement(C,{history:u,quantityProducts:l})),r.a.createElement("section",{className:g.a.searchedProducts},e?n.length?r.a.createElement("div",{className:g.a.productContainer},n.map((function(t){return r.a.createElement(S,{productData:t,updateCartAndQuantityItems:s,key:t.id})}))):r.a.createElement("span",null,r.a.createElement("img",{src:H.a,alt:"text2 img"}),"Digite outro termo de pesquisa ou escolha uma categoria."):r.a.createElement("span",{"data-testid":"home-initial-message"},r.a.createElement("img",{src:T.a,alt:"text img"}),"Digite algum termo de pesquisa ou escolha uma categoria.")))))}}]),a}(r.a.Component),R=a(21);JSON.parse(localStorage.getItem("cart_items"))||localStorage.setItem("cart_items",JSON.stringify([]));var z=function(t){return localStorage.setItem("cart_items",JSON.stringify(t))},$=function(){return JSON.parse(localStorage.getItem("cart_items"))},K=function(t){var e=$().find((function(e){return e.id===t.id}));if(e){if(e.quantity<e.maxQuantity){var a=e.quantity+1;!function(t,e){var a=$();a.forEach((function(n,r){n.id===t&&(a[r].quantity=e,z(a))}))}(t.id,a)}}else!function(t){if(t){var e=$();z([].concat(Object(R.a)(e),[t]))}}({image:t.thumbnail,title:t.title,price:t.price,id:t.id,quantity:1,maxQuantity:t.available_quantity})},V=function(){return $().reduce((function(t,e){return t+=e.price*e.quantity}),0)},G=a(35),U=a.n(G),Y=a(15),W=a.n(Y),X=a(36),Z=a.n(X),tt=a(37),et=a.n(tt),at=function(t){Object(s.a)(a,t);var e=Object(l.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).goBack=function(){t.props.history.goBack()},t}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("button",{type:"button",onClick:this.goBack,className:et.a.backButton},r.a.createElement("img",{src:Z.a,alt:"back button img"}),"Voltar")}}]),a}(n.Component),nt=a(38),rt=a.n(nt),ct=a(39),ot=a.n(ct),it=function(t){Object(s.a)(a,t);var e=Object(l.a)(a);function a(){var t;return Object(i.a)(this,a),(t=e.call(this)).redirectToCheckout=function(){t.props.history.push("/checkout")},t.getCartList=function(){var e=$();e.length>0&&t.setState({cartList:e,cartEmpty:!1})},t.sumQuantity=function(e){var a=t.props.quantityProductsCart,n=$();n.forEach((function(t,a){var r=t.id,c=t.quantity,o=t.maxQuantity;r===e&&c<o&&(n[a].quantity+=1)})),z(n),t.setState({cartList:n}),a()},t.subQuantity=function(e){var a=t.props.quantityProductsCart,n=$();n.forEach((function(t,a){var r=t.id,c=t.quantity;r===e&&c>1&&(n[a].quantity-=1)})),z(n),t.setState({cartList:n}),a()},t.deleteItemCart=function(e){var a=$().filter((function(t){return t.id!==e}));console.log(a),z(a),t.setState({cartList:a}),0===a.length&&t.setState({cartEmpty:!0})},t.showCartProducts=function(e){return e.map((function(e){var a=e.image,n=e.title,c=e.price,o=e.quantity,i=e.id;return r.a.createElement("div",{key:i,className:W.a.cartProduct},r.a.createElement("hr",null),r.a.createElement("img",{src:a,alt:"produt img",className:W.a.productImage}),r.a.createElement("h4",{"data-testid":"shopping-cart-product-name"},n),r.a.createElement("p",null,"R$"," ",r.a.createElement("span",null,(c*o).toFixed(2))),r.a.createElement("p",null,"Quantidade:"," ",r.a.createElement("span",{"data-testid":"shopping-cart-product-quantity"},o)),r.a.createElement("div",{className:W.a.cartButtons},r.a.createElement("button",{"data-testid":"product-increase-quantity",type:"button",id:i,onClick:function(){return t.sumQuantity(i)},className:"quantity-button"},r.a.createElement("img",{src:rt.a,alt:"sum img"})),r.a.createElement("button",{"data-testid":"product-decrease-quantity",type:"button",id:i,onClick:function(){return t.subQuantity(i)},className:"quantity-button"},r.a.createElement("img",{src:ot.a,alt:"sub img"})),r.a.createElement("button",{type:"button",className:"delete-button",onClick:function(){return t.deleteItemCart(i)},id:i},"Excluir")))}))},t.state={cartEmpty:!0,cartList:[]},t}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.getCartList()}},{key:"render",value:function(){var t=this.state,e=t.cartEmpty,a=t.cartList,n=this.props.history;return r.a.createElement("div",{className:W.a.cartPage},r.a.createElement(M,null),r.a.createElement(at,{history:n}),e?r.a.createElement("div",{className:W.a.emptyCart},r.a.createElement("img",{src:U.a,"data-testid":"empty-msg",alt:"emptyCart img"})):r.a.createElement("div",{className:W.a.cartContainer},r.a.createElement("div",{className:W.a.cartProducts},r.a.createElement("p",{className:W.a.title},"Carrinho de compras"),this.showCartProducts(a)),r.a.createElement("div",{className:W.a.closeOrder},r.a.createElement("p",null,"Valor total da compra:"),r.a.createElement("p",null,"R$ ".concat(V().toFixed(2))),r.a.createElement("button",{"data-testid":"checkout-products",type:"button",onClick:this.redirectToCheckout,disabled:e},"Finalizar compra"))))}}]),a}(r.a.Component);JSON.parse(localStorage.getItem("evaluation_data"))||localStorage.setItem("evaluation_data",JSON.stringify([]));var ut=function(){return JSON.parse(localStorage.getItem("evaluation_data"))},st=function(t){if(t){var e=ut();a=[].concat(Object(R.a)(e),[t]),localStorage.setItem("evaluation_data",JSON.stringify(a))}var a},lt=a(12),mt=a.n(lt),pt=a(40),dt=a.n(pt),ht=function(t){Object(s.a)(a,t);var e=Object(l.a)(a);function a(){var t;return Object(i.a)(this,a),(t=e.call(this)).getProductInfo=Object(_.a)(f.a.mark((function e(){var a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.props.match.params.id,e.next=3,x(a);case 3:n=e.sent,t.setState({productInfo:n,freeShipping:n.shipping.free_shipping});case 5:case"end":return e.stop()}}),e)}))),t.handleRateChange=function(e){t.setState({rateButton:e})},t.handleChange=function(e){var a=e.target,n=a.name,r=a.value;t.setState(Object(d.a)({},n,r))},t.saveEvaluationInputs=function(e){e.preventDefault();var a=t.state,n=a.emailInput,r=a.textAreaInput,c=a.rateButton,o=t.props.match.params.id;st({emailInput:n,textAreaInput:r,rateButton:c,evaluationId:o}),t.setState({emailInput:"",textAreaInput:"",rateButton:0}),t.getEvaluationList()},t.getEvaluationList=function(){var e=t.props.match.params.id,a=ut().filter((function(t){return t.evaluationId===e}));t.setState({evaluationList:a})},t.adjustPrice=function(t){if(t)return t.toFixed(2)},t.state={productInfo:{},emailInput:"",rateButton:0,textAreaInput:"",evaluationList:[],freeShipping:!1},t}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.getProductInfo(),this.getEvaluationList()}},{key:"render",value:function(){for(var t=this,e=this.state,a=e.productInfo,n=e.emailInput,c=e.textAreaInput,o=e.evaluationList,i=e.freeShipping,u=e.rateButton,s=this.props,l=s.history,m=s.quantityProducts,p=s.updateCartAndQuantityItems,d=[],h=function(e){d.push(r.a.createElement("button",{onClick:function(){return t.handleRateChange(e)},"data-testid":"".concat(e,"-rating"),type:"button",key:e,className:mt.a.star},r.a.createElement("img",{src:dt.a,alt:"star img"})))},f=1;f<=5;f+=1)h(f);return r.a.createElement("div",{className:mt.a.infoPage},r.a.createElement(M,null),r.a.createElement("div",{className:mt.a.infoTitle},r.a.createElement(at,{history:l}),r.a.createElement(C,{history:l,quantityProducts:m})),r.a.createElement("div",{className:mt.a.infoContainer},r.a.createElement("div",{className:mt.a.infoContent},r.a.createElement("div",{className:mt.a.infoProductCard},r.a.createElement("img",{src:a.thumbnail,alt:"imagem ilustrativa do produto"}),r.a.createElement("p",{"data-testid":"product-detail-name"},a.title),r.a.createElement("p",null,a.id),r.a.createElement("p",null,a.warranty),i&&r.a.createElement("div",{"data-testid":"free-shipping"},r.a.createElement(y.a,null),r.a.createElement("p",null,"Frete Gr\xe1tis")),r.a.createElement("p",null,"R$ ".concat(this.adjustPrice(a.price))),r.a.createElement("button",{type:"button","data-testid":"product-detail-add-to-cart",onClick:function(){return p(a)}},"Adicionar ao Carrinho")),r.a.createElement("form",{className:mt.a.infoForm},r.a.createElement("h1",null,"Avalia\xe7\xe3o"),r.a.createElement("input",{onChange:this.handleChange,type:"email",name:"emailInput",value:n,"data-testid":"product-detail-email",placeholder:"Digite seu e-mail"}),r.a.createElement("textarea",{onChange:this.handleChange,"data-testid":"product-detail-evaluation",name:"textAreaInput",value:c,placeholder:"Adicione seus coment\xe1rios sobre o produto (opcional)"}),r.a.createElement("div",null,d),r.a.createElement("button",{type:"submit","data-testid":"submit-review-btn",className:mt.a.rating,onClick:this.saveEvaluationInputs,disabled:!(n.length&&u)},"Avaliar"))),r.a.createElement("div",{className:mt.a.infoComments},r.a.createElement("p",{className:mt.a.commentTitle},"Coment\xe1rios"),o.map((function(t,e){return r.a.createElement("div",{key:e,className:mt.a.comments},r.a.createElement("p",null,t.emailInput),r.a.createElement("p",null,"Nota: ".concat(t.rateButton)),r.a.createElement("p",{className:mt.a.textComent},t.textAreaInput))})))))}}]),a}(r.a.Component),ft=a(1),_t=a.n(ft),yt=a(41),vt=a.n(yt),gt=a(42),Ct=a.n(gt),Et=a(43),bt=a.n(Et),kt=a(44),Nt=a.n(kt),xt=function(t){Object(s.a)(a,t);var e=Object(l.a)(a);function a(){var t;return Object(i.a)(this,a),(t=e.call(this)).redirectToPurchase=function(){t.props.history.push("/purchase")},t.selectPayment=function(e){var a=e.target;t.setState({payment:a.value})},t.state={payment:""},t}return Object(u.a)(a,[{key:"render",value:function(){var t=this,e=this.props.history,a=this.state.payment,n=$(),c=V().toFixed(2);return r.a.createElement("div",{className:_t.a.checkoutPage},r.a.createElement(M,null),r.a.createElement(at,{history:e}),r.a.createElement("div",{className:_t.a.checkoutContainer},r.a.createElement("div",{className:_t.a.productsCheckout},r.a.createElement("p",{className:_t.a.title},"Revise seus produtos"),n.map((function(t){var e=t.id,a=t.image,n=t.price,c=t.quantity,o=t.title;return r.a.createElement("div",{key:e,className:_t.a.productCheckout},r.a.createElement("img",{src:a,alt:"imagem ilustrativa do produto",className:"product-image"}),r.a.createElement("h4",null,o),r.a.createElement("p",null,"R$ ".concat((n*c).toFixed(2))),r.a.createElement("p",null,"Quantidade: ".concat(c)))})),r.a.createElement("p",{className:_t.a.title},"Total: R$ ".concat(c))),r.a.createElement("div",{className:_t.a.infoContainer},r.a.createElement("p",{className:_t.a.title},"Informa\xe7\xf5es do Comprador"),r.a.createElement("form",{className:_t.a.formCheckout},r.a.createElement("input",{"data-testid":"checkout-fullname",type:"text",placeholder:"Nome Completo",className:_t.a.fullName}),r.a.createElement("input",{"data-testid":"checkout-cpf",type:"text",placeholder:"CPF",className:_t.a.cpf}),r.a.createElement("input",{"data-testid":"checkout-email",type:"email",placeholder:"Email",className:_t.a.email}),r.a.createElement("input",{"data-testid":"checkout-phone",type:"tel",placeholder:"Telefone",className:_t.a.phone}),r.a.createElement("input",{"data-testid":"checkout-cep",type:"text",placeholder:"CEP",className:_t.a.cep}),r.a.createElement("input",{"data-testid":"checkout-address",type:"text",placeholder:"Endere\xe7o",className:_t.a.adress}),r.a.createElement("input",{"data-testid":"checkout-complement",type:"text",placeholder:"Complemento",className:_t.a.complement}),r.a.createElement("input",{"data-testid":"checkout-number",type:"text",placeholder:"N\xfamero",className:_t.a.number})),r.a.createElement("p",{className:_t.a.title},"M\xe9todo de pagamento"),r.a.createElement("div",{className:_t.a.paymentContainer},r.a.createElement("div",{className:_t.a.paymentDescription},r.a.createElement("div",{className:_t.a.boletoPayment},r.a.createElement("p",null,"Boleto")),r.a.createElement("div",{className:_t.a.creditPayment},r.a.createElement("p",null,"Cart\xe3o de cr\xe9dito"))),r.a.createElement("div",{className:_t.a.paymentMethod},r.a.createElement("form",{className:_t.a.boleto},r.a.createElement("label",{htmlFor:"boleto",className:_t.a.boletoMethod},r.a.createElement("input",{type:"radio",id:"boleto",name:"payment",value:"boleto",onClick:function(e){return t.selectPayment(e)}}),r.a.createElement("img",{src:vt.a,alt:"boleto img"})),r.a.createElement("label",{htmlFor:"visa"},r.a.createElement("input",{type:"radio",id:"visa",name:"payment",value:"visa",onClick:function(e){return t.selectPayment(e)}}),r.a.createElement("img",{src:Ct.a,alt:"visa img"})),r.a.createElement("label",{htmlFor:"master"},r.a.createElement("input",{type:"radio",id:"master",name:"payment",value:"master",onClick:function(e){return t.selectPayment(e)}}),r.a.createElement("img",{src:bt.a,alt:"mastercard img"})),r.a.createElement("label",{htmlFor:"elo"},r.a.createElement("input",{type:"radio",id:"elo",name:"payment",value:"elo",onClick:function(e){return t.selectPayment(e)}}),r.a.createElement("img",{src:Nt.a,alt:"elo img"})))),r.a.createElement("div",{className:_t.a.purchase},r.a.createElement("button",{disabled:!a.length,type:"button",onClick:this.redirectToPurchase},"Comprar"))))))}}]),a}(n.Component),Ot=a(25),It=a.n(Ot),jt=function(t){Object(s.a)(a,t);var e=Object(l.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:It.a.purchaseContainer},r.a.createElement(M,null),r.a.createElement("div",{className:It.a.purchaseText},r.a.createElement("p",null,"Obrigado pela compra!")))}}]),a}(n.Component),Pt=function(t){Object(s.a)(a,t);var e=Object(l.a)(a);function a(){var t;return Object(i.a)(this,a),(t=e.call(this)).updateCartAndQuantityItems=function(e){K(e),t.quantityProductsCart()},t.quantityProductsCart=function(){var e=$().reduce((function(t,e){return t+=e.quantity}),0);t.setState({quantityProducts:e})},t.state={quantityProducts:0},t}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.quantityProductsCart()}},{key:"render",value:function(){var t=this,e=this.state.quantityProducts;return r.a.createElement(m.a,null,r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/",render:function(a){return r.a.createElement(J,Object.assign({},a,{updateCartAndQuantityItems:t.updateCartAndQuantityItems,quantityProducts:e}))}}),r.a.createElement(p.a,{path:"/cart",render:function(e){return r.a.createElement(it,Object.assign({},e,{quantityProductsCart:t.quantityProductsCart}))}}),r.a.createElement(p.a,{path:"/moreInfo/:id",render:function(a){return r.a.createElement(ht,Object.assign({},a,{updateCartAndQuantityItems:t.updateCartAndQuantityItems,quantityProducts:e}))}}),r.a.createElement(p.a,{path:"/checkout",component:xt}),r.a.createElement(p.a,{path:"/purchase",component:jt})))}}]),a}(r.a.Component);a(59);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Pt,null)),document.getElementById("root"))}],[[45,1,2]]]);
//# sourceMappingURL=main.7d96737e.chunk.js.map