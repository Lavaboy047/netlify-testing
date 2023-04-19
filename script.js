const socket = io();

document.getElementById("send").addEventListener("click", () => {
  const message = document.getElementById("message").value;
  socket.emit("message", message);
  document.getElementById("message").value = "";
});

socket.on("message", (message) => {
  const chatbox = document.getElementById("chatbox");
  const newMessage = document.createElement("div");
  newMessage.textContent = message;
  chatbox.appendChild(newMessage);
});
