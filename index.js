document.querySelector(".submit").addEventListener("click", submit);

let alertError = document.querySelector(".alert");
let image = document.querySelector(".img");
let container = document.querySelector(".container");

function submit() {
  const value = document.querySelector("input").value.replace(/\s/g, "");
  const url = `https://api.github.com/users/${value}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (value) {
        document.querySelector(".userName").textContent = data.name;
        document.querySelector("img").src = data.avatar_url;
        document.querySelector(".followers").textContent = data.followers;
        document.querySelector(".following").textContent = data.following;
        document.querySelector(".repos").textContent = data.public_repos;
        document.querySelector(".created").textContent = new Date(
          data.created_at
        ).toLocaleString();
        document.querySelector(".updated").textContent = new Date(
          data.updated_at
        ).toLocaleDateString();
        alertError.classList.add("hidden");
        image.classList.toggle("hidden");
        container.classList.toggle("hidden");
      } else {
        alertError.classList.toggle("hidden");
      }
    });
  container.classList.add("hidden");
  image.classList.add("hidden");
}
