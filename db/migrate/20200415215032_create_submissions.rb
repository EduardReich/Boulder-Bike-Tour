class CreateSubmissions < ActiveRecord::Migration[6.0]
  def change
    create_table :submissions do |t|
      t.string :first_name
      t.string :last_name
      t.text :email
      t.text :slogan

      t.timestamps
    end
  end
end
