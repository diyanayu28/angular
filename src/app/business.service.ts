import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/Http';

@Injectable ({
    providedIn: 'root'
})

export class BusinessService {
    uri = 'http://localhost:3000/business';

    constructor(private http: HttpClient) { }

    getBusiness() {
        return this.http.get(`${this.uri}`);
    }

    deleteBusiness(id) {
        return this.http.get(`${this.uri}/delete/${id}`);
    }

    detailBusiness(id) {
        return this.http.get(`${this.uri}/edit/${id}`);
    }
}
