import moment from 'moment';
import range from 'lodash/range';

moment.updateLocale('en', {
    week: {
        dow: 1,
        doy: 6
    }
});


function isWeekend(date) {
    let dayOfWeek = date.isoWeekday();
    return dayOfWeek === 6 || dayOfWeek === 7;
}

function isFirstDayOfWeek(date) {
    return date.day() === moment.localeData().firstDayOfWeek();
}

function isToday(date) {
    return isDayTheSame(moment(), date);
}

function isCurrentMonth(date) {
    return isMonthTheSame(moment(), date);
}

function isCurrentYear(date) {
    return isYearTheSame(moment(), date);
}

function isAfter(dateToCheck, dateToCheckAgainst) {
    return dateToCheck.isAfter(dateToCheckAgainst);
}

function isBetweenNotInclusive(dateToCheck, from, to) {
    return dateToCheck.isBetween(from, to);
}

function isDayTheSame(date1, date2) {
    return date1.isSame(date2, 'day');
}

function isMonthTheSame(date1, date2) {
    return date1.isSame(date2, 'month');
}

function isMonthBefore(date1, date2) {
    return date1.isBefore(date2, 'month');
}

function isMonthBeforeOrTheSame(date1, date2) {
    return date1.isSameOrBefore(date2, 'month');
}

function isMonthAfter(date1, date2) {
    return date1.isAfter(date2, 'month');
}

function isMonthAfterOrTheSame(date1, date2) {
    return date1.isSameOrAfter(date2, 'month');
}

function isYearTheSame(date1, date2) {
    return date1.isSame(date2, 'year');
}

function getToday() {
    return moment();
}

function getWeekDayByIndex(index) {
    return moment().isoWeekday(index);
}

function getFirstDayOfMonth(date) {
    return date.clone().startOf('month');
}

function getLastDayOfMonth(date) {
    return date.clone().endOf('month');
}

function getFirstDayOfYear(date) {
    return date.clone().startOf('year');
}

function getLastDayOfYear(date) {
    return date.clone().endOf('year');
}

function getFirstDayOfPreviousWeek(date) {
    return getFirstDayOfWeek(addWeeks(date, -1));
}

function getFirstDayOfWeek(date) {
    return date.clone().startOf('week');
}

function getMonths() {
    return moment.months();
}

function getFirstDaysOfAllMonths(year) {
    let firstMonth = getFirstDayOfYear(setYear(moment(), year));
    return range(12).map((value) => addMonths(firstMonth, value));
}

function addDays(date, amount) {
    return date.clone().add(amount, 'days');
}

function addWeeks(date, amount) {
    return date.clone().add(amount, 'weeks');
}

function addMonths(date, amount) {
    return date.clone().add(amount, 'months');
}

function addYears(date, amount) {
    return date.clone().add(amount, 'years');
}

function parse(date, format) {
    return moment(date, format, true); //strict
}

function format(date, format) {
    return date.format(format);
}

function clone(date) {
    return date.clone();
}

function getConfiguredMoment() {
    return moment;
}

function setYear(date, year) {
    return date.clone().set('year', year);
}

function getYear(date) {
    return date.clone().get('year');
}

function setMonth(date, month) {
    return date.clone().set('month', month);
}

function getMonth(date) {
    return date.clone().get('month');
}

function isDayBefore(date1, date2) {
    return date1.isBefore(date2, 'day');
}

function isDayBeforeOrTheSame(date1, date2) {
    return date1.isSameOrBefore(date2, 'day');
}

function isDayAfter(date1, date2) {
    return date1.isAfter(date2, 'day');
}

function isDateBetween(date1, date2, date, pattern = '[]') {
    return date.isBetween(date1, date2, null, pattern);
}

function isDateBefore(dateAgainst, date) {
    return dateAgainst.isBefore(date);
}
function isDayAfterOrTheSame(date1, date2) {
    return date1.isSameOrAfter(date2, 'day');
}

function isDatesSame(date1, date2) {
    return date1.isSame(date2);
}

export {
    isDatesSame,
    isDateBefore,
    isDateBetween,
    isWeekend,
    isFirstDayOfWeek,
    isToday,
    isCurrentMonth,
    isCurrentYear,
    isAfter,
    isBetweenNotInclusive,
    isDayTheSame,
    isMonthTheSame,
    isMonthBefore,
    isMonthBeforeOrTheSame,
    isMonthAfter,
    isMonthAfterOrTheSame,
    isYearTheSame,
    isDayBefore,
    isDayBeforeOrTheSame,
    isDayAfter,
    isDayAfterOrTheSame,
    getToday,
    getMonth,
    getYear,
    getWeekDayByIndex,
    getFirstDayOfMonth,
    getLastDayOfMonth,
    getFirstDayOfYear,
    getLastDayOfYear,
    getFirstDayOfWeek,
    getFirstDayOfPreviousWeek,
    getMonths,
    getFirstDaysOfAllMonths,
    setMonth,
    setYear,
    addDays,
    addWeeks,
    addMonths,
    addYears,
    parse,
    format,
    clone,
    getConfiguredMoment
};