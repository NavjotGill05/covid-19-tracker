window.onload = function(){
	
	var table = document.getElementById("updateTable");
	
	$.get("https://api.covid19api.com/summary",
		function(data){
			var c = data['Countries'].length; //get the length of countries from thr covid19api
			
			//loop through all the countries
			for(var i = 1; i < c; i++){
				
				//variable y will create rows in the table
				var y = table.insertRow(); 
				
				y.insertCell(0); //insertCell will create row data
				table.rows[i].cells[0].innerHTML = data['Countries'][i-1]['Country']; //it will write the data in firstrow and firstcolumn of table
				table.rows[i].cells[0].style.background = "#f5f5f5";
				
				y.insertCell(1); //insertCell will create row data
				table.rows[i].cells[1].innerHTML = data['Countries'][i-1]['NewConfirmed'];
		   
				y.insertCell(2); //insertCell will create row data
				table.rows[i].cells[2].innerHTML = data['Countries'][i-1]['NewDeaths'];
				table.rows[i].cells[2].style.background = "#f5f5f5";
				
				y.insertCell(3); //insertCell will create row data
				table.rows[i].cells[3].innerHTML = data['Countries'][i-1]['NewRecovered'];
				
				y.insertCell(4); //insertCell will create row data
				table.rows[i].cells[4].innerHTML = data['Countries'][i-1]['TotalConfirmed'];
				table.rows[i].cells[4].style.background = "#f5f5f5";
				
				y.insertCell(5); //insertCell will create row data
				table.rows[i].cells[5].innerHTML = data['Countries'][i-1]['TotalDeaths'];
				
				y.insertCell(6); //insertCell will create row data
				table.rows[i].cells[6].innerHTML = data['Countries'][i-1]['TotalRecovered'];
				table.rows[i].cells[6].style.background = "#f5f5f5";
				
		    }
		}
	);
	
}

//  refernce taken from https://www.youtube.com/results?search_query=how+to+use+covid+api 