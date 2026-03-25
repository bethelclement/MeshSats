# MeshSats: African Use Cases

MeshSats is built specifically for the unique economic landscapes of the African continent. We focus on areas where traditional financial rails fail due to connectivity, cost, or lack of infrastructure.

## 1. Market Vendor Payments
**Problem**: Open-air markets (e.g., Balogun in Lagos, Kejetia in Kumasi) often have patchy connectivity. Digital payments fail during peak hours, forcing vendors back to cash which is risky and hard to track.

-   **Existing Failure**: Mobile money or banking apps timeout; transaction confirmation delayed by minutes.
-   **How MeshSats Helps**: Vendors accept signed offline intents. Confirmation is instant at the local level. Settlement happens in the background when signal returns.
-   **Success**: Reduced cash handling, instant checkout experience without internet.

## 2. Waste & Recycling Reward Payouts
**Problem**: Waste collectors in informal sectors (circular economy) need immediate rewards for their deliveries to recycling hubs, often in areas with poor infrastructure.

-   **Existing Failure**: Hubs lack cash; bank transfers are too slow for "daily bread" needs.
-   **How MeshSats Helps**: Hubs issue "Sats Vouchers" offline. Collectors hold these as proof of value, which automatically syncs to their Bitcoin/Lightning wallet once they hit a 3G zone.
-   **Success**: Incentivized recycling, transparent audit trail for funders, digital identity for informal workers.

## 3. Agent-Assisted Collections
**Problem**: Local agents (Aba agents, POS kiosks) collect utility payments or school fees in rural areas. They need a way to prove payment to the customer without waiting for a bank server response.

-   **Existing Failure**: Customer doesn't trust the agent unless they see a "Success" message; SMS alerts are often delayed.
-   **How MeshSats Helps**: The agent's device generates a local, verifiable proof of receipt. The transaction is queued and settled to the central provider's Lightning node later.
-   **Success**: Increased trust in agent networks, reach into the last mile.

## 4. Community Stipends & Payouts
**Problem**: NGOs or community programs need to distribute funds (stipends) in remote villages for local projects. 

-   **Existing Failure**: Physical cash transport is dangerous and untraceable.
-   **How MeshSats Helps**: Program leads distribute digital "claim intents" offline. Local shops accept these for goods, and the shopkeepers settle them via the MeshSats sync engine.
-   **Success**: Safe disbursement, programmable money for social impact, low overhead.

## Summary Table: Trust Assumptions

| Use Case | Trust Assumption | Risk Mitigation |
| :--- | :--- | :--- |
| **Market** | Merchant trusts customer intent signature. | Transaction caps; merchant-known customers. |
| **Waste** | Collector trusts the Hub's voucher. | Hub is a known physical anchor in the community. |
| **Agents** | Customer trusts the local proof. | Cryptographic signatures; verifiable by any client. |
| **Stipends** | Shopkeeper trusts the program's intent. | Pre-funded deposit in the Lightning settlement node. |

---
*MeshSats: Practical Rails for Real Problems.*
