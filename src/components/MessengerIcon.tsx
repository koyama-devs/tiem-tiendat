// MessengerIcon.tsx
import React from "react";

const MessengerIcon: React.FC<{ size?: number }> = ({ size = 24 }) => (
  <img
    src="/icons/messenger.png" // bạn đặt file messenger.svg trong public/icons
    alt="Messenger"
    width={size}
    height={size}
    style={{ display: "block" }}
  />
);

export default MessengerIcon;
