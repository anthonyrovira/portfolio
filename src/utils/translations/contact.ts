import { ContactTranslations, Language } from "./types";

const en: ContactTranslations = {
  title: "Contact",
  titleHighlight: " me",
  subtitle: "Have a question or want to work together? Fill out the form below and I'll get back to you as soon as possible.",
  form: {
    name: {
      label: "Name",
      placeholder: "Your name",
    },
    email: {
      label: "Email",
      placeholder: "Your email address",
    },
    message: {
      label: "Message",
      placeholder: "Your message",
    },
    send: "Send Message",
    sending: "Sending...",
    success: "Your message has been sent successfully!",
    error: "There was an error sending your message. Please try again.",
  },
  connect: {
    title: "Connect with me",
    subtitle: "Feel free to connect with me on any of these platforms.",
    emailPrefix: "Prefer email? Reach out directly at: ",
  },
};

const fr: ContactTranslations = {
  title: "Contactez-",
  titleHighlight: "moi",
  subtitle:
    "Vous avez une question ou souhaitez collaborer ? Remplissez le formulaire ci-dessous et je vous répondrai dès que possible.",
  form: {
    name: {
      label: "Nom",
      placeholder: "Votre nom",
    },
    email: {
      label: "Email",
      placeholder: "Votre adresse email",
    },
    message: {
      label: "Message",
      placeholder: "Votre message",
    },
    send: "Envoyer le Message",
    sending: "Envoi en cours...",
    success: "Votre message a été envoyé avec succès",
    error: "Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer.",
  },
  connect: {
    title: "Connectons-nous",
    subtitle: "N'hésitez pas à me suivre sur mes réseaux :",
    emailPrefix: "Ou bien contactez-moi directement à : ",
  },
};

const es: ContactTranslations = {
  title: "Contácta",
  titleHighlight: "me",
  subtitle:
    "¿Tienes alguna pregunta o te gustaría trabajar juntos? Completa el formulario a continuación y te responderé lo antes posible.",
  form: {
    name: {
      label: "Nombre",
      placeholder: "Tu nombre",
    },
    email: {
      label: "Email",
      placeholder: "Tu dirección de email",
    },
    message: {
      label: "Mensaje",
      placeholder: "Tu mensaje",
    },
    send: "Enviar Mensaje",
    sending: "Enviando...",
    success: "Tu mensaje ha sido enviado con éxito",
    error: "Hubo un error al enviar tu mensaje. Por favor, inténta otro modo de contacto.",
  },
  connect: {
    title: "Conectemos",
    subtitle: "No dudes conectarte conmigo en cualquiera de estas plataformas :",
    emailPrefix: "¿Prefieres el correo electrónico? Contáctame directamente en:",
  },
};

export const contactTranslations: Record<Language, ContactTranslations> = { en, fr, es };
