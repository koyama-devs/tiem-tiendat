// ZaloIcon.tsx
import React from "react";

const ZaloIcon: React.FC<{ size?: number }> = ({ size = 24 }) => (
  <img
    src="/icons/zalo.png" // bạn đặt file zalo.svg trong public/icons
    alt="Zalo"
    width={size}
    height={size}
    style={{ display: "block" }}
  />
);

export default ZaloIcon;
