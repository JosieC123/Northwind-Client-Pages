document.addEventListener("DOMContentLoaded", function () {
    const elem = document.getElementById('dob');
    const datepicker = new Datepicker(elem, {
        // options
        autohide: true,
        format: 'MM-dd'
    });

    // uncheck all boxes by default (Firefox)
    document.querySelectorAll('.form-check-input').forEach(c => c.checked = false);

    // event listener for check/uncheck
    document.getElementById('checkbox-card').addEventListener('change', function (e) {
        if (e.target.classList.contains('form-check-input')) {
            const elem = document.getElementById(e.target.id + 'Img');
            elem.style.visibility = "visible";
            elem.classList.remove("animate__animated", "animate__bounceInDown", "animate__bounceOutUp");
            e.target.checked ?
                elem.classList.add("animate__animated", "animate__bounceInDown") :
                elem.classList.add("animate__animated", "animate__bounceOutUp");
        }
    });

    //event listeners for check and uncheck all
    document.getElementById('check-all').addEventListener('click', function () {
        document.querySelectorAll('.form-check-input').forEach(c => c.checked = true);
    });
    document.getElementById('uncheck-all').addEventListener('click', function () {
        document.querySelectorAll('.form-check-input').forEach(c => c.checked = false);
    });

    //hover over buttons
    document.getElementById('checkbox-card').addEventListener('mouseover', function (e) {
        if (e.target.classList.contains('form-check-label')) {
            const hover = document.querySelector('.greeting');
            if (e.target.id == 'brownLabel') {
                hover.style.color = 'brown';
            } else if (e.target.id == 'greenLabel') {
                hover.style.color = 'green';
            } else if (e.target.id == 'cyanLabel') {
                hover.style.color = 'cyan';
            }
        }
    });
    document.getElementById('checkbox-card').addEventListener('mouseout', function (e) {
        if (e.target.classList.contains('form-check-label')) {
            const hover = document.querySelector('.greeting');
            hover.style.color = 'slategray';
        }
    });

});