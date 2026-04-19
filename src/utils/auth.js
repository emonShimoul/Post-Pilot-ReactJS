export const registerUser = (user) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
};

export const loginUser = (email, password) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  return users.find(
    (user) => user.email === email && user.password === password
  );
};

export const setCurrentUser = (user) => {
  localStorage.setItem("currentUser", JSON.stringify(user));
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("currentUser"));
};

export const logoutUser = () => {
  localStorage.removeItem("currentUser");
};