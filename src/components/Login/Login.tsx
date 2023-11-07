import { useSession, signIn, signOut } from "next-auth/react";

const Login = () => {
  const { data: session } = useSession();
  const userEmail = session?.user?.email as string;
  const userFullName = session?.user?.name as string;

  if(session) {
    return (
      <>
        <div>Signed in as {userEmail}</div>
        <div>Welcome, {userFullName}!</div>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }

  return (
    <>
      <div>Not signed in</div>
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}

export default Login;