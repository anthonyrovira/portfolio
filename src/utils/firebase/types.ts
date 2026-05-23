/** ContactMessage */
export interface ContactForm {
  /**
   * Name
   * @minLength 2
   */
  name: string;
  /**
   * Email
   * @format email
   */
  email: string;
  /**
   * Message
   * @minLength 10
   */
  message: string;
  /** Createdat */
  createdAt?: string | null;
}
