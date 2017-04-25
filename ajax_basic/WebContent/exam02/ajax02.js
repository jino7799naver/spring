var member = [
	{
 	"num":"10",
 	"name":"kim2",
 	"nick":"king2"
	},
	{
 	"num":"20",
 	"name":"park2",
 	"nick":"queen2"
	},
	{
 	"num":"30",
 	"name":"lee2",
 	"nick":"prince2"
	}
];
////////////////////

	var html = '<table><tr><th>번호</th><th>이름</th><th>별명</th></tr>';

	$.each(member,function(){
	html += '<tr>';	
	html +=	'<td>' + this['num'] + '</td>';
	html +=	'<td>' + this['name'] + '</td>';
	html +=	'<td>' + this['nick'] + '</td>';
	html += '</tr>';	
	});
	
	html +='</table>';
	$('#result').html(html);
	
	 $('tr:odd').css('background', '#F9F9F9');
	 $('tr:even').css('background', '#9F9F9F');
	 $('tr:first').css('background', '#000000').css('color', '#FFFFFF');
     

