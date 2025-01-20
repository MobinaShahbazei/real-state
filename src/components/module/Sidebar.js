import styles from "@/module/Sidebar.module.css";
import Link from "next/link";
import { HiFilter } from "react-icons/hi";

function Sidebar() {
  const queries = [{ villa: "ویلا" }, {apartment: "اپارتمان"}, {office: "مغازه"}, {store: "دفتر"}];
  return (
    <div className={styles.container}>
      <p>
       <HiFilter />
        دسته بندی
      </p>
      <Link href="/buy-residential">همه</Link>
      {queries.map((query) => (
        <Link href={{ pathname: "/buy-residential" ,
            query: {category: Object.keys(query)},
        }}>
            {Object.values(query)}
        </Link>
      ))}
    
    </div>
  );
}

export default Sidebar;
