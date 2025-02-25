import { FC } from "react";
import "./index.css";
import { BarChartProps } from "./interfaces";

export const BarChart: FC<BarChartProps> = ({ data }) => {
  // Функция для определения максимальной высоты
  const maxValue = Math.max(...data.map((item) => item.value));

  // Функция для расчета высоты бара
  const getBarHeight = (value: number): number => {
    const maxHeight = 200;
    return (value / maxValue) * maxHeight;
  };

  return (
    <div className="bar-chart">
      <div className="chart-container">
        {data.map((item, index) => (
          <div key={index} className="bar">
            <div
              className="bar-inner"
              style={{ height: `${getBarHeight(item.value)}px` }}
            />
            <div className="label">{item.index}</div>
            <div className="value">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
