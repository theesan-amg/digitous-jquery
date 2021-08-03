$(document).ready(function() {
    $('button').click(function(){
        
    $.ajax({
        url: 'https://restcountries.eu/rest/v2/name/france',
        success: function (response) {
            $('#country').html(response[0].name)
            $('#capital').html(response[0].capital)
        }
    });
});
});


