import assert from 'node:assert';
import { MailerSend, EmailParams, Sender, Recipient, MailerSendConfig } from 'mailersend';

import { parseEmail } from './utils/parseEmail';

type TProviderOptions = MailerSendConfig;

type TSendOptions = {
  from?: string;
  to: string;
  cc: string;
  bcc: string;
  replyTo?: string;
  subject: string;
  text: string;
  html: string;
  [key: string]: unknown;
};

type TSettings = {
  defaultFrom: string;
  defaultReplyTo: string;
};

type TError = {
  body: {
    message: string;
  };
  statusCode: number;
};

const main = {
  provider: 'strapi-provider-mailersend',
  name: 'MailerSend Provider',
  init(providerOptions: TProviderOptions, settings: TSettings) {
    // Assert the providerOptions are valid
    assert(providerOptions.apiKey, 'Mailersend API key is required');

    // Initialize the provider
    const mailerSend = new MailerSend({
      apiKey: providerOptions.apiKey,
    });

    return {
      async send(options: TSendOptions) {
        // Parsing emails to extract name and email
        const parsedFrom = parseEmail(options.from ?? settings.defaultFrom);
        const parsedReplyTo = parseEmail(options.replyTo ?? settings.defaultReplyTo);
        const parsedTo = parseEmail(options.to);

        const sentFrom = new Sender(parsedFrom.email, parsedFrom.name);

        const replyTo = new Sender(parsedReplyTo.email, parsedReplyTo.name);

        const recipients = [new Recipient(parsedTo.email, parsedTo.name)];

        const emailParams = new EmailParams()
          .setFrom(sentFrom)
          .setTo(recipients)
          .setReplyTo(replyTo)
          .setSubject(options.subject)
          .setHtml(options.html || options.text)
          .setText(options.text || options.html);

        try {
          const response = await mailerSend.email.send(emailParams);
          return response;
        } catch (error) {
          const err = error as TError;
          throw new Error('Mailersend error: ' + err.body.message);
        }
      },
    };
  },
};

export default main;
