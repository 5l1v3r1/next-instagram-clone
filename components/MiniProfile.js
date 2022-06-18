import { UserAddIcon } from "@heroicons/react/outline";
import { useSession, signOut } from "next-auth/react";
export default function MiniProfile() {
  const {data: session} =useSession();
  return (
  <div className="flex items-center justify-between ml-10 mt-14">
    <img className="h-16 rounded-full border p-[2px]"
     src={session?.user.image}
      alt="user-image" />
    <div className="flex-1 ml-4">
        <h2 className="font-bold">{session?.user.username}</h2>
    </div>
    <button onClick={signOut} className="font-semibold text-sm text-blue-500 ">Çıkış Yap</button>


  </div>
  );
  
}
