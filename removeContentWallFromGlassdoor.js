function removeContentWallFromGlassdoor() {
  const main = document.getElementsByClassName("main")
  main[0].style.overflow = "auto"

  const contentWall = document.getElementById("ContentWallHardsell")
  contentWall.remove()
}

removeContentWallFromGlassdoor()