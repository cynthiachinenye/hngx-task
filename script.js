 (function loadDay() { 
let dayName = ['Sunday','Moday', 'Tuestday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let currentDay = new Date();
let today = currentDay.getDay();
document.querySelector('[data-testid="currentDayOfTheWeek"]').innerHTML = 'Today: ' + dayName[today];
})();

(function loadTime(){

    let currentTime = new Date();
    let timeNow = currentTime.getUTCMilliseconds();
    document.querySelector('[data-testid="currentUTCTime"]').innerHTML = 'Time in UTC:  ' + timeNow; 

})();

(function loadURL(){
    document.querySelector('[data-testid="githubURL"]').innerHTML ='Visit my Github Page'; 
    document.querySelector('[data-testid="githubURL"]').setAttribute("href", "https://github.com/cynthiachinenye/hngx-task.git");
})();