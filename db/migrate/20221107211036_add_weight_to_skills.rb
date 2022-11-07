class AddWeightToSkills < ActiveRecord::Migration[6.1]
  def change
    add_column :skills, :weight, :integer
  end
end
