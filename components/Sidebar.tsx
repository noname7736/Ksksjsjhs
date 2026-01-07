
import React from 'react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: any) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'vetting', label: 'ZERO_SCAN', icon: 'fa-microscope', sub: 'Deep Identity Audit' },
    { id: 'dashboard', label: 'DEBT_FORCE', icon: 'fa-hand-holding-dollar', sub: 'Recovery Telemetry' },
    { id: 'forensics', label: 'CRIME_DOSSIER', icon: 'fa-skull-crossbones', sub: 'Incident Forensics' },
    { id: 'bounty', label: 'BOUNTY_CORE', icon: 'fa-money-bill-trend-up', sub: 'Evidence Rewards' },
    { id: 'map', label: 'SHAME_GRID', icon: 'fa-location-dot', sub: 'Regional Saturation' },
    { id: 'archive', label: 'SETTLEMENT', icon: 'fa-gavel', sub: 'Final Archival' },
  ];

  return (
    <nav className="w-[28rem] h-full bg-[#000000] border-r-[20px] border-red-700 flex flex-col pt-24 relative shadow-[100px_0_200px_rgba(0,0,0,1)] z-40 border-double">
      <div className="absolute inset-y-0 right-[-15px] w-[15px] bg-red-700 shadow-[0_0_100px_red] animate-pulse"></div>
      
      <div className="px-16 mb-24 relative">
        <div className="font-black text-8xl tracking-tighter text-white uppercase italic leading-none drop-shadow-[0_0_40px_rgba(255,0,0,0.8)] border-b-8 border-red-700 pb-4">
          DARK<br/><span className="text-red-700 underline decoration-red-950 decoration-8 underline-offset-8">DRAGON</span>
        </div>
        <div className="text-[12px] text-red-600 font-mono uppercase mt-8 tracking-[1.2em] font-black animate-ping italic">REAL_WORLD_FORCE.V0</div>
      </div>

      <div className="flex-1 space-y-4 px-8 overflow-y-auto scrollbar-hide pb-20">
        {menuItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex items-center gap-10 px-10 py-10 rounded-none transition-all duration-500 relative group cursor-pointer border-2 ${
              activeTab === item.id 
                ? 'bg-red-700/40 border-red-600 translate-x-8 shadow-[0_0_80px_rgba(255,0,0,0.4)] scale-105' 
                : 'opacity-20 border-transparent grayscale hover:opacity-50 hover:border-red-900'
            }`}
          >
            {activeTab === item.id && (
              <div className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-4 h-24 bg-red-600 shadow-[0_0_40px_red]"></div>
            )}
            <i className={`fa-solid ${item.icon} text-4xl ${activeTab === item.id ? 'text-red-500 animate-pulse' : 'text-gray-800'}`}></i>
            <div>
              <div className={`text-[22px] font-black tracking-[0.3em] uppercase leading-none ${activeTab === item.id ? 'text-white' : 'text-gray-800'}`}>
                {item.label}
              </div>
              <div className={`text-[12px] font-mono uppercase mt-4 ${activeTab === item.id ? 'text-red-600 font-black italic underline' : 'text-gray-900'}`}>
                {item.sub}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-16 bg-red-950/20">
        <div className="p-10 bg-black border-4 border-red-700 rounded-none space-y-10 relative overflow-hidden group shadow-[inset_0_0_60px_rgba(255,0,0,0.3)]">
          <div className="absolute inset-0 bg-red-700/10 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse"></div>
          <div>
            <div className="text-[12px] text-red-600 font-black uppercase mb-6 flex items-center gap-6 italic border-b border-red-900 pb-2">
               <span className="w-4 h-4 bg-red-600 rounded-full animate-ping shadow-[0_0_30px_red]"></span> 
               ENFORCER_INTEGRITY
            </div>
            <div className="w-full h-4 bg-gray-950 rounded-none overflow-hidden border-2 border-red-700/50">
              <div className="bg-red-600 h-full w-[100%] animate-[pulse_2s_infinite] shadow-[0_0_25px_red]"></div>
            </div>
          </div>
          <p className="text-[11px] text-gray-400 font-mono leading-tight uppercase tracking-widest font-black italic text-center border-t border-red-900/40 pt-6">
            "ไม่มีที่ซุกหัวนอน - แฉถาวร - ต้องชดใช้"
          </p>
        </div>
      </div>
    </nav>
  );
};
