
import React from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell } from 'recharts';

const distributionData = [
  { region: 'อยุธยา (GROUND_ZERO)', value: 100 },
  { region: 'REAL_DEBT_CLAIM', value: 100 },
  { region: 'ID_VERIFICATION', value: 100 },
  { region: 'SHAME_SATURATION', value: 98 },
  { region: 'COLLABORATOR_BLACKLIST', value: 95 },
  { region: 'RECOVERY_FORCE', value: 100 },
];

export const Dashboard: React.FC = () => {
  return (
    <div className="grid grid-cols-12 gap-14 pb-24">
      {/* Intense Ticker - PUBLIC SHAMING FOCUS */}
      <div className="col-span-12 flex gap-8 overflow-hidden py-12 border-y-[20px] border-red-700 mb-16 font-mono text-4xl font-black uppercase tracking-[0.5em] text-white whitespace-nowrap bg-red-700/40 shadow-[0_0_150px_rgba(255,0,0,0.6)] italic relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[repeating-linear-gradient(90deg,transparent,transparent_40px,rgba(255,255,255,0.05)_40px,rgba(255,255,255,0.05)_80px)] pointer-events-none"></div>
        <div className="animate-marquee">
          แฉยับ ประทวน อุบลพีช : ข้อมูลจริง 100% จากอยุธยา ... วางยาในอาหาร เบิกเงินล่วงหน้าแล้วหนี ... ระบบทำงานถาวรจากฐานข้อมูล 0 ... ต้องชดใช้คืนครบทุกบาท ... ไม่มีที่ให้หลบหนี ... 
        </div>
        <div className="animate-marquee2 absolute top-0">
          แฉยับ ประทวน อุบลพีช : ข้อมูลจริง 100% จากอยุธยา ... วางยาในอาหาร เบิกเงินล่วงหน้าแล้วหนี ... ระบบทำงานถาวรจากฐานข้อมูล 0 ... ต้องชดใช้คืนครบทุกบาท ... ไม่มีที่ให้หลบหนี ... 
        </div>
      </div>

      {/* Extreme Stats Grid */}
      <div className="col-span-12 lg:col-span-4 space-y-12">
        <div className="p-16 bg-red-950/60 border-[12px] border-red-700 rounded-sm relative overflow-hidden group shadow-[0_0_120px_rgba(220,38,38,0.6)] animate-pulse">
          <div className="text-white text-[18px] font-black tracking-widest uppercase mb-6 italic underline decoration-red-600 decoration-4">Real-Time Shame Saturation</div>
          <div className="text-8xl font-black text-white italic drop-shadow-[0_0_40px_rgba(255,0,0,1)]">CORE_MAX</div>
          <div className="mt-14 text-[16px] text-red-400 font-mono uppercase font-black flex items-center gap-6 bg-black/60 p-4 border border-red-700/40">
            <span className="w-8 h-8 bg-red-600 rounded-full animate-ping shadow-[0_0_30px_red]"></span>
            STATUS: BROADCASTING_LIVE_DATA
          </div>
        </div>

        <div className="p-16 bg-black border-4 border-red-700 rounded-sm relative group shadow-[inset_0_0_60px_rgba(255,0,0,0.3)] hover:border-red-500 transition-colors">
          <div className="text-gray-400 text-[14px] font-black tracking-[0.4em] uppercase mb-6 italic">Verified Debt Volume</div>
          <div className="text-6xl font-black text-red-600 italic tracking-tighter drop-shadow-md underline decoration-red-900 underline-offset-4">REAL_100%</div>
          <div className="mt-12 space-y-4">
             <div className="flex justify-between text-[13px] font-black uppercase text-white border-b-2 border-red-900/50 pb-2 italic">
               <span>เงินเบิกล่วงหน้า:</span> <span className="text-red-500">CLAIMED_LIVE</span>
             </div>
             <div className="flex justify-between text-[13px] font-black uppercase text-white border-b-2 border-red-900/50 pb-2 italic">
               <span>เงินกู้ยืมส่วนบุคคล:</span> <span className="text-red-500">ENFORCED</span>
             </div>
             <div className="flex justify-between text-[13px] font-black uppercase text-white italic mt-8 bg-red-600/10 px-4 py-2">
               <span>สถานะการบีบคั้น:</span> <span className="animate-pulse text-red-600 font-black">UNBEARABLE</span>
             </div>
          </div>
        </div>
      </div>

      {/* Debt & Shame Mapping Dashboard */}
      <div className="col-span-12 lg:col-span-8 p-16 bg-black/95 border-[10px] border-red-700/30 rounded-sm backdrop-blur-4xl relative overflow-hidden shadow-[0_0_150px_rgba(0,0,0,1)]">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-red-600/10 blur-[300px] -z-10 animate-pulse pointer-events-none"></div>
        <div className="flex justify-between items-center mb-20 border-b-8 border-red-700/40 pb-12">
          <div className="space-y-2">
            <h3 className="text-white text-4xl font-black tracking-[0.4em] uppercase flex items-center gap-12 italic">
              <i className="fa-solid fa-satellite text-red-600 text-7xl"></i>
              Real-World Impact Matrix
            </h3>
            <p className="text-xs text-red-700 font-black font-mono tracking-widest uppercase ml-24 italic">ไม่มีการจำลอง - ข้อมูลจริงจากพื้นที่พระนครศรีอยุธยา</p>
          </div>
          <div className="px-12 py-6 bg-red-700 text-white text-[16px] font-black rounded-sm animate-bounce uppercase shadow-[0_0_60px_red] italic border-2 border-white/20">
             LIVE_FEED_100%
          </div>
        </div>
        <div className="h-[500px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={distributionData}>
              <CartesianGrid strokeDasharray="5 5" stroke="#330000" vertical={false} />
              <XAxis dataKey="region" stroke="#888" fontSize={11} axisLine={false} tickLine={false} fontWeight="black" />
              <YAxis hide />
              <Tooltip cursor={{fill: 'rgba(255,0,0,0.1)'}} contentStyle={{ backgroundColor: '#000', border: '8px solid #dc2626', fontSize: '18px', fontWeight: 'black', color: '#fff', textTransform: 'uppercase' }} />
              <Bar dataKey="value" radius={[0, 0, 0, 0]}>
                {distributionData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.region?.includes('REAL') || entry.region?.includes('GROUND') ? '#ff0000' : '#450a0a'} 
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-16 text-[18px] text-red-600 font-mono uppercase text-center tracking-[0.8em] font-black animate-pulse bg-red-950/40 py-8 rounded-sm border-4 border-red-700/40 shadow-[0_0_50px_rgba(255,0,0,0.3)] italic">
           START FROM POINT_ZERO: DATA INTEGRATED 100%
        </div>
      </div>
    </div>
  );
};
