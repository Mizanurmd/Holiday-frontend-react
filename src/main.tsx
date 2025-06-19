import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './features/store.ts'
import HolidayList from './holiday/component/HolidayList.tsx'
import './i18n';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <Provider store={store}>
 <HolidayList />
   </Provider>
  
  </StrictMode>,
)
