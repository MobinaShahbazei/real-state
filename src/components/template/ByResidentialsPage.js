import Card from "@/module/Card";
import styles from "@/template/ByResidentialsPage.module.css";

function ByResidentialsPage({ data }) {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}></div>
      <div className={styles.main}>
        {data.length ? null : <p className={styles.text}>هیچ اگهی ثبت نشده است</p>}
        {data.map((profile) => (<Card key={profile._id} data={profile}/>))}
      </div>
    </div>
  );
}

export default ByResidentialsPage;
