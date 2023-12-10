// import {
//   ActionCreatorWithoutPayload,
//   ActionCreatorWithPayload,
// } from "@reduxjs/toolkit";
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
        console.log(url);
        console.log("connect");
        socket = new WebSocket(`${url}`);
      }

      if (type === wsDisconnect) {
        if (socket) {
          console.log("disconnect");
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
          console.log(parsedData);
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

// export type TwsActionTypes = {
//   wsConnect: ActionCreatorWithPayload<string>;
//   wsDisconnect: ActionCreatorWithoutPayload;
//   onOpen: ActionCreatorWithoutPayload;
//   onClose: ActionCreatorWithoutPayload;
//   onError: ActionCreatorWithPayload<string>;
//   onMessage: ActionCreatorWithPayload<any>;
// };

// export const socketMiddleware = (
//     wsActions: TwsActionTypes
//   ): Middleware<{}, RootState> => {
//     return (store) => {
//       let socket: WebSocket | null = null;

//       let url = "";

//       return (next) => (action) => {
//         const { dispatch } = store;
//         const {
//           wsConnect,
//           wsDisconnect,
//           onOpen,
//           onClose,
//           onError,
//           onMessage,
//         } = wsActions;

//         if (wsConnect.match(action)) {
//           console.log("connect");
//           url = action.payload;
//           socket = new WebSocket(url);
//         }

//         if (socket) {
//           socket.onopen = () => {
//             dispatch(onOpen());
//           };

//           socket.onerror = (err) => {
//             console.log("error");
//           };

//           socket.onmessage = (event) => {
//             const { data } = event;
//             const parsedData = JSON.parse(data);
//             dispatch(onMessage(parsedData));
//           };

//           socket.onclose = (event) => {
//             if (event.code !== 1000) {
//               console.log("error");
//               dispatch(onError(event.code.toString()));
//             }
//             console.log("close");
//             dispatch(onClose());
//           };

//           if (wsDisconnect.match(action)) {
//             console.log("disconnect");
//             socket.close(1000, `Websocket closed`);
//             dispatch(onClose());
//           }
//         }

//         next(action);
//       };
//     };
//   };
