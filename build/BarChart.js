var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { defaultColors, defaultStyles } from './defaultStyles';
export var BarChart = function (_a) {
    var data = _a.data, valueField = _a.valueField, labelField = _a.labelField, targetLine = _a.targetLine, className = _a.className, _b = _a.colors, colors = _b === void 0 ? {} : _b, _c = _a.height, height = _c === void 0 ? 300 : _c, noDataText = _a.noDataText;
    var chartColors = __assign(__assign({}, defaultColors), colors);
    var hasData = Array.isArray(data) && data.length > 0;
    var maxValue = hasData ? Math.max.apply(Math, __spreadArray(__spreadArray([], data.map(function (item) { return item[valueField]; }), false), [targetLine || 0], false)) : 0;
    var generateYScale = function () {
        if (maxValue === 0)
            return [0];
        var scale = [];
        for (var i = 0; i <= 100; i += 25) {
            scale.push(Math.round((i / 100) * maxValue));
        }
        return scale;
    };
    var yScale = generateYScale();
    var maxScaleValue = Math.max.apply(Math, yScale);
    var renderYScale = _jsx("div", { className: "y-axis", style: { borderRight: "1px solid ".concat(chartColors.gridLine) }, children: yScale.map(function (value) { return (_jsxs("div", { className: "y-tick", children: [_jsx("span", { className: "y-tick-value", style: { color: chartColors.text }, children: value }), _jsx("div", { className: "y-tick-line", style: { borderTop: "1px dashed ".concat(chartColors.gridLine) } })] }, value)); }) });
    return (_jsxs(_Fragment, { children: [_jsx("style", { children: defaultStyles }), _jsx("div", { className: "barchart-container".concat(className ? ' ' + className : ''), style: { backgroundColor: chartColors.background }, children: _jsxs("div", { className: "barchart-content", style: { height: "".concat(height, "px") }, children: [renderYScale, _jsxs("div", { className: "chart-area", children: [targetLine !== undefined && targetLine <= maxScaleValue && (_jsx("div", { className: "target-line", style: { borderBottom: "2px dashed ".concat(chartColors.targetLine), bottom: "".concat((targetLine / maxScaleValue) * 100, "%") } })), _jsx("div", { className: "bars-container", children: hasData ? data.map(function (item, index) {
                                        var value = item[valueField];
                                        var heightPercent = maxScaleValue > 0 ? (value / maxScaleValue) * 100 : 0;
                                        return (_jsxs("div", { className: "bar-column", children: [_jsx("div", { className: "bar", style: { height: "".concat(heightPercent, "%"), background: chartColors.bar } }), _jsx("div", { className: "bar-label", style: { color: chartColors.text }, children: item[labelField] })] }, "barchart-".concat(valueField, "-").concat(index, "-bar")));
                                    }) : _jsx("div", { className: "no-data-badge", style: { color: chartColors.gridLine }, children: noDataText ? noDataText : 'No data' }) })] })] }) })] }));
};
export default BarChart;
