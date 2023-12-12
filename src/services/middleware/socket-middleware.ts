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
        console.log("ws connect");
        socket = new WebSocket(`${url}`);
      }

      if (type === wsDisconnect && socket) {
        console.log("ws disconnect");
        socket.close(1000, `Websocket closed`);
        socket = null;
      }

      if (socket) {
        socket.onopen = () => {
          dispatch({ type: wsOpen });
        };
        socket.onerror = () => {
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
