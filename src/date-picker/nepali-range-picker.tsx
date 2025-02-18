import { DatePicker } from "antd";
import type { RangePickerProps } from "antd/es/date-picker";
import generatePicker from "antd/es/date-picker/generatePicker";
import { Dayjs } from "dayjs";
import { PickerRef } from "rc-picker";
import { forwardRef } from "react";
import { nepaliDateConfig } from "./generate-config";
import locale from "./ne_locale";

const { RangePicker: AntRangePicker } = DatePicker;
const CustomDatePicker = generatePicker<Dayjs>(nepaliDateConfig);
const CustomRangePicker = CustomDatePicker.RangePicker;

interface NepaliRangePickerProps extends Omit<RangePickerProps, "picker"> {
  picker?: "date" | "week" | "month" | "year";
  type?: "ne" | "en";
}

const NepaliRangePicker = forwardRef<PickerRef, NepaliRangePickerProps>(
  (props, ref) => {
    const { type, ...rest } = props;
    if (type === "ne")
      return <CustomRangePicker {...rest} locale={locale} ref={ref} />;
    return <AntRangePicker {...rest} ref={ref} />;
  }
);

export default NepaliRangePicker;
