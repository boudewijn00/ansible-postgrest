apps : [{
    name: 'read-s3-store-postgrest',
    script: './read-s3-store-postgrest/index.mjs',
    env_production: {
        NODE_ENV: 'production'
    }
}]