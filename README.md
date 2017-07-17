# Jinkela-ClickTip

## Install

```bash
npm install jinkela-clicktip
```

## Usage

### ClickTip.show(mouseEvent, options)

* `mouseEvent` **MouseEvent**.
* `options` **Object**:
  * `text` **String** The text of tip.

## Demo [Live](https://jinkelajs.github.io/jinkela-clicktip/example.html)

```html
<meta charset="utf-8" />
<script src="https://unpkg.com/jinkela@1.2.19/umd.js"></script>
<script src="https://unpkg.com/jinkela-clicktip@1.0.0/index.js"></script>
<script>
addEventListener('click', event => {

  ClickTip.show(event, { text: `(${event.x},${event.y})` });

});
</script>
```
