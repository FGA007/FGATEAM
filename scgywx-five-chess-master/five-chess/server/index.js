var module = require("./five");
var app = new module.FiveChess();
app.SetConfig({
	"ListenPort" : 8088,
	"RoomTotal" : 100,
	"MaxClientNum" : 300
});
app.Startup();