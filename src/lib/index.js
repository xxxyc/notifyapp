import Vue from 'vue';
import Notify from './Notify';

let instance;
const Notifystructor = Vue.extend(Notify);

function initInstance() {
  if (instance) {
    let list = document.getElementsByClassName('vuenotify-body');
    for(let i = 0; i < list.length; i++) {
      document.body.removeChild(list[i]);
    }
  }

  instance = new (Notifystructor)({
    el: document.createElement('div')
  });
}

Notifystructor.prototype.close = function() {
  document.body.removeChild(instance.$el);
};

function Xnotify(options) {
  initInstance();
  instance.title = options.title || '';
  instance.text = options.text || '';
  instance.closeBtnText = options.closeBtnText || '关闭';
  instance.closeBtnColor = options.closeBtnColor || '#00bfff';
  instance.backgroundColor = options.backgroundColor || '#f5f5f5';
  instance.zIndex = options.zIndex || 3000;

  document.body.appendChild(instance.$el);
}

Xnotify.install = () => {
  Vue.use(Notify);
};

Vue.prototype.$xnotify = Xnotify;

export default Xnotify;