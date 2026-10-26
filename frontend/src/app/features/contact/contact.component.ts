import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PortfolioApiService } from '../../core/services/portfolio-api.service';
import { ContactRequest } from '../../core/models/api.models';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contact" class="py-24 px-6 relative bg-black/30 border-t border-white/5">
      <div class="max-w-4xl mx-auto">
        <div class="text-center space-y-4 mb-16">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-crimson/30 bg-crimson/10 text-crimson text-xs font-mono">
            <span>GET IN TOUCH</span>
          </div>
          <h2 class="text-3xl sm:text-5xl font-bold tracking-tight">
            Initiate <span class="gradient-text">Transmission</span>
          </h2>
          <p class="text-white/60 max-w-xl mx-auto text-sm sm:text-base">
            Interested in discussing distributed cloud architectures, engineering leadership roles, or technical collaboration?
            Drop a message below.
          </p>
        </div>

        <div class="glass-card p-8 sm:p-12 rounded-2xl border border-white/10 max-w-2xl mx-auto relative overflow-hidden">
          <!-- Rate Limit Notice -->
          <div class="mb-6 p-3 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between text-xs font-mono text-white/50">
            <span>SECURITY GATEWAY: BUCKET4J RATE LIMITING ACTIVE</span>
            <span class="text-energy">5 REQ / HR</span>
          </div>

          <!-- Success Alert -->
          <div *ngIf="successMsg" class="mb-6 p-4 rounded-xl bg-grass/10 border border-grass/30 text-grass text-sm font-mono flex items-center gap-3">
            <span>✓</span>
            <span>{{ successMsg }}</span>
          </div>

          <!-- Error Alert -->
          <div *ngIf="errorMsg" class="mb-6 p-4 rounded-xl bg-crimson/10 border border-crimson/30 text-crimson text-sm font-mono flex items-center gap-3">
            <span>⚠</span>
            <span>{{ errorMsg }}</span>
          </div>

          <!-- Contact Form -->
          <form (ngSubmit)="onSubmit()" class="space-y-6">
            <div>
              <label for="name" class="block text-xs font-mono text-white/60 mb-2">FULL NAME *</label>
              <input
                id="name"
                name="name"
                type="text"
                [(ngModel)]="formData.name"
                required
                maxlength="120"
                placeholder="e.g. Jane Doe"
                class="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:border-energy focus:outline-none transition-colors">
            </div>

            <div>
              <label for="email" class="block text-xs font-mono text-white/60 mb-2">EMAIL ADDRESS *</label>
              <input
                id="email"
                name="email"
                type="email"
                [(ngModel)]="formData.email"
                required
                maxlength="254"
                placeholder="e.g. jane@company.com"
                class="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:border-energy focus:outline-none transition-colors">
            </div>

            <div>
              <label for="message" class="block text-xs font-mono text-white/60 mb-2">MESSAGE / OPPORTUNITY DETAILS *</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                [(ngModel)]="formData.message"
                required
                minlength="10"
                maxlength="2000"
                placeholder="Discussing a Senior Cloud / Backend Engineering role or system architecture..."
                class="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:border-energy focus:outline-none transition-colors"></textarea>
            </div>

            <button
              type="submit"
              [disabled]="isSubmitting"
              class="w-full py-4 rounded-xl font-medium bg-crimson hover:bg-crimson/90 disabled:opacity-50 text-white shadow-lg shadow-crimson/30 transition-all font-mono text-sm tracking-wide">
              <span *ngIf="!isSubmitting">SEND TRANSMISSION →</span>
              <span *ngIf="isSubmitting">DISPATCHING VIA REST API...</span>
            </button>
          </form>

          <!-- Direct Verified Channels -->
          <div class="mt-8 pt-6 border-t border-white/10 flex items-center justify-center gap-6 text-xs font-mono text-white/50">
            <a href="https://www.linkedin.com/in/harshalraajpatnaik/" target="_blank" rel="noopener noreferrer" class="hover:text-cyan-glow transition-colors">
              LINKEDIN ↗
            </a>
            <span>•</span>
            <a href="https://github.com/harshalraajpatnaik" target="_blank" rel="noopener noreferrer" class="hover:text-cyan-glow transition-colors">
              GITHUB ↗
            </a>
            <span>•</span>
            <a href="http://localhost:8080/swagger-ui.html" target="_blank" rel="noopener noreferrer" class="hover:text-energy transition-colors">
              SWAGGER API ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent {
  formData: ContactRequest = { name: '', email: '', message: '' };
  isSubmitting = false;
  successMsg = '';
  errorMsg = '';

  constructor(private api: PortfolioApiService) {}

  onSubmit(): void {
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      this.errorMsg = 'Please complete all required fields.';
      return;
    }

    this.isSubmitting = true;
    this.successMsg = '';
    this.errorMsg = '';

    this.api.submitContact(this.formData).subscribe({
      next: (res) => {
        this.successMsg = res.message || 'Message received! Thank you for reaching out.';
        this.formData = { name: '', email: '', message: '' };
        this.isSubmitting = false;
      },
      error: (err) => {
        if (err.status === 429) {
          this.errorMsg = 'Rate limit exceeded (5 requests per hour). Please try again later.';
        } else {
          this.errorMsg = 'Failed to deliver message via backend API. Please try again.';
        }
        this.isSubmitting = false;
      }
    });
  }
}
