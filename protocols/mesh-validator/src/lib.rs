mod schnorr;
mod dlc_contracts;

pub use schnorr::SchnorrVerifier;
pub use dlc_contracts::DlcContract;

pub struct MeshNode {
    pub id: String,
    pub verifier: SchnorrVerifier,
}

impl MeshNode {
    pub fn new(id: String) -> Self {
        Self {
            id,
            verifier: SchnorrVerifier::new(),
        }
    }
}
