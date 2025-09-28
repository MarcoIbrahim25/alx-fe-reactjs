function UserProfile() {
  return (
    <div
      className="user-profile bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg text-center 
                hover:shadow-2xl hover:-translate-y-2 transition transform duration-300"
    >
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
