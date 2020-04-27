require 'test_helper'

class SubmissionTest < ActiveSupport::TestCase
  test "should not save without slogan" do
    submission = Submission.new
    assert_not submission.save    
  end

  test "should be maximum 50 characters" do
    submission = Submission.new(slogan: "a" * 51)
    assert_not submission.save
  end

  test "should be minimum 5 characters" do
    submission = Submission.new(slogan: "a" * 3)
    assert_not submission.save
  end
end  
