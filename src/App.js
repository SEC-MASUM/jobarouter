import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// layouts
import RootLayout from "./layouts/RootLayout";
import CareersLayout from "./layouts/CareersLayout";
import HelpLayput from "./layouts/HelpLayput";

// pages
import About from "./pages/About";
import CareerDetails, {
  careerDetailsLoader,
} from "./pages/careers/CareerDetails";
import Careers, { careerLoader } from "./pages/careers/Careers";
import Contact from "./pages/help/Contact";
import Faq from "./pages/help/Faq";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import CareerError from "./pages/careers/CareerError";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayput />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="careers" element={<Careers />} />

      <Route
        path="careers"
        element={<CareersLayout />}
        errorElement={<CareerError />}
      >
        <Route index element={<Careers />} loader={careerLoader} />
        <Route
          path=":id"
          element={<CareerDetails />}
          loader={careerDetailsLoader}
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
