package com.harshal.portfolio;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.harshal.portfolio.model.ContactRequest;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.hamcrest.Matchers.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
class PortfolioApiIntegrationTest {

    @Autowired MockMvc mvc;
    @Autowired ObjectMapper mapper;

    // ─── Profile ────────────────────────────────────────────────────────────────

    @Test
    @DisplayName("GET /api/v1/profile returns 200 with valid profile data")
    void profileReturnsOk() throws Exception {
        mvc.perform(get("/api/v1/profile"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name").value("Harshal Raaj Patnaik"))
                .andExpect(jsonPath("$.title").exists())
                .andExpect(jsonPath("$.education").isArray())
                .andExpect(jsonPath("$.experience").isArray())
                .andExpect(jsonPath("$.awards").isArray());
    }

    // ─── Projects ───────────────────────────────────────────────────────────────

    @Test
    @DisplayName("GET /api/v1/projects returns 20 case studies")
    void projectsReturnTwentyCards() throws Exception {
        mvc.perform(get("/api/v1/projects"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(20)));
    }

    @Test
    @DisplayName("GET /api/v1/projects/{id} returns the correct case study")
    void projectByIdReturnsCorrectCard() throws Exception {
        mvc.perform(get("/api/v1/projects/pikachu-compute-scheduler"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.element").value("ELECTRIC"))
                .andExpect(jsonPath("$.metrics[*].value", hasItem("92.6%")));
    }

    @Test
    @DisplayName("GET /api/v1/projects/{unknown-id} returns 404")
    void unknownProjectIdReturns404() throws Exception {
        mvc.perform(get("/api/v1/projects/does-not-exist"))
                .andExpect(status().isNotFound());
    }

    // ─── Telemetry ──────────────────────────────────────────────────────────────

    @Test
    @DisplayName("GET /api/v1/telemetry returns live JVM stats")
    void telemetryReturnsLiveData() throws Exception {
        mvc.perform(get("/api/v1/telemetry"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.status").value("ONLINE"))
                .andExpect(jsonPath("$.runtime.javaVersion").exists())
                .andExpect(jsonPath("$.runtime.heapUsedMb").isNumber())
                .andExpect(jsonPath("$.apiStats.totalRequests").isNumber());
    }

    // ─── Contact ────────────────────────────────────────────────────────────────

    @Test
    @DisplayName("POST /api/v1/contact with valid payload returns 200")
    void validContactReturnsOk() throws Exception {
        var body = new ContactRequest("Jane Recruiter", "jane@example.com", "I love your portfolio work!");
        mvc.perform(post("/api/v1/contact")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(mapper.writeValueAsString(body)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.message").exists());
    }

    @Test
    @DisplayName("POST /api/v1/contact with blank name returns 400")
    void blankNameContactReturns400() throws Exception {
        var body = new ContactRequest("", "jane@example.com", "A reasonable message body here.");
        mvc.perform(post("/api/v1/contact")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(mapper.writeValueAsString(body)))
                .andExpect(status().isBadRequest());
    }

    @Test
    @DisplayName("POST /api/v1/contact with invalid email returns 400")
    void invalidEmailContactReturns400() throws Exception {
        var body = new ContactRequest("Jane", "not-an-email", "A reasonable message body here.");
        mvc.perform(post("/api/v1/contact")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(mapper.writeValueAsString(body)))
                .andExpect(status().isBadRequest());
    }

    // ─── Auth & Admin boundary ──────────────────────────────────────────────────

    @Test
    @DisplayName("GET /api/v1/admin/status without token returns 403")
    void adminWithoutTokenReturns403() throws Exception {
        mvc.perform(get("/api/v1/admin/status"))
                .andExpect(status().isForbidden());
    }

    @Test
    @DisplayName("POST /api/v1/auth/login with wrong credentials returns 401")
    void wrongCredentialsReturns401() throws Exception {
        var body = mapper.writeValueAsString(new com.harshal.portfolio.model.AuthRequest("admin", "wrongpassword"));
        mvc.perform(post("/api/v1/auth/login")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(body))
                .andExpect(status().isUnauthorized());
    }

    // ─── Actuator ───────────────────────────────────────────────────────────────

    @Test
    @DisplayName("GET /actuator/health returns UP status")
    void actuatorHealthReturnsUp() throws Exception {
        mvc.perform(get("/actuator/health"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.status").value("UP"));
    }
}
