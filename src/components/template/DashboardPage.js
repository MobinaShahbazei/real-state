import styles from "@/template/DashboardPage.mdule.css"

function DashboardPage() {
  return (
    <div className={styles.cotainer}>
        <h3>سلام 👋</h3>
        <p>اگهی های خود را ثبت کنید تا هزاران نفر ان را مشاهده کنند</p>
        <div className={styles.createdAt}>
            <p>ناریخ عضویت:</p>
            <span>123123</span>

        </div>

    </div>
  )
}

export default DashboardPage