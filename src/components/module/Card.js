import styles from "@/module/Card.module.css";
import { RiHome3Line } from "react-icons/ri";
import { BiLeftArrowAlt } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiStore } from "react-icons/bi";
import { MdApartment } from "react-icons/md";
import { GiOfficeChair } from "react-icons/gi";
import { sp } from "@/utils/replaceNumber";
import Link from "next/link";

function Card({ data: { title, location, price, category } }) {
  const icons = {
    villa: <RiHome3Line />,
    apartment: <MdApartment />,
    store: <BiStore />,
    office: <GiOfficeChair />,
  };
  return (
    <div className={styles.container}>
      <div className={styles.icon}>{icons[category]}</div>
      <p className={styles.title}>{title}</p>
      <p className={styles.location}>
        {location}
        <HiOutlineLocationMarker />
      </p>
      <span>{sp(price)} تومان</span>
      <Link href="/">مشاهده اگهی 
      <BiLeftArrowAlt/>
      </Link>
    </div>
  );
}

export default Card;
