#!/usr/bin/env bash
# ==============================================================================
# Harshal Raaj Patnaik Portfolio — Local Development Runner
# ==============================================================================

set -e

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BACKEND_DIR="$PROJECT_ROOT/backend"
FRONTEND_DIR="$PROJECT_ROOT/frontend"

echo "=========================================================="
echo "🔴 Starting Harshal Raaj Patnaik's Pokédex Pro Portfolio"
echo "=========================================================="

# 1. Check / Start Backend (Port 8080)
echo ""
echo "▶ Checking Spring Boot Backend on port 8080..."
if lsof -i :8080 > /dev/null 2>&1; then
    echo "  ✔ Backend is already active on port 8080."
else
    echo "  ⏳ Launching Spring Boot backend in background..."
    JAR_FILE="$BACKEND_DIR/target/portfolio-backend-1.0.0.jar"
    if [ ! -f "$JAR_FILE" ]; then
        echo "  📦 Building backend JAR..."
        (cd "$BACKEND_DIR" && mvn clean package -DskipTests)
    fi
    nohup java -jar "$JAR_FILE" > "$BACKEND_DIR/backend.log" 2>&1 &
    BACKEND_PID=$!
    echo "  ✔ Backend started (PID: $BACKEND_PID). Logs: backend/backend.log"
    echo "  ⏳ Waiting for backend health check..."
    for i in {1..20}; do
        if curl -s http://localhost:8080/actuator/health | grep '"status":"UP"' > /dev/null 2>&1; then
            echo "  ✔ Backend is UP & healthy at http://localhost:8080"
            break
        fi
        sleep 1
    done
fi

# 2. Setup Node environment & Start Frontend (Port 4200)
echo ""
echo "▶ Starting Angular Frontend on port 4200..."
export NVM_DIR="$HOME/.nvm"
if [ -s "$NVM_DIR/nvm.sh" ]; then
    . "$NVM_DIR/nvm.sh"
    nvm use 20 2>/dev/null || true
fi

cd "$FRONTEND_DIR"

if lsof -i :4200 > /dev/null 2>&1; then
    echo "  ✔ Frontend is already active at http://localhost:4200"
    echo ""
    echo "=========================================================="
    echo "  🎉 Portfolio is LIVE:"
    echo "  - Frontend: http://localhost:4200"
    echo "  - Backend API: http://localhost:8080"
    echo "=========================================================="
else
    echo "  🚀 Starting ng serve..."
    echo "  - Web UI: http://localhost:4200"
    npx ng serve --port 4200 --host 0.0.0.0
fi
