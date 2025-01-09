import styles from "@/template/DashboardPage.mdule.css"

function DashboardPage({createdAt}) {
  return (
    <div className={styles.cotainer}>
        <h3>سلام 👋</h3>
        <p>اگهی های خود را ثبت کنید تا هزاران نفر ان را مشاهده کنند</p>
        <div className={styles.createdAt}>
            <p>ناریخ عضویت:</p>
            <span>{new Date(createdAt).toLocaleDateString("fa-IR")}</span>

        </div>

    </div>
  )
}

export default DashboardPage