import { DatePicker, DatePickerProps } from "antd";
import generatePicker from "antd/es/date-picker/generatePicker";
import { Dayjs } from "dayjs";
import { PickerRef } from "rc-picker";
import { forwardRef } from "react";
import { NepaliDateProps } from "../helper/type";
import { nepaliDateConfig } from "./generate-config";
import neLocale from "./ne-locale";
import enLocale from "./ne-en.locale";

const CustomDatePicker = generatePicker<Dayjs>(nepaliDateConfig);

interface NepaliDatePickerProps
  extends Omit<DatePickerProps, "picker" | "lang"> {}

const NepaliDatePicker = forwardRef<
  PickerRef,
  NepaliDatePickerProps & NepaliDateProps
>((props, ref) => {
  const { type, lang, ...rest } = props;

  const locale = lang === "ne" ? neLocale : enLocale;

  if (type === "ne")
    return (
      <CustomDatePicker {...rest} locale={locale} ref={ref} lang="nepali" />
    );
  return <DatePicker {...rest} ref={ref} />;
});

export default NepaliDatePicker;
