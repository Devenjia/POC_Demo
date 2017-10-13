/**
 *
 * @authors Your Name (you@example.org)
 * @date    2017-10-13 14:57:33
 * @version $Id$
 */
var jsonData;
$(function () {
	readDB();
    $('#table').bootstrapTable({
        classes: 'table table-hover',
        striped: true,
        columns: [
            {
                field: 'no',//域值
                title: '序列号'//标题
            },
            {
                field: 'id',//域值
                title: '保单号'//标题
            },
            {
                field: 'goodName',//域值
                title: '商品名称'//标题
            },
            {
                field: 'goodQuantity',//域值
                title: '数量'//标题
            },
            {
                field: 'goodMoney',//域值
                title: '金额'//标题
            },
            {
                field: 'goodOrigin',//域值
                title: '产地'//标题
            },
            {
                field: 'status',//域值
                title: '状态',//标题
                formatter : function (value, row, index) {

                    if(value==="1"){
                        return '<span>'+'待审核'+'</span>';
                    }
                    if(value==="2"){
                        return '<span class="yellow-css">'+'电子审'+'</span>';
                    }
                    if(value==="3"){
                        return '<span class="red-css">'+'人工审'+'</span>';
                    }
                    if(value==="4"){
                        return '<span class="green-css">'+'放行'+'</span>';
                    }
                }
            },
            {
                field: 'detail',//域值
                title: '详细信息',//标题
                formatter : function (value, row, index) {
                    // if (row['status'] === 1) {
                    //     return '正常';
                    // }
                    // if (row['status'] === 0) {
                    //     return '禁用';
                    // }
                    var link="../detail/detail.html?"+ 'id=' + row['id'];
                    return '<a href='+link+'>'+'detail'+'</a>';
                }
            }
        ],
        data: jsonData
    });
});
function readDB(){
	$.ajax({
		url: dbUrl,
		type: "GET",
		async: false,
		success:function(json){
			jsonData = JSON.parse(json.data[0]);
			$.each(jsonData,function (index, item) {
	            item.no=index+1;
	            item.detail="detail";
	        });
		},
		error(error){
			var trs1 = '<tr>' +
				'<td align="center" colspan="10" style="border-bottom: 1px solid #e5e5e5;">' +
				'没有数据</td>' + '</tr>';
			$("tbody").html(trs1);
		}
	})
}
