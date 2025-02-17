import type { DatePickerProps } from "antd";
import generatePicker from "antd/es/date-picker/generatePicker";
import dayjs, { Dayjs } from "dayjs";
import { nepaliDateConfig } from "./generate-config";
import locale from "./ne_locale";

const CustomDatePicker = generatePicker<Dayjs>(nepaliDateConfig);

interface NepaliDatePickerProps extends Omit<DatePickerProps, "picker"> {
  picker?: "date" | "week" | "month" | "year";
}

const NepaliDatePicker: React.FC<NepaliDatePickerProps> = (props) => {
  return <CustomDatePicker {...props} locale={locale} defaultValue={dayjs()} />;
};

export default NepaliDatePicker;
