require 'test_helper'

class RiderTest < ActiveSupport::TestCase
  test "sould not save rider without first name" do
    rider = Rider.new(last_name: "test", city: "test", latitude: 123, longitude: 123)
    assert_not rider.save    
  end

  test "sould not save rider without last name" do
    rider = Rider.new(first_name: "test", city: "test", latitude: 123, longitude: 123)
    assert_not rider.save    
  end

  test "sould not save rider without city" do
    rider = Rider.new(last_name: "test", first_name: "test", latitude: 123, longitude: 123)
    assert_not rider.save    
  end

  test "sould not save rider without latitude" do
    rider = Rider.new(last_name: "test", city: "test", first_name: "test", longitude: 123)
    assert_not rider.save    
  end

  test "sould not save rider without longitude" do
    rider = Rider.new(last_name: "test", city: "test", latitude: 123, first_name: "test")
    assert_not rider.save    
  end
end
