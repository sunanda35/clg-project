## Project startup
It's a collaborative college project by <a href='https://github.com/ashiscs'>Ashis</a>, <a href='https://github.com/Debajyoti9'>Debajyoti</a> and <a href='https://github.com/sunanda35'>Sunanda</a>.

* Your `npm start` may not work after just clone this repository.
    1. Do `npm install` first
    2. Then you are free to run `npm start`

### Used things - 
    |- React                 --Development
    |- React-router-dom      --Routing
    |- firebase              --Database
    |- Material UI           --Icon


### Functionality -
    ** Will provide after the completion of the project for the viewers.


### Command install - 
    |- npm install create-react-dom         --Install router
    |- npm install firebase                 --Install firebase
    |- sudo npm install -g firebase-tools   -- setup firebase
    |- npm install @material-ui/core        --for Dependancy (Package.json)
    |- npm install @material-ui/icons       --To import SVG icons

* For linux sudo is root user, for windows user, 
    please search it on internet for administrator mood 
    ( may be only-> npm install -g firebase-tools)

    
### Project strcture - 
    |- App.js
        |- Login.js
        |- Page.js
            |- Header(Nav bar)
            |- Drawer
            |- Dashboard
            |- Footer(bottom nav)
        |- Error

    
### Project file Structure - 
        |- App.js                                              //entry or routing point
        |- component                                           //it's only for main component like header and footer
            |- footer                                                       //footer
                |- Footer.js
                |- footer.css
            |- header                                                       //header
                |- Header.js
                |- header.css

        |- land                                                             //Land page (User's very first interection)
            |- login                                                                //login page
                |- Login.js
                |- login.css
            |- Land.js                                                      
            |- land.css

        |- pages            
            |- dashboard                                                    //Main dashboard page
                |- Dashboard.js
                |- Dashboard.css
            |- drawer                                                       //Left side drawer page
                |- Drawer.js
                |- Drawer.css
            |- Page.js
            |- page.css

        |- production                                 //Main production folder, Theme and database can be changed from here
            |- color.css                                        //All color initialize here globally
            |- firebase.js                                      //firebase config file to access database
            |- string.js                                        //All constant string initialize here
        |- reusable                                 //Every reusable folder will store here.
            |- error                                                   //error page (It's the landing page of error routing)
                |- Error.js
                |- error.css
            |-                                      //*** Every reusable file should have in it's own folder

    
    
    
