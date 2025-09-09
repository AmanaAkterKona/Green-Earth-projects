#Project Name :- Green-Earth-Projects

## 1. What is the difference between var, let, and const?
answer:- var, let and const-
# var:-

1.পুরানো সিস্টেম, শুধু ES5 এ ব্যবহার হতো।

2.এটি ফাংশন স্কোপড, মানে শুধু ফাংশনের ভেতরে সীমাবদ্ধ থাকে।

হোইস্টিং করা যায়।

3.একই নাম বারবার ব্যবহার করা যায়, এটি ফ্লেক্সিবল কিন্তু নিরাপদ নয়।

# const:-

1.নতুন সিস্টেম, (ES6) এ ব্যবহার হয়।

2.এটি ব্লক স্কোপড।

3.একবার ডিক্লেয়ার করলে আবার ডিক্লেয়ার বা ভ্যালু পরিবর্তন করা যায় না।

4.তবে অবজেক্ট বা অ্যারে হলে ভেতরের ডেটা পরিবর্তন করা যায়।

# let:-

1.এটিও নতুন সিস্টেম, (ES6) এ ব্যবহার হয়।

2.এটি ব্লক স্কোপড, মানে { } ব্রেসের ভেতরে সীমাবদ্ধ থাকে।

3.আবার ডিক্লেয়ার করা যায় না, তবে ভ্যালু পরিবর্তন করা যায়।

4.হোইস্টিং হয়, কিন্তু টেম্পোরাল ডেড জোন থাকার কারণে আগে থেকে ব্যবহার করা যায় না।





## 2. What is the difference between map(), forEach(), and filter()?
## answer:-
## forEach():-
1.শুধু loop চালায় (প্রতিটি আইটেমে গিয়ে কাজ করে)।

2.এটি কোন কিছু return করে না , মানে নতুন অ্যারে তৈরি করবে না।

3.সাধারণত শুধু প্রিন্ট বা ছোট কাজ করার জন্য ব্যবহার হয়।

4.প্রতিটি element এ গিয়ে function চালায়, কিন্তু শুধু কাজ করে, রেজাল্ট জমায় না।

# map():-

1.প্রতিটি element এর উপর কাজ করে নতুন অ্যারে return করে।

2.যখন এক অ্যারের data থেকে নতুন অ্যারে বানাতে হয়, তখন map ব্যবহার হয়।

3.সবসময় নতুন অ্যারের length আগের মতোই থাকে (শুধু values পরিবর্তিত হয়)।


# filter():-

1.প্রতিটি element এ গিয়ে শর্ত চেক করে।

2.শুধু যেগুলো condition fulfill করে, সেগুলো নিয়ে নতুন অ্যারে return করবে।

3.নতুন অ্যারের length কম বা বেশি হতে পারে, condition এর উপর নির্ভর করে।





## 3. What are arrow functions in ES6?
## answer:-
# Arrow Function হলো function লেখার ছোট এবং আধুনিক সিনট্যাক্স, এটি ES6 theke এসেছে।

1.function কীওয়ার্ড লিখতে হয় না , খুব ছোট করে লেখা যায়।

2.যদি মাত্র একটা parameter থাকে, তাহলে ব্র্যাকেট () না দিলেও চলে।

3.যদি function এর ভিতরে শুধু একটা statement থাকে, তবে { } আর return না লিখলেও হয়।

4.this keyword parent scope থেকে নেয় , normal function এর মতো আলাদা context তৈরি করে না।

5.ছোট ও পরিষ্কার কোড লেখা যায়।

6.this keyword এর ঝামেলা কমে যায় → callback function, array methods (map, filter, forEach) এ দারুণ কাজ করে।



## 4. How does destructuring assignment work in ES6?
# answer:- Destructuring হলো Object বা Array থেকে ভ্যালু বের করার একটি শর্টকাট পদ্ধতি।
আগে যেভাবে আলাদা আলাদা ভ্যারিয়েবল বানিয়ে ডেটা নিতে হতো, এখন সেটা এক লাইনে করা যায়।

1.কোড ছোট হয়।

2.পড়তে অনেক পরিষ্কার লাগে।

3.Object আর Array থেকে ডেটা বের করার কাজ সহজ হয়।



## 5. Explain template literals in ES6. How are they different from string concatenation?
# answer:- Template Literals হলো স্ট্রিং লেখার আধুনিক পদ্ধতি, যেটা ES6 theke এসেছে।
এতে **backtick ()** ব্যবহার করা হয়, আর ${ }` এর ভেতরে variable বা expression লেখা যায়।

1.Backtick (`) দিয়ে লেখা হয় ।

2.${ } এর ভেতরে সরাসরি variable বা calculation বসানো যায়।

3.Multi-line string লেখা যায় ।