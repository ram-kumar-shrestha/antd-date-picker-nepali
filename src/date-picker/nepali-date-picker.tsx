import { ConfigProvider, DatePicker, DatePickerProps, Space } from "antd";
import dayjs from "dayjs";
import NepaliDate from "nepali-date-converter";
import locale from "./ne_locale";

const NepaliDatePicker = (props: DatePickerProps) => {
  const nepaliDate = new NepaliDate();
  const bsDate = nepaliDate.getBS();

  const dayjsDate = dayjs()
    .year(bsDate.year)
    .month(bsDate.month)
    .date(bsDate.date)
    .day(bsDate.day ?? 0);

  return (
    <ConfigProvider locale={locale}>
      <Space direction="vertical">
        <DatePicker defaultValue={dayjsDate} {...props} showNow={false} />
      </Space>
    </ConfigProvider>
  );
};

export default NepaliDatePicker;
