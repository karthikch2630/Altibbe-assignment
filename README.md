# Hedamo – Product Disclosure UI (Frontend Assignment)

This project is a frontend implementation of a product disclosure listing and detail experience for **Hedamo**, built as part of a technical assignment. The focus of this work is on **UI craft, interaction design, and clarity of communication**, rather than backend logic or data persistence.

Hedamo is a **structured disclosure platform**, not a verification or certification system. All product information shown in this interface is **producer-declared** and presented without validation or endorsement.

---

## Project Overview

This frontend demonstrates how producer-declared product information can be presented in a calm, professional, and trustworthy interface.

The implementation emphasizes:
- Clear separation between disclosure and verification
- Neutral, institutional visual design
- Thoughtful interaction and loading states
- Precision in language and UI labeling

---

## Key Features

### Product List View
- Displays producer-declared product disclosures
- Shows:
  - Product name
  - Category
  - Producer name
  - Disclosure status (Draft / Submitted / Published)
  - Last updated date
- Supports:
  - Text search
  - Status filtering
  - Sorting by name or last updated
  - Grid and list view modes

### Product Detail View
- Displays a single product disclosure
- Includes:
  - Disclosure summary (producer, declaration date, evidence count)
  - Disclosure description
  - Version history with status changes
  - Prominent disclaimer clarifying disclosure boundaries
- Includes a back navigation control for usability

---

## Disclosure Philosophy

This interface is intentionally designed around **disclosure over verification**.

- Hedamo does **not** verify, certify, approve, or endorse products
- All information is provided by producers
- Workflow states describe **visibility and progress only**
- Language avoids authority-implying terms such as “verified” or “approved”

Clear disclaimers are shown to reinforce these boundaries.

---

## Visual & Interaction Design Principles

- Clear typographic hierarchy for readability and scanability
- Consistent spacing using an 8px-based scale
- Neutral color palette with restrained accent usage
- Subtle hover and focus states on interactive elements
- Transitions kept within 150–300ms for smooth feedback
- No heavy shadows or decorative effects

The goal is a calm, institutional aesthetic that conveys clarity and trust.

---

## Loading & Interaction States

### Skeleton Loading
Skeleton placeholders are shown:
- On initial page load
- When changing:
  - Search terms
  - Filters
  - Sort order
  - Grid ↔ list view

This provides visual continuity and avoids abrupt layout shifts.

### Empty State
When no products match the selected criteria:
- A neutral empty state is displayed
- Clear guidance is provided to adjust search or filters
- Messaging avoids error or failure language

---

## Technical Notes

- Built with **React** and **Vite**
- Styled using **Tailwind CSS**
- Data is mocked locally for demonstration purposes
- Routing handled with `react-router-dom`
- No backend or API integration by design

---

## Project Structure 

    src/
    ├── app/
    │ ├── App.jsx
    │ └── Routes.jsx
    │
    ├── components/
    │ ├── ProductCard.jsx
    │ ├── ProductGridCard.jsx
    │ ├── ProductListCard.jsx
    │ ├── SkeletonCard.jsx
    │ └── StatusBadge.jsx
    │
    ├── data/
    │ └── products.mock.js
    │
    ├── pages/
    │ ├── ProductDetails/
    │ │ ├── Disclaimer.jsx
    │ │ ├── DisclosureSummary.jsx
    │ │ ├── ProductDetailPage.jsx
    │ │ ├── ProductDetailSkeleton.jsx
    │ │ └── VersionHistory.jsx
    │ │
    │ └── ProductList/
    │ ├── ProductFilters.jsx
    │ ├── ProductListPage.jsx
    │ ├── ProductSort.jsx
    │ └── SearchInput.jsx
    │
    ├── utils/
    │ ├── formatDate.js
    │ └── slugify.js
    │
    ├── index.css
    └── main.jsx    

## Running the Project Locally

```
npm install
npm run dev
```

The application will be available at:

http://localhost:5173

---

## Assumptions & Scope

- Product data is static and mocked intentionally
- The focus is frontend craftsmanship, not persistence or APIs
- Accessibility follows standard keyboard and focus patterns
- Layout adapts gracefully across viewport sizes

---

## Summary

This project demonstrates how a disclosure-based system like Hedamo can be represented through a polished, professional frontend experience. The interface prioritizes clarity, restraint, and honest communication, while maintaining a high level of visual and interaction quality.
