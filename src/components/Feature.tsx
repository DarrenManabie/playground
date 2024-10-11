import { FunctionComponent } from "react";
import FrameComponent from "./FrameComponent";
import styles from "./Feature.module.css";

export type FeatureType = {
  className?: string;
};

const Feature: FunctionComponent<FeatureType> = ({ className = "" }) => {
  return (
    <div className={[styles.feature, className].join(" ")}>
      <FrameComponent
        trophy1="/trophy-1.svg"
        highQuality="High Quality"
        craftedFromTopMaterials="crafted from top materials"
      />
      <div className={styles.guarantee}>
        <img
          className={styles.guaranteeIcon}
          loading="lazy"
          alt=""
          src="/guarantee.svg"
        />
        <div className={styles.guaranteeChild} />
        <div className={styles.text}>
          <div className={styles.warrantyProtection}>Warranty Protection</div>
          <div className={styles.over2Years}>Over 2 years</div>
        </div>
      </div>
      <FrameComponent
        trophy1="/shipping.svg"
        highQuality="Free Shipping"
        craftedFromTopMaterials="Order over 150 $"
      />
      <FrameComponent
        trophy1="/customersupport.svg"
        highQuality="24 / 7 Support"
        craftedFromTopMaterials="Dedicated support"
      />
    </div>
  );
};

export default Feature;
