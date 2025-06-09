declare module '*.png';

declare module '*.jpg';

declare module "*.svg" {
    import React from "react";
    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}

declare const __PLATFORM__: "desktop" | "mobile";
declare const __ENV__: "production" | "desktop";