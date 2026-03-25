# MeshSats: Lightning Network Settlement

MeshSats uses the Lightning Network as its primary high-speed settlement rail. This document explains how offline intents are finalized on-chain/on-lightning.

## The Settlement Bridge

The MeshSats Sync Engine acts as a bridge between the offline "Intent Ledger" and the Lightning Network.

### Settlement Logic
1.  **Intent Reception**: Sync Engine receives a batch of signed intents from an Agent/Merchant.
2.  **Integrity Check**: Re-verifies all signatures and ensures no double-claims against the Agent's pre-funded float.
3.  **Payment Initiation**: 
    -   The Sync Engine generates a Lightning payment to the Merchant's node/wallet.
    -   Payment is triggered by the verified intent as the "Proof of Work" for the transaction.
4.  **Confirmation**: Once the LN payment succeeds, the Sync Engine marks the intent as **SETTLED**.

## Agent Liquidity Management

To manage risk, Agent Hubs must maintain a "Settlement Float":
-   **Pre-Funding**: Agents deposit Sats into a MeshSats-controlled (or multi-sig) Lightning node.
-   **Offline Issuance**: Agents can only accept offline intents up to the value of their pre-funded deposit.
-   **Auto-Rebalance**: When the Agent syncs, their float is updated, and they can continue accepting transactions.

## Interoperability
MeshSats aims to be compatible with:
-   **LND / CLN / Eclair**: Core implementations.
-   **Greenlight**: For easier node management for agents.
-   **Breez SDK**: For seamless mobile Lightning integration.

---
*Built for the next billion Bitcoiners.*
