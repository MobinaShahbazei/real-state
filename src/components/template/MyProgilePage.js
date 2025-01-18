import DashboardCard from "@/module/DashboardCard";
import styles from "@/template/MyProgilePage.module.css";

function MyProgilePage({ profiles }) {
  return (
    <div>
      {profiles.length ? null : (
        <p className={styles.text}>هیچ اگهی ثبت نشده</p>
      )}
      {profiles.map((i)=> <DashboardCard key={i._id} data={JSON.parse(JSON.stringify(i))}/>)}
    </div>
  );
}

export default MyProgilePage;
