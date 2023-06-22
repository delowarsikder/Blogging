class CreateUserInfos < ActiveRecord::Migration[7.0]
  def change
    create_table :user_infos do |t|
      t.string :user_id
      t.timestamp :current_sign_in_at
      t.timestamp :last_sign_in_at
      t.boolean :user_active_status
      t.integer :wrong_login_attemp

      t.timestamps
    end
  end
end
