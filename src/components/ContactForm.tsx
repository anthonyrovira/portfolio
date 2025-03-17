import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import AnimatedSection, { fadeIn } from "./AnimatedSection";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import GitHub from "@/icons/github.svg?react";
import LinkedIn from "@/icons/linkedin.svg?react";
import X from "@/icons/x.svg?react";

import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../utils/firebase";
import { createMessage } from "@/utils/firebase/messages";
import { useLanguage } from "@/hooks/useLanguage";
import { Send } from "lucide-react";
import { clsx } from "clsx";

// Define the form schema with Zod
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Submit the form data to Firebase
      console.log("Form data to send to Firebase:", data);

      let firestoreSuccess = false;

      // First try submitting to Firestore directly
      try {
        await addDoc(collection(db, "messages"), {
          ...data,
          createdAt: serverTimestamp(), // Use server timestamp for consistency
        });
        firestoreSuccess = true;
        console.log("Message saved to Firestore successfully");
      } catch (firebaseError) {
        console.error("Firebase error:", firebaseError);
        // Firestore submission failed, we'll use the API as backup
      }

      // If Firestore submission failed, try using our API endpoint as backup
      if (!firestoreSuccess) {
        try {
          const response = await createMessage(data);
          console.log({ response });

          // if (!response) {
          //   throw new Error(`API error: ${response.status}`);
          // }

          console.log("Message saved via API successfully");
        } catch (apiError) {
          console.error("API error:", apiError);
          // If both Firestore and API fail, throw error to trigger the catch block
          if (!firestoreSuccess) {
            throw new Error("Failed to submit message through all available methods");
          }
        }
      }

      setSubmitSuccess(true);
      reset();

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError("There was an error sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatedSection
      id="contact"
      className="relative w-full min-h-screen sm:py-24 px-4 sm:px-6 lg:px-8"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Background Elements */}
      <div className="absolute -z-10 top-0 inset-x-0 h-40 bg-linear-to-b from-light-background dark:from-dark-background to-transparent transition-colors duration-500 ease-in-out" />
      <div className="absolute -z-10 bottom-0 inset-x-0 h-40 bg-linear-to-t from-light-background dark:from-dark-background to-transparent transition-colors duration-500 ease-in-out" />

      {/* Floating particle orbs - decorative elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 rounded-full bg-accent-purple/5 blur-xl"
        animate={{
          x: [0, 30, 0],
          y: [0, 50, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-40 right-10 w-64 h-64 rounded-full bg-accent-blue/5 blur-xl"
        animate={{
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: "easeInOut",
        }}
      />

      <div className="relative max-w-6xl pt-24 md:pt-4 mx-auto z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-6 md:mb-16" variants={fadeIn("down", 0.1)}>
          <h2 className="text-4xl font-bold text-text-light_secondary dark:text-white mb-4">
            {t.contact.title}
            <span className="bg-linear-to-r from-accent-purple to-accent-blue text-transparent bg-clip-text">
              {t.contact.titleHighlight}
            </span>
          </h2>
          <p className="text-text-light_secondary dark:text-white/70 max-w-2xl text-pretty mx-auto">{t.contact.subtitle}</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Form - Takes up 3/5 of the space on desktop */}
          <AnimatedSection className="lg:col-span-3" variants={fadeIn("right", 0.2)}>
            <div className="dark:bg-dark-light bg-light-card border dark:border-dark-border border-light-border rounded-xl p-4 md:p-6 shadow-lg">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-base font-medium text-text-light_secondary dark:text-white/90">
                    {t.contact.form.name.label}
                  </label>
                  <input
                    id="name"
                    {...register("name")}
                    aria-invalid={!!errors.name}
                    aria-describedby="name-error"
                    className={`w-full px-4 py-3 rounded-lg bg-light-foreground dark:bg-dark-background border ${
                      errors.name ? "border-red-500" : "border-white/10"
                    } focus:border-accent-purple/50 focus:ring-1 focus:ring-accent-purple/50 text-text-light dark:text-white outline-hidden transition-colors`}
                    placeholder={t.contact.form.name.placeholder}
                  />
                  {errors.name && (
                    <p id="name-error" className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-base font-medium text-text-light_secondary dark:text-white/90">
                    {t.contact.form.email.label}
                  </label>
                  <input
                    id="email"
                    type="email"
                    aria-invalid={!!errors.email}
                    aria-describedby="email-error"
                    {...register("email")}
                    className={`w-full px-4 py-3 rounded-lg bg-light-foreground dark:bg-dark-background border ${
                      errors.email ? "border-red-500" : "border-white/10"
                    } focus:border-accent-purple/50 focus:ring-1 focus:ring-accent-purple/50 text-text-light dark:text-white outline-hidden transition-colors`}
                    placeholder={t.contact.form.email.placeholder}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-base font-medium text-text-light_secondary dark:text-white/90">
                    {t.contact.form.message.label}
                  </label>
                  <textarea
                    id="message"
                    aria-label="message"
                    aria-invalid={!!errors.message}
                    aria-describedby="message-error"
                    {...register("message")}
                    rows={6}
                    className={`w-full px-4 py-3 rounded-lg bg-light-foreground dark:bg-dark-background border resize-y ${
                      errors.message ? "border-red-500" : "border-white/10"
                    } focus:border-accent-purple/50 focus:ring-1 focus:ring-accent-purple/50 text-text-light dark:text-white outline-hidden transition-colors resize-none`}
                    placeholder={t.contact.form.message.placeholder}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-red-500 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <div>
                  <motion.button
                    onClick={() => {
                      const element = document.getElementById("portfolio");
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                    type="submit"
                    disabled={isSubmitting}
                    name="submit-message"
                    id="submit-message"
                    className={clsx(
                      "mx-auto flex gap-3 items-center h-10 sm:h-12 py-3 px-6 sm:px-8 text-sm sm:text-base font-bold text-white rounded-full shadow-lg transition-colors duration-300",
                      isSubmitting
                        ? "bg-gray-500"
                        : "bg-linear-to-r dark:from-[#6366f1] dark:to-[#a855f7] from-accent-light-purple to-accent-light-blue hover:shadow-purple-500/25"
                    )}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send className="w-5 h-5" />
                    {isSubmitting ? t.contact.form.sending : t.contact.form.send}
                  </motion.button>

                  {submitSuccess && <p className="text-green-500 text-sm mt-2 text-center">{t.contact.form.success}</p>}

                  {submitError && <p className="text-red-500 text-sm mt-2 text-center">{submitError}</p>}
                </div>
              </form>
            </div>
          </AnimatedSection>

          {/* Connect with Me Section - Takes up 2/5 of the space on desktop */}
          <AnimatedSection className="lg:col-span-2" variants={fadeIn("left", 0.4)}>
            <div className="dark:bg-dark-light bg-light-card border dark:border-dark-border border-light-border rounded-xl p-4 md:p-6 shadow-lg h-full flex flex-col">
              <h3 className="text-xl font-semibold text-text-light dark:text-white mb-6">{t.contact.connect.title}</h3>

              <p className="text-text-light_secondary dark:text-white/70 text-pretty mb-8">{t.contact.connect.subtitle}</p>

              <div className="space-y-6 grow">
                <a
                  href="https://www.linkedin.com/in/anthonyrovira/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center cursor-pointer p-4 rounded-lg bg-light-foreground dark:bg-dark-background hover:bg-linear-to-r hover:from-linkedin/30 hover:to-linkedin/50 dark:hover:from-linkedin/40 dark:hover:to-linkedin/80 border border-white/5 transition-colors duration-300"
                >
                  <div className="shrink-0 w-10 h-10 rounded-full bg-light-foreground dark:bg-dark-background border border-light-card dark:border-white/10 flex items-center justify-center">
                    <LinkedIn className="w-5 h-5 text-text-light_secondary dark:text-white" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-base font-medium text-text-light dark:text-white">LinkedIn</h4>
                    <p className="text-sm text-text-light_secondary dark:text-white/50">/in/anthonyrovira</p>
                  </div>
                </a>

                <a
                  href="https://github.com/anthonyrovira"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 rounded-lg bg-light-foreground dark:bg-dark-background hover:bg-linear-to-r hover:from-github/10 hover:to-github/30 dark:hover:from-github/40 dark:hover:to-github/80 border border-white/5 transition-colors duration-300"
                >
                  <div className="shrink-0 w-10 h-10 rounded-full bg-light-foreground dark:bg-dark-background border border-light-card dark:border-white/10 flex items-center justify-center">
                    <GitHub className="w-5 h-5 text-text-light_secondary dark:text-white" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-base font-medium text-text-light dark:text-white">GitHub</h4>
                    <p className="text-sm text-text-light_secondary dark:text-white/50">/anthonyrovira</p>
                  </div>
                </a>

                <a
                  href="https://x.com/AnthonyRoviraJS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 rounded-lg bg-light-foreground dark:bg-dark-background hover:bg-linear-to-r hover:from-x/40 hover:to-x/80 border border-white/5 transition-colors duration-300"
                >
                  <div className="shrink-0 w-10 h-10 rounded-full bg-light-foreground dark:bg-dark-background border border-light-card dark:border-white/10 flex items-center justify-center">
                    <X className="w-5 h-5 text-text-light_secondary dark:text-white" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-base font-medium text-text-light dark:text-white">X (Twitter)</h4>
                    <p className="text-sm text-text-light_secondary dark:text-white/50">@AnthonyRoviraJS</p>
                  </div>
                </a>
              </div>

              <p className="text-sm text-text-light_secondary dark:text-white/50 mt-6">
                {t.contact.connect.emailPrefix}
                <a
                  href="mailto:anthonyrov@gmail.com"
                  className="text-accent-purple hover:text-accent-blue transition-colors duration-300"
                >
                  anthonyrov@gmail.com
                </a>
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ContactForm;
