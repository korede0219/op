// Toggle the chatbox visibility
function toggleChatbox() {
  const chatContainer = document.getElementById("chatContainer");
  chatContainer.classList.toggle("hidden");
}

// Predefined responses for basic interactivity
const responses = {
  "hello": "Hi there! How can I help?",
  "how are you": "I'm here to assist you with any questions!",
  "what is your name": "I am your friendly AI assistant.",
  "bye": "Goodbye! Have a nice day!"
};

// Get bot response based on user input
function getBotResponse(input) {
  const lowerInput = input.toLowerCase();
  for (const key in responses) {
      if (lowerInput.includes(key)) {
          return responses[key];
      }
  }
  return "I'm sorry, I didn't understand that.";
}

// Add messages to the chatbox
function addMessage(message, className) {
  const chatbox = document.getElementById("chatbox");
  const messageElement = document.createElement("div");
  messageElement.className = `message ${className}`;
  messageElement.innerText = message;
  chatbox.appendChild(messageElement);
  chatbox.scrollTop = chatbox.scrollHeight;
}

// Handle the form submission
document.getElementById("chatForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const userInput = document.getElementById("userInput").value;
  addMessage(userInput, "user-message");
  document.getElementById("userInput").value = "";

  // Get bot response
  const botResponse = getBotResponse(userInput);
  setTimeout(() => addMessage(botResponse, "bot-message"), 500);
});
