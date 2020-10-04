# Sticky Foot

Push the footer to the bottom of the page when there is not enough content on the page. This uses css flexbox. However, when the flexbox does not work in IE it will use javascript to get the job done.

Import stickyfoot.css into your project. Then add the following css classes to the appropriate elements:

* stickyfoot-wrap
* stickyfoot-content
* stickyfoot-footer

```
<div id="root" class="container stickyfoot-wrap">

  <div className="banner">
    <h1>My Banner</h1>
    <div className="dept">An internet site</div>
  </div>

  <div className="content stickyfoot-content">
    <p>Hello World!</p>
  </div>

  <div className="footer stickyfoot-footer">
    <div className="footer-content">
      <p>
        Internet Site<br />
        555 Anonymouse Drive<br />
        Arctic, Circle 01010
      </p>
    </div>
  </div>
</div>
```

To use javascript, import the module then call stickyfoot. The listento_selector is the html element that bumps up against the footer element.

```
import stickyfoot from 'sticky-foot';
import 'sticky-foot/stickyfoot.css';

stickyfoot({
  listento_selector : '#root > .content',
  footer_selector : '#root > .footer'
});
```