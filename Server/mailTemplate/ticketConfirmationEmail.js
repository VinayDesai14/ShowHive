
const {QRCode}=require('qrcode.react')
const ticketConfirmationTemplate = ({ eventName,eventDate,venue,QRCodeURL }) => {
  return 
   ` <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                color: #333;
                margin: 0;
                padding: 0;
            }
            .container {
                width: 100%;
                max-width: 600px;
                margin: 0 auto;
                background-color: #fff;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }
            .header {
                text-align: center;
                background-color: #4CAF50;
                padding: 20px;
                color: #fff;
                border-radius: 8px 8px 0 0;
            }
            .header h1 {
                margin: 0;
                font-size: 24px;
            }
            .content {
                padding: 20px;
            }
            .content h2 {
                color: #4CAF50;
            }
            .ticket-info {
                margin: 20px 0;
                padding: 15px;
                background-color: #f9f9f9;
                border-left: 5px solid #4CAF50;
            }
            .qr-code {
                text-align: center;
                margin-top: 20px;
            }
            .qr-code img {
                width: 150px;
                height: 150px;
            }
            .footer {
                text-align: center;
                margin-top: 30px;
                font-size: 12px;
                color: #777;
            }
            .button {
                display: inline-block;
                padding: 12px 24px;
                background-color: #4CAF50;
                color: #fff;
                border-radius: 5px;
                text-decoration: none;
                margin-top: 20px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <!-- Header -->
            <div class="header">
                <h1>ShowHive</h1>
            </div>
    
            <!-- Main Content -->
            <div class="content">
                <h2>Thank you for your purchase !</h2>
                <p>Your ticket for <strong>${eventName}</strong> has been successfully purchased. We're excited to have you at the event!</p>
    
                <div class="ticket-info">
                    <h3>Your Ticket Details:</h3>
                    <p><strong>Event:</strong> ${eventName}</p>
                    <p><strong>Date:</strong> ${eventDate}</p>
                    <p><strong>Venue:</strong> ${venue}</p>
                </div>
    
                <p>Please present the QR code below at the event for a seamless check-in:</p>
    
                <!-- QR Code Section -->
                <div class="qr-code">
                    <img src=${QRCodeURL} alt="QR Code">
                </div>
    
                <!-- Button to View Ticket -->
                <div style="text-align: center;">
                    <a href="[Ticket_URL]" class="button">View Ticket Online</a>
                </div>
            </div>
    
            <!-- Footer -->
            <div class="footer">
                <p>If you have any questions, feel free to contact us at <a href="mailto:support@showhive.com">support@showhive.com</a>.</p>
                <p>© 2024 ShowHive. All rights reserved.</p>
            </div>
        </div>
    </body>
    </html>`
};

module.exports = ticketConfirmationTemplate;