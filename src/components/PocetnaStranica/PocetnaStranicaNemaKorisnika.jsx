import React, { useRef, useState, useEffect } from "react";
import styles from "./PocetnaStranica.module.css";
import Button from "../UI/Button/Button";
import back from "../../assets/back.png";
import logo from "../../assets/ukcrs-removebg-preview.png";
import HotToast from "../HotToast/HotToast";
// import Keyboard from "react-simple-keyboard";
import toast from "react-hot-toast";
import Keyboard from "react-simple-keyboard";

const PocetnaStranicaNemaKorisnika = ({
  setTrenutnaStranica,
  setUser,
  user,
  fetchDataPacijentIzis,
  setKorisnik,
  setPol,
}) => {
  const [hasFetched, setHasFetched] = useState(false);

  const [layout, setLayout] = useState("default");
  // const [input, setInput] = useState("");
  const keyboard = useRef();

  const brojeviLayout = {
    default: ["1 2 3", "4 5 6", "7 8 9", "{bksp} 0 {enter}"],
  };

  const onChange = (input) => {
    setUser(input);
  };

  const onKeyPress = (button) => {
    if (button === "{shift}" || button === "{lock}") handleShift();
    if (button === "{enter}") potvrdiUnos();
  };

  const onChangeInput = (event) => {
    const input = event.target.value;
    setUser(input.trim());
    // setHasFetched(false);
    keyboard.current["setInput"](input);
  };

  const potvrdiUnos = () => {
    // fetchDataPacijentIzis(user);
    setKorisnik({
      ime: "Milan",
      prezime: "Jagodic",
      pol: "M",
      dat_rod: "20.02.2002",
      jmbg: 2002002100045,
    });

    setPol("M");
  };

  const handleShift = () => {
    const newLayoutName = layout === "default" ? "shift" : "default";
    setLayout(newLayoutName);
  };

  // useEffect(() => {
  //   let timeout;
  //   if (user && !hasFetched) {
  //     timeout = setTimeout(() => {
  //       fetchDataPacijentIzis(user);
  //       setHasFetched(true);
  //     }, 2000);
  //   }

  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, [user, hasFetched, fetchDataPacijentIzis]);

  return (
    <>
      <HotToast />
      <div className={styles.nazadDiv}>
        <Button
          back
          alt
          onClick={() => setTrenutnaStranica(0)}
          text={<img src={`${back}`} alt="back" />}
        />
      </div>

      <div className={styles.bodyDiv}>
        <div className={styles.divLogo}>
          <img className={styles.logo} src={`${logo}`} alt="logo UKC" />
        </div>
        <div className={styles.divTekst}>
          <h1 className={styles.divApp_h1}>
            Skenirajte zdravstvenu karticu...
          </h1>
        </div>
      </div>

      <input
        id="myInput"
        className={styles.inputUcitajKarticu}
        autoFocus
        autoComplete="off"
        value={user}
        onChange={onChangeInput}
      />
      <div className={styles.divKartica}>
        <Keyboard
          // className={styles.simple_keyboard}
          baseClass={styles.simple_keyboard}
          keyboardRef={(r) => (keyboard.current = r)}
          layoutName={layout}
          display={{
            "{bksp}": "Obrisi",
            "{enter}": "Potvrdi",
          }}
          onChange={onChange}
          onKeyPress={onKeyPress}
          layout={brojeviLayout}
        />
      </div>
    </>
  );
};

export default PocetnaStranicaNemaKorisnika;
