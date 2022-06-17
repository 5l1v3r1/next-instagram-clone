import {getProviders, signIn} from "next-auth/react"
import Header from "../../components/Header"
export default function signin({ providers }) {
  return (
  <>
  <Header/>
  <div className="flex justify-center space-x-7">
    <img className="hidden object-cover rotate-6 md:inline-flex md:w-48" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjhyZcBD1TsE9suLLy2wMrv8MdTANNP4RFAA&usqp=CAU" alt="instagram-signin" />

    <div className="">
        {Object.values(providers).map((provider)=>(
            <div key={provider.name} className="flex flex-col items-center">
                <img className="w-32 object-cover" src="https://2.bp.blogspot.com/-ZPqgJKBi0X0/XN8Auej-3XI/AAAAAAAAdxU/JsMWQGdKASM1E501RmQb7_zZ5cPL8E-IwCLcBGAs/s1600/instagram-png.png" alt="" />
                <button onClick={()=> signIn(provider.id, {callbackUrl: "/"})} className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500 ">Sign in with{provider.name}</button>

                </div>

        
        ))}
    </div>
  </div>
  </>
  );
  
}

export async function getServerSideProps(context) {
const providers = await getProviders();
return {
    props: {providers}
}}