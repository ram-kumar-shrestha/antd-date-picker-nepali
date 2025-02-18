import { DatePicker } from "antd";
import type { RangePickerProps } from "antd/es/date-picker";
import generatePicker from "antd/es/date-picker/generatePicker";
import { Dayjs } from "dayjs";
import { PickerRef } from "rc-picker";
import { forwardRef } from "react";
import { NepaliDateProps } from "../helper/type";
import { nepaliDateConfig } from "./generate-config";
import enLocale from "./ne-en.locale";
import neLocale from "./ne-locale";

const { RangePicker: AntRangePicker } = DatePicker;
const CustomDatePicker = generatePicker<Dayjs>(nepaliDateConfig);
const CustomRangePicker = CustomDatePicker.RangePicker;

interface NepaliRangePickerProps extends Omit<RangePickerProps, "picker"> {}

const NepaliRangePicker = forwardRef<
  PickerRef,
  NepaliRangePickerProps & NepaliDateProps
>((props, ref) => {
  const { type, lang, ...rest } = props;

  const locale = lang === "ne" ? neLocale : enLocale;
  if (type === "ne")
    return <CustomRangePicker {...rest} locale={locale} ref={ref} />;
  return <AntRangePicker {...rest} ref={ref} />;
});

export default NepaliRangePicker;
