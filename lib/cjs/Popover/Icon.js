import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Icon = ({ className, size = 24, ...rest }) => {
    return (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: className, ...rest, children: [_jsx("path", { d: "M18 6 6 18" }), _jsx("path", { d: "m6 6 12 12" })] }));
};
export default Icon;
