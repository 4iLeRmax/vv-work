import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/Home";
import PartnersPage from "./pages/partners/Partners";
import ContactsPage from "./pages/contacts/Contacts";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import PartnerDetailPage from "./pages/partners/partner-detail/PartnerDetailPage";

export default function App() {
  return (
    <>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/partner" element={<PartnersPage />} />
            <Route path="/partners/:slug" element={<PartnerDetailPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}
