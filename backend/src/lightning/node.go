package lightning

import (
	"fmt"
	"time"
)

// ChannelState representing a local LDK/LND channel point
type ChannelState struct {
	ID           string
	LocalBalance int64
	RemoteBalance int64
	IsActive     bool
}

// Node handles the LND/CLN interface logic
type Node struct {
	PubKey   string
	Channels []ChannelState
}

func (n *Node) SyncChannels() {
	fmt.Printf("[LN] Syncing node %s with Lightning backbone...\n", n.PubKey)
	for i := range n.Channels {
		n.Channels[i].IsActive = true
	}
}

func (n *Node) OpenChannel(peer string, sats int64) error {
	fmt.Printf("[LN] Initiating Dual-Funded Channel open with %s\n", peer)
	time.Sleep(1 * time.Second)
	return nil
}
