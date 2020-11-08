import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  data: Cliente[];
  constructor(private http: HttpClient) { }

  read(){
    return this.http.get('http://127.0.0.1:8000/clientes');
  }
  insert(data: Cliente){
    return this.http.post('http://127.0.0.1:8000/clientes', data);
  }
  update(data: Cliente){
    return this.http.put('http://127.0.0.1:8000/clientes/' + data.id, data);
  }
  delete(id){
    return this.http.delete('http://127.0.0.1:8000/clientes/'+id);
  }
}
