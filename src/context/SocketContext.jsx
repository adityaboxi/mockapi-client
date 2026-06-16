import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext(null);

export const useSocket = () => {
  const context = useContext(SocketContext);
  if (context === undefined) {
    throw new Error("useSocket must be used within a SocketProvider");
  }
  return context;
};

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Force WebSocket transport to bypass Render proxy issues
    const socketInstance = io(import.meta.env.VITE_API_BASE_URL, {
      withCredentials: true,
      transports: ["websocket"], // 👈 This is critical for Render
    });

    // Log success
    socketInstance.on("connect", () => {
      console.log("✅ Socket connected successfully");
    });

    // Log the exact error
    socketInstance.on("connect_error", (err) => {
      console.error("❌ Socket connection error:", err.message);
    });

    setSocket(socketInstance);

    return () => {
      socketInstance.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};