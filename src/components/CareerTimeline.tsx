import { Experience } from "@/utils/translations/types";
import TimelineCard from "./TimelineCard";
import { motion } from "framer-motion";

type CareerTimelineProps = {
  experiences: Experience[];
};

const CareerTimeline = ({ experiences }: CareerTimelineProps) => {
  return (
    <div className="relative w-full mb-20 mx-auto">
      {/* Central timeline line */}
      <motion.div
        className="absolute hidden lg:block left-1/2 w-1 bg-gradient-to-b from-[#6366f1] via-blue-900 to-[#a855f7] h-full blur-[2px] -translate-x-1/2"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      />

      {/* Grid container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-x-14 lg:gap-y-20 pb-10 relative">
        {experiences.map((entry, index) => (
          <TimelineCard key={entry.id} experience={entry} index={index} isLeft={index % 2 === 0} />
        ))}
      </div>
    </div>
  );
};

export default CareerTimeline;
