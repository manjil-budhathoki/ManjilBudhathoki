import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import ResearchWriting from "./pages/ResearchWriting";
import Library from "./pages/Library";
import Me from "./pages/Me";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "research", element: <ResearchWriting /> },
      { path: "library", element: <Library /> },
      { path: "me", element: <Me /> },
      { path: "*", element: <Home /> },
    ],
  },
]);