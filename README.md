# SecureWatch

**The All-Seeing Shield.**
A next-generation, privacy-first Network Detection and Response (NDR) platform.

## Overview

SecureWatch is a Cyber-security SaaS landing page built to demonstrate a premium, high-tech aesthetic. It features a modern tech stack and responsive design.

## Getting Started

### Prerequisites

-   Node.js (v18+)
-   npm

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/securewatch.git
    cd securewatch
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Set up environment variables:
    ```bash
    cp .env.example .env
    ```
    Open `.env` and set your `PUBLIC_CAL_USERNAME`.

4.  Start the development server:
    ```bash
    npm run dev
    ```

5.  Open [http://localhost:4321](http://localhost:4321) in your browser.

## Configuration

This project uses environment variables for configuration. See `.env.example` for reference.

-   `PUBLIC_CAL_USERNAME`: Your Cal.com username (e.g., `drlachdev-acrqep`).

## Docker Support

You can also run the application using Docker.

### Build and Run

```bash
# Build the image
docker build -t securewatch-landing .

# Run container (Access at http://localhost:8080)
docker run -p 8080:80 securewatch-landing
```

## Building for Production

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```
