import { ContactForm } from "./data-contracts";

const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:3000";

export const createMessage = async (form: ContactForm) => {
  try {
    const response = await fetch(`${apiUrl}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }

    const data = await response.json();
    console.log("Message sent successfully:", data);
    return data;
  } catch (error) {
    console.error("Sending error:", error);
    throw error;
  }
};
