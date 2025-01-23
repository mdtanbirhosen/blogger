import { getKindeServerSession, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Profile() {
  // Get user session
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  // Redirect to login page if no user is found
  if (!user) {
    
    return redirect('/api/auth/login'); 
  }
  console.log(user)
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Welcome to your profile {user.given_name
      }!</h1>
      

      <p>Email: {user.email}</p>
      
      <button className="bg-red-500 px-7 py-3 rounded-md text-white  font-bold mt-5"><LogoutLink>Log out</LogoutLink></button>
    </div>
  );
}
