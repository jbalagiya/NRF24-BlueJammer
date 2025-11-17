# NRF24L01 with Arduino: Bluetooth Jamming
This repository provides a comprehensive guide and code examples for interfacing the NRF24L01 wireless communication module with Arduino. It includes wiring diagrams, setup instructions, example code, and a detailed implementation of Bluetooth jamming across channels 0 to 79, specifically targeting Bluetooth advertising channels 37, 38, and 39.

GitHub Repository: [NRF24-BlueJammer](https://github.com/jbalagiya/NRF24-BlueJammer)

☕ Support: [Buy Me a Coffee](https://buymeacoffee.com/jbalagiya)

## Overview

The NRF24L01 is a wireless transceiver module that operates in the 2.4GHz band. This project expands upon standard NRF24L01 functionality by utilizing it to disrupt Bluetooth communication channels (0-79), with a focus on advertising channels 37, 38, and 39.

## Wiring Diagram

Below are the wiring details for connecting the NRF24L01 module to an Arduino UNO & nano:

| **NRF24L01 Pin** | **Arduino UNO Pin** |
|------------------|--------------------|
| VCC              | 3.3V              |
| GND              | GND               |
| CE               | Pin 9             |
| CSN (or SCN)     | Pin 10            |
| SCK              | Pin 13            |
| MOSI             | Pin 11            |
| MISO             | Pin 12            |

**Note:** Ensure that the NRF24L01 is powered by the 3.3V pin, as connecting it to 5V may damage the module.

### Wiring Visuals

#### Image 1: Wiring Diagram with Arduino UNO & Nano
![Arduino Wiring](./Connections.png)

![Arduino Wiring](./Connections1.png)

#### Image 2: NRF24L01 Pin Layout
![NRF24L01 Pinout](./NRF24.png)

## Getting Started

### Hardware Requirements

- Arduino UNO (or compatible board)
- NRF24L01 module
- Breadboard and jumper wires
- Capacitor (10 µF) to stabilize power (optional but recommended)

### Software Requirements

- Arduino IDE
- RF24 Library ([Download here](https://github.com/tmrh20/RF24))

### Installation

1. Connect the NRF24L01 module to the Arduino following the wiring diagram.
2. Install the RF24 library in your Arduino IDE:
   -  Go to **Sketch > Include Library > Manage Libraries...**
   -  Search for "RF24" and install the library by TMRh20.

### Example Code

Here is a basic example to initialize communication:

### Troubleshooting
- Issue: NRF24L01 module doesn't respond.
-Solution: Add a capacitor (10 µF) between the VCC and GND pins to stabilize the power supply.

- Issue: Poor communication range.
- Solution: Ensure antennas are aligned and not obstructed.

## Privacy Protector Userscript

This repository also includes a browser userscript for privacy protection.

### Privacy Protector Features

The Privacy Protector userscript (`scripts/privacy-protector.user.js`) provides:

- **Sensitive Data Protection**: Automatically detects and hides sensitive information including:
  - Social Security Numbers (SSN)
  - Credit card numbers
  - Email addresses
  - Dates
  - Specific usernames

- **Registration Form Blocking**: Prevents registration and signup forms from being submitted
- **Autocomplete Prevention**: Disables autocomplete on input fields
- **Dynamic Content Monitoring**: Uses MutationObserver to protect against dynamically loaded content

### Installing the Userscript

1. Install a userscript manager browser extension:
   - [Tampermonkey](https://www.tampermonkey.net/) (Chrome, Firefox, Safari, Edge)
   - [Greasemonkey](https://www.greasespot.net/) (Firefox)
   - [Violentmonkey](https://violentmonkey.github.io/) (Chrome, Firefox, Edge)

2. Open the `scripts/privacy-protector.user.js` file
3. Copy the entire script content
4. Create a new userscript in your userscript manager
5. Paste the content and save

The script will automatically activate on:
- Wikipedia sites
- Pages containing `/signup`, `/register`, or `/join` in the URL

### Contributions
- Feel free to fork this repository and create pull requests for improvements or additional examples.

### ☕ Support

If you found this project helpful or interesting, consider supporting my work:

[![Buy Me a Coffee](https://img.shields.io/badge/-Buy%20Me%20a%20Coffee-orange?style=for-the-badge&logo=buy-me-a-coffee&logoColor=white)](https://buymeacoffee.com/jbalagiya)


### Disclaimer
This project is for educational purposes only. How you use this information is your own responsibility. I will not be held accountable for any illegal activities.
