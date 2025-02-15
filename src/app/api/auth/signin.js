import { signIn, signOut, useSession } from "next-auth/react";

export default function SignIn() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <h1>Welcome, {session.user.name}</h1>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Sign in to your account</h1>
      <button onClick={() => signIn("github")}>Sign in with GitHub</button>
    </div>
  );
}
