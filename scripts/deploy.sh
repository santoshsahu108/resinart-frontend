#!/usr/bin/env bash
# scripts/deploy.sh — builds this React app and rsyncs the static output to
# the VPS path Caddy serves resinart.orderlele.in from (configured in the
# ordering-platform repo's Caddyfile + docker-compose.prod.yml). Restarts
# the caddy container there so it picks up the new files.
#
# Usage:
#   scripts/deploy.sh <user@vps-host>
#
# Requires:
#   - SSH access to the VPS (key-based, no password prompt).
#   - The ordering-platform repo already deployed once on that VPS with the
#     resinart.orderlele.in Caddyfile block + resinart-static bind mount in
#     place (see that repo's docker-compose.prod.yml).

set -euo pipefail

if [ $# -ne 1 ]; then
  echo "Usage: scripts/deploy.sh <user@vps-host>"
  exit 1
fi

HOST="$1"
REMOTE_DIR="~/ordering-platform/resinart-static"

echo "Building..."
npm run build

echo "Syncing dist/ to $HOST:$REMOTE_DIR ..."
rsync -az --delete dist/ "$HOST:$REMOTE_DIR/"

echo "Reloading caddy on $HOST ..."
ssh "$HOST" "cd ~/ordering-platform && docker compose -f docker-compose.yml -f docker-compose.prod.yml restart caddy"

echo "Done. Check: https://resinart.orderlele.in"
