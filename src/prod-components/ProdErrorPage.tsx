import { Home, RefreshCcw } from "lucide-react";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  text: ReactNode;
  canRefresh: boolean;
  goBackToHome: boolean;
}

export const ProdErrorPage = ({ text, canRefresh, goBackToHome }: Props) => {
  const navigate = useNavigate();
  return (
    <div className="relative w-full h-screen mx-auto overflow-hidden flex items-center">
      {/* Background gradients */}
      <div className="absolute -z-10 inset-0 bg-linear-to-b dark:from-dark-background dark:via-dark-light dark:to-dark-background from-[#6366f1]/80 via-[#a855f7]/30 to-[#6366f1]/80 opacity-30" />
      <div className="absolute -z-10 inset-0 dark_bg-[radial-gradient(circle_at_center,rgba(145,94,255,0.15),transparent_70%)] bg-[radial-gradient(circle_at_center,rgba(107,79,209,0.1),transparent_70%)]" />

      <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full absolute inset-0 max-w-7xl flex flex-col items-center justify-center gap-5">
        {/* Error heading */}
        <h1 className="relative w-max">
          <span className="absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] blur-2xl opacity-20" />
          <span className="relative text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl font-bold text-text-light_secondary">
            {text}
          </span>
        </h1>

        {/* Description */}
        <p className="darkTextPrimaryForeground text-primary-light-foreground text-pretty mdTextLg text-base max-w-lg">
          Very sorry, but something went wrong. Please try again later or contact me directly{" "}
          <a
            href={"mailto:anthonyrov@gmail.com"}
            className="text-accent-purple hover:text-accent-blue transition-colors duration-300"
          >
            via email
          </a>
          .
        </p>

        {/* Reload button */}
        {canRefresh && (
          <button
            onClick={() => window.location.reload()}
            type="button"
            name="reload-page"
            className="flex gap-3 items-center h-10 sm:h-12 py-3 px-6 sm:px-8 text-sm smTextBase bg-linear-to-r dark:from-[#6366f1] dark:to-[#a855f7] from-accent-light-purple to-accent-light-blue text-white font-bold rounded-full shadowLg hover:shadow-purple-500/25 transition-colors duration-300 transform hover:scale-105"
          >
            <RefreshCcw className="w-5 h-5" />
            Reload page
          </button>
        )}

        {/* GoBackToHome Button */}
        {goBackToHome && (
          <button
            onClick={() => navigate("/", { replace: true })}
            type="button"
            name="reload-page"
            className="flex gap-3 items-center h-10 sm:h-12 py-3 px-6 sm:px-8 text-sm smTextBase bg-linear-to-r dark:from-[#6366f1] dark:to-[#a855f7] from-accent-light-purple to-accent-light-blue text-white font-bold rounded-full shadowLg hover:shadow-purple-500/25 transition-colors duration-300 transform hover:scale-105"
          >
            <Home className="w-5 h-5" />
            Back to Home Page
          </button>
        )}
      </div>
    </div>
  );
};
