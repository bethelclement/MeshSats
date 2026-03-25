# MeshSats: Risk and Trust Model

To build a credible Bitcoin infrastructure project, we must be honest about the trade-offs involved in offline-first payments. MeshSats does not claim to offer "trustless offline payments" on Bitcoin. Instead, we offer a **practical, risk-managed layer** for local commerce.

## 1. The Offline Double-Claim Risk

**Risk**: A user could create multiple signed intents for the same balance offline and present them to different merchants before any of them sync online.

-   **Mitigation (Infrastructure Level)**:
    -   **Reconciliation Engine**: The sync layer uses a first-seen-gets-the-sats model for final settlement.
    -   **Signed Timestamps & Nonces**: Prevents replays of the same intent.
-   **Mitigation (Local Level)**:
    -   **Transaction Caps**: Offline intents are limited to small amounts (e.g., 50,000 Sats) to cap potential loss.
    -   **Merchant Loyalty**: Most African market use cases involve recurring social-trust relationships between vendors and regular customers.

## 2. Agent Trust Assumptions

MeshSats often utilizes a hub-and-spoke model where a central Agent or Merchant Hub facilitates the sync.

**Assumption**: The Agent is honest and will sync the transaction queue.

-   **Risk**: An agent could collect intents but never settle them to the Lightning network.
-   **Protection**: 
    -   **Cryptographic Audit Trail**: Each intent is signed by the user. If an agent fails to settle, the user has proof of intent they can escalate.
    -   **Pre-Funded Float**: Agents operate within the limits of their pre-funded Lightning liquidity. Once they hit their limit, they cannot accept more intents until they sync and reconcile.

## 3. Delayed Settlement Risks

**Risk**: The price of Bitcoin (Sats) relative to local currency (NGN, GHS, KES) might change between the offline intent and the online settlement.

-   **Mitigation**:
    -   **Unit of Account**: MeshSats primarily operates in **Sats**. Value is locked in Sats at the moment of the intent. 
    -   **Local Pricing**: Merchant clients can implement a "volatility buffer" for offline pricing to account for settlement delays.

## 4. Double-Spending Offline vs. Online

**Risk**: A user who is currently offline with a merchant might also have an online wallet with the same balance and spend it while the merchant is still waiting to sync.

-   **Honest Position**: This risk exists. MeshSats is designed for:
    -   **Siloed Balances**: Users "top up" a MeshSats-enabled client for offline use (similar to a pre-paid card). This balance is separate from their main on-chain storage.
    -   **Shared Liquidity Pools**: Community-led pools where the Hub manages local risks.

## 5. Security of Local Data

**Risk**: A lost or stolen merchant device contains a queue of pending (unsettled) transaction intents.

-   **Protection**:
    -   **Encrypted Local Storage**: All pending intents are stored in an encrypted database (e.g., SQLCipher) on the device.
    -   **Signature-Only Transfers**: Even if the data is stolen, the thief cannot "spend" it; they can only sync it to the designated recipient (the merchant).

---

## Summary of Truth
MeshSats is a tool for **risk-mitigated local commerce**. It is suitable for small-value market transactions, recycling rewards, and community payouts. It is not designed for multi-million dollar trustless settlement in an offline state.

By being honest about these assumptions, we build infrastructure that judges and developers can trust.
