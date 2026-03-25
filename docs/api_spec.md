# MeshSats API Specification (Draft)

MeshSats is designed as reusable infrastructure. Developers can integrate MeshSats into their own merchant apps or community tools via our REST and Local Mesh APIs.

## 1. Sync Engine API (Online)

### `POST /v1/intents/sync`
Sync a batch of offline payment intents.
- **Body**: Array of Signed Intent objects.
- **Returns**: Status of each intent (Success, Failed, Duplicate).

### `GET /v1/merchants/:id/balance`
Fetch the current reconciled balance and available offline float for a merchant.

### `POST /v1/agents/rebalance`
Initiate a rebalance of the Agent's pre-funded Lightning float.

## 2. Local Mesh API (Offline)

### `broadcast_intent(signed_payload)`
Broadcast a payment intent over the local mesh network (BLE/Wi-Fi).

### `verify_local_signature(public_key, payload, signature)`
Utility function for merchant devices to verify customer intents without internet.

---
*Full API documentation and SDK coming in Phase 3 of the [Roadmap](roadmap.md).*
