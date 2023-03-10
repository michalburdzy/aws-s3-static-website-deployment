import * as cdk from 'aws-cdk-lib';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { BucketDeployment, Source } from 'aws-cdk-lib/aws-s3-deployment';
import { Construct } from 'constructs';
import path = require('path');

export class StaticS3WebsiteHosting extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const bucket = this.setupS3Bucket();

    this.deployFrontendAppToS3Bucket(bucket);
  }

  private setupS3Bucket(): Bucket {
    const bucket = new Bucket(this, `MichalStaticWebsiteAssetsBucket`, {
      publicReadAccess: true,
      websiteIndexDocument: 'index.html',
    });

    new cdk.CfnOutput(this, `MichalStaticWebsiteAssetsBucketWebsiteUrl`, {
      value: bucket.bucketWebsiteUrl,
    });

    return bucket;
  }

  private deployFrontendAppToS3Bucket(bucket: Bucket): void {
    new BucketDeployment(this, 'DeployStaticWebsite', {
      sources: [
        Source.asset(path.resolve(__dirname, '..', '..', 'frontend', 'build')),
      ],
      destinationBucket: bucket,
      extract: true,
      // distribution: '' // @TODO: add CloudFront distribution
      // distributionPaths: [] // @TODO: add CloudFront distribution
    });
  }
}
