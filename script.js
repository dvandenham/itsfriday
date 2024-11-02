function run() {
	var day = new Date().getDay();
	var div = document.getElementById("container");
	if (day === 5 || new URLSearchParams(window.location.search).has("force")) {
		div.innerHTML = `
		<video id="video" autoplay>
			<source src="vid.webm" type="video/webm">
			Your browser does not support the video tag.
		</video>
		`;
		setTimeout(function() { document.getElementById("video").play() }, 500);
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
				html += "saturday";
				break;
			case 7:
				html += "sunday";
				break;
		}
		div.innerHTML = html;
	}
}
