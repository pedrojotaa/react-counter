import styles from "./Counter.module.css";

import { useState } from "react";

function Counter() {
  const [value, setValue] = useState(0);

  const reset = () => {
    setValue(0);
  };

  const complexIncrease = () => {
    setTimeout(()=>{
      setValue((prevState)=>{
        return prevState + 1
      })
    }, 2000)
  }

  return (
    <>
      <section className={styles.container}>
        <h2>Regular Counter</h2>
        <h1>{value}</h1>
        <div className={styles.container_btn}>
          <button className={styles.btn} onClick={() => setValue(value - 1)}>
            decrease
          </button>
          <button className={styles.btn} onClick={reset}>
            reset
          </button>
          <button className={styles.btn} onClick={() => setValue(value + 1)}>
            increase
          </button>
        </div>
        <h2>More Complex Counter</h2>
        <h1>{value}</h1>
        <div className={styles.container_btn}>
          <button className={styles.btn} onClick={complexIncrease}>
            decrease
          </button>
        </div>
      </section>
    </>
  );
}

export default Counter;
