# API Documentation

## NepaliDateConverter

Static methods for converting and managing Nepali dates.

### Methods

#### `validateBsDate(bsDate: NepaliDateType): boolean`

Validates if a given Nepali date is valid.

```typescript
const date = { year: 2080, month: 13, day: 1 };
const isValid = NepaliDateConverter.validateBsDate(date); // false (invalid month)
```

#### `getTodayBs(): NepaliDateType`

Returns today's date in Nepali calendar.

```typescript
const today = NepaliDateConverter.getTodayBs();
```

#### `getWeekDay(bsDate: NepaliDateType): number`

Returns the day of week (0 = Sunday, 6 = Saturday) for a given Nepali date.

```typescript
const weekday = NepaliDateConverter.getWeekDay({
  year: 2080,
  month: 1,
  day: 1,
});
```

#### `adToBs(adDate: Dayjs | Date | string): NepaliDateType`

Converts an AD date to BS (Nepali) date.

```typescript
const nepaliDate = NepaliDateConverter.adToBs(new Date());
// or
const nepaliDate = NepaliDateConverter.adToBs("2023-08-15");
```

#### `bsToAd(bsDate: NepaliDateType): Dayjs`

Converts a BS (Nepali) date to AD date.

```typescript
const adDate = NepaliDateConverter.bsToAd({
  year: 2080,
  month: 8,
  day: 15,
});
```

#### `getNepaliDate(adDate: Date): NepaliDateType`

Convenience method to get Nepali date from AD date.

```typescript
const nepaliDate = NepaliDateConverter.getNepaliDate(new Date());
```

#### `getEnglishDate(npYear: number, npMonth: number, npDay: number): Date`

Convenience method to get AD date from Nepali date components.

```typescript
const adDate = NepaliDateConverter.getEnglishDate(2080, 8, 15);
```

#### `getDaysInMonth(year: number, month: number): number`

Returns the number of days in a given Nepali month.

```typescript
const days = NepaliDateConverter.getDaysInMonth(2080, 8);
```

## Types

### NepaliDateType

```typescript
interface NepaliDateType {
  year: number;
  month: number;
  day: number;
}
```
