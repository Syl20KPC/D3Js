(function() {
	let template = document.createElement("template");
			template.innerHTML = `
		<style>

		  body {
			font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
			margin: auto;
			position: relative;
			width: 960px;
		  }

		  text {
			font: 10px sans-serif;
		  }

		  form {
			position: absolute;
			right: 10px;
			top: 10px;
		  }

		  input {
			margin: 0 7px;
		  }

		</style>
		<form id="form"></form>
		<script src="https://d3js.org/d3.v4.min.js"></script>
	`;

	class ChartAps extends HTMLElement {
		constructor() {
			super();
			var myDuration = 600;
			var firstTime = true;

			var width = 960,
			height = 500,
			radius = Math.min(width, height) / 2;

			var width = 960,
			height = 500,
			radius = Math.min(width, height) / 2;
			var color = d3.scaleOrdinal(d3.schemeCategory20);
			var pie = d3.pie()
			.value(function(d) { return d.count; })
			.sort(null);

			var arc = d3.arc()
			.innerRadius(radius - 100)
			.outerRadius(radius - 20);

			var svg = d3.select("body").append("svg")
			.attr("width", width)
			.attr("height", height)
			.append("g")
			.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
		}

customElements.define("com-sap-teched-gauge-solution-exe5-aps", ChartAps);
})();