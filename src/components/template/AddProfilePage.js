"use client";
import TextInput from "@/module/TextInput";
import styles from "@/template/AddProfilePage.module.css";
import { useState } from "react";

function AddProfilePage() {
  const [profileData, setProfileData] = useState({
    title: "",
    description: "",
    location: "",
    phone: "",
    price: "",
    realState: "",
    constructionDate: new Date(),
    category: "",
    rules: [],
    amenities: [],
  });
  const submitHandler = () => {
    console.log(profileData)
  }
  return (
    <div className={styles.container}>
      <h3>ثبت اگهی</h3>
      <TextInput
        title="عنوان اگهی"
        name="title"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="توضیحات"
        name="description"
        profileData={profileData}
        setProfileData={setProfileData}
        textarea={true}
      />
      <TextInput
        title="ادرس"
        name="location"
        profileData={profileData}
        setProfileData={setProfileData}
      />
       <TextInput
        title="شماره تماس"
        name=" phone"
        profileData={profileData}
        setProfileData={setProfileData}
      />
       <TextInput
        title="قیمت(تومان)"
        name=" price"
        profileData={profileData}
        setProfileData={setProfileData}
      />
       <TextInput
        title="بنگاه"
        name="realState"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <button className={styles.submit} onClick={submitHandler}>ثبت اگهی</button>
    </div>
  );
}

export default AddProfilePage;
