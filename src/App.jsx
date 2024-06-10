
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Vans from './pages/vans/vans'
import VanDetail from './pages/vans/vandetials'
import Layout from './components/layout'
import Dashboard from './pages/host/dashboard'
import Income from './pages/host/Income'
import Reviews from './pages/host/Reviews'
import HostLayout from './components/hostlayout'
import HostVans from './pages/host/hostvans'
import HostVansDetail from './pages/host/hostvandetail'
import HostVanInfo from './pages/host/hostvaninfo'
import HostVanPhotos from './pages/host/hostvanphotos'
import HostVanPricing from './pages/host/hostvanpricing'
import NotFound from './pages/NotFound'
import Login from './pages/Login'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
            
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="vans" element={<Vans />} />
            <Route path="login" element={<Login />} />
            <Route path="vans/:id" element={<VanDetail />} />
          
          <Route path="host" element={<HostLayout />}>
          <Route index element={<Dashboard />} />
           <Route path="income" element={<Income />} />
           <Route path="reviews" element={<Reviews />} />
           <Route path="vans" element={<HostVans />} />
           <Route path="vans/:id" element={<HostVansDetail />}>
                <Route index element={<HostVanInfo/>} />
                <Route path="pricing" element={<HostVanPricing/>} />
                <Route path="photos" element={<HostVanPhotos/>} />
                
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
