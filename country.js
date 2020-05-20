google.charts.load('current', {
    'packages':['geochart'],
    // Note: you will need to get a mapsApiKey for your project.
    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
    'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
  });
  google.charts.setOnLoadCallback(drawRegionsMap);

  function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
      ['Country', 'Popularity'],
      ['Iran', 800],
      ['Canada', 800],
    ]);

    var options = {
        // region: '002', // Africa
        colorAxis: {colors: ['#e43f5a', 'black', '#e43f5a']},
        backgroundColor: '#1f4068',
        // datalessRegionColor: '#f8bbd0',
        defaultColor: '#e43f5a',
      };
    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart.draw(data, options);
  }