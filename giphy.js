 
function getdata() {

    var inputValue = $("#searchtext").val();

    var xhr = $.get(`http://api.giphy.com/v1/gifs/search?q=${ inputValue }&api_key=mHWTM2zQ75bsA37jtTPoHVrd3Bf0JXdy&limit=5`);
    xhr.done(function(response) { 
        console.log("success got data", response);
        
        var jiffs = response.data
        
        for (i in jiffs)
        {
        $('.inner').append("<img src='"+jiffs[i].images.original.url+"' styles='height:350px; width:350px;'/>")
        }
    });

}

