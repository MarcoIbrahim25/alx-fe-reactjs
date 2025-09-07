import UserContext from "./components/UserContext";
import UserProfile from "./components/UserProfile";


function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <div style={{ padding: "20px" }}>
        <h1>User Profile</h1>
        <UserProfile />
      </div>
    </UserContext.Provider>
  );
}

export default App;
