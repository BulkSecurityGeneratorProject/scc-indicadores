import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IDestinatario } from 'app/shared/model/destinatario.model';

type EntityResponseType = HttpResponse<IDestinatario>;
type EntityArrayResponseType = HttpResponse<IDestinatario[]>;

@Injectable({ providedIn: 'root' })
export class DestinatarioService {
    private resourceUrl = SERVER_API_URL + 'api/destinatarios';

    constructor(private http: HttpClient) {}

    create(destinatario: IDestinatario): Observable<EntityResponseType> {
        return this.http.post<IDestinatario>(this.resourceUrl, destinatario, { observe: 'response' });
    }

    update(destinatario: IDestinatario): Observable<EntityResponseType> {
        return this.http.put<IDestinatario>(this.resourceUrl, destinatario, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<IDestinatario>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<IDestinatario[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
}