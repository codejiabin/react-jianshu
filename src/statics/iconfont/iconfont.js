import {injectGlobal} from 'styled-components';

injectGlobal`
  @font-face {
    font-family: "iconfont";
    src: url('./iconfont.eot?t=1533797422899'); /* IE9*/
    src: url('./iconfont.eot?t=1533797422899#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
    url('./iconfont.ttf?t=1533797422899') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('./iconfont.svg?t=1533797422899#iconfont') format('svg'); /* iOS 4.1- */
  }
  
  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
