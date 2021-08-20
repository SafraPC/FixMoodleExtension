//Start extension
const start = () => {
  fixSidebar();
};

//fix moodle sidebar
const fixSidebar = () => {
  const sidebar = document.querySelector("#nav-drawer > nav > ul");
  for (let i = 0; i < sidebar.childElementCount; i++) {
    sidebar.children[i].style.wordBreak = "break-word";
    console.log("sidebar arrumada com sucesso");
  }
};

start();
