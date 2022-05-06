cfunc=function(a) {
	var c=10;
	var d=15;

	console.log(c);
	console.log(a);

	function dfunc() {
		var f=5;
		console.log(f);
		console.log(c);
		console.log(a);
	}
	dfunc();
};

cfunc(10);
