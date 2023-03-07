import styles from "./style.module.scss";

const App = () => {
  return (
    <>
      <h1>Application component</h1>
      <button className={styles.Button}>Press me</button>
    </>
  );
};

export default App;
