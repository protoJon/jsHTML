//Init vars
var WindowW = window.innerWidth;
var WindowH = window.innerHeight;
var FPSVal = 0
var c = document.getElementById("Canvas");
var ctx = c.getContext("2d");
c.width = WindowW
c.height = WindowH

var fps = {
    startTime: 0,
    frameNumber: 0,
    getFPS: function() {
        this.frameNumber++;
        var d = new Date().getTime(),
            currentTime = (d - this.startTime) / 1000,
            result = Math.floor((this.frameNumber / currentTime));
        if (currentTime > 1) {
            this.startTime = new Date().getTime();
            this.frameNumber = 0;
        }
        return result;
    }
};

function RenderFrame() {
	ctx.globalAlpha = 0.75;
	ctx.fillStyle = "rgb(60, 180, 40)";
	ctx.fillRect(0, 0, c.width, c.height);
	ctx.globalAlpha = 1;
	ctx.font = "23px Helvitica Nue";
	ctx.fillStyle = "rgb(255, 255, 255)";
	FPSVal = fps.getFPS();
	ctx.fillText("this is text", c.width / 2, c.height /2);
	RenderDebug(c.width - 100, 10);
	
	requestAnimationFrame(RenderFrame);
}

function RenderDebug(x, y){
	ctx.globalAlpha = 1;
	ctx.font = "10px Helvitica Nue";
	ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.fillText(FPSVal, x, y);
	
}

RenderFrame();


function Resize() {
	WindowW = window.innerWidth;
	WindowH = window.innerHeight;
	c.width = WindowW;
	c.height = WindowH;
}

window.addEventListener("resize", Resize) ;
