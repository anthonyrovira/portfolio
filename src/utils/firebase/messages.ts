import { ContactForm } from "./data-contracts";

const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:3000";

export const createMessage = async (form: ContactForm) => {
  try {
    const response = await fetch(`${apiUrl}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Internal-Secret": import.meta.env.VITE_API_INTERNAL_SECRET || "",
      },
      body: JSON.stringify(form),
    });

    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Sending error:", error);
    throw error;
  }
};
