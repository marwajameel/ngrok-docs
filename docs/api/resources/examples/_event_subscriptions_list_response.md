<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "event_subscriptions": [
    {
      "created_at": "2025-08-13T10:08:24Z",
      "description": "ip policy creations",
      "destinations": [
        {
          "id": "ed_31ECAy4lEvhVjVOVpbbgk2OVwm2",
          "uri": "https://api.ngrok.com/event_destinations/ed_31ECAy4lEvhVjVOVpbbgk2OVwm2"
        }
      ],
      "id": "esb_31ECAufsDIOQn3aTqRBVNW5C7VJ",
      "metadata": "{\"environment\": \"staging\"}",
      "sources": [
        {
          "type": "ip_policy_created.v0",
          "uri": "https://api.ngrok.com/event_subscriptions/esb_31ECAufsDIOQn3aTqRBVNW5C7VJ/sources/ip_policy_created.v0"
        }
      ],
      "uri": "https://api.ngrok.com/event_subscriptions/esb_31ECAufsDIOQn3aTqRBVNW5C7VJ"
    }
  ],
  "next_page_uri": null,
  "uri": "https://api.ngrok.com/event_subscriptions"
}
```
