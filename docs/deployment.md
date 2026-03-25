# MeshSats Deployment Guide

How to deploy and run the MeshSats infrastructure.

## 1. Sync Engine (Server Side)
The Sync Engine is a containerized microservice.

**Prerequisites**:
- Docker & Docker Compose.
- Access to a Lightning Node (LND/CLN) or a Lightning Service Provider (LSP).

**Quick Start**:
```bash
git clone https://github.com/bethelclement/MeshSats
cd backend
cp .env.example .env
docker-compose up -d
```

## 2. Merchant Hub (Local Device)
The Merchant Hub runs on an Android or specialized POS device.

**Requirements**:
- Android 10+ or Linux-based ARM device.
- Bluetooth 5.0+ for local mesh functionality.

## 3. Configuration
Key environment variables:
- `LIGHTNING_NODE_URI`: Connection string for the settlement node.
- `RECONCILIATION_STRATEGY`: Rules for conflict resolution.
- `RISK_LIMS_MAX_INTENT`: Max Sats allowed for an offline-initiated intent.

---
*Note: Current version is a prototype. Production-ready deployment scripts are under development.*
