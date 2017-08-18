function Stage() {
  const g = {
    actions: {},
    keydowns: {},
  };
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");
  g.canvas = canvas;
  g.context = context;
  //  draw
  g.drawImage = function(img) {
    g.context.drawImage(img.img, img.x, img.y);
  };
  // events
  window.addEventListener("keydown",(event) =>{
    g.keydowns[event.key] = true;
  });
  window.addEventListener("keyup",(event) =>{
    g.keydowns[event.key] = false;
  });

  // register
  g.actionRegister = function(key, callback) {
    g.actions[key] = callback;
  };

  // timer
  setInterval(() => {
    // events 
    const actions = Object.keys(g.actions);
    for (let i = 0;  i < actions.length; i++) {
      let key = actions[i];
      if (g.keydowns[key])  {
        g.actions[key]();
      }
    }
    // update
    g.update();
    // clear
    g.context.clearRect(0, 0, g.canvas.width, g.canvas.height);
    // draw
    g.draw();
  }, 1000 / 30);

  return g;
}

export { Stage };