import "./NewUser.css";

export default function NewUser() {
  return (
    <div className="newuser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>User Name</label>
          <input type="text" placeholder="Chris" />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="Chris Johan" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="text" placeholder="chrisjohan@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="text" placeholder="password" />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="1134456782" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="Mumbai,India" />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input
              type="radio"
              name="gender"
              id="transgender"
              value="transgender"
            />
            <label for="transgender">Transgender</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
}
