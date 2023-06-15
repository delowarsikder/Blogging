class CreateAuthTokens < ActiveRecord::Migration[7.0]
  def change
    create_table :auth_tokens do |t|
      t.string :user_id
      t.string :activation_token
      t.timestamp :token_expire_time
      t.timestamp :resend_token_time

      t.timestamps
    end
  end
end
