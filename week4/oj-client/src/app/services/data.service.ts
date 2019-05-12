import { Injectable } from '@angular/core';
import { Problem } from '../models/problem.model';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject} from 'rxjs';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private problemsSource = new BehaviorSubject<Problem[]>([]);

  constructor(private http: HttpClient) { }

  getProblems(): Observable<Problem[]> {
    this.http.get<Problem[]>('api/v1/problems')
      .toPromise()
      .then(res => {
        this.problemsSource.next(res);
      })
      .catch(this.handleError);
    return this.problemsSource.asObservable();
  }

   getProblem(id: number): Promise<Problem> {
    return this.http.get(`api/v1/problems/${id}`)
                    .toPromise()
                    .then(res => res)
                    .catch(this.handleError);
  }

  addProblem(problem: Problem): Promise<Problem> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http.post('/api/v1/problems', problem, httpOptions)
      .toPromise()
      .then((res: Response) => {
        this.getProblems();
        return res;
      })
      .catch(this.handleError);
  }

  buildAndRun(data): Promise<object> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http.post('/api/v1/build_and_run', data, httpOptions)
      .toPromise()
      .then((res: Response) => {
        console.log(res);
        return res;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.body || error);
  }
}
