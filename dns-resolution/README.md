# dns-resolution
Resolve a domain name to the corresponding IPv4 and IPv6 addresses if any.

Check it out on [dns.jesusalberto.me](https://dns.jesusalberto.me).

## Parameters
There is a required parameter.
| Parameter |     Value     | Expected output |
| :-------: | :-----------: | :-------------: |
|  domain   |   <domain>    |   JSON object   |

## Examples
```bash
# Example 1: both IPv4 and IPv6 addresses are available
curl -s 'https://dns.jesusalberto.me?domain=google.com' | jq
{
  "ipv4": [
    "216.58.194.174"
  ],
  "ipv6": [
    "2607:f8b0:4005:809::200e"
  ]
}

# Example 2: only one type of address available
curl -s 'https://dns.jesusalberto.me?domain=github.com' | jq
{
  "ipv4": [
    "192.30.255.113"
  ],
  "ipv6": []
}

# Example 3: neither IPv4 nor IPv6 addresses found
curl -s 'https://dns.jesusalberto.me?domain=github.error' | jq   
{
  "ipv4": [],
  "ipv6": []
}
```