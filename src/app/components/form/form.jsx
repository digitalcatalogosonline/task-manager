import styles from "./form.module.css";

export function Form() {
  // const submit = async ()=> {
  //   const req = await fetch()
  // }
  return (
    <div className={styles.container}>
      
      <form action="/api/addTask" method="POST" className={styles.form} id="form">
      <h2>TO-DO</h2>
        <input type="text" name="name" />
        <textarea name="content"></textarea>
        <button className={styles.button} type="submit" form="form">ADD</button>
      </form>
    </div>
  );
}
