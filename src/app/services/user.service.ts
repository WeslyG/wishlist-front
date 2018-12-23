import { Injectable } from '@angular/core';
import { EndpointService } from './endpoint.service';
import { User } from '../models/user.model';
import { map } from 'rxjs/operators';
import { Response } from '@angular/http';
import { QuestListModel } from '../models/questList.model';

@Injectable({
    providedIn: 'root'
})

export class UserService {
    constructor(private endpointService: EndpointService) { }

    getUser(id: string) {
        return this.endpointService.getUserEndpoint(id).pipe(
            map((response: Response) => {
                return <User>response.json();
            })
        );
    }

    getScoreBoard() {
        return this.endpointService.getScoreBoard().pipe(
            map((response: Response) => {
                return response.json();
            })
        );
    }

    // getUserList() {
    //     return this.endpointService.getUserListEndpoint().pipe(
    //         map((response: Response) => {
    //             this.userList = <User[]>response.json();
    //             return this.userList;
    //         })
    //     );
    // }

    // updateUser(user: User) {
    //     return this.endpointService.getUserUpdateEndpoint(user).pipe(
    //         map((response: Response) => {
    //             return <User>response.json();
    //         })
    //     );
    // }
}
