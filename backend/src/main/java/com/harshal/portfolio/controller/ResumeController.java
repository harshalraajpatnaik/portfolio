package com.harshal.portfolio.controller;

import com.harshal.portfolio.service.ResumeService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/resume")
@Tag(name = "Resume", description = "ATS-compliant resume generator and download endpoints (Jake Gutierrez LaTeX template)")
public class ResumeController {

    private final ResumeService resumeService;

    public ResumeController(ResumeService resumeService) {
        this.resumeService = resumeService;
    }

    @GetMapping("/download")
    @Operation(summary = "Download official ATS vector PDF resume",
               description = "Downloads Harshal Raaj Patnaik's resume formatted using the Jake Gutierrez LaTeX template.")
    public ResponseEntity<byte[]> downloadResume() {
        byte[] pdfBytes = resumeService.getResumePdf();

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"Harshal_Raaj_Patnaik_Resume.pdf\"")
                .contentType(MediaType.APPLICATION_PDF)
                .contentLength(pdfBytes.length)
                .body(pdfBytes);
    }

    @GetMapping("/latex")
    @Operation(summary = "Download raw Jake Gutierrez LaTeX source (.tex)",
               description = "Downloads the complete raw LaTeX source code for Harshal Raaj Patnaik's resume.")
    public ResponseEntity<byte[]> downloadLatexSource() {
        byte[] texBytes = resumeService.getResumeLatexSource();

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"Harshal_Raaj_Patnaik_Resume.tex\"")
                .contentType(MediaType.parseMediaType("application/x-tex"))
                .contentLength(texBytes.length)
                .body(texBytes);
    }
}
