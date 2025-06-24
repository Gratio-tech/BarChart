export interface ChartColors {
    text?: string;
    gridLine?: string;
    targetLine?: string;
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
    customStyles?: {
        barStyle: React.CSSProperties;
        XAxisStyle: React.CSSProperties;
        YAxisStyle: React.CSSProperties;
    };
}
export declare const BarChart: ({ data, valueField, labelField, targetLine, className, colors, height, noDataText, barWidth, showXAxis, showYAxis, customStyles }: BarChartProps) => import("react/jsx-runtime").JSX.Element;
export default BarChart;
