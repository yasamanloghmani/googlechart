google.charts.load('current', {packages:["orgchart"]});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Name');
        data.addColumn('string', 'Manager');
        data.addColumn('string', 'ToolTip');

        // For each orgchart box, provide the name, manager, and tooltip to show.
        data.addRows([
          [{'v':'Father', 'f':'Father Mother<div style="color:red; font-style:italic">Leaders</div>'},
           '', 'The President'],
          [{'v':'Yasaman', 'f':'Yasaman<div style="color:red; font-style:italic">LOVE LOVE</div>'},
           'Father', 'VP'],
          ['Niloofar', 'Father', ''],
          ['Nastaran', 'Father', ''],
        ]);

        // Create the chart.
        var chart = new google.visualization.OrgChart(document.getElementById('chart_div'));
        // Draw the chart, setting the allowHtml option to true for the tooltips.
        chart.draw(data, {'allowHtml':true});
      }