import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import WhyDidYouRender from '@welldone-software/why-did-you-render';
import React from 'react';
WhyDidYouRender(React, {
  include: [/./], // Bao gồm tất cả các component (sử dụng RegExp để chỉ định các component bạn muốn theo dõi)
  trackAllPureComponents: true, // Theo dõi tất cả các pure components (sử dụng React.memo hoặc không có state)
  logOwnerReasons: true, // Log lý do khi component cha thay đổi
  logOnDifferentValues: true, //
});

createRoot(document.getElementById('root')!).render(
  <App />
)
