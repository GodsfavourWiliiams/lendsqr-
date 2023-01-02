import * as React from "react";
import './statsBox.scss';

interface Stats {
  data: {
  label: string;
  value: number;
  icon: any;
  }[];
}


const StatsBox: React.FC<Stats> = ({ data }) => {
  return (
    <div className="stats-box">
      {data.map((stat, index) => (
        <div className="statsbox__stat" key={index}>
          <div className="statsbox__stat-icon">{stat.icon}</div>
          <span className="statsbox__stat-label">{stat.label}</span>
        <span className="statsbox__stat-value">{stat.value}</span>
        </div>
        ))}
    </div>
  )
}

export default StatsBox;