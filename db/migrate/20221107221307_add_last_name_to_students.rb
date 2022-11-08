class AddLastNameToStudents < ActiveRecord::Migration[6.1]
  def change
    add_column :students, :last_name, :string
  end
end
