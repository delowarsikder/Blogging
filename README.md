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

rails generate model User first_name:string last_name:string user_name:string email:string password:string reset_password_token:string reset_password_sent_at:timestamp  active_status:boolean image:string

rails g model AuthToken user_id:string activation_token:string token_expire_time:timestamp resend_token_time:timestamp 

rails generate model UserInfo user_id:string current_sign_in_at:timestamp last_sign_in_at:timestamp user_active_status:boolean wrong_login_attemp:integer 

