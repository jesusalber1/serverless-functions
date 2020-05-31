# client-ip
Return client's public IP address.

Check it out on [ip.jesusalberto.me](https://ip.jesusalberto.me).

## Parameters
There is an optional parameter.
| Parameter |     Value     | Expected output |
| :-------: | :-----------: | :-------------: |
|     -     |       -       |   Plain text    |
|  output   |     json      |   JSON object   |

## Examples
```bash
# Option 1: Plain text
curl -s 'https://ip.jesusalberto.me'
140.82.118.4

# Option 2: JSON
curl -s 'https://ip.jesusalberto.me?output=json' | jq
{
  "ip": "140.82.118.4"
}
```