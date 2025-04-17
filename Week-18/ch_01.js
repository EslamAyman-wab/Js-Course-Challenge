// This is an example IPv6 address string to test
let ip = "2001:db8:3333:4444:5555:6666:7777:8888";

// This is a regular expression (pattern) to match standard IPv6 addresses
let ipv6 = /^([0-9a-fA-F]{1,4}:){7}([0-9a-fA-F]{1,4})$/g;
/*
Breaking down this regular expression:
^                          - Start of the string
([0-9a-fA-F]{1,4}:){7}     - 7 groups of:
  [0-9a-fA-F]              - Any hexadecimal digit (0-9, a-f, A-F)
  {1,4}                    - Between 1 and 4 of these digits
  :                        - Followed by a colon
([0-9a-fA-F]{1,4})         - An 8th group (1-4 hex digits) without trailing colon
$                          - End of the string
g                          - Global flag (search for all matches)

This pattern matches standard IPv6 addresses with exactly 8 groups of 1-4 hex digits separated by colons
*/

// The commented-out version is a more complex pattern that would also match:
// - Addresses with consecutive colons (::) for zero compression
// - Addresses with fewer than 8 groups due to zero compression
// - Various valid shortened forms of IPv6 addresses

// Test if our IP address matches the IPv6 pattern
console.log(ip.match(ipv6));
