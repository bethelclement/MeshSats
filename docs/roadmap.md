# MeshSats Project Roadmap

The development of MeshSats is structured into logical phases to move from a conceptual framework to a deployable infrastructure tool for African ecosystems.

## Phase 1: Core Infrastructure Specification (CURRENT)
- [x] High-impact README and vision alignment.
- [x] Initial technical architecture and Mermaid flow designs.
- [x] Use-case defining for African market realities.
- [x] Risk and trust model honesty.
- [x] Repository governance (License, Contributing, Code of Conduct).

## Phase 2: Offline Intent Prototype (Q2 2026)
- [ ] **Protocol Design**: Finalize the MeshSats offline intent signature format.
- [ ] **Mobile Mock**: Simple React Native / Flutter client for creating signed intents.
- [ ] **QR Exchange**: Verification of intent sharing via QR code and local Bluetooth transfer.
- [ ] **Local Proof API**: Logic for generating verifiable merchant receipts offline.

## Phase 3: Sync & Reconciliation Engine (Q3 2026)
- [ ] **Backend Core**: Implementation of the Transaction Queue in Go/Rust.
- [ ] **Reconciliation Logic**: First-seen settlement rules and conflict handling.
- [ ] **Agent Management API**: Dashboards for agents to view pending queue and sync status.
- [ ] **Security Audit**: Internal review of signed intent verification.

## Phase 4: Lightning Network Integration (Q4 2026)
- [ ] **Lightning Bridge**: Seamless integration with BOLT11/BOLT12.
- [ ] **Liquidity Controls**: Pre-funded float management for Agent Hubs.
- [ ] **Wallet Interoperability**: Support for settling MeshSats intents via standard Lightning wallets (e.g., Phoenix, WoS, Galoy).

## Phase 5: African Pilot Programs (2027)
- [ ] **Pilot 1: Recycling Rewards**: Small-scale pilot with a recycling waste hub in Lagos.
- [ ] **Pilot 2: Market Vendor Network**: Merchant-led roll-out in a controlled retail environment.
- [ ] **Developer Tooling**: Release of "MeshSats SDK" for third-party Bitcoin developers building for the Global South.

---
*Roadmap subject to change based on community feedback and funding availability.*
