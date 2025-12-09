import React from 'react';
import { Leaf } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#24303d] text-gray-400 pt-16 pb-8 border-t border-white/5 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center text-white mb-6">
               <Leaf className="w-6 h-6 mr-2 text-[#2A6E3F]" />
               <span className="font-serif font-bold text-lg">中国山水导航</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              汇集中华大地最美自然遗产，<br/>为探索者提供专业、环保的出行指引。<br/>
              让每一次出发，都成为对自然的致敬。
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 font-serif">探索指南</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-[#2A6E3F] transition-colors">国家公园名录</a></li>
              <li><a href="#" className="hover:text-[#2A6E3F] transition-colors">世界自然遗产</a></li>
              <li><a href="#" className="hover:text-[#2A6E3F] transition-colors">季节限定景观</a></li>
              <li><a href="#" className="hover:text-[#2A6E3F] transition-colors">特色生态路线</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 font-serif">官方链接</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-[#2A6E3F] transition-colors">国家林业和草原局</a></li>
              <li><a href="#" className="hover:text-[#2A6E3F] transition-colors">中华人民共和国文化和旅游部</a></li>
              <li><a href="#" className="hover:text-[#2A6E3F] transition-colors">中国国家地理</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 font-serif">联系与合作</h4>
            <p className="text-sm mb-4">content@chinaparks.cn</p>
            <div className="bg-white/5 p-4 rounded text-xs text-gray-500">
               <p className="mb-2">紧急救援电话：</p>
               <p className="text-white font-bold text-lg">119 / 110</p>
               <p className="mt-2">蓝天救援队协作平台</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; 2024 China National Parks Navigator. 本站仅供演示与科普.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="hover:text-white">隐私政策</a>
            <a href="#" className="hover:text-white">免责声明</a>
            <a href="#" className="hover:text-white">网站地图</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;