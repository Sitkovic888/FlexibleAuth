import { useAuth } from "@/hooks/useAuth";
import { Link } from "react-router-dom";

export default function NavBar() {
  const useAuthContext = useAuth();

  const linkClassName = "text-white font-bold hover:text-gray-200";
  return (
    <nav className="flex items-center justify-between bg-red-800 w-full h-[13vh] px-[4vw]">
      <Link to="/" className={linkClassName}>
        Logo
      </Link>
      {!useAuthContext.isLoggedIn() ? (
        <Link to="/login" className={linkClassName}>
          Log in
        </Link>
      ) : (
        <a onClick={useAuthContext.logoutUser} className={linkClassName}>
          Log in
        </a>
      )}
    </nav>
  );
}
