setTimeout(function(){
	var tableC = $('#realtimehot').html();
tableC = '<table tab="realtimehot" id="realtimehot" border="0" cellspacing="0" cellpadding="0" class="star_bank_table">'+tableC;
tableC = tableC + '</table>';
$.ajax({
	type : "post",
	async : false,
	url :'http://localhost:8080/api_s/memoryOriginalData.do', 
	data: {
		'domId':'realtimehot',
		'content':tableC
	},
	cache : false,
	dataType : "json",
	success : function(json){
		console.log(json);
	},
	error:function(e){
		console.log("error");
	}
});
}, 1000*5);

setTimeout(function(){
	window.location.reload();
}, 1000*60*60);