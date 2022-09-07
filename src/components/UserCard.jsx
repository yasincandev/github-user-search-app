import React from "react";
import "./UserCard.css";
import location from "../assets/icon-location.svg";
import website from "../assets/icon-website.svg";
import company from "../assets/icon-company.svg";
import twitter from "../assets/icon-twitter.svg";

const UserCard = ({ user, darkMode }) => {
  let joinedFormated = "";

  const handleJoinDate = (date) => {
    const joined = new Date(date);
    const year = joined.getFullYear();
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const day = joined.getDate();
    joinedFormated = `${day} ${months[joined.getMonth()]} ${year}`;
  };

  handleJoinDate(user.created_at);

  let notAvailable = "";

  const handleNotAvailable = (data) => {
    if (data === null) {
      notAvailable = "Not Available";
    } else {
      notAvailable = data;
    }
  };

  return (
    <div
      className={
        darkMode ? "user__card Darkuser__card" : "user__card Lightuser__card "
      }
    >
      <div className="user__card__image">
        <img src={user.avatar_url} alt="" />
      </div>
      <div className="user__card__info">
        <div className="user__card__header">
          <h2 className="user__card__name">{user.name}</h2>
          <p className="user__card__joined_date"> Joined {joinedFormated}</p>
        </div>
        <div className="user__card__bio">
          <p className="user__card__login">@{user.login}</p>
          {user.bio ? (
            <p className="bio">{user.bio}</p>
          ) : (
            <p className="bio">This profile has no bio</p>
          )}
        </div>
        <div className="user__card__stats">
          <div className="user__card__stats__detail">
            <p className="user__card__stats__detail__text"> Repos </p>
            <p className="user__card__stats__detail__numbers">
              {user.public_repos}
            </p>
          </div>
          <div className="user__card__stats__detail">
            <p className="user__card__stats__detail__text"> Followers </p>

            <p className="user__card__stats__detail__numbers">
              {user.following}{" "}
            </p>
          </div>
          <div className="user__card__stats__detail">
            <p className="user__card__stats__detail__text">Following </p>
            <p className="user__card__stats__detail__numbers">
              {user.following}{" "}
            </p>
          </div>
        </div>
        <div className="user__card__extra__informations">
          <div className="user__card__extra__informations__details">
            <img
              className="user__card__extra__informations__details_image"
              src={location}
              alt=""
            />
            {user.location ? (
              <p className="user__card__extra__informations__details__text">
                {user.location}
              </p>
            ) : (
              <p className="user__card__extra__informations__details__text">
                {" "}
                Not Available{" "}
              </p>
            )}
          </div>
          <div className="user__card__extra__informations__details">
            <img
              className="user__card__extra__informations__details_image"
              src={twitter}
              alt=""
            />
            {user.twitter_username ? (
              <p className="user__card__extra__informations__details__text">
                {user.twitter_username}
              </p>
            ) : (
              <p className="user__card__extra__informations__details__text">
                {" "}
                Not Available{" "}
              </p>
            )}
          </div>
          <div className="user__card__extra__informations__details">
            <img
              className="user__card__extra__informations__details_image"
              src={website}
              alt=""
            />
            {user.blog ? (
              <p className="user__card__extra__informations__details__text">
                {user.blog}
              </p>
            ) : (
              <p className="user__card__extra__informations__details__text">
                {" "}
                Not Available{" "}
              </p>
            )}
          </div>
          <div className="user__card__extra__informations__details">
            <img
              className="user__card__extra__informations__details_image"
              src={company}
              alt=""
            />
            {user.company ? (
              <p className="user__card__extra__informations__details__text">
                {user.company}
              </p>
            ) : (
              <p className="user__card__extra__informations__details__text">
                {" "}
                Not Available{" "}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
