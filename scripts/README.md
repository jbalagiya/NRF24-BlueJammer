# Userscripts

This directory contains browser userscripts for privacy and security.

## Privacy Protector (`privacy-protector.user.js`)

A browser userscript that protects personal privacy by:

### Features

1. **Sensitive Data Masking**
   - Automatically detects and replaces sensitive patterns with `[PROTEGIDO]`
   - Patterns detected:
     - Social Security Numbers (format: XXX-XX-XXXX)
     - Credit card numbers (16 digits)
     - Email addresses
     - Dates (formats: YYYY-MM-DD, YYYY/MM/DD)
     - Specific usernames

2. **Registration Form Blocking**
   - Hides registration forms
   - Disables signup/register buttons
   - Prevents form submission on registration pages

3. **Autocomplete Prevention**
   - Disables autocomplete on all input fields
   - Helps prevent sensitive data from being saved in browser

4. **Dynamic Content Protection**
   - Uses MutationObserver to monitor DOM changes
   - Protects against dynamically loaded content

### Installation

1. Install a userscript manager:
   - **Tampermonkey** (Recommended): [Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) | [Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/) | [Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)
   - **Greasemonkey** (Firefox only): [Firefox](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/)
   - **Violentmonkey**: [Chrome](https://chrome.google.com/webstore/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag) | [Firefox](https://addons.mozilla.org/en-US/firefox/addon/violentmonkey/)

2. Open `privacy-protector.user.js` in your browser
3. Your userscript manager should automatically detect it and prompt for installation
4. Click "Install" to activate the script

### Activation Sites

The script automatically runs on:
- All Wikipedia domains (`https://*.wikipedia.org/*`)
- Any page with `/signup` in the URL
- Any page with `/register` in the URL
- Any page with `/join` in the URL

### Customization

You can modify the script to:
- Add more sensitive patterns to detect
- Customize blocked selectors for registration forms
- Change the replacement text from `[PROTEGIDO]` to something else
- Add or remove activation URLs in the `@match` directives

### Privacy Notice

This script runs entirely in your browser and does not send any data to external servers. All processing is done locally.

### License

For educational purposes only. Use responsibly and in accordance with local laws and website terms of service.
