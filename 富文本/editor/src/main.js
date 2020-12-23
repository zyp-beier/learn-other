import Vue from 'vue'
import App from './App.vue'
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/js/plugins.pkgd.min'
import 'froala-editor/js/languages/zh_cn'
import VueFroala from 'vue-froala-wysiwyg'

Vue.use(VueFroala)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app');
