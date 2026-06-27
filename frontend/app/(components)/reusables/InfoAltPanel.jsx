import React from "react";
import styles from "./InfoAltPanel.module.css";
import { BiMoneyWithdraw, BiMailSend, BiDonateHeart } from "react-icons/bi";
import ButtonAnyColorFilled from "./buttons/ButtonAnyColorFilled";

export default function InfoAltPanel({
  descripText,
  addressText,
  closingText,
  buttonText,
  buttonPath,
  buttonColor = "#EC2024",
  colorCode,
  iconOption,
}) {
  return (
    <div className={styles.container}>
      {iconOption == 1 && (
        <BiMoneyWithdraw className={styles.icon}></BiMoneyWithdraw>
      )}
      {iconOption == 2 && <BiMailSend className={styles.icon}></BiMailSend>}
      {iconOption == 3 && (
        <BiDonateHeart className={styles.icon}></BiDonateHeart>
      )}

      <div className={styles.panel} style={{ borderColor: colorCode }}>
        <p className={styles.description}>{descripText}</p>
        {addressText && <p className={styles.address}>{addressText}</p>}
        {closingText && <p className={styles.description}>{closingText}</p>}
        {buttonText && buttonPath && (
          <div className={styles.buttonWrapper}>
            <ButtonAnyColorFilled
              buttonColor={buttonColor}
              openInNewTab
              path={buttonPath}
            >
              {buttonText}
            </ButtonAnyColorFilled>
          </div>
        )}
      </div>
    </div>
  );
}
