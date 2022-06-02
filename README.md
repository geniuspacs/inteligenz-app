# News React App

### IMPORTANT
Before run following commands, please create .env file with content included on example.env file at same directory folder including same variables that example.env contains.

### About unit testing...
I have not time to develop unit testing but I want to demostrate that I can do it so you can go to other of my recent projects (for example, https://github.com/geniuspacs/golden_test which is developed with Angular, but in fact is unit testing too)

## DETAILS

This project is developed with React implementing Typescript. We are using React Bootstrap for interfaces.

## Data source

Data provider is newsapi.org which give us an API to get last news from worldwide. To see how we are retrieving data you can see helper useFetch (src/helpers/useFetch);

## Components

We are using basically 3 components:

1.- Search: using for search news by words included in title or description.

2.- Dashboard: is the first component you can see. It contains a list of news. NewsApi.org give us news order by most recent date so you do not need to include any extra params.

3.- Article Details: is a basic screen to see details about new. You can read full description, go back to list or go to full new in the main source.