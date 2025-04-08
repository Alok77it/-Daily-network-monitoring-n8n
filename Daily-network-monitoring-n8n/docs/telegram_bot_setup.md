# 🤖 Telegram Bot Setup Guide for n8n Notifications

This guide walks you through setting up a **Telegram Bot** and integrating it with **n8n** to send alerts — such as error messages, fallback notifications, or status updates for your workflows.

---

## 🚀 Step 1: Create Your Telegram Bot

1. Open **Telegram** and search for `@BotFather`
2. Type `/start` to begin
3. Send `/newbot` to create a new bot
4. Follow the prompts:
   - Enter your bot's name (e.g., `My n8n Bot`)
   - Enter a unique username ending in `bot` (e.g., `n8n_notify_bot`)
5. You’ll receive a **Bot Token** like:



⚠️ **Save this token securely and do not expose it publicly.**

---

## 🧑‍💻 Step 2: Get Your Telegram Chat ID

You need a **Chat ID** to send messages to your Telegram account or group.

### For Personal Chat:

1. Start a conversation with your new bot in Telegram (send any message)
2. In your browser, open this URL (replace `<TOKEN>` with your actual token):


# ⚙️ Step 3: Configure Telegram Node in n8n

This step shows you how to **configure the Telegram node in n8n** to send messages, alerts, or workflow updates.

---

## 🧩 Add Telegram Node

1. Open your workflow in **n8n**
2. Drag a **Telegram** node into your canvas

---

## 🔐 Set Up Credentials

1. Under the **Telegram node → Credentials** section:
   - Click **“Create New”**
   - Enter your **Telegram Bot Access Token**
   - Save the credential

---

## 📥 Configure Node Parameters

- **Chat ID**:  
  Paste your **Chat ID** (retrieved using the `/getUpdates` method from BotFather)

- **Text**:  
  Type the message you want to send — this can be **static text** or a **dynamic expression**

---

## 🧠 Use Expressions (Dynamic Content)

To send dynamic messages using workflow data, you can use expressions:

```bash
Error occurred in API request: {{$json["error_message"]}}
