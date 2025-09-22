<p align="center">
     <img src="./docs/mailersend-provider.png" alt="Strapi provider mailersend" width="100">
</p>

<h1 align="center">
  MailerSend Provider for Strapi
</h1>

<p align="center">Provider plugin for send emails using <a href="https://www.mailersend.com/">mailersend</a> in <a href="https://strapi.io/" target="_blank">Strapi</a>.</p>

<p align="center">
  <a href="https://www.npmjs.com/package/strapi-provider-mailersend">
    <img src="https://img.shields.io/npm/v/strapi-provider-mailersend" alt="Version">
    <img src="https://img.shields.io/npm/l/strapi-provider-mailersend" alt="License">
  </a>
</p>

The Strapi Provider MailerSend Plugin is a custom provider plugin for Strapi which allows to send emails using your [mailersend](https://www.mailersend.com) with strapi email plugin.

## ⚙️ Installation

To install the The Strapi Provider MailerSend Plugin, simply run one of the following command:

```
npm install strapi-provider-mailersend
```

```
yarn add strapi-provider-mailersend
```

## ⚡️ Usage

### Configurations

| Variable                | Type                    | Description                                                                               | Required | Default   |
| ----------------------- | ----------------------- | ----------------------------------------------------------------------------------------- | -------- | --------- |
| provider                | string                  | The name of the provider you use                                                          | yes      |           |
| providerOptions         | object                  | Options for mailersend provider                                                           | yes      |           |
| providerOptions.apiKey  | string                  | [API Key](https://www.mailersend.com/help/managing-api-tokens) of your mailersend account | yes      |           |
| settings                | object                  | Settings                                                                                  | no       | {}        |
| settings.defaultFrom    | string                  | Default sender mail address                                                               | no       | undefined |
| settings.defaultReplyTo | string \| array<string> | Default address or addresses the receiver is asked to reply to                            | no       | undefined |

### Example

**Path -** `config/plugins.js` or `config/plugins.ts`

```ts
module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: 'strapi-provider-mailersend',
      providerOptions: {
        apiKey: env('MAILERSEND_API_KEY'), // Required
      },
      settings: {
        defaultFrom: 'from@example.com',
        defaultReplyTo: 'replyto@example.com',
      },
    },
  },
  // ...
});
```

## 👍 Contribute

If you want to say **Thank You** and/or support the active development of `Strapi Provider MailerSend`:

1. Add a [GitHub Star](https://github.com/dynolabs/strapi-provider-mailersend/stargazers) to the project.
2. Support the project by donating a [cup of coffee](https://buymeacoff.ee/dulajdeshan).

## 🧾 License

This plugin is licensed under the MIT License. See the [LICENSE](./LICENSE.md) file for more information.
