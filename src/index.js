import React from 'react';
import ReactDOM from 'react-dom';
import Router from "@/router"
import {Provider} from "react-redux"
import store from "@/store"
import "@/utils/rem"
ReactDOM.render(
<Provider store={store}>
<Router/>
</Provider>
, document.getElementById('root'));
// new Vue({
// render(h){
//   return h(<App/>)
// }
// }).$mount("#App")