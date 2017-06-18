export default ({ body, title }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        <link rel="stylesheet" href="/assets/bootstrap.css" />
        <link rel="stylesheet" href="/assets/cards.css" />
        <link rel="stylesheet" href="/assets/header.css" />
        <link rel="stylesheet" href="/assets/modal.css" />
        <link rel="stylesheet" href="/assets/sidebar.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
      </head>

      <body>
        <div id="root">${body}</div>
      </body>

      <script src="/assets/bundle.js"></script>
    </html>
  `;
};
