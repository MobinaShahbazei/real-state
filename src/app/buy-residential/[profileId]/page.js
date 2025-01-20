import Profile from "@/models/Profile"
import DetailsPage from "@/template/DetailsPage"
import connectDB from "@/utils/connectDB"


 async function ProfileDetails({param: {profileId}}) {
    await connectDB()
    const profile = await Profile.findOne({_id : profileId})

    if (!profile) return <h3>مشکلی پیش امده است</h3>
  return (
    <DetailsPage data={profile}/>
  )
}

export default ProfileDetails