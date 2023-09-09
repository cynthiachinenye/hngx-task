 (function loadDay() { 
let dayName = ['Sunday','Moday', 'Tuestday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let currentDay = new Date();
let today = currentDay.getDay();
document.querySelector('[data-testid="currentDayOfTheWeek"]').innerHTML = 'Today is ' + dayName[today];
})();

(function loadTime(){

    let currentTime = new Date();
    let timeNow = currentTime.getUTCMilliseconds();
    document.querySelector('[data-testid="currentUTCTime"]').innerHTML = 'Visit my Github Page';

})();

(function loadTime(){
    document.querySelector('[data-testid="githubURL"]').innerHTML = 'Time in UTC:  ' + timeNow;
    document.querySelector('[data-testid="githubURL"]').href = '';
})();