import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import User from "@/models/User";
import MyProgilePage from "@/template/MyProgilePage";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";

async function MyProfiles() {
  await connectDB();
  const session = await getServerSession(authOptions);
  const [user] = await User.aggregate([
    { $match: { email: session.user.email } },
    {
      $lookup: {
        from: "profiles",
        foreignField: "userId",
        localField: "_id",
        as: "profiles",
      },
    },
  ]);
  return (
    <MyProgilePage profiles={user.profiles}/>
  )
}

export default MyProfiles;
