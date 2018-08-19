/**/ void function(factory) {
/**/   switch (true) {
/**/   case typeof module === 'object' && module && 'exports' in module: // CommonJS
/**/     module.exports = factory();
/**/     if (module.exports === void 0) module.exports = {};
/**/     break;
/**/   case typeof define === 'function' && !!define.amd: // AMD
/**/     define(factory);
/**/     break;
/**/   default: // Global
/**/     var global = new Function('return this')();
/**/     var name = 'ClickTip';
/**/     /**/ try { /* Fuck IE8- */
/**/     /**/   if (typeof execScript === 'object') execScript('var ' + name);
/**/     /**/ } catch(error) {}
/**/     global[name] = factory();
/**/   }
/**/ }(function() {

class ClickTip extends Jinkela { // eslint-disable-line no-unused-vars
  static show(event, options = {}) {
    let { clientX, clientY } = event;
    return new this(options, { clientX, clientY }).to(document.body);
  }
  init() {
    this.element.textContent = this.text || 'HIT';
    this.element.style.top = this.clientY + 'px';
    this.element.style.left = this.clientX + 'px';
    this.animation = this.element.animate([
      { opacity: 1, marginTop: 0 },
      { opacity: 0, marginTop: '-2em' }
    ], {
      fill: 'forwards',
      duration: 800
    });
    this.animation.addEventListener('finish', () => this.element.remove());
  }
  get styleSheet() {
    return `
      :scope {
        position: absolute;
        border-radius: 5px;
        background: rgba(0,0,0,.8);
        color: #fff;
        font-size: 12px;
        line-height: 1.5;
        transform: translateY(-100%);
        padding: 0px .5em;
      }
    `;
  }
}


return ClickTip;

/**/ });

