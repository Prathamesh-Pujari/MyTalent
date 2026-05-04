import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserButton,
} from "@clerk/clerk-react";
import React from "react";
import toast from "react-hot-toast";

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <button
        className="btn btn-primary"
        onClick={() => toast.success("This is Success Toast")}
      >
        Click Me
      </button>
      <SignedOut>
        <SignInButton mode="modal">
          <button>Login</button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <SignOutButton />
      </SignedIn>

      <UserButton />
    </div>
  );
};

export default HomePage;
