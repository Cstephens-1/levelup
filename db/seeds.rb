# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

"seeding started"
cory = User.create(username: "CoryUN", password: "123", name: 'Cory')

adam = Student.create(name: 'Adam', age:12, gender:"M", level: "JB2")

pullover = Skill.create(name: 'pullover', weight: 5)

level2 = GymClass.create(level: "JB2", time: Time.now, user_id: cory.id)

classStudent = ClassStudent.create(student_id: adam.id, gym_class_id: level2.id)

adaml2eval = Evaluation.create(student_id: adam.id, skill_id: pullover.id)
"seeding ended"
