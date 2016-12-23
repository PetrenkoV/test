// Shorthand for $( document ).ready()
$(function() {

    $('#addBookmarks').click(function(e) {
        e.preventDefault();
        UIkit.notify("Добавлено в избранное", { status: 'success' });
    });

    $('#check').click(function() {
        $('.option').addClass('open');
    });
    $('.list_item').click(function(e) {
        $('.option').removeClass('open');
        $(this).addClass('active').siblings().removeClass('active');
        var text = $(this).text();
        $("#check").val(text);

    });
    $(document).click(function(event) {
        if ($(event.target).closest("#check").length)
            return;
        $(".option").removeClass("open");

    });

    $(document).on('click', 'span.aside', function() {
        $("div#aside").show("slow").css('z-index', '2');
    });
    $(document).mouseup(function(e) {
        var container = $("#aside");
        if (container.has(e.target).length === 0) {
            container.hide('slow');
        }
    });

    $("#ajax").autocomplete({
        source: ["Львов", "Запорожье", "Киев", "Харьков", "Винница", "Херсон", "Тернополь", "Донецк", "Одесса", "Ужгород"],
        minLength: 3
    });



    $(".scroll").click(function(event) {
        event.preventDefault();
        $('body,html').animate({ scrollTop: 0 }, 500);
    });




}); // end ready
