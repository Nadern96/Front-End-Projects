

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
            
            var name=[] ;
			var dept=[] ;
			var title=[];
			var pay=[] ;
		for (var i=0; i < res.length; i++){  
			 name[i] = res[i].name;
			 dept[i] = res[i].department;
			 title[i] = res[i].job_titles;
			 pay[i] = res[i].annual_salary;
			
				//add to dataArray
				row = [];
				row.push(name);
				row.push(dept);
				row.push(title);
				row.push(parseInt(pay));
				dataArray.push(row);                

        };
 
   document.getElementById("btn").onclick=function(){ 
   var elem = document.getElementById("mySelect"),
    selectedNode = elem.options[elem.selectedIndex].value.toUpperCase();
            console.log(selectedNode); 
       
       var myNode = document.getElementById("dataTable");
myNode.innerHTML = '';
                $('#dataTable').append('<tr><th> Name </th><th>Department </th><th>Job Title </th><th> Annual Pay </th></tr>');   

       for(var j=0;j<res.length;j++){
           
       if(selectedNode==dept[j]){
            
                $('#dataTable').append('<tr><td>' + name[j] +'</td><td>'+ dept[j] + '</td><td>' + title[j] +'</td><td>' + pay[j] + '</td></tr>');   
            }
        }
				
    }
}
});
})
	

