import React, { useState } from "react";
import "./styles.scss";
import Navbar from "../../components/Navbar/Navbar";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const Profile = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Navbar authenticated={true} />
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <section className="profile">
          <div className="profile__content">
            <h1 className="profile__title">
              Update your Chatroom Profile <i className="fab fa-rocketchat"></i>
            </h1>

            <form onSubmit={() => ""} className="profile__form">
              <input type="text" placeholder="Name" />

              <label htmlFor="colours">Choose a colour:</label>
              <select name="colours" id="colours">
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
              </select>

              <button className="btn btn--primary authform__form--btn">
                Save Changes
              </button>
            </form>
          </div>
        </section>
      )}
    </>
  );
};

export default Profile;
