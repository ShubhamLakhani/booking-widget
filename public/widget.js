(function () {
    const scriptTag = document.currentScript;
    const clientId = scriptTag.getAttribute('data-client-id');
  
    if (!clientId) {
      console.warn('[Widget] Missing data-client-id');
      return;
    }
  
    const iframe = document.createElement('iframe');
    iframe.src = `https://booking-widget-weld.vercel.app/?clientId=${clientId}`;
    iframe.style = `
      position: fixed;
      bottom: 24px;
      right: 24px;
      width: 420px;
      height: 620px;
      border: none;
      border-radius: 16px;
      z-index: 9999;
      box-shadow: 0 8px 24px rgba(0,0,0,0.2);
    `;
    document.body.appendChild(iframe);
  })();
  