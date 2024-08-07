import { useCallback, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/UI/Button/Button";
import logo from "./assets/ukcrs-removebg-preview.png";
import PocetnaStranica from "./components/PocetnaStranica/PocetnaStranica";
import HotToast from "./components/HotToast/HotToast";

function App() {
  // const [count, setCount] = useState(0);
  const [trenutnaStranica, setTrenutnaStranica] = useState(0);
  const [user, setUser] = useState("");
  const [korisnik, setKorisnik] = useState(null);
  const [pol, setPol] = useState(null);
  const [trenutnaStranicaPregled, setTrenutnaStranicaPregled] = useState(0);

  // const povuciPodatkeIzis = useCallback(async (url, metod, data = null) => {
  //   const response = await fetch(
  //     `http://10.8.0.14:8080/kis/rpc/radiologija_lokal.cfc?method=${url}&__BDRETURNFORMAT=json`,
  //     {
  //       method: metod,
  //       headers: {
  //         "Content-Type": "application/x-www-form-urlencoded",
  //       },
  //       body: data,
  //       mode: "no-cors",
  //     }
  //   );

  //   return { ok: response.ok, data: await response.json() };
  // }, []);

  // const fetchDataPacijentIzis = async (user) => {
  //   const response = await povuciPodatkeIzis(`OsiguranikUID&id=${user}`, "GET");

  //   if (response.ok) {
  //     if (response.data["parsiran_odgovor"]) {
  //       // setKorisnik(response.data["parsiran_odgovor"].items[0]);
  //       // setPol(response.data["parsiran_odgovor"].items[0].pol);
  //       setKorisnik({
  //         ime: "Milan",
  //         prezime: "Jagodic",
  //         pol: "M",
  //         dat_rod: "20.02.2002",
  //         jmbg: 2002002100045,
  //       });

  //       setPol("M");
  //     } else {
  //       toast.error("Ne postoji karton pacijenta!");
  //     }
  //   }
  // };

  switch (trenutnaStranica) {
    case 0:
      return (
        <>
          <HotToast />
          {/* <div className="verzija">3.1.2</div> */}
          <div className="divApp">
            <div className="bodyDiv">
              <div className="divLogo">
                <img className="logo" src={`${logo}`} alt="logo UKC" />
              </div>
              <div className="divTekst">
                <h1 className="divApp_h1">
                  Danas ste zakazani za radiološki pregled?
                </h1>
              </div>
            </div>
            <div className="buttons">
              <Button
                next
                onClick={() => {
                  setTrenutnaStranica(1);
                }}
                text={"PRIJAVITE SE OVDJE"}
              />
            </div>
          </div>
        </>
      );
    case 1:
      return (
        <div className="App">
          {
            <PocetnaStranica
              setUser={setUser}
              setKorisnik={setKorisnik}
              user={user}
              korisnik={korisnik}
              // fetchDataPacijentIzis={fetchDataPacijentIzis}
              setTrenutnaStranica={setTrenutnaStranica}
              setTrenutnaStranicaPregled={setTrenutnaStranicaPregled}
              trenutnaStranicaPregled={trenutnaStranicaPregled}
              setPol={setPol}
            />
          }
        </div>
      );

    default:
      return null;
  }
}

export default App;
