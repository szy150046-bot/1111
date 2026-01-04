import { useState } from 'react';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { Sidebar } from './components/Sidebar';
import { CertificateReport } from './components/CertificateReport';
import { Footer } from './components/Footer';
import { Menu, X } from 'lucide-react';

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f1f1f1] flex flex-col">
      {/* Notification Banner */}
      <div className="bg-[#f1f1f1] py-2 px-4">
        <p className="text-[#d94840] text-center text-sm">
          通知：学信网元旦放假安排为2026年1月1日-1月3日，其间停止办理咨询等业务，网站正常运行。2026年1月4日正常办公。祝您新年快乐！
        </p>
      </div>

      {/* Header */}
      <Header />

      {/* Main Navigation */}
      <Navigation />

      {/* Main Content Area */}
      <div className="flex-1 max-w-[1920px] mx-auto w-full relative">
        <div className="flex flex-col lg:flex-row">
          {/* Mobile Sidebar Toggle */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden fixed bottom-4 right-4 z-50 bg-[#00bac7] text-white p-3 rounded-full shadow-lg"
          >
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Sidebar */}
          <div
            className={`${
              sidebarOpen ? 'translate-x-0' : '-translate-x-full'
            } lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-40 transition-transform duration-300 lg:w-[240px]`}
          >
            <Sidebar onClose={() => setSidebarOpen(false)} />
          </div>

          {/* Overlay for mobile */}
          {sidebarOpen && (
            <div
              className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
              onClick={() => setSidebarOpen(false)}
            />
          )}

          {/* Main Content */}
          <div className="flex-1 p-4 lg:p-8">
            <CertificateReport />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
