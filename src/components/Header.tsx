import { Search } from 'lucide-react';
import img202601041133431 from "figma:asset/70a21daa1823f18dff46602a2cc5352073ea9261.png";
import img202601041133432 from "figma:asset/c69b8f200ef4017430453df92277fa62963d37ae.png";

export function Header() {
  return (
    <div className="bg-white border-b">
      <div className="max-w-[1920px] mx-auto px-4 py-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Logo Section */}
          <div className="flex items-center gap-4">
            <img 
              src={img202601041133432} 
              alt="CHSI Logo" 
              className="h-16 w-auto"
            />
            <div className="hidden lg:block">
              <img 
                src={img202601041133431} 
                alt="中国高等教育学生信息网" 
                className="h-8 w-auto"
              />
              <p className="text-[#889098] text-sm mt-1">
                教育部学历查询网站、教育部高校招生阳光工程指定网站、全国硕士研究生招生报名和调剂指定网站
              </p>
            </div>
          </div>

          {/* Search and Links */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder=""
                className="border border-[#d4d9d7] rounded px-3 py-2 pr-10 w-[180px]"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2">
                <Search className="text-[#626F69]" size={20} />
              </button>
            </div>
            <div className="hidden lg:flex items-center gap-2 text-[#889098] text-sm">
              <span className="text-[#e6e6e6]">|</span>
              <a href="#" className="hover:text-[#00bac7]">注册</a>
              <span className="text-[#e6e6e6]">|</span>
              <a href="#" className="hover:text-[#00bac7]">登录</a>
              <span className="text-[#e6e6e6]">|</span>
              <a href="#" className="hover:text-[#00bac7]">English</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
