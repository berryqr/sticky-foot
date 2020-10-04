import elementResizeEvent from 'element-resize-event';

/**
 * Import stickyfoot.css into your project. Then add the following css classes
 * to the appropriate elements:
 * 
 *     stickyfoot-wrap
 *     stickyfoot-content
 *     stickyfoot-footer 
 */

const stickyfoot = ({listento_selector, footer_selector}) => {  
  const ua = window.navigator.userAgent;
  const isIE = /MSIE|Trident/.test(ua); 

  // Only IE needs javascript help. If not IE, then simply use css Flexbox.
  if(!isIE) {
    return;
  }

  window.onload = (event) => {
    const listento = document.querySelector(listento_selector);
    const footer = document.querySelector(footer_selector);

    // Initial position.
    positionFooter(footer);

    // Adjust position according to this listento element resize.
    elementResizeEvent(listento, function() {
        positionFooter(footer);
    });
  };
}

const positionFooter = (footer) => {
  const foot_rect = footer.getBoundingClientRect(); 

  if(foot_rect.bottom == window.innerHeight) {
    // Do nothing because footer is already at the bottom.
  }
  else if(foot_rect.bottom < window.innerHeight) {
    // The footer bottom isn't touching the viewport bottom yet. So push it down.
    footer.style.cssText = "position: absolute; bottom: 0;";
  }
  else {
    // We can be static because the footer bottom is past the viewport height.
    footer.style.cssText = "position: static;";
  }
}

export default stickyfoot;