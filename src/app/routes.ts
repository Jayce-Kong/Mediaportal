import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { ShortVideo } from "./pages/products/ShortVideo";
import { Live } from "./pages/products/Live";
import { Multimodal } from "./pages/products/Multimodal";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "products/short-video",
        Component: ShortVideo,
      },
      {
        path: "products/live",
        Component: Live,
      },
      {
        path: "products/multimodal",
        Component: Multimodal,
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);
