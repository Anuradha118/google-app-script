// import doGet from './server/webapp';
// import './es6';

// global.doGet = doGet;

// global.sendmail = (email = 'amit@labnol.org') => {
//   GmailApp.sendEmail(email, 'Apps Script Starter', 'Hello Google Apps Script');
// };
import getEmailAddress from './email';

global.getEmailAddress = getEmailAddress;

global.doGet = () => {
  const text = '<b> I love Apps Script</b>';

  const output = HtmlService.createHtmlOutput(text);
  output.setTitle(text);
  output.addMetaTag('viewport', 'width=device-width, initial-scale=1');
  output.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  return output;
};
