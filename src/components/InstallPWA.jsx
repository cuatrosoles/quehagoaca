import React, {useEffect, useState} from 'react';
import imgbutton from "../img/install-android-ios.png";

const InstallPWA = () => {
  const [supportsPWA, setSupportsPWA] = useState (false);
  const [promptInstall, setPromptInstall] = useState (null);

  useEffect (() => {
    const handler = e => {
      e.preventDefault ();
      console.log ('we are being triggered :D');
      setSupportsPWA (true);
      setPromptInstall (e);
    };
    window.addEventListener ('beforeinstallprompt', handler);

    return () => window.removeEventListener ('transitionend', handler);
  }, []);

  const onClick = evt => {
    evt.preventDefault ();
    if (!promptInstall) {
      return;
    }
    promptInstall.prompt ();
  };
  if (!supportsPWA) {
    return null;
  }
  return (
    <button
      className="link-button"
      id="setup_button"
      aria-label="Install app"
      title="Instalar App"
      onClick={onClick}
    >
      <img src={imgbutton} width="160" alt="Instalar la Aplicacion"/>
      <label>Instalar App</label>
    </button>
  );
};

export default InstallPWA;
