# Contributing to Harshal Raaj Patnaik's Engineering Portfolio

Thank you for your interest in contributing to this project. We welcome feedback, issue reports, and pull requests that adhere to high standards of code hygiene, performance, and accessibility.

## Code of Conduct

This project is governed by the [Contributor Covenant](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## Development Workflow

1. **Fork the Repository** and clone your fork locally:
   ```bash
   git clone https://github.com/<your-username>/portfolio.git
   cd portfolio
   ```

2. **Create a Feature Branch**:
   ```bash
   git checkout -b feat/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

3. **Follow Project Conventions**:
   - **Backend**: Java 17 LTS, Spring Boot 3 standards, records for DTOs, explicit exception handling.
   - **Frontend**: Angular 17 standalone components, strict TypeScript, Tailwind CSS utility classes.
   - **Formatting**: Preserve existing indentation (2 spaces for frontend, 4 spaces for backend).

4. **Verify Builds Locally**:
   ```bash
   # Backend verification
   cd backend && mvn clean test
   
   # Frontend verification
   cd ../frontend && npm run build
   ```

5. **Commit Message Guidelines**:
   Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:
   - `feat:` New features or capabilities
   - `fix:` Bug fixes
   - `docs:` Documentation updates
   - `refactor:` Code restructuring without behavioral change
   - `perf:` Performance optimizations
   - `test:` Adding or updating tests

6. **Submit a Pull Request**:
   - Push your branch to GitHub.
   - Open a Pull Request targeting the `main` branch.
   - Fill out the PR template completely.
