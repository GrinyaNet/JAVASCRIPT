
const shmoment = initDate => {    
    
    const result = new Date(initDate.getTime());
    const operationsDate = {
        add(value, value2) {
            switch (value) {
                case 'years':
                    result.setFullYear(result.getFullYear() + value2);
                    return this;                    
                case 'months':
                    result.setMonth(result.getMonth() + value2);
                    return this;                   
                case 'days':
                    result.setDate(result.getDate() + value2);
                    return this;                    
                case 'hours':
                    result.setHours(result.getHours() + value2);
                    return this;                    
                case 'minutes':
                    result.setMinutes(result.getMinutes() + value2);
                    return this;                   
                case 'seconds':
                    result.setSeconds(result.getSeconds() + value2);
                    return this;                   
                case 'milliseconds':
                    result.setMilliseconds(result.getMilliseconds() + value2);
                    return this;                   
                default:
                    alert("Нет таких значений");
            }            
        },
        subtract(value, value2) {
            switch (value) {
                case 'years':
                    result.setFullYear(result.getFullYear() - value2);
                    return this;                    
                case 'months':
                    result.setMonth(result.getMonth() - value2);
                    return this;                   
                case 'days':
                    result.setDate(result.getDate() - value2);
                    return this;                    
                case 'hours':
                    result.setHours(result.getHours() - value2);
                    return this;                    
                case 'minutes':
                    result.setMinutes(result.getMinutes() - value2);
                    return this;                   
                case 'seconds':
                    result.setSeconds(result.getSeconds() - value2);
                    return this;                   
                case 'milliseconds':
                    result.setMilliseconds(result.getMilliseconds() - value2);
                    return this;                   
                default:
                    alert("Нет таких значений");
            }
        },
        result() {
            return result;
        }

    };
    return operationsDate;
};


const t = shmoment(new Date(2020, 0, 7, 17, 17, 17)).add('minutes', 2).add('days', 8).subtract('years', 1).result();
console.log(t);
// ... Jan 15 2019 17:19:17 ...
