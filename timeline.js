google.charts.load("current", {packages:["timeline"]});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var container = document.getElementById('timeline');
    var chart = new google.visualization.Timeline(container);
    var dataTable = new google.visualization.DataTable();

    dataTable.addColumn({ type: 'string', id: 'Term' });
    dataTable.addColumn({ type: 'string', id: 'Name' });
    dataTable.addColumn({ type: 'date', id: 'Start' });
    dataTable.addColumn({ type: 'date', id: 'End' });

    dataTable.addRows([
      [ '1', 'Student (IT)', new Date(2012, 10, 01), new Date(2016, 07, 4) ],
      [ '2', 'Freelance web designer', new Date(2016, 10, 01), new Date(2020, 005, 20) ],
      [ '3', 'Got Married',        new Date(2018, 05, 15),  new Date(2020, 05, 20) ],
      [ '4', 'Immigrate to Canada',  new Date(2018, 12, 26),  new Date(2020, 05, 20) ],
      [ '5', 'General Assembly',        new Date(2020, 02, 18),  new Date(2020, 05, 08) ]]);

      var options = {
        timeline: {
          groupByRowLabel: true,
          rowLabelStyle : {color:'whitesmoke', fontName: 'Balsamiq Sans', fontSize:'15px'},
          barLabelStyle :{color:'whitesmoke', fontName: 'Balsamiq Sans', fontSize:'15px'},
          
        },
        backgroundColor: '#1f4068',
        
      };

    chart.draw(dataTable, options);
  }