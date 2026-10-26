import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProfileResponse, ProjectCard, TelemetrySnapshot, ContactRequest } from '../models/api.models';

@Injectable({ providedIn: 'root' })
export class PortfolioApiService {
  // In production, set via environment.ts
  private readonly base = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) {}

  getProfile(): Observable<ProfileResponse> {
    return this.http.get<ProfileResponse>(`${this.base}/profile`);
  }

  getProjects(): Observable<ProjectCard[]> {
    return this.http.get<ProjectCard[]>(`${this.base}/projects`);
  }

  getTelemetry(): Observable<TelemetrySnapshot> {
    return this.http.get<TelemetrySnapshot>(`${this.base}/telemetry`);
  }

  submitContact(req: ContactRequest): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${this.base}/contact`, req);
  }
}
