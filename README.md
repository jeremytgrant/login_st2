login_st2
=========

Login app made with sencha touch 2 and codeigniter that runs on stackato and cloud foundry

At this point this is going to be my fumbling of trying to make a login sencha touch 2 app that shows different things based on the login.  Right now I am just putting the basic commands I am running so that later I can come back and reproduce what I have done and maybe make a video of what I have done if I ever get this working liek I want.

The main reason there is a dev and live folder is that I found appfog.com would not allow me to deploy the sencha touch 2 sdk without creating a production version of the site.

Download sencha-touch-2.0.1.1-gpl.zip from http://www.sencha.com/products/touch/downloadr?
Download CodeIgniter_2.1.2.zip from http://codeigniter.com/
cd ~/Sites
unzip ~/Downloads/sencha-touch-2.0.1.1-gpl.zip
unzip ~/Downloads/CodeIgniter_2.1.2.zip
git clone https://github.com/benedmunds/CodeIgniter-Ion-Auth.git
git clone https://github.com/alexbilbie/codeigniter-mongodb-library.git
git clone https://github.com/sepehr/ci-mongodb-session.git
git clone https://github.com/philsturgeon/codeigniter-restserver.git
mkdir Login_st2
cd Login_st2
mkdir -p dev live/api/
cd ~/Sites/sencha-touch-2.0.1.1
sencha generate app -n Login_st2 --path=~/Sites/login_st2/dev/ -l all
cd ../Login_st2/dev
sencha app build testing
sencha app build production -d ../live/

rsync -avP ~/Sites/CodeIgniter-Ion-Auth/* ~/Sites/login_st2/dev/api/application

