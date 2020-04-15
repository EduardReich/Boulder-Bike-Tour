json.extract! submission, :id, :first_name, :last_name, :email, :slogan, :created_at, :updated_at
json.url submission_url(submission, format: :json)
