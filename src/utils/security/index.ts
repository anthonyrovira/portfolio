export const checkRateLimit = (): boolean => {
  const rateLimit = 3; // Maximum allowed form submissions within a minute
  const rateLimitTime = 60000; // 1 minute in milliseconds
  const now = Date.now();

  // Fix typing for localStorage
  const lastSubmissionTimeStr = localStorage.getItem("lastSubmissionTime") ?? "0";
  const lastSubmissionTime = parseInt(lastSubmissionTimeStr, 10);

  const submissionCountStr = localStorage.getItem("submissionCount") ?? "0";
  const submissionCount = parseInt(submissionCountStr, 10);

  // Check for invalid values
  if (isNaN(lastSubmissionTime)) {
    localStorage.setItem("lastSubmissionTime", now.toString());
    localStorage.setItem("submissionCount", "1");
    return true;
  }

  const timeSinceLastSubmission = now - lastSubmissionTime;

  // If last submission was more than a minute ago, reset the counter
  if (timeSinceLastSubmission > rateLimitTime) {
    localStorage.setItem("submissionCount", "1");
    localStorage.setItem("lastSubmissionTime", now.toString());
    return true;
  }

  // If within time limit, check submission count
  if (submissionCount >= rateLimit) {
    return false; // Rate limit exceeded
  }

  // Increment counter and update time
  localStorage.setItem("submissionCount", (submissionCount + 1).toString());
  localStorage.setItem("lastSubmissionTime", now.toString());
  return true;
};
