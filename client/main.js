/*
Files inside imports/ only load if they are imported, so we'll need
to import imports/ui/body.js from our frontend JS entrypoint
(client/main.js---note that we remove the rest of the code from
this file):
*/
import '../imports/ui/body.js';
