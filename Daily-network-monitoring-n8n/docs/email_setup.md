# 📧 Email Setup Guide (Gmail/SMTP) for n8n

This guide helps you set up email sending in your n8n workflow, using **Gmail** or any **SMTP provider**.

---

## ✉️ 1. Gmail SMTP Setup (Recommended for Simplicity)

### ✅ Step-by-Step

1. **Enable 2-Step Verification** on your Gmail account  
   [https://myaccount.google.com/security](https://myaccount.google.com/security)

2. **Create App Password**
   - Go to: [https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
   - Select **"Mail"** as the app, and **"Other"** for the device name (e.g., "n8n").
   - Copy the generated 16-character password.

3. **In n8n**:
   - Add new credentials:
     - **Type**: SMTP
     - **User**: `your-email@gmail.com`
     - **Password**: *App password generated in step 2*
     - **Host**: `smtp.gmail.com`
     - **Port**: `587`
     - **Secure**: `false`
   - Name it something like `Gmail SMTP`

---

## 🛠️ 2. Email Node Configuration in Workflow

| Field           | Value                            |
|----------------|----------------------------------|
| From Email     | `your-email@gmail.com`           |
| To Email       | `receiver@example.com`           |
| Subject        | `Daily Network Report`           |
| Format         | `HTML`                           |
| Body (HTML)    | Use code or expressions           |
| Attachments    | Use screenshot and command result files |

---

## 📦 Notes

- If using multiple attachments, pass them as an array (via Code node or Set node).
- Use `Continue on Fail: true` in other nodes to prevent workflow stops.
- For non-Gmail SMTP providers, update `host`, `port`, and credentials accordingly.

---

## ✅ Example Use Case in n8n

- After executing commands and fetching screenshots, use an **Email node**:
  - Body contains result summary
  - Screenshots attached
  - Email sent to one or multiple recipients

---

## 💬 Common Issues

| Problem                          | Solution                                                                 |
|----------------------------------|--------------------------------------------------------------------------|
| Gmail says "Sign-in attempt blocked" | Use App Passwords and enable 2FA                                        |
| Attachments not sent             | Make sure file path/stream is passed correctly in the Email node        |
| Workflow fails at email step     | Use **error handling** and a **fallback Telegram alert** for reliability |

---

Made with 💻 + ☁️ + 📬 using **n8n**

