import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class VinculoLaboralService {
  private baseUrl = `${environment.API_BASE}`;    
  
  httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  getVinculosLaborales(domain_id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}vinculos-laborales/${domain_id}`);
  }

  guardarVinculoLaboral(vinculoData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}vinculo-laboral`, vinculoData, this.httpOptions);
  }

  actualizarVinculoLaboral(id: number, vinculoData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}vinculo-laboral/${id}`, vinculoData, this.httpOptions);
  }

  eliminarVinculoLaboral(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}vinculo-laboral/${id}`, this.httpOptions);
  }
}
