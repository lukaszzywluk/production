import React from "react";
import styles from "./Home.scss";

const Home = props => (
  <ReactFragment>
    <h1 className={styles.Home}>Hello {props.name || "World"} (Jenkins)</h1>
    <h2>This is a test!</h2>
  </ReactFragment>
);

export default Home;
