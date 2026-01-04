import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  '首页', '学籍查询', '学历查询', '学位查询', '在线验证',
  '出国教育背景信息服务', '图像校对', '学信档案', '高考',
  '研招', '港澳台招生', '征兵', '就业', '学职平台'
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[#00bac7] relative">
      <div className="max-w-[1920px] mx-auto">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-center gap-1 px-4">
          {navItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className="text-white px-3 py-4 hover:bg-[#009ba7] transition-colors text-sm whitespace-nowrap"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <div className="flex items-center justify-between px-4 py-3">
            <span className="text-white">导航菜单</span>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="bg-[#009ba7] px-4 py-2">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="block text-white py-2 hover:bg-[#008a95] px-2 rounded"
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
