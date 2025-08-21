import React from "react";
import styles from "./InfoAltPanel.module.css";
import { BiMoneyWithdraw, BiMailSend, BiDonateHeart } from "react-icons/bi";

export default function InfoAltPanel({ descripText, colorCode, iconOption }) {
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
      </div>
    </div>
  );
}
