const postsList = document.getElementById("postsList");

async function afficherPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    // Prendre les 5 premiers posts et les afficher dans le DOM
    posts.slice(0, 5).forEach(post => {
      const li = document.createElement("li");
      li.textContent = post.title;
      postsList.appendChild(li);
    });
  } catch (error) {
    console.error("Erreur :", error);
  }
}

afficherPosts();
