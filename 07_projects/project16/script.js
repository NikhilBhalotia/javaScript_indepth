let userInput = document.querySelector("#user-input");
let userCard = document.querySelector("#user-card");
let debounceTimer;
let allUsers = [];
let dataLoaded = false;

// Fetch all users once
async function loadUsers() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    allUsers = await res.json();
    dataLoaded = true; // ✅ Mark as loaded
  } catch (error) {
    console.error("Error loading users:", error);
  }
}

async function fetchUser(query) {
  if (!dataLoaded) {
    userCard.innerHTML = "<p>Loading user data...</p>";
    return;
  }

  if (!query) {
    userCard.innerHTML = "";
    return;
  }

  // Filter by username OR full name (case-insensitive)
  const filtered = allUsers.filter(
    (user) =>
      user.username.toLowerCase().includes(query.toLowerCase()) ||
      user.name.toLowerCase().includes(query.toLowerCase())
  );

  if (filtered.length > 0) {
    userCard.innerHTML = filtered
      .map(
        (user) => `
                <div class="user">
                  <h3>${user.name}</h3>
                  <p><strong>Username:</strong> ${user.username}</p>
                  <p><strong>Email:</strong> ${user.email}</p>
                  <p><strong>Phone:</strong> ${user.phone}</p>
                </div>
              `
      )
      .join("");
  } else {
    userCard.innerHTML = `<p>No user found</p>`;
  }
}

function debounce(func, delay) {
  return (...args) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func(...args), delay);
  };
}

userInput.addEventListener(
  "input",
  debounce((e) => {
    fetchUser(e.target.value);
  }, 500)
);

// ✅ Load all users when page starts
loadUsers();
