/*
 * ---
 * title: JavaScript module template
 * author: Brendan Casey
 * created: 2024-12-13
 * notes: 
 *  Template for creating properly formatted and  
 *  documented JavaScript modules.
 * ---
 */


/*
 * ---
 * title: [Title]
 * author: [Your Name]
 * created: [YYYY-MM-DD]
 * inputs: [List the required inputs]
 * outputs: [List the outputs produced by the script]
 * notes: 
 *  [A concise explanation of what the code does, its purpose, 
 *  and any important details about its function. You can also use 
 *  this section to list proposed improvements for the code for 
 *  future iterations.]
 * ---
 */

/* 1. Setup
 * This section includes imports, user defined parameters, and
 * any setup required to prepare the environment.
 */

/* 1.1 Import Required Modules */
// Example: Load helper libraries or functions
var utils = require("users/username/functions:utils");
var exampleModule = require("users/username/functions:example_module");

/* 1.2 Define Constants and Area of Interest (AOI) */
// Example: Specify your AOI geometry
var aoi = ee.Geometry.Polygon([
  [-113.5, 55.5],
  [-113.5, 55.0],
  [-112.8, 55.0],
  [-112.8, 55.5]
]);

/* 1.3 Configure Additional Settings */
// Example: Set reducers or other analysis parameters
var statistic = 'mean'; // Options: 'mean', 'median', etc.

/* 2. [Heading]
 * This section [describe the purpose of this section]. The section
 * uses [briefly describe data or object inputs]. It includes steps
 * to [briefly describe the main steps or processes]. The section 
 * produces [describe the section's output].
 */

/* 2.1 [Subheading] */
// Example: Process imagery or other datasets
var processedData = utils.processData(aoi, statistic);

/* 2.2 [Subheading] */
// Example: Apply indices, filters, or transformations
var results = processedData.map(function(image) {
  return utils.calculateIndex(image, 'NDVI');
});

/* 3. Validation
 * This section validates the outputs of Step [#].
 * It includes steps like inspecting summary statistics,
 * checking metadata, or visualizing data.
 */

/* 3.1 Inspect Results */
// Example: Print summary statistics
print("Summary Statistics:", utils.getStatistics(results));

/* 3.2 Visualize Results */
// Example: Add a layer to the map
Map.centerObject(aoi, 10);
Map.addLayer(results, {
  min: 0,
  max: 1,
  palette: ['blue', 'white', 'green']
}, 'Results');

/* 4. Export Outputs */
 * This section exports the processed data or other results.
 * Specify the export format, destination, and additional
 * parameters.
 */

/* 4.1 Export to Google Drive */
// Example: Export processed results as GeoTIFFs
utils.exportToDrive(results, {
  folder: "exports_folder",
  scale: 30,
  crs: "EPSG:4326"
});

/* End of script */

