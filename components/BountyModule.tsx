
import React, { useState } from 'react';

interface BountyModuleProps {
  handleManualEnforce: (amount: number) => void;
}

const bounties = [
  { id: "REWARD_A01", target: "ผู้ให้ที่พักพิง/ปกปิดแหล่งกบดาน", amount: "5,000 - 20,000 THB", weight: 5, requirement: "คลิปวิดีโอ/ภาพถ่ายพิกัดที่ชัดเจน", status: "ACTIVE" },
  { id: "REWARD_A02", target: "ผู้ช่วยปลอมแปลงเอกสาร/บัตรประชาชน", amount: "10,000 - 50,000 THB", weight: 10, requirement: "หลักฐานแชท/สลิปโอนเงิน/พยานบุคคล", status: "ACTIVE" },
  { id: "REWARD_A03", target: "ผู้ร่วมขบวนการวางยา/ฉ้อโกงเบิกเงิน", amount: "20,000 - 100,000 THB", weight: 25, requirement: "หลักฐานการวางแผนและพฤติการณ์ชัดเจน", status: "CRITICAL" },
];

export const BountyModule: React.FC<BountyModuleProps> = ({ handleManualEnforce }) => {
  const [authCode, setAuthCode] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const executeApproval = (weight: number) => {
    if (!authCode) {
      alert("กรุณาระบุ EXTERNAL_AUTH_KEY เพื่อดำเนินการ");
      return;
    }
    setIsProcessing(true);
    setTimeout(() => {
      handleManualEnforce(weight);
      setIsProcessing(false);
      setAuthCode('');
      alert("ANNOUNCEMENT: MANUAL_APPROVAL_COMPLETE_100% | ระบบได้รับข้อมูลและดำเนินการแล้ว");
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-24 animate-in fade-in zoom-in duration-1000">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        <div className="lg:col-span-8 space-y-16">
          <div className="bg-black border-[15px] border-red-700 p-20 relative overflow-hidden shadow-[0_0_150px_rgba(255,0,0,0.5)] border-double">
            <h3 className="text-5xl font-black text-white tracking-[0.5em] uppercase mb-16 flex items-center gap-12 border-l-[20px] border-red-700 pl-12 italic underline decoration-red-900">
              MANUAL_APPROVAL_TERMINAL
            </h3>

            <div className="p-12 bg-red-950/20 border-4 border-dashed border-red-600 mb-16 space-y-10">
               <div className="text-center">
                 <p className="text-lg text-white font-black uppercase italic mb-4">ยืนยันหลักฐานและอนุมัติจากภายนอก</p>
                 <p className="text-xs text-gray-500 font-mono">กรอกรหัสยืนยันหรือ ID หลักฐานที่ได้รับจากภายนอกเพื่อดำเนินการ Enforce 100%</p>
               </div>
               <input 
                 type="text" 
                 value={authCode}
                 onChange={(e) => setAuthCode(e.target.value.toUpperCase())}
                 placeholder="ENTER_EXTERNAL_AUTH_CODE..."
                 className="w-full bg-black border-4 border-red-700 p-6 text-white font-mono text-3xl text-center focus:outline-none focus:border-red-500 shadow-inner"
               />
            </div>

            <div className="space-y-10">
              {bounties.map((b, idx) => (
                <div key={idx} className="bg-red-950/10 border-4 border-red-900/40 p-12 hover:bg-red-950/30 transition-all group relative">
                   <div className="absolute top-0 right-0 bg-red-700 text-white px-8 py-2 font-black italic">{b.status}</div>
                   <div className="flex justify-between items-center mb-8">
                     <div>
                       <div className="text-[12px] text-red-500 font-mono font-black uppercase mb-2">Target_ID: {b.id}</div>
                       <div className="text-3xl text-white font-black italic uppercase leading-none">{b.target}</div>
                     </div>
                     <div className="text-right">
                       <div className="text-[10px] text-gray-500 font-black mb-1 uppercase">Recovery Weight</div>
                       <div className="text-4xl text-red-600 font-black italic">+{b.weight}%</div>
                     </div>
                   </div>
                   <div className="flex justify-between items-end">
                      <p className="text-sm text-gray-400 italic max-w-lg">"{b.requirement}"</p>
                      <button 
                        onClick={() => executeApproval(b.weight)}
                        disabled={isProcessing}
                        className="px-12 py-4 bg-red-700 text-white font-black text-xl uppercase italic hover:bg-red-600 transition-all shadow-[0_0_40px_rgba(255,0,0,0.4)] border-2 border-white/10 active:scale-95 disabled:opacity-50"
                      >
                        {isProcessing ? 'PROCESSING...' : 'APPROVE_&_ENFORCE'}
                      </button>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-16">
          <div className="bg-red-950/40 border-[10px] border-red-800 p-16 relative overflow-hidden shadow-2xl">
             <h3 className="text-3xl font-black text-white tracking-[0.4em] uppercase mb-12 border-b-8 border-red-700/50 pb-8 italic text-center underline">
               EXTERNAL_VALIDATION
             </h3>
             <div className="space-y-8">
                <div className="bg-black/90 p-8 border-2 border-red-700 text-center">
                  <div className="text-xs text-red-600 font-black uppercase mb-4 italic">EXTERNAL_LINK_STATUS</div>
                  <div className="text-2xl text-white font-black animate-pulse">LIVE_CONNECTION_100%</div>
                </div>
                <div className="p-8 border-2 border-white/5 bg-black/40 text-xs text-gray-400 font-mono leading-relaxed uppercase italic">
                  "ผู้ใช้งานทำหน้าที่เป็นผู้ตรวจสอบสูงสุด (Chief Enforcer) สามารถอนุมัติเบาะแสจากช่องทางภายนอกได้ทันทีที่หลักฐานชัดเจน ข้อมูลจะถูกบันทึกถาวรลงฐานข้อมูล AYU-X7"
                </div>
             </div>
             <div className="mt-16 w-full h-2 bg-red-900 overflow-hidden">
                <div className="h-full bg-red-500 animate-[marquee_2s_linear_infinite]"></div>
             </div>
          </div>

          <div className="bg-black border-[8px] border-red-900 p-12 text-center shadow-inner relative overflow-hidden group">
             <div className="text-6xl text-red-700 animate-pulse mb-8">
               <i className="fa-solid fa-stamp"></i>
             </div>
             <h4 className="text-lg text-white font-black uppercase italic mb-4">Manual Override Authority</h4>
             <p className="text-[11px] text-gray-500 font-mono uppercase font-black italic">
               การตัดสินใจของคุณมีผลต่อระบบ 100% <br/> ไม่มีการย้อนคืน <br/> เริ่มทำงานจากจุด 0 ทุกการอนุมัติ
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};
