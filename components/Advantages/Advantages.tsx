import React from "react";
import CheckIcon from "./check.svg";
import styles from "./Advantages.module.css";
import { AdvantagesProps } from "./Advantages.props";

const Advantages = ({ advantages }: AdvantagesProps) => {
  return (
    <>
      {advantages.map((a) => (
        <div key={a._id} className={styles.advantage}>
          <CheckIcon />
          <div className={styles.title}>{a.title}</div>
          <div className={styles.vline}></div>
          <div>{a.description}</div>
        </div>
      ))}
    </>
  );
};

export default Advantages;
