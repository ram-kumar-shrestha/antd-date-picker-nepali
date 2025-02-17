import dayjs, { Dayjs } from "dayjs";
import weekOfYear from "dayjs/plugin/weekOfYear";
import NepaliDateConverter from "../helper/converter";
import { GenerateConfig, NepaliDateType } from "../helper/type";

dayjs.extend(weekOfYear);
const nepaliMonthNames = [
  "Baishakh",
  "Jestha",
  "Ashad",
  "Shrawan",
  "Bhadra",
  "Ashwin",
  "Kartik",
  "Mangsir",
  "Poush",
  "Magh",
  "Falgun",
  "Chaitra",
];
const weekNepaliDayNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export const nepaliDateConfig: GenerateConfig<Dayjs> = {
  // Get methods
  getNow: () => dayjs(),

  getFixedDate: (string: string) => {
    return dayjs(string);
  },

  getEndDate: (date: Dayjs) => {
    const bsDate = NepaliDateConverter.adToBs(date);
    const daysInMonth = NepaliDateConverter.getDaysInMonth(
      bsDate.year,
      bsDate.month
    );

    return date.date(daysInMonth);
  },

  getWeekDay: (date: Dayjs) => {
    const bsDate = NepaliDateConverter.adToBs(date);
    return NepaliDateConverter.getWeekDay(bsDate);
  },

  getYear: (date: Dayjs) => {
    const bsDate = NepaliDateConverter.adToBs(date);
    return bsDate.year;
  },

  getMonth: (date: Dayjs) => {
    const bsDate = NepaliDateConverter.adToBs(date);
    return bsDate.month - 1; // Convert to 0-based month
  },

  getDate: (date: Dayjs) => {
    const bsDate = NepaliDateConverter.adToBs(date);
    return bsDate.day;
  },

  getHour: (date: Dayjs) => {
    return date.hour();
  },

  getMinute: (date: Dayjs) => {
    return date.minute();
  },

  getSecond: (date: Dayjs) => {
    return date.second();
  },

  getMillisecond: (date: Dayjs) => {
    return date.millisecond();
  },

  // Set methods
  addYear: (date: Dayjs, diff: number) => {
    const bsDate = NepaliDateConverter.adToBs(date);
    const newDate: NepaliDateType = {
      year: bsDate.year + diff,
      month: bsDate.month,
      day: bsDate.day,
    };
    return NepaliDateConverter.validateBsDate(newDate)
      ? NepaliDateConverter.bsToAd(newDate)
      : date;
  },

  addMonth: (date: Dayjs, diff: number) => {
    const bsDate = NepaliDateConverter.adToBs(date);
    let year = bsDate.year;
    let month = bsDate.month + diff;

    while (month > 12) {
      year += 1;
      month -= 12;
    }
    while (month < 1) {
      year -= 1;
      month += 12;
    }

    const daysInMonth = NepaliDateConverter.getDaysInMonth(year, month);
    const day = Math.min(bsDate.day, daysInMonth);

    const newDate: NepaliDateType = { year, month, day };
    return NepaliDateConverter.validateBsDate(newDate)
      ? NepaliDateConverter.bsToAd(newDate)
      : date;
  },

  addDate: (date: Dayjs, diff: number) => {
    return date.add(diff, "day");
  },

  setYear: (date: Dayjs, year: number) => {
    const bsDate = NepaliDateConverter.adToBs(date);
    const newDate: NepaliDateType = {
      year,
      month: bsDate.month,
      day: bsDate.day,
    };
    return NepaliDateConverter.validateBsDate(newDate)
      ? NepaliDateConverter.bsToAd(newDate)
      : date;
  },

  setMonth: (date: Dayjs, month: number) => {
    const bsDate = NepaliDateConverter.adToBs(date);
    const newDate: NepaliDateType = {
      year: bsDate.year,
      month: month + 1, // Convert from 0-based month
      day: bsDate.day,
    };
    return NepaliDateConverter.validateBsDate(newDate)
      ? NepaliDateConverter.bsToAd(newDate)
      : date;
  },

  setDate: (date: Dayjs, day: number) => {
    const bsDate = NepaliDateConverter.adToBs(date);
    const newDate: NepaliDateType = {
      year: bsDate.year,
      month: bsDate.month,
      day,
    };
    return NepaliDateConverter.validateBsDate(newDate)
      ? NepaliDateConverter.bsToAd(newDate)
      : date;
  },

  setHour: (date: Dayjs, hour: number) => {
    return date.hour(hour);
  },

  setMinute: (date: Dayjs, minute: number) => {
    return date.minute(minute);
  },

  setSecond: (date: Dayjs, second: number) => {
    return date.second(second);
  },

  setMillisecond: (date: Dayjs, millisecond: number) => {
    return date.millisecond(millisecond);
  },

  // Compare methods
  isAfter: (date1: Dayjs, date2: Dayjs) => {
    if (!date1.isValid() || !date2.isValid()) return false;
    return date1.isAfter(date2);
  },

  isValidate: (date: Dayjs) => {
    return date.isValid();
  },

  locale: {
    shortMonths: nepaliMonthNames,
    shortWeekDays: weekNepaliDayNames,
    getWeekFirstDay: () => 0,
    getWeekFirstDate: (_: string, date: Dayjs) => {
      return date.startOf("week");
    },
    getWeek: (_: string, date: Dayjs) => {
      return date.week();
    },
    format: (_: string, date: Dayjs, format: string) => {
      if (!date || !date.isValid()) return "";
      const bsDate = NepaliDateConverter.adToBs(date);

      // Cell display (just the day number)
      if (format === "date") {
        return bsDate.day.toString();
      }

      // Year display in header
      if (format === "YYYY" || format === "yearFormat") {
        return bsDate.year.toString();
      }

      // Month display in header
      if (format === "M" || format === "monthFormat") {
        return bsDate.month.toString();
      }

      // Day display
      if (format === "D" || format === "dayFormat") {
        return bsDate.day.toString();
      }

      // Input field display
      if (format === "dateFormat" || format === "YYYY-MM-DD") {
        return `${bsDate.year}-${bsDate.month
          .toString()
          .padStart(2, "0")}-${bsDate.day.toString().padStart(2, "0")}`;
      }

      // Default case: just show day number
      return bsDate.year.toString();
    },
    parse: (_: string, text: string) => {
      if (!text) return dayjs(null);

      // Parse YYYY-MM-DD format
      const [yearStr, monthStr, dayStr] = text.split("-");
      const year = parseInt(yearStr, 10);
      const month = parseInt(monthStr, 10);
      const day = parseInt(dayStr, 10);

      if (isNaN(year) || isNaN(month) || isNaN(day)) {
        return dayjs(null);
      }

      const bsDate = { year, month, day };
      return NepaliDateConverter.validateBsDate(bsDate)
        ? NepaliDateConverter.bsToAd(bsDate)
        : dayjs(null);
    },
  },
};
