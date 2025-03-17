import { lazy, type ReactNode, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./pages/App";

export const SuspenseWrapper = ({ children }: { children: ReactNode }) => {
  return <Suspense>{children}</Suspense>;
};

const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const SomethingWentWrongPage = lazy(() => import("./pages/SomethingWentWrongPage"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: (
      <SuspenseWrapper>
        <SomethingWentWrongPage />
      </SuspenseWrapper>
    ),
  },
  {
    path: "*",
    element: (
      <SuspenseWrapper>
        <NotFoundPage />
      </SuspenseWrapper>
    ),
    errorElement: (
      <SuspenseWrapper>
        <SomethingWentWrongPage />
      </SuspenseWrapper>
    ),
  },
]);
