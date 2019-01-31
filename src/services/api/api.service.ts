import { Injectable } from "@angular/core";
import { HttpClient } from  '@angular/common/http';

@Injectable()
export class ApiService {

    constructor(private httpClient : HttpClient) {
    }

    synchronizeServiceStart(uid, profileid) {
        let postData = {
            "user_id": uid,
            "profile_id": profileid
        }
        return this.httpClient.post("http://24c2cc65.ngrok.io", postData)
            .subscribe(data => {
                console.log(data['_body']);
            }, error => {
                console.log(error);
        });
    }

    sleepCycleServiceStart(uid, profileid) {
        let postData = {
            "user_id": uid,
            "profile_id": profileid
        }
        return this.httpClient.post("http://24c2cc65.ngrok.io", postData)
            .subscribe(data => {
                console.log(data['_body']);
            }, error => {
                console.log(error);
        });
    }

}
