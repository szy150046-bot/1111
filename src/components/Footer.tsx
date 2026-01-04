export function Footer() {
  const footerLinks = [
    '中心简介', '网站简介', '版权声明', '网站宣传', 
    '联系我们', '招聘信息', '帮助中心', '学信十周年', '大事记'
  ];

  return (
    <footer className="bg-[#403e3f] text-white mt-12">
      <div className="max-w-[1920px] mx-auto px-4 py-8">
        {/* Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-6 text-sm text-[rgba(255,255,255,0.6)]">
          {footerLinks.map((link, index) => (
            <a 
              key={index} 
              href="#" 
              className="hover:text-white transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-[rgba(255,255,255,0.4)] my-6" />

        {/* Contact and Copyright Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-sm text-[rgba(255,255,255,0.6)]">
          {/* Contact */}
          <div className="text-center lg:text-left">
            <p>客服热线：010-67410388</p>
            <p>客服邮箱：kefu@chsi.com.cn</p>
          </div>

          {/* Organization */}
          <div className="text-center">
            <p className="mb-2">主办单位：</p>
            <p>教育部学生服务与素质发展中心</p>
            <p className="mt-2">
              Copyright © 2003-2026 学信网 All Rights Reserved
            </p>
          </div>

          {/* Legal */}
          <div className="text-center lg:text-right space-y-1">
            <p>京ICP备19004913号-1</p>
            <p>京公网安备11010202009747号</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
