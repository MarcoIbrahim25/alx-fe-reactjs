function UserProfile() {
  return (
    <div
      className="
        user-profile
        bg-gray-100
        mx-auto my-20
        text-center
        shadow-lg rounded-lg
        /* container responsiveness */
        max-w-xs md:max-w-sm
        p-4 md:p-8
        /* bonus hover */
        hover:shadow-2xl hover:-translate-y-2 transition transform duration-300
      "
    >
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="
          rounded-full mx-auto
          /* image responsiveness */
          w-24 h-24 md:w-36 md:h-36
        "
      />
      <h3
        className="
          /* typography responsiveness */
          text-lg md:text-xl
          text-blue-800
          my-4
        "
      >
        John Doe
      </h3>
      <p
        className="
          /* paragraph responsiveness */
          text-sm md:text-base
          text-gray-600
        "
      >
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}

export default UserProfile;
