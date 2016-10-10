# PaineScans
ARCHIVED - PaineScans has been archived. This repository remains as an example.

PaineScans is an Ionic app for Android intended to be used in conjunction with PaineReads. PaineScans uses the mobile device's camera to scan the barcode to collect an ISBN. The ISBN is then checked using the [Trove](http://trove.nla.gov.au/) API. That data then populates inputs in the device. The user can then post to a PostgreSQL database. The address of the database is provided dynamically by an available input box. 

If the scan says "Found Product", this particular ISBN isn't found in the National Library of Australia's database, so it will have to put in manually via the PaineReads application.

If the user is posting to a locally served database, the mobile device will need to be on the same server as the machine running the database. Otherwise, there will be security conflicts. 

## Relevant Tools
PaineScans was developed using Ionic, AngularJS and the Phonegap Barcode Scanner plugin.

## License
Released under the MIT license
