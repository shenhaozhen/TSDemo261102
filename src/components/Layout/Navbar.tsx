function Navbar() {
  return (
    <nav className="w-full max-w-5xl px-6 pt-6 pb-2">
      <div className="flex flex-wrap items-center gap-1 sm:gap-2 border-b border-blue-100 pb-3">
        {/* 小 logo / 项目名 */}
        <div className="flex items-center mr-4">
          <span className="h-3 w-3 rounded-full bg-blue-500 inline-block mr-2"></span>
          <span className="text-sm font-semibold tracking-wide text-blue-700">ExcelKit</span>
        </div>

        {/* 菜单按钮，仅 UI，不实现切换逻辑 */}
        <button className="px-3 py-1.5 text-sm font-medium rounded-md transition-colors duration-150 bg-blue-500 text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-1">
          Home
        </button>
        <button className="px-3 py-1.5 text-sm font-medium rounded-md transition-colors duration-150 text-blue-600 hover:bg-blue-50 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-1">
          Page 1
        </button>
        <button className="px-3 py-1.5 text-sm font-medium rounded-md transition-colors duration-150 text-blue-600 hover:bg-blue-50 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-1">
          Page 2
        </button>
        <button className="px-3 py-1.5 text-sm font-medium rounded-md transition-colors duration-150 text-blue-600 hover:bg-blue-50 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-1">
          Page 3
        </button>

        {/* 右侧占位 */}
        <div className="ml-auto flex items-center gap-2">
          <span className="text-xs text-blue-400 hidden sm:inline">v1.0</span>
          <div className="h-6 w-6 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-500 text-xs font-bold">
            E
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;