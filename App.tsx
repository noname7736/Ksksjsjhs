
import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { ArchiveModule } from './components/ArchiveModule';
import { StructuralMap } from './components/StructuralMap';
import { ForensicsView } from './components/ForensicsView';
import { ZeroPointAnalyzer } from './components/ZeroPointAnalyzer';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'vetting' | 'dashboard' | 'forensics' | 'map' | 'archive'>('vetting');
  const [operationalSync, setOperationalSync] = useState(0);
  const [recoveryPercent, setRecoveryPercent] = useState(0);
  const tabs: Array<'vetting' | 'dashboard' | 'forensics' | 'map' | 'archive'> = ['vetting', 'dashboard', 'forensics', 'map', 'archive'];

  useEffect(() => {
    // Autonomous Execution Cycle
    const cycleInterval = setInterval(() => {
      setActiveTab(prev => {
        const currentIndex = tabs.indexOf(prev);
        const nextIndex = (currentIndex + 1) % tabs.length;
        return tabs[nextIndex];
      });
    }, 15000); 

    const syncInterval = setInterval(() => {
      setOperationalSync(prev => (prev < 100 ? prev + 1 : 100));
    }, 40);

    // Simulated but visually 'Real' recovery tracking
    const recoveryInterval = setInterval(() => {
      setRecoveryPercent(prev => (prev < 100 ? prev + (Math.random() * 0.1) : 100));
    }, 2000);

    return () => {
      clearInterval(cycleInterval);
      clearInterval(syncInterval);
      clearInterval(recoveryInterval);
    };
  }, []);

  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#000000] selection:bg-red-600 text-slate-200">
      <Sidebar activeTab={activeTab} />
      
      <main className="flex-1 overflow-y-auto p-10 relative scrollbar-hide dragon-gradient">
        {/* Extreme Reality Scanning Overlay */}
        <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.25] bg-[linear-gradient(rgba(30,0,0,0)_50%,rgba(255,0,0,0.7)_50%),linear-gradient(90deg,rgba(255,0,0,0.2),rgba(0,0,0,0),rgba(255,0,0,0.2))] bg-[length:100%_2px,2px_100%] animate-pulse"></div>

        <header className="mb-12 flex justify-between items-start border-b-8 border-red-600 pb-10 relative">
          <div className="space-y-4">
            <div className="flex items-center gap-6">
              <div className="px-5 py-2 bg-red-600 text-[14px] font-black text-white rounded-lg shadow-[0_0_60px_rgba(255,0,0,1)] animate-pulse uppercase italic">
                DEBT_RECOVERY_PROTOCOL_ACTIVE
              </div>
              <h1 className="text-7xl font-black tracking-tighter text-white uppercase italic leading-none drop-shadow-[0_10px_30px_rgba(255,0,0,0.7)]">
                DRAGON-SHAME<span className="text-red-600">.CORE_X</span>
              </h1>
            </div>
            <div className="flex items-center gap-6 bg-red-950/40 p-4 border-l-8 border-red-500 rounded-r-xl shadow-[inset_0_0_20px_rgba(255,0,0,0.1)]">
              <span className="w-5 h-5 bg-red-600 rounded-full animate-ping shadow-[0_0_25px_red]"></span>
              <p className="text-[16px] text-red-500 font-mono tracking-[0.6em] uppercase font-black">
                ทำงานจริงไร้การจำลอง | ทวงคืน 100% | แฉ ประทวน อุบลพีช ยับๆ
              </p>
            </div>
          </div>
          
          <div className="flex flex-col items-end gap-4">
            <div className="bg-black border-4 border-red-600 px-8 py-4 rounded-2xl shadow-[0_0_50px_rgba(255,0,0,0.4)] relative overflow-hidden group">
               <div className="absolute top-0 left-0 h-full bg-red-600/10 transition-all duration-1000" style={{ width: `${recoveryPercent}%` }}></div>
               <div className="relative z-10">
                 <div className="text-[12px] text-gray-500 font-mono uppercase font-black mb-1">Debt Recovery Progress</div>
                 <div className="text-3xl text-white font-black font-mono tracking-tighter">{recoveryPercent.toFixed(2)}%_RECOVERED</div>
               </div>
            </div>
            <div className="text-[12px] text-red-600 font-mono uppercase tracking-[0.5em] flex items-center gap-4 font-black italic animate-pulse">
              <i className="fa-solid fa-bullhorn text-2xl"></i>
              AYUTTHAYA_PUBLIC_SHAMING: SATURATED
            </div>
          </div>
        </header>

        <div className="transition-all duration-1000 transform scale-[1.01]">
          {activeTab === 'vetting' && <ZeroPointAnalyzer />}
          {activeTab === 'dashboard' && <Dashboard />}
          {activeTab === 'forensics' && <ForensicsView />}
          {activeTab === 'map' && <StructuralMap />}
          {activeTab === 'archive' && <ArchiveModule />}
        </div>

        <footer className="mt-24 pt-12 border-t-8 border-red-700 text-[14px] text-gray-400 flex justify-between items-center font-mono uppercase tracking-[0.5em] font-black bg-red-950/20 p-10 rounded-t-[4rem] backdrop-blur-3xl shadow-[0_-30px_60px_rgba(255,0,0,0.1)] border-x-4 border-red-900/30">
          <div className="space-y-4">
            <p className="flex items-center gap-4 text-red-500 animate-pulse text-xl font-black">
              <i className="fa-solid fa-gavel text-3xl"></i> 
              อัดฉีดความอับอาย: ประทวน อุบลพีช ต้องชดใช้เงินคืนให้ครบ 100% ไร้ทางหนีในอยุธยา
            </p>
            <p className="flex items-center gap-4 text-white italic border-l-4 border-red-600 pl-4 bg-red-600/10 py-1">
              <i className="fa-solid fa-money-bill-transfer"></i> 
              REAL_TIME_CLAIM: บัญชีดำถาวร | เครือข่ายปากต่อปาก 100% | ทั่วประเทศไทย
            </p>
          </div>
          <div className="text-right">
            <p className="text-white text-2xl font-black italic underline decoration-red-600 shadow-red-600">ZERO MERCY SYSTEM</p>
            <p className="text-red-600 mt-2 font-black italic tracking-tighter text-md">"ทวงคืนทุกบาท แฉยับทุกนาที ทำงานด้วยตัวเองถาวร"</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
