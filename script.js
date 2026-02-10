const form = document.getElementById("contactForm");
const statusText = document.getElementById("status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };

  try {
    const res = await fetch("https://webpage-project.onrender.com/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const result = await res.json();
    statusText.innerText = result.message;
    statusText.style.color = "green";

    form.reset();
  } catch (err) {
    statusText.innerText = "Error: Message not sent!";
    statusText.style.color = "red";
  }
});
