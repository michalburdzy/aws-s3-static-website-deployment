#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { StaticS3WebsiteHosting } from '../lib/cdk-stack';
import { config } from 'dotenv';

config();

const app = new cdk.App();
new StaticS3WebsiteHosting(app, 'StaticS3WebsiteHosting', {
  env: {
    account: process.env.AWS_ACCOUNT_ID,
    region: process.env.AWS_REGION,
  },
});
