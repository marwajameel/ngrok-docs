<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "next_page_uri": null,
  "reserved_domains": [
    {
      "acme_challenge_cname_target": null,
      "certificate": {
        "id": "cert_31EC7y6fGUsltv70T4PQsQGwEWY",
        "uri": "https://api.ngrok.com/tls_certificates/cert_31EC7y6fGUsltv70T4PQsQGwEWY"
      },
      "certificate_management_policy": null,
      "certificate_management_status": null,
      "cname_target": "2udamkamcl8pjmrff.2w2sikuustj9h5xzu.local-ngrok-cname.com",
      "created_at": "2025-08-13T10:08:01Z",
      "domain": "myapp.mydomain.com",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_31EC827p0bl3HX7iKXikHCSWNGE",
      "is_dev": false,
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_31EC827p0bl3HX7iKXikHCSWNGE"
    },
    {
      "acme_challenge_cname_target": null,
      "certificate": null,
      "certificate_management_policy": {
        "authority": "letsencrypt",
        "private_key_type": "ecdsa"
      },
      "certificate_management_status": {
        "provisioning_job": {
          "error_code": null,
          "msg": "Managed certificate provisioning in progress.",
          "retries_at": null,
          "started_at": "2025-08-13T10:08:01Z"
        },
        "renews_at": null
      },
      "cname_target": "4knqktdwka2umyjjc.2w2sikuustj9h5xzu.local-ngrok-cname.com",
      "created_at": "2025-08-13T10:08:01Z",
      "description": "Device 0001 Dashboard",
      "domain": "manage-0002.app.example.com",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_31EC7xgjShT4IaWsCfXN6L3JWh8",
      "is_dev": false,
      "metadata": "{\"service\": \"dashboard\"}",
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_31EC7xgjShT4IaWsCfXN6L3JWh8"
    },
    {
      "acme_challenge_cname_target": null,
      "certificate": null,
      "certificate_management_policy": null,
      "certificate_management_status": null,
      "cname_target": null,
      "created_at": "2025-08-13T10:07:31Z",
      "description": "Your dev domain",
      "domain": "glorious-privately-thrush.ngrok-free.dev",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_31EC4ExMZEXiLLSfUPWA2saLAa4",
      "is_dev": true,
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_31EC4ExMZEXiLLSfUPWA2saLAa4"
    }
  ],
  "uri": "https://api.ngrok.com/reserved_domains"
}
```
