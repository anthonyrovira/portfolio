import { tagColorMap } from "@/constants/colors";
import { FC } from "react";
import { clsx } from "clsx";
import useTheme from "@/hooks/useTheme";

interface TagsProps {
  tags: string[];
}

interface TagStyle {
  bg: {
    dark: string;
    light: string;
  };
  text: {
    dark: string;
    light: string;
  };
  border: {
    dark: string;
    light: string;
  };
}

const defaultTagStyle: TagStyle = {
  bg: {
    light: "bg-gray-600/10 hover:bg-gray-600/20",
    dark: "bg-gray-400/10 hover:bg-gray-400/20",
  },
  text: {
    light: "text-gray-700",
    dark: "text-gray-300",
  },
  border: {
    light: "border-gray-500/30",
    dark: "border-gray-400/30",
  },
};

const Tags: FC<TagsProps> = ({ tags }) => {
  const { theme } = useTheme();

  const getTagStyles = (tag: string) => {
    const tagLower = tag.toLowerCase();
    return tagColorMap[tagLower] || defaultTagStyle;
  };
  console.log(theme);

  return (
    <div className="flex flex-wrap gap-2 pt-2">
      {tags.map((tag, index) => {
        const styles = getTagStyles(tag);
        return (
          <span
            key={index}
            className={clsx(
              "px-3 py-1 h-max text-xs font-medium rounded-full transition-colors duration-200 border capitalize",
              theme === "light"
                ? [styles.bg.light, styles.text.light, styles.border.light]
                : [styles.bg.dark, styles.text.dark, styles.border.dark]
            )}
          >
            {tag}
          </span>
        );
      })}
    </div>
  );
};

export default Tags;
