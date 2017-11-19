$(document).ready(function () {
    var url = host('/api/popup');
    $.ajax({
        url: url, type: 'GET', cache: false, timeout: 2000, async: true,
        success: function (cfg) {
            $(cfg.target).html(cfg.body_html);
            // // $(".switchsmall").bootstrapSwitch();
            // $('#mySwitch input').bootstrapSwitch();
        },
        error: function (err) {
            var html = '<div>无法连接到服务器</div>';
            $('.main').html(html);
            $(".switchsmall").bootstrapSwitch();

        }
    });
});