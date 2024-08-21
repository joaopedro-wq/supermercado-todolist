// data.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    private jsonUrl = 'assets/mercado-list.json';

    constructor(private http: HttpClient) { }

    getItems(): Observable<any[]> {
        return this.http.get<any[]>(this.jsonUrl);
    }
}
