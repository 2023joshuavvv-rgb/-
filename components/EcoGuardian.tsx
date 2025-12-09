import React from 'react';
import { Leaf, Award, Footprints, Trash2 } from 'lucide-react';

const EcoGuardian: React.FC = () => {
  return (
    <section id="eco" className="py-20 bg-[#F0F4F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-[#2A6E3F] mb-4">生态守护 · 无痕山林</h2>
          <p className="text-gray-600">除了脚印，什么都别留下；除了照片，什么都别带走。</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
           <div className="bg-white p-8 rounded-lg shadow-sm text-center group hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#2A6E3F] transition-colors">
                 <Leaf className="w-8 h-8 text-[#2A6E3F] group-hover:text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">无痕原则</h3>
              <p className="text-sm text-gray-500 mb-4">学习LNT(Leave No Trace)七大原则，成为负责任的旅行者。</p>
              <button className="text-[#2A6E3F] text-sm font-bold border-b border-[#2A6E3F]">开始学习</button>
           </div>
           
           <div className="bg-white p-8 rounded-lg shadow-sm text-center group hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#2A6E3F] transition-colors">
                 <Footprints className="w-8 h-8 text-[#2A6E3F] group-hover:text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">碳足迹计算</h3>
              <p className="text-sm text-gray-500 mb-4">计算旅行碳排放，通过植树或绿色出行进行抵消。</p>
              <button className="text-[#2A6E3F] text-sm font-bold border-b border-[#2A6E3F]">立即计算</button>
           </div>

           <div className="bg-white p-8 rounded-lg shadow-sm text-center group hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#2A6E3F] transition-colors">
                 <Trash2 className="w-8 h-8 text-[#2A6E3F] group-hover:text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">志愿行动</h3>
              <p className="text-sm text-gray-500 mb-4">报名参与景区净山行动，守护纯净自然。</p>
              <button className="text-[#2A6E3F] text-sm font-bold border-b border-[#2A6E3F]">查看项目</button>
           </div>
        </div>

        {/* Challenge Section */}
        <div className="bg-[#2A6E3F] rounded-2xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between overflow-hidden relative">
           <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
              <Award className="w-96 h-96" />
           </div>
           
           <div className="relative z-10 mb-8 md:mb-0 max-w-xl">
              <h3 className="text-2xl font-serif font-bold mb-4">挑战：“绿水青山守护者”徽章</h3>
              <p className="text-green-100 mb-6">完成5个环保小知识问答，即可获得国家公园电子纪念勋章，并可兑换景区环保文创。</p>
              <button className="bg-white text-[#2A6E3F] px-8 py-3 rounded font-bold hover:bg-gray-100 transition-colors">
                 接受挑战
              </button>
           </div>
           
           <div className="relative z-10 flex space-x-4">
               <div className="w-24 h-24 bg-white/20 backdrop-blur rounded-full flex items-center justify-center border-2 border-yellow-400">
                  <span className="text-xs font-bold text-center">三江源<br/>卫士</span>
               </div>
               <div className="w-24 h-24 bg-white/20 backdrop-blur rounded-full flex items-center justify-center border-2 border-white/50 grayscale">
                  <span className="text-xs font-bold text-center">森林<br/>防火</span>
               </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default EcoGuardian;