function UserProfile() {
  return (
    <div
      className="
        user-profile
        bg-gray-100
        mx-auto my-20
        text-center
        shadow-lg rounded-lg
        max-w-xs md:max-w-sm
        p-4 md:p-8 sm:p-4
        hover:shadow-2xl hover:-translate-y-2 transition transform duration-300
      "
    >
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="rounded-full mx-auto w-24 h-24 sm:w-36 sm:h-36"
      />
      <h3 className="text-lg sm:text-xl text-blue-800 my-4">John Doe</h3>
      <p className="text-sm sm:text-base text-gray-600">
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}

export default UserProfile;
