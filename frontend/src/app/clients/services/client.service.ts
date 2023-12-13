import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private baseUrl  = 'http://localhost:3000/api/clients'; // URL de tu API

  constructor(private http: HttpClient) {}

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.baseUrl );
  };

  createClient(client: Client): Observable<any> {
    return this.http.post<Client>(this.baseUrl , client);
  };
  // Agrega métodos para POST, DELETE, PUT aquí
}
