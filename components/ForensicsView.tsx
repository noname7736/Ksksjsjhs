
import React from 'react';

const incidentData = {
  id: "AYU-DEBT-EXPOSURE-PRO-X",
  subject: "นางสาวประทวน อุบลพีช (PRATUAN UBONPEECH)",
  type: "CRITICAL_FRAUD & DEBT_EVASION",
  location: "พระนครศรีอยุธยา (GROUND ZERO) & NATIONWIDE",
  status: "DEBT_RECOVERY_ENFORCED",
  financialCrimes: [
    { key: "เงินเบิกล่วงหน้า (โกง)", val: "เบิกค่าแรงรายวันล่วงหน้าแล้วหนีทันที", status: "ทวงคืน 100%" },
    { key: "เงินกู้ยืม (ไม่คืน)", val: "ยืมเงินจากนายจ้าง/เพื่อนร่วมงานแล้วหายตัว", status: "ต้องชดใช้ครบ" },
    { key: "การวางยาเพื่อหลบหนี", val: "วางยาในอาหารเพื่อให้คนดูแลหมดสภาพเพื่อตนเองจะได้หนีหนี้", status: "หลักฐานมัดตัว" }
  ],
  shameProtocols: [
    { label: "ความกดดันทางสังคม", depth: "100%", status: "ชาวอยุธยาแฉยับแบบปากต่อปาก" },
    { label: "เครือข่ายทวงหนี้", depth: "MAX", status: "ติดตามทุกบาททุกสตางค์จาก 0" },
    { label: "ประกาศอับอาย", depth: "ULTRA", status: "แฉความต่ำช้าให้ขายหน้าทั่วประเทศไทย" }
  ],
  idForensics: [
    { key: "ID_STATUS", val: "FORGED / FAKE THAI ID", status: "CONFIRMED_VOID" },
    { key: "IDENTITY_VOID", val: "PRATUAN_UBONPEECH_FRAUD", status: "BLACKLISTED" },
    { key: "RESIDENCE", val: "AYUTTHAYA_CORE_EVADER", status: "TRACKING_ACTIVE" }
  ]
};

