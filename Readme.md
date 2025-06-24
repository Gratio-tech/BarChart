## BarChart
Модуль для отображения простой столбчатой диаграммы в реакт-компонентах.

Пакет [есть в публичном npm-репозитории](https://www.npmjs.com/package/@gratio/bar-chart).

Установка:
```bash
npm i @gratio/bar-chart
```

### Использование:

```tsx
const sampleData = [
  { calories: 52, proteins: 0.9, fats: 2.1, date: '01.02.23' },
  { calories: 177, proteins: 7.5, fats: 9.5, date: '12.02.23' },
  { calories: 0, proteins: 0, fats: 0, date: '15.02.23' }
];

<BarChart
  data={sampleData}
  valueField="calories" // ключ поля, из которого брать значения
  labelField="date" // ключ поля, из которого брать подписи
  colors={{ background: '#fff' }}
  height={300} // px
  targetLine=""
  className="container-class"
  noDataText="Нет данных"
  barWidth={15}
  showXAxis={false}
  showYAxis={true}
  customStyles={
    bar: { background: 'linear-gradient(180deg, #83EC4A 0%, #585858 84.62%)' },
    YAxis: { border: 'none' }
  }
/>
```

### Типы

```typescript
export interface ChartColors {
  text?: string;
  gridLine?: string;
  targetLine?: string; // статичная линия - маркер цели
  background?: string;
}

export interface BarChartProps {
  data: Array<Record<string, number>>;
  valueField: string;
  labelField: string;
  targetLine?: number;
  className?: string;
  colors?: ChartColors;
  height?: number;
  noDataText?: string;
  barWidth?: number;
  showXAxis?: boolean;
  showYAxis?: boolean;
  customStyles?: { // Можно полностью переписать стили осей и столбцов
    bar: React.CSSProperties,
    XAxis: React.CSSProperties,
    YAxis: React.CSSProperties
  }
}
```
