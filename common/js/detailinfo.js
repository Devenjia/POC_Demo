/**
 *
 * @authors Your Name (you@example.org)
 * @date    2017-10-13 16:59:59
 * @version $Id$
 */
var jsonData;
$(function () {
	var idVal = parseURL(location.href);
	$.ajax({
		url: '/front/detail/' + idVal.id,
		type: "GET",
		async: false,
		success:function(json){
			jsonData = JSON.parse(json.data[0].goods);
			$.each(jsonData,function (index, item) {
	            item.no=index+1;
	            item.detail="detail";
	        });
	        $("#company").html(json.data[0].company);
	        $("#freight").html(json.data[0].freight);
	        $("#insurance").html(json.data[0].insurance);
	        $("#otherFee").html(json.data[0].otherFee);
		},
		error(error){
			var trs1 = '<tr>' +
				'<td align="center" colspan="10" style="border-bottom: 1px solid #e5e5e5;">' +
				'没有数据</td>' + '</tr>';
			$("tbody").html(trs1);
		}
	})
	$('#table').bootstrapTable({
	    classes: 'table table-hover',
	    striped: true,
	    data: jsonData
	})
});
function parseURL(url){
    var url = url.split("?")[1];
    var res={};
    res[url.split("=")[0]]=url.split("=")[1];
    return res;
}
function navBack(){
	window.history.back(-1);
}
