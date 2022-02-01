import "./user.css";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import PublishIcon from "@mui/icons-material/Publish";
import { Link } from "react-router-dom";

export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit user</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src={require("../../assets/member2.svg").default}
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Chris</span>
              <span className="userShowuserTitle">SoftwareEngineer</span>
            </div>
          </div>
          <div className="userShowBotton">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentityIcon className="userShowIcon" />
              <span className="userShowInfoTitle">chris#123@</span>
            </div>
            <div className="userShowInfo">
              <CalendarTodayIcon className="userShowIcon" />
              <span className="userShowInfoTitle">30/08/2001</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroidIcon className="userShowIcon" />
              <span className="userShowInfoTitle">9361387336</span>
            </div>
            <div className="userShowInfo">
              <MailOutlineIcon className="userShowIcon" />
              <span className="userShowInfoTitle">chris@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearchingIcon className="userShowIcon" />
              <span className="userShowInfoTitle">New Delhi, India</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form action="" className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <lable className="UserName"> Username</lable>
                <input
                  type="text"
                  placeholder="chris#123@
"
                  className="userUpdateInput"
                />
              </div>

              <div className="userUpdateItem">
                <lable className="UserName"> Full Name</lable>
                <input
                  type="text"
                  placeholder="Chris"
                  className="userUpdateInput"
                />
              </div>

              <div className="userUpdateItem">
                <lable className="UserName"> Email</lable>
                <input
                  type="text"
                  placeholder="chris@gmail.com"
                  className="userUpdateInput"
                />
              </div>

              <div className="userUpdateItem">
                <lable className="UserName">Phone</lable>
                <input
                  type="text"
                  placeholder="9361387336"
                  className="userUpdateInput"
                />
              </div>

              <div className="userUpdateItem">
                <lable className="UserName">Address</lable>
                <input
                  type="text"
                  placeholder="New Delhi, India"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  src={require("../../assets/member2.svg").default}
                  alt=""
                  className="userUpdateImg"
                />
                <label htmlFor="file">
                  <PublishIcon className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
