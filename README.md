# Salesforce Opportunity Search - LWC & Angular

## Overview

This project demonstrates two approaches to searching for Salesforce Opportunities:

1. **LWC-based component** embedded in a Salesforce Lightning page.
2. **Angular-based component** hosted externally and integrated into Salesforce via a **Connected Canvas App**.

The Angular app retrieves Opportunities using an **Apex REST service** and is routed through a **Node.js server**. The **Connected App** sends a **POST request** to the Node.js server, which then redirects the request to the Angular app. For this pet project, **ngrok** is used to expose the Node.js server.

## Features

- Search Opportunities by name (both LWC and Angular components).
- Display search results in a table.
- Secure integration between Angular and Salesforce via **Connected Canvas App**.
- Uses **Apex REST API** to retrieve Opportunities.
- Routes authentication through a **Node.js server**.
- Exposes the Node.js server via **ngrok**.
- **Angular app imports Salesforce Lightning Design System (SLDS) to match LWC styling.**

## Project Structure

```
/salesforce
  ├── lwc-opportunity-search/              # LWC component (OpportunitySearch)
  ├── apex-rest-service/                   # Apex REST service class (OpportunitySearchRestService)
  ├── apex-controller/                     # Apex class with AuraEnabled methods (OpportunitySearchController)
  ├── apex-selector/                       # Apex SObject selector class (OpportunitySelector)
  ├── connected-app/                       # Connected App (AngularCanvasIntegration)
  ├── visualforce-page/                    # Visualforce page with connected app (AngularCanvasApp)
  ├── flexipage/                           # Flexipage containing LWC and Visualforce page (Custom_Opportunity_Search)

/angular-app
  ├── src/
  │   ├── app/
  │   │   ├── components/
  │   │   │   ├── lightning-card/          # Angular version of SLDS Lightning Card
  │   │   │   ├── lightning-datatable/     # Angular version of SLDS Lightning Datatable
  │   │   │   ├── opportunity-search/      # Angular Opportunity Search Component
  │   │   ├── models/
  │   │   │   ├── jwt.model.ts             # JWT authentication model
  │   │   │   ├── opportunity.model.ts     # Opportunity data model
  │   │   ├── services/
  │   │   │   ├── canvas-integration.service.ts
  │   │   │   ├── local-storage.service.ts
  │   │   │   ├── opportunty-search.service.ts
  │   │   │   ├── rest-api.service.ts 
  │   │   ├── app.component.ts              # Main Angular App Component
  ├── server.js                             # Node.js server handling authentication, placed inside Angular folder
  ├── main.ts
  ├── angular.json
  ├── package.json
  ├── README.md
```

## Setup & Installation

### Salesforce Setup

#### Preconditions
1. Prepare sandbox and your development environment for salesforce.
The easiest way to do is to complete salesforce trailheads. (**Set Up Visual Studio Code** trailhead)

#### 1. Deploy the LWC Component

1. Open **Developer Console** or use **VS Code with SFDX**.
2. Deploy the `OpportunitySearch` LWC component to your org.
3. Add the component to the **Custom_Opportunity_Search** Flexipage.

#### 2. Deploy the Apex Classes

1. **OpportunitySearchController** (AuraEnabled methods for LWC and dependent classes).
2. **OpportunitySearchRestService** (Apex REST API for Angular integration and dependent classes).
3. **OpportunitySelector** (Selector class for querying Opportunities and dependent classes).

#### 3. Deploy the Connected App for Angular

1. Deploy the **AngularCanvasIntegration** Connected app.

#### 4. Deploy the Visualforce Page

1. Deploy the **AngularCanvasApp** Visualforce page.

#### 5. Deploy the Flexipage

1. Deploy the **Custom_Opportunity_Search** Flexipage.

### Angular Setup

#### 1. Install Dependencies

1. Run following comands in terminal
```bash
cd angular-app
npm install
```
2. Set up ngrok. **VISIT NGROK WEB SITE.**

#### 2. Run the App
```bash
npm start
```
you should see ngrok temp endpoint in logs.

#### 3. Set up endpoints in your sandbox

- Login your Salesforce environment. (Manually. Not via CLI commands)
- Go to Setup -> CORS -> set ngrok endpoint.
- Go to App Manager -> AngularCanvasIntegration -> Edit -> set new ngrok url in **canvasUrl** field. (**Or change its metadata and re-deploy**)

## Usage

1. Open the **Custom Opportunity Search** Page → Test the LWC search.
2. Open the **Angular App** → Log in with Salesforce via the Node.js server.
3. Search for opportunities in both interfaces.
4. Compare results between LWC and Angular.

## Future Enhancements

- Implement caching for search results.
- Add pagination and sorting.
- Improve error handling.
- Secure the Node.js server authentication process.
- Enhance SLDS integration for a seamless experience between LWC and Angular.
- Add unit tests.

## Conclusion

This project serves as a proof of concept for integrating **external Angular applications** with Salesforce via **Connected Apps** while comparing the performance of **LWC vs. Angular** for a simple search component. It also demonstrates **Node.js routing for authentication** and **ngrok for public exposure** of the server. The **Angular app leverages the Salesforce Lightning Design System (SLDS)** to closely match the styling of the LWC component.