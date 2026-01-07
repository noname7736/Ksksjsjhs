
import React from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, BarChart, Bar, Cell } from 'recharts';

const distributionData = [
  { region: 'อยุธยา (SHAME_ZONE)', value: 100 },
  { region: 'ทวงคืนเงินกู้', value: 95 },
  { region: 'ทวงเงินเบิกล่วงหน้า', value: 100 },
  { region: 'แฉพฤติกรรมวางยา', value: 100 },
  { region: 'บัญชีดำสังคม', value: 98 },
  { region: 'ความกดดัน 100%', value: 100 },
];

const exposureMetrics = [
  { subject: 'ความอับอายขายหน้า', A: 150, B: 150, fullMark: 150 },
  { subject: 'พฤติการณ์วางยา', A: 150, B: 150, fullMark: 150 },
  { subject: 'ข้อมูลหนี้สินจริง', A: 150, B: 150, fullMark: 150 },
  { subject: 'ความกดดันทางสังคม', A: 150, B: 145, fullMark: 150 },
  { subject: 'การติดตามเงินคืน', A: 150, B: 150, fullMark: 150 },
];

export const Dashboard: React.FC = () => {
  return (
    <div className="grid grid-cols-12 gap-12 pb-24">
      {/* Intense Ticker - PUBLIC SHAMING FOCUS */}
      <div className="col-span-12 flex gap-6 overflow-hidden py-10 border-y-[15px] border-red-600 mb-12 font-mono text-3xl font-black uppercase tracking-[0.8em] text-white whitespace-nowrap bg-red-600/40 shadow-[0_0_100px_rgba(255,0,0,0.5)] italic">
        <div className="animate-marquee">
          แฉยับ ประทวน อุบลพีช : โกงเงินเบิกล่วงหน้า ยืมเงินไม่คืน วางยาในอาหาร ... ชาวอยุธยาจงรับรู้และช่วยกันทวงคืนเงิน 100% ... ไร้ที่ซุกหัวนอน ... ต้องชดใช้คืนทุกบาท ... 
        </div>
        <div className="animate-marquee2 absolute top-0">
          แฉยับ ประทวน อุบลพีช : โกงเงินเบิกล่วงหน้า ยืมเงินไม่คืน วางยาในอาหาร ... ชาวอยุธยาจงรับรู้และช่วยกันทวงคืนเงิน 100% ... ไร้ที่ซุกหัวนอน ... ต้องชดใช้คืนทุกบาท ... 
        </div>
      </div>

      {/* Extreme Stats Grid */}
      <div className="col-span-12 lg:col-span-4 space-y-10">
        <div className="p-12 bg-red-950/60 border-8 border-red-600 rounded-[4rem] relative overflow-hidden group shadow-[0_0_80px_rgba(220,38,38,0.7)] animate-pulse">
          <div className="text-white text-[16px] font-black tracking-widest uppercase mb-4 italic underline">Public Shame Level</div>
          <div className="text-7xl font-black text-white italic drop-shadow-[0_0_30px_rgba(255,0,0,0.8)]">CRITICAL_MAX</div>
          <div className="mt-10 text-[14px] text-red-400 font-mono uppercase font-black flex items-center gap-4 bg-black/40 p-2 rounded">
            <span className="w-5 h-5 bg-red-600 rounded-full animate-ping"></span>
            SHAMING: AYUTTHAYA_WIDE_ACTIVE
          </div>
        </div>

        <div className="p-12 bg-black border-4 border-red-600 rounded-[4rem] relative group shadow-[inset_0_0_40px_rgba(255,0,0,0.2)]">
          <div className="text-gray-400 text-[12px] font-black tracking-widest uppercase mb-4 italic">Total Debt Claim</div>
          <div className="text-5xl font-black text-red-600 italic">100%_MANDATORY</div>
          <div className="mt-8 space-y-2">
             <div className="flex justify-between text-[11px] font-black uppercase text-white border-b border-red-900/50 pb-1">
               <span>เงินเบิกล่วงหน้า:</span> <span className="text-red-500">ทวงคืนยับ</span>
             </div>
             <div className="flex justify-between text-[11px] font-black uppercase text-white border-b border-red-900/50 pb-1">
               <span>เงินกู้ยืม:</span> <span className="text-red-500">ต้องคืนครบ</span>
             </div>
             <div className="flex justify-between text-[11px] font-black uppercase text-white italic mt-4">
               <span>สถานะการทวงถาม:</span> <span className="animate-pulse text-red-600">กำลังบีบคั้น</span>
             </div>
          </div>
        </div>
      </div>

      {/* Debt & Shame Mapping Dashboard */}
      <div className="col-span-12 lg:col-span-8 p-14 bg-black/95 border-8 border-red-600/20 rounded-[6rem] backdrop-blur-3xl relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/10 blur-[250px] -z-10 animate-pulse"></div>
        <div className="flex justify-between items-center mb-16 border-b-4 border-red-600/30 pb-10">
          <h3 className="text-white text-3xl font-black tracking-[0.6em] uppercase flex items-center gap-10 italic">
            <i className="fa-solid fa-hand-holding-dollar text-red-600 text-6xl"></i>
            Debt Recovery Matrix
          </h3>
          <div className="px-10 py-5 bg-red-600 text-white text-[14px] font-black rounded-full animate-bounce uppercase shadow-[0_0_50px_red]">
             RECOVERY_SYSTEM_LIVE
          </div>
        </div>
        <div className="h-[450px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={distributionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
              <XAxis dataKey="region" stroke="#aaa" fontSize={11} axisLine={false} tickLine={false} fontWeight="black" />
              <YAxis hide />
              <Tooltip cursor={{fill: 'rgba(255,0,0,0.1)'}} contentStyle={{ backgroundColor: '#000', border: '5px solid #dc2626', fontSize: '16px', fontWeight: 'black', color: '#fff' }} />
              <Bar dataKey="value" radius={[20, 20, 0, 0]}>
                {distributionData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.region?.includes('ทวงคืน') || entry.region?.includes('อยุธยา') ? '#ff0000' : '#600'} 
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-14 text-[16px] text-red-600 font-mono uppercase text-center tracking-[0.7em] font-black animate-pulse bg-red-950/30 py-6 rounded-full border-2 border-red-600/30 shadow-[0_0_30px_rgba(255,0,0,0.2)]">
           TARGET AREA: PHRA NAKHON SI AYUTTHAYA (TOTAL SHAME)
        </div>
      </div>
    </div>
  );
};
