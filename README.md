📍 HubSpot Contact Role Mapper

A full-stack project that integrates with HubSpot CRM to display and filter contacts based on their roles and location, using an interactive map and a custom property field.

🛠️ Project Setup & Features Overview </br>

✅ Step 1: Set Up HubSpot Developer Environment
Create a HubSpot Developer Account
Set up a test app with CRM access
Connect using:
Sandbox/Test Account
OAuth or Private App API Keys

✅ Step 2: Populate HubSpot Contacts
Create 10 contacts with:
Name
Email
Phone Number
Address (HubSpot default property)

✅ Step 3: Add Custom Property – project_role
If not already available:
Create a multi-select property named project_role
Options:
Contractor
Home Owner
Affiliate
Referral Partner
Community Partner
Geo Tech

✅ Step 4: Assign Roles to Contacts
Assign 1–2 roles per contact
Ensure all roles are used and some contacts have multiple roles

✅ Step 5: Backend API Integration
Create an API to:
Fetch contacts where project_role is not null
Return:
Name
Email
Phone
Address
Project Role(s)

✅ Step 6: Build Interactive Map UI (Frontend)
Use mapping library (Google Maps, Leaflet, or Mapbox)
Display each contact with:
Role-specific icons
Multiple icons if contact has multiple roles
Include a legend explaining icon meanings

✅ Step 7: Implement Role-Based Filtering
Filter contacts by:
Project role
City/State/Region
Show intelligent suggestions:
“You can contact Jane Doe in San Diego as a Geo Tech.”


