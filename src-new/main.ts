import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
/**已经修改为全局配置 */
// //nz-date-picker 部分locale来自于angular自身的国际化支持  
// import { registerLocaleData } from '@angular/common';
// import zh from '@angular/common/locales/zh';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));




// registerLocaleData(zh);