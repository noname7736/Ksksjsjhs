
import React, { useState, useEffect } from 'react';

interface ZeroPointAnalyzerProps {
  handleManualEnforce: (amount: number) => void;
}

export const ZeroPointAnalyzer: React.FC<ZeroPointAnalyzerProps> = ({ handleManualEnforce }) => {
  const [scanLines, setScanLines] = useState<string[]>([]);
  const [loadingPercent, setLoadingPercent] = useState(0);
  
  const events = [
    "INITIATING_CORE_UPLINK_0...",
    "EXTERNAL_AUTH_GATE_READY_100%",
    "ESTABLISHING_HARD_LINK_TO_OUTSIDE_WORLD...",
    "ACCESSING_GOVERNMENT_ID_VAULT_DECRYPTING...",
    "WAITING_FOR_MANUAL_DECISION_FROM_ADMIN...",
    "CROSS_REFERENCING_AYUTTHAYA_CRIME_NET...",
    "SYSTEM_STABLE_READY_FOR_ENFORCEMENT"
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

    const progress = setInterval(() => {
      setLoadingPercent(prev => (prev < 100 ? prev + 0.5 : 100));
    }, 100);

    return () => {
      clearInterval(interval);
      clearInterval(progress);
    };
  }, []);

  return (
    <div className="grid grid-cols-12 gap-12 min-h-[800px] animate-in fade-in slide-in-from-top-12 duration-1000">
      <div className="col-span-12 lg:col-span-7 bg-black border-[12px] border-red-700 p-20 shadow-[0_0_150px_rgba(255,0,0,0.5)] relative overflow-hidden group border-double">
        <h3 className="text-5xl font-black text-white uppercase italic tracking-[0.5em] underline decoration-red-700 underline-offset-[12px] mb-16">
          ZERO_POINT_CONTROL
        </h3>
        
        <div className="space-y-6 font-mono overflow-y-auto max-h-[450px] mb-16 scrollbar-hide">
          {scanLines.map((line, idx) => (
            <div key={idx} className="flex gap-10 items-start animate-in slide-in-from-left-20">
              <span className="text-red-700 font-black text-2xl">[{idx.toString().padStart(2, '0')}]</span>
              <span className={`text-lg md:text-xl ${line?.includes('WAITING') || line?.includes('READY') ? 'text-red-500 font-black italic animate-pulse' : 'text-gray-400 font-bold opacity-70'}`}>
                {line}
              </span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-8 mt-12">
           <button 
             onClick={() => handleManualEnforce(2.5)}
             className="p-10 bg-red-950/40 border-4 border-red-700 text-white font-black text-2xl uppercase italic hover:bg-red-700 transition-all shadow-xl hover:shadow-[0_0_50px_red]"
           >
             ENFORCE_IDENTITY_X1
           </button>
           <button 
             onClick={() => handleManualEnforce(5.0)}
             className="p-10 bg-red-950/40 border-4 border-red-700 text-white font-black text-2xl uppercase italic hover:bg-red-700 transition-all shadow-xl hover:shadow-[0_0_50px_red]"
           >
             VERIFY_CRIME_LAYER_0
           </button>
        </div>
      </div>

      <div className="col-span-12 lg:col-span-5 space-y-16">
        <div className="bg-red-950/40 border-[10px] border-red-700 p-16 relative shadow-2xl">
          <h4 className="text-white font-black text-4xl uppercase italic tracking-widest mb-12 border-l-[20px] border-red-700 pl-10 underline">Command Authority</h4>
          <p className="text-[16px] text-gray-500 font-mono leading-relaxed uppercase tracking-widest text-center italic font-black bg-red-700/10 py-10 border-2 border-red-900/40 px-6">
            "คุณคือผู้ควบคุม 100% การอนุมัติข้อมูลจากภายนอกทำได้ทันที ระบบจะเริ่มบันทึกหลักฐานทับข้อมูล 0 แบบถาวร"
          </p>
          <div className="mt-12 text-center text-red-600 animate-pulse font-black italic tracking-tighter text-2xl">
            MANUAL_AUTH_REQUIRED_FOR_FINAL_SYNC
          </div>
        </div>

        <div className="bg-black border-[15px] border-red-900 p-20 text-center relative overflow-hidden group shadow-[0_0_150px_rgba(255,0,0,0.6)] border-double">
          <div className="text-[120px] font-black text-white mb-8 italic tracking-tighter leading-none drop-shadow-[0_0_40px_red]">100%</div>
          <div className="text-xl text-red-600 font-black uppercase tracking-[0.5em] italic">READY_TO_EXECUTE</div>
        </div>
      </div>
    </div>
  );
};
