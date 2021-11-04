//hart myChart

Chart.register(ChartDataLabels);
Chart.defaults.font.size = 14;
let ctx = document.getElementById('myChart').getContext('2d');
let chart = new Chart(ctx, {
  // Тип графика
  type: 'doughnut',

  // Создание графиков
  data: {
    // Точки графиков
    labels: ['Token Sale', 'Reserve Capital', 'Founders', 'Team', 'Advisors'],
    // График
    datasets: [{
      label: '', // Название
      datalabels: {
        color: '#fff' // Цвет цифр внутри диаграммы
      },
      backgroundColor: 'rgb(255, 99, 132)', // Цвет закраски
      borderColor: 'rgb(255, 99, 132)', // Цвет линии
      data: [18.3, 23.4, 12.8, 18.1, 27.4], // Данные каждой точки графика
      backgroundColor: [
        'rgba(52, 153, 255, 1)',
        'rgba(11, 225, 247, 1)',
        'rgba(102, 50, 201, 1)',
        'rgba(229, 62, 252, 1)',
        'rgba(237, 185, 59, 1)',
      ],
      borderColor: [
        'rgba(52, 153, 255, 1)',
        'rgba(11, 225, 247, 1)',
        'rgba(102, 50, 201, 1)',
        'rgba(229, 62, 252, 1)',
        'rgba(237, 185, 59, 1)',
      ],
      borderWidth: 1
    }]
  },

  // Настройки графиков
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          padding: 15,
          color: '#fff',
          boxWidth: 15, //Размер квадратика
          font: {
            weight: 600,
            family: 'Poppins',
          }
        }
      },
    }
  }
});

//hart myChart2

let ctx_2 = document.getElementById('myChart2').getContext('2d');
let chart2 = new Chart(ctx_2, {
  // Тип графика
  type: 'pie',

  // Создание графиков
  data: {
    // Точки графиков
    labels: ['Legal & Regulation', 'Marketing', 'Contingency', 'Partners', ' Administration'],
    // График
    datasets: [{
      label: '', // Название
      datalabels: {
        color: '#fff' // Цвет цифр внутри диаграммы
      },
      backgroundColor: 'rgb(255, 99, 132)', // Цвет закраски
      borderColor: 'rgb(255, 99, 132)', // Цвет линии
      data: [20.9, 8.3, 32.2, 24.5, 14.2], // Данные каждой точки графика
      backgroundColor: [
        'rgba(52, 153, 255, 1)',
        'rgba(11, 225, 247, 1)',
        'rgba(102, 50, 201, 1)',
        'rgba(229, 62, 252, 1)',
        'rgba(237, 185, 59, 1)',
      ],
      borderColor: [
        'rgba(52, 153, 255, 1)',
        'rgba(11, 225, 247, 1)',
        'rgba(102, 50, 201, 1)',
        'rgba(229, 62, 252, 1)',
        'rgba(237, 185, 59, 1)',
      ],
      borderWidth: 1
    }]
  },

  // Настройки графиков
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          padding: 15,
          color: '#fff',
          boxWidth: 15, //Размер квадратика
          font: {
            weight: 600,
            family: 'Poppins',
          }
        }
      },
    }
  }
});