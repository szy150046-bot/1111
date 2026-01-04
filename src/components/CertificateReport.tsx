import { Printer, Download, Mail, Share2 } from 'lucide-react';
import imgPage00011 from "figma:asset/f7c4af678842f068d637f9f45dd883523103ba0e.png";

export function CertificateReport() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
        <h1 className="text-[#2a3839] text-2xl">
          学籍/学历/学位在线验证报告查询
        </h1>
        <div className="flex items-center gap-4">
          <span className="text-[#2a3839]">报告语种</span>
          <button className="bg-[#eff8f9] text-[#00bac7] px-4 py-1 rounded">
            中文
          </button>
          <button className="text-[#889098] px-4 py-1 hover:text-[#00bac7]">
            英文
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3">
        <button className="flex items-center gap-2 px-4 py-2 border border-[#e6e6e6] rounded hover:bg-[#f5f5f5] transition-colors">
          <Printer size={18} className="text-[#889098]" />
          <span className="text-[#889098]">打印</span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 border border-[#e6e6e6] rounded hover:bg-[#f5f5f5] transition-colors">
          <Download size={18} className="text-[#889098]" />
          <span className="text-[#889098]">下载</span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 border border-[#e6e6e6] rounded hover:bg-[#f5f5f5] transition-colors">
          <Mail size={18} className="text-[#889098]" />
          <span className="text-[#889098]">邮件</span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 border border-[#e6e6e6] rounded hover:bg-[#f5f5f5] transition-colors">
          <Share2 size={18} className="text-[#889098]" />
          <span className="text-[#889098]">分享</span>
        </button>
      </div>

      {/* Certificate Image */}
      <div className="bg-white rounded-lg shadow-lg p-4 lg:p-8">
        <div className="max-w-full overflow-x-auto">
          <div className="min-w-[600px] lg:min-w-0">
            <img
              src={imgPage00011}
              alt="教育部学籍在线验证报告"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Certificate Details Card (for smaller screens) */}
      <div className="lg:hidden bg-white rounded-lg shadow p-4 space-y-3">
        <h2 className="text-[#2a3839] text-center text-xl mb-4">
          教育部学籍在线验证报告
        </h2>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between border-b pb-2">
            <span className="text-[#889098]">姓名</span>
            <span className="text-[#2a3839]">张梦芳</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="text-[#889098]">性别</span>
            <span className="text-[#2a3839]">女</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="text-[#889098]">出生日期</span>
            <span className="text-[#2a3839]">2003年01月28日</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="text-[#889098]">民族</span>
            <span className="text-[#2a3839]">土家族</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="text-[#889098]">学校名称</span>
            <span className="text-[#2a3839]">浙江理工大学科技艺术学院</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="text-[#889098]">层次</span>
            <span className="text-[#2a3839]">本科</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="text-[#889098]">专业</span>
            <span className="text-[#2a3839]">政治学文科</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="text-[#889098]">学习形式</span>
            <span className="text-[#2a3839]">普通全日制</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="text-[#889098]">学制</span>
            <span className="text-[#2a3839]">4年</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="text-[#889098]">学历类别</span>
            <span className="text-[#2a3839]">普通高等教育</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="text-[#889098]">入学日期</span>
            <span className="text-[#2a3839]">2017年09月19日</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="text-[#889098]">学籍状态</span>
            <span className="text-[#2a3839]">不在籍(毕业)</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="text-[#889098]">照校日期</span>
            <span className="text-[#2a3839]">2021年07月27日</span>
          </div>
        </div>
        <div className="pt-4 text-center">
          <p className="text-[#00bac7] text-sm mb-2">
            在线验证码：A8FKJ7T6LH7B7X7F
          </p>
          <p className="text-[#889098] text-xs">
            验证报告网址：https://www.chsi.com.cn/xlcx/bgcx.jsp
          </p>
        </div>
      </div>
    </div>
  );
}
