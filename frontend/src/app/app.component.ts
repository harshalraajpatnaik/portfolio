import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioApiService } from './core/services/portfolio-api.service';
import { ProfileResponse, ProjectCard, TelemetrySnapshot } from './core/models/api.models';
import { NavComponent, PortfolioMode } from './shared/components/nav/nav.component';
import { PokemonPlayerComponent } from './shared/components/pokemon-player/pokemon-player.component';
import { PokeballIntroComponent } from './shared/components/pokeball-intro/pokeball-intro.component';
import { UiModePortalComponent } from './shared/components/ui-mode-portal/ui-mode-portal.component';
import { RecruiterLoaderComponent } from './shared/components/recruiter-loader/recruiter-loader.component';
import { RecruiterViewComponent } from './features/recruiter-view/recruiter-view.component';
import { HeroComponent } from './features/hero/hero.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { SthiraxComponent } from './features/sthirax/sthirax.component';
import { TrainersComponent } from './features/trainers/trainers.component';
import { TelemetryComponent } from './features/telemetry/telemetry.component';
import { SkillsComponent } from './features/skills/skills.component';
import { ResumeComponent } from './features/resume/resume.component';
import { ContactComponent } from './features/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavComponent,
    UiModePortalComponent,
    PokemonPlayerComponent,
    PokeballIntroComponent,
    RecruiterLoaderComponent,
    RecruiterViewComponent,
    HeroComponent,
    ProjectsComponent,
    SthiraxComponent,
    TrainersComponent,
    TelemetryComponent,
    SkillsComponent,
    ResumeComponent,
    ContactComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  currentMode: PortfolioMode = 'pokemon';
  portalShown = false;
  pokeballIntroShown = true;
  recruiterLoaderShown = true;

  profile: ProfileResponse | null = null;
  projects: ProjectCard[] = [];
  telemetry: TelemetrySnapshot | null = null;
  isLoading = true;

  constructor(public api: PortfolioApiService) {}

  ngOnInit(): void {
    const savedMode = localStorage.getItem('hrp_portfolio_ui_mode') as PortfolioMode | null;
    const reducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (savedMode === 'pokemon' || savedMode === 'recruiter') {
      this.currentMode = savedMode;
      this.portalShown = true;
      this.pokeballIntroShown = true;
      this.recruiterLoaderShown = true;
    } else {
      // First visit: Show the UI Interface Selection Portal
      this.portalShown = false;
    }

    if (reducedMotion) {
      this.pokeballIntroShown = true;
      this.recruiterLoaderShown = true;
    }

    this.api.getProfile().subscribe({
      next: (p) => {
        this.profile = p;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });

    this.api.getProjects().subscribe({
      next: (projects) => {
        this.projects = projects;
      },
      error: () => {}
    });

    this.api.getTelemetry().subscribe({
      next: (t) => {
        this.telemetry = t;
      },
      error: () => {}
    });
  }

  onPortalModeSelected(mode: PortfolioMode): void {
    this.currentMode = mode;
    localStorage.setItem('hrp_portfolio_ui_mode', mode);
    this.portalShown = true;

    if (mode === 'pokemon') {
      this.pokeballIntroShown = false;
      this.recruiterLoaderShown = true;
    } else {
      this.recruiterLoaderShown = false;
      this.pokeballIntroShown = true;
    }
  }

  onModeChanged(newMode: PortfolioMode): void {
    this.currentMode = newMode;
    localStorage.setItem('hrp_portfolio_ui_mode', newMode);
  }

  onPokeballIntroCompleted(): void {
    this.pokeballIntroShown = true;
  }

  onRecruiterLoaderCompleted(): void {
    this.recruiterLoaderShown = true;
  }

  openSwaggerModal(): void {
    this.api.openApiModal();
  }
}
