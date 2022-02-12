import React from "react";
import "./NewUser.css";
import "../../components/widgetlarge/widgetlarge.css";

export default function Transaction() {
  const Button = ({ type }) => {
    return <button className={"widgetlargeButton " + type}>{type}</button>;
  };
  return (
    <div className="newuser">
      <span className="widgetlargeTitle">Latest Transaction</span>
      <table className="widgetlargeTable">
        <tr className="widgetlargeTr">
          <th className="widgetlargeTh">Customer</th>
          <th className="widgetlargeTh">Date</th>
          <th className="widgetlargeTh">Amount</th>
          <th className="widgetlargeTh">Status</th>
        </tr>
        <tr className="widgetlargeTr">
          <td className="widgetlargeUser">
            <img
              src={require("../../assets/Tableuser6.svg").default}
              alt=""
              className="widgetlargeImg"
            />
            <span className="widgetlargeName">Pavithra</span>
          </td>
          <td className="widgetlargeDate">3 Jun 2021</td>
          <td className="widgetlargeAmount">$122.00</td>
          <td className="widgetlargeStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetlargeTr">
          <td className="widgetlargeUser">
            <img
              src={require("../../assets/Tableuser1.svg").default}
              alt=""
              className="widgetlargeImg"
            />
            <span className="widgetlargeName">Suhashri</span>
          </td>
          <td className="widgetlargeDate">6 Apr 2021</td>
          <td className="widgetlargeAmount">$577.00</td>
          <td className="widgetlargeStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetlargeTr">
          <td className="widgetlargeUser">
            <img
              src={require("../../assets/Tableuser5.svg").default}
              alt=""
              className="widgetlargeImg"
            />
            <span className="widgetlargeName">Sree</span>
          </td>
          <td className="widgetlargeDate">26 Jul 2021</td>
          <td className="widgetlargeAmount">$278.00</td>
          <td className="widgetlargeStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetlargeTr">
          <td className="widgetlargeUser">
            <img
              src={require("../../assets/Tableuser8.svg").default}
              alt=""
              className="widgetlargeImg"
            />
            <span className="widgetlargeName">Aryan</span>
          </td>
          <td className="widgetlargeDate">17 Feb 2021</td>
          <td className="widgetlargeAmount">$679.00</td>
          <td className="widgetlargeStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetlargeTr">
          <td className="widgetlargeUser">
            <img
              src={require("../../assets/Tableuser2.svg").default}
              alt=""
              className="widgetlargeImg"
            />
            <span className="widgetlargeName">Janani</span>
          </td>
          <td className="widgetlargeDate">30 Aug 2021</td>
          <td className="widgetlargeAmount">$1288.00</td>
          <td className="widgetlargeStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}
