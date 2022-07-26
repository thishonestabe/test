class BarChart extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `Enter the values seperated by a comma<br>
<input type="text" name="number" id="num"/><br>
<input type="button" value="submit" name="submit" onclick="draw()">
<input type="button" value="Clear" name="Clear" onclick="reset()"><br><br>
<canvas id="myCanvas" width="900" height="500" style="border:1px solid #c3c3c3;">
</canvas>`;

  }
}
function draw() {
  /* Accepting and seperating comma seperated values */
  let n = document.getElementById("num").value;
  let values = n.split(',');

  let canvas = document.getElementById('myCanvas');
  let ctx = canvas.getContext('2d');

  let width = 40; //bar width
  let X = 50; // first bar position
  let base = 200;

  for (let i =0; i<values.length; i++) {
    ctx.fillStyle = '#008080';
    let h = values[i];
    ctx.fillRect(X,canvas.height - h,width,h);

    X +=  width+15;
    /* text to display Bar number */
    ctx.fillStyle = '#4da6ff';
    ctx.fillText('Bar '+i,X-50,canvas.height - h -10);
  }
  /* Text to display scale */
  ctx.fillStyle = '#000000';
  ctx.fillText('Scale X : '+canvas.width+' Y : '+canvas.height,800,10);

}
function reset(){
  const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

customElements.define('bar-chart-element', BarChart);