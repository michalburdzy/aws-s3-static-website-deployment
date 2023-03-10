# Steps to deploy a static website using AWS S3

### Requirements

- AWS account
- AWS account credentials with administrator access policy
- AWS cli installed and configured (run: `aws configure`)
- AWS cdk installed

## Manual deployment via AWS console

### Simple hosting under the S3 bucket

1. Build the frontend app: `cd frontend && yarn build`
2. Create S3 bucket:

- For "Object Ownership" select "ACLs enabled" --> "Object writer"
- unselect "Block Public Access settings for this bucket"

3. Upload built files to the bucket

- Under "Permissions" select "Predefined ACLs" --> "Grant public-read access"

4. Enable static website hosting for the bucket (inside the "Properties" tab). Specify `index.html` as website root

## Create IAM user and create his access keys

## Configure AWS cli

`aws configure --profile [your-profile-name]`

## create `cdk` directory and run `cdk init app --language=typescript` inside
