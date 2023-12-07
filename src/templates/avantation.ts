let defaultTemplate: any = {
    "openapi": "3.1.0",
    "info": {
      "version": "1.0",
      "title": "{title}",
      "description": "TODO: Add Description"
    },
    "servers": [
      {
        "url": "https://{host}/{basePath}"
      }
    ],
    "components": {
      "schemas": {
        "ErrorModel": {
          "type": "object",
          "properties": { "code": { "type": "string" } }
        }
      },
      "securitySchemes": {
        "OAuth2": {
          "type": "oauth2",
          "flows": {
            "authorizationCode": {
              "authorizationUrl": "https://login.microsoftonline.com/common/oauth2/v2.0/authorize",
              "tokenUrl": "https://login.microsoftonline.com/common/oauth2/v2.0/token",
              "scopes": {
                "User.Read": "Read user profile",
                "Contacts.Read": "Read contacts"
              }
            }
          }
        },
        // "JWT": {
        //   "description": "You can create a JSON Web Token (JWT) during auth.\nUsage format: `Bearer <JWT>`\n",
        //   "name": "Authorization",
        //   "type": "apiKey",
        //   "in": "header"
        // }
      }
    },
    "paths": {}
  };

export default defaultTemplate;
