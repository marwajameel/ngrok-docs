<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "next_page_uri": null,
  "tls_edges": [
    {
      "backend": null,
      "created_at": "2025-08-13T10:08:28Z",
      "description": "acme tls edge",
      "hostports": [
        "example.com:443"
      ],
      "id": "edgtls_31ECBPVNj7frd1q1O5Khu5qqZMG",
      "ip_restriction": null,
      "metadata": "{\"environment\": \"staging\"}",
      "mutual_tls": null,
      "policy": null,
      "tls_termination": null,
      "traffic_policy": null,
      "uri": "https://api.ngrok.com/edges/tls/edgtls_31ECBPVNj7frd1q1O5Khu5qqZMG"
    },
    {
      "backend": {
        "backend": {
          "id": "bkdhr_31ECA1XGAGrXPd0r2ilF0mzRMsO",
          "uri": "https://api.ngrok.com/backends/http_response/bkdhr_31ECA1XGAGrXPd0r2ilF0mzRMsO"
        },
        "enabled": true
      },
      "created_at": "2025-08-13T10:08:17Z",
      "description": "acme tls edge",
      "hostports": [
        "endpoint-example2.com:443"
      ],
      "id": "edgtls_31ECA3z6U0TLbcy21apjJHcNef5",
      "ip_restriction": null,
      "mutual_tls": null,
      "policy": null,
      "tls_termination": null,
      "traffic_policy": null,
      "uri": "https://api.ngrok.com/edges/tls/edgtls_31ECA3z6U0TLbcy21apjJHcNef5"
    }
  ],
  "uri": "https://api.ngrok.com/edges/tls"
}
```
