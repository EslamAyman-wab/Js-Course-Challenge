let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

/*
https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.* = this is https link 

let re = 
  /           // Start of regex
  https?      // 1. 'http' followed by optional 's' (matches 'http' or 'https')
  :\/\/       // 2. Literal '://' (escaped with backslashes)
  
  (?:         // 3. Start non-capturing group (optional subdomain)
    [-\w]+    //    - One or more hyphens/word chars (letters, numbers, underscores)
    \.        //    - Literal dot (.)
  )?          //    - Entire subdomain group is optional
  
  ([-\w]+)    // 4. Capturing group (main domain): One or more hyphens/word chars
  
  \.          // 5. Literal dot (.)
  \w+         // 6. Top-level domain (letters/numbers, e.g., 'com', 'io')
  
  (?:         // 7. Start non-capturing group (optional extended TLD)
    \.\w+     //    - Literal dot followed by more letters/numbers (e.g., '.co.uk')
  )?          //    - Entire extended TLD group is optional
  
  \/?         // 8. Optional trailing slash (/)
  .*          // 9. Any characters (for paths/queries, e.g., '/page?query=1')
  /i;         // 10. Case-insensitive flag  


*/
