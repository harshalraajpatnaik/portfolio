package com.harshal.portfolio.controller;

import com.harshal.portfolio.model.ProjectCard;
import com.harshal.portfolio.service.ProjectService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/projects")
@Tag(name = "Projects", description = "Engineering case studies classified by elemental infrastructure domain")
public class ProjectController {

    private final ProjectService projectService;

    public ProjectController(ProjectService projectService) {
        this.projectService = projectService;
    }

    @GetMapping
    @Operation(summary = "Get all project case studies",
               description = "Returns all four flagship Pokédex-classified engineering case studies with tech stack, metrics, and architectural context.")
    public ResponseEntity<List<ProjectCard>> getProjects() {
        return ResponseEntity.ok(projectService.getAllProjects());
    }

    @GetMapping("/{id}")
    @Operation(summary = "Get a single project by ID")
    public ResponseEntity<ProjectCard> getProject(@PathVariable String id) {
        return projectService.getAllProjects().stream()
                .filter(p -> p.id().equals(id))
                .findFirst()
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
