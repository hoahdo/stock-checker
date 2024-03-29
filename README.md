<a name="top-of-page"></a>
<!--- Title Section --->

<div align="center">
	<h1>Stock Checker</h1>
	<a href="https://admirable-baklava-19e12f.netlify.app/">Live App Link</a> &#x2022 <a href="https://github.com/hoahdo/stock-checker">GitHub Repo Link</a>
</div>

<br/>
<p align="center">
  <img src="https://user-images.githubusercontent.com/94433620/223315141-63b11380-8ce7-42e9-8df6-340fc2888635.png" width="700"/>
</p>

<!--- About Section --->

## About
This web application was created to allow users to check the highs and lows of a list of stock tickers on a specific day. The user can upload a plain text file of stock tickers then set the day they want to check. The data that is fetched is displayed on the page and allows users the choice to export the data into an excel sheet.

### Features

* Option to drag and drop file or upload file with a button
* User can manually set the date they want to check
* Option to export the data in an excel sheet

### Built With

* Languages and Frameworks

  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/> 
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/> 
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/> 
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
 
* API
  
  [Finnhub API](https://finnhub.io/docs/api)

* Other

  <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E"/>
  <img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white"/>

<!--- Installation & Setup Section --->

## Installation & Setup

You will need `npm` and `vite` installed globally on your machine.
 1. Clone this repo
 2. Install dependencies `npm install` 
 3. Start development server `npx vite`
  

<!--- Usage Section --->

## Usage

### Uploading the file

<img src="https://user-images.githubusercontent.com/94433620/223334763-afa2fbe0-8f10-4278-a858-1927c50d0d4e.png" width="300"/>

<img src="https://user-images.githubusercontent.com/94433620/223316567-e8abb609-dd0e-4cfc-9dad-a53766c8b0de.png" width="300"/>

### Selecting the date

<img src="https://user-images.githubusercontent.com/94433620/223316561-2fac266a-61d5-44bb-bd4f-fad20c8a4636.png" width="300"/>

### Fetching the data

<img src="https://user-images.githubusercontent.com/94433620/223316580-c79090b2-fdcb-44c5-b0b3-04609d9b6737.png" width="300"/>

### Exporting as excel

<img src="https://user-images.githubusercontent.com/94433620/223316585-2340595e-7dd0-42af-b642-11d01562f55f.png" width="300"/>


<!--- Contributing Section--->

## Contributing

1. Fork this repo:  https://github.com/hoahdo/stock-checker/fork 
2. Create your feature branch:  `git checkout -b my-new-feature` 
3. Commit your changes:  `git commit -m 'Add some feature'` 
4. Push to the branch:  `git push origin my-new-feature` 
5. Create a new pull request:  https://github.com/hoahdo/stock-checker/pulls 


<!--- Status Section --->

## Project Status

<a href="https://www.repostatus.org/#active"><img src="https://www.repostatus.org/badges/latest/active.svg" height="30"/></a>


### Roadmap

- [x] Filter and parse uploaded data into proper format
- [x] Add option to download data in an excel sheet
- [x] Add progress bar
- [ ] Add support for other file types


<!--- Reflection Section --->

## Reflection

Things I learned:
* How to create and implement a drag and drop box
* How to parse uploaded file data
* Practicing promises in JavaScript
* Working with rate limited API calls
* Setting environment variables with the build tool vite


<!--- Resources Section --->

## Resources

* https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API
* https://javascript.info/file
* https://design.gs.com/patterns/drag-and-drop
* https://stackoverflow.com/questions/61569652/how-to-make-multiple-api-calls-with-a-delay-between-each-in-node-js
* https://stackoverflow.com/questions/70709987/how-to-load-environment-variables-from-env-file-using-vite


<!--- License Section --->

## License
[MIT](LICENSE) License (2023)

<p align="right">(<a href="#top-of-page">Back to Top</a>)</p>
