class AddPotlucktoUsers < ActiveRecord::Migration
  def change
    add_column :users, :potluck, :string
  end
end
