// Mapping of tag to color
export const tagColorMap: Record<
  string,
  {
    bg: { dark: string; light: string };
    text: { dark: string; light: string };
    border: { dark: string; light: string };
  }
> = {
  // Frontend
  react: {
    bg: {
      dark: "bg-react/10 hover:bg-react/20",
      light: "bg-react hover:bg-react/80 saturate-70",
    },
    text: {
      dark: "text-react",
      light: "text-white",
    },
    border: {
      dark: "border-react/30",
      light: "border-react",
    },
  },
  typescript: {
    bg: {
      dark: "bg-typescript/10 hover:bg-typescript/20",
      light: "bg-typescript/90 hover:bg-typescript/80",
    },
    text: {
      dark: "text-typescript",
      light: "text-white",
    },
    border: {
      dark: "border-typescript/30",
      light: "border-typescript/80",
    },
  },
  tailwindcss: {
    bg: {
      dark: "bg-tailwindcss/10 hover:bg-tailwindcss/20",
      light: "bg-tailwindcss/90 hover:bg-tailwindcss/80",
    },
    text: {
      dark: "text-tailwindcss",
      light: "text-white",
    },
    border: {
      dark: "border-tailwindcss/30",
      light: "border-tailwindcss/80",
    },
  },
  nextjs: {
    bg: {
      dark: "bg-nextjs/40 hover:bg-nextjs/55",
      light: "bg-nextjs/90 hover:bg-nextjs/80",
    },
    text: {
      dark: "text-gray-300",
      light: "text-white",
    },
    border: {
      dark: "border-nextjs/40",
      light: "border-nextjs/80",
    },
  },
  astro: {
    bg: {
      dark: "bg-astro/10 hover:bg-astro/20",
      light: "bg-astro/90 hover:bg-astro/80",
    },
    text: {
      dark: "text-astro",
      light: "text-white",
    },
    border: {
      dark: "border-astro/30",
      light: "border-astro/80",
    },
  },

  // Backend
  nodejs: {
    bg: {
      dark: "bg-node/10 hover:bg-node/20",
      light: "bg-node/90 hover:bg-node/80",
    },
    text: {
      dark: "text-green-500",
      light: "text-white",
    },
    border: {
      dark: "border-node/30",
      light: "border-node/80",
    },
  },
  express: {
    bg: {
      dark: "bg-yellow-700/10 hover:bg-yellow-700/20",
      light: "bg-yellow-700/90 hover:bg-yellow-700/80",
    },
    text: {
      dark: "text-yellow-400",
      light: "text-white",
    },
    border: {
      dark: "border-yellow-600/30",
      light: "border-yellow-600/80",
    },
  },

  // Databases
  mongodb: {
    bg: {
      dark: "bg-mongo/10 hover:bg-mongo/20",
      light: "bg-mongo/90 hover:bg-mongo/80",
    },
    text: {
      dark: "text-mongo",
      light: "text-white",
    },
    border: {
      dark: "border-mongo/30",
      light: "border-mongo/80",
    },
  },
  supabase: {
    bg: {
      dark: "bg-supabase/10 hover:bg-supabase/20",
      light: "bg-supabase/90 hover:bg-supabase/80",
    },
    text: {
      dark: "text-supabase",
      light: "text-white",
    },
    border: {
      dark: "border-supabase/30",
      light: "border-supabase/80",
    },
  },
  firebase: {
    bg: {
      dark: "bg-firebase/10 hover:bg-firebase/20",
      light: "bg-firebase/90 hover:bg-firebase/80",
    },
    text: {
      dark: "text-firebase",
      light: "text-white",
    },
    border: {
      dark: "border-firebase/30",
      light: "border-firebase/80",
    },
  },

  // Deployment
  vercel: {
    bg: {
      dark: "bg-vercel/10 hover:bg-vercel/20",
      light: "bg-vercel/90 hover:bg-vercel/80",
    },
    text: {
      dark: "text-white",
      light: "text-white",
    },
    border: {
      dark: "border-vercel/20",
      light: "border-vercel/80",
    },
  },

  // CAD/Engineering
  solidworks: {
    bg: {
      dark: "bg-solidworks/10 hover:bg-solidworks/20",
      light: "bg-solidworks/90 hover:bg-solidworks/80",
    },
    text: {
      dark: "text-solidworks",
      light: "text-white",
    },
    border: {
      dark: "border-solidworks/30",
      light: "border-solidworks/80",
    },
  },
  "c++": {
    bg: {
      dark: "bg-cpp/10 hover:bg-cpp/20",
      light: "bg-cpp/90 hover:bg-cpp/80",
    },
    text: {
      dark: "text-cpp",
      light: "text-white",
    },
    border: {
      dark: "border-cpp/30",
      light: "border-cpp/80",
    },
  },
  labview: {
    bg: {
      dark: "bg-labview/10 hover:bg-labview/20",
      light: "bg-labview/90 hover:bg-labview/80",
    },
    text: {
      dark: "text-labview",
      light: "text-white",
    },
    border: {
      dark: "border-labview/30",
      light: "border-labview/80",
    },
  },
  raspberrypi: {
    bg: {
      dark: "bg-raspberrypi/10 hover:bg-raspberrypi/20",
      light: "bg-raspberrypi/90 hover:bg-raspberrypi/80",
    },
    text: {
      dark: "text-raspberrypi",
      light: "text-white",
    },
    border: {
      dark: "border-raspberrypi/30",
      light: "border-raspberrypi/80",
    },
  },

  // Programming
  javascript: {
    bg: {
      dark: "bg-javascript/10 hover:bg-javascript/20",
      light: "bg-javascript/90 hover:bg-javascript/80",
    },
    text: {
      dark: "text-javascript",
      light: "text-white",
    },
    border: {
      dark: "border-javascript/30",
      light: "border-javascript/80",
    },
  },
  matlab: {
    bg: {
      dark: "bg-matlab/10 hover:bg-matlab/20",
      light: "bg-matlab/90 hover:bg-matlab/80",
    },
    text: {
      dark: "text-matlab",
      light: "text-white",
    },
    border: {
      dark: "border-matlab/30",
      light: "border-matlab/80",
    },
  },
  simulink: {
    bg: {
      dark: "bg-simulink/10 hover:bg-simulink/20",
      light: "bg-simulink/90 hover:bg-simulink/80",
    },
    text: {
      dark: "text-simulink",
      light: "text-white",
    },
    border: {
      dark: "border-simulink/30",
      light: "border-simulink/80",
    },
  },

  // Testing/State Management
  redux: {
    bg: {
      dark: "bg-redux/10 hover:bg-redux/20",
      light: "bg-redux/90 hover:bg-redux/80",
    },
    text: {
      dark: "text-redux",
      light: "text-white",
    },
    border: {
      dark: "border-redux/30",
      light: "border-redux/80",
    },
  },
  storybook: {
    bg: {
      dark: "bg-storybook/10 hover:bg-storybook/20",
      light: "bg-storybook/90 hover:bg-storybook/80",
    },
    text: {
      dark: "text-storybook",
      light: "text-white",
    },
    border: {
      dark: "border-storybook/30",
      light: "border-storybook/80",
    },
  },
  jest: {
    bg: {
      dark: "bg-jest/10 hover:bg-jest/20",
      light: "bg-jest/90 hover:bg-jest/80",
    },
    text: {
      dark: "text-jest",
      light: "text-white",
    },
    border: {
      dark: "border-jest/30",
      light: "border-jest/80",
    },
  },
  "redux-saga": {
    bg: {
      dark: "bg-redux-saga/10 hover:bg-redux-saga/20",
      light: "bg-redux-saga/90 hover:bg-redux-saga/80",
    },
    text: {
      dark: "text-redux-saga",
      light: "text-white",
    },
    border: {
      dark: "border-redux-saga/30",
      light: "border-redux-saga/80",
    },
  },
  formik: {
    bg: {
      dark: "bg-formik/10 hover:bg-formik/20",
      light: "bg-formik/90 hover:bg-formik/80",
    },
    text: {
      dark: "text-formik",
      light: "text-white",
    },
    border: {
      dark: "border-formik/30",
      light: "border-formik/80",
    },
  },
  "react-query": {
    bg: {
      dark: "bg-react-query/10 hover:bg-react-query/20",
      light: "bg-react-query/90 hover:bg-react-query/80",
    },
    text: {
      dark: "text-react-query",
      light: "text-white",
    },
    border: {
      dark: "border-react-query/30",
      light: "border-react-query/80",
    },
  },
  playwright: {
    bg: {
      dark: "bg-playwright/10 hover:bg-playwright/20",
      light: "bg-playwright/90 hover:bg-playwright/80",
    },
    text: {
      dark: "text-playwright",
      light: "text-white",
    },
    border: {
      dark: "border-playwright/30",
      light: "border-playwright/80",
    },
  },
  sass: {
    bg: {
      dark: "bg-sass/10 hover:bg-sass/20",
      light: "bg-sass/90 hover:bg-sass/80",
    },
    text: {
      dark: "text-sass",
      light: "text-white",
    },
    border: {
      dark: "border-sass/30",
      light: "border-sass/80",
    },
  },
};

export const colorGradients = [
  "from-blue-500 to-indigo-600",
  "from-green-500 to-teal-600",
  "from-purple-500 to-pink-600",
  "from-orange-400 to-amber-700",
  "from-red-500 to-rose-700",
] as const;
