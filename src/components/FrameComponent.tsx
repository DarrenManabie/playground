import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
  trophy1?: string;
  highQuality?: string;
  craftedFromTopMaterials?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  trophy1,
  highQuality,
  craftedFromTopMaterials,
}) => {
  return (
    <div className={[styles.trophy1Parent, className].join(" ")}>
      <img className={styles.trophy1Icon} loading="lazy" alt="" src={trophy1} />
      <div className={styles.text}>
        <div className={styles.highQuality}>{highQuality}</div>
        <div className={styles.craftedFromTop}>{craftedFromTopMaterials}</div>
      </div>
    </div>
  );
};

export default FrameComponent;
