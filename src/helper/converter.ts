import dayjs, { Dayjs } from "dayjs";
import {
  ALL_NEPALI_DATES,
  START_ENGLISH_DATE_OF_2000_BS,
  START_WEEK_DAY_OF_2000,
} from "./data";
import { NepaliDateProps, NepaliDateType } from "./type";
import { nepaliMonthNames as NepaliMonths } from "../date-picker/ne-locale";
import { nepaliMonthNames as NepaliMonthsEn } from "../date-picker/ne-en.locale";

const START_ENGINE_DATE = dayjs(START_ENGLISH_DATE_OF_2000_BS);

class NepaliDateConverter {
  /**
   * Validates a given Nepali date.
   * @param {NepaliDateType} bsDate - The Nepali date to validate.
   * @returns {boolean} - True if the date is valid, false otherwise.
   */
  static validateBsDate(bsDate: NepaliDateType): boolean {
    const yearData = ALL_NEPALI_DATES.find((y) => y.year === bsDate.year);
    if (!yearData) return false;

    if (bsDate.month < 1 || bsDate.month > 12) return false;
    const daysInMonth = yearData.months[bsDate.month - 1];
    if (bsDate.day < 1 || bsDate.day > daysInMonth) return false;

    return true;
  }

  /**
   * Gets today's Nepali date.
   * @returns {NepaliDateType} - The current Nepali date.
   */
  static getTodayBs(): NepaliDateType {
    return this.adToBs(dayjs());
  }

  /**
   * Gets the weekday for a given Nepali date.
   * @param {NepaliDateType} bsDate - The Nepali date.
   * @returns {number} - The weekday (0 = Sunday, 6 = Saturday).
   */
  static getWeekDay(bsDate: NepaliDateType): number {
    let totalDays = 0;

    // Count days from 2000 to target year
    for (const yearData of ALL_NEPALI_DATES) {
      if (yearData.year >= bsDate.year) break;
      totalDays += yearData.months.reduce((sum, days) => sum + days, 0);
    }

    // Add days from months in target year
    const yearData = ALL_NEPALI_DATES.find((y) => y.year === bsDate.year);
    if (yearData) {
      for (let i = 0; i < bsDate.month - 1; i++) {
        totalDays += yearData.months[i];
      }
    }

    // Add remaining days
    totalDays += bsDate.day - 1;

    // Calculate weekday (0 = Sunday, 6 = Saturday)
    return (START_WEEK_DAY_OF_2000 + totalDays) % 7;
  }

  /**
   * Converts an AD date to a Nepali date.
   * @param {Dayjs | Date | string} adDate - The AD date to convert.
   * @returns {NepaliDateType} - The corresponding Nepali date.
   */
  static adToBs(
    adDate: Dayjs | Date | string,
    lang: Pick<NepaliDateProps, "lang"> = { lang: "en" }
  ): NepaliDateType {
    const isNepali = lang.lang === "ne";
    const months = isNepali ? NepaliMonths : NepaliMonthsEn;
    const date = dayjs(adDate);
    if (!date.isValid())
      return { year: 2000, month: 1, day: 1, monthName: months[0] };
    const diffDays = date.diff(START_ENGINE_DATE, "day");

    if (diffDays < 0)
      return { year: 2000, month: 1, day: 1, monthName: months[0] };

    let remainingDays = diffDays;
    let year = 2000;
    let month = 1;
    let day = 1;

    for (const yearData of ALL_NEPALI_DATES) {
      const daysInYear = yearData.months.reduce((sum, days) => sum + days, 0);

      if (remainingDays >= daysInYear) {
        remainingDays -= daysInYear;
        continue;
      }

      year = yearData.year;

      for (let i = 0; i < 12; i++) {
        const daysInMonth = yearData.months[i] ?? 30; // Prevent undefined month
        if (remainingDays >= daysInMonth) {
          remainingDays -= daysInMonth;
          continue;
        }

        month = i + 1;
        day = remainingDays + 1;
        return { year, month, day, monthName: months[i] };
      }
      break;
    }

    return { year, month, day: day || 1, monthName: months[month - 1] }; // Ensure day is not NaN
  }

  /**
   * Converts a Nepali date to an AD date.
   * @param {NepaliDateType} bsDate - The Nepali date to convert.
   * @returns {Dayjs} - The corresponding AD date.
   */
  static bsToAd(bsDate: NepaliDateType): Dayjs {
    let daysToAdd = 0;

    // Calculate days from 2000 to the target year
    for (const yearData of ALL_NEPALI_DATES) {
      if (yearData.year >= bsDate.year) {
        break;
      }
      daysToAdd += yearData.months.reduce((sum, days) => sum + days, 0);
    }

    // Add days for months in the target year
    const currentYearData = ALL_NEPALI_DATES.find(
      (d) => d.year === bsDate.year
    );
    if (currentYearData) {
      for (let i = 0; i < bsDate.month - 1; i++) {
        daysToAdd += currentYearData.months[i];
      }
    }

    // Add remaining days
    daysToAdd += bsDate.day - 1;

    return START_ENGINE_DATE.add(daysToAdd, "day");
  }

  /**
   * Gets the Nepali date for a given AD date.
   * @param {Date} adDate - The AD date.
   * @returns {NepaliDateType} - The corresponding Nepali date.
   */
  static getNepaliDate(adDate: Date): NepaliDateType {
    return this.adToBs(dayjs(adDate));
  }

  /**
   * Gets the AD date for a given Nepali date.
   * @param {number} npYear - The Nepali year.
   * @param {number} npMonth - The Nepali month.
   * @param {number} npDay - The Nepali day.
   * @returns {Date} - The corresponding AD date.
   */
  static getEnglishDate(npYear: number, npMonth: number, npDay: number): Date {
    return this.bsToAd({ year: npYear, month: npMonth, day: npDay }).toDate();
  }

  /**
   * Gets the number of days in a given Nepali month.
   * @param {number} year - The Nepali year.
   * @param {number} month - The Nepali month.
   * @returns {number} - The number of days in the month.
   */
  static getDaysInMonth(year: number, month: number): number {
    const yearData = ALL_NEPALI_DATES.find((d) => d.year === year);
    if (!yearData) return 30;
    return yearData.months[month - 1];
  }
}

export default NepaliDateConverter;
