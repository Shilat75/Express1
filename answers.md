# Part 1 - answers

Read the Express documentation (https://expressjs.com/en/5x/api.html) and answer in your own words.

## 1. What is inside the request object (`req`)?

האובייקט req מכיל מידע על הבקשה שהלקוח שלח לשרת, כמו כתובת ה־URL, סוג הבקשה (GET, POST וכו'), ה־headers, פרמטרים ונתונים שנשלחו בגוף הבקשה (body).

## 2. What is inside the response object (`res`)?

האובייקט res משמש את השרת כדי להחזיר תשובה ללקוח. באמצעותו אפשר לשלוח נתונים בפורמט JSON, לשלוח טקסט ולהגדיר קוד סטטוס כמו 200 להצלחה או 404 כאשר משאב לא נמצא

## 3. What does `app.use()` do?
הפקודה app.use() משמשת להפעלת Middleware – פונקציות שרצות במהלך הטיפול בבקשות לשרת.

לדוגמה, app.use(express.json()) מאפשרת לשרת לקרוא נתוני JSON שנשלחו בגוף הבקשה (req.body).
