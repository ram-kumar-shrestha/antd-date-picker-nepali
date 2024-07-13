# antd-date-picker-nepali

This is an Ant Design component for a Nepali datepicker.

## Description

`antd-date-picker-nepali` provides a date picker component with a calendar in the Bikram Sambat (BS) format, similar to the Ant Design DatePicker component.

## Installation

You can install this package using npm or yarn:

```bash
npm install antd-date-picker-nepali
```

or

```bash
yarn add antd-date-picker-nepali
```

## Usage

First, ensure you have Ant Design and the required dependencies installed in your project:

```bash
yarn add antd
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

## Props

The NepaliDatePicker component supports all the same props as the Ant Design DatePicker component. Please refer to the [Ant Design DatePicker documentation](https://ant.design/components/date-picker/) for detailed information.

## Props

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

## Props

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
