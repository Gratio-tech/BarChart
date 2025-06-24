import { defaultColors, gerDefaultStyles } from './defaultStyles';

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
    barStyle: React.CSSProperties,
    XAxisStyle: React.CSSProperties,
    YAxisStyle: React.CSSProperties
  }
}

export const BarChart = ({
  data,
  valueField,
  labelField,
  targetLine,
  className,
  colors = {},
  height = 300,
  noDataText,
  barWidth,
  showXAxis = true,
  showYAxis = false,
  customStyles
}: BarChartProps) => {
  const chartColors = { ...defaultColors, ...colors };
  const hasData = Array.isArray(data) &&
    data.filter(item => item && typeof item[valueField] === 'number' && item[valueField] > 0).length > 0;

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
  const barStyles = customStyles && customStyles.barStyle ? customStyles.barStyle : {};
  const yAxisStyles = customStyles && customStyles.YAxisStyle ? customStyles.YAxisStyle : {};
  const xAxisStyles = customStyles && customStyles.XAxisStyle ? customStyles.XAxisStyle : {};

  const renderYScale = (
    <div className="y-axis" style={{ borderRight: `1px solid ${chartColors.gridLine}`, ...yAxisStyles }}>
      {yScale.map((value) => (
        <div key={value} className="y-tick">
          <span className="y-tick-value" style={{ color: chartColors.text }}>{value}</span>
          <div className="y-tick-line" style={{ borderTop: `1px dashed ${chartColors.gridLine}` }} />
        </div>
      ))}
    </div>
  );

  const barContainerWidth = barWidth && hasData
    ? (barWidth + 4) * data.length
    : undefined;

  return (
    <>
      <style>{gerDefaultStyles()}</style>

      <div className={`barchart-container${className ? ' ' + className : ''}`} style={{ backgroundColor: chartColors.background }}>
        <div className="barchart-content" style={{ height: `${height}px` }}>
          {showYAxis && renderYScale}

          <div className="chart-area">
            <div className="chart-main">
              <div
                className="bars-container"
                style={{ width: barContainerWidth ? `${barContainerWidth}px` : '100%' }}
              >
                {hasData ? data.map((item, index) => {
                  const value = item[valueField];
                  const heightPercent = maxScaleValue > 0 ? (value / maxScaleValue) * 100 : 0;

                  return (
                    <div
                      key={`barchart-${valueField}-${index}-bar`}
                      className="bar-column"
                      style={{ width: barWidth ? `${barWidth}px` : '100%' }}
                    >
                      <div className="bar" style={{ height: `${heightPercent}%`, ...barStyles }} />
                      <div className="bar-label" style={{ color: chartColors.text }}>
                        {item[labelField]}
                      </div>
                    </div>
                  );
                }) : <div className="no-data-badge" style={{ color: chartColors.gridLine }} >{noDataText ? noDataText : 'No data'}</div>}
              </div>

              {showXAxis && hasData && (
                <div
                  className={showYAxis ? "x-axis" : "x-axis with-padding" }
                  style={{ borderTop: `1px solid ${chartColors.gridLine}`, ...xAxisStyles }}
                >
                  {data.map((item, index) => (
                    <div
                      key={`x-axis-${index}`}
                      className="x-tick"
                      style={{
                        color: chartColors.text,
                        width: barWidth ? `${barWidth}px` : 'auto',
                        ...(barWidth ? { margin: '0 2px' } : {})
                      }}
                    >
                      {item[labelField]}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {targetLine !== undefined && targetLine <= maxScaleValue && (
              <div
                className="target-line"
                style={{ borderBottom: `2px dashed ${chartColors.targetLine}`, bottom: `${(targetLine / maxScaleValue) * 100}%` }}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BarChart;
