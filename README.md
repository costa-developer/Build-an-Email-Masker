# 📧 Email Masker

A simple JavaScript utility that masks the username portion of an email address with asterisks for privacy, while keeping the domain intact.

---

## ✅ Features

* Masks the middle part of the email username.
* Preserves the first and last characters of the username.
* Keeps the domain (`@domain.com`) unchanged.
* Works with any valid email format.

---

## 📌 Example

```javascript
maskEmail("apple.pie@example.com"); // Output: "a*******e@example.com"
maskEmail("freecodecamp@example.com"); // Output: "f**********p@example.com"
```

---

## 🚀 How It Works

1. Splits the email into username and domain using `@`.
2. Keeps the first and last character of the username.
3. Replaces all characters in between with asterisks.
4. Combines the masked username and domain.

---

## 📄 Usage

```javascript
function maskEmail(email) {
  const atIndex = email.indexOf('@');
  const username = email.slice(0, atIndex);
  const domain = email.slice(atIndex);

  if (username.length <= 2) {
    return username[0] + domain;
  }

  const firstChar = username[0];
  const lastChar = username[username.length - 1];
  const maskedPart = '*'.repeat(username.length - 2);

  return firstChar + maskedPart + lastChar + domain;
}

// Example
const email = "constantinegumunyu25@gmail.com";
console.log(maskEmail(email)); // f**********p@example.com
```

---

## 🧪 Testing

Run the function with different email addresses to test its behavior. You can use browser dev tools or Node.js.

---

## 📁 License

This project is free to use and modify for educational or personal use.

---
