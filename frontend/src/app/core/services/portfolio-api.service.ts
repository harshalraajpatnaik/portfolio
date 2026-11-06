import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { timeout, catchError, tap } from 'rxjs/operators';
import { ProfileResponse, ProjectCard, TelemetrySnapshot, ContactRequest } from '../models/api.models';
import { FALLBACK_PROFILE, FALLBACK_PROJECTS, FALLBACK_TELEMETRY } from '../data/portfolio-fallback.data';

export interface ContactSubmissionResponse {
  message: string;
  offlineFallback?: boolean;
}

@Injectable({ providedIn: 'root' })
export class PortfolioApiService {
  // In local development or containerized environments, the backend runs on port 8080
  private readonly base = 'http://localhost:8080/api/v1';

  // Live status stream for UI components to display backend connectivity
  public isBackendOnline$ = new BehaviorSubject<boolean>(false);

  // Observable for opening the in-UI OpenAPI specification modal across any component
  public showApiModal$ = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  openApiModal(): void {
    this.showApiModal$.next(true);
  }

  closeApiModal(): void {
    this.showApiModal$.next(false);
  }

  getProfile(): Observable<ProfileResponse> {
    return this.http.get<ProfileResponse>(`${this.base}/profile`).pipe(
      timeout(1500),
      tap(() => this.isBackendOnline$.next(true)),
      catchError(() => {
        this.isBackendOnline$.next(false);
        return of(FALLBACK_PROFILE);
      })
    );
  }

  getProjects(): Observable<ProjectCard[]> {
    return this.http.get<ProjectCard[]>(`${this.base}/projects`).pipe(
      timeout(1500),
      tap(() => this.isBackendOnline$.next(true)),
      catchError(() => {
        this.isBackendOnline$.next(false);
        return of(FALLBACK_PROJECTS);
      })
    );
  }

  getTelemetry(): Observable<TelemetrySnapshot> {
    return this.http.get<TelemetrySnapshot>(`${this.base}/telemetry`).pipe(
      timeout(1500),
      tap(() => this.isBackendOnline$.next(true)),
      catchError(() => {
        this.isBackendOnline$.next(false);
        const simulated: TelemetrySnapshot = {
          ...FALLBACK_TELEMETRY,
          status: 'STANDALONE (CLIENT MODE)',
          timestamp: new Date().toISOString()
        };
        return of(simulated);
      })
    );
  }

  submitContact(req: ContactRequest): Observable<ContactSubmissionResponse> {
    return this.http.post<ContactSubmissionResponse>(`${this.base}/contact`, req).pipe(
      timeout(3000),
      tap(() => this.isBackendOnline$.next(true)),
      catchError(() => {
        this.isBackendOnline$.next(false);
        return of({
          message: 'Backend is running in standalone mode. Preparing transmission via your default mail client...',
          offlineFallback: true
        });
      })
    );
  }

  sendContact(req: ContactRequest): Observable<ContactSubmissionResponse> {
    return this.submitContact(req);
  }
}
