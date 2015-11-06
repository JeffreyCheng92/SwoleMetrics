# == Schema Information
#
# Table name: exercises
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  weight     :integer          not null
#  sets       :integer          not null
#  reps       :integer          not null
#  name       :string           not null
#  date       :datetime         not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Exercise < ActiveRecord::Base
  validates :user_id, :name, :weight, :sets, :reps, :date, presence: true

  belongs_to :user
end
