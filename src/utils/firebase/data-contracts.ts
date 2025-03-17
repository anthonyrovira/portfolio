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

/** HTTPValidationError */
export interface HTTPValidationError {
  /** Detail */
  detail?: ValidationError[];
}

/** HealthResponse */
export interface HealthResponse {
  /** Status */
  status: string;
}

/** ValidationError */
export interface ValidationError {
  /** Location */
  loc: (string | number)[];
  /** Message */
  msg: string;
  /** Error Type */
  type: string;
}

export type CheckHealthData = HealthResponse;

export type GetMessagesData = any;

export type CreateMessageData = any;

export type CreateMessageError = HTTPValidationError;
