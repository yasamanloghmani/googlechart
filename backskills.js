google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

      var data = new google.visualization.DataTable();
      data.addColumn('string', 'SKILLS');
      data.addColumn('number', 'Populartiy');
      data.addRows([
        ['EXPRESS', 20],
        ['NODE', 20],
        ['DJANGO', 20],
        ['PYTHON', 20], 
        ['SQL, NO-SQL',20] 
      ]);

      var options = {
        title: 'BACK-END SKILLS',
        backgroundColor: '#1f4068',
        fontName : 'Balsamiq Sans',
      };

      var chart = new google.visualization.PieChart(document.getElementById('backskills'));
      chart.draw(data, options);
    }
  