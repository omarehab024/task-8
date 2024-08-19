
// الميكرويف تاسك



let microwave = false;

function startbutton() {
    if (microwave === false) {
        microwave = true;
        console.log('الميكرويف شغال يمكنك ادخال عدد الثوانى........');
    } else {
        microwave = false;
        console.log('  الميكرويف  مغلق');
    }
}

function startTime() {
    if (microwave === true) {
        let seconds = prompt('ادخل عدد الثوانى');
        seconds = parseInt(seconds);
        if (isNaN(seconds) || seconds <= 0 || seconds > 10 ) {
            alert('ادخل عدد صحيح من الثوانى');
        } else {
            console.log(`العد التنازلى بدا لمدة ${seconds} ثانيه`);
            setTimeout(function() {
                alert('الاكل جاهز يامعلم');
                console.log(`الاكل جاهز يامعلم`)
            }, seconds * 1000);
        }
    } else {
        microwave = false;
        console.log('شغل الميكرويف الاول');
    }
}

