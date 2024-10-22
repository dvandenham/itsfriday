function run() {
	var day = new Date().getDay();
	var div = document.getElementById("container");
	if (day === 5) {
		div.innerHTML = `
		<video autoplay>
			<source src="vid.webm" type="video/webm">
			Your browser does not support the video tag.
		</video>
		`;
	} else {	
		var html = `It's `;
		switch(day) {
			case 1:
				html += "monday";
				break;
			case 2:
				html += "tuesday";
				break;
			case 3:
				html += "wednesday";
				break;
			case 4:
				html += "thursday";
				break;
			case 6:
				html += "saterday";
				break;
			case 7:
				html += "sunday";
				break;
		}
		div.innerHTML = html;
	}
}