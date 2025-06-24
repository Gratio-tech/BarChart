import { ChartColors } from './BarChart';

export const defaultColors: ChartColors = {
  text: '#666',
  gridLine: 'rgba(220,220,220, 0.6)',
  targetLine: '#ff6b6b',
  background: 'transparent'
};

export const gerDefaultStyles = (defaulMargin?: number): string => {
  const defaultGap = (typeof defaulMargin === 'number') ? defaulMargin : 10;
  return (`
  .barchart-container { width: 100%; margin: 0 auto; padding: ${defaultGap}px 0; }
  .barchart-container .barchart-content { display: flex; position: relative; }
  .barchart-container .y-axis { display: flex; flex-direction: column-reverse; justify-content: space-between; padding-right: 8px; margin-right: ${defaultGap}px; }
  .barchart-container .y-tick { display: flex; align-items: center; height: 0; position: relative; }
  .barchart-container .y-tick-value { font-size: 12px; min-width: 30px; text-align: right; }
  .barchart-container .y-tick-line { position: absolute; left: 38px; right: -${defaultGap}px; z-index: 1; }
  .barchart-container .x-axis { display: flex; justify-content: space-around; padding-top: 5px; flex-shrink: 0; }
  .barchart-container .x-axis.with-padding { margin: ${defaultGap}px;  }
  .barchart-container .x-tick { font-size: 11px; overflow: hidden; text-overflow: ellipsis; text-align: center; }
  .barchart-container .target-line { position: absolute; left: 0; right: 0; height: 1px; z-index: 2; }

  .barchart-container .chart-area { flex: 1; display: flex; flex-direction: column; position: relative; }

  .barchart-container .chart-main { display: flex; flex-direction: column; flex: 1; overflow-x: auto; }
  .barchart-container .chart-main::-webkit-scrollbar { display: none; }
  .barchart-container .chart-main { -ms-overflow-style: none; scrollbar-width: none; }

  .barchart-container .bars-container { flex: 1; display: flex; justify-content: space-around; align-items: flex-end; padding: 0 ${defaultGap/2}px; }
  .barchart-container .bar-column { display: flex; flex-direction: column; align-items: center; justify-content: end; height: 100%; margin: 0 2px; }
  .barchart-container .bar-column .bar { max-width: 50px; border-radius: 8px; background: #01adff; transition: height 0.4s ease; z-index: 3; }
  .barchart-container .bar-column .bar-label { margin-top: 8px; font-size: 11px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%; text-align: center; }
  .barchart-container .no-data-badge { align-self: center; }
`)};
