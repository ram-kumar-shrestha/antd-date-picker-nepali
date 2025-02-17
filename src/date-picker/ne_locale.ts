import { PickerLocale } from "antd/es/date-picker/generatePicker";

// Define Nepali month and day names
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

const locale: PickerLocale = {
  lang: {
    locale: "ne",
    placeholder: "मिति चयन गर्नुहोस्",
    rangePlaceholder: ["सुरुको मिति", "अन्तिम मिति"],
    today: "आज",
    now: "अहिले",
    backToToday: "आजमा फर्कनुहोस्",
    ok: "ठीक छ",
    clear: "स्पष्ट",
    month: "महिना",
    year: "वर्ष",
    timeSelect: "समय चयन गर्नुहोस्",
    dateSelect: "मिति चयन गर्नुहोस्",
    weekSelect: "एक हप्ता चयन गर्नुहोस्",
    monthSelect: "महिना चयन गर्नुहोस्",
    yearSelect: "वर्ष चयन गर्नुहोस्",
    decadeSelect: "एक दशक चयन गर्नुहोस्",
    yearFormat: "YYYY",
    dateFormat: "M/D/YYYY",
    dayFormat: "D",
    dateTimeFormat: "M/D/YYYY HH:mm:ss",
    monthBeforeYear: true,
    previousMonth: "अघिल्लो महिना (PageUp)",
    nextMonth: "अर्को महिना (PageDown)",
    previousYear: "अघिल्लो वर्ष (Control + left)",
    nextYear: "अर्को वर्ष (Control + right)",
    previousDecade: "अघिल्लो दशक",
    nextDecade: "अर्को दशक",
    previousCentury: "अघिल्लो शताब्दी",
    nextCentury: "अर्को शताब्दी",
    shortMonths: nepaliMonthNames,
    shortWeekDays: weekNepaliDayNames,
  },
  timePickerLocale: {
    placeholder: "समय चयन गर्नुहोस्",
  },
};

export default locale;
