require 'test_helper'

class SubmissionTest < ActiveSupport::TestCase
  test "should not save without slogan" do
    submission = Submission.new(first_name: "test", last_name: "test", email: "test@test.com")
    assert_not submission.save    
  end

  test "should not save without email" do
    submission = Submission.new(first_name: "test", last_name: "test", slogan: "test test")
    assert_not submission.save
  end

  test "should not save without first name" do
    submission = Submission.new(email: "test@test.com", last_name: "test", slogan: "test test")
    assert_not submission.save
  end

  test "should not save without last name" do
    submission = Submission.new(first_name: "test", email: "test@test.com", slogan: "test test")
    assert_not submission.save
  end

  test "slogan should be maximum 50 characters" do
    submission = Submission.new(slogan: "a" * 51, first_name: "test", last_name: "test", email: "test@test.com")
    assert_not submission.save
  end

  test "slogan should be minimum 5 characters" do
    submission = Submission.new(slogan: "a" * 3, first_name: "test", last_name: "test", email: "test@test.com")
    assert_not submission.save
  end
end  
