# ecommerce-backend
Week 13 Object-Relational Mapping(ORM): eCommerce Backend using Sequelize

## Table of Contents
1. [Description](#Description)
2. [User-Stories](#User-Stories)
3. [Acceptance-Criteria](#Acceptance-Criteria)
4. [Installation](#Installation)
5. [Recorded Video](#Recorded-Video)
6. [Questions](#Questions)

# Description
***
###### [Back to Table of Contents](#Table-of-Contents)
The assignment was to update starter code to create Category, Product, ProductTag and Tag models and their associated routes to find, create, update and delete category, product and tag data.

## User Stories
***
###### [Back to Table of Contents](#Table-of-Contents)
```
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria
***
###### [Back to Table of Contents](#Table-of-Contents)
```
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```

# Installation
***
###### [Back to Table of Contents](#Table-of-Contents)
1. Clone the repository to your local machine and run 'npm install' to install all corresponding modules.
2. Create a new/update .env file in the main directory with your mysql credentials
    DB_NAME = 'eccomerce_db'
    DB_USER = 'root'
    DB_PASSWORD = 'enter your password here!'
3. Run 'mysql -u root -p' to ensure that you are logged into MySQL
4. Source the seed data by running 'SOURCE db/schema.sql' and then type 'quit' to exit MySQL
5. Run 'npm run seed'
6. Run 'node seeds/index.js'
7. Start the server using 'npm start' and go! :) 


## Recorded Video
***
###### [Back to Table of Contents](#Table-of-Contents)
https://drive.google.com/file/d/1V8mTUIC1xi63sfCDiWl5NeIOKS5Zhydr/view


## Credits
***
###### [Back to Table of Contents](#Table-of-Contents)
GT Bootcamp Tutors

## License
***
###### [Back to Table of Contents](#Table-of-Contents)
MIT

# Questions
***
###### [Back to Table of Contents](#Table-of-Contents)
Review my GitHub Repo: https://github.com/jae-as
Email me: janaee.as.wallace@gmail.com

