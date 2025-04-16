// 1. Define a phone number string with special formatting
let phone = "+(995)-123 (4567)";

// 2. Create a function to check if the phone matches a specific pattern
function result() {
  // 3. Set up a regex pattern to match:
  //    - \(d{3}\) → Exactly 3 digits inside parentheses (e.g., "(995)")
  //    - -        → Followed by a hyphen ("-")
  //    - d{3}     → Exactly 3 digits (e.g., "123")
  //    - \s       → A space character (" ")
  //    - \(d{4}\) → Exactly 4 digits inside parentheses (e.g., "(4567)")
  let answer = /\(\d{3}\)-\d{3}\s\(\d{4}\)/g;

  // 4. Check if the phone string matches the pattern and print the result
  console.log(phone.match(answer));
}

// 5. Call the function to execute the check
result();
