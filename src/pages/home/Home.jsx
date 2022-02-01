import Chart from "../../components/chart/chart";
import FeaturedInfo from "../../components/featuredinfo/featuredinfo";
import "./Home.css";
import { userData } from "../../dummyData";

import Widgetsmall from "../../components/widgetsmall/widgetsmall";
import Widgetlarge from "../../components/widgetlarge/widgetlarge";
export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="user Analytics"
        gird
        dataKey="Active Users"
      />
      <div className="homeWidgets">
        <Widgetsmall />
        <Widgetlarge />
      </div>
    </div>
  );
}
