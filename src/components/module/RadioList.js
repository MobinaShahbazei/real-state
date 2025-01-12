import styles from "@/module/RadioList.module.css";

function RadioList({ profileData, setProfileData }) {
  const { category } = profileData;
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProfileData({...profileData, [name]: value})
  };
  return (
    <div className={styles.container}>
      <p>دسته بندی</p>
      <div className={styles.main}>
        <div>
          <label htmlFor="villa">ویلا</label>
          <input
            type="radio"
            name="category"
            value="villa"
            checked={category === "villa"}
            id="villa"
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="apartment">اپارتمان</label>
          <input
            type="radio"
            name="category"
            value="apartment"
            checked={category === "apartment"}
            id="apartment"
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="store">مغازه</label>
          <input
            type="radio"
            name="category"
            value="store"
            checked={category === "store"}
            id="store"
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="office">دفتر</label>
          <input
            type="radio"
            name="category"
            value="office"
            checked={category === "office"}
            id="office"
            onChange={changeHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default RadioList;
