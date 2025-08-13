<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "endpoints": [
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-08-13T10:08:22Z",
      "description": "sample cloud endpoint",
      "domain": {
        "id": "rd_31ECA14oHs9jSba9Ch1Yg85FKzG",
        "uri": "https://api.ngrok.com/reserved_domains/rd_31ECA14oHs9jSba9Ch1Yg85FKzG"
      },
      "hostport": "endpoint-example2.com:443",
      "id": "ep_31ECAhhZtDd7PeqVbxe4ftLhjN8",
      "metadata": "{\"environment\": \"staging\"}",
      "pooling_enabled": false,
      "proto": "https",
      "public_url": "https://endpoint-example2.com",
      "traffic_policy": "{\"on_http_request\":[{\"actions\":[{\"type\":\"deny\",\"config\":{\"status_code\":404}}]}]}",
      "type": "cloud",
      "updated_at": "2025-08-13T10:08:22Z",
      "uri": "https://api.ngrok.com/endpoints/ep_31ECAhhZtDd7PeqVbxe4ftLhjN8",
      "url": "https://endpoint-example2.com"
    },
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-08-13T10:08:20Z",
      "hostport": "3e091c6145df.ngrok.paid:443",
      "id": "ep_31ECANUIRX6Lz1jP2NhZmoQRRUQ",
      "name": "command_line",
      "pooling_enabled": false,
      "principal": {
        "id": "usr_31EC3pyRCUZPfOmvBQQqHB1MAaE",
        "uri": ""
      },
      "proto": "https",
      "public_url": "https://3e091c6145df.ngrok.paid",
      "tunnel": {
        "id": "tn_31ECANUIRX6Lz1jP2NhZmoQRRUQ",
        "uri": "https://api.ngrok.com/tunnels/tn_31ECANUIRX6Lz1jP2NhZmoQRRUQ"
      },
      "tunnel_session": {
        "id": "ts_31ECAQfvNUgE74G6nhFLnS8XKRA",
        "uri": "https://api.ngrok.com/tunnel_sessions/ts_31ECAQfvNUgE74G6nhFLnS8XKRA"
      },
      "type": "ephemeral",
      "updated_at": "2025-08-13T10:08:20Z",
      "upstream_url": "http://localhost:80",
      "url": "https://3e091c6145df.ngrok.paid"
    },
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-08-13T10:08:17Z",
      "domain": {
        "id": "rd_31ECA14oHs9jSba9Ch1Yg85FKzG",
        "uri": "https://api.ngrok.com/reserved_domains/rd_31ECA14oHs9jSba9Ch1Yg85FKzG"
      },
      "edge": {
        "id": "edgtls_31ECA3z6U0TLbcy21apjJHcNef5",
        "uri": "https://api.ngrok.com/edges/tls/edgtls_31ECA3z6U0TLbcy21apjJHcNef5"
      },
      "hostport": "endpoint-example2.com:443",
      "id": "ep_31ECA1gHF40d6EdVAYKcY5ntsQE",
      "pooling_enabled": false,
      "proto": "tls",
      "public_url": "tls://endpoint-example2.com",
      "type": "edge",
      "updated_at": "2025-08-13T10:08:17Z"
    }
  ],
  "next_page_uri": null,
  "uri": "https://api.ngrok.com/endpoints"
}
```
