class DropProductsTable < ActiveRecord::Migration[5.2]
   def up
    drop_table :api_users
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
