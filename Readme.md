## BarChart
Модуль для отображения простой столбчатой диаграммы.

### Использование компонента:

```tsx
const sampleData = [
  { calories: 52, proteins: 0.9, fats: 2.1, date: '01.02.23' },
  { calories: 177, proteins: 7.5, fats: 9.5, date: '12.02.23' },
  { calories: 0, proteins: 0, fats: 0, date: '14.02.23' },
  { calories: 0, proteins: 0, fats: 0, date: '15.02.23' }
];

<BarChart
  data={sampleData}
  valueField="calories" // ключ поля, из которого брать значения
  labelField="date" // ключ поля, из которого брать подписи
  colors={{ bar: 'linear-gradient(180deg, #83EC4A 0%, #585858 84.62%)' }}
  height={300} // px
/>
```

### Типы

```typescript
export interface ChartColors {
  bar?: string; // цвет столбца, либо градиент, например linear-gradient(180deg, #83EC4A 0%, #585858 84.62%)
  text?: string;
  gridLine?: string;
  targetLine?: string; // статичная линия - маркер цели
  background?: string;
}

export interface BarChartProps {
  data: Array<Record<string, any>>;
  valueField: string;
  labelField: string;
  targetLine?: number;
  className?: string;
  colors?: ChartColors;
  height?: number;
}
```
