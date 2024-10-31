const fs = require('fs');
const path = require('path');

// Array of paths to the JSON files
const filePaths = [
    path.join(__dirname, 'JSON/dev/Bridge/Version_devkit.json'),
    path.join(__dirname, 'JSON/dev/Bridge/Version_Fanatec_bridge.json'),
	path.join(__dirname, 'JSON/dev/Bridge/Version_Gilphilbert_dongle.json'),
	path.join(__dirname, 'JSON/dev/ControlBoard/Version_esp32.json'),
	path.join(__dirname, 'JSON/dev/ControlBoard/Version_esp32S3.json'),
	path.join(__dirname, 'JSON/dev/ControlBoard/Version_Gilphilbert_1_2.json'),
	path.join(__dirname, 'JSON/dev/ControlBoard/Version_Gilphilbert_2_0.json'),
	path.join(__dirname, 'JSON/dev/ControlBoard/Version_Speedcrafter.json')
];

// Function to bump the version
const bumpVersion = (filePath) => {
    const data = fs.readFileSync(filePath, 'utf8');
    const json = JSON.parse(data);

    // Extract the version string
    const versionString = json.Configurations[0].Version;

    // Split the version string into parts
    const versionParts = versionString.split('.');

    // Convert the second part to an integer and increment it
    const secondNumber = parseInt(versionParts[1], 10) + 1;

    // Update the second part of the version string
    versionParts[1] = secondNumber.toString();
	versionParts[2] = 0;
    // Join the parts back into a version string
    const newVersionString = versionParts.join('.');

    // Update the JSON object
    json.Configurations[0].Version = newVersionString;

    // Write the updated JSON back to the file
    fs.writeFileSync(filePath, JSON.stringify(json, null, 2));

    console.log(`Version in ${filePath} bumped to ${newVersionString}`);
};

// Process each file
filePaths.forEach(bumpVersion);