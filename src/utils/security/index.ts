export const checkRateLimit = (): boolean => {
  const rateLimit = 3; // Maximum allowed form submissions within a minute
  const rateLimitTime = 60000; // 1 minute in milliseconds
  const now = Date.now();
  const lastSubmissionTime = localStorage.getItem("lastSubmissionTime") || "0";
  const submissionCount = localStorage.getItem("submissionCount") || "0";

  const timeSinceLastSubmission = now - parseInt(lastSubmissionTime, 10);

  // If the last submission was more than a minute ago, reset the count and update the time
  if (timeSinceLastSubmission > rateLimitTime) {
    localStorage.setItem("submissionCount", "1");
    localStorage.setItem("lastSubmissionTime", now.toString());
    return true; // Allow submission
  }

  // If within the time limit, check the submission count
  const currentSubmissionCount = parseInt(submissionCount, 10);
  if (currentSubmissionCount >= rateLimit) {
    return false; // Rate limit exceeded
  }

  // Increment the submission count and update the last submission time
  localStorage.setItem("submissionCount", (currentSubmissionCount + 1).toString());
  localStorage.setItem("lastSubmissionTime", now.toString());
  return true; // Allow submission
};
