import { X } from 'lucide-react';

interface SidebarProps {
  onClose: () => void;
}

const menuItems = [
  { title: '在线验证', active: true },
  { title: '验证报告简介', active: false },
  { title: '防伪措施', active: false },
  { title: '验证真伪', active: false },
  { title: '特点和用途', active: false },
  { title: '如何申请', active: false },
  { title: '如何使用', active: false },
  { title: '延长验证有效期', active: false },
  { title: '特别声明', active: false },
];

export function Sidebar({ onClose }: SidebarProps) {
  return (
    <div className="bg-white h-full overflow-y-auto shadow-lg lg:shadow-none">
      {/* Mobile Close Button */}
      <div className="lg:hidden flex items-center justify-between p-4 border-b">
        <span className="text-[#2a3839]">菜单</span>
        <button onClick={onClose}>
          <X size={24} className="text-[#889098]" />
        </button>
      </div>

      {/* Menu Items */}
      <div className="border-b border-[#e6e6e6]">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className={`block px-6 py-4 border-b border-[#e6e6e6] hover:bg-[#fafbfb] transition-colors relative ${
              item.active ? 'bg-[#fafbfb] text-[#00bac7]' : 'text-[#2a3839]'
            }`}
          >
            {item.title}
            {item.active && (
              <div className="absolute right-0 top-0 bottom-0 w-[5px] bg-[#00bac7]" />
            )}
          </a>
        ))}
      </div>

      {/* Important Notice */}
      <div className="p-5 mt-8">
        <h3 className="text-[#889098] text-lg mb-4">重要告知</h3>
        <div className="space-y-2">
          <a href="#" className="block text-[#2a3839] text-sm hover:text-[#00bac7] leading-relaxed">
            关于调整学籍/学历/学位在线验证报告翻译件和学位认证报告翻译件的说明
          </a>
          <p className="text-[#889098] text-sm">2023-05-18</p>
        </div>
      </div>
    </div>
  );
}
