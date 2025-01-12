"use client"
import styles from "@/template/AddProfilePage.module.css"
import { useState } from "react"

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
    })
  return (
    <div>AddProfilePage</div>
  )
}

export default AddProfilePage