# *Good2Go Mart*

An innovative digital mart designed in the context of COVID-19.

## Authors

- Aishwarya Srivastava
- Apoorva Pundra
- Khushboo
- Ridhi Lakhotia
- Sanchita Tople

## Contents

1. [Short Description](#short-description)
- What's the problem?
- How technology can help?
- The idea
2. Demo
3. [The Architecture](#the-architecture)
4. [Long Description](#long-description)
5. [User Flow Diagram](#user-flow-diagram)
6. [Project Roadmap](#project-roadmap)
7. [Built with](#built-with)

## Short Description

### What's the problem?

In the COVID-19 crisis, we have already seen shortages of groceries and other consumer products. In addition, the recommended self-isolation and social distancing measures can compound the problem by preventing people from easily getting to locations with the best stocks of supplies. Also, with this extended lock-down period, our economy has severely suffered. 

Proper channels of distribution of goods to end users along with promotion of #VocalForLocal is the need of the hour.

### How can technology help?
Mobile, web, and cloud services enable rapid deployment of applications that can empower cooperation in the community. 

Watson Assistant is a service on IBM Cloud – can help you address the issues that your users may face while trying to gather the necessary information. 

Embedding location/routing services  & Slot-booking services – can be used to for location finding and slot booking. 

React-native – can be used to build mobile applications

IBM Cloudant – IBM Cloudant is a fully managed JSON document database used for web, mobile, IoT, and serverless applications.


## The idea

The goal is to provide a mobile application, that serves as the basis for developers to build out a community cooperation application that addresses local needs as mentioned below –

- It would allow both "Suppliers" (such as a store or a community member) to make people aware of what they have; and “consumers”/"Recipients" to locate where these supplies are, book a slot (to avoid queue problem and overcrowding in the store), pick the items from the corridor/walkway,  drop them into cart and leave.

- It would also give our “Local Suppliers” a platform to publicize locally made products, and “Consumers” will be getting alternate options for all the foreign products. This will be a small step forward, to make #VocalForLocal a great success.

## Demo

https://youtu.be/nPOH5I4I2es

## The Architecture

![Good2Go architecture diagram](/images/Architecture.PNG)

This solution starter idea combines a chat interface (Watson Assistant), data storage (Cloudant) to hold the status of supplies available with the suggestion of locally produced goods, slot booking services with real-time information to get users the information they need. 
1. The Recipient launches the mobile app and can access information across multiple services.

1. The Recipient can ask questions to Watson Assistant and get answers on food/service availability questions, also users can ask for the alternate local product for the item they are looking for.

1. The Supplier can post the availability of stock or services they can provide, as well as locate the items they need.

1. The Recipient can obtain geolocation data to plot routes to collect (or drop off) supplies using HERE Location Services and can book slot for picking goods using slot-booking services.


## Long Description

A Supplier (who may be a regular resident, a small business, a voluntary organization, etc.) that has food, supplies, resources, or other essentials they can opens the mobile application and fills out a brief form that indicates what they have, there store slot availability for pick-up and locally produced goods details. This information is then stored in a database in the IBM Cloud. 

A Recipient, who needs food, supplies, resources, or other essentials, opens the mobile application and can use the chat interface to locate supplies near them. For instance, they might type "Where can I find bread?" or "Can I collect my goods from the store?" The mobile application then accesses the database (after first understanding the question via Watson Assistant) and then user can book slot for pick up or opt for delivery. Also, user can look for local option for any product and its details. 
displays a map showing locally where they can find what they are looking for.



## User Flow Diagram

![Good2Go User Flow Diagram](/images/UserFlowDiagram.PNG)

## Project Roadmap

![Good2Go Project Roadmap 1](/Roadmap/Roadmap.png)

![Good2Go Project Roadmap 2](/Roadmap/Roadmap2.png)

## Built With

- IBM Cloudant
- IBM Watson Assistant
- Node Js
- React Native
- IBM Cloud App Service
- Android Studio

