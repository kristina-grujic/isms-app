const nodemailer = require('nodemailer');
const User = require('../models/User');

const transporter = nodemailer.createTransport({
  host: 'saiph.orion.rs',
  port: 465,
  secure: true,
  auth: {
    user: 'noreply@polovnamehanizacija.rs',
    pass: 'technocontrol2017',
  }
});

function sendOrder(request, callback) {
  const {
    order,
  } = request;
  let text = `
    Your order:\n
  `;
  let html = `
    <h3>Your order:</h3>
  `;
  order.map((item) => {
    html += `
      <div>
        <div style="display:inline-block;vertical-align:top">
          <p>Product name: <strong>${item.product.name}</strong></p>
          <p>Quantity: <strong>${item.quantity}</strong></p>
        </div>
      </div>
    `;
    text += `
      Product name: ${item.product.name}\n
      Quantity: ${item.quantity}\n\n
    `;
    return item;
  });

  const mailOptions = {
    from: 'noreply@webshop.rs',
    to: request.email,
    subject: `Order no. #${order.orderCount}`,
    text,
    html,
  };

  return transporter.sendMail(mailOptions, callback);
}
