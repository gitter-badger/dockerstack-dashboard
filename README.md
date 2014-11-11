# Dockerstack-Sailor

[ ![Codeship Status for dockerstack/dockerstack-dashboard](https://codeship.com/projects/aff34900-4be4-0132-a5b4-6e46eafdf5e7/status)](https://codeship.com/projects/46878)
[![Coverage Status](https://img.shields.io/coveralls/dockerstack/dockerstack-dashboard.svg)](https://coveralls.io/r/dockerstack/dockerstack-dashboard)

<p>This is the Dashboard service written for the Dockerstack application to control the Public and Private Cloud resources from single dashboard.

<p>The Dashboard is written using the [Sails](http://sailsjs.org) Framework. 


## Dockerstack Architecture
				 	 _______________________________														 _______________
					|						 		|														|               |
					|     Dockerstack-Dashboard		|<------------------------------------------------------|	Dedicated	|
					|    (Jquery,Javascript,D3,		|														|	  Server	|
					|			AngularJs)			|<-------------------------------------------------		|_______________|			
					|_______________________________|<----------------------------------       		  |	  ________________________			
																						|			  |--|		   VmWare 		  |
									|													|				 |	   Infrastrucuture	  |
							       	|													|				 |						  |
									|													|				 |________________________|	
									|											        |
                     _______________________________									|		    _____________________________________
					|								|						            |__________|									 |
				 ___|		 Dockerstack-Core		|						                       |	      	  Openstack    			 |
				|   |  (Nodejs,Sails.io.js,Sailsjs)	|---------------------						   |			Infrastrucutre			 |
				|	|								|					  |						   |                                     |
				|	|_______________________________|					  |						   |_____________________________________|	
				|					|									  |
				|					|									  |	
	________	|					|									  |
   	(___ ___)	|					|									  |				 ________
   	|  		|<--|					|									  |------------>(________)
   	|  Key	|						|													|		 |
   	| Value	|<--|					|													|  Maria |
  	|_______|	|					|													|   DB	 |
				|	___________________________________					  |------------>|________|
				|  |								   |				  |
                |  |								   |-------------------
                |__|		Dockerstack-Julie		   |
                   |	  (Orchestration Layer)	       |
                   |								   |
                   |								   |
                   |___________________________________|




##Dockerstack-Sailor Architecture
	
						__________________________________________________________
					   |				 Dockerstack-Dashboard					  |
					   |														  |
					   |	*Javascript											  |
					   |	*Jquery		---->AngularJs ----> Ajax,WebSockets	  |
					   |											|			  |
					   |											|			  |
					   |											|_->D3 Graphs |
					   |														  |
					   |__________________________________________________________|


<p> Sailor - The Dockerstack Dashboard service is the service which controls the Docker based Infrastrucutre on Public and Private Cloud.

Javascript and Jquery are used to manupulate the dom elements when required and the total fronend framework structure is maintained by Angularjs.

Mostly the Data will be updated through Ajax or through Websockets.

For Server Based Information and to show them through graphs we are using the D3 Graphs which inreturn the data is being populated for Real time Data Metrics to show at the Frontend.

The Service have the following modules
		
			1)User Authentication
			2)Rolde Based Strategy
			3)Public Cloud Infrastructure Management (Aws and Azure as of now)
			4)Private Cloud Infrastrucutre Management (Openstack and Vmware as of now)
			5)Integrated Deployments11/11/2014 8:39:49 PM 11/11/2014 8:39:51 PM 