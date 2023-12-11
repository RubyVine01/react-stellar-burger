import { Middleware } from "redux";
import { RootState } from "../store";

export type TwsActionTypes = {
  wsConnect: string;
  wsDisconnect: string;
  wsOpen: string;
  wsError: string;
  wsMessage: string;
  wsClose: string;
};

export const socketMiddleware = (
  wsActions: TwsActionTypes
): Middleware<{}, RootState> => {
  return (store) => {
    let socket: WebSocket | null = null;
    let url = "";

    return (next) => (action) => {
      const { type, payload } = action;
      const { dispatch } = store;
      const { wsConnect, wsDisconnect, wsOpen, wsError, wsMessage, wsClose } =
        wsActions;

      if (type === wsConnect) {
        url = payload;
        // console.log("connect");
        socket = new WebSocket(`${url}`);
      }

      if (type === wsDisconnect) {
        if (socket) {
          // console.log("disconnect");
          socket.close(1000, `Websocket closed`);
          socket = null;
        }
      }

      if (socket) {
        socket.onopen = (event) => {
          dispatch({ type: wsOpen });
        };
        socket.onerror = (event) => {
          dispatch({ type: wsError });
        };
        socket.onmessage = (event) => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          dispatch({ type: wsMessage, payload: parsedData });
        };
        socket.onclose = (event) => {
          dispatch({ type: wsClose, payload: event.code.toString() });
        };
      }

      next(action);
    };
  };
};
