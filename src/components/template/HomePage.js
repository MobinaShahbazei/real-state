import { FiCircle } from "react-icons/fi";
import styles from "@/template/HomePage.module.css";

function HomePage() {
  const servies = ["خرید", "فروش", "رهن", "اجار"];
  const cities = [
    "تهران",
    "سنندج",
    "کرمانشاه",
    "اهواز",
    "مشهد",
    "اصفحان",
    "شیراز",
    "خرم اباد",
  ];

  return (
    <div>
      <div className={styles.banner}>
        <div className={styles.desc}>
          <h1>سامانه خرید و اجاره ملک</h1>
          <ul>
            {servies.map((i) => (
              <li key={i}>
                <FiCircle />
                <span>{i}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
