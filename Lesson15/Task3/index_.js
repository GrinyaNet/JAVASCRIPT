/**
 * @return {object}
 */
 export const createLogger = () => {
    // put your code here    
    let arr = [];
    let arr1 = [];
    let sorted =[];
    let message = '';
    let type = '';
    let Hour = 0;
    let Minutes = 0;
    let Seconds = 0;
    let dateTime = 0;
    let miliSeconds = 0;

    function times() {
        let time = new Date();
        Hour = time.getHours();
        Minutes = time.getMinutes().toString().padStart(2, '0');
        Seconds = time.getSeconds().toString().padStart(2, '0');
        miliSeconds = time.getMilliseconds();
        return dateTime = (`${Hour}:${Minutes}:${Seconds}:${miliSeconds}`);
    }

    function warn(string) {
        let result = {};
        message = string;
        type = 'warn';
        dateTime = times();
        result.message = message;
        result.dateTime = dateTime;
        result.type = type;
        arr.push(result);        
        return arr;
    }

    function error(string) {
        let result = {};
        message = string;
        type = 'error';
        dateTime = times();
        result.message = message;
        result.dateTime = dateTime;
        result.type = type;
        arr.push(result);
        return arr;

    }

    function log(string) {
        let result = {};
        message = string;
        type = 'log';
        dateTime = times();
        result.message = message;
        result.dateTime = dateTime;
        result.type = type;
        arr.push(result);
        return arr;
    }

    function getRecords(string) {
        if (typeof string !== "string") {
            
            sorted = arr.sort((type1, type2) => type1[type] - type2[type] ? 1 : -1);
            return sorted;
        }
        arr1 = arr.filter(elem => (elem.type === string));
        sorted = arr1.sort((type1, type2) => type1[type] - type2[type] ? 1 : -1);        
        return sorted;
    }

    return {
        warn,
        error,
        log,
        getRecords,        
    };
    
};

// examples
// const logger1 = createLogger();
// logger1.log('User logged in');
// logger1.warn('User is tring to ented restricted page');
// logger1.log('User logged out');
// logger1.error('Unexpected error on the site');

//console.log(logger1.getRecords()); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }, { message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
//console.log(logger1.getRecords('log')); // ===> [{ message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
//console.log(logger1.getRecords('error')); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }]
//console.log(logger1.getRecords('warn')); // ===> [{ message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }]

//const logger2 = createLogger();
// logger2.warn('Opps, something is happenning');
//console.log(logger2.getRecords('error')); // ===> []
// console.log(logger2.getRecords('warn')); // ===> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]
//console.log(logger2.getRecords()); // ===> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]

//const logger3 = createLogger();
//console.log(logger3.getRecords('error')); // ===> []
//console.log(logger3.getRecords()); // ===> []


// export const createLogger = () => {
//     const records = [];
  
//     return {
//       warn(message) {
//         records.push({
//           message,
//           dateTime: new Date(),
//           type: 'warn',
//         });
//       },
//      error(message) {
//      ...