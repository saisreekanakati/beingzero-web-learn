google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);
 
function drawChart() {
    

        var data = google.visualization.arrayToDataTable([
          ['platfrom', 'prblm solved'],
          ['Leetcode',     3,
          ['Codechef',         6],
          ['Codeforces',  1],
          ['Mentorpick',138 ],
          ['Vjudge',    124]
          

        ]);
   
 var options = {
          title: 'Problems solved  '
          
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }