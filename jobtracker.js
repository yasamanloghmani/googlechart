google.charts.load('current', {'packages':['table']});
      google.charts.setOnLoadCallback(drawTable);

      function drawTable() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Title');
        data.addColumn('string', 'Name of the Company');
        data.addColumn('boolean', 'Status');
        data.addRows([
          ['Full-stack',  'Amazon', false],
          ['Front-end',   'Amazon',  false],
          ['Full-stack', 'Shopify', false],
          ['Full-stack',   'My Company',  true],
          ['Back-end',   'Sky tech',  true],
          ['Back-stack',   'can not remember the name of the company',  false]
        ]);

        var table = new google.visualization.Table(document.getElementById('table_div'));

        table.draw(data, {showRowNumber: true, width: '100%', height: '100%'});
      }