
import React from 'react';

interface SidebarProps {
  activeTab: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab }) => {
  const menuItems = [
    { id: 'vetting', label: 'ZERO_SCAN', icon: 'fa-microscope', sub: 'Identity Vetting' },
    { id: 'dashboard', label: 'DEBT_RECOVERY', icon: 'fa-hand-holding-dollar', sub: 'Money Tracking' },
    { id: 'forensics', label: 'PUBLIC_EXECUTION', icon: 'fa-skull-crossbones', sub: 'Total Shaming' },
    { id: 'map', label: 'AYU_SHAME_GRID', icon: 'fa-location-dot', sub: 'Region Saturation' },
    { id: 'archive', label: 'FINAL_SETTLEMENT', icon: 'fa-gavel', sub: 'No Evasion' },
  ];

  return (
    <nav className="w-[28rem] h-full bg-[#000000] border-r-[15px] border-red-600 flex flex-col pt-24 relative shadow-[80px_0_150px_rgba(0,0,0,1)] z-40">
      <div className="absolute inset-y-0 right-[-10px] w-[10px] bg-red-600 shadow-[0_0_60px_red] animate-pulse"></div>
      
      <div className="px-20 mb-36 relative">
        <div className="font-black text-7xl tracking-tighter text-white uppercase italic leading-none drop-shadow-[0_0_30px_rgba(255,0,0,0.6)]">
          DARK<br/><span className="text-red-600 underline decoration-red-950 decoration-8 underline-offset-8">DRAGON</span>
        </div>
        <div className="text-[14px] text-red-600 font-mono uppercase mt-8 tracking-[1em] font-black animate-ping italic">DEBT_ENFORCER.V1</div>
      </div>

      <div className="flex-1 space-y-14 px-12 overflow-y-auto scrollbar-hide">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={`flex items-center gap-12 px-12 py-12 rounded-[5rem] transition-all duration-1000 relative group cursor-none ${
              activeTab === item.id 
                ? 'bg-red-700/30 border-8 border-red-600 translate-x-12 shadow-[0_0_100px_rgba(255,0,0,0.5)] scale-110' 
                : 'opacity-10 blur-[5px] scale-90 grayscale hover:opacity-20 transition-all'
            }`}
          >
            {activeTab === item.id && (
              <div className="absolute left-[-15px] top-1/2 -translate-y-1/2 w-5 h-32 bg-red-600 rounded-full shadow-[0_0_50px_red]"></div>
            )}
            <i className={`fa-solid ${item.icon} text-5xl ${activeTab === item.id ? 'text-red-600' : 'text-gray-900'}`}></i>
            <div>
              <div className={`text-[22px] font-black tracking-[0.4em] uppercase leading-none ${activeTab === item.id ? 'text-white' : 'text-gray-900'}`}>
                {item.label}
              </div>
              <div className={`text-[13px] font-mono uppercase mt-4 ${activeTab === item.id ? 'text-red-500 font-black italic underline' : 'text-gray-950'}`}>
                {item.sub}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-20">
        <div className="p-14 bg-black border-8 border-red-600/60 rounded-[6rem] space-y-12 relative overflow-hidden group shadow-[inset_0_0_50px_rgba(255,0,0,0.2)]">
          <div className="absolute inset-0 bg-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse"></div>
          <div>
            <div className="text-[14px] text-red-600 font-black uppercase mb-8 flex items-center gap-8 italic underline decoration-red-900">
               <span className="w-6 h-6 bg-red-600 rounded-full animate-ping shadow-[0_0_40px_red]"></span> 
               Recovery Integrity
            </div>
            <div className="w-full h-5 bg-gray-950 rounded-full overflow-hidden border-4 border-red-600/50">
              <div className="bg-red-600 h-full w-[100%] animate-pulse shadow-[0_0_35px_red]"></div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="text-[12px] text-gray-400 font-black uppercase tracking-[0.2em] italic">Ayutthaya Shame Pressure</div>
            <div className="w-full h-5 bg-gray-950 rounded-full overflow-hidden border-4 border-white/5">
              <div className="bg-white h-full w-[100%] shadow-[0_0_35px_white]"></div>
            </div>
          </div>
          <p className="text-[12px] text-red-500 font-mono leading-tight uppercase tracking-widest font-black italic text-center underline decoration-red-900 underline-offset-4">
            "ไม่มีที่ยืน - ทวงคืนทุกบาท - แฉยับ 100%"
          </p>
        </div>
      </div>
    </nav>
  );
};
