import { Box, Fab, Tooltip } from "@mui/material";
import React from "react";
import MessengerIcon from "./MessengerIcon";
import ZaloIcon from "./ZaloIcon";

const FloatingChatButtons: React.FC = () => {
  const handleZaloClick = (): void => {
    window.open("https://zalo.me/84822165197", "_blank");
  };

  const handleMessengerClick = (): void => {
    window.open("https://m.me/your-id", "_blank");
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 24,
        right: 24,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        zIndex: 2000,
      }}
    >
      <Tooltip title="Chat qua Zalo" placement="left">
        <Fab
          aria-label="zalo"
          onClick={handleZaloClick}
          sx={{
            bgcolor: "rgba(0,104,255,0.2)",
            boxShadow: "none",
            "&:hover": { bgcolor: "rgba(0,104,255,0.35)" },
            animation: "pulseZalo 2s infinite, wiggle 3s infinite",
          }}
        >
          <ZaloIcon size={28} />
        </Fab>
      </Tooltip>

      <Tooltip title="Chat qua Messenger" placement="left">
        <Fab
          aria-label="messenger"
          onClick={handleMessengerClick}
          sx={{
            bgcolor: "rgba(0,132,255,0.2)",
            boxShadow: "none",
            "&:hover": { bgcolor: "rgba(0,132,255,0.35)" },
            animation: "pulseMessenger 2s infinite, wiggle 3.5s infinite",
          }}
        >
          <MessengerIcon size={28} />
        </Fab>
      </Tooltip>

      <style>
        {`
          @keyframes pulseZalo {
            0% { box-shadow: 0 0 0 0 rgba(0,104,255,0.6); }
            70% { box-shadow: 0 0 0 14px rgba(0,104,255,0); }
            100% { box-shadow: 0 0 0 0 rgba(0,104,255,0); }
          }

          @keyframes pulseMessenger {
            0% { box-shadow: 0 0 0 0 rgba(0,132,255,0.6); }
            70% { box-shadow: 0 0 0 14px rgba(0,132,255,0); }
            100% { box-shadow: 0 0 0 0 rgba(0,132,255,0); }
          }

          @keyframes wiggle {
            0%, 100% { transform: rotate(0deg); }
            15% { transform: rotate(-10deg); }
            30% { transform: rotate(10deg); }
            45% { transform: rotate(-6deg); }
            60% { transform: rotate(6deg); }
            75% { transform: rotate(-2deg); }
          }
        `}
      </style>
    </Box>
  );
};

export default FloatingChatButtons;
