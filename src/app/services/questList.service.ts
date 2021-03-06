import { Injectable } from '@angular/core';
import { EndpointService } from './endpoint.service';
import { map } from 'rxjs/operators';
import { Response } from '@angular/http';

@Injectable({
    providedIn: 'root'
})

export class QuestListService {

    constructor(private endpointService: EndpointService) { }

    getQuestList() {
        return this.endpointService.getQuestList().pipe(
            map((response: Response) => {
                return response.json();
            })
        );
    }

    getQuestListAuth() {
        return this.endpointService.getQuestListAuth().pipe(
            map((response: Response) => {
                return response.json();
            })
        );
    }
}
