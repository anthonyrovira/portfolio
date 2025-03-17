import { ErrorPage } from "../components/errors/ErrorPage";

export default function NotFoundPage() {
  return <ErrorPage text="Page not found." canRefresh={false} goBackToHome />;
}
