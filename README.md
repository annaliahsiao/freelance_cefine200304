<h1>基本的webpack專案範例｜A sample of webpack base project </h1>
<p>從Node.Js的安裝到建立一個使用的webpakc網頁專案架構</p>
Webpakc + Pug + Stylus + Jquery
<hr>
package.json是npm啟動的設定檔
當我們開始使用了webpack、pug、sass、vue等等輔助工具時，package.json中會多出dependencies、devDependencies、scripts…等等json陣列
<br>
webpack.config.js在這裡我們拆成webpack.bundle.js、webpack.common.js以及webpack.dev.js
<br>
<br>
1.webpack.common.js：webpack共用的設定檔
<br>
2.webpack.bundle.js：建立專案的設定檔
<br>
3.webpack.dev.js：本機預覽的設定檔
<br>
postcss 是一個使用 JavaScript 轉換 CSS 的工具，webpack4版本需要建立一個postcss.config.js來設定配置，並且決定Browsers的版本~
<br>
<br>
.gitignore其實是git的設定檔，讓不想公開或是檔案太大的資料夾(例如node_modules的模組)不要放到git上
<br>
<br>
.babelrc比起bable.config來說是小巧輕量的配置檔，針對想要修改的部分新增在這裡就可以保留babel原始的設定，而babel.config.js其實和webpack.config.js設定一樣，想要讓bable全部都變成自己專屬的設定的時候，可以使用這個方式
<br>
<br>
<hr>
其他關於Webpack詳細的教學系列文章可以到我的medium中查看 <a href="https://medium.com/anna-hsaio-%E5%89%8D%E7%AB%AF%E9%96%8B%E7%99%BC%E8%A8%98/search?q=webpack">Anna.Hsaio｜前端開發記
</a>，作者也會努力持續新增的~‣牦敥慬据彥散楦敮〲㌰㐰