google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

      var data = new google.visualization.DataTable();
      data.addColumn('string', 'SKILLS');
      data.addColumn('number', 'Populartiy');
      data.addRows([
        ['HTML', 20],
        ['CSS', 20],
        ['REACT', 20],
        ['JS', 20], 
        ['BOOTSRAP',20] 
      ]);

      var options = {
        title: 'FRONT-END SKILLS',
        
      };

      var chart = new google.visualization.PieChart(document.getElementById('frontskills'));
      chart.draw(data, options);
    }
  