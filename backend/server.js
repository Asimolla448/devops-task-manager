// ... (הקוד שלמעלה נשאר אותו דבר, יצירת ה-pool וכו')

// פונקציה חכמה לאתחול מסד הנתונים
async function initDB() {
    let retries = 5;
    while (retries > 0) {
        try {
            await pool.query(`
                CREATE TABLE IF NOT EXISTS tasks (
                    id SERIAL PRIMARY KEY,
                    title VARCHAR(255) NOT NULL
                )
            `);
            console.log("Database initialized successfully!");
            return; // סיום בהצלחה, יוצאים מהלולאה
        } catch (err) {
            console.error(`Database not ready yet. Retries left: ${retries - 1}. Error:`, err.message);
            retries -= 1;
            // המתנה של 5 שניות לפני הניסיון הבא
            await new Promise(resolve => setTimeout(resolve, 5000));
        }
    }
    
    // אם הגענו לפה, ה-DB כנראה באמת למטה. קורסים בכוונה כדי שקוברנטיס יאתחל אותנו!
    console.error("Failed to initialize database after multiple attempts. Exiting...");
    process.exit(1); 
}

// אנחנו מפעילים את השרת *רק* אחרי שה-DB אותחל בהצלחה
initDB().then(() => {
    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => {
        console.log(`Backend server running on port ${PORT}`);
    });
});

// ... (שאר הנתיבים של ה-API נשארים למטה בדיוק אותו דבר)