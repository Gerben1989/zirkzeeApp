// import { User } from './../../models/user/user.model';
// import { Injectable } from "@angular/core";
// import { AngularFireDatabase } from "angularfire2/database";
// import { Observable } from 'rxjs';


// @Injectable()
// export class GetAccountService {
//     user: Observable<any>;

//     private getAccountRef = this.db.list<User>('user');

    
//     constructor(
//         private db: AngularFireDatabase) {
            
//         this.user = db.object('item').valueChanges();
//     }

//     getUsers() {
//         return this.createAccountRef;
//     }

//     addUser(user: User) {
//         return this.createAccountRef.push(user);
//     }
// }