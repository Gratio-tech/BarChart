export interface ChartColors {
    bar?: string;
    text?: string;
    gridLine?: string;
    targetLine?: string;
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
    noDataText?: string;
}
export declare const BarChart: ({ data, valueField, labelField, targetLine, className, colors, height, noDataText }: BarChartProps) => import("react/jsx-runtime").JSX.Element;
export default BarChart;
