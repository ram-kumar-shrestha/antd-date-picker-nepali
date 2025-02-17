import { Dayjs } from "dayjs";

export type NepaliDateType = {
  year: number;
  month: number;
  day: number;
};

export type NepaliDateDataType = {
  year: number;
  months: Array<number>;
  startWeek?: Array<number>;
};

export type GenerateConfig<DateType> = {
  getNow: () => DateType;
  getFixedDate: (string: string) => DateType;
  getEndDate: (value: DateType) => DateType;
  getWeekDay: (value: DateType) => number;
  getYear: (value: DateType) => number;
  getMonth: (value: DateType) => number;
  getDate: (value: DateType) => number;
  addYear: (value: DateType, diff: number) => DateType;
  addMonth: (value: DateType, diff: number) => DateType;
  addDate: (value: DateType, diff: number) => DateType;
  setYear: (value: DateType, year: number) => DateType;
  setMonth: (value: DateType, month: number) => DateType;
  setDate: (value: DateType, date: number) => DateType;
  isAfter: (date1: DateType, date2: DateType) => boolean;
  isValidate: (date: DateType) => boolean;
  getHour: (value: DateType) => number;
  getMinute: (value: DateType) => number;
  getSecond: (value: DateType) => number;
  getMillisecond: (value: DateType) => number;
  setHour: (value: DateType, hour: number) => DateType;
  setMinute: (value: DateType, minute: number) => DateType;
  setSecond: (value: DateType, second: number) => DateType;
  setMillisecond: (value: DateType, millisecond: number) => DateType;
  locale: {
    shortMonths: string[];
    shortWeekDays: string[];
    getWeekFirstDay: (_: string) => number;
    getWeekFirstDate: (_: string, date: Dayjs) => DateType;
    getWeek: (_: string, date: Dayjs) => number;
    format: (locale: string, value: DateType, format: string) => string;
    parse: (_: string, text: string) => DateType;
  };
};
