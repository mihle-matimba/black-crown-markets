# Black Crown Markets Whitelabel Sign-In Customization Guide

## Platform: Skale CRM Client Portal

Your whitelabel platform uses **Skale CRM** which has three script injection slots that match your interface:

### Script Injection Slots

| Slot | Location | Your Interface | Use For |
|------|----------|-----------------|---------|
| First Script | Inside `<head>`, after base CSS | "Script before the closing head tag" | CSS styling, font imports |
| Second Script | Opening `<body>` tag | "Script after the opening body tag" | Tracking pixels, analytics |
| Third Script | End of `</body>`, after portal JS | "Script before the closing body tag" | DOM manipulation, jQuery |

---

## Implementation Steps

### 1. Login Page CSS (First Script Slot)
**Use:** `whitelabel-optimized-head.css`

Paste this into: **"Script before the closing head tag"**

**What it does:**
- Styles login form inputs with light purple background (#F7F4FF)
- Purple buttons (#7B2FBE) with hover effects
- White login box with shadow on light purple background (#F0EEFF)
- Inter font family throughout
- Form labels and text styling

---

### 2. Login Page JavaScript (Second/Third Script Slot)
**Use:** `whitelabel-optimized-body.js`

Paste this into: **"Script after the opening body tag"**

**What it does:**
- Colors form input text to dark (#1A1A2E)
- Handles language dropdown positioning and display
- Watches for dynamically added form inputs
- Fixes placeholder colors across browsers

---

## Key Selectors Used

### Login Page (`body id="Login"`)

```css
/* Target login container */
#Login .login-container
#Login .login-body
#Login .form-control

/* Target buttons */
.btn-login      /* Login button */
.btn-live       /* Open Real Account button */
.btn-demo       /* Open Demo Account button */

/* Target form elements */
#identifier     /* Email input */
#password       /* Password input */
#hideShow       /* Password visibility toggle */

/* Target language selector */
#language-hide
ul.xn-drop-left.xn-drop-white
```

---

## Color Scheme

**Primary Purple:** `#7B2FBE`
**Light Purple Background:** `#F0EEFF`
**Light Purple Input:** `#F7F4FF`
**Dark Text:** `#1A1A2E`
**Border Color:** `#DDD6F3`
**Placeholder Text:** `#9E8EC0`

---

## Testing

According to the Skale CRM guide, you can test changes using:

1. **Chrome DevTools Local Overrides:**
   - Open DevTools → Sources → Overrides tab
   - Select a local folder for overrides
   - Navigate to portal, find CSS file, save for overrides
   - Changes apply immediately

2. **Live Testing:**
   - Paste into the script slots
   - Refresh the page
   - Check browser console for errors

---

## Important Notes

✅ All CSS rules use `!important` flags to override platform defaults
✅ JavaScript uses jQuery (`$`) which is globally available
✅ Bootstrap 3 classes are available
✅ The portal auto-injects your scripts on page load
✅ Mobile responsive styling included

---

## Files Summary

| File | Purpose | Slot |
|------|---------|------|
| whitelabel-optimized-head.css | Login page styling | First Script (Head) |
| whitelabel-optimized-body.js | Form handling & interactivity | Second Script (Body) |

---

## Next Steps

1. Go to your Skale CRM management app
2. Find the customization/script injection settings
3. Paste `whitelabel-optimized-head.css` into "Script before the closing head tag"
4. Paste `whitelabel-optimized-body.js` into "Script after the opening body tag"
5. Save and refresh your portal

Your sign-in page will now match the Black Crown Markets design!