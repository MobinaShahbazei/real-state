import { FiCircle } from "react-icons/fi";
import styles from "@/template/HomePage.module.css";
import CategoryCard from "@/module/CategoryCard";

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
      <div className={styles.categories}>
        <CategoryCard title="خانه ویلایی" name="villa"/>
        <CategoryCard title="اپارتمان" name="apartment"/>
        <CategoryCard title="مغازه" name="store"/>
        <CategoryCard title="دفتر" name="office"/>

      </div>
    </div>
  );
}

export default HomePage;
