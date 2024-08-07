import React, { useState } from "react";
import Button from "../UI/Button/Button";
import styles from "./PregledTest.module.css";
import x from "../../assets/back.png";
import SignatureCanvas from "react-signature-canvas";
// import SignatureCanvas from "react-signature-canvas";
// import toast from "react-hot-toast";
// import Potpis from "../../../potpis/Potpis";

const Potpis = ({
  setTrenutnaStranicaPregled,
  //   setSign,
  //   sign,
}) => {
  const [sign, setSign] = useState();

  const handleOcisti = () => {
    sign.clear();
  };

  return (
    <div>
      <Button
        back
        alt
        buttonBack
        onClick={() => setTrenutnaStranicaPregled(3)}
        text={<img alt="x" src={`${x}`} />}
      />
      <div className={styles.main_div}>
        <h1 className={styles.potpis_magnet}>
          DA BI DOKUMENT BIO POTPUN POTPISITE SE OVDJE
        </h1>

        <div className={styles.mainPotpis}>
          <div>
            <SignatureCanvas
              canvasProps={{
                width: 1000,
                height: 500,
                className: styles.sigCanvas,
              }}
              ref={(data) => setSign(data)}
            />
          </div>
          <div className={styles.buttons_potpis}>
            <Button text={"OCISTI"} back onClick={handleOcisti} />
            <Button
              text={"NASTAVI"}
              next
              onClick={() => {
                setTrenutnaStranicaPregled(5);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Potpis;
