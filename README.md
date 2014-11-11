# Dockerstack-Sailor


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

The Service have the following modules
		
			1)User Authentication
			2)Rolde Based Strategy
			3)Public Cloud Infrastructure Management (Aws and Azure as of now)
			4)Private Cloud Infrastrucutre Management (Openstack and Vmware as of now)
			5)Integrated Deployments