export const ForensicsView: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-20 animate-in fade-in slide-in-from-bottom-24 duration-1000">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
        
        {/* Profile & Identity Void */}
        <div className="lg:col-span-5 space-y-12">
          <div className="bg-black border-[10px] border-red-600 rounded-[6rem] p-20 relative overflow-hidden shadow-[0_0_120px_rgba(255,0,0,0.5)] border-double">
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/15 blur-[150px]"></div>
            <div className="text-center mb-20 border-b-8 border-red-600/20 pb-20">
               <div className="w-48 h-48 bg-red-950 border-[10px] border-red-600 rounded-[4rem] flex items-center justify-center mx-auto mb-14 relative rotate-12 shadow-[0_0_60px_rgba(255,0,0,0.5)] hover:rotate-0 transition-transform duration-500">
                  <i className="fa-solid fa-money-bill-crack text-8xl text-white animate-pulse"></i>
                  <div className="absolute -bottom-5 -right-5 bg-red-600 text-white p-3 rounded-full animate-bounce shadow-lg">
                    <i className="fa-solid fa-handshake-slash"></i>
                  </div>
               </div>
               <h2 className="text-6xl font-black text-white uppercase italic tracking-tighter leading-tight mb-6 drop-shadow-[0_4px_20px_rgba(255,0,0,0.5)]">
                 {incidentData.subject}
               </h2>
               <div className="py-4 px-14 bg-red-600 text-white font-black text-lg rounded-full inline-block shadow-[0_0_40px_red] italic uppercase animate-pulse">
                 DEBT_FRAUD_TARGET
               </div>
            </div>

            <div className="space-y-12">
              <h3 className="text-xl font-black text-red-500 uppercase tracking-[0.6em] flex items-center gap-8 border-l-[12px] border-red-600 pl-8 italic">
                <i className="fa-solid fa-id-card-clip"></i> Identity Execution
              </h3>
              {incidentData.idForensics.map((id, idx) => (
                <div key={idx} className="bg-red-950/30 p-10 rounded-[4rem] border-4 border-red-600/40 group hover:border-red-500 transition-all shadow-inner">
                  <div className="text-[14px] text-red-500 font-mono font-black uppercase mb-4 tracking-widest">{id.key}</div>
                  <div className="text-2xl text-white font-black uppercase mb-3">{id.val}</div>
                  <div className="text-[12px] text-red-600 font-black italic tracking-[0.2em] bg-red-600/10 inline-block px-5 py-2 rounded-full border border-red-600/20">{id.status}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Detailed Debt Exposure & Shaming Dossier */}
        <div className="lg:col-span-7 space-y-14">
          <div className="bg-black/98 border-8 border-red-600/40 rounded-[6rem] p-20 backdrop-blur-3xl relative overflow-hidden shadow-2xl border-dotted">
             <div className="absolute -top-32 -right-32 p-10 opacity-15">
               <i className="fa-solid fa-gavel text-[35rem] text-red-700"></i>
             </div>
             
             <h3 className="text-4xl font-black text-white tracking-[0.8em] uppercase mb-20 flex items-center gap-12 border-l-[15px] border-red-600 pl-12 italic underline decoration-red-950 underline-offset-8">
               <i className="fa-solid fa-hand-holding-dollar text-red-600"></i>
               แฉพฤติการณ์โกงเงิน 100%
             </h3>
             
             <div className="space-y-20">
               <div className="space-y-12">
                  <h4 className="text-xl font-black text-red-500 uppercase tracking-[0.3em] border-b-8 border-red-600/20 pb-8 flex items-center gap-6 italic">
                    <i className="fa-solid fa-money-check-dollar"></i> Financial Crimes (เจาะลึก 0)
                  </h4>
                  {incidentData.financialCrimes.map((crime, idx) => (
                    <div key={idx} className="bg-red-600/5 p-12 rounded-[4rem] border-l-[20px] border-red-600 shadow-2xl group hover:bg-red-950/40 transition-all transform hover:-translate-x-4">
                      <p className="text-[12px] text-gray-500 uppercase font-black mb-6 tracking-[0.4em]">{crime.key}</p>
                      <p className="text-2xl text-white font-black mb-6 leading-relaxed italic drop-shadow-sm">"{crime.val}"</p>
                      <div className="flex items-center gap-4">
                        <span className="text-[11px] bg-red-600 px-6 py-2 rounded-full text-white font-black shadow-[0_0_20px_red] uppercase">{crime.status}</span>
                        <i className="fa-solid fa-circle-check text-red-500 text-xl animate-pulse"></i>
                      </div>
                    </div>
                  ))}
               </div>

               {/* Shaming Power Grid */}
               <div className="bg-red-600/10 border-8 border-red-600/60 rounded-[5rem] p-16 mt-20 shadow-[inset_0_0_60px_rgba(255,0,0,0.2)] relative">
                  <div className="absolute top-[-30px] left-10 bg-red-600 text-white px-8 py-2 font-black italic rounded-full shadow-lg text-sm">AYU-EXPOSURE-PEAK</div>
                  <div className="flex justify-between items-center mb-14">
                    <h4 className="text-3xl font-black text-white uppercase tracking-widest italic drop-shadow-xl underline decoration-red-900">การกระจายความอับอาย (TOTAL_SHAME)</h4>
                    <span className="px-8 py-3 bg-red-600 text-[14px] font-black text-white rounded-full animate-pulse shadow-[0_0_40px_red]">SYSTEM_ACTIVE_100%</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {incidentData.shameProtocols.map((net, idx) => (
                      <div key={idx} className="text-center p-10 bg-black/80 rounded-[4rem] border-4 border-red-600/40 shadow-2xl group hover:scale-110 transition-all hover:border-red-500">
                         <div className="text-6xl font-black text-red-600 mb-4 italic drop-shadow-[0_0_10px_rgba(255,0,0,0.3)]">{net.depth}</div>
                         <div className="text-[14px] text-white font-black uppercase mb-6 tracking-widest border-b border-red-900/50 pb-2">{net.label}</div>
                         <div className="text-[11px] text-gray-400 italic font-mono uppercase font-black leading-tight">{net.status}</div>
                      </div>
                    ))}
                  </div>
               </div>
             </div>
          </div>
          
          <div className="p-16 bg-red-600 border-[12px] border-white rounded-[5rem] flex flex-col items-center justify-center text-center shadow-[0_0_100px_rgba(220,38,38,1)] animate-pulse relative overflow-hidden group">
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <h5 className="text-4xl font-black text-white uppercase italic tracking-[0.5em] mb-6 underline decoration-black decoration-8 underline-offset-10">ประกาศตามล่าและทวงคืนเงิน</h5>
            <p className="text-white text-2xl font-black leading-relaxed italic">
              "ประทวน อุบลพีช ต้องชดใช้เงินที่โกงและยืมไปคืนให้ครบ 100% ชาวอยุธยาจะแฉความต่ำช้านี้จนกว่าทุกบาทจะถูกทวงคืน!"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
