const parseEmail = (email: string) => {
  // Use a simple string-based approach to avoid regex complexity issues
  const trimmedEmail = email.trim();

  // Check if email contains angle brackets indicating "Name <email>" format
  const lastOpenBracket = trimmedEmail.lastIndexOf('<');
  const lastCloseBracket = trimmedEmail.lastIndexOf('>');

  if (
    lastOpenBracket > -1 &&
    lastCloseBracket > lastOpenBracket &&
    lastCloseBracket === trimmedEmail.length - 1
  ) {
    // Format: "Name <email@domain.com>"
    const name = trimmedEmail.substring(0, lastOpenBracket).trim();
    const emailAddr = trimmedEmail.substring(lastOpenBracket + 1, lastCloseBracket).trim();

    return {
      name: name || undefined,
      email: emailAddr,
    };
  }

  // Format: just "email@domain.com"
  return {
    name: undefined,
    email: trimmedEmail,
  };
};

export { parseEmail };
