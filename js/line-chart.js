Chart.register(ChartDataLabels);
Chart.defaults.font.size = 12;
let ctx_3 = document.getElementById('lineChart').getContext('2d');
let chart_3 = new Chart(ctx_3, {
  type: 'line',

  data: {
    labels: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    datasets: [{
        // График оранжевого цвета
        label: 'Bitcoin', // Название
        hoverRadius: 5,
        pointRadius: 7,
        datalabels: {
          color: 'rgba(255, 255, 255, 0)' // Цвет цифр внутри диаграммы
        },
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: '#ec5046',
        data: [121, 99, 186, 17, 198, 134],
        backgroundColor: [
          '#ec5046'
        ],
      },
      { // График розового цвета
        label: 'Ethereum', // Название
        hoverRadius: 5,
        pointRadius: 7,
        datalabels: {
          color: 'rgba(255, 255, 255, 0)' // Цвет цифр внутри диаграммы
        },
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: '#e702bf',
        data: [86, 45, 87, 82, 162, 88],
        backgroundColor: [
          '#e702bf'
        ],
      },
    ],
  },
  // Настройки графиков
  options: {
    responsive: true,
    pointStyle: 'circle',
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          padding: 50,
          color: '#fff',
          boxWidth: 15, //Размер квадратика
          boxHeight: 15, //Размер квадратика
          font: {
            weight: 400,
            family: 'Poppins',
            size: 12
          }
        }
      },
    },
    scales: {
      y: {
        grid: {
          display: true,
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: {
          // For a category axis, the val is the index so the lookup via getLabelForValue is needed
          callback: function (val, index) {
            // Hide the label of every 2nd dataset
            return index % 2 === 0 ? this.getLabelForValue(val) : '';
          },
          color: 'white',
          padding: 40
        },
      },
      x: {
        grid: {
          display: false,
          color: 'rgba(255, 255, 255, 0.08)'
        },
        ticks: {
          color: 'white',
          padding: 40
        },
      }
    }
  }
});