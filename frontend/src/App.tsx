import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  Shield, 
  Globe, 
  Cpu, 
  ArrowRight, 
  Wallet, 
  CheckCircle2, 
  Clock,
  ArrowUpRight,
  Menu,
  X
} from 'lucide-react';

const App = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);

  const connectWallet = () => {
    setConnecting(true);
    setTimeout(() => {
      setConnecting(false);
      setIsWalletConnected(true);
    }, 1500);
  };

  const transactions = [
    { id: 1, merchant: "Kero's Market", amount: "0.00042 BTC", status: "Settling", time: "2 mins ago" },
    { id: 2, merchant: "Lagos Waste Co", amount: "0.00015 BTC", status: "Offline Captured", time: "15 mins ago" },
    { id: 3, merchant: "SolarPawa Node", amount: "0.00210 BTC", status: "Settled", time: "1 hour ago" },
  ];

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="navbar">
        <div className="flex items-center gap-2">
          <Zap className="text-bitcoin" size={42} fill="#f7931a" />
          <span className="text-2xl font-extrabold tracking-tighter uppercase gradient-text">MeshSats</span>
        </div>
        <div className="hidden md:flex gap-8 items-center text-sm font-medium">
          <a href="#features" className="hover:text-bitcoin transition-colors">Protocol</a>
          <a href="#network" className="hover:text-bitcoin transition-colors">Network</a>
          <a href="#docs" className="hover:text-bitcoin transition-colors">Docs</a>
          <button 
            onClick={connectWallet}
            className={`btn-primary flex items-center gap-2 ${connecting ? 'opacity-70' : ''}`}
            disabled={connecting || isWalletConnected}
          >
            {isWalletConnected ? (
              <><CheckCircle2 size={18} /> Connected</>
            ) : connecting ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              >
                <Cpu size={18} />
              </motion.div>
            ) : (
              <><Wallet size={18} /> Connect Wallet</>
            )}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="status-badge mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Mainnet Beta Live
          </div>
          <h1 className="gradient-text leading-tight">
            The Bitcoin Mesh Layer <br /> for Offline Settlements
          </h1>
          <p>
            Bridging the connectivity gap in African markets. 
            Capture Bitcoin payments anywhere, settle whenever you're back online. 
            No internet? No problem.
          </p>
          <div className="flex justify-center gap-4">
            <button 
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary flex items-center gap-2 px-8 py-4 text-lg"
            >
              Get Started <ArrowRight size={20} />
            </button>
            <button 
              onClick={() => alert("MeshSats v1.0.0-beta Protocol Specs Loading...")}
              className="glass-card flex items-center gap-2 px-8 py-4 text-lg border-white/10"
            >
              View Specs
            </button>
          </div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <div id="features" className="features-grid">
        <FeatureCard 
          icon={<Globe className="text-bitcoin" />}
          title="Internet-Independent"
          description="Signed payment intents are captured offline via NFC or QR and synchronized when a node hits a mesh gateway."
          delay={0.1}
        />
        <FeatureCard 
          icon={<Shield className="text-bitcoin" />}
          title="Trustless Vouchers"
          description="Utilizing Schnorr-based multi-sig and DLCs for secure, trust-minimized offline credit transfers."
          delay={0.2}
        />
        <FeatureCard 
          icon={<Zap className="text-bitcoin" />}
          title="Lightning Native"
          description="Instant settlement through Lightning Network channels once nodes re-establish connectivity."
          delay={0.3}
        />
      </div>

      {/* Dashboard Preview Section */}
      <section className="max-w-6xl mx-auto px-5 mb-20">
        <div className="glass-card p-8 md:p-12 relative overflow-hidden">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Real-time Mesh Monitoring</h2>
              <p className="text-gray-400 mb-8">
                Merchants can track offline captures and see settlement status across the mesh network in real-time. 
                Our protocol ensures zero double-spending even in full disconnection.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-bitcoin/10 p-2 rounded-lg"><Cpu size={24} className="text-bitcoin" /></div>
                  <div>
                    <h4 className="font-semibold">Local Node Status</h4>
                    <p className="text-sm text-gray-500">Active • 14 Peers Nearby</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-bitcoin/10 p-2 rounded-lg"><Zap size={24} className="text-bitcoin" /></div>
                  <div>
                    <h4 className="font-semibold">Settlement Velocity</h4>
                    <p className="text-sm text-gray-500">Avg. 12 mins to Backbone</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="dashboard-preview space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">Channel Liquidity</h3>
              <div className="bg-white/5 border border-white/10 p-4 rounded-xl mb-6">
                <div className="flex justify-between text-xs mb-2 text-gray-400">
                  <span>Local Balance</span>
                  <span>Remote Balance</span>
                </div>
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden flex">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "65%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-bitcoin"
                  ></motion.div>
                  <div className="h-full bg-mesh-green/30 w-[35%]"></div>
                </div>
                <div className="flex justify-between mt-2 font-mono text-xs">
                  <span className="text-bitcoin">0.012 BTC</span>
                  <span className="text-mesh-green">0.007 BTC</span>
                </div>
              </div>

              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">Live Transactions</h3>
              {transactions.map((tx, i) => (
                <motion.div 
                  key={tx.id}
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 border border-white/10 p-4 rounded-xl flex justify-between items-center hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    {tx.status === "Settled" ? 
                      <CheckCircle2 className="text-mesh-green" size={20} /> : 
                      <Clock className="text-bitcoin animate-pulse" size={20} />
                    }
                    <div>
                      <p className="font-medium">{tx.merchant}</p>
                      <p className="text-xs text-gray-400">{tx.time}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-bitcoin font-bold">{tx.amount}</p>
                    <p className={`text-[10px] px-2 py-0.5 rounded uppercase font-bold ${tx.status === "Settled" ? 'bg-green-500/20 text-green-400' : 'bg-bitcoin/20 text-bitcoin'}`}>
                      {tx.status}
                    </p>
                  </div>
                </motion.div>
              ))}
              <div className="pt-4 flex justify-between items-center text-sm text-gray-500">
                <span>View all activity</span>
                <ArrowUpRight size={16} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <footer className="py-20 text-center border-t border-white/5">
        <h2 className="text-3xl font-bold mb-4">Ready to Build the Offline Future?</h2>
        <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
          Join hundreds of developers building the next generation of financial infrastructure for the African market.
        </p>
        <button className="btn-primary px-10 py-3">Join the Discord</button>
        <div className="mt-12 text-sm text-gray-600">
          © 2026 MeshSats Protocol. Sovereign Offline Settlements via <span className="text-bitcoin">meshsats.btc</span>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description, delay }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="glass-card"
  >
    <div className="bg-bitcoin/10 w-fit p-4 rounded-2xl mb-6">
      {React.cloneElement(icon, { size: 32 })}
    </div>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

const styles = `
.flex { display: flex; }
.items-center { align-items: center; }
.justify-between { justify-content: space-between; }
.justify-center { justify-content: center; }
.gap-2 { gap: 0.5rem; }
.gap-4 { gap: 1rem; }
.gap-8 { gap: 2rem; }
.gap-12 { gap: 3rem; }
.hidden { display: none; }
@media (min-width: 768px) { .hidden { display: flex; } .md\\:flex { display: flex; } .md\\:grid-cols-2 { grid-template-columns: repeat(2, 1fr); } }
.text-sm { font-size: 0.875rem; }
.text-lg { font-size: 1.125rem; }
.text-2xl { font-size: 1.5rem; }
.text-3xl { font-size: 1.875rem; }
.font-bold { font-weight: 700; }
.font-medium { font-weight: 500; }
.font-semibold { font-weight: 600; }
.tracking-tighter { letter-spacing: -0.05em; }
.tracking-wider { letter-spacing: 0.05em; }
.text-bitcoin { color: var(--bitcoin); }
.text-mesh-green { color: var(--mesh-green); }
.text-gray-400 { color: #a0aec0; }
.text-gray-500 { color: #718096; }
.text-gray-600 { color: #4a5568; }
.mb-4 { margin-bottom: 1rem; }
.mb-6 { margin-bottom: 1.5rem; }
.mb-8 { margin-bottom: 2rem; }
.mb-12 { margin-bottom: 3rem; }
.mb-20 { margin-bottom: 5rem; }
.mt-12 { margin-top: 3rem; }
.mt-5 { margin-top: 1.25rem; }
.px-5 { padding-left: 1.25rem; padding-right: 1.25rem; }
.px-8 { padding-left: 2rem; padding-right: 2rem; }
.px-10 { padding-left: 2.5rem; padding-right: 2.5rem; }
.py-0\\.5 { padding-top: 0.125rem; padding-bottom: 0.125rem; }
.py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
.py-4 { padding-top: 1rem; padding-bottom: 1rem; }
.py-20 { padding-top: 5rem; padding-bottom: 5rem; }
.w-fit { width: fit-content; }
.rounded-xl { border-radius: 0.75rem; }
.rounded-2xl { border-radius: 1rem; }
.rounded-full { border-radius: 9999px; }
.border-t { border-top-width: 1px; }
.border-white\\/5 { border-color: rgba(255, 255, 255, 0.05); }
.border-white\\/10 { border-color: rgba(255, 255, 255, 0.1); }
.bg-bitcoin\\/10 { background-color: rgba(247, 147, 26, 0.1); }
.bg-bitcoin\\/20 { background-color: rgba(247, 147, 26, 0.2); }
.bg-green-500\\/20 { background-color: rgba(74, 222, 128, 0.2); }
.bg-white\\/5 { background-color: rgba(255, 255, 255, 0.05); }
.bg-white\\/10 { background-color: rgba(255, 255, 255, 0.1); }
.font-mono { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; }
.uppercase { text-transform: uppercase; }
.animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: .5; } }
.max-w-2xl { max-width: 42rem; }
.max-w-6xl { max-width: 72rem; }
.mx-auto { margin-left: auto; margin-right: auto; }
.leading-tight { line-height: 1.25; }
.relative { position: relative; }
.absolute { position: absolute; }
.top-0 { top: 0; }
.left-0 { left: 0; }
.w-full { width: 100%; }
.h-full { height: 100%; }
.w-2 { width: 0.5rem; }
.h-2 { height: 0.5rem; }
.opacity-70 { opacity: 0.7; }
.opacity-75 { opacity: 0.75; }
`;

// Inject utility classes for simplicity in this demo environment
if (typeof document !== 'undefined') {
  const styleEl = document.createElement('style');
  styleEl.innerHTML = styles;
  document.head.appendChild(styleEl);
}

export default App;
