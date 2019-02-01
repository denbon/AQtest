document.addEventListener("DOMContentLoaded", function (event) {
    
var checkbox = document.getElementById("card");

checkbox.addEventListener( 'change', function() {
    document.getElementById('ccard').disabled = !this.checked;
    });
});


/*small status messages*/
function show_message(id, text)
{
    let element = document.getElementById(id);
    element.innerHTML = text;
    element.classList.add('fade');
    setTimeout(() => {
        element.classList.remove('fade');
        element.innerHTML='';
        },3000);
}

/*feedback message request*/
function mail(form)
{
    var formData = {};
    cl_form = new FormData(form)
    for (var pair of cl_form.entries())
        {
            formData[pair[0]] = pair[1];
        }

    strForm = JSON.stringify(formData, null, 2)
    form.reset();
    alert(strForm);
    console.log(strForm);
    show_message('message', 'Feedback has been send');
}


function settings(form)
{
    var formData = {};
    cl_form = new FormData(form)
    for (var pair of cl_form.entries())
        {
            formData[pair[0]] = pair[1];
        }

    strForm = JSON.stringify(formData, null, 2)
    form.reset();
    alert(strForm);
    console.log(strForm);
    show_message('message', 'User was been added');
}

