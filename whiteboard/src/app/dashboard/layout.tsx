import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export default async function ({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const session = await auth();
  console.log(JSON.stringify(session));
  if (!session) {
    console.log("Here")
    redirect("/signIn");
  }
  return <> {children} </>;
}
