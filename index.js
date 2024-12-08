       function showWork() {
           //document.querySelector('header').innerHTML = "Work";
           //document.getElementById('p1').innerText = "work";
           location.href = "index.html";

       }

       function showBlog() {
           //document.querySelector('header').innerHTML = "Blog";
           //document.getElementById('p1').innerText = "blog<br>ggggg";
           location.href = "indexBlog.html";
       }
function showHometown() {
           //document.querySelector('header').innerHTML = "Blog";
           //document.getElementById('p1').innerText = "blog<br>ggggg";
           location.href = "indexPhotography.html";
       }
function showRacing() {
           //document.querySelector('header').innerHTML = "Blog";
           //document.getElementById('p1').innerText = "blog<br>ggggg";
           location.href = "indexRacing.html";
       }
function showSoul() {
           //document.querySelector('header').innerHTML = "Blog";
           //document.getElementById('p1').innerText = "blog<br>ggggg";
           location.href = "indexSoulWare.html";
       }
function showThis() {
           //document.querySelector('header').innerHTML = "Blog";
           //document.getElementById('p1').innerText = "blog<br>ggggg";
           location.href = "thisAndThat.html";
       }
function generate() {
            var c = document.getElementById("myCanvas");
            var ctx = c.getContext("2d");
            ctx.fillStyle = "rgb(" + 255+ "," + 255 + "," + 255 + ")";
                    ctx.fillRect(0, 0, 1800, 990);
            var yIter=11;
            var arrayY=[];
            for (let k = 0; k < yIter; k++) {
                arrayY.push(Math.floor(Math.random() * 990));
            }
            arrayY.push(0);
            arrayY.push(990);
            arrayY.sort(function(a, b) {
                return a - b;});
            
            for (let vert=0; vert<yIter+1; vert++) {
            var heigth = arrayY[vert+1]-arrayY[vert];
            var y=arrayY[vert];
            var arrayX = [];
            var xIter = 9;
            var xRes = 1800;
            for (let i = 0; i < xIter; i++) {
                arrayX.push(Math.floor(Math.random() * xRes));
            }
            arrayX.push(0);
            arrayX.push(xRes);
            arrayX.sort(function(a, b) {
                return a - b;
            });
                

            for (let j = 0; j < xIter+1; j++) {
                var red = Math.floor(Math.random() * 256);
                var green = Math.floor(Math.random() * 256);
                var blue = Math.floor(Math.random() * 256);
                var redc = 255 - red;
                var greenc = 255 - green;
                var bluec = 255 - blue;

                if (j == 0) {
                    //var y = 0;
                    var x = 0
                    var x2 = arrayX[j + 1];
                    var width = Math.floor(0.5 * x2);
                    //var heigth = 50;
                    ctx.fillStyle = "rgb(" + red + "," + green + "," + blue + ")";
                    ctx.fillRect(x, y, width, heigth);
                    ctx.fillStyle = "rgb(" + redc + "," + greenc + "," + bluec + ")";
                    ctx.fillRect(width, y, width, heigth);
                }

                if (j != 0) {
                    //var y = 0;
                    var x = arrayX[j];
                    var x2 = arrayX[j + 1];
                    var width = Math.floor(0.5 * (x2-x));
                    //var heigth = 50;
                    ctx.fillStyle = "rgb(" + red + "," + green + "," + blue + ")";
                    ctx.fillRect(x, y, width, heigth);
                    ctx.fillStyle = "rgb(" + redc + "," + greenc + "," + bluec + ")";
                    ctx.fillRect(x+width, y, width, heigth);
                }
            }
            arrayX.length = 0;
        }
        }