import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.clear();
    navigate("/auth");
  };

  return (
    <div 
      className="navbar"
      style={{ 
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "1rem" // space between links
      }}
    >
      {/* "Navbar" over on the left */}
      <a className="navbar-brand" >kooCshare</a>

      {/* Navigation links */}
      <Link to="/">Home</Link>
      <Link to="/create-recipe">Create Recipe</Link>
      <Link to="/saved-recipes">Saved Recipes</Link>

      {/* If not logged in, show Login/Register; otherwise show Logout link */}
      {!cookies.access_token ? (
        <Link to="/auth">Login/Register</Link>
      ) : (
        <Link onClick={logout} to="#">
          Logout
        </Link>
      )}
    </div>
  );
};