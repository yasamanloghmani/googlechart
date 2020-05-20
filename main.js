google.charts.load('current', {'packages':['timeline']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Team');
      data.addColumn('date', 'Season Start Date');
      data.addColumn('date', 'Season End Date');

      data.addRows([
        ['My age ???', new Date(1994, 08, 27), new Date(2020, 05, 20)],
      ]);

      var options = {
          height:100,
        timeline: {
          groupByRowLabel: true
        }
      };

      var chart = new google.visualization.Timeline(document.getElementById('age-chart'));

      chart.draw(data, options);
    }


    