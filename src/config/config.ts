export const config = {
  "dev": {
    "username": "bravytechdb",
    "password": "bravytechdb",
    "database": "bravytechdb",
    "host": "bravytechdb.ch6ophpaqou6.us-east-1.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_region": "us-east-1",
    "aws_profile": "default",
    "aws_media_bucket": "bravytech-s3-1"
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  },
  "jwt": {
    "secret" : "helloworld"
  }
}
