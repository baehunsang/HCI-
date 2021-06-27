//////////////////////////////////////////////
////////Today's Exercise Data///////////////////
//   Push up: 10 times
//   Pull up: 10 times
//   Lunge: 10 times
//   Squat: 10 times
//////////////////////////////////////////////
///////Yesterday's Exercise Data///////////////
//   Push up: 12 times
//   Pull up: 19 times
//   Lunge: 3 times
//   Squat: 5 times
//////////////////////////////////////////////
var ctx = document.getElementById("myChart");
	var myChart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: ["Push UP", "Pull up", "Lunge", "Squat"],
			datasets: [{
				label: 'Today',
				data: [10, 10, 10, 10, 10, 10],
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)'
				],
				borderColor: [
					'rgba(255,99,132,1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)'
				],
				borderWidth: 1
			}]
		},
		options: {
	responsive: false,
	scales: {
		yAxes: [{
			ticks: {
				beginAtZero: true
			}
		}]
	}},
		layout: {
	padding: {
		left: 100,
		right: 100,
		top: 10,
		bottom: 500
	}
}
	});


	var ctx = document.getElementById("myChart2");
	var myChart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: ["Push UP", "Pull up", "Lunge", "Squat"],
			datasets: [{
				label: 'Yesterday',
				data: [12, 19, 3, 5],
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)'
				],
				borderColor: [
					'rgba(255,99,132,1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)'
				],
				borderWidth: 1
			}]
		},
		options: {
	responsive: false,
	scales: {
		yAxes: [{
			ticks: {
				beginAtZero: true
			}
		}]
	}},
		layout: {
	padding: {
		left: 250,
		right: 100,
		top: 10,
		bottom: 500
	}
}
	});