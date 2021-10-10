import io from "socket.io-client";

let socket;

export const init = () => {
  console.log("Sunucuya bağlanılıyor");
  socket = io("http://localhost:3000", {
    transports: ["websocket"],
  });
  socket.on("connect", () => console.log("Sunucuya bağlanıldı"));
};

export const send = (topic, data) => {
  // newVoteOne, newVoteTwo
  if (!socket) {
    return;
  }

  socket.emit(topic, data);
};

export const subscribe = (topic, cb) => {
  // lastVoteOne, lastVoteTwo
  socket.on(topic, (data) => {
    console.log("data", data);
    cb(data);
  });
};
