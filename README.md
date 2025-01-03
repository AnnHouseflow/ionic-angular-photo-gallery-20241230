﻿# ionic-angular-photo-gallery-20241230
- node 18.20.5
- ionic version 7.2.0
- Angular NgModule

## 分支說明
- `main`：
  - Angular @^19.0.0
  - zone.js ~0.15.0
  - typescript ~5.6.3
- `feature/Angular 18`
  - Angular @^18.2.12
  - zone.js ~0.14.10
  - typescript ~^5.5.4

## 安裝方式
- 安裝 `npm i`
- 運行 `ionic serve`

## 錯誤紀錄
### NullInjectorError: R3InjectorError(Platform: core)[t -> Ir]
1. 原採註解優化程式碼的方法，Android Studio 沒報錯，但發布 PWA 至 firebase 仍報錯
```
// node_modules\@angular-devkit\build-angular\src\tools\webpack\configs\common.js
if (scriptsOptimization) {
     extraMinimizers.push(new plugins_1.JavaScriptOptimizerPlugin({
         define: { ...
     }));
}
```
2. 確認以下優化已關閉，但 Android Studio 和 firebase PWA 仍然報錯
```
// angular.json
"buildOptimizer": false,
"optimization": false,
```
3. 降版 Angular 至 18.2.12，firebase PWA 成功，檔案版本見分支 `feature/Angular 18`
