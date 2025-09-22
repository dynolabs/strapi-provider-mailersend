const parseEmail = (email: string) => {
  // More secure regex that avoids polynomial time complexity
  // Matches: "Name <email@domain.com>" or just "email@domain.com"
  const emailRegex = /^([^<>]*?)\s*<([^<>]+)>$|^([^<>]+)$/;

  const match = email.match(emailRegex);

  if (match) {
    // If matched the first pattern (Name <email>)
    if (match[1] !== undefined && match[2] !== undefined) {
      const name = match[1].trim();
      const emailAddr = match[2].trim();
      return {
        name: name || undefined,
        email: emailAddr,
      };
    }
    // If matched the second pattern (just email)
    if (match[3] !== undefined) {
      const emailAddr = match[3].trim();
      return {
        name: undefined,
        email: emailAddr,
      };
    }
  }

  return {
    name: undefined,
    email,
  };
};

export { parseEmail };
