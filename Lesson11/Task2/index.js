const sortContacts = (contacts, isAsc) => {
    if (!Array.isArray(contacts)) {
        return null;
    }
    const result = contacts.sort((a, b) => {        
        
         if ((isAsc === true) || (isAsc === undefined)) {
            return a.name.localeCompare(b.name);
          
         } else {
            return b.name.localeCompare(a.name);
         }
         
    });

    return result;
};

const contacts = [{ name: 'Tom', phoneNumber: '777-77-77' }, { name: 'Sasha', phoneNumber: '444-44-44' }, { name: 'Bob', phoneNumber: '666-66-66' }, { name: 'Sara', phoneNumber: '555-55-55' }, { name: 'Andrey', phoneNumber: '333-33-33' }, { name: 'Genri', phoneNumber: '222-22-22' },];
console.log(sortContacts(contacts));