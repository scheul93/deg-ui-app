# deg-ui-app
Associate Technical Exercise

## Running the app
Upon first clone/download, run `npm install`

If wanting to use angular-cli, `npm install @angular/cli`

Run the app with:
-  `ng serve -o` (with @angular/cli installed)
- `npm start`

## Running unit tests
Run unit tests with:
- `ng test -sm=false` (with @angular/cli installed)
- `npm test`
There are a few small unit tests for the sharable slider and radio button components.

## Running e2e tests
`ng e2e`
There are a few small e2e tests to test searching by zipcode.

## Implementation notes
- For the range slider, html input[type=range] is supported inconsistenly across browsers. Some allow hashes, some allow labels, some do not allow either. To ensure that labels appeared cross browser, I implemented a regular range input with a separate labels array. If given more time, would either use a third part range slider or format my only labels better. 
- Gender filter works on doctors list, distance filter does not, currently.