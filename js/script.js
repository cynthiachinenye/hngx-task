 (function loadDay() { 
let dayName = ['Sunday','Moday', 'Tuestday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let currentDay = new Date();
let today = currentDay.getDay();
document.querySelector('[data-testid="currentDayOfTheWeek"]').innerHTML = 'Today: ' + dayName[today];
})();

(function loadTime(){

    const currentDate = new Date();
	const options = { timeZone: 'Africa/Lagos' }; 
	const localTime = currentDate.toLocaleTimeString('en-US', options);
	const utcTimeMilliseconds = currentDate.getTime(); 
	document.querySelector('[data-testid="currentUTCTime"]').textContent = "Time in UTC: "+ localTime + ' ' + utcTimeMilliseconds

    let currentTime = new Date();
    let timeNow = currentTime. getUTC();
    document.querySelector('[data-testid="currentUTCTime"]').innerHTML = 'Time in UTC:  ' + timeNow; 

})();

(function loadURL(){
    document.querySelector('[data-testid="githubURL"]').innerHTML ='Visit my Github Page'; 
    document.querySelector('[data-testid="githubURL"]').setAttribute("href", "https://github.com/cynthiachinenye/hngx-task.git");
})();