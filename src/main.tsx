import React from "react";
import ReactDOM from "react-dom/client";
import NepaliDatePicker from "./date-picker/nepali-date-picker";
import dayjs from "dayjs";
import NepaliRangePicker from "./date-picker/nepali-range-picker";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NepaliDatePicker type="ne" defaultValue={dayjs()} />
    <NepaliRangePicker
      type="ne"
      defaultValue={[dayjs(), dayjs().add(10, "day")]}
    />
  </React.StrictMode>
);
