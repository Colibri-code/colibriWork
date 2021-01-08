# colibriWork

Download in your local machine https://www.docker.com/products/docker-desktop

To start the configuration in terminal: `docker-compose up`

To remove the configuration: `docker-compose down -v`

To check the status: `docker ps -a`
Note the `configure_stack` container will have exited on completion of the configuration of stack. This occurs before the Beats containers start.  Other containers should be "Up".

This docker included the environmment for Sails.Js, React.Js and MYSQL 8*

===================

If needed run the services for React Native, please run `npm start` or `yarn web`

In the case of Electron go to run `npm start`