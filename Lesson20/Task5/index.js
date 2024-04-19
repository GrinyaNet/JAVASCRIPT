class User {
    constructor(id, name, sessionId) {
        this._id = id;
        this._name = name;
        this._sessionId = sessionId;
    }

    get id () {
        return this._id;
    }

    get name () {
        return this._name;
    }

    get sessionId () {
        return this._sessionId;
    }
}

class UserRepository {
    constructor(users) {
        this._users = Object.freeze(users);
    }
get users () {
    return this._users;
}

    getUserNames() {
        return this._users.map(element => element.name);

    }

    getUserIds() {
        return this._users.map(element => element.id);

    }

    getUserNameById(idUser) {
        this.arrNew = this._users.filter(element => element.id === idUser);
        this.result = this.arrNew.map(element => element.name);
        return this.result[0];
    }
}

const user1 = new User('2', 'RR', 'ttt', '3', 'KK', 'kkk');
const user2 = new UserRepository([{ id: 2, name: 'RR', sessionId: 'ttt' }, { id: 3, name: 'KK', sessionId: 'kkk' }]);


console.log(user2.getUserNames());

// examples
const user = new User('1', 'Tom', 'session-id');

// получить свойства можем
console.log(user.id); // ===> '1'
console.log(user.name); // ===> 'Tom'
console.log(user.sessionId); // ===> 'session-id'

// но изменить эти свойства нельзя
// user.name = 'Bob'; // пытаемся изменить старое значение
// console.log(user.name); // ===> 'Tom' - но изменение проигнорировано, так как setter отсутствует



