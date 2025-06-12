export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 主要链接区域 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {/* 博客链接 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">学习资源</h3>
            <ul className="space-y-2">
              <li>
                <a href="/blog/1.html" className="text-sm text-gray-600 hover:text-gray-900">
                  如何提高打字速度和准确度
                </a>
              </li>
              <li>
                <a href="/blog/2.html" className="text-sm text-gray-600 hover:text-gray-900">
                  双拼相比全拼的缺点
                </a>
              </li>
              <li>
                <a href="/blog/3.html" className="text-sm text-gray-600 hover:text-gray-900">
                  如何快速学会盲打
                </a>
              </li>
              <li>
                <a href="/blog/ci1.html" className="text-sm text-gray-600 hover:text-gray-900">
                  中文练习打字词组
                </a>
              </li>
            </ul>
          </div>

          {/* 练习功能 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">练习功能</h3>
            <ul className="space-y-2">
              <li>
                <a href="/cn-word/list" className="text-sm text-gray-600 hover:text-gray-900">
                  中文词组注音
                </a>
              </li>
              <li>
                <a href="/blog/meiri.html" className="text-sm text-gray-600 hover:text-gray-900">
                  每日挑战
                </a>
              </li>
              <li>
                <a href="/diary-top/list" className="text-sm text-gray-600 hover:text-gray-900">
                  每日挑战数据
                </a>
              </li>
            </ul>
          </div>

          {/* 关于我们 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">关于我们</h3>
            <ul className="space-y-2">
              <li>
                <a href="/blog/about.html" className="text-sm text-gray-600 hover:text-gray-900">
                  关于我们
                </a>
              </li>
              <li>
                <a href="/blog/qa.html" className="text-sm text-gray-600 hover:text-gray-900">
                  常见问题
                </a>
              </li>
              <li>
                <a
                  href="https://www.bilibili.com/video/BV1W8411x73U"
                  className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .356-.124.657-.373.906L17.813 4.653zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.12-.789 1.867v7.36c.02.746.283 1.369.789 1.867.507.498 1.134.755 1.88.773h13.334c.746-.018 1.373-.275 1.88-.773.506-.498.769-1.121.789-1.867v-7.36c-.02-.747-.283-1.369-.789-1.867-.507-.497-1.134-.755-1.88-.773H5.333zM8 11.107c.373 0 .684.124.933.373.25.249.375.569.375.96v1.173c0 .391-.125.711-.375.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.375-.569-.375-.96V12.44c0-.391.125-.711.375-.96.249-.249.56-.373.933-.373zm8 0c.373 0 .684.124.933.373.25.249.375.569.375.96v1.173c0 .391-.125.711-.375.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.375-.569-.375-.96V12.44c0-.391.125-.711.375-.96.249-.249.56-.373.933-.373z"/>
                  </svg>
                  Bilibili 教程
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 底部版权信息 */}
        <div className="border-t border-gray-200 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 sm:mb-0">
              <img
                src="https://ext.same-assets.com/3898194439/1442723839.png"
                alt="dazidazi.com"
                className="h-6 w-auto"
              />
              <span className="text-sm text-gray-500">dazidazi.com</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-xs text-gray-500">
              <a
                href="https://beian.miit.gov.cn/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-700"
              >
                浙ICP备2022021542号-1
              </a>
              <a
                href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33032702001025"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-700"
              >
                浙公网安备 33032702001025号
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
