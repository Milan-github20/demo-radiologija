import styles from "./PregledTest.module.css";
import x from "../../assets/back.png";
import Slider from "./Slider";
import Potpis from "./Potpis";
import Button from "../UI/Button/Button";
import SliderTest from "./Slider";

const PregledTest = ({
  trenutnaStranicaPregled,
  setTrenutnaStranicaPregled,
  setKorak,
  korisnik,
  odjava,
}) => {
  return trenutnaStranicaPregled === 0 ? (
    <div>
      <Button
        text={<img alt="x" src={`${x}`} />}
        back
        alt
        buttonBack
        onClick={() => setKorak(0)}
      />

      <div className={styles.main_div}>
        <h1 className={styles.h1_pitanje}>Da li ste već imali MR pregled?</h1>

        <div className={styles.buttons}>
          <Button
            text={"NE"}
            back
            onClick={() => setTrenutnaStranicaPregled(1)}
          />
          <Button
            text={"DA"}
            next
            onClick={() => setTrenutnaStranicaPregled(1)}
          />
        </div>
      </div>
    </div>
  ) : trenutnaStranicaPregled === 1 ? (
    <div>
      <Button
        text={<img alt="x" src={`${x}`} />}
        back
        alt
        buttonBack
        onClick={() => {
          setTrenutnaStranicaPregled(0);
        }}
      />

      <div className={styles.main_div}>
        <h1 className={styles.h1_pitanje}>
          Jeste li već imali neki radiološki pregled koji je zahtijevao upotrebu
          kontrastnih sredstava?
        </h1>

        <div className={styles.buttons}>
          <Button
            text={"NE"}
            back
            onClick={() => setTrenutnaStranicaPregled(2)}
          />
          <Button
            text={"DA"}
            next
            onClick={() => setTrenutnaStranicaPregled(2)}
          />
        </div>
      </div>
    </div>
  ) : trenutnaStranicaPregled === 2 ? (
    <div>
      <Button
        text={<img alt="x" src={`${x}`} />}
        back
        alt
        buttonBack
        onClick={() => {
          setTrenutnaStranicaPregled(1);
        }}
      />

      <div className={styles.main_div}>
        <h1 className={styles.h1_pitanje}>
          Da li imate svjež nalaz serumskog kreatinina?
        </h1>

        <div className={styles.buttons}>
          <Button
            text={"NE"}
            back
            onClick={() => setTrenutnaStranicaPregled(4)}
          />
          <Button
            text={"DA"}
            next
            onClick={() => setTrenutnaStranicaPregled(3)}
          />
        </div>
      </div>
    </div>
  ) : trenutnaStranicaPregled === 3 ? (
    <SliderTest
      setTrenutnaStranicaPregled={setTrenutnaStranicaPregled}
      korisnik={korisnik}
    />
  ) : trenutnaStranicaPregled === 4 ? (
    <Potpis setTrenutnaStranicaPregled={setTrenutnaStranicaPregled} />
  ) : trenutnaStranicaPregled === 5 ? (
    <div>
      <Button
        text={<img alt="x" src={`${x}`} />}
        back
        alt
        buttonBack
        onClick={() => {
          setTrenutnaStranicaPregled(4);
        }}
      />

      <div className={styles.main_div}>
        <h1 className={styles.h1}>
          USPJEŠNO STE PRIJAVLJENI NA PREGLED, SAČEKAJTE DA VAS PROZOVEMO
        </h1>
        {/* <h3 className={styles.h3}>
          Da li želite više informacija o pregledu koji ćete danas raditi?
        </h3> */}

        <div className={styles.buttons}>
          <Button text={"ODJAVA"} back onClick={odjava} />
          <Button text={"ODJAVA"} disabled next />
        </div>
      </div>
    </div>
  ) : null;
};

export default PregledTest;
