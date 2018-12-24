import { Injectable } from "@angular/core";
import { Profile } from './../../models/profile/profile.model';
import { AngularFireDatabase } from "angularfire2/database";
import { AngularFireAuth } from 'angularfire2/auth';


@Injectable()
export class ProfileService {

    constructor(
        private afDatabase: AngularFireDatabase,
        private afAuth: AngularFireAuth) {
    }

    getProfiles(uid: any) {
        return this.afDatabase.list<Profile>(`profile/${uid}`);
    }

    createProfile(profile: Profile) {
        this.afAuth.authState.take(1).subscribe(auth => {
            return this.afDatabase.list<Profile>(`profile/${auth.uid}`).push(profile);
        })
    }

    editProfile(profile:Profile) {
        this.afAuth.authState.take(1).subscribe(auth => {
            return this.afDatabase.list<Profile>(`profile/${auth.uid}`).update(profile.key, profile);
        })
    }

    deleteProfile(profile: Profile) {
        this.afAuth.authState.take(1).subscribe(auth => {
            return this.afDatabase.list<Profile>(`profile/${auth.uid}`).remove(profile.key);
        })
    }
}