import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage_27";
import MenuStaticPage_27 from "./pages/local/MenuStaticPage_27";
import MenuLocalJsonPage_27 from "./pages/local/MenuLocalJsonPage_27";


import SupaMenuPage_27 from "./pages/supabase/MenuSupabasePage_27";
import MenuByCategoryPage_27 from "./pages/supabase/MenuByCategoryPage_27";

import MenuNodePage_27 from "./pages/node/MenuNodePage_27";
import Cartpage_27 from "./pages/order/App_27";
import ChoosePage from "./pages/choose/ChoosePage_27";



const App_27 = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/static_27' element={<MenuStaticPage_27 />} />
        <Route path='/local_menu_27' element={<MenuLocalJsonPage_27 />} />

        <Route path='/supa_menu_27' element={<SupaMenuPage_27 />} />
        <Route path='/supa_menu_27/:category' element={<MenuByCategoryPage_27 />} />
        <Route path='/supa_cart_27' element={<Cartpage_27 />} />
        <Route path='/choose_page_27' element={<ChoosePage />} />

        <Route path='/node_menu_27' element={<MenuNodePage_27 />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App_27;
