$(document).ready(function () {
    function add() {
        const text = $("#one").val();
        $("#todo").append("<p>" + text + "</p>");
        $('#one').val('');
    }
    $("#add").click(add);
});
