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
        data: jsonData
    });
});
