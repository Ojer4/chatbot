import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    (function (d, t) {
      var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
      v.onload = function () {
        window.voiceflow.chat.load({
          verify: { projectID: '68733b6e380ab07f195c1ece' },
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'production',
          autostart: true,
          voice: {
            url: "https://runtime-api.voiceflow.com"
          },
          render: {
            mode: 'embedded',
            target: document.getElementById('chatbot-container')
          },
          assistant: {
            stylesheet: '/voiceflow-custom.css',
          },
        });
      }
      v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
      v.type = "text/javascript";
      s.parentNode.insertBefore(v, s);
    })(document, 'script');

    // Remove scrollbars from body and html
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    document.body.style.margin = '0';
    document.body.style.padding = '0';
  }, []);

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        position: 'fixed',
        top: 0,
        left: 0,
        margin: 0,
        padding: '50px',
        boxSizing: 'border-box',
      }}
    >
      <div
        id="chatbot-container"
        style={{
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          position: 'relative',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        }}
      />
    </div>
  );
}

export default App;
