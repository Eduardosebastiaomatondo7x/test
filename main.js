AFRAME.registerComponent('toggleclick', {
  init: function () {
    this.onClick = this.onClick.bind(this)
    this.el.addEventListener("click", this.onClick)
  },

  onClick: async function() {
    let ok = document.querySelector(this.el.getAttribute("src"))
    this.el.object3D.visible = !this.el.object3D.visible
    if (this.el.object3D.visible) {
      ok.play()
    } else {
      ok.pause()
      ok.currentTime = 0
    }
  }
});
