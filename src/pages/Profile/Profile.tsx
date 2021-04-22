import React, { useState } from "react";
import "./styles.scss";
import Navbar from "../../components/Navbar/Navbar";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { auth, db } from "../../services/firebase";

const Profile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [user] = useState(auth().currentUser);

  console.log(`user`, user);
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
              <div className="profile__form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  value={user?.displayName || ""}
                  placeholder="Name"
                  id="name"
                />
              </div>

              <div className="profile__form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  value={user?.email || ""}
                  placeholder="Email"
                  id="email"
                />
              </div>

              {/* <label htmlFor="colours">My colour:</label>
              <select name="colours" id="colours">
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
              </select> */}

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
