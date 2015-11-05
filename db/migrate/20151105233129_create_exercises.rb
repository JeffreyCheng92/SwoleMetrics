class CreateExercises < ActiveRecord::Migration
  def change
    create_table :exercises do |t|
      t.integer :user_id, null: false
      t.integer :weight, null: false
      t.integer :sets, null: false
      t.integer :reps, null: false
      t.string :name, null: false
      t.datetime :date, null: false

      t.timestamps null: false
    end

    add_index :exercises, :user_id
    add_index :exercises, :name
  end
end
