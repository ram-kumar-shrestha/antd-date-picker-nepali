# Nepali Date Picker

A TypeScript-based date picker that supports both Gregorian (AD) and Nepali (BS) calendars, built on top of Ant Design for react.

## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Usage](#usage)
  - [Basic Usage](#basic-usage)
  - [Components](#components)
  - [Date Converter](#date-converter)
- [API Reference](#api-reference)
  - [Component Props](#component-props)
  - [NepaliDateConverter Methods](#nepalidateconverter-methods)
  - [Types](#types)
- [Contributing](#contributing)
- [License](#license)

## Installation

```bash
npm install antd-date-picker-nepali
```

## Features

- Convert AD dates to BS (Nepali) dates and vice versa
- Validate Nepali dates
- Get weekday information
- Get days in Nepali months
- Type-safe with TypeScript support

## Usage

### Basic Usage

```typescript
import NepaliDateConverter from "antd-date-picker-nepali";

// Get today's date in Nepali calendar
const todayNepali = NepaliDateConverter.getTodayBs();
```

Then, you can use the Nepali date picker component in your React project as follows:

```bash
import React from 'react';
import { NepaliDatePicker } from 'antd-date-picker-nepali';
import 'antd/dist/antd.css';

const App = () => {
  const onChange = (date: any, dateString: string) => {
    console.log(date, dateString);
  };

  return (
    <div>
      <h1>Nepali Date Picker</h1>
      <NepaliDatePicker onChange={onChange} />
    </div>
  );
};

export default App;

```

### Components

#### NepaliDatePicker

The NepaliDatePicker component supports all the same props as the Ant Design DatePicker component. Please refer to the [Ant Design DatePicker documentation](https://ant.design/components/date-picker/) for detailed information.

Here is an example of how to use the NepaliDatePicker component with additional props:

```bash
import React from 'react';
import { NepaliDatePicker } from 'antd-date-picker-nepali';
import 'antd/dist/antd.css';

const App = () => {
  const onChange = (date: any, dateString: string) => {
    console.log(date, dateString);
  };

  return (
    <div>
      <h1>Nepali Date Picker</h1>
      <NepaliDatePicker
        onChange={onChange}
        placeholder="Select date"
        format="YYYY-MM-DD"
        showToday
      />
    </div>
  );
};

export default App;

```

#### NepaliRangePicker

The NepaliRangePicker component supports all the same props as the Ant Design RangePicker component. Please refer to the [Ant Design RangePicker documentation](https://ant.design/components/date-picker/#RangePicker) for detailed information.

Here is an example of how to use the NepaliRangePicker component with additional props:

```bash
import React from 'react';
import { NepaliRangePicker } from 'antd-date-picker-nepali';
import 'antd/dist/antd.css';

const App = () => {
  const onChange = (dates: any, dateStrings: [string, string]) => {
    console.log(dates, dateStrings);
  };

  return (
    <div>
      <h1>Nepali Range Picker</h1>
      <NepaliRangePicker
        onChange={onChange}
        placeholder={['Start date', 'End date']}
        format="YYYY-MM-DD"
        showTime
      />
    </div>
  );
};

export default App;

```

## API Reference

### Component Props

Both components support all standard Ant Design DatePicker props plus these additional props:

| Prop | Type             | Default | Description              |
| ---- | ---------------- | ------- | ------------------------ |
| type | `"ne"` \| `"en"` | `"en"`  | Calendar type to display |

### NepaliDateConverter Methods

Static methods for converting and managing Nepali dates.

#### Methods

##### `validateBsDate(bsDate: NepaliDateType): boolean`

Validates if a given Nepali date is valid.

```typescript
const date = { year: 2080, month: 13, day: 1 };
const isValid = NepaliDateConverter.validateBsDate(date); // false (invalid month)
```

##### `getTodayBs(): NepaliDateType`

Returns today's date in Nepali calendar.

```typescript
const today = NepaliDateConverter.getTodayBs();
```

##### `getWeekDay(bsDate: NepaliDateType): number`

Returns the day of week (0 = Sunday, 6 = Saturday) for a given Nepali date.

```typescript
const weekday = NepaliDateConverter.getWeekDay({
  year: 2080,
  month: 1,
  day: 1,
});
```

##### `adToBs(adDate: Dayjs | Date | string): NepaliDateType`

Converts an AD date to BS (Nepali) date.

```typescript
const nepaliDate = NepaliDateConverter.adToBs(new Date());
// or
const nepaliDate = NepaliDateConverter.adToBs("2023-08-15");
```

##### `bsToAd(bsDate: NepaliDateType): Dayjs`

Converts a BS (Nepali) date to AD date.

```typescript
const adDate = NepaliDateConverter.bsToAd({
  year: 2080,
  month: 8,
  day: 15,
});
```

##### `getNepaliDate(adDate: Date): NepaliDateType`

Convenience method to get Nepali date from AD date.

```typescript
const nepaliDate = NepaliDateConverter.getNepaliDate(new Date());
```

##### `getEnglishDate(npYear: number, npMonth: number, npDay: number): Date`

Convenience method to get AD date from Nepali date components.

```typescript
const adDate = NepaliDateConverter.getEnglishDate(2080, 8, 15);
```

##### `getDaysInMonth(year: number, month: number): number`

Returns the number of days in a given Nepali month.

```typescript
const days = NepaliDateConverter.getDaysInMonth(2080, 8);
```

### Types

#### NepaliDateType

```typescript
interface NepaliDateType {
  year: number;
  month: number;
  day: number;
}
```

## Contributing

If you want to contribute to this project, please follow these steps:

- Fork the repository.
- Create a new branch (git checkout -b feature-branch).
- Make your changes and commit them (git commit -am 'Add new feature').
- Push to the branch (git push origin feature-branch).
- Create a new Pull Request.

## License

This project is licensed under the MIT License.
