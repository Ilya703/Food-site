function timer(id, deadline) {
    //Timer

    function getTimeRemaining (endtime) {
        let days, hours, minutes, seconds;
        const temp = Date.parse(endtime) - Date.parse(new Date());

        if (temp <= 0) {
            days = 0;
            hours= 0;
            minutes= 0;
            seconds= 0;
        } else {
            days = Math.floor(temp / (60 * 1000 * 60 * 24));
            hours= Math.floor((temp / (60 * 1000 * 60)) % 24);
            minutes= Math.floor((temp / (60 * 1000)) % 60);
            seconds= Math.floor((temp / 1000) % 60);
        }
        
        return {
            'total': temp,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero (num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock (selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock () {
            const temp = getTimeRemaining(endtime);

            days.innerHTML = getZero(temp.days);
            hours.innerHTML = getZero(temp.hours);
            minutes.innerHTML = getZero(temp.minutes);
            seconds.innerHTML = getZero(temp.seconds);

            if (temp.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock(id, deadline);
}

export default timer;