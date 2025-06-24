## BarChart
Модуль для отображения простой столбчатой диаграммы в реакт-компонентах.

Пакет [есть в публичном npm-репозитории](https://www.npmjs.com/package/@gratio/bar-chart).

Установка:
```bash
npm i @gratio/bar-chart
```

### Использование:

```tsx
const sampleData = [ 1223, 323, 122, 43, 555 ];
const labels = [ 'Пн', 'Вт', 'Ср', 'Чт', 'Пт' ];

<BarChart
  valuesData={sampleData} // Массив значений
  labelsData={labels} // Массив с подписями горизонтальной оси
  colors={{ background: '#fff' }}
  height={300} // px
  targetLine=""
  className="container-class"
  noDataText="Нет данных"
  barWidth={15}
  showXAxis={true}
  showYAxis={true}
  customStyles={{
    bar: { background: 'linear-gradient(180deg, #83EC4A 0%, #585858 84.62%)' },
    yAxis: { borderRight: '0 !important' }, // Чтобы спрятать линию оси
    xAxis: { marginRight: '10px', borderTopWidth: '2px' }
  }}
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
  valuesData: number[];
  labelsData: string[] | number[];
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
