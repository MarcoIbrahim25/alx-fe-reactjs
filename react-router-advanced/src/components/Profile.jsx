import { NavLink, Routes, Route } from "react-router-dom";
import { useAuth } from "../auth";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

export default function Profile() {
  const { logout } = useAuth();
  return (
    <div>
      <h2>Profile</h2>
      <nav style={{ display: "flex", gap: 12 }}>
        <NavLink to="details">ProfileDetails</NavLink>
        <NavLink to="settings">ProfileSettings</NavLink>
      </nav>
      <button onClick={logout} style={{ marginTop: 12 }}>Logout</button>
      <Routes>
        <Route index element={<ProfileDetails />} />
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}
