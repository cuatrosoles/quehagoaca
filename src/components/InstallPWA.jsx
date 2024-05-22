import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import logoAndroidIos from '../img/iphone-android-logo.png';


const InstallPWA = () => {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);

  useEffect(() => {
    const handler = e => {
      e.preventDefault();
      console.log("we are being triggered :D");
      setSupportsPWA(true);
      setPromptInstall(e);
    };
    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("transitionend", handler);
  }, []);

  const onClick = evt => {
    evt.preventDefault();
    if (!promptInstall) {
      return;
    }
    promptInstall.prompt();
  };
  if (!supportsPWA) {
    return null;
  }
  return (

    <>
    <Button
        variant="text"
        size="small"
        className="link-button"
        id="setup_button"
        aria-label="Install app"
        title="Instalar App"
        onClick={onClick}
        style={{display: "flex", flexDirection: "column"}}>
            <img
                src={logoAndroidIos}
                width="100"
                alt="folder"/>
            <label>Instalar App</label>
    </Button>
    </>

  );
};

export default InstallPWA;