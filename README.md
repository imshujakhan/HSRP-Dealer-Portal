# HSRP Dealer Dashboard

A full-stack web application for managing High Security Registration Plate (HSRP) orders with separate interfaces for customers and dealers.

## Features

- **Customer Portal**: Vehicle verification, appointment booking, and order tracking
- **Dealer Dashboard**: Order management, status updates, and analytics
- **Order Workflow**: Receiving → Pending → Completed status flow
- **Bulk Operations**: Mark multiple orders as received
- **Print Receipts**: Generate printable order confirmations

## Tech Stack

- React 18 + Vite
- Redux Toolkit (state management)
- React Router v6 (navigation)
- MockAPI (REST API backend)
- CSS Modules (styling)

## Quick Start

```bash
npm install
npm run dev
```

Visit `http://localhost:5173`

## Project Structure

```
src/
├── pages/          # Route components (Login, Dashboard, Orders)
├── components/     # Reusable UI components
├── features/       # Redux slices (orders, dealer, dashboard)
├── services/       # API integration layer
├── utils/          # Helper functions
└── config/         # Constants and vehicle data
```

## Key Workflows

**Customer Booking**: Landing → 4-Step Form → Confirmation  
**Order Tracking**: Enter Order ID → View Status Timeline  
**Dealer Login**: Credentials → Dashboard → Manage Orders

## API Endpoints

Base URL: `https://69a22f42be843d692bd0f181.mockapi.io/api/v1`

- `/dealers` - Dealer authentication and info
- `/orders` - CRUD operations for orders

## Environment

No environment variables required. MockAPI is pre-configured.
