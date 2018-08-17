// FOR REUSE:
var SPLASH_NETWORK = {
	"contagion":0,
	"peeps":[[-408,-115,0],[290,-143,0],[400,-221,0],[-221,373,0],[-214,-378,0],[358,357,0],[-86,-420,0],[269,-369,0],[6,-324,0],[124,299,0],[-550,-119,0],[469,137,0],[366,80,0],[176,381,0],[-452,-217,0],[43,597,0],[238,276,0],[300,120,0],[22,416,0],[373,226,0],[-275,-172,0],[-113,-303,0],[-117,419,0],[-324,5,0],[156,-375,0],[-580,-250,0],[416,-111,0],[-215,-243,0],[-316,-65,0],[33,322,0],[112,456,0],[363,487,0],[-455,13,0],[95,-310,0],[302,-268,0],[507,-313,0],[254,200,0],[207,-249,0],[-177,271,0],[-77,315,0],[-357,387,0],[-462,305,0],[-332,261,0],[-258,195,0],[-556,184,0],[-312,87,0],[600,19,0],[593,158,0],[562,-188,0],[-249,534,0],[-318,-295,0],[-592,55,0],[-99,-541,0],[528,282,0],[322,-31,0],[241,542,0],[-244,-540,0],[-356,-469,0],[-435,-359,0],[456,-11,0],[-382,507,0],[22,-475,0],[14,-611,0],[-89,571,0],[396,-446,0],[284,-521,0],[152,-537,0],[-399,172,0]],
	"connections":[[24,37,0],[37,1,0],[1,2,0],[26,1,0],[34,1,0],[13,9,0],[9,30,0],[30,29,0],[29,9,0],[9,18,0],[18,29,0],[18,30,0],[30,13,0],[13,29,0],[18,13,0],[36,19,0],[19,5,0],[19,12,0],[19,16,0],[17,19,0],[11,19,0],[14,25,0],[10,25,0],[10,14,0],[28,20,0],[20,0,0],[0,32,0],[8,21,0],[6,8,0],[21,27,0],[4,21,0],[4,27,0],[21,6,0],[39,3,0],[3,38,0],[38,22,0],[22,39,0],[39,38,0],[22,3,0],[6,4,0],[23,32,0],[42,40,0],[40,41,0],[41,42,0],[37,7,0],[37,33,0],[45,43,0],[47,46,0],[55,31,0],[57,56,0],[58,50,0],[59,54,0],[60,49,0],[62,52,0],[62,61,0],[63,15,0],[64,65,0],[65,66,0],[44,51,0],[48,35,0],[67,43,0],[67,45,0],[61,52,0],[23,0,0],[28,0,0],[53,47,0]]
};

SLIDES.push(

{
	chapter: "Preloader",

	add:[

		// Splash
		{
			type:"sim",
			x:960/2, y:540/2,
			fullscreen: true,
			network: SPLASH_NETWORK,
			options:{
				splash: true,
				randomStart: 20
			}
		},

		// Words
		{
			type:"box",
			id:"title",
			text:"preloader_title", x:180, y:125, w:600, h:230, align:"center"
		},
		{
			type:"box",
			id:"button",
			text:"preloader_button", x:180, y:385, w:600, h:100, align:"center"
		}

	],

	onstart: function(slideshow){
		
		var button = slideshow.boxes.boxes[1].children[0];
		button.setAttribute("disabled", true);

		// START, FOR REAL
		button.onclick = function(){
			publish("START");
			publish("sound/button");
		};

	},

	onupdate: function(slideshow, state){

		// Only once
		if(state.FULLY_LOADED) return;

		// Set label
		var label;
		var button = slideshow.boxes.boxes[1].children[0];
		if(window.PRELOAD_PROGRESS==1){
			state.FULLY_LOADED = true;
			label = getWords("preloader_play");
			button.removeAttribute("disabled");
		}else{
			label = getWords("preloader_loading") + " ";
			label += Math.round(window.PRELOAD_PROGRESS*100) + "%";
		}
		button.innerHTML = label;

	}

}

);