console.log("entrou");
if (window.netlifyIdentity) {
  console.log("tem identity");
  window.netlifyIdentity.on("init", (user) => {
    console.log("iniciou");
    if (!user) {
      console.log("não é usuario");
      window.netlifyIdentity.on("login", () => {
        console.log("fez login");
        document.location.href = "/admin/";
      });
    }
  });
}
