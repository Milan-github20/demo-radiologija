import { useEffect, useState } from "react";
import PocetnaStranicaNemaKorisnika from "./PocetnaStranicaNemaKorisnika";
import styles from "./PocetnaStranica.module.css";
import Button from "../UI/Button/Button";
import PregledTest from "../Pregledi/PregledTest";
import Header from "../UI/Header/Header";
import HotToast from "../HotToast/HotToast";
import toast from "react-hot-toast";
import "react-simple-keyboard/build/css/index.css";

const PocetnaStranica = ({
  setUser,
  user,
  korisnik,
  fetchDataPacijentIzis,
  setTrenutnaStranica,
  setKorisnik,
  trenutnaStranicaPregled,
  setTrenutnaStranicaPregled,
  setPol,
}) => {
  const [korak, setKorak] = useState(0);

  const imeKorisnika = korisnik
    ? `${korisnik["ime"]} ${korisnik["prezime"]}`
    : null;

  const odjava = () => {
    setTrenutnaStranica(0);
    setTrenutnaStranicaPregled(0);
    setKorisnik(null);
    setUser("");
    setTimeout(() => {
      toast.success("Uspjesno ste se odjavili!", {
        duration: 3000,
      });
    }, 100);
  };

  return (
    <>
      <div className={styles.mainDiv}>
        {!korisnik ? (
          <PocetnaStranicaNemaKorisnika
            setUser={setUser}
            setTrenutnaStranica={setTrenutnaStranica}
            user={user}
            fetchDataPacijentIzis={fetchDataPacijentIzis}
            setKorisnik={setKorisnik}
            setPol={setPol}
          />
        ) : korak === 0 ? (
          <>
            <h1 className={styles.h1Zavod}>
              Dobro došli na Zavod za kliničku radiologiju UKC RS
            </h1>

            <h2
              className={`${styles.podaciOKorisniku} ${
                imeKorisnika.length > 25 ? styles.podaciOKorisniku__alt : ""
              }`}
            >
              {imeKorisnika}
            </h2>
            <div className={styles.dat_rodAdresa}>
              <p>
                {korisnik && korisnik["dat_rod"] ? korisnik["dat_rod"] : ""}
              </p>
              <h3>Danas ste zakazani za MR pregled?</h3>
            </div>
            <div className={styles.buttons}>
              <Button back onClick={odjava} text={"NE"} />

              <Button
                next
                // disabled={!selectedOption}
                onClick={() => {
                  setKorak(1);
                }}
                text={"DA"}
              />
            </div>
          </>
        ) : korak === 1 ? (
          <>
            <Header odjava={odjava} />
            <PregledTest
              setTrenutnaStranicaPregled={setTrenutnaStranicaPregled}
              trenutnaStranicaPregled={trenutnaStranicaPregled}
              setKorak={setKorak}
              korisnik={korisnik}
              odjava={odjava}
            />
          </>
        ) : null}
      </div>
    </>
  );
};

export default PocetnaStranica;
