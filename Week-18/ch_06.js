// We're creating different URL strings to test our regular expression against
let url1 = "elzero.org"; // Simple domain
let url2 = "http://elzero.org"; // Domain with http protocol
let url3 = "https://elzero.org"; // Domain with https protocol
let url4 = "https://www.elzero.org"; // Domain with https and www
let url5 = "https://www.elzero.org:8080/articles.php?id=100&cat=topics"; // Complex URL with port and query parameters

// This is a regular expression (pattern) to match different URL formats
let re = /^(https?:\/\/)?(www\.)?\w+\.\w+(:\d+)?(\/.*)?$/g;
/*
Breaking down the regular expression piece by piece:
^               - Start of the string
(https?:\/\/)?  - Optional http:// or https:// (the 's' is optional)
(www\.)?        - Optional www. 
\w+             - One or more word characters (letters, numbers, underscores)
\.              - A literal dot
\w+             - One or more word characters (the domain extension like org, com)
(:\d+)?         - Optional colon followed by one or more digits (port number like :8080)
(\/.*)?         - Optional forward slash followed by any characters (path/query)
$               - End of the string
g               - Global flag (search for all matches)
*/

// Now we test each URL against our regular expression
console.log(url1.match(re)); // Tests "elzero.org" - should match
console.log(url2.match(re)); // Tests "http://elzero.org" - should match
console.log(url3.match(re)); // Tests "https://elzero.org" - should match
console.log(url4.match(re)); // Tests "https://www.elzero.org" - should match
console.log(url5.match(re)); // Tests the complex URL - should match
