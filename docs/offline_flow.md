# MeshSats: Offline Intent Flow

This document details the cryptographic and procedural flow for capturing payment intents in an offline state.

## 1. Intent Generation (Customer Side)
When a customer initiates a payment in a "Dead Zone" (no signal), the MeshSats client generates a **Signed Intent**.

**Payload Structure (Draft)**:
```json
{
  "version": "1.0",
  "type": "PAYMENT_INTENT",
  "amount_sats": 2500,
  "recipient_id": "merchant_mesh_id_882k",
  "timestamp": 1711324800,
  "nonce": "a8f2b1",
  "signature": "304402206e... (Schnorr/ECDSA)"
}
```

## 2. Intent Exchange
The intent is transferred to the merchant via:
- **QR Code**: Standard high-density QR scanned by the merchant.
- **Local Mesh**: BLE (Bluetooth Low Energy) or Local Wi-Fi (No Internet).

## 3. Merchant Validation (Offline)
The Merchant Hub performs the following checks:
1.  **Signature Verification**: Confirms the intent was signed by the customer's known public key.
2.  **Limit Check**: Ensures the `amount_sats` is within the merchant's allowed offline-risk threshold.
3.  **Timestamp Check**: Prevents extremely old intents from being accepted.

## 4. Local Proof of Settlement
Once validated, the merchant device issues a **Local Proof of Receipt**. This is a signed message from the merchant to the customer, confirming the goods/services are "locally paid".

## 5. Background Sync
The merchant's device stores the intent in a local encrypted database. As soon as the device detects a stable 3G/4G/Wi-Fi connection, it pushes the queue to the MeshSats Sync Engine for network reconciliation.

---
*Next: See [Lightning Settlement](lightning_settlement.md) for how these intents become final Sats.*
