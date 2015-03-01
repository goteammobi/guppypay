class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :groupings
  has_many :groups, :through => :groupings

  def update_auth_token(auth_token)
    self.auth_token = auth_token
    self.save
  end
end
