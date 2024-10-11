import { FunctionComponent } from "react";
import Feature from "../components/Feature";
import styles from "./Page.module.css";

const Page: FunctionComponent = () => {
  return (
    <div className={styles.page}>
      <Feature />
    </div>
  );
};

export default Page;
