import { Fragment, default as React } from "react";
import styles from "./Home.scss";

const Home = props => (
  <Fragment>
    <h1 className={styles.Home}>Hello {props.name || "World"} (Jenkins)</h1>
    <h2>This is a test!</h2>
  </Fragment>
);

export default Home;
