import { ErrorPage } from "../components/errors/ErrorPage";

export default function SomethingWentWrongPage() {
  return <ErrorPage text="Something went wrong." canRefresh={true} goBackToHome={false} />;
}
