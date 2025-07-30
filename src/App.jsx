import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://cdn.voiceflow.com/widget-next/bundle.mjs';
    script.onload = function () {
      if (window.voiceflow && window.voiceflow.chat) {
        window.voiceflow.chat.load({
          verify: { projectID: '68733b6e380ab07f195c1ece' },
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'production',
          voice: {
            url: 'https://runtime-api.voiceflow.com',
          },
          render: {
            mode: 'embedded',
            target: document.getElementById('chatbot-container'),
          },
        });
      }
    };
    document.body.appendChild(script);
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        margin: 0,
        padding: 0,
        background: '#222', // optional: match your screenshot background
      }}
    >
      <div id="chatbot-container" style={{ width: '100%', height: '100%' }} />
    </div>
  );
}

export default App;
