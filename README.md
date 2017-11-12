# deg-ui-app
Associate Technical Exercise

##Running the app
Upon first clone/download, run `npm install`

Run the app with `ng serve -o`

##Running unit tests
`ng test -sm=false`

##Implementation notes
- For the range slider, html input[type=range] is supported inconsistenly across browsers. Some allow hashes, some allow labels, some do not allow either. To ensure that labels appeared cross browser, I implemented a regular range input with a separate labels array. If given more time, would either use a third part range slider or format my only labels better. 