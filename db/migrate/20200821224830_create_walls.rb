class CreateWalls < ActiveRecord::Migration[5.2]
  def change
    create_table :walls do |t|
      t.integer :user_id, null: false
      t.integer :post_id,  null: false
      t.timestamps
    end
    add_index :walls, :user_id, unique: true 
    add_index :walls, :post_id
  end 
end
