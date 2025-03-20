function getCenturyCode(year) {
    let century = Math.floor(year / 100);
    let centuryCycle = [6, 4, 2, 0]; // Correct 400-year cycle: 6, 4, 2, 0
    return centuryCycle[century % 4]; // Cycles through 6, 4, 2, 0 every 400 years
}

function getMonthCode(month, isLeapYear) {
    let monthCodes = {1: 1, 2: 4, 3: 4, 4: 0, 5: 2, 6: 5, 7: 0, 8: 3, 9: 6, 10: 1, 11: 4, 12: 6};
    if (isLeapYear) {
        monthCodes[1] = 0;  
        monthCodes[2] = 3;  
    }
    return monthCodes[month];
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function calculateDay() {
    let day = parseInt(document.getElementById("day").value);
    let month = parseInt(document.getElementById("month").value);
    let year = parseInt(document.getElementById("year").value);
    
    if (!day || !month || !year) {
        document.getElementById("result").innerText = "Please enter a valid date.";
        return;
    }

    let lastTwoDigits = year % 100;
    let quotient = Math.floor(lastTwoDigits / 4);
    let centuryCode = getCenturyCode(year);
    let monthCode = getMonthCode(month, isLeapYear(year));
    
    let total = centuryCode + lastTwoDigits + quotient + day + monthCode;
    let remainder = total % 7;

    let dayNames = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

    document.getElementById("result").innerText = `The day was: ${dayNames[remainder]}`;
}