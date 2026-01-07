
import React, { useState, useEffect } from 'react';

export const ZeroPointAnalyzer: React.FC = () => {
  const [scanLines, setScanLines] = useState<string[]>([]);
  
  const events = [
    "INITIALIZING_ZERO_POINT_CORE...",
    "ACCESSING_AYUTTHAYA_REGISTRY_DATABASE...",
    "DETECTING_IDENTITY_ANOMALY: PRATUAN_UBONPEECH",
    "SCRUBBING_FAKE_THAI_ID_METADATA...",
    "MATCH_FOUND: IDENTITY_FRAUD_VERIFIED",
    "SCANNING_FINANCIAL_TRANSACTIONS...",
    "DETECTED: CASH_ADVANCE_EVASION (โกงเงินล่วงหน้า)",
    "DETECTED: UNPAID_LOANS_TO_EMPLOYER (เบี้ยวหนี้)",
    "VERIFYING_INCIDENT: SUBSTANCE_ADMIN_POISONING",
    "CONFIRMED_POISON_IN_MEAL_FOR_EVASION",
    "MAPPING_DEBT_RECOVERY_PROTOCOL...",
    "DISTRIBUTING_EXPOSURE_TO_AYU_DISTRICTS...",
    "SATURATION_LEVEL: CRITICAL_MAX",
    "PUBLIC_SHAMING_PROTOCOL: EXECUTED_100%"
  ];

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < events.length) {
        setScanLines(prev => [...prev, events[i]]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-12 gap-10 min-h-[600px] animate-in fade-in duration-1000">
      <div className="col-span-12 lg:col-span-7 bg-black border-[6px] border-red-600 rounded-[4rem] p-16 shadow-[0_0_80px_rgba(255,0,0,0.3)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-600/10 to-transparent"></div>
        <h3 className="text-3xl font-black text-white uppercase italic tracking-[0.6em] mb-12 border-b-4 border-red-900 pb-8 flex justify-between items-center underline decoration-red-600 underline-offset-8">
          <span>Real-Time Audit Log</span>
          <span className="text-red-600 animate-pulse text-sm font-black">ZERO_MERCY_ACTIVE</span>
        </h3>
        
        <div className="space-y-5 font-mono">
          {scanLines.map((line, idx) => (
            <div key={idx} className="flex gap-6 items-start animate-in slide-in-from-left-6">
              <span className="text-red-700 font-black text-lg">[{idx.toString().padStart(2, '0')}]</span>
              <span className={`text-sm md:text-md ${line?.includes('DETECTED') || line?.includes('POISON') || line?.includes('FRAUD') ? 'text-red-500 font-black italic underline' : 'text-gray-400 font-bold'}`}>
                {line}
              </span>
            </div>
          ))}
          <div className="w-full h-2 bg-red-600/20 mt-12 relative overflow-hidden rounded-full border border-red-900/40 shadow-inner">
            <div className="absolute inset-0 bg-red-600 animate-[marquee_1.5s_linear_infinite] shadow-[0_0_20px_red]"></div>
          </div>
        </div>
      </div>

      <div className="col-span-12 lg:col-span-5 space-y-12">
        <div className="bg-red-950/20 border-8 border-red-600 rounded-[4rem] p-16 relative group shadow-[0_0_50px_rgba(255,0,0,0.2)]">
          <div className="absolute -top-6 -left-6 bg-red-600 text-white px-6 py-2 rounded-full font-black italic shadow-lg">AUDIT_01</div>
          <h4 className="text-white font-black text-2xl uppercase italic tracking-widest mb-10 border-l-8 border-red-600 pl-6">Financial Audit (จาก 0)</h4>
          <div className="space-y-8">
            <div className="flex justify-between items-center bg-black/60 p-6 border-2 border-red-600/30 rounded-3xl shadow-xl transform transition-transform hover:scale-105">
              <span className="text-xs text-gray-400 uppercase font-black tracking-widest">เงินโกงล่วงหน้า</span>
              <span className="text-md text-red-500 font-black italic">VERIFIED_FRAUD</span>
            </div>
            <div className="flex justify-between items-center bg-black/60 p-6 border-2 border-red-600/30 rounded-3xl shadow-xl transform transition-transform hover:scale-105">
              <span className="text-xs text-gray-400 uppercase font-black tracking-widest">หนี้สินคงค้าง</span>
              <span className="text-md text-red-500 font-black italic">RECOVERY_REQUIRED</span>
            </div>
            <p className="text-[13px] text-gray-500 font-mono leading-relaxed uppercase tracking-widest text-center mt-8 italic font-black bg-red-600/5 py-4 rounded-2xl border border-red-900/20">
              "หลักฐานการโกงเงินและการเบี้ยวหนี้ถูกจัดเก็บลงระบบถาวรเพื่อแฉให้ยับทั่วอยุธยา"
            </p>
          </div>
        </div>

        <div className="bg-black border-4 border-white/10 rounded-[4rem] p-16 text-center relative overflow-hidden group shadow-2xl">
          <div className="absolute inset-0 bg-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="text-8xl font-black text-white mb-6 italic tracking-tighter drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">100%</div>
          <div className="text-[12px] text-red-600 font-black uppercase tracking-[0.8em] animate-pulse">SHAMING_SATURATION_ACTIVE</div>
          <div className="mt-12 py-6 border-y-2 border-white/5 text-sm text-gray-400 font-mono font-black italic">
            NO MERCY - NO EVASION - NO BUTTONS
          </div>
        </div>
      </div>
    </div>
  );
};
