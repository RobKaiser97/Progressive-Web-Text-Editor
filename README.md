# Progressive-Web-Text-Editor

<div align="center">
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg" width="100">
</div>

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Deployed-Application](#deployed-application)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description

The JATE Text Editor is a sophisticated web application tailored for coding and script editing. It integrates a dual-layer client-server model with advanced functionalities to elevate your coding journey.

### Key Features:

- **Dual-Layer Model:** The application showcases a client-server structure, offering a cohesive development experience when opened in an editor.

- **Server Activation:** Utilize `npm run start` at the root level to power up the backend, ensuring a fluid client-server interplay.

- **JavaScript Optimization:** Launching the editor triggers JavaScript bundling via Webpack, enhancing overall performance.

- **Dynamic File Generation:** Webpack utilizes plugins to create key files including HTML, a service worker, and a manifest, enriching the web application setting.

- **Modern JavaScript Compatibility:** The editor is fully compatible with advanced JavaScript, guaranteeing error-free operation.

- **IndexedDB Utilization:** Launching the editor prompts IndexedDB to establish a database for effective data management.

- **Auto-Save Feature:** Content entered in the editor is automatically preserved using IndexedDB when you navigate away from the DOM window.

- **Persistent Data Access:** Revisiting the editor after closure allows for immediate data retrieval from IndexedDB.

- **Desktop Application Option:** An Install button lets users download the web app as a desktop icon.

- **Service Worker Implementation:** A Workbox-registered service worker is activated upon app loading for peak performance.

- **Pre-Caching of Assets:** Subsequent visits and static elements are pre-stored for enhanced speed and dependability.

- **Access Point:** The live application is accessible on Heroku at *https://stark-cove-56979-85bf1d6dfc1e.herokuapp.com/*.

## Installation

### Clone the repository to your local machine

```sh
git clone https://github.com/robkaiser97/Progressive-Web-Text-Editor.git
```

### Install dependencies and start the application

```sh
npm install && npm start
```

## Deployed Application

Access the J.A.T.E. text editor by clicking the lightning bolt [⚡](https://stark-cove-56979-85bf1d6dfc1e.herokuapp.com/).

## License

This project adheres to the **[MIT License](https://opensource.org/licenses/MIT)** terms.

## Contributing

Robert Kaiser
Dan Merkin
Jesse LoCascio

## Tests

N/A

## Questions

For inquiries or suggestions regarding this project, feel free to reach out:

- GitHub: [@robkaiser97](https://github.com/robkaiser97)
- Email: paintballmanrob@gmail.com
