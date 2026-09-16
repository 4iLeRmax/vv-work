import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/Home";
import PartnersPage from "./pages/partners/Partners";
import ContactsPage from "./pages/contacts/Contacts";
import PartnerDetailPage from "./pages/partners/partner-detail/PartnerDetailPage";
import Header from "./components/common/header/header";
import Footer from "./components/common/footer/Footer";

export default function App() {
  return (
    <>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/partners/:slug" element={<PartnerDetailPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}
