/**
 * MeshSats Bitcoin Layer Types
 * Formalizing the interface for offline payment intents and 
 * Lightning channel state management.
 */

export type PubKey = string; // Hex-encoded SECP256K1 public key
export type SchnorrSig = string; // BIP-340 Schnorr signature

export enum IntentStatus {
  CAPTURED = 'CAPTURED',
  VERIFIED = 'VERIFIED',
  RELAYING = 'RELAYING',
  SETTLING = 'SETTLING',
  SETTLED = 'SETTLED'
}

export interface MeshIntent {
  id: string;
  amountSats: number;
  recipient: PubKey;
  signature: SchnorrSig;
  timestamp: number;
  status: IntentStatus;
}

export interface ChannelState {
  channelId: string;
  localBalance: number;
  remoteBalance: number;
  nodeId: PubKey;
  isActive: boolean;
}

export interface NodeMetrics {
  peerCount: number;
  meshVelocity: number; // nodes per second propagation
  backboneDistance: number; // hop count to online node
}
