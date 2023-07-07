class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :password_digest
      t.string :confirmation_token
      t.string :confimed_at
      t.string :confirmation_sent_at
      t.timestamps
    end
  end
end
