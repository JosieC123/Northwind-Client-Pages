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

// event listeners for check and uncheck all
document.getElementById('check-all').addEventListener('click', function () {
    document.querySelectorAll('.form-check-input').forEach(c => {
        c.checked = true;

        //show balloons
        const balloon = document.getElementById(c.id + 'Img');
        balloon.style.visibility = "visible";
        balloon.classList.remove("animate__animated", "animate__bounceOutUp");
        balloon.classList.add("animate__animated", "animate__bounceInDown");
    });
});
document.getElementById('uncheck-all').addEventListener('click', function () {
    document.querySelectorAll('.form-check-input').forEach(c => {
        c.checked = false;

        //hide ballloons
        const balloon = document.getElementById(c.id + 'Img');
        balloon.classList.remove("animate__animated", "animate__bounceInDown");
        balloon.classList.add("animate__animated", "animate__bounceOutUp");
    });
});

    //hover over buttons
    document.getElementById('checkbox-card').addEventListener('mouseover', function (e) {
        if (e.target.classList.contains('form-check-label')) {
            const hover = document.querySelector('.greeting');
            const color = e.target.dataset['color'];
            hover.style.color = color;
        }
    });
    document.getElementById('checkbox-card').addEventListener('mouseout', function (e) {
        if (e.target.classList.contains('form-check-label')) {
            const hover = document.querySelector('.greeting');
            hover.style.color = 'slategray';
        }
    });

    //Toast popup
    document.getElementById('submit').addEventListener('click', function(e){
        const isChecked = false;
        const checkboxs = document.querySelectorAll('.form-check-input');

        checkboxs.forEach((checkbox) => {
            if(checkbox.checked){
                isChecked = true;
            }
        })
        if (!isChecked){
            bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast')).show();
        }
    })

    //random title animation
    const animationList = ['animate__bounce','animate__flash','animate__pulse','animate__rubberBand',
        'animate__shakeX','animate__shakeY','animate__headShake',
        'animate__swing','animate__tada','animate__wobble','animate__jello','animate__heartBeat'];

        var pickedAnimation = animationList[Math.floor(Math.random()*animationList.length)];

        const title = document.querySelector('.greeting');
        title.classList.add(pickedAnimation);

});