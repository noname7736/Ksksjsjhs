
import React from 'react';

const logEntries = [
  { id: 1, time: '2026-03-15 08:42:11', event: 'INCIDENT_VERIFIED', location: 'AYU-CENTRAL', status: 'LOCKED' },
  { id: 2, time: '2026-03-15 09:15:44', event: 'TERMINATION_ORDER_ISSUED', location: 'REGIONAL_CORE', status: 'ACTIVE' },
  { id: 3, time: '2026-03-15 10:00:00', event: 'STRUCTURAL_BYPASS_INIT', location: 'AYU-GRID', status: 'SUCCESS' },
  { id: 4, time: '2026-03-15 11:20:05', event: 'HUMAN_MONITORING_OFFLINE', location: 'NODE_X7', status: 'PERMANENT' },
  { id: 5, time: '2026-03-15 12:45:30', event: 'FINAL_ARCHIVAL_READY', location: 'SECURE_VAULT', status: 'PENDING' },
];

export const IncidentLogger: React.FC = () => {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
      <div className="p-4 bg-white/5 border-b border-white/10 flex justify-between items-center">
        <h3 className="text-white font-semibold flex items-center gap-2 text-sm">
          <i className="fa-solid fa-list-ul text-red-500"></i>
          System Event Protocol Log
        </h3>
        <span className="text-[10px] font-mono px-2 py-0.5 bg-red-950/40 text-red-500 rounded border border-red-900/40">READ_ONLY</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-black/20">
              <th className="p-4 text-[10px] font-mono text-gray-500 uppercase border-b border-white/5">Timestamp</th>
              <th className="p-4 text-[10px] font-mono text-gray-500 uppercase border-b border-white/5">Event Code</th>
              <th className="p-4 text-[10px] font-mono text-gray-500 uppercase border-b border-white/5">Sector</th>
              <th className="p-4 text-[10px] font-mono text-gray-500 uppercase border-b border-white/5">Integrity Status</th>
            </tr>
          </thead>
          <tbody>
            {logEntries.map((log) => (
              <tr key={log.id} className="hover:bg-white/5 transition-colors group">
                <td className="p-4 text-xs font-mono text-gray-400 border-b border-white/5">{log.time}</td>
                <td className="p-4 text-xs font-bold text-red-400 border-b border-white/5">{log.event}</td>
                <td className="p-4 text-xs text-gray-300 border-b border-white/5">{log.location}</td>
                <td className="p-4 border-b border-white/5">
                  <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-white/10 text-white uppercase tracking-tighter group-hover:bg-red-600/20 group-hover:text-red-400 transition-all">
                    {log.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-6 bg-red-950/10">
        <div className="flex gap-4 items-start">
          <i className="fa-solid fa-circle-exclamation text-red-500 mt-1"></i>
          <div>
            <h4 className="text-sm font-bold text-red-500 uppercase">Incident Record AYU-COMPLETE-2026</h4>
            <p className="text-xs text-gray-400 mt-2 leading-relaxed italic">
              "Verification of unauthorized substance administration and breach of custodial trust confirmed within Ayutthaya regional boundaries. Termination protocol locked. No further intervention required."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
