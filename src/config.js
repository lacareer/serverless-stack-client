const config = {
    s3: {
      REGION: "ca-central-1",
      BUCKET: "stack-note-app-upload",
    },
    apiGateway: {
      REGION: "ca-central-1",
      URL: "https://dngvcwmts7.execute-api.ca-central-1.amazonaws.com/prod",
    },
    cognito: {
      REGION: "ca-central-1",
      USER_POOL_ID: "ca-central-1_gseMfdwHq",
      APP_CLIENT_ID: "41sqcvsbnbusg88o3epmuvrbe9",
      IDENTITY_POOL_ID: "ca-central-1:77e839ba-9b53-44e0-8785-ab48eba9a093",
    },
  };
  
  export default config;