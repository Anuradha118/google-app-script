/* Returns the Gmail Aliases of the authenticated user */
const getEmailAliases = () => {
  const userEmail = Session.getActiveUser().getEmail();
  const aliases = GmailApp.getAliases();
  const emails = [userEmail, ...aliases];
  Logger.log(`Your emails are: ${emails.join(', ')}`);
};

export default getEmailAliases;
