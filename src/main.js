// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

/* eslint-disable */
// eslint-disable-next-line 

import Vue from 'vue'
import App from './App'
import jquery from 'jquery'
require('bootstrap')
require('jquery.easing')


require('bootstrap/dist/css/bootstrap.css')
require('devicons/css/devicons.css')
require('font-awesome/css/font-awesome.css')

Vue.prototype.jquery = jquery

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
  
})
