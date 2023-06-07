# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
** Rack::Cors provides support for Cross-Origin Resource Sharing (CORS) for Rack compatible web applications.

## initial set commad
> rails new project_name <br/>
> rails s //run the project  <br/>
> rails g scaffold post title:string body:text
//set up rake::cors https://github.com/cyu/rack-cors

> bundle install // install gem  <br/>
> rails db:migrate


## Frontend Code 
> npx create-react-app frontend --template redux-typescript

### References: https://youtu.be/ZGnMqKg-Cq4
## Protect Route: https://dev.to/franklin030601/route-protection-with-react-router-dom-12gm#3
## Registrantion : https://github.com/eric-ricky/auth-mui-template

## cd/frontend 
then apply this command
* npm i formik
* npm i yup
### to install icon
* npm install --save-dev @iconify/react
* npm i framer-motion
* npm i @mui/lab
* npm install react-hook-form @hookform/resolvers yup
* npm install @mui/styles

## Gemfile
>> add this line 
* gem 'dotenv-rails'
* gem 'mysql2'

