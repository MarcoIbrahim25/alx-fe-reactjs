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
        p-4 sm:p-4 md:p-8
        transition-transform duration-300 ease-in-out
        hover:shadow-xl hover:-translate-y-2
      "
    >
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="
          rounded-full mx-auto sm:w-24 sm:h-24 md:w-36 md:h-36
          transition-transform duration-300 ease-in-out
          hover:scale-110
        "
      />
      <h3
        className="
          text-lg sm:text-xl md:text-xl
          text-blue-800 my-4
          transition-colors duration-300
          hover:text-blue-500
        "
      >
        John Doe
      </h3>
      <p className="text-sm sm:text-base text-gray-600">
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}

export default UserProfile;
