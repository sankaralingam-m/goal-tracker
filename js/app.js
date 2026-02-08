/* ---------- HELPERS ---------- */
function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

function showPopup(msg, type = "success") {
  const popup = document.createElement("div");
  popup.className = `popup ${type}`;
  popup.innerText = msg;
  document.body.appendChild(popup);
  setTimeout(() => popup.remove(), 3000);
}

/* ---------- AUTH ---------- */
function signup(username, password) {
  const users = getUsers();
  if (users.find(u => u.username === username)) {
    showPopup("User already exists", "error");
    return;
  }
  users.push({ username, password });
  saveUsers(users);
  showPopup("Signup successful. Please login.");
}

function login(username, password) {
  const users = getUsers();
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) {
    showPopup("Invalid credentials", "error");
    return;
  }
  sessionStorage.setItem("isLoggedIn", "true");
  sessionStorage.setItem("currentUser", username);
  window.location.href = "dashboard.html";
}

/* ---------- GUARD ---------- */
function protectPage() {
  if (!sessionStorage.getItem("isLoggedIn")) {
    window.location.href = "index.html";
  }
}
notifyHistory.push({
  msg: "Goal completed: Laptop",
  time: new Date().toLocaleString()
});
