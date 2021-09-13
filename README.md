# impledge_technology-
API integration test

# Steps to run the code:
1. Clone the Repo
2. Install Node url: https://nodejs.org/en/download/
3. Open terminal in the directory of the code.
4. Run "npm install express".
5. start the app by "npm run".

# Rest API calls:

1. API online: connects the app with the API and console it onto the front end. Can be accessed by the url: http://localhost:3000

2. createShipment: This part of the code creates the shipment with fromAddress and toAddress along with some predefined details like parcel and customInfo.
                   This enables the app to generate a dynamic shipment ID which will me displayed in the frontend for the ease of copying it.
                   Can be accessed by the url: http://localhost:3000/createShipment
        
3. getShipment: It enables the app to retrive the PNG label of the parcel corresponding to the shipment ID. To view the final PNG copy the shipment ID on createShipment page 
                and paste it in the following way http://localhost:3000/getShipment/shp_87462189ccdc43a1a7ac0c6e255c5979 .
                

# Approach 

The basic part to start with a new API is to know about it. So reading the Document was the 1st step.
I aquired a "bottom to top" approch to solve the problem i.e I first executed the API call to print the PNG label indicating that "postage_label" is a required field for the implementation.
    postage_label field is populated when a shipment is bought ,so buying the shipment became an important step.
    To Buy a shipment, the shipment must exist, hence creating Shipment became the first and foremost step.
    
    The flowchart is given as:
    
    Create Shipment (generate shipment iD)   -->    Buy shipment    -->   Create PNG(by redirecting postage_url)
              (with addresses)                (populate postage_label)
                   
