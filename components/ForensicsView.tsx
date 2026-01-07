
import React from 'react';

interface ForensicsViewProps {
  handleManualEnforce: (amount: number) => void;
}

const incidentData = {
  id: "AYU-CORE-FORENSIC-PRO-X7",
  subject: "นางสาวประทวน อุบลพีช (PRATUAN UBONPEECH)",
  type: "CRITICAL_FRAUD & DEBT_EVASION",
  location: "พระนครศรีอยุธยา (CORE) & NATIONWIDE",
  status: "ENFORCEMENT_LOCKED_100%",
  timeline: [
    { id: 'T1', time: "08:15 AM", event: "เบิกเงินล่วงหน้าอ้างเหตุจำเป็นครอบครัว", weight: 5 },
    { id: 'T2', time: "12:30 PM", event: "เตรียมอาหารมื้อพิเศษให้คนดูแล (ใส่ยาผสม)", weight: 15 },
    { id: 'T3', time: "01:00 PM", event: "เป้าหมายหลบหนีออกจากพื้นที่พร้อมทรัพย์สิน", weight: 10 },
    { id: 'T4', time: "06:45 PM", event: "พบคนดูแลหมดสติ หลักฐานการวางยาชัดเจน", weight: 20 }
  ],
  fingerprint: "0X7F4B2E1A9C8D3F0A1B2C3D4E5F6A7B8C9D0E1F"
};

export const ForensicsView: React.FC<ForensicsViewProps> = ({ handleManualEnforce }) => {
  return (
    <div className="max-w-7xl mx-auto space-y-24 animate-in fade-in slide-in-from-bottom-32 duration-1000">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        <div className="lg:col-span-5 space-y-16">
          <div className="bg-black border-[15px] border-red-700 p-20 relative overflow-hidden shadow-[0_0_200px_rgba(255,0,0,0.6)] border-double">
            <div className="text-center mb-24 border-b-8 border-red-700/30 pb-20">
               <div className="w-56 h-56 bg-red-950 border-[12px] border-red-700 rounded-none flex items-center justify-center mx-auto mb-16 relative rotate-6 shadow-[0_0_100px_rgba(255,0,0,0.8)] border-double">
                  <i className="fa-solid fa-id-card-clip text-[120px] text-white animate-pulse"></i>
               </div>
               <h2 className="text-7xl font-black text-white uppercase italic tracking-tighter leading-tight mb-8">
                 {incidentData.subject}
               </h2>
               <div className="py-6 px-16 bg-red-700 text-white font-black text-2xl rounded-none inline-block shadow-[0_0_60px_red] italic uppercase border-4 border-white/20">
                 PRIMARY_TARGET
               </div>
            </div>

            <div className="space-y-12 bg-red-700/10 p-10 border-2 border-red-900/50 text-center">
              <h3 className="text-2xl font-black text-red-500 uppercase tracking-[0.3em] mb-4">Manual Identity Lock</h3>
              <p className="text-xs text-gray-500 mb-8 font-mono">ยืนยันการระบุตัวตน 100% จากพิกัดและพยานหลักฐานภายนอก</p>
              <button 
                onClick={() => handleManualEnforce(10)}
                className="w-full py-6 bg-red-700 text-white font-black text-2xl uppercase italic border-4 border-white/10 hover:bg-red-600 transition-all shadow-[0_0_50px_red]"
              >
                AUTHORIZE_TARGET_ID
              </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-16">
          <div className="bg-black border-[10px] border-red-700/40 p-20 relative overflow-hidden shadow-3xl">
             <h3 className="text-5xl font-black text-white tracking-[0.5em] uppercase mb-20 flex items-center gap-12 border-l-[20px] border-red-700 pl-12 italic underline decoration-red-900">
               INCIDENT_AUTHORIZATION
             </h3>
             
             <div className="space-y-12 relative">
               <div className="absolute left-[39px] top-0 bottom-0 w-2 bg-red-900/30"></div>
               {incidentData.timeline.map((step, idx) => (
                 <div key={idx} className="flex gap-12 items-center group">
                    <div className="w-20 h-20 bg-red-700 rounded-none border-4 border-white flex items-center justify-center z-10 shadow-[0_0_30px_red]">
                       <i className="fa-solid fa-check text-white text-3xl"></i>
                    </div>
                    <div className="flex-1 bg-red-950/20 p-8 border-4 border-red-900/40 relative hover:border-red-600 transition-all">
                       <div className="absolute -top-4 right-6 bg-red-700 text-white px-6 py-1 text-xs font-black italic">{step.time}</div>
                       <div className="text-2xl text-white font-black uppercase mb-4 italic leading-none">{step.event}</div>
                       <button 
                         onClick={() => handleManualEnforce(step.weight)}
                         className="px-8 py-2 bg-red-600/20 border-2 border-red-600 text-red-500 text-xs font-black uppercase hover:bg-red-600 hover:text-white transition-all"
                       >
                         AUTHORIZE_STEP_&_CLAIM (+{step.weight}%)
                       </button>
                    </div>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
