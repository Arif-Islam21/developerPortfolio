import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="bg-primary text-accent text-3xl">Hello world!</div>
    ),
  },
]);

export default router;
