var menuEl = document.querySelector("#menu")

window.onscroll = function() {
  if (document.documentElement.scrollTop > 20)
    menuEl.classList.add("sticky")
  else
    menuEl.classList.remove("sticky")

}