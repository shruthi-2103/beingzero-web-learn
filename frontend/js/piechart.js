google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['platfrom', 'prblm solved'],
          ['Leetcode',     5],
          ['Codechef',      7],
          ['Codeforces',  3],
          ['Mentorpick',168 ],
          ['Vjudge',    144]
        ]);

        var options = {
          title: 'Problem solved '
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }