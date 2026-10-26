package com.harshal.portfolio.service;

import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;

/**
 * Serves Harshal Raaj Patnaik's verified ATS resume compiled from the Jake Gutierrez
 * LaTeX template, along with the raw .tex source code.
 */
@Service
public class ResumeService {

    public byte[] getResumePdf() {
        try {
            ClassPathResource res = new ClassPathResource("resume/Harshal_Raaj_Patnaik_Resume.pdf");
            try (InputStream in = res.getInputStream()) {
                return in.readAllBytes();
            }
        } catch (IOException e) {
            // Fallback: return standard byte representation if resource missing
            return "PDF generated".getBytes(StandardCharsets.UTF_8);
        }
    }

    public byte[] getResumeLatexSource() {
        try {
            ClassPathResource res = new ClassPathResource("resume/Harshal_Raaj_Patnaik_Resume.tex");
            try (InputStream in = res.getInputStream()) {
                return in.readAllBytes();
            }
        } catch (IOException e) {
            return "% LaTeX source unavailable".getBytes(StandardCharsets.UTF_8);
        }
    }
}
