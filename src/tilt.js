// tilt.js
import { Directive, DirectiveHook, h } from 'vue';
import VanillaTilt from 'vanilla-tilt';

const tiltDirective = new Directive('tilt', {
  // 绑定时调用
  mounted(el, binding, vnode) {
    const { value } = binding;
    const tiltElement = el;
    VanillaTilt.init(tiltElement, value);
  },
  // 更新时调用
  updated(el, binding, vnode, oldVnode) {
    const { value } = binding;
    const tiltElement = el;
    if (vnode.props.value !== oldVnode.props.value) {
      VanillaTilt.destroy(tiltElement);
      VanillaTilt.init(tiltElement, value);
    }
  },
  // 解绑时调用
  unmounted(el) {
    VanillaTilt.destroy(el);
  }
});

export default tiltDirective;