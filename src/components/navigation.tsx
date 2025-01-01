import Link from "next/link";
import Notifications from "./notifications";
import AuthButton from "./authButton";

export default function Navigation() {
  return (
    <nav className="flex justify-center items-center w-full p-4">
      <div className="flex-1 flex justify-center">
        <Link href="/" className="link">
          Home
        </Link>
      </div>
      <div className="flex gap-3">
        <AuthButton buttonName="Login" path="/login"></AuthButton>
        <AuthButton buttonName="Register" path="/register"></AuthButton>
      </div>
      <Notifications
        messages={[
          { title: "Maintanance Break", message: "A fun update is on its way" },
        ]}
      ></Notifications>
    </nav>
  );
}
