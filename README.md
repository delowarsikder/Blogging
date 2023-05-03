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

#initial set commad
> rails new project name
> rails s //run the project
> rails g scaffold post title:string body:text
//set up rake::cors https://github.com/cyu/rack-cors

> bundle install // install gem 
> rails db:migrate


## Frontend Code 
> npx create-react-app frontend --template redux-typescript

