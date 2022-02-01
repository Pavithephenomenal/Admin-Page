import "./widgetsmall.css";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function Widgetsmall() {
  return (
    <div className="widgetsmall">
      <span className="widgetsmallTitle">New Join Members</span>
      <ul className="widgetsmallList">
        <li className="widgetsmallListItem">
          <img
            src={require("../../assets/member0.svg").default}
            alt=""
            className="widgetsmallImag"
          />
          <div className="widgetsmallUser">
            <span className="widgetsmallUsername">Chris</span>
            <span className="widgetsmallUserTitle">Software Engineer</span>
          </div>
          <button className="widgetsmallButton">
            <VisibilityIcon className="widgetsmallIcon" /> Display
          </button>
        </li>

        <li className="widgetsmallListItem">
          <img
            src={require("../../assets/avatar.svg").default}
            alt=""
            className="widgetsmallImag"
          />
          <div className="widgetsmallUser">
            <span className="widgetsmallUsername">Jessy</span>
            <span className="widgetsmallUserTitle">Software Engineer</span>
          </div>
          <button className="widgetsmallButton">
            <VisibilityIcon className="widgetsmallIcon" /> Display
          </button>
        </li>

        <li className="widgetsmallListItem">
          <img
            src={require("../../assets/member1.svg").default}
            alt=""
            className="widgetsmallImag"
          />
          <div className="widgetsmallUser">
            <span className="widgetsmallUsername">Harpreet</span>
            <span className="widgetsmallUserTitle">Electrical Engineer</span>
          </div>
          <button className="widgetsmallButton">
            <VisibilityIcon className="widgetsmallIcon" /> Display
          </button>
        </li>

        <li className="widgetsmallListItem">
          <img
            src={require("../../assets/member2.svg").default}
            alt=""
            className="widgetsmallImag"
          />
          <div className="widgetsmallUser">
            <span className="widgetsmallUsername">Manpreet</span>
            <span className="widgetsmallUserTitle">Software Engineer</span>
          </div>
          <button className="widgetsmallButton">
            <VisibilityIcon className="widgetsmallIcon" /> Display
          </button>
        </li>

        <li className="widgetsmallListItem">
          <img
            src={require("../../assets/member3.svg").default}
            alt=""
            className="widgetsmallImag"
          />
          <div className="widgetsmallUser">
            <span className="widgetsmallUsername">Vijay</span>
            <span className="widgetsmallUserTitle">Software Engineer</span>
          </div>
          <button className="widgetsmallButton">
            <VisibilityIcon className="widgetsmallIcon" /> Display
          </button>
        </li>

        <li className="widgetsmallListItem">
          <img
            src={require("../../assets/member4.svg").default}
            alt=""
            className="widgetsmallImag"
          />
          <div className="widgetsmallUser">
            <span className="widgetsmallUsername">Boss</span>
            <span className="widgetsmallUserTitle">Software Engineer</span>
          </div>
          <button className="widgetsmallButton">
            <VisibilityIcon className="widgetsmallIcon" /> Display
          </button>
        </li>
      </ul>
    </div>
  );
}
