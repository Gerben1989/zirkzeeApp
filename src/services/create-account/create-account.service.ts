import { User } from './../../models/user/user.model';
import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";


@Injectable()
export class CreateAccountService {
    
    private createAccountRef = this.db.list<User>('create-account');

    constructor(private db: AngularFireDatabase) {
    }

    getUsers() {
        return this.createAccountRef;
    }

    addUser(user: User) {
        return this.createAccountRef.push(user);
    }
}