/**
 *
 * @authors Your Name (you@example.org)
 * @date    2017-10-13 14:57:33
 * @version $Id$
 */
$(function () {
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

                    if(value==="0"){
                        return '<span class="red-css">'+'未开始'+'</span>';
                    }
                    if(value==="1"){
                        return '<span class="yellow-css">'+'审核中'+'</span>';
                    }
                    if(value==="2"){
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
                    var link="../detail/detail.html?"+ row['id'];
                    return '<a href='+link+'>'+'detail'+'</a>';
                }
            }
        ],
        data: jsonData
    });
});
