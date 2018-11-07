Some code Copyright (c) 2011, Yahoo! Inc.  All rights reserved.
Some code Copyright (c) 2011-2012, Log-Normal Inc.  All rights reserved.
Most code Copyright (c) 2012-2016 SOASTA, Inc. All rights reserved.
Some code Copyright (c) 2016 Logmatic.io Inc. All rights reserved using the MIT license
Copyrights licensed under the BSD License. See the accompanying LICENSE.txt file for terms.



Forked from the excellent Boomerang project @ https://docs.soasta.com/boomerang-api/index.html
Purpose of this fork is to provide a customized agent for Sumo Logic customers to monitor their applications .
2 Functions (trieDecoder and resTiming decoder) taken from the Logomatic fork for boomerang specifically for the restiming plugin . BSD license above included to reflect this ......



![alt text](https://github.com/gregkroon/SumoLogic-Real-User-Monitoring/blob/master/images/SumoDash.png)





Key Modifications as follows 

- JSON output for Main boomerang.js and restiming.js beacon
- Calculate navtiming "events" against existing boomerang navtiming metrics (still to come)


Step 1 : Create a HTTP hosted source in SumoLogic 
         https://help.sumologic.com/Send-Data/Sources/02Sources-for-Hosted-Collectors/HTTP-Source

Step 2 : Copy the HTTP source URL to a text editor for later use in Step 4 

Step 3 : Download/Clone the repo to your Mac/PC and Unzip it

Step 4 : In the repo edit the plugin "ZZZ-Last-Plugin" under the plugins folder .
         Substitue the HTTP source URL from step 2 into the beacon_url:<url here > and save.
         i.e. beacon_url:"https://collectors.au.sumologic.com/receiver/v1/http/****",

Step 5 : Install NPM https://www.npmjs.com/get-npm

Step 6 : Build the source by doing the following .
         
         - navigate to the root of the project in your shell and run the following commands 
         - npm init
         - npm install -g grunt-cli
         - npm install grunt --save-dev
         - npm install grunt-contrib-concat fs-extra strip-json-comments gruntify-eslint grunt-babel grunt-browserify grunt-express-server grunt-karma grunt-string-replace grunt-contrib-uglify grunt-contrib-clean grunt-contrib-copy grunt-contrib-compress grunt-filesize grunt-mkdir grunt-protractor-runner grunt-protractor-webdriver grunt-template grunt-saucelabs grunt-strip-code grunt-contrib-watch grunt-jsdoc --save-dev
         
         - grunt clean build
         
Step 7 : Navigate to the build folder in the project 

Step 8 : Copy the boomerang-x.x.xxxxxxx.js to your CDN or into your javascripts folder for your app 

Step 9 : Reference the boomerang-x.x.xxxxxxx.js in the head of your page or page template i.e.
         <html>
         <head>
         <script src="https://s3-ap-southeast-2.amazonaws.com/boomerangsumo/boomerang-1.0.1518131207.js"</script>
         

Step 10 : Reload the page and check in developer tools for the beacon being sent to the http url .

Step 11 : Check your source category in SumoLogic for the beacon data after a minute . 


