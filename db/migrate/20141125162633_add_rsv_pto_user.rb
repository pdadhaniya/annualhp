class AddRsvPtoUser < ActiveRecord::Migration
  def change
    add_column :users, :rsvp, :string
  end
end
