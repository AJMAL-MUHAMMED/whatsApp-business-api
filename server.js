const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
  return res.status(200).json(url);
});

app.get("/text-message", async (req, res) => {
  let resData = {
    status: false,
    answer: "",
  };
  try {
    const url = `https://graph.facebook.com/v21.0/${process.env.PHONE_NUMBER_ID}/messages`;
    const headers = {
      Authorization: `Bearer ${process.env.SECRET_KEY}`,
      "Content-Type": "application/json",
    };
    const data = {
      messaging_product: "whatsapp",
      recipient_type: "individual",
      to: "918113928182",
      type: "text",
      text: {
        preview_url: false,
        body: "Hi How are you",
      },
    };

    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    });

    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.error.message);
    }

    resData.status = true;
    resData.responseData = responseData;
    return res.status(200).json(resData);
  } catch (error) {
    resData.status = false;
    resData.answer = error.message;
    return res.status(500).json(resData);
  }
});

app.get("/text-message-with-image", async (req, res) => {
  let resData = {
    status: false,
    answer: "",
  };
  try {
    const url = `https://graph.facebook.com/v21.0/${process.env.PHONE_NUMBER_ID}/messages`;
    const headers = {
      Authorization: `Bearer ${process.env.SECRET_KEY}`,
      "Content-Type": "application/json",
    };
    const mediaCaption = "Let us know how we can help! 😊";
    const data = {
      messaging_product: "whatsapp",
      recipient_type: "individual",
      to: "918113928182",
      type: "image",
      image: {
        link: "https://fixing-desk.s3.amazonaws.com/AdminProfile/fixingdesk+bot+image.png",
        caption: mediaCaption,
      },
    };

    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    });

    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.error.message);
    }

    resData.status = true;
    resData.responseData = responseData;
    return res.status(200).json(resData);
  } catch (error) {
    resData.status = false;
    resData.answer = error.message;
    return res.status(500).json(resData);
  }
});

app.get("/reaction", async (req, res) => {
  let resData = {
    status: false,
    answer: "",
  };
  try {
    const url = `https://graph.facebook.com/v21.0/${process.env.PHONE_NUMBER_ID}/messages`;
    const headers = {
      Authorization: `Bearer ${process.env.SECRET_KEY}`,
      "Content-Type": "application/json",
    };
    const data = {
      messaging_product: "whatsapp",
      recipient_type: "individual",
      to: process.env.TO,
      type: "reaction",
      reaction: {
        message_id:
          "wamid.HBgMOTE4MTEzOTI4MTgyFQIAERgSM0M1Mzg5QUUyRkE1OTUwMzczAA==",
        emoji: " \uD83D\uDE00",
      },
    };

    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    });

    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.error.message);
    }

    resData.status = true;
    resData.responseData = responseData;
    return res.status(200).json(resData);
  } catch (error) {
    resData.status = false;
    resData.answer = error.message;
    return res.status(500).json(resData);
  }
});

app.get("/media", async (req, res) => {
  let resData = {
    status: false,
    answer: "",
  };
  try {
    const url = `https://graph.facebook.com/v21.0/${process.env.PHONE_NUMBER_ID}/messages`;
    const headers = {
      Authorization: `Bearer ${process.env.SECRET_KEY}`,
      "Content-Type": "application/json",
    };
    const data = {
      messaging_product: "whatsapp",
      recipient_type: "individual",
      to: process.env.TO,
      type: "image",
      image: {
        link: "https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg",
        // caption: "<IMAGE_CAPTION_TEXT>"
      },
    };

    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    });

    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.error.message);
    }

    resData.status = true;
    resData.responseData = responseData;
    return res.status(200).json(resData);
  } catch (error) {
    resData.status = false;
    resData.answer = error.message;
    return res.status(500).json(resData);
  }
});

app.get("/intract", async (req, res) => {
  let resData = {
    status: false,
    answer: "",
  };
  try {
    const url = `https://graph.facebook.com/v21.0/${process.env.PHONE_NUMBER_ID}/messages`;
    const headers = {
      Authorization: `Bearer ${process.env.SECRET_KEY}`,
      "Content-Type": "application/json",
    };
    const data = {
      messaging_product: "whatsapp",
      recipient_type: "individual",
      to: "918113928182",
      type: "interactive",
      interactive: {
        type: "button",
        header: {
          type: "image",
          image: {
            link: "https://evincedev.com/blog/wp-content/uploads/2024/01/WhatsApp-Business-API-Integration.jpg",
          },
        },
        body: {
          text: "Hello! Please select an option below:",
        },
        footer: {
          text: "XYZ Solutions",
        },
        action: {
          buttons: [
            {
              type: "reply",
              reply: {
                id: "option1",
                title: "Option 1",
              },
            },
            {
              type: "reply",
              reply: {
                id: "option2",
                title: "Option 2",
              },
            },
            {
              type: "reply",
              reply: {
                id: "option3",
                title: "Option 3",
              },
            },
          ],
        },
      },
    };

    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    });

    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.error.message);
    }

    resData.status = true;
    resData.responseData = responseData;
    return res.status(200).json(resData);
  } catch (error) {
    resData.status = false;
    resData.answer = error.message;
    return res.status(500).json(resData);
  }
});

app.get("/intract-with-button", async (req, res) => {
  let resData = {
    status: false,
    answer: "",
  };
  try {
    const url = `https://graph.facebook.com/v21.0/${process.env.PHONE_NUMBER_ID}/messages`;
    const headers = {
      Authorization: `Bearer ${process.env.SECRET_KEY}`,
      "Content-Type": "application/json",
    };
    const data = {
      messaging_product: "whatsapp",
      recipient_type: "individual",
      to: "918113928182",
      type: "interactive",
      interactive: {
        type: "cta_url",
        body: {
          text: "Tap the button below to explore our offerings.",
        },
        footer: {
          text: "Details subject to change.",
        },
        action: {
          name: "cta_url",
          parameters: {
            display_text: "Explore Now",
            url: "https://www.example.com",
          },
        },
      },
    };

    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    });

    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.error.message);
    }

    resData.status = true;
    resData.responseData = responseData;
    return res.status(200).json(resData);
  } catch (error) {
    resData.status = false;
    resData.answer = error.message;
    return res.status(500).json(resData);
  }
});

app.get("/intract-with-list", async (req, res) => {
  let resData = { status: false, answer: "" };
  try {
    const url = `https://graph.facebook.com/v21.0/${process.env.PHONE_NUMBER_ID}/messages`;
    const headers = {
      Authorization: `Bearer ${process.env.SECRET_KEY}`,
      "Content-Type": "application/json",
    };

    const data = {
      messaging_product: "whatsapp",
      recipient_type: "individual",
      to: "918113928182",
      type: "interactive",
      interactive: {
        type: "list",
        body: {
          text: `Hello! Greetings from XYZ Solutions. Please select an option below:`,
        },
        footer: {
          text: "Powered by Example Solutions Inc.",
        },
        action: {
          button: "Choose Option",
          sections: [
            {
              title: "Main Options",
              rows: [
                {
                  id: "option1",
                  title: "Option 1",
                  description: "Description for option 1.",
                },
                {
                  id: "option2",
                  title: "Option 2",
                  description: "Description for option 2.",
                },
                {
                  id: "option3",
                  title: "Option 3",
                  description: "Description for option 3.",
                },
                {
                  id: "main_menu",
                  title: "Main Menu",
                  description: "Return to the main menu.",
                },
              ],
            },
          ],
        },
      },
    };

    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    });

    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.error.message);
    }

    resData.status = true;
    resData.responseData = responseData;
    return res.status(200).json(resData);
  } catch (error) {
    resData.status = false;
    resData.answer = error.message;
    return res.status(500).json(resData);
  }
});

app.get("/pdf-send", async (req, res) => {
  let resData = { status: false, answer: "" };
  try {
    const url = `https://graph.facebook.com/v21.0/${process.env.PHONE_NUMBER_ID}/messages`;
    const headers = {
      Authorization:
        "Bearer EAAWv6fxs7ysBO0wHFC5yjZAMP7eL1bCd6RxRioXXwBVXZB8iSkHkQeD5wKfom5BIEtaruD9jWQ8bO4GITy6C4rjNZBYVTocNZBidSNb6SdsvBgD40jZBK5vYMApzZAe3fEdcEoSofpBUvEZAZA1AGvs7U3ZBFCmXDLrMQHZBpWg4rOdrKM85hFxAGum2g6PmUaJ1ZAho2o16qmfdDQFHe0TNCBqJi1hmZCcMkoZAYxn8ZD",
      "Content-Type": "application/json",
    };

    const data = {
      messaging_product: "whatsapp",
      recipient_type: "individual",
      to: "918113928182",
      type: "document",
      document: {
        link: "https://www.thoughtco.com/thmb/QjFYmqeC_tsWT2bsXHP0WC8gwrA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/closeup-of-big-gold-nugget-511603038-5ad92a97fa6bcc00362b919b.jpg",
        caption: "Please review the attached document.",
        filename: "statement.pdf",
      },
    };

    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    });

    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.error.message);
    }

    resData.status = true;
    resData.responseData = responseData;
    return res.status(200).json(resData);
  } catch (error) {
    resData.status = false;
    resData.answer = error.message;
    return res.status(500).json(resData);
  }
});

app.listen(8000, () => console.log("Server is listening on port: 8000"));
