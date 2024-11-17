import { signIn } from "@/auth"
import Image from "next/image"
import { redirect } from "next/navigation"
import { HTMLAttributes } from "react"
 
export default function SignIn(props: HTMLAttributes<HTMLFormElement>) {
  return (
    <form
      {...props}
      action={async () => {
        "use server"
        await signIn("github", { redirectTo: "/dashboard" });
      }}
    >
      <button type="submit" className="flex flex-col justify-center items-center p-2 gap-2 bg-gray-700 hover:bg-gray-600 rounded-md">
        <Image src={'/github/githubLogo.png'}alt="Github Icon" width={50} height={50}/>
        Continue with Github
      </button>
    </form>
  )
} 
