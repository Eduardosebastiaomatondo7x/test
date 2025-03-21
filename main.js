AFRAME.registerComponent('toggleclick', {
  init: function () {
    this.onClick = this.onClick.bind(this);
    this.el.addEventListener("click", this.onClick);
  },

  onClick: async function() {
    let mediaEl = document.querySelector(this.el.getAttribute("src"));
    
    if (mediaEl) {
      // Basculer la visibilité de l'élément
      this.el.object3D.visible = !this.el.object3D.visible;

      // Contrôler la lecture en fonction de la visibilité
      if (this.el.object3D.visible) {
        // Assurer que c'est un élément vidéo ou audio avant de jouer
        if (mediaEl.tagName === "VIDEO" || mediaEl.tagName === "AUDIO") {
          mediaEl.play();
        }
      } else {
        if (mediaEl.tagName === "VIDEO" || mediaEl.tagName === "AUDIO") {
          mediaEl.pause();
          mediaEl.currentTime = 0;  // Remettre à zéro le temps pour redémarrer
        }
      }
    } else {
      console.warn("Elément source non trouvé :", this.el.getAttribute("src"));
    }
  }
});

