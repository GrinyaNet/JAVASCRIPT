/**
 * @return {object}
 */
 export const createLogger = () => {
    // put your code here    
    const arr = [];
    let arr1 = [];
    let sorted =[];    
    
return {
    warn(message) {        
        arr.push({
            message,
            dateTime: new Date(),
           type: 'warn',
        });
    },

    error(message) {
        arr.push({
            message,
            dateTime: new Date(),
           type: 'error',
        });
    },

     log(message) {
        arr.push({
            message,
            dateTime: new Date(),
           type: 'log',
        });
    },

     getRecords(message) {
        if (typeof message !== "string") {
            
            sorted = arr.sort((type1, type2) => type1[arr.type] - type2[arr.type] ? 1 : -1);
            return sorted;
        }
        arr1 = arr.filter(elem => (elem.type === message));
        sorted = arr1.sort((type1, type2) => type1[arr.type] - type2[arr.type] ? 1 : -1);        
        return sorted;
    },

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