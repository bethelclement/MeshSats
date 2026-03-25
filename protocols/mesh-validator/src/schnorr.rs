//! MeshSats: Schnorr Signature Module (BIP-340)
//! Provides native verification logic for offline captured payment intents.

use secp256k1::{Secp256k1, Message, XOnlyPublicKey, schnorr::Signature};
use bitcoin_hashes::{sha256, Hash};

pub struct SchnorrVerifier {
    secp: Secp256k1<secp256k1::VerifyOnly>,
}

impl SchnorrVerifier {
    pub fn new() -> Self {
        Self {
            secp: Secp256k1::verification_only(),
        }
    }

    /// Verifies an offline intent signature against the tagged hash protocol.
    pub fn verify_payload(&self, pubkey: &XOnlyPublicKey, signature: &Signature, payload: &[u8]) -> bool {
        let tag = "MeshSatsIntent";
        let mut engine = sha256::Hash::engine();
        engine.input(tag.as_bytes());
        engine.input(payload);
        let msg_hash = sha256::Hash::from_engine(engine);
        let message = Message::from_slice(&msg_hash).expect("32 bytes");

        self.secp.verify_schnorr(signature, &message, pubkey).is_ok()
    }
}
