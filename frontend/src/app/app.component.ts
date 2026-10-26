import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioApiService } from './core/services/portfolio-api.service';
import { ProfileResponse, ProjectCard, TelemetrySnapshot } from './core/models/api.models';
import { NavComponent } from './shared/components/nav/nav.component';
import { PokemonPlayerComponent } from './shared/components/pokemon-player/pokemon-player.component';
import { PokeballIntroComponent } from './shared/components/pokeball-intro/pokeball-intro.component';
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
    PokemonPlayerComponent,
    PokeballIntroComponent,
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
  introShown = true;
  profile: ProfileResponse | null = null;
  projects: ProjectCard[] = [];
  telemetry: TelemetrySnapshot | null = null;
  isLoading = true;

  constructor(private api: PortfolioApiService) {}

  ngOnInit(): void {
    const shown = localStorage.getItem('hrp_pokemon_intro_shown');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.introShown = !!shown || reducedMotion;

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

  onIntroCompleted(): void {
    this.introShown = true;
  }
}
