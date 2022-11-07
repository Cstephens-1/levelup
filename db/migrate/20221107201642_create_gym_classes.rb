class CreateGymClasses < ActiveRecord::Migration[6.1]
  def change
    create_table :gym_classes do |t|
      t.string :level
      t.time :time
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
