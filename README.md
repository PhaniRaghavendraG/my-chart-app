# My Chart App

This project is a React application that displays a bar chart using Recharts library, allowing users to visualize aggregated data based on daily, weekly, or monthly timeframes.

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
- Navigate to `http://localhost:3000` to view the app.
</details>

### Features

<details>
<summary>Click to view</summary>

- **Bar Chart:** Displays data using Recharts library.
- **TimeFrame Selector:** Allows switching between daily, weekly, and monthly data views.
- **Tooltip:** Shows detailed information on data points when clicked.

</details>

### Dependenices

<details>
<summary>Click to view</summary>

- **React:** JavaScript library for building user interfaces.
- **Recharts:** Charting library for React.
- Other dependencies specified in `package.json`.

</details>

### Folder Structure

<details>
<summary>Click to view</summary>

- **public/** - Contains the index.html file for demonstration.
- **src/** - Contains the application source code.
  - **components/** - React components used in the application.
  - **data/** - Sample data files used for demonstration.
  - **App.js** - Main component rendering the Bar Chart and TimeFrame Selector.
  - **index.js** - Entry point for rendering the React application.

</details>

### Usage

<details>
<summary>Click to view</summary>

- Select a timeframe (Daily, Weekly, Monthly) using the buttons at the top.
- The bar chart will update to display updated data based on the selected timeframe.
- Click on a bar to view detailed information in the tooltip.

</details>
