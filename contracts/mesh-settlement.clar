;; MeshSats: Trust-Minimized Settlement Contract
;; This Clarity contract (Stacks L2) coordinates off-chain mesh intents
;; with on-chain Bitcoin settlement.

(define-constant ERR_UNAUTHORIZED (err u100))
(define-constant ERR_ALREADY_SETTLED (err u101))

;; Data Map: Tracks the settlement status of Mesh Intents
(define-map mesh-intents 
  { intent-hash: (buff 32) } 
  { 
    settled: bool, 
    amount: uint, 
    recipient: principal, 
    timestamp: uint 
  }
)

;; Public Function: Commit a settled intent
;; This is called by a mesh aggregator node once a Lightning payment is confirmed
(define-public (settle-intent (intent-hash (buff 32)) (amount uint) (recipient principal))
  (begin
    ;; Ensure the intent hasn't been settled already
    (asserts! (is-none (get settled (map-get? mesh-intents { intent-hash: intent-hash }))) ERR_ALREADY_SETTLED)
    
    ;; Record the settlement on the Bitcoin-anchored Stacks layer
    (map-set mesh-intents 
      { intent-hash: intent-hash }
      { 
        settled: true, 
        amount: amount, 
        recipient: recipient, 
        timestamp: block-height 
      }
    )
    
    (ok true)
  )
)

;; Read-Only: Check if an intent is finalized
(define-read-only (is-intent-settled (intent-hash (buff 32)))
  (default-to false (get settled (map-get? mesh-intents { intent-hash: intent-hash })))
)
