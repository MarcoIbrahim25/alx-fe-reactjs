function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 p-8 max-w-[400px] mx-auto my-20 rounded-md shadow-lg text-center">
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="rounded-full w-[150px] h-[150px] mx-auto"
      />
      <h3 className="text-xl text-blue-800 my-4">John Doe</h3>
      <p className="text-base text-gray-600">
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}

export default UserProfile;
