import styles from "./HeroSection.module.css";
import { Button } from "../../ui/Button/Button";
import { useTranslation } from "react-i18next";
//Trans is used to bold certain words in the translated text with <strong> in the json file.
import { Trans } from "react-i18next";

export const HeroSection = () => {
  const { t, i18n } = useTranslation();

  //this is how you add the bold
  //<span className={styles.h1Bold}> Stretch</span>

  return (
    <>
      <Trans>
        <div className={styles.heroContainer}>
          <div className={styles.heroBox}>
            <h1>{t("homePage.hero.h1")}</h1>
            <p>{t("homePage.hero.p")}</p>
            <div className={styles.buttonsMobile}>
              <button className={styles.heroButtonBlack}>
                {t("homePage.hero.buttonJoin")}
              </button>
              <button className={styles.heroButtonWhite}>
                {t("homePage.hero.buttonRead")}
              </button>
            </div>
            <div className={styles.buttonsDesktop}>
              <button className={styles.heroButtonBlack}>
                {t("homePage.hero.buttonJoin")}
              </button>
              <button className={styles.heroButtonWhite}>
                {t("homePage.hero.buttonRead")}
              </button>
            </div>
          </div>
          <div className={styles.heroBox}>
            <img className={styles.imgDesktop} src="/assets/hero-img.png" />
            <img className={styles.imgMobile} src="/assets/hero-mobile.png" />
          </div>
        </div>
      </Trans>
    </>
  );
};
