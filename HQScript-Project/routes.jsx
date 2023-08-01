import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./src/pages/RootLayout";
import Home from "./src/pages/Home";
import ShowBook from "./src/pages/ShowBook";
import MarvelProducts from "./src/pages/MarvelProducts";
import DCProducts from "./src/pages/DCProducts";
import MangaProducts from "./src/pages/MangaProducts";
import HQProducts from "./src/pages/HQProducts";
import ShounenProducts from "./src/pages/ShounenProducts";
import SeinenProducts from "./src/pages/SeinenProduct";
import Cart from "./src/pages/Cart";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: ":id", element: <ShowBook /> },
      { path: "marvel", element: <MarvelProducts /> },
      { path: "dc", element: <DCProducts /> },
      { path: "manga", element: <MangaProducts /> },
      { path: "hq", element: <HQProducts /> },
      { path: "shounen", element: <ShounenProducts /> },
      { path: "seinen", element: <SeinenProducts /> },
      { path: "cart", element: <Cart /> },
    ],
  },
]);
export default router;
