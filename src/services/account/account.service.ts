import { User } from './../../models/user/user.model';
import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Observable } from 'rxjs';


@Injectable()
export class AccountService {
    
    user: Observable<any>;
    private AccountRef = this.db.list<User>('user');
    
    constructor(
        private db: AngularFireDatabase) {
    }

    getUsers() {
        return this.AccountRef;
    }

    addUser(user: User) {
        return this.AccountRef.push(user);
    }

    editUser(user: User) {
        return this.AccountRef.update(user.key, user);
    }

    removeUser(user: User) {
        return this.AccountRef.remove(user.key);
    }
}