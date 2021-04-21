import React, { useState } from "react";
import "./styles.scss";
import Navbar from "../../components/Navbar/Navbar";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const Profile = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Navbar authenticated={true} />
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <section className="profile">Profile Section</section>
      )}
    </>
  );
};

export default Profile;
