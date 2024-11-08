# Gluten-Free Finds
## Elevator Pitch
Struggling to find tasty gluten-free foods? Gluten-Free Finds is here to help! Our platform brings together the best gluten-free options at local stores and restaurants, all in one convenient place. Our community-driven website allows users to recommend and review stores and restaurants that offer delicious gluten-free items. With community recommendations at your fingertips, you can easily find delicious, safe gluten-free meals without the hassle of endless searching. Whether you’re looking for a new favorite bakery, a restaurant with a dedicated gluten-free menu, or a grocery store with a wide selection of gluten-free products, Gluten-Free Finds is here to help.


## Design
The first page has 2 options: Log In or Sign Up.

<img width="193" alt="GFF_mockup1" src="https://github.com/user-attachments/assets/bceb5d85-d750-49b8-8243-452f07390b12">

The second page has 2 options: Submit a find or browse the finds already on the website.

<img width="209" alt="GFF_mockup2" src="https://github.com/user-attachments/assets/3d1cf88f-9f66-4eef-aa7a-68850cece89a">

After selecting browsing, there are 2 options: restaurants and stores

<img width="208" alt="GFF_mockup3" src="https://github.com/user-attachments/assets/4b303cdb-df1d-4d68-b9f5-dcefea677f99">

Which will each display their gluten-free items and a comment from the person who uploaded it.

After selecting submit:

<img width="214" alt="GFF_mockup4" src="https://github.com/user-attachments/assets/326e248d-788c-49f0-bc64-e3a4b4e7ac9f">

## Key features
* Secure login over HTTPS
* Ability to select options
* Display of submissions by other users
* Results are persistently stored
* Ability for admin to create and delete submissions
## Technologies
**HTML** - Uses correct HTML structure for application. Hyperlinks to visit restaurant or store websites.

**CSS** - Application styling that looks good on different screen sizes, uses good whitespace, color choice and contrast.

**JavaScript** - Provides login, option displays, submission forms, display other users submissions, backend endpoint calls.

**React** - Single page application with views componentized and reactive to user's actions.

**Service** - Backend service with endpoints for:
* retrieving submissions
* viewing submissions
* Create/customize digital maps based on Google Maps data

**DB/Login** - Store users and submissions in database. Register and login users. Credentials securely stored in database. Can't submit or browse unless authenticated.

**WebSocket** - As users make submissions, their submissions are broadcast to all other users.

## HTML Deliverable
The prerequisites are complete.
* I used the proper tags BODY, NAV, MAIN, HEADER, FOOTER
* I included links between pages like Simon
* There is textual content
* The "Browse" page is the place holder for most of the 3rd party calls I will need.
* Images will also be in the browse page under "coming soon"
* Login placeholder is on the main page, like Simon
* Database and WebSocket placeholders are also on the browse page.

## CSS Deliverable
The prerequisites are complete.
For this deliverable I styled my website to how I want it to look.
* Header/Footer/Body
* Navigation - I made the buttons look nicer and have the directory in the top right of every page.
* Responsive to window sizing - Made it flexible to different window sizes.
* Application elements - Made the colors and spacing comfortable, different shades of brown because it's about gluten. Added functionality for the user to submit an image.
* Application text content - Arial and sans-serif fonts
* Application images - The top left of every webpage has a logo I made. The browse page has place holders for the images the user will be submitting.
