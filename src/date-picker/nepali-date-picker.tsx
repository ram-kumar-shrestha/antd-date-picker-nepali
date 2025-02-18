import { DatePicker, DatePickerProps } from "antd";
import generatePicker from "antd/es/date-picker/generatePicker";
import { Dayjs } from "dayjs";
import { PickerRef } from "rc-picker";
import { forwardRef } from "react";
import { nepaliDateConfig } from "./generate-config";
import locale from "./ne_locale";

const CustomDatePicker = generatePicker<Dayjs>(nepaliDateConfig);

interface NepaliDatePickerProps extends Omit<DatePickerProps, "picker"> {
  picker?: "date" | "week" | "month" | "year";
  type?: "ne" | "en";
}

const NepaliDatePicker = forwardRef<PickerRef, NepaliDatePickerProps>(
  (props, ref) => {
    const { type, ...rest } = props;
    if (type === "ne")
      return <CustomDatePicker {...rest} locale={locale} ref={ref} />;
    return <DatePicker {...rest} ref={ref} />;
  }
);

export default NepaliDatePicker;
