////JSON/dev/Bridge/Version_devkit.json
const fs = require('fs');
const path = require('path');

// Path to the JSON file
const filePath = path.join(__dirname, 'JSON/dev/Bridge/Version_devkit.json');

// Read the JSON file
const data = fs.readFileSync(filePath, 'utf8');
const json = JSON.parse(data);

// Extract the version string
const versionString = json.Configurations[0].Version;

// Split the version string into parts
const versionParts = versionString.split('.');

// Convert the second part to an integer and increment it
const secondNumber = parseInt(versionParts[2], 10) + 1;

// Update the second part of the version string
versionParts[2] = secondNumber.toString();

// Join the parts back into a version string
const newVersionString = versionParts.join('.');

// Update the JSON object
json.Configurations[0].Version = newVersionString;

// Write the updated JSON back to the file
fs.writeFileSync(filePath, JSON.stringify(json, null, 2));

console.log(`Version bumped to ${newVersionString}`);

////JSON/dev/Bridge/Version_Fanatec_bridge.json
const fs = require('fs');
const path = require('path');

// Path to the JSON file
const filePath = path.join(__dirname, 'JSON/dev/Bridge/Version_Fanatec_bridge.json');

// Read the JSON file
const data = fs.readFileSync(filePath, 'utf8');
const json = JSON.parse(data);

// Extract the version string
const versionString = json.Configurations[0].Version;

// Split the version string into parts
const versionParts = versionString.split('.');

// Convert the second part to an integer and increment it
const secondNumber = parseInt(versionParts[2], 10) + 1;

// Update the second part of the version string
versionParts[2] = secondNumber.toString();

// Join the parts back into a version string
const newVersionString = versionParts.join('.');

// Update the JSON object
json.Configurations[0].Version = newVersionString;

// Write the updated JSON back to the file
fs.writeFileSync(filePath, JSON.stringify(json, null, 2));

console.log(`Version bumped to ${newVersionString}`);

////JSON/dev/Bridge/Version_Gilphilbert_dongle.json
const fs = require('fs');
const path = require('path');

// Path to the JSON file
const filePath = path.join(__dirname, 'JSON/dev/Bridge/Version_Gilphilbert_dongle.json');

// Read the JSON file
const data = fs.readFileSync(filePath, 'utf8');
const json = JSON.parse(data);

// Extract the version string
const versionString = json.Configurations[0].Version;

// Split the version string into parts
const versionParts = versionString.split('.');

// Convert the second part to an integer and increment it
const secondNumber = parseInt(versionParts[2], 10) + 1;

// Update the second part of the version string
versionParts[2] = secondNumber.toString();

// Join the parts back into a version string
const newVersionString = versionParts.join('.');

// Update the JSON object
json.Configurations[0].Version = newVersionString;

// Write the updated JSON back to the file
fs.writeFileSync(filePath, JSON.stringify(json, null, 2));

console.log(`Version bumped to ${newVersionString}`);

////JSON/dev/ControlBoard/Version_esp32.json
const fs = require('fs');
const path = require('path');

// Path to the JSON file
const filePath = path.join(__dirname, 'JSON/dev/ControlBoard/Version_esp32.json');

// Read the JSON file
const data = fs.readFileSync(filePath, 'utf8');
const json = JSON.parse(data);

// Extract the version string
const versionString = json.Configurations[0].Version;

// Split the version string into parts
const versionParts = versionString.split('.');

// Convert the second part to an integer and increment it
const secondNumber = parseInt(versionParts[2], 10) + 1;

// Update the second part of the version string
versionParts[2] = secondNumber.toString();

// Join the parts back into a version string
const newVersionString = versionParts.join('.');

// Update the JSON object
json.Configurations[0].Version = newVersionString;

// Write the updated JSON back to the file
fs.writeFileSync(filePath, JSON.stringify(json, null, 2));

console.log(`Version bumped to ${newVersionString}`);

////JSON/dev/ControlBoard/Version_esp32S3.json
const fs = require('fs');
const path = require('path');

// Path to the JSON file
const filePath = path.join(__dirname, 'JSON/dev/ControlBoard/Version_esp32S3.json');

// Read the JSON file
const data = fs.readFileSync(filePath, 'utf8');
const json = JSON.parse(data);

// Extract the version string
const versionString = json.Configurations[0].Version;

// Split the version string into parts
const versionParts = versionString.split('.');

// Convert the second part to an integer and increment it
const secondNumber = parseInt(versionParts[2], 10) + 1;

// Update the second part of the version string
versionParts[2] = secondNumber.toString();

// Join the parts back into a version string
const newVersionString = versionParts.join('.');

// Update the JSON object
json.Configurations[0].Version = newVersionString;

// Write the updated JSON back to the file
fs.writeFileSync(filePath, JSON.stringify(json, null, 2));

console.log(`Version bumped to ${newVersionString}`);

////JSON/dev/ControlBoard/Version_Gilphilbert_1_2.json
const fs = require('fs');
const path = require('path');

// Path to the JSON file
const filePath = path.join(__dirname, 'JSON/dev/ControlBoard/Version_Gilphilbert_1_2.json');

// Read the JSON file
const data = fs.readFileSync(filePath, 'utf8');
const json = JSON.parse(data);

// Extract the version string
const versionString = json.Configurations[0].Version;

// Split the version string into parts
const versionParts = versionString.split('.');

// Convert the second part to an integer and increment it
const secondNumber = parseInt(versionParts[2], 10) + 1;

// Update the second part of the version string
versionParts[2] = secondNumber.toString();

// Join the parts back into a version string
const newVersionString = versionParts.join('.');

// Update the JSON object
json.Configurations[0].Version = newVersionString;

// Write the updated JSON back to the file
fs.writeFileSync(filePath, JSON.stringify(json, null, 2));

console.log(`Version bumped to ${newVersionString}`);

////JSON/dev/ControlBoard/Version_Gilphilbert_2_0.json
const fs = require('fs');
const path = require('path');

// Path to the JSON file
const filePath = path.join(__dirname, 'JSON/dev/ControlBoard/Version_Gilphilbert_2_0.json');

// Read the JSON file
const data = fs.readFileSync(filePath, 'utf8');
const json = JSON.parse(data);

// Extract the version string
const versionString = json.Configurations[0].Version;

// Split the version string into parts
const versionParts = versionString.split('.');

// Convert the second part to an integer and increment it
const secondNumber = parseInt(versionParts[2], 10) + 1;

// Update the second part of the version string
versionParts[2] = secondNumber.toString();

// Join the parts back into a version string
const newVersionString = versionParts.join('.');

// Update the JSON object
json.Configurations[0].Version = newVersionString;

// Write the updated JSON back to the file
fs.writeFileSync(filePath, JSON.stringify(json, null, 2));

console.log(`Version bumped to ${newVersionString}`);

////JSON/dev/ControlBoard/Version_Speedcrafter.json
const fs = require('fs');
const path = require('path');

// Path to the JSON file
const filePath = path.join(__dirname, 'JSON/dev/ControlBoard/Version_Speedcrafter.json');

// Read the JSON file
const data = fs.readFileSync(filePath, 'utf8');
const json = JSON.parse(data);

// Extract the version string
const versionString = json.Configurations[0].Version;

// Split the version string into parts
const versionParts = versionString.split('.');

// Convert the second part to an integer and increment it
const secondNumber = parseInt(versionParts[2], 10) + 1;

// Update the second part of the version string
versionParts[2] = secondNumber.toString();

// Join the parts back into a version string
const newVersionString = versionParts.join('.');

// Update the JSON object
json.Configurations[0].Version = newVersionString;

// Write the updated JSON back to the file
fs.writeFileSync(filePath, JSON.stringify(json, null, 2));

console.log(`Version bumped to ${newVersionString}`);