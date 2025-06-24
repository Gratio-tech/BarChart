export interface ChartColors {
    text?: string;
    gridLine?: string;
    targetLine?: string;
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
    customStyles?: {
        bar?: React.CSSProperties;
        xAxis?: React.CSSProperties;
        yAxis?: React.CSSProperties;
    };
}
export declare const BarChart: ({ valuesData, labelsData, targetLine, className, colors, height, noDataText, barWidth, showXAxis, showYAxis, customStyles }: BarChartProps) => import("react/jsx-runtime").JSX.Element;
export default BarChart;
