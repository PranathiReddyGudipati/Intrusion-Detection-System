import { useEffect, useState, useRef, useCallback } from 'react';
import { io } from 'socket.io-client';

const SOCKET_URL = window.location.port === '3000' ? '' : 'http://localhost:5001';

export function useSocket() {
  const [isConnected, setIsConnected] = useState(false);
  const socketRef = useRef(null);

  useEffect(() => {
    const socket = io(SOCKET_URL, { transports: ['websocket', 'polling'] });
    socketRef.current = socket;

    socket.on('connect', () => {
      setIsConnected(true);
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const subscribe = useCallback((event, callback) => {
    if (socketRef.current) {
      socketRef.current.on(event, callback);
    }
    return () => {
      socketRef.current?.off(event, callback);
    };
  }, []);

  return { isConnected, subscribe, socket: socketRef.current };
}

export default useSocket;
