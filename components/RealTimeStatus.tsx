import React from 'react';
import { CloudRain, Sun, Wind, Users, AlertTriangle, Activity } from 'lucide-react';

const RealTimeStatus: React.FC = () => {
  // Simulated data
  const statusData = [
    { park: '三江源', weather: '小雪 -5℃', crowd: '舒适', alert: null },
    { park: '九寨沟', weather: '晴 12℃', crowd: '拥挤', alert: '限流预警' },
    { park: '武夷山', weather: '多云 18℃', crowd: '适中', alert: null },
    { park: '黄山', weather: '云海 8℃', crowd: '拥挤', alert: '强风管制' },
  ];

  return (
    <section id="status" className="py-20 bg-[#2F3D4C] text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-600 pb-4">
          <div>
            <h2 className="text-3xl font-serif font-bold text-white mb-2">山水脉搏 · 实时动态</h2>
            <p className="text-gray-400 text-sm">数据更新于：{new Date().toLocaleTimeString()}</p>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
             <div className="flex items-center"><div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>舒适</div>
             <div className="flex items-center"><div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>适中</div>
             <div className="flex items-center"><div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>拥挤</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statusData.map((item, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded hover:bg-white/10 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold font-serif">{item.park}</h3>
                {item.alert && (
                   <span className="text-xs bg-red-500/20 text-red-300 px-2 py-1 rounded flex items-center">
                      <AlertTriangle className="w-3 h-3 mr-1" />
                      {item.alert}
                   </span>
                )}
              </div>
              
              <div className="space-y-4">
                 <div className="flex items-center text-sm text-gray-300">
                    <CloudRain className="w-5 h-5 mr-3 text-[#8ABCD1]" />
                    {item.weather}
                 </div>
                 <div className="flex items-center text-sm text-gray-300">
                    <Users className="w-5 h-5 mr-3 text-yellow-500" />
                    客流: <span className={`ml-1 ${item.crowd === '拥挤' ? 'text-red-400' : 'text-green-400'}`}>{item.crowd}</span>
                 </div>
                 <div className="flex items-center text-sm text-gray-300">
                    <Activity className="w-5 h-5 mr-3 text-purple-400" />
                    景观指数: <span className="ml-1 text-white">8.5/10</span>
                 </div>
              </div>
            </div>
          ))}
        </div>

        {/* Live Cam Placeholder */}
        <div className="mt-12 bg-black/40 rounded-lg overflow-hidden relative h-64 md:h-96 flex items-center justify-center border border-white/10">
           <img src="https://picsum.photos/id/1043/1200/400" className="absolute inset-0 w-full h-full object-cover opacity-50" alt="Live Cam" />
           <div className="relative z-10 text-center">
              <div className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-bold rounded mb-2 animate-pulse">LIVE</div>
              <h3 className="text-2xl font-serif text-white">神农架 · 云海实时监测</h3>
              <p className="text-sm text-gray-300 mt-2">当前能见度: 8km | 湿度: 85%</p>
           </div>
        </div>

      </div>
    </section>
  );
};

export default RealTimeStatus;