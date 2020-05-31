# client-useragent
Return client's User Agent.

Check it out on [ua.jesusalberto.me](https://ua.jesusalberto.me).

## Parameters
There is no parameters.
| Parameter |     Value     | Expected output |
| :-------: | :-----------: | :-------------: |
|     -     |       -       |   Plain text    |

## Examples
```bash
# Example 1: cURL default User-Agent
curl -s 'https://ua.jesusalberto.me'
"curl/7.64.1"

# Example 2: Safari User-Agent
curl -sH 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36' 'https://ua.jesusalberto.me'
"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36"
```