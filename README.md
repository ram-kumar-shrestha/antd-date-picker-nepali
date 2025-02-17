# Nepali Date Converter

A TypeScript utility for converting between Gregorian (AD) and Nepali (BS) dates with high accuracy and type safety.

## Features

- Convert AD dates to BS (Nepali) dates and vice versa
- Validate Nepali dates
- Get weekday information
- Get days in Nepali months
- Type-safe with TypeScript support

## Installation

```bash
npm install antd-date-picker-nepali
```

## Quick Start

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

## API Documentation

For detailed information about the NepaliDateConverter utility and its methods, please refer to the [Converter Documentation](./CONVERTER.md).

## Components

### NepaliDatePicker

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

### Custom Props

Besides Antd default props, the `NepaliDatePicker` component also accepts the following custom prop:

- `type`: A string that determines the type of date picker to display. It can be either `"en"` for the default Ant Design DatePicker or `"ne"` for the custom Nepali date picker. If value not provided gregorian calender will be rendered.

## Contributing

If you want to contribute to this project, please follow these steps:

- Fork the repository.
- Create a new branch (git checkout -b feature-branch).
- Make your changes and commit them (git commit -am 'Add new feature').
- Push to the branch (git push origin feature-branch).
- Create a new Pull Request.

## Author

Ram Kumar Shrestha

## License

This project is licensed under the MIT License.
