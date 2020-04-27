require 'test_helper'

class RiderTest < ActiveSupport::TestCase
  test "sould not save rider without first name, last_name or city" do
    rider = Rider.new
    assert_not rider.save    
  end
end
