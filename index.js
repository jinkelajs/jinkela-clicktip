class ClickTip extends Jinkela {
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
