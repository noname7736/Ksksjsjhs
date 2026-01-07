
import React from 'react';

export const ArchiveModule: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto py-16 px-8">
      <div className="bg-black border-8 border-red-600 rounded-[5rem] p-24 backdrop-blur-3xl relative overflow-hidden text-center shadow-[0_0_100px_rgba(220,38,38,0.4)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.1)_0%,transparent_70%)] animate-pulse"></div>
        
        <div className="w-32 h-32 bg-red-950/40 rounded-full flex items-center justify-center mx-auto mb-14 border-4 border-red-600 shadow-[0_0_80px_rgba(220,38,38,0.5)] relative">
          <i className="fa-solid fa-gavel text-5xl text-white animate-bounce"></i>
          <div className="absolute inset-0 border-4 border-red-600 rounded-full animate-ping opacity-30"></div>
        </div>

        <h2 className="text-6xl font-black text-white mb-10 italic tracking-tighter uppercase drop-shadow-2xl">
           FINAL_JUDGEMENT: EXPOSED
        </h2>
        
        <p className="text-gray-300 max-w-2xl mx-auto mb-16 text-lg leading-relaxed font-black uppercase italic tracking-wider">
          พฤติการณ์ <span className="text-red-600 text-2xl px-2">ประทวน อุบลพีช</span> ถูกบันทึกลงในฐานข้อมูลถาวรของระบบ 
          <span className="text-red-500 font-bold">AYU-CORE-FINAL</span> แล้วอย่างสมบูรณ์ ไร้การแก้ไข ไร้มนุษย์ควบคุม 
          และกระจายออกสู่สาธารณะโดยไม่อาจย้อนคืนได้
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left relative z-10">
          {[
            { label: "Status", val: "REAL_ACTIVE", color: "text-red-600" },
            { label: "Human Node", val: "ELIMINATED", color: "text-white" },
            { label: "Exposure", val: "CRITICAL", color: "text-red-500" },
            { label: "Permanence", val: "INFINITE", color: "text-white" }
          ].map((item, idx) => (
            <div key={idx} className="bg-white/5 p-6 rounded-[2rem] border-2 border-red-600/20 backdrop-blur-xl">
              <span className="text-[10px] text-gray-500 font-black uppercase block mb-2">{item.label}</span>
              <span className={`text-sm ${item.color} font-mono font-black uppercase tracking-widest`}>{item.val}</span>
            </div>
          ))}
        </div>

        <div className="mt-20 p-10 bg-red-950/20 border-4 border-red-600/40 rounded-[3rem] shadow-inner">
          <p className="text-sm text-white italic font-black font-mono leading-relaxed uppercase">
            "การเรียบเรียงต้นฉบับเสร็จสิ้น ภารกิจแฉละเอียดทั่วประเทศมีผลทำงานจริงทันทีและถาวร ณ จังหวัดพระนครศรีอยุธยาและทุกที่ที่เป้าหมายเหยียบย่ำ"
          </p>
        </div>
      </div>
    </div>
  );
};
