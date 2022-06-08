function current_time(id){
    var time = new Date().toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' });
    const element = document.getElementById(id);
    element.innerHTML = time;
    const start_btn = document.getElementById('start-btn')
    const stop_btn = document.getElementById('stop-btn')
    start_btn.disabled ? start_btn.removeAttribute("disabled") : start_btn.disabled = true;
    stop_btn.removeAttribute("disabled");
    if (id == 'stop'){
        let start = document.getElementById('start').innerHTML;
        time_diff(start, time);
    }

}

function time_diff(start, stop){
    let start_time = new Date('01-01-2022' + ' ' + start.slice(0, -3));
    let stop_time = new Date('01-01-2022' + ' ' + stop.slice(0, -3));
    let hour_diff = stop_time.getHours() - start_time.getHours();
    let min_diff = stop_time.getMinutes() - start_time.getMinutes();
    document.getElementById('total').innerHTML = hour_diff + 'h ' + min_diff + 'm';
}

