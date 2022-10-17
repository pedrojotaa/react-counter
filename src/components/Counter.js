import styles from "./Counter.module.css";

import { useState } from "react";

function Counter() {
  const [value, setValue] = useState(0);

  const reset = () => {
    setValue(0);
  };

  return (
    <>
      <section className={styles.container}>
        <h2>Regular Counter</h2>
        <h1>{value}</h1>
        <div>
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
      </section>
    </>
  );
}

export default Counter;
