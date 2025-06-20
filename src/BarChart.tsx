import { defaultColors, defaultStyles } from './defaultStyles';

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

export const BarChart = ({
  data,
  valueField,
  labelField,
  targetLine,
  className,
  colors = {},
  height = 300,
  noDataText
}: BarChartProps) => {
  const chartColors = { ...defaultColors, ...colors };
  const hasData = Array.isArray(data) && data.length > 0;

  const maxValue = hasData ? Math.max(
    ...data.map(item => item[valueField]),
    targetLine || 0
  ) : 0;

  const generateYScale = () => {
    if (maxValue === 0) return [0];
    const scale = [];
    for (let i = 0; i <= 100; i += 25) {
      scale.push(Math.round((i / 100) * maxValue));
    }
    return scale;
  };

  const yScale = generateYScale();
  const maxScaleValue = Math.max(...yScale);

  const renderYScale =
    <div className="y-axis" style={{ borderRight: `1px solid ${chartColors.gridLine}` }}>
      {yScale.map((value) => (
        <div key={value} className="y-tick">
          <span className="y-tick-value" style={{ color: chartColors.text }}>{value}</span>
          <div className="y-tick-line" style={{ borderTop: `1px dashed ${chartColors.gridLine}` }} />
        </div>
      ))}
    </div>

  return (
    <>
      <style>{defaultStyles}</style>

      <div className={`barchart-container${className ? ' ' + className : ''}`} style={{ backgroundColor: chartColors.background }}>
        <div className="barchart-content" style={{ height: `${height}px` }}>
          {renderYScale}

          <div className="chart-area">
            {targetLine !== undefined && targetLine <= maxScaleValue && (
              <div
                className="target-line"
                style={{ borderBottom: `2px dashed ${chartColors.targetLine}`, bottom: `${(targetLine / maxScaleValue) * 100}%` }}
              />
            )}

            <div className="bars-container">
              {hasData ? data.map((item, index) => {
                const value = item[valueField];
                const heightPercent = maxScaleValue > 0 ? (value / maxScaleValue) * 100 : 0;

                return (
                  <div key={`barchart-${valueField}-${index}-bar`} className="bar-column">
                    <div className="bar" style={{ height: `${heightPercent}%`, background: chartColors.bar }} />
                    <div className="bar-label" style={{ color: chartColors.text }}>
                      {item[labelField]}
                    </div>
                  </div>
                );
              }) : <div className="no-data-badge" style={{ color: chartColors.gridLine }} >{noDataText ? noDataText : 'No data'}</div>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BarChart;
