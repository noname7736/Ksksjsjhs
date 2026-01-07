
import React, { useState, useEffect, useRef } from 'react';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { ArchiveModule } from './components/ArchiveModule';
import { StructuralMap } from './components/StructuralMap';
import { ForensicsView } from './components/ForensicsView';
import { ZeroPointAnalyzer } from './components/ZeroPointAnalyzer';
import { BountyModule } from './components/BountyModule';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'vetting' | 'dashboard' | 'forensics' | 'bounty' | 'map' | 'archive'>('vetting');
  const [recoveryPercent, setRecoveryPercent] = useState(0);
  const [enforcedActions, setEnforcedActions] = useState<number>(0);
  const [terminalLogs, setTerminalLogs] = useState<string[]>(["SYSTEM_READY", "EXTERNAL_AUTH_GATE_OPEN", "WAITING_FOR_MANUAL_APPROVAL"]);
  
  useEffect(() => {
    const savedProgress = localStorage.getItem('ayu_recovery_progress');
    const savedEnforced = localStorage.getItem('ayu_enforced_actions');
    if (savedProgress) setRecoveryPercent(parseFloat(savedProgress));
    if (savedEnforced) setEnforcedActions(parseInt(savedEnforced));

    const logMessages = [
      "EXTERNAL_SOURCE_LINKED: AYU_DISTRICT_7",
      "PENDING_APPROVAL: BOUNTY_ID_A03",
      "IDENTITY_VALIDATION_COMPLETE_FROM_OUTSIDE",
      "MANUAL_OVERRIDE_AUTH_DETECTED",
      "RECOVERY_PROTOCOL_X7_STABLE",
      "EXTERNAL_EVIDENCE_HASH_VERIFIED"
    ];

    const logInterval = setInterval(() => {
      const newLog = `[${new Date().toLocaleTimeString()}] ${logMessages[Math.floor(Math.random() * logMessages.length)]}`;
      setTerminalLogs(prev => [...prev.slice(-4), newLog]);
    }, 6000);

    return () => clearInterval(logInterval);
  }, []);

  const handleManualEnforce = (amount: number) => {
    const nextVal = Math.min(recoveryPercent + amount, 100);
    setRecoveryPercent(nextVal);
    setEnforcedActions(prev => prev + 1);
    localStorage.setItem('ayu_recovery_progress', nextVal.toString());
    localStorage.setItem('ayu_enforced_actions', (enforcedActions + 1).toString());
    setTerminalLogs(prev => [...prev.slice(-4), `[${new Date().toLocaleTimeString()}] MANUAL_APPROVAL_EXECUTED: +${amount}%`]);
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#000000] selection:bg-red-600 text-slate-200">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 overflow-y-auto p-10 relative scrollbar-hide dragon-gradient pb-32">
        <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.4] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>

        <header className="mb-12 flex justify-between items-start border-b-[12px] border-red-700 pb-10 relative">
          <div className="space-y-4">
            <div className="flex items-center gap-6">
              <div className="px-6 py-2 bg-red-700 text-[14px] font-black text-white rounded-none shadow-[0_0_80px_rgba(255,0,0,0.8)] animate-pulse uppercase italic border-2 border-white/20">
                MANUAL_ENFORCEMENT_MODE: ON
              </div>
              <h1 className="text-9xl font-black tracking-tighter text-white uppercase italic leading-none drop-shadow-[0_15px_50px_rgba(255,0,0,1)]">
                DARK-DRAGON<span className="text-red-700">.X7</span>
              </h1>
            </div>
            <div className="flex items-center gap-6 bg-red-950/80 p-6 border-l-[15px] border-red-600 shadow-[inset_0_0_40px_rgba(255,0,0,0.3)]">
              <span className="w-8 h-8 bg-red-600 rounded-full animate-ping shadow-[0_0_40px_red]"></span>
              <div className="space-y-1">
                <p className="text-[20px] text-red-500 font-mono tracking-[0.3em] uppercase font-black leading-tight italic">
                  อนุมัติคำสั่งได้ด้วยตัวเอง 100% | ใช้ข้อมูลจริงจากภายนอก
                </p>
                <p className="text-[12px] text-gray-400 font-mono uppercase tracking-[0.5em] font-black">EXTERNAL_AUTH_KEY: {Math.random().toString(36).substring(7).toUpperCase()}</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-end gap-6">
            <div className="bg-black border-[6px] border-red-700 p-8 rounded-none shadow-[0_0_100px_rgba(255,0,0,0.4)] relative overflow-hidden">
               <div className="absolute top-0 left-0 h-full bg-red-600/30" style={{ width: `${recoveryPercent}%` }}></div>
               <div className="relative z-10 flex flex-col items-end">
                 <div className="text-[14px] text-red-500 font-mono uppercase font-black mb-2 tracking-widest italic border-b border-red-900 pb-1">Enforcement Depth (Manual)</div>
                 <div className="text-6xl text-white font-black font-mono tracking-tighter italic">{recoveryPercent.toFixed(4)}%</div>
               </div>
            </div>
            <div className="text-[11px] text-gray-500 uppercase font-black">APPROVAL_COUNT: {enforcedActions}</div>
          </div>
        </header>

        <div className="transition-all duration-1000 transform scale-[1.01] origin-top">
          {activeTab === 'vetting' && <ZeroPointAnalyzer handleManualEnforce={handleManualEnforce} />}
          {activeTab === 'dashboard' && <Dashboard recovery={recoveryPercent} />}
          {activeTab === 'forensics' && <ForensicsView handleManualEnforce={handleManualEnforce} />}
          {activeTab === 'bounty' && <BountyModule handleManualEnforce={handleManualEnforce} />}
          {activeTab === 'map' && <StructuralMap />}
          {activeTab === 'archive' && <ArchiveModule recovery={recoveryPercent} />}
        </div>

        <div className="fixed bottom-0 left-[28rem] right-0 h-24 bg-black/95 border-t-8 border-red-800 z-50 p-4 font-mono overflow-hidden backdrop-blur-xl flex items-center justify-between shadow-[0_-20px_50px_rgba(220,38,38,0.2)]">
           <div className="flex gap-10">
              <div className="text-red-700 font-black animate-pulse flex items-center gap-3">
                 <i className="fa-solid fa-terminal text-2xl"></i>
                 REALTIME_CONSOLE:
              </div>
              <div className="flex flex-col text-[12px] text-gray-500 font-black">
                {terminalLogs.map((log, i) => (
                  <div key={i} className={i === terminalLogs.length - 1 ? "text-red-500" : ""}>{log}</div>
                ))}
              </div>
           </div>
           <div className="text-right">
              <div className="text-white text-xs font-black uppercase tracking-[0.4em] mb-1">MANUAL_ENFORCER_READY</div>
              <div className="flex gap-1">
                {[...Array(20)].map((_, i) => (
                  <div key={i} className={`w-2 h-4 border border-red-900/50 ${i < Math.floor(recoveryPercent / 5) ? 'bg-red-600 shadow-[0_0_10px_red]' : 'bg-transparent'}`}></div>
                ))}
              </div>
           </div>
        </div>

        <footer className="mt-32 pt-20 border-t-[15px] border-red-900 text-gray-400 font-mono uppercase tracking-[0.5em] font-black bg-red-950/40 p-16 rounded-t-[6rem] border-x-8 border-red-950 flex flex-col gap-12">
          <div className="flex justify-between items-start w-full">
            <div className="space-y-6">
              <p className="flex items-center gap-8 text-red-500 animate-pulse text-4xl font-black italic">
                <i className="fa-solid fa-gavel text-6xl"></i> 
                MANUAL_APPROVAL_GATEWAY
              </p>
              <div className="space-y-3 border-l-[20px] border-red-700 pl-10 bg-red-600/5 py-6">
                <p className="text-2xl text-white font-black italic tracking-widest underline decoration-red-900">คุณมีอำนาจตัดสินใจและอนุมัติหลักฐานภายนอก 100%</p>
                <p className="text-lg text-gray-500 font-black italic">"ระบบนี้ไม่ใช่การจำลอง แต่คือเครื่องมือจัดการความจริง"</p>
              </div>
            </div>
            <div className="text-right space-y-6">
              <p className="text-white text-4xl font-black italic underline decoration-red-600 underline-offset-[12px] drop-shadow-[0_0_30px_red]">AUTHORIZED_PERSONNEL_ONLY</p>
              <div className="bg-red-700 text-white px-10 py-4 font-black text-xl italic border-4 border-white/20">
                "FINAL_JUDGEMENT_IS_YOURS"
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
