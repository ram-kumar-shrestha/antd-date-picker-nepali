import { DatePicker, DatePickerProps } from "antd";
import generatePicker from "antd/es/date-picker/generatePicker";
import { Dayjs } from "dayjs";
import { nepaliDateConfig } from "./generate-config";
import locale from "./ne_locale";

const CustomDatePicker = generatePicker<Dayjs>(nepaliDateConfig);

interface NepaliDatePickerProps extends Omit<DatePickerProps, "picker"> {
  picker?: "date" | "week" | "month" | "year";
  type?: "ne" | "en";
}

const NepaliDatePicker: React.FC<NepaliDatePickerProps> = (props) => {
  const { type, ...rest } = props;
  if (type === "ne") return <CustomDatePicker {...rest} locale={locale} />;
  return <DatePicker {...rest} />;
};

export default NepaliDatePicker;
