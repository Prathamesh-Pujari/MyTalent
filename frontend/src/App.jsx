import "./App.css";
import {
  Show,
  SignInButton,
  SignOutButton,
  SignUpButton,
  UserButton,
} from "@clerk/react";

function App() {
  return (
    <>
      <h1>Welcome To MyTalent Prathamesh</h1>
      <SignOutButton>
        <SignInButton mode="modal" />
      </SignOutButton>

      <SignInButton>
        <SignOutButton />
      </SignInButton>

      <UserButton />
    </>
  );
}

export default App;
