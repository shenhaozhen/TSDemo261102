//import HucreCase from './components/HucreCase.tsx'
import Navbar from './components/Layout/Navbar.tsx'
import './App.css'

function App() {
  return (
    <div className="w-full min-h-screen bg-white font-sans antialiased text-gray-800 flex flex-col items-center">
      {/* 顶部导航栏 */}
      <Navbar />
      {/* 主内容区域 */}
      <main className="w-full max-w-5xl flex-1 px-6 py-8">
        {/* 主标题 */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 tracking-tight inline-block border-b-4 border-blue-200 pb-2">
            我的主页
          </h1>
          <p className="text-blue-500 mt-3 text-base md:text-lg max-w-2xl">
            快速、简单、高效的 Excel 文件处理工具 — 在线预览、合并、拆分与清洗。
          </p>
        </div>

        {/* 功能卡片区域 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          <div className="bg-white border border-blue-100 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
            <div className="h-1.5 w-full bg-gradient-to-r from-blue-400 to-blue-300"></div>
            <div className="p-5">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-blue-800 text-lg mb-1">文件预览</h3>
              <p className="text-blue-600/70 text-sm leading-relaxed">无需安装 Office，直接上传 Excel 文件即可在线查看表格内容，支持 .xlsx 与 .xls 格式。</p>
            </div>
          </div>

          <div className="bg-white border border-blue-100 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
            <div className="h-1.5 w-full bg-gradient-to-r from-blue-300 to-blue-200"></div>
            <div className="p-5">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                </svg>
              </div>
              <h3 className="font-semibold text-blue-800 text-lg mb-1">智能合并 / 拆分</h3>
              <p className="text-blue-600/70 text-sm leading-relaxed">多个工作簿合并为一个，或按条件拆分成独立文件。保留格式与公式，一键处理。</p>
            </div>
          </div>

          <div className="bg-white border border-blue-100 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
            <div className="h-1.5 w-full bg-gradient-to-r from-blue-200 to-blue-100"></div>
            <div className="p-5">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="font-semibold text-blue-800 text-lg mb-1">数据清洗</h3>
              <p className="text-blue-600/70 text-sm leading-relaxed">去除重复行、空白单元格、格式转换，并可导出为 CSV 或 JSON。</p>
            </div>
          </div>
        </div>

        {/* 段落内容填充 */}
        <div className="space-y-6 text-blue-900/80">
          <div className="bg-blue-50/50 rounded-xl p-6 border border-blue-100">
            <h2 className="text-xl font-semibold text-blue-700 mb-3 flex items-center">
              <span className="w-1.5 h-6 bg-blue-500 rounded-full mr-3"></span>
              关于 Excel 文件处理
            </h2>
            <p className="text-blue-800/80 leading-relaxed text-sm md:text-base">
              无论您是数据分析师、财务人员还是普通办公用户，日常工作中总免不了与 Excel 表格打交道。
              本工具专注于解决 Excel 处理中的常见痛点：海量数据预览卡顿、多文件合并繁琐、格式不一致导致导入失败等。
              我们利用浏览器端强大的解析能力，让您在无需上传服务器的情况下快速查看内容，并支持导出整理后的结果，保障数据隐私。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 bg-white p-4 rounded-lg border border-blue-100">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold mt-0.5">✓</span>
              <div>
                <h4 className="font-medium text-blue-800 text-sm">纯前端解析</h4>
                <p className="text-blue-600/70 text-xs mt-0.5">使用 SheetJS 在浏览器内完成表格解析，文件不离开本地。</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white p-4 rounded-lg border border-blue-100">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold mt-0.5">✓</span>
              <div>
                <h4 className="font-medium text-blue-800 text-sm">批量处理能力</h4>
                <p className="text-blue-600/70 text-xs mt-0.5">同时处理多个工作簿，极大提升办公效率。</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white p-4 rounded-lg border border-blue-100">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold mt-0.5">✓</span>
              <div>
                <h4 className="font-medium text-blue-800 text-sm">轻量简洁</h4>
                <p className="text-blue-600/70 text-xs mt-0.5">蓝白界面减少视觉干扰，核心功能一目了然。</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white p-4 rounded-lg border border-blue-100">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold mt-0.5">✓</span>
              <div>
                <h4 className="font-medium text-blue-800 text-sm">免费 & 开放</h4>
                <p className="text-blue-600/70 text-xs mt-0.5">所有基础功能完全免费，无使用次数限制。</p>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-blue-400 pl-5 py-2 my-4 bg-blue-50/30 rounded-r-lg">
            <p className="italic text-blue-700 text-sm md:text-base">
              “上周我用这个工具合并了 12 个月的销售报表，只用了几秒钟，之前手动操作要花半小时。”
            </p>
            <p className="text-blue-500 text-xs mt-1">— 来自某财务分析师</p>
          </div>

          <div className="flex flex-wrap items-center gap-4 mt-8">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-6 rounded-lg shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1 text-sm">
              上传 Excel 文件
            </button>
            <button className="bg-white border border-blue-200 hover:bg-blue-50 text-blue-600 font-medium py-2.5 px-6 rounded-lg shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-200 text-sm">
              查看文档
            </button>
            <span className="text-blue-400 text-xs ml-auto hidden sm:inline">支持 .xlsx, .xls, .csv</span>
          </div>
        </div>
      </main>

      {/* 页脚 */}
      <footer className="w-full max-w-5xl px-6 py-5 border-t border-blue-100 mt-8">
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-blue-400">
          <p>© 2025 ExcelKit · 简约蓝白 · 文件处理工具</p>
          <div className="flex gap-4 mt-2 sm:mt-0">
            <span className="hover:text-blue-600 cursor-pointer">隐私</span>
            <span className="hover:text-blue-600 cursor-pointer">条款</span>
            <span className="hover:text-blue-600 cursor-pointer">帮助</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App
