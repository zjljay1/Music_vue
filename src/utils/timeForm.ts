export function timeFormat(time: any) {
    // console.log(time);
    const timee: any = parseInt(" " + time / 1000);
    // console.log(timee);
    //分钟
    const minute = timee / 60;
    let minutes: any = parseInt(" " + minute);
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    //秒
    const second = timee % 60;
    let seconds: any = Math.round(second);
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    return `${minutes}:${seconds}`;
}
export function songTimeFormat(time: any) {
    //分钟
    const minute = time / 60;
    let minutes: any = parseInt(" " + minute);

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    //秒
    const second = time % 60;
    let seconds: any = Math.round(second);
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    return `${minutes}:${seconds}`;
}