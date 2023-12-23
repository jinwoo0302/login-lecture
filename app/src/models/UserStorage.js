"use strict";

class UserStorage {
    static #users={
        id:["jinwoo", "jinwoo00", "jinwoo0302"],
        psword:["1234","1234","1234"],
        name:["진우", "진우00","진우32"],
    };

    static getUsers(...fields){
        const users=this.#users;
        const newUsers=fields.reduce((newUsers, field)=>{
            if(users.hasOwnProperty(field)){
                newUsers[field]=users[field];
            }
            return newUsers;
        },{});

        return newUsers;
    };
}

module.exports=UserStorage;