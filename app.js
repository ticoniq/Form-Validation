// // Error Handling using try catch block 
// // const user = {email: 'janedoe@gmail.com'};

// // try {
//   // Produce a reference error 
//   // myFunction();

//   // Produce a type error 
//   // null.myFunction();

//   // SyntaxError 
//   // eval('Hello World');

//   // URIError
//   // decodeURIComponent('%');
//   // if (!user.name) {
//   //   // throw 'User has no name';
//   //   throw new SyntaxError('User has no name');
//   // }
  
// // } catch (error) {
// //   console.log(error.name);
//   // console.log(`ITS NULL STUPUD ${error.name}`);
//   // console.log(error);
//   // console.log(error.message);
// //   // console.log(error instanceof TypeError);
// // } finally {
// //   console.log('FInnally run regardless of result ');
// // }

// // console.log('Program continue...');


// // REGULAR eXPRESSTION FUNCTION 
// // let re;
// // re = /hello/;
// // re = /hello/i; // i =  case insensitive
// // re = /hello/g; // Global search

// // console.log(re);
// // console.log(re.source);

// // exec() - Return result in an array or null
// // const result = re.exec('hello world');

// // console.log(result);
// // console.log(result[0]);
// // console.log(result.index);
// // console.log(result.input);

// // test() - Returns true or false
// // const result = re.test('Hello');
// // console.log(result);

// // match() - Return result array or null
// // const str = 'Hello There';
// // const result = str.match(re);
// // console.log(result);

// // search() - Returns index of the first match if not found retuns -1
// // const str = 'Brad Hello There';
// // const result = str.search(re);
// // console.log(result);

// // replace() - Return new string with some or all matches of a pattern
// // const str = 'Hello There';
// // const newStr = str.replace(re, 'Hi');
// // console.log(newStr);

// // REgular Expression 
// let re;
// // Literal Characters
// re = /hello/;
// re = /hello/i;

// // Metacharacter Symbols
// re = /^h/i;           // Must start with
// re = / world$/i;     // Must ends with
// re = /^hello$/i;     // Must begin and end with
// re = /h.llo/i;      // Matches any ONE character
// re = /h*llo/i;      // Matches any character 0 or more times
// re = /gre?a?y/i;    // Optional character
// re = /gre?a?y\?/i;    // Escape character 

// // Bracket are character sets 
// re = /gr[ae]/i; //must be a or e
// re = /[GF]ray/; //must be G or F
// re = /[^GF]ray/; //Match anything except G or F
// re = /[A-Z]ray/; //Match any uppercase later 
// re = /[a-z]ray/; //Match any lowercase later 
// re = /[A-Za-z]ray/; //Match lowercase and uppercase later 
// re = /[1-9]ray/; //Match any digit 

// // Braces {} Quantifiers 
// re = /Hel{2}o/i; //Must occur exactly {m} amount of time
// re = /Hel{2,4}o/i; //Must occur exactly {m} amount of time
// re = /Hel{2,}o/i; //Must occur atleast {m} 

// // Parentheses () - Grouping 
// re = /([0-9]x){3}$/i;

// // Shorthand character classes
// re = /\w/; //Word character alphanumeric or _
// re = /\w+/; //+ = one or more
// re = /\W+/; //Non-word character 
// re = /\d/; //Match any digit
// re = /\d+/; //Match any digit 0 or more times
// re = /\D/; //Match any Non-digit
// re = /\s/; //Match white space
// re = /\S/; //Match non-white space
// re = /HELL/i; //word boundary
// re = /HELL\b/i; //word boundary

// // Assertions 
// re = /x(?=y)/; //Match x if only follow by y
// re = /x(?!y)/; //Match x if not follow by y

// // String to match
// const str = 'xzy'; 



// // Log Results
// const result = re.exec(str);
// console.log(result);

// function reTest(re, str) {
//   if(re.test(str)) {
//     console.log(`${str} matches ${re.source}`);
//   } else {
//     console.log(`${str} does NOT match ${re.source}`);
//   }
// }

// reTest(re, str);