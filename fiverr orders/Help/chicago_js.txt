url = "https://data.cityofchicago.org/resource/tt4n-kn4t.json?$where=annual_salary between '165000' and '750000'&salary_or_hourly=Salary"

$(document).ready(function(){
		$.ajax({
		url: url,
		type: 'GET',
		dataType: "json",
		data: {"$limit":5000},	
		success: function(res){
		console.log("success");
		console.log(res);

		
		//create a data table
		var dataArray = [];
		//first line
		var header = ['name','Department','Job Title','Annual Pay'];
		dataArray.push(header);	
		
		for (var i=0; i < res.length; i++){  
			var name = res[i].name;
			var dept = res[i].department;
			var title = res[i].job_titles;
			var pay = res[i].annual_salary;
			
				//add to dataArray
				row = [];
				row.push(name);
				row.push(dept);
				row.push(title);
				row.push(parseInt(pay));
				dataArray.push(row);
				
				$('#dataTable').append('<tr><td>' + name +'</td><td>'+ dept + '</td><td>' + title +'</td><td>' + pay + '</td></tr>');
			}
		}
		});
})
	